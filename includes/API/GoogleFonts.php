<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use WP_REST_Response;
use WP_Error;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Google Fonts API
 *
 * Proxies the WordPress Google Fonts collection endpoint
 * and caches the result using transients.
 *
 * @package Zolo
 * @since 2.4.0
 */
class GoogleFonts {

    use SingletonTrait;

    /**
     * Remote URL for the Google Fonts collection.
     */
    const FONTS_URL = 'https://s.w.org/images/fonts/wp-7.0/collections/google-fonts-with-preview.json';

    /**
     * Transient key for caching.
     */
    const CACHE_KEY = 'zolo_google_fonts_collection';

    /**
     * Cache duration in seconds (7 days).
     */
    const CACHE_DURATION = 604800;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * Register REST API route
     */
    public function register_routes() {
        register_rest_route(
            'zolo/v1',
            '/google-fonts',
            [
                'methods'             => 'GET',
                'callback'            => [$this, 'get_google_fonts'],
                'permission_callback' => function () {
                    return current_user_can('edit_posts');
                },
            ]
        );
    }

    /**
     * Get Google Fonts collection
     *
     * @return WP_REST_Response|WP_Error
     */
    public function get_google_fonts() {
        // Try to get cached data first
        $cached = get_transient(self::CACHE_KEY);

        if ($cached !== false) {
            return new WP_REST_Response($cached, 200);
        }

        // Fetch from remote
        $response = wp_remote_get(self::FONTS_URL, [
            'timeout'   => 30,
            'sslverify' => true,
        ]);

        if (is_wp_error($response)) {
            return new WP_Error(
                'fetch_failed',
                __('Failed to fetch Google Fonts collection.', 'zoloblocks'),
                ['status' => 500]
            );
        }

        $status_code = wp_remote_retrieve_response_code($response);
        if ($status_code !== 200) {
            return new WP_Error(
                'fetch_failed',
                __('Google Fonts endpoint returned an error.', 'zoloblocks'),
                ['status' => $status_code]
            );
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
            return new WP_Error(
                'invalid_response',
                __('Invalid response from Google Fonts endpoint.', 'zoloblocks'),
                ['status' => 500]
            );
        }

        // Cache the data
        set_transient(self::CACHE_KEY, $data, self::CACHE_DURATION);

        return new WP_REST_Response($data, 200);
    }
}
