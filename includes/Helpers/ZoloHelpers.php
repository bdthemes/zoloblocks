<?php

/**
 * ZoloHelpers
 *
 * AJAX Event Handler
 *
 * @class    ZoloHelpers
 * @version  0.0.1
 * @package  zolo-helpers
 * @category Class
 */

namespace Zolo\Helpers;

use mysql_xdevapi\Statement;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Zolo helper main helper function
 */
class ZoloHelpers {
    use SingletonTrait;

    /**
     * ZoloHelpers constructor.
     */
    private function __construct() {
        add_filter('admin_body_class', [$this, 'zoloblocks_editor_body_class']);
        add_filter('body_class', [$this, 'zoloblocks_frontend_body_class']);
    }
    public function zoloblocks_editor_body_class($classes) {
        // Check if we are on editing screen in WordPress admin
        if (is_admin() && isset($_GET['action']) && $_GET['action'] === 'edit') { // phpcs:ignore
            $classes .= ' zolo-editor';
        }
        return $classes;
    }
    public function zoloblocks_frontend_body_class(array $classes) {
        $theme = wp_get_theme();
        $theme_type = wp_is_block_theme() ? 'block-theme' : 'classic-theme';
        $theme_name = $theme->get('TextDomain');
        $new_classes = ['zolo-frontend', $theme_type, $theme_name];
        $classes = array_merge($classes, $new_classes);
        return $classes;
    }
    /**
     * Filter Blocks
     */
    public static function filter_blocks($block) {
        return isset($block['visibility']) ? $block['visibility'] : false;
    }

    /**
     * array of object to string
     */
    public static function array_column_from_json($arr, $handle, $json = true) {
        $arr = $json ? json_decode($arr, true) : $arr;
        $arr = array_column($arr, $handle);

        return $arr;
    }

    /**
     * Isset Check
     */
    // public static function zolo_isset_check($value, $default = '') {
    // if (isset($_POST[$value])) {
    // return $_POST[$value];
    // } else {
    // return $default;
    // }
    // }

    /**
     * check isset & not empty and return data
     */
    public static function get_data($arr, $key, $default = null) {
        return isset($arr[$key]) && ! empty($arr[$key]) ? $arr[$key] : $default;
    }

    /**
     * Is Gutenberg Editor
     */
    public static function zolo_is_gutenberg_editor($pagenow, $param) {
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php') {
            return true;
        }

        if ($pagenow == 'themes.php' && ! empty($param) && str_contains($param, 'gutenberg-edit-site')) {
            return true;
        }

