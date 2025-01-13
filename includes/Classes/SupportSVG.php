<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class SupportSVG {
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
    private function __construct() {
        add_filter('wp_check_filetype_and_ext', [$this, 'sanitize_uploads'], 10, 4);
        add_filter('upload_mimes', [$this, 'modify_mimes']);
        add_action('init', [$this, 'add_flush_rewrite_rules']);
        add_filter('user_has_cap', [$this, 'filter_user_capabilities'], 10, 3);
        add_action('admin_head', [$this, 'add_svg_support_style']);
    }

    /**
     * Sanitize SVG uploads.
     * @param array $data
     * @param string $file
     * @param string $filename
     * @param array $mimes
     * @return array
     */
    public function sanitize_uploads($data, $file, $filename, $mimes) {
        // Check user permission
        if (!current_user_can('upload_files') || !current_user_can('upload_svg')) {
            return $data;
        }

        // Determine file type
        $filetype = wp_check_filetype($filename, $mimes);
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

        if ($ext === 'svg') {
            // Validate and sanitize SVG
            if ($filetype['ext'] !== 'svg' || $filetype['type'] !== 'image/svg+xml') {
                $data['error'] = 'Invalid file type. Only SVG files are allowed.';
                return $data;
            }

            $svg_content = file_get_contents($file['tmp_name']);
            if (!$svg_content || !$this->sanitize_svg_content($svg_content)) {
                $data['error'] = 'SVG file contains disallowed content.';
                return $data;
            }
        } elseif ($ext === 'json') {
            // Validate JSON
            $json_content = file_get_contents($file['tmp_name']);
            if (!$this->is_valid_json($json_content)) {
                $data['error'] = 'Invalid JSON file.';
                return $data;
            }
            $data['type'] = 'application/json';
            $data['ext'] = 'json';
        }

        return $data;
    }


    /**
     * Validate JSON content.
     *
     * @param string $json_content Raw JSON content.
     * @return bool True if valid, false otherwise.
     */
    private function is_valid_json($json_content) {
        json_decode($json_content);
        return json_last_error() === JSON_ERROR_NONE;
    }


    /**
     * Sanitize SVG content to remove potentially harmful elements.
     * @param string $content
     * @return string
     */
    private function sanitize_svg_content($content) {
        // Remove XML processing instructions
        $content = preg_replace('/<\?xml.*?\?>/i', '', $content);
        return $content;
    }

    /**
     * Modify MIME types to allow additional uploads.
     * @param array $existingMimes
     * @return array
     */
    public function modify_mimes($existingMimes) {

        if (! isset($existingMimes['svg'])) {
            $existingMimes['svg'] = 'image/svg+xml';
        }
        if (! isset($existingMimes['json'])) {
            $existingMimes['json'] = 'application/json';
        }
        return $existingMimes;
    }

    /**
     * Flush rewrite rules.
     */
    public function add_flush_rewrite_rules() {
        flush_rewrite_rules();
    }

    /**
     * Filter user capabilities to allow SVG uploads.
     * @param array $allcaps
     * @param array $cap
     * @param array $args
     * @return array
     */
    public function filter_user_capabilities($allcaps, $cap, $args) {
        if ($args[0] === 'upload_files' && isset($allcaps['upload_files']) && !isset($allcaps['upload_svg'])) {
            $allcaps['upload_svg'] = $allcaps['upload_files'];
        }
        return $allcaps;
    }

    /**
     * Add SVG support to media library.
     */
    public function add_svg_support_style() { ?>
        <style>
            .media-modal-content ul.attachments li.attachment img[src$=".svg"],
            .media-frame ul.attachments li.attachment img[src$=".svg"],
            table.media img[src$=".svg"] {
                width: 100% !important;
                height: auto !important;
            }
        </style>
<?php
    }
}

// Initialize the SupportSVG class.
SupportSVG::getInstance();
