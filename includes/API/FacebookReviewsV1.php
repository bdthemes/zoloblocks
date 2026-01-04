<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('FacebookReviewsV1')) {

    /**
     * FacebookReviewsV1 Class
     *
     * @since 1.0.0
     */
    class FacebookReviewsV1 {

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
            register_rest_route('zolo/v1', '/facebook-reviews', [
                'methods'  => 'GET',
                'callback' => [$this, 'get_facebook_reviews'],
                'permission_callback' => '__return_true',
                'args' => [
                    'reviews_per_page' => [
                        'default' => 6,
                        'sanitize_callback' => 'absint',
                    ],
                ],
            ]);
        }

        /**
         * Get Facebook Reviews
         *
         * @param WP_REST_Request $request The request object.
         * @return WP_REST_Response|WP_Error
         */
        public function get_facebook_reviews($request) {
            $reviews_per_page = $request->get_param('reviews_per_page') ? $request->get_param('reviews_per_page') : 6;
            
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
            $cache_key = 'zolo_facebook_reviews_' . md5($page_id . $reviews_per_page);
            $cached_data = get_transient($cache_key);

            if ($cached_data !== false) {
                return rest_ensure_response($cached_data);
            }

            // Fetch reviews from Facebook Graph API
            $reviews_url = sprintf(
                'https://graph.facebook.com/v18.0/%s/ratings?fields=id,created_time,recommendation_type,review_text,reviewer{id,name,picture}&access_token=%s&limit=%d',
                urlencode($page_id),
                urlencode($access_token),
                $reviews_per_page
            );

            $reviews_response = wp_remote_get($reviews_url, [
                'timeout' => 15,
            ]);

            if (is_wp_error($reviews_response)) {
                return new \WP_Error(
                    'api_error',
                    $reviews_response->get_error_message(),
                    ['status' => 500]
                );
            }

            $reviews_data = json_decode(wp_remote_retrieve_body($reviews_response), true);

            if (isset($reviews_data['error'])) {
                return new \WP_Error(
                    'facebook_api_error',
                    $reviews_data['error']['message'],
                    ['status' => 400]
                );
            }

            // Prepare response
            $response_data = [
                'reviews' => isset($reviews_data['data']) ? $reviews_data['data'] : [],
                'page_id' => $page_id,
            ];

            // Cache for 1 hour
            set_transient($cache_key, $response_data, HOUR_IN_SECONDS);

            return rest_ensure_response($response_data);
        }
    }
}
