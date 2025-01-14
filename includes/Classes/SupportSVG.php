<?php

namespace Zolo\Classes;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class SupportSVG
{
    /**
     * Singleton Instance
     */
    use SingletonTrait;

    /**
     * Singleton instance of this class
     * @var object|null
     */

    /**
     * Constructor.
     * Register hooks and actions.
     */
    private function __construct()
    {
        add_filter('upload_mimes', [$this, 'modify_upload_mime_types']);
        add_filter('wp_handle_upload_prefilter', [$this, 'sanitize_uploaded_file'], 10);
        add_action('admin_head', [$this, 'add_svg_support_style']);
        add_filter( 'safe_style_css', [$this, 'sanitize_style_css'], 10 );
    }

    /**
     * Sanitize uploaded SVG.
     *
     * @param array $file Uploaded file details.
     * @return array
     */
    public function sanitize_uploaded_file($file)
    {
        // Check user permission
        if (!current_user_can('upload_files') || !isset($file['tmp_name'])) {
            $file['error'] = esc_html__('You do not have permission to upload files.', 'zoloblocks');
            return $file; // Return file as is if permission is not granted or no file exists
        }

        $file_name   = isset($file['name']) ? $file['name'] : '';
        $wp_filetype = wp_check_filetype_and_ext($file['tmp_name'], $file_name);
        $type        = !empty($wp_filetype['type']) ? $wp_filetype['type'] : '';

        // Handle SVG files
        if ('image/svg+xml' === $type) {
            if (! $this->sanitize_svg_file($file['tmp_name'])) {
                $file['error'] = esc_html__('Sorry, the SVG file contains disallowed content.', 'zoloblocks');
                return $file; // Return the file with error if sanitization fails
            }
        }
        // Handle JSON files
        elseif ('application/json' === $type) {
            // Validate JSON content
            $json_content = file_get_contents($file['tmp_name']);
            if (!$this->is_valid_json($json_content)) {
                $file['error'] = esc_html__('Sorry, the JSON file is invalid.', 'zoloblocks');
                return $file; // Return the file with error if JSON is invalid
            }
        }

        return $file; // Return the file if everything is fine
    }



    /**
     * Validate JSON content.
     *
     * @param string $json_content Raw JSON content.
     * @return bool True if valid, false otherwise.
     */
    private function is_valid_json($json_content)
    {
        if (empty($json_content)) {
            return false;  // or true, depending on your requirements.
        }

        json_decode($json_content);
        return json_last_error() === JSON_ERROR_NONE;
    }


    /**
     * Sanitize SVG content to remove potentially harmful elements.
     * @param string $content
     * @return string
     */
    private function sanitize_svg_file($file)
    {
        $this->initialize_wp_filesystem();
        global $wp_filesystem;

        $svg_content = $wp_filesystem->get_contents($file);

        if ($this->is_gzipped($svg_content)) {
            $svg_content = gzdecode($svg_content);

            if (false === $svg_content) {
                return false;
            }
        }

        $sanitized_content = $this->sanitize_svg_content($svg_content);
        $wp_filesystem->put_contents($file, $sanitized_content);

        return true;
    }

    /**
     * Check if a string is gzipped.
     *
     * @param string $contents File contents.
     * @return bool
     */
    private function is_gzipped($contents)
    {
        return 0 === strpos($contents, "\x1f\x8b\x08");
    }

    private function sanitize_svg_content($content)
    {
        // Remove comments (both HTML and XML style).
        $content = preg_replace('/<!--(.*?)-->/s', '', $content);

        // Remove XML declaration (e.g., <?xml version="1.0" encoding="UTF-8"
        $content = preg_replace('/<\?xml.*?\?>/s', '', $content);

        // Remove doctype declaration (e.g., <!DOCTYPE svg PUBLIC ...>).
        $content = preg_replace('/<!DOCTYPE[^>]+>/s', '', $content);

        // Use wp_kses to allow only defined SVG tags and attributes.
        $allowed_html = ZoloHelpers::wp_kses_allowed_svg();
        $sanitized    = wp_kses($content, $allowed_html);
        // Minify by removing extra spaces, newlines, and tabs.
        return preg_replace('/\s+/', ' ', trim($sanitized));
    }

    /**
     * Add SVG-specific CSS properties to the allowed list.
     *
     * @param string[] $styles Existing list of allowed CSS properties.
     * @return string[] Updated list of allowed CSS properties.
     */
    public function sanitize_style_css($styles) {
        $svg_styles = [
            'fill',
            'stroke-width',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke',
            'opacity',
        ];
        $styles = array_merge($styles, $svg_styles);
        return $styles;
    }

    
    /**
     * Initializes the WordPress filesystem, making sure WP_Filesystem is available.
     *
     * @return void
     */
    private function initialize_wp_filesystem()
    {
        if (! function_exists('WP_Filesystem')) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        WP_Filesystem();
    }

    /**
     * Output CSS to make SVGs display correctly in the media library.
     *
     * This is a temporary fix until WordPress core is updated to include this
     * CSS by default.
     *
     * @return void
     */
    public function add_svg_support_style()
    {
        echo '<style>.media-modal-content ul.attachments li.attachment img[src$=".svg"],.media-frame ul.attachments li.attachment img[src$=".svg"],table.media img[src$=".svg"]{width: 100% !important;height: auto !important;}</style>';
    }

    /**
     * Modify MIME types to allow additional uploads.
     * @param array $types
     * @return array
     */
    public function modify_upload_mime_types($types)
    {

        if (! isset($types['svg'])) {
            $types['svg'] = 'image/svg+xml';
        }
        if (! isset($types['json'])) {
            $types['json'] = 'application/json';
        }
        return $types;
    }
}

// Initialize the SupportSVG class.
SupportSVG::getInstance();