        return false;
    }

    /**
     * Get file path
     *
     * @param string $name file name.
     * @return false|string
     */
    protected static function get_views_path($name) {
        // Define the base path.
        $paths = [
            trailingslashit(ZOLO_DIR_PATH) . 'views/' . $name . '.php',
        ];

        // Check if ZOLO_PRO_DIR_PATH is defined and add it to the paths.
        if (defined('ZOLO_PRO_DIR_PATH')) {
            $paths[] = trailingslashit(ZOLO_PRO_DIR_PATH) . 'views/' . $name . '.php';
        }

        // Iterate through the paths and return the first existing file.
        foreach ($paths as $path) {
            if (file_exists($path)) {
                return $path;
            }
        }

        return false;
    }



    /**
     * Get views for front-end display
     *
     * @param string $name  it will be file name only from the view's folder.
     * @param array  $data
     * @return void
     */
    public static function views($name, $data = []) {
        $__file = self::get_views_path($name);

        extract($data);
        if (is_readable($__file)) {
            include $__file;
        }
    }

    public static function get_post_types() {
        $post_types     = get_post_types(
            [
                'public'            => true,
                'show_in_nav_menus' => true,
            ],
            'objects'
        );
        $post_types     = wp_list_pluck($post_types, 'label', 'name');
        $excluded_types = apply_filters(
            'zolo_exclude_post_type',
            [
                'attachment'        => 'Attachment',
                'elementor_library' => 'Elementor Library',
                'e-landing-page'    => 'Landing Page',
            ]
        );
        return array_diff_key($post_types, $excluded_types);
    }

    public static function get_all_users() {
        $users   = [];
        $authors = get_users(apply_filters('zolo_author_arg', []));
        if (! empty($authors)) {
            foreach ($authors as $user) {
                $users[] = [
                    'value' => $user->ID,
                    'label' => $user->display_name,
                ];
            }
        }
        return $users;
    }

    public static function get_taxonomies() {
        $get_tax_object = get_taxonomies([], 'objects');
        $exclude_tax    = self::get_excluded_taxonomy();
        foreach ($exclude_tax as $_tax) {
            unset($get_tax_object[$_tax]);
        }
        return $get_tax_object;
    }

    public static function get_all_taxonomy() {
        $post_types     = self::get_post_types();
        $taxonomies     = get_taxonomies([], 'objects');
        $all_taxonomies = [];
        foreach ($taxonomies as $taxonomy => $object) {
            if (
                ! isset($object->object_type[0]) || ! in_array($object->object_type[0], array_keys($post_types))
                || in_array($taxonomy, self::get_excluded_taxonomy())
            ) {
                continue;
            }
            $all_taxonomies[$taxonomy] = self::get_terms_by_texonomy($taxonomy);
        }

        return $all_taxonomies;
    }

    public static function get_excluded_taxonomy() {
        return apply_filters(
            'zolo_exclude_taxonomy',
            [
                'post_format',
                'nav_menu',
                'link_category',
                'wp_theme',
                'elementor_library_type',
                'elementor_library_type',
                'elementor_library_category',
                'product_visibility',
                'product_shipping_class',
                'product_type',
            ]
        );
    }

    public static function get_terms_by_texonomy($cat = 'category') {
        $terms = get_terms(
            [
                'taxonomy'   => $cat,
                'hide_empty' => true,
            ]
        );

        $options = [];
        if (! empty($terms) && ! is_wp_error($terms)) {
            foreach ($terms as $term) {
                $options[$term->term_id] = $term->name;
            }
        }

        return $options;
    }

    /**
     * Get the post thumbnail URL
     *
     * @param int    $post_id
     * @param string $size
     * @return string
     */
    public static function get_wrapper_class($settings = [], $class_name = '') {
        $wrap_class = '';

        if (isset($settings['uniqueId'])) {
            $wrap_class .= $settings['uniqueId'];
        }

        if (! empty($class_name)) {
            $wrap_class .= ' ' . $class_name;
        }

        return $wrap_class;
    }

    /**
     * Get the post thumbnail URL
     *
     * @param int    $post_id
     * @param string $size
     * @return string
     */
    public static function removeHtmlTagContents($contant, $tags) {
        if (is_array($tags)) {
            foreach ($tags as $tag) {
                $contant = preg_replace(
                    sprintf(
                        '/<%1$s\b[^>]*>(.*?)<\/%1$s>/is',
                        $tag
                    ),
                    '',
                    $contant
                );
            }
        } else {
            $contant = preg_replace('/<figure\b[^>]*>(.*?)<\/figure>/is', '', $contant);
        }

        return $contant;
    }

    /**
     * Get Pagination
     *
     * @param int    $max_pages .
     * @param array  $settings .
     * @param number $paged .
     * @return string
     */
    public static function pagination($max_pages, $settings, $paged) {
        if ($max_pages > 1) {
            $big = 9999999;
            return paginate_links(
                [
                    'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                    'format'    => 'page/%#%/',
                    'current'   => $paged,
                    'total'     => $max_pages,
                    'prev_text' => $settings['paginationPreText'] ?? 'prev',
                    'next_text' => $settings['paginationNextText'] ?? 'next',
                ]
            );
        }
    }

    /**
     * Get SVG Icon
     *
     * @param string $icon
     * @param string $class
     * @return string
     */
    public static function render_svg_html($viewBox, $path) {
        return sprintf(
            '<svg xmlns="https://www.w3.org/2000/svg" viewBox="%s" width="1em" height="1em" fill="currentColor"><path d="%s"></path></svg>',
            esc_attr($viewBox),
            esc_attr($path)
        );
    }

    /**
     * Get Allowed SVG
     *
     * @return array
     */
    public static function wp_kses_allowed_svg() {
        $defaults = wp_kses_allowed_html('post');
        $svg_args = [

            'svg' => [
                'xmlns'               => true,
                'width'               => true,
                'height'              => true,
                'viewbox'             => true,
                'fill'                => true,
                'class'               => true,
                'aria-hidden'         => true,
                'aria-labelledby'     => true,
                'role'                => true,
                'preserveaspectratio' => true,
                'version'             => true,
                'id'                  => true,
                'data-name'           => true,
                'style'               => true,
            ],
            'rect' => [
                'x'                   => true,
                'y'                   => true,
                'width'               => true,
                'height'              => true,
                'rx'                  => true,
                'ry'                  => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'stroke-dasharray'    => true,
                'stroke-dashoffset'   => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'circle' => [
                'cx'                  => true,
                'cy'                  => true,
                'r'                   => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'ellipse' => [
                'cx'                  => true,
                'cy'                  => true,
                'rx'                  => true,
                'ry'                  => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'opacity'             => true,
                'id'                  => true,
            ],
            'line' => [
                'x1'                  => true,
                'y1'                  => true,
                'x2'                  => true,
                'y2'                  => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'opacity'             => true,
                'id'                  => true,
                'data-name'           => true,
                'style'               => true,
            ],
            'path' => [
                'd'                   => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'stroke-dasharray'    => true,
                'stroke-dashoffset'   => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'polygon' => [
                'points'              => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'polyline' => [
                'points'              => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'stroke-linecap'      => true,
                'stroke-linejoin'     => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'text' => [
                'x'                   => true,
                'y'                   => true,
                'dx'                  => true,
                'dy'                  => true,
                'text-anchor'         => true,
                'font-family'         => true,
                'font-size'           => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'opacity'             => true,
                'id'                  => true,
                'style'               => true,
            ],
            'g' => [
                'id'                  => true,
                'fill'                => true,
                'stroke'              => true,
                'stroke-width'        => true,
                'opacity'             => true,
                'transform'           => true,
                'style'               => true,
            ],
            'defs' => [
                'id'                  => true,
                'style'               => true,
            ],
            'use' => [
                'href'                => true,
                'x'                   => true,
                'y'                   => true,
                'width'               => true,
                'height'              => true,
                'id'                  => true,
                'style'               => true,
            ],
            'symbol' => [
                'id'                  => true,
                'viewbox'             => true,
                'preserveaspectratio' => true,
                'style'               => true,
            ],
            'clipPath' => [
                'id'                  => true,
                'style'               => true,
            ],
            'mask' => [
                'id'                  => true,
                'x'                   => true,
                'y'                   => true,
                'width'               => true,
                'height'              => true,
                'style'               => true,
            ],
            'title' => [],
            'desc' => [],
            'iframe' => [
                'src'      => true,
                'class'   => true,
                'allow' => true,
            ],
            'style' => [
                'type' => true,
            ],
        ];

        return array_merge($defaults, $svg_args);
    }

    /**
     * Get Theme Fonts
     *
     * @return array
     */
    public static function zolo_get_theme_fonts() {
        // Retrieve global settings
        $global_settings = wp_get_global_settings();
        $global_fonts    = $global_settings['typography']['fontFamilies'] ?? [];

        if (empty($global_fonts)) {
            return [];
        }

        $theme_fonts  = [];
        $custom_fonts = [];
        $final_fonts  = [];

        // Check if theme fonts exist and are not empty
        if (isset($global_fonts['theme']) && ! empty($global_fonts['theme'])) {
            foreach ($global_fonts['theme'] as $font) {
                if (isset($font['name'])) {
                    $theme_fonts[] = $font['name'];
                }
            }
        }

        // Check if custom fonts exist and are not empty
        if (isset($global_fonts['custom']) && ! empty($global_fonts['custom'])) {
            foreach ($global_fonts['custom'] as $font) {
                if (isset($font['name'])) {
                    $custom_fonts[] = $font['name'];
                }
            }
        }

        // Merge theme and custom fonts into the final array
        $final_fonts = array_merge($theme_fonts, $custom_fonts);

        // if any font in final_fonts array includes 'system' or 'System' keyword, then keep them at the top of the array
        $system_fonts = array_filter(
            $final_fonts,
            function ($font) {
                return strpos($font, 'system') !== false || strpos($font, 'System') !== false;
            }
        );

        // final fonts array including system fonts at the top
        $final_fonts = array_merge($system_fonts, array_diff($final_fonts, $system_fonts));

        // remove duplicate fonts
        $final_fonts = array_unique($final_fonts);

        return $final_fonts;
    }

    /**
     * Generate Style String
     */
    public static function zolo_generate_style($style) {
        $css = '';
        if (isset($style['desktop']) && strlen($style['desktop']) > 0) {
            $css .= $style['desktop'];
        }
        if (isset($style['tab']) && strlen($style['tab']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 1024px) {%1$s}',
                $style['tab']
            );
        }
        if (isset($style['mobile']) && strlen($style['mobile']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 767px) {%1$s}',
                $style['mobile']
            );
        }

        if (! empty($style['customCss']) && strlen($style['customCss']) > 0) {
            $css .= $style['customCss'];
        }

        return $css;
    }

    /**
     * Get nonce id
     *
     * @return string|null
     */
    public static function ge_nonce_id() {
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        return isset($_REQUEST['zolo_nonce']) ? sanitize_text_field(wp_unslash($_REQUEST['zolo_nonce'])) : null;
    }

    /**
     * Generate nonce text
     *
     * @return string
     */
    public static function get_nonce_text() {
        return 'zolo-nonce';
    }

    /**
     * WordCount function
     *
     * @param string $phrase .
     * @param number $max_words .
     * @return string
     */
    public static function wordcount($phrase, $max_words) {
        $phrase_array = explode(' ', $phrase);
        if (count($phrase_array) > $max_words && $max_words >= 0) {
            $phrase = implode(' ', array_slice($phrase_array, 0, $max_words));
        }
        return strip_shortcodes($phrase);
    }

    /**
     * Hex color
     *
     * @param string $string .
     * @param number $steps .
     * @return false|string
     */
    public static function strToHex($string, $steps = -10) {

        if (empty($string)) {
            return false;
        }

        $hex_output = sprintf('%s', substr(md5($string), 0, 6));

        // Steps should be between -255 and 255. Negative = darker, positive = lighter.
        $steps = max(-255, min(255, $steps));

        // Split into three parts: R, G and B.
        $color_parts = str_split($hex_output, 2);
        $output      = '#';

        foreach ($color_parts as $color) {
            $color   = hexdec($color); // Convert to decimal.
            $color   = max(0, min(255, $color + $steps)); // Adjust color.
            $output .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code.
        }

        return strToUpper($output);
    }

    /**
     * default get_option() default value check
     *
     * @param string $option settings field name
     * @param string $section the section name this field belongs to
     * @param string $default default text if it's not found
     *
     * @return mixed
     */
    public static function zoloblocks_get_option($option, $section, $default = '') {

        $options = get_option($section);
        if (isset($options) && is_array($options)) {
            foreach ($options as $key => $value) {
                if ($value['name'] == $option) {
                    return $value['status'];
                }
            }
        }
        return $default;
    }


    /**
     * Get user role
     *
     * @param number $id .
     * @return mixed|null
     */
    public static function get_user_role($id) {
        $user = new \WP_User($id);
        return array_shift($user->roles);
    }

    /**
     * Get social icon
     *
     * @param string $platform .
     * @return string|null
     */
    public static function get_social_icon_svg($platform) {
        switch ($platform) {
            case 'email':
                return '
                <svg class="zolo-icon-email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                </svg>';
            case 'url':
                return '
                <svg class="zolo-icon-facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 12a9 9 0 1 0 -9.968 8.948"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h6.4"></path>
                    <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802"></path>
                    <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01"></path>
                    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                </svg>';
            case 'facebook':
                return '
				 <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>';
            case 'twitter':
                return '
					 <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
				';
            case 'linkedin':
                return '
					<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
				';
            case 'github':
                return '
					<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
				';
            case 'WordPress':
                return '
					 <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-wordpress"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 9h3" /><path d="M4 9h2.5" /><path d="M11 9l3 11l4 -9" /><path d="M5.5 9l3.5 11l3 -7" /><path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
				';
            case 'dribble':
                return '
					  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-dribbble"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 3.6c5 6 7 10.5 7.5 16.2" /><path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" /><path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" /></svg>
				';
            default:
                return null;
        }
    }

    /**
     * Get taxonomy name
     *
     * @param string $postType .
     * @param string $taxonomyType .
     * @return string
     */
    public static function get_taxonomy_name($postType = '', $taxonomyType = 'category'): string {
        // Mapping of post types to their corresponding category taxonomies.
        $categoryTaxonomyMap = [
            'product' => 'product_cat',
            'post'    => 'category',
        ];

        // Mapping of post types to their corresponding tag taxonomies.
        $tagTaxonomyMap = [
            'product' => 'product_tag',
            'post'    => 'post_tag',
        ];

        // Determine which taxonomy map to use based on the $taxonomyType.
        switch ($taxonomyType) {
            case 'tag':
                return $tagTaxonomyMap[$postType] ?? 'post_tag';
            case 'category':
            default:
                return $categoryTaxonomyMap[$postType] ?? 'category';
        }
    }

    /**
     * Get Server Current PHP Version
     */
    public static function get_php_version() {
        return phpversion();
    }

    /**
     * Get Current WP Version
     */
    public static function get_wp_version() {
        return get_bloginfo('version');
    }

    /**
     * Get Server Memory Limit Value
     */
    public static function get_memory_limit() {
        return ini_get('memory_limit');
    }

    /**
     * Get Server Max Upload Size
     */
    public static function get_max_upload_size() {
        return size_format(wp_max_upload_size());
    }

    /**
     * Get Server Max Post Size
     */
    public static function get_max_post_size() {
        return size_format(wp_max_upload_size());
    }

    /**
     * Get Server Max Execution Time
     */
    public static function get_max_execution_time() {
        return ini_get('max_execution_time');
    }

    /**
     * Get Gzip Compression Status
     */
    public static function get_gzip_status() {
        return extension_loaded('zlib') ? 'Enabled' : 'Disabled';
    }

    /**
     * Multisite Check
     */
    public static function is_multisite() {
        return is_multisite() ? 'Enabled' : 'Disabled';
    }

    /**
     * Debug Mode Check
     */
    public static function is_debug_mode() {
        return defined('WP_DEBUG') && WP_DEBUG ? 'Enabled' : 'Disabled';
    }

    /**
     * Get ZoloBlocks
     */
    public static function get_zolo_blocks() {
        $blocks_path = trailingslashit(ZOLO_DIR_PATH) . 'includes/Blocks/Blocks.php';

        if (file_exists($blocks_path)) {
            $blocks = require $blocks_path;

            if (is_array($blocks)) {
                // sort blocks by title in ascending order except the block which name is 'container', it will be at the top
                uasort(
                    $blocks,
                    function ($a, $b) {
                        if ($a['name'] === 'container') {
                            return -1;
                        }
                        if ($b['name'] === 'container') {
                            return 1;
                        }
                        return strcasecmp($a['name'], $b['name']);
                    }
                );
            }

            return $blocks;
        }
    }

    /**
     * Get Zolo Extensions
     */
    public static function get_zolo_extensions() {
        $extensions = trailingslashit(ZOLO_DIR_PATH) . 'includes/Extensions/extensions.php';
        if (file_exists($extensions)) {
            return require $extensions;
        }
    }

    /**
     * Zolo Extension Status
     */
    public static function zolo_extensions() {
        $extension_options = get_option('zolo_extensions_settings');
        $extensions = [];

        if (is_array($extension_options)) {
            foreach ($extension_options as $value) {
                if (isset($value['name']) && isset($value['status'])) {
                    $name = sanitize_text_field($value['name']);
                    $status = sanitize_text_field($value['status']);

                    $extensions[$name] = $status;
                }
            }
        }

        return $extensions;
    }


    /**
     * Check zolo extension is enabled or not
     */
    public static function is_extension_enabled($extension) {
        $extensions = self::zolo_extensions();
        return isset($extensions[$extension]) ? $extensions[$extension] : false;
    }


    /**
     * 	 * Get the paged Query.
     *
     * @param Object $query .
     * @return int .
     */
    public static function get_paged($query) {

        global $paged;

        // Check the 'paged' query.
        $queryPaged = $query->get('paged');

        if (is_numeric($queryPaged)) {
            return $queryPaged;
        }

        // Check the 'page' query.
        $queryPage = $query->get('page');

        if (is_numeric($queryPage)) {
            return $queryPage;
        }

        // Check the $paged global?
        if (is_numeric($paged)) {
            return $paged;
        }

        return 0;
    }

    /**
     * ZoloBlocks and Extensions
     */
    public static function zolo_blocks_extensions_count() {
        // Get blocks and extensions settings
        $blocks     = get_option('zolo_blocks_settings', self::get_zolo_blocks());
        $extensions = get_option('zolo_extensions_settings', self::get_zolo_extensions());

        // Filter blocks and extensions
        $total_blocks    = array_filter($blocks, fn($block) => !isset($block['is_child']) || !$block['is_child']);
        $used_blocks     = array_filter($total_blocks, fn($block) => !empty($block['status']));
        $used_extensions = array_filter($extensions, fn($extension) => !empty($extension['status']));

        // Return counts
        return [
            'total'             => count($total_blocks) + count($extensions),
            'total_blocks'      => count($total_blocks),
            'used_blocks'       => count($used_blocks),
            'total_extensions'  => count($extensions),
            'used_extensions'   => count($used_extensions),
        ];
    }

    /**
     *  Extract settings keys .
     *
     * @param array $settings .
     * @param array $keys .
     * @return array .
     */
    public static function extract_settings_keys($settings, $keys) {
        $result = [];
        foreach ($keys as $key) {
            if (isset($settings[$key])) {
                $result[$key] = $settings[$key];
            }
        }
        return $result;
    }
}
