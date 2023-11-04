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

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( !defined('ABSPATH') ) {
    exit;
}

class ZoloHelpers {
    use SingletonTrait;

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
    public static function zolo_isset_check($value, $default = '') {
        if (isset($_POST[$value])) {
            return $_POST[$value];
        } else {
            return $default;
        }
    }

    /**
     * check isset & not empty and return data
     */
    public static function get_data($arr, $key, $default = null) {
        return isset($arr[$key]) && !empty($arr[$key]) ? $arr[$key] : $default;
    }

    /**
     * Is Gutenberg Editor
     */
    public static function zolo_is_gutenberg_editor($pagenow, $param) {
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php') {
            return true;
        }

        if ($pagenow == 'themes.php' && !empty($param) && str_contains($param, 'gutenberg-edit-site')) {
            return true;
        }

        return false;
    }

    protected static function get_views_path($name) {
        $file = ZOLO_DIR_PATH . 'views/' . $name . '.php';

        if (file_exists($file)) {
            return $file;
        }

        return false;
    }

    /**
     * Get views for front-end display
     *
     * @param string $name  it will be file name only from the view's folder.
     * @param array $data
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
        $post_types = get_post_types(
            [
                'public'            => true,
                'show_in_nav_menus' => true,
            ],
            'objects'
        );
        $post_types     = wp_list_pluck($post_types, 'label', 'name');
        $excluded_types = apply_filters('zolo_exclude_post_type', [
            'attachment'        => 'Attachment',
            'elementor_library' => 'Elementor Library',
            'e-landing-page'    => 'Landing Page',
        ]);
        return array_diff_key($post_types, $excluded_types);
    }

    public static function get_all_users() {
        $users   = [];
        $authors = get_users(apply_filters('zolo_author_arg', []));
        if (!empty($authors)) {
            foreach ($authors as $user) {
                $users[] = array('value' => $user->ID, 'label' => $user->display_name);
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

    public static function get_all_taxonomy()
    {
        $post_types     = self::get_post_types();
        $taxonomies     = get_taxonomies([], 'objects');
        $all_taxonomies = [];
        foreach ($taxonomies as $taxonomy => $object) {
            if (
                !isset($object->object_type[0]) || !in_array($object->object_type[0], array_keys($post_types))
                || in_array($taxonomy, self::get_excluded_taxonomy())
            ) {
                continue;
            }
            $all_taxonomies[$taxonomy] = self::get_terms_by_texonomy($taxonomy);
        }

        return $all_taxonomies;
    }

    public static function get_excluded_taxonomy() {
        return apply_filters('zolo_exclude_taxonomy', [
            'post_format',
            'nav_menu',
            'link_category',
            'wp_theme',
            'elementor_library_type',
            'elementor_library_type',
            'elementor_library_category',
            'product_visibility',
            'product_shipping_class',
            'product_type'
        ]);
    }

    public static function get_terms_by_texonomy($cat = 'category') {
        $terms = get_terms([
            'taxonomy'   => $cat,
            'hide_empty' => true,
        ]);

        $options = [];
        if (!empty($terms) && !is_wp_error($terms)) {
            foreach ($terms as $term) {
                $options[$term->term_id] = $term->name;
            }
        }

        return $options;
    }

    public static function get_wrapper_class($settings = [], $class_name = '') {
        $wrap_class = '';

        if (isset($settings['uniqueId'])) {
            $wrap_class .= $settings['uniqueId'];
        }

        if (!empty($class_name)) {
            $wrap_class .= ' ' . $class_name;
        }

        return $wrap_class;
    }

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

    public static function pagination($max_pages) {
        global $paged;

        if (!empty(get_query_var('page')) || !empty(get_query_var('paged'))) {
            $paged = is_front_page() ? absint(get_query_var('page')) : absint(get_query_var('paged'));
        } else {
            $paged = 1;
        }

        if ($max_pages > 1) {
            $big = 9999999;
            return paginate_links(array(
                'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                'format'    => '?paged=%#%',
                'current'   => $paged,
                'total'     => $max_pages,
                'prev_text' => sprintf('<span>%1$s</span>', __('prev', 'zolo-blocks')),
                'next_text' => sprintf('<span>%1$s</span>', __('next', 'zolo-blocks')),
            ));
        }
    }
}
