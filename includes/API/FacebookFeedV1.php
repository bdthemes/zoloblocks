<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('FacebookFeedV1')) {

    /**
     * FacebookFeedV1 Class
     *
     * @since 1.0.0
     */
    class FacebookFeedV1 {

        use SingletonTrait;

        /**
         * Constructs a new instance.
         */
        public function __construct() {
            add_action('rest_api_init', [$this, 'register_routes']);
        }

        /**
         * Register REST API routes
         */
        public function register_routes() {
            register_rest_route('zolo/v1', '/facebook-feed', [
                'methods'  => 'GET',
                'callback' => [$this, 'get_facebook_feed'],
                'permission_callback' => '__return_true',
                'args' => [
                    'posts_per_page' => [
                        'default' => 6,
                        'sanitize_callback' => 'absint',
                    ],
                ],
            ]);
        }

        /**
         * Get Facebook Feed
         *
         * @param WP_REST_Request $request The request object.
         * @return WP_REST_Response|WP_Error
         */
        public function get_facebook_feed($request) {
            $posts_per_page = $request->get_param('posts_per_page') ? $request->get_param('posts_per_page') : 6;
            
            // Get Facebook credentials from WordPress options
            $page_id = get_option('zolo_facebook_page_id', '');
            $access_token = get_option('zolo_facebook_access_token', '');

            // Check if credentials are set
            if (empty($page_id) || empty($access_token)) {
                return new \WP_Error(
                    'missing_credentials',
                    __('Facebook Page ID or Access Token is not configured. Please configure them in ZoloBlocks Dashboard > API Settings.', 'zoloblocks'),
                    ['status' => 400]
                );
            }

            // Check for cached data
            $cache_key = 'zolo_facebook_feed_' . md5($page_id . $posts_per_page);
            $cached_data = get_transient($cache_key);

            if ($cached_data !== false) {
                return rest_ensure_response($cached_data);
            }

            // Fetch page info
            $page_info_url = sprintf(
                'https://graph.facebook.com/v18.0/%s?fields=name,picture&access_token=%s',
                urlencode($page_id),
                urlencode($access_token)
            );

            $page_response = wp_remote_get($page_info_url, [
                'timeout' => 15,
            ]);

            if (is_wp_error($page_response)) {
                return new \WP_Error(
                    'api_error',
                    $page_response->get_error_message(),
                    ['status' => 500]
                );
            }

            $page_data = json_decode(wp_remote_retrieve_body($page_response), true);

            if (isset($page_data['error'])) {
                return new \WP_Error(
                    'facebook_api_error',
                    $page_data['error']['message'],
                    ['status' => 400]
                );
            }

            // Fetch posts
            $posts_url = sprintf(
                'https://graph.facebook.com/v18.0/%s/posts?fields=id,message,created_time,full_picture,reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=%d&access_token=%s',
                urlencode($page_id),
                $posts_per_page,
                urlencode($access_token)
            );

            $posts_response = wp_remote_get($posts_url, [
                'timeout' => 15,
            ]);

            if (is_wp_error($posts_response)) {
                return new \WP_Error(
                    'api_error',
                    $posts_response->get_error_message(),
                    ['status' => 500]
                );
            }

            $posts_data = json_decode(wp_remote_retrieve_body($posts_response), true);

            if (isset($posts_data['error'])) {
                return new \WP_Error(
                    'facebook_api_error',
                    $posts_data['error']['message'],
                    ['status' => 400]
                );
            }

            // Format the response
            $response = [
                'page_name' => $page_data['name'] ?? $page_id,
                'page_avatar' => $page_data['picture']['data']['url'] ?? '',
                'posts' => $posts_data['data'] ?? [],
            ];

            // Cache the data for 1 hour
            set_transient($cache_key, $response, HOUR_IN_SECONDS);

            return rest_ensure_response($response);
        }

        /**
         * Clear Facebook feed cache
         */
        public static function clear_cache() {
            global $wpdb;
            $wpdb->query(
                "DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_zolo_facebook_feed_%' OR option_name LIKE '_transient_timeout_zolo_facebook_feed_%'"
            );
        }
    }
}
