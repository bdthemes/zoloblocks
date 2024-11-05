<?php

namespace Zolo\LoopBuilder;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('LoopBuilder')) {

    /**
     * Class LoopBuilder
     *
     * @package Zolo
     */
    class LoopBuilder
    {
        use SingletonTrait;

        /**
         * Constructor
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', [$this, 'register_loop_template_post_type']);
        }

        public function register_loop_template_post_type()
        {
            $this->create_loop_template_cpt();
        }

        public function create_loop_template_cpt()
        {
            $labels = array(
                'name'                  => _x('Loop Templates', 'Post Type General Name', 'zoloblocks'),
                'singular_name'         => _x('Loop Template', 'Post Type Singular Name', 'zoloblocks'),
                'menu_name'             => __('Loop Templates', 'zoloblocks'),
                'name_admin_bar'        => __('Loop Template', 'zoloblocks'),
                'archives'              => __('Loop Template Archives', 'zoloblocks'),
                'attributes'            => __('Loop Template Attributes', 'zoloblocks'),
                'parent_item_colon'     => __('Parent Loop Template:', 'zoloblocks'),
                'all_items'             => __('All Loop Templates', 'zoloblocks'),
                'add_new_item'          => __('Add New Loop Template', 'zoloblocks'),
                'add_new'               => __('Add New', 'zoloblocks'),
                'new_item'              => __('New Loop Template', 'zoloblocks'),
                'edit_item'             => __('Edit Loop Template', 'zoloblocks'),
                'update_item'           => __('Update Loop Template', 'zoloblocks'),
                'view_item'             => __('View Loop Template', 'zoloblocks'),
                'view_items'            => __('View Loop Templates', 'zoloblocks'),
                'search_items'          => __('Search Loop Templates', 'zoloblocks'),
                'not_found'             => __('Not found', 'zoloblocks'),
                'not_found_in_trash'    => __('Not found in Trash', 'zoloblocks'),
                'featured_image'        => __('Featured Image', 'zoloblocks'),
                'set_featured_image'    => __('Set featured image', 'zoloblocks'),
                'remove_featured_image' => __('Remove featured image', 'zoloblocks'),
                'use_featured_image'    => __('Use as featured image', 'zoloblocks'),
                'insert_into_item'      => __('Insert into Loop Template', 'zoloblocks'),
                'uploaded_to_this_item' => __('Uploaded to this Loop Template', 'zoloblocks'),
                'items_list'            => __('Loop Templates list', 'zoloblocks'),
                'items_list_navigation' => __('Loop Templates list navigation', 'zoloblocks'),
                'filter_items_list'     => __('Filter Loop Templates list', 'zoloblocks'),
            );

            $args = array(
                'labels'                => $labels,
                'public'                => true,
                'capability_type'       => 'post',
                'map_meta_cap'          => true,
                'menu_position'         => 5,
                'menu_icon'             => 'dashicons-admin-post',
                'hierarchical'          => false,
                'rewrite'               => array('slug' => 'loop_template', 'with_front' => false),
                'query_var'             => true,
                'delete_with_user'      => true,
                'supports'              => array('editor', 'title'),
                'show_in_rest'          => true,
            );
            register_post_type('loop-template', $args);
        }

        public static function get_select_value($value, $is_multi = false)
        {
            if (empty($value)) {
                return '';
            }

            if (is_string($value)) {
                return $value;
            }


            if ($is_multi && is_array($value)) {
                return array_column($value, 'value');
            }

            if (!empty($value['value'])) {
                return $value['value'];
            }

            return '';
        }

        public static function get_tax_query($params)
        {
            $tax_query = [];
            foreach ($params as $value) {
                $tax_query_args = $value['taxonomies'] ?? [];
                $operator = self::get_select_value($tax_query_args['operator'] ?? '');
                $taxonomy = self::get_select_value($tax_query_args['taxonomy'] ?? '');
                $terms = self::get_select_value($tax_query_args['terms'] ?? [], true);
                if (!empty($taxonomy) && !empty($terms)) {
                    $tax_query[] = [
                        'taxonomy' => $taxonomy,
                        'field' => 'term_id',
                        'terms' => $terms,
                        'include_children' => isset($tax_query_args['includeChildren']) ? (bool)$tax_query_args['includeChildren'] : false,
                        'operator' => $operator,  // Default to 'IN' for operator
                    ];
                }
            }
            return $tax_query;
        }

        public static function get_meta_query($params)
        {
            $meta_query = [];
            foreach ($params as $value) {
                $meta_query_args = $value['metaQuery'] ?? [];
                $key = self::get_select_value($meta_query_args['metaKey'] ?? '');
                $value = self::get_select_value($meta_query_args['metaValue'] ?? '');
                $compare = self::get_select_value($meta_query_args['metaComparison'] ?? '=');
                if (!empty($key) && !empty($value)) {
                    $meta_query[] = [
                        'key' => $key,
                        'value' => $value,
                        'compare' => $compare,
                    ];
                }
            }
            return $meta_query;
        }

        public static function get_date_query($params)
        {
            $date_query = [];
            foreach ($params as $value) {
                $date_query_args = $value['dateQuery'] ?? [];
                $year = self::get_select_value($date_query_args['year'] ?? '');
                $month = self::get_select_value($date_query_args['month'] ?? '');
                $day = self::get_select_value($date_query_args['day'] ?? '');
                $compare = self::get_select_value($date_query_args['compare'] ?? '');
                if (!empty($year) && !empty($month) && !empty($day)) {
                    $date_query[] = [
                        'year' => $year,
                        'month' => $month,
                        'day' => $day,
                        'compare' => $compare,
                    ];
                }
            }
            return $date_query;
        }

        public static function build_post_query_args($query)
        {
            $default_posts_per_page = get_option('posts_per_page');
            $pagination_page = isset($query['page']) ? (int)$query['page'] : 1;
            $paged = get_query_var('paged') ?: ($_GET['zolo_query_page'] ?? 1);
            $paged = ($pagination_page > 1 && $paged == 1) ? $pagination_page : $paged;

            $args = [
                'post__in'              => self::get_select_value($query['postIn'] ?? [], true),
                'post_parent__in'       => self::get_select_value($query['parentIn'] ?? [], true),
                'post__not_in'          => self::get_select_value($query['postNotIn'] ?? [], true),
                'post_parent__not_in'   => self::get_select_value($query['parentNotIn'] ?? [], true),
                'author__in'            => self::get_select_value($query['authorIn'] ?? [], true),
                'author__not_in'        => self::get_select_value($query['authorNotIn'] ?? [], true),
                'post_type'             => self::get_select_value($query['postType'] ?? [], true),
                'post_status'           => self::get_select_value($query['postStatus'] ?? [], true),
                'posts_per_page'        => $query['perPage'] ?? $default_posts_per_page,
                'ignore_sticky_posts'   => !empty($query['ignoreSticky']),
                'offset'                => $query['offset'] ?? 0,
                'paged'                 => $paged,
            ];

            if (!empty($query['orderBy'])) {
                $args['orderby'] = $query['orderBy'];
                $args['order'] = $query['order'] ?? 'ASC';
            }

            $tax_query = self::get_tax_query($query['taxQuery'] ?? []);
            if (!empty($tax_query)) {
                $args['tax_query'] = count($tax_query) == 1 ? $tax_query : ['relation' => $query['taxQueryRelation'] ?? 'OR'] + $tax_query;
            }
           
            $meta_query = self::get_meta_query($query['metaQuery'] ?? []);
            if (!empty($meta_query)) {
                $args['meta_query'] = count($meta_query) == 1 ? $meta_query : ['relation' => $query['metaQueryRelation'] ?? 'OR'] + $meta_query;
            }

            $date_query = self::get_date_query($query['dateQuery'] ?? []);
            if (!empty($date_query)) {
                $args['date_query'] = count($date_query) == 1 ? $date_query : ['relation' => $query['dateQueryRelation'] ?? 'OR'] + $date_query;
            }
           
            if (!empty($query['commentsNumber'])) {
                $args['comment_count'] = [
                    'value' => $query['commentsNumber'],
                    'compare' => $query['commentsCompare'] ?? '=',
                ];
            }

            if (!empty($query['password'])) {
                switch ($query['password']) {
                    case "yes":
                        $args['has_password'] = true;
                        break;
                    case "no":
                        $args['has_password'] = false;
                        break;
                    case "password":
                        $args['post_password'] = $query['passwordValue'] ?? '';
                        break;
                }
            }

            if (!empty($query['searchValue'])) {
                $query_args['s'] = $query['searchValue'];
            }
            
            if(!empty($query['mimeTypes'])) {
                $args['post_mime_type'] = self::get_select_value($query['mimeTypes'] ?? [], true);
            }
           
            return array_filter($args);
        }
    }
}
