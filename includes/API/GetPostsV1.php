<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

use \WP_Query;

class GetPostsV1
{
    use SingletonTrait;

    public function __construct()
    {
        add_action("rest_api_init", [$this, 'register_Posts_route']);
    }


    public function register_Posts_route()
    {
        register_rest_route('zolo/v1', 'posts', [
            'methods'             => 'POST',
            'callback'            => [$this, 'get_all_posts'],
            'permission_callback' => function () {
                return true;
            }
        ]);
    }

    public function get_all_posts($data)
    {
        $results = self::zolo_posts_query($data);

        if (!empty($results["posts"])) {
            wp_send_json_success($results);
        } else {
            wp_send_json_error("no post found");
        }
    }

    public static function zolo_posts_query($data)
    {

        $results = [];
        // $excluded_ids = null;
        // $showPagination = $data['showPagination'] == 'true' ? true : false;
        $args = [
            'post_status'    => 'publish',
            'post_type'      => 'post',
            // 'orderby'        => isset($data['orderby']) ? $data['orderby'] : 'date',
            // 'order'          => isset($data['order']) ? $data['order'] : 'desc',
            // 'offset'         => isset($data['offset']) ? $data['offset'] : 0
        ];



        $loop = new WP_Query($args);

        if ($loop->have_posts()) {

            while ($loop->have_posts()) {
                $loop->the_post();

                $post = [];
                $post_id  = get_the_ID();

                $post['id']               = $post_id;
                $post['title']            = get_the_title();
                $post["thumbnail"]        = get_the_post_thumbnail($post_id);
                $post['permalink']        = get_permalink();
                $post['excerpt']          = strip_tags(get_the_content());
                $post['excerpt_full']     = strip_tags(get_the_excerpt());
                $post['time']             = get_the_date();


                $results[] = $post;
            }

            wp_reset_postdata();
        }

        return [
            "total_page" => $loop->max_num_pages,
            'posts' => $results
        ];
    }
}
