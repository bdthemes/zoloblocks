<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

use \WP_Query;

class GetPostsV1 {

    use SingletonTrait;

    public function __construct() {
        add_action("rest_api_init", [$this, 'register_Posts_route']);
    }


    public function register_Posts_route() {
        register_rest_route('zolo/v1', 'posts', [
            'methods'             => 'POST',
            'callback'            => [$this, 'get_all_posts'],
            'permission_callback' => function () {
                return true;
            }
        ]);
    }

    public function get_all_posts($data) {
        if (!wp_verify_nonce($data['zolo_nonce'], 'zolo-nonce')) {
            wp_send_json_error(esc_html__('Session Expired!!', 'zolo-blocks'));
        }

        $results = self::zolo_posts_query($data['postQuery']);

        if (!empty($results["posts"])) {
            wp_send_json_success($results);
        } else {
            wp_send_json_error("no post found");
        }
    }

    public static function zolo_get_post_args($data) {
        $excluded_ids   = null;
        $showPagination = !empty($data['showPagination']) && $data['showPagination'] == 'true' ? true : false;
        $args           = [
            'post_status'    => 'publish',
            'post_type'      => isset($data['postType']) ? $data['postType'] : 'post',
            'orderby'        => isset($data['postOrderby']) ? $data['postOrderby'] : 'date',
            'order'          => isset($data['postOrder']) ? $data['postOrder'] : 'desc',
            'posts_per_page' => (int) isset($data['postPerPage']) ? $data['postPerPage'] : 6,
        ];

        if (isset($data['postAuthors']) && !empty($data['postAuthors'])) {
            $args['author__in'] = wp_list_pluck($data['postAuthors'], 'value');
        }


        if (isset($data['postInclude']) && !empty($data['postInclude'])) {
            $post_ids         = explode(',', $data['postInclude']);
            $post_ids         = array_map('trim', $post_ids);
            $args['post__in'] = $post_ids;
            if ($excluded_ids != null && is_array($excluded_ids)) {
                $args['post__in'] = array_diff($post_ids, $excluded_ids);
            }
        }

        if ($showPagination) {
            $_paged        = is_front_page() ? "page" : "paged";
            $args['paged'] = get_query_var($_paged) ? absint(get_query_var($_paged)) : 1;
        }

        if (isset($data['postTaxonomies']) && !empty($data['postTaxonomies'])) {
            foreach ($data['postTaxonomies'] as $index => $texonomy) {
                if (!empty($texonomy['options'])) {
                    $args['tax_query'][] = [
                        'taxonomy' => $texonomy['name'],
                        'field'    => 'term_id',
                        'terms'    => wp_list_pluck($texonomy['options'], 'value'),
                    ];
                }
            }
        }

        if (isset($data['postExclude']) || isset($data['postOffset'])) {

            $excluded_ids = [];
            if ($data['postExclude']) {
                $excluded_ids = explode(',', $data['postExclude']);
                $excluded_ids = array_map('trim', $excluded_ids);
            }

            $offset_posts = [];
            if ($data['postOffset']) {
                $_temp_args = $args;
                unset($_temp_args['paged']);
                $_temp_args['posts_per_page'] = $data['postOffset'];
                $_temp_args['fields']         = 'ids';
                $offset_posts                 = get_posts($_temp_args);
            }

            $excluded_post_ids    = array_merge($offset_posts, $excluded_ids);
            $args['post__not_in'] = array_unique($excluded_post_ids);
        }

        return apply_filters('zolo_post_args', $args);
    }

    public static function zolo_posts_query($data) {

        $results       = [];
        $args          = self::zolo_get_post_args($data);
        $loop          = new \WP_Query($args);
        $postThumbnail = !empty($data['postThumbnail']) ? $data['postThumbnail'] : '';

        if ($loop->have_posts()) {

            while ($loop->have_posts()) {
                $loop->the_post();
                $post_id  = get_the_ID();

                // $category_terms_list = get_the_terms($post_id, 'category');
                // $tag_terms_list      = get_the_terms($post_id, 'post_tag');
                // $category_terms      = wp_list_pluck($category_terms_list, 'name');
                // $tag_terms           = wp_list_pluck($tag_terms_list, 'name');

                $content              = get_post_field('post_content', get_the_ID());
                $post                 = [];
                $post['ID']           = $post_id;
                $post['title']        = get_the_title();
                $post["thumbnail"]    = get_the_post_thumbnail($post_id, $postThumbnail);
                $post['permalink']    = get_permalink();
                $post['excerpt']      = wp_strip_all_tags(get_the_excerpt());
                $post['content']      = wp_strip_all_tags(get_the_content());
                $post['date']         = get_the_date();
                $post['reading_time'] = self::content_reading_time($content);
                $post['categories']   = self::zolo_get_terms($post_id, 'category');
                $post['tags']         = self::zolo_get_terms($post_id, 'post_tag');
                $post["author"]       = get_the_author();
                $post["author_link"]  = get_the_author_link();
                $post["avatar"]       = get_avatar(get_the_author_meta('ID'), 50);
                $results[]            = $post;
            }

            wp_reset_postdata();
        }

        return [
            "total_page" => $loop->max_num_pages,
            'posts'      => $results
        ];
    }

    public static function zolo_get_terms($post_id, $taxnomy_name) {
        $terms    = [];
        $taxTerms = wp_get_object_terms($post_id, $taxnomy_name);
        if (!empty($taxTerms)) {
            foreach ($taxTerms as $taxTerm) {
                $terms[] = sprintf('<a  href="%s">%s</a>', get_term_link($taxTerm), $taxTerm->name);
            }
        }
        return $terms;
    }

    public static function content_reading_time($content) {
        // Set the average reading speed in words per minute
        $reading_speed = 200;
        // Calculate the word count of the content
        $word_count = str_word_count(wp_strip_all_tags($content));
        // Calculate the reading time in minutes
        $reading_time = round($word_count / $reading_speed);
        // Set a minimum reading time of 1 minute
        if ($reading_time < 1) {
            $reading_time = 1;
        }

        return $reading_time;
    }
}
