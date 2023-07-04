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
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ZoloHelpers {
    use SingletonTrait;

    /**
     * Filter Blocks
     */
    public static function filter_blocks( $block ) {
        return isset( $block['visibility'] ) ? $block['visibility'] : false;
    }

    /**
     * array of object to string
     */
    public static function array_column_from_json( $arr, $handle, $json = true ) {
        $arr = $json ? json_decode( $arr, true ) : $arr;
        $arr = array_column( $arr, $handle );

        return $arr;
    }

    /**
     * Isset Check
     */
    public static function zolo_isset_check( $value, $default = '' ) {
        if ( isset( $_POST[$value] ) ) {
            return $_POST[$value];
        } else {
            return $default;
        }
    }

    /**
     * check isset & not empty and return data
     */
    public static function get_data( $arr, $key, $default = null ) {
        return isset( $arr[$key] ) && ! empty( $arr[$key] ) ? $arr[$key] : $default;
    }

    /**
     * Is Gutenberg Editor
     */
    public static function zolo_is_gutenberg_editor( $pagenow, $param ) {
        if ( $pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' ) {
            return true;
        }

        if ( $pagenow == 'themes.php' && ! empty( $param ) && str_contains( $param, 'gutenberg-edit-site' ) ) {
            return true;
        }

        return false;
    }

    protected static function get_views_path( $name ) {
        $file = ZOLO_DIR_PATH . 'views/' . $name . '.php';

        if ( file_exists( $file ) ) {
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
    public static function views( $name, $data = [] ) {
        $__file = self::get_views_path( $name );

        extract( $data );
        if ( is_readable( $__file ) ) {
            include $__file;
        }
    }

    public static function get_post_types() {

        $post_types = get_post_types(
            [
                'public'       => true,
                'show_in_rest' => true
            ],
            'objects'
        );

        $options = [];

        foreach ( $post_types as $post_type ) {
            if ( 'product' === $post_type->name ) {
                continue;
            }

            if ( 'attachment' === $post_type->name ) {
                continue;
            }

            $options[] = [
                'value' => $post_type->name,
                'label' => $post_type->label
            ];
        }

        return apply_filters( 'zolo_loop_post_types', $options );
    }

    public static function get_all_users() {
        $users   = [];
        $authors = get_users( apply_filters( 'zolo_author_arg', [] ) );
        if ( ! empty( $authors ) ) {
            foreach ( $authors as $user ) {
                $users[] = [ 'value' => $user->ID, 'label' => $user->display_name ];
            }
        }
        return $users;
    }

    public static function get_related_taxonomy() {

        $post_types = self::get_post_types();

        $return_array = [];

        foreach ( $post_types as $key => $value ) {
            $post_type = $value['value'];

            $taxonomies = get_object_taxonomies( $post_type, 'objects' );
            $data       = [];

            foreach ( $taxonomies as $tax_slug => $tax ) {
                if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
                    continue;
                }

                $data[$tax_slug] = $tax;

                $terms = get_terms( $tax_slug );

                $related_tax = [];

                if ( ! empty( $terms ) ) {
                    foreach ( $terms as $t_index => $t_obj ) {
                        $related_tax[] = [
                            'id'    => $t_obj->term_id,
                            'name'  => $t_obj->name,
                            'child' => get_term_children( $t_obj->term_id, $tax_slug )
                        ];
                    }
                    $return_array[$post_type]['terms'][$tax_slug] = $related_tax;
                }
            }

            $return_array[$post_type]['taxonomy'] = $data;
        }

        return apply_filters( 'zolo_post_loop_taxonomies', $return_array );
    }

    public static function get_all_taxonomy() {
        $post_types     = self::get_post_types_for_taxonomy();
        $taxonomies     = get_taxonomies( [], 'objects' );
        $all_taxonomies = [];
        foreach ( $taxonomies as $taxonomy => $object ) {
            if ( ! isset( $object->object_type[0] ) || ! in_array( $object->object_type[0], array_keys( $post_types ) ) || in_array( $taxonomy, self::get_excluded_taxonomy() ) ) {
                continue;
            }
            $all_taxonomies[$taxonomy] = self::get_terms_by_texonomy( $taxonomy );
        }

        return $all_taxonomies;
    }

    public static function get_post_types_for_taxonomy() {
        $post_types = get_post_types( ['public' => true, 'show_in_nav_menus' => true], 'objects' );
        $post_types = wp_list_pluck( $post_types, 'label', 'name' );
        return array_diff_key( $post_types, ['elementor_library', 'attachment'] );
    }

    public static function get_excluded_taxonomy() {
        return [
            'post_format',
            'nav_menu',
            'link_category',
            'wp_theme',
            'elementor_library_type',
            'elementor_library_type',
            'elementor_library_category',
            'product_visibility',
            'product_shipping_class'
        ];
    }

    public static function get_terms_by_texonomy( $cat ) {
        $terms = get_terms( [
            'taxonomy'   => $cat,
            'hide_empty' => true
        ] );

        $options = [];
        if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
            foreach ( $terms as $term ) {
                $options[$term->term_id] = $term->name;
            }
        }
        return $options;
    }
}
