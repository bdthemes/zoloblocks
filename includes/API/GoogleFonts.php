<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use WP_Font_Library;
use WP_REST_Response;
use WP_Error;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Google Fonts API
 *
 * Exposes the Google Fonts collection that WordPress core registers with the
 * Font Library, and caches the result using transients. The remote request and
 * its sanitization are handled by core, so no third-party asset host is
 * contacted by this plugin directly.
 *
 * @package Zolo
 * @since 2.4.0
 */
class GoogleFonts {

    use SingletonTrait;

    /**
     * Slug of the font collection registered by WordPress core.
     */
    const COLLECTION_SLUG = 'google-fonts';

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
        if (! get_option('zolo_allow_remote_google_fonts_catalog', false)) {
            return new WP_REST_Response(['font_families' => []], 200);
        }

        // Try to get cached data first
        $cached = get_transient(self::CACHE_KEY);

        if ($cached !== false) {
            return new WP_REST_Response($cached, 200);
        }

        // The Font Library ships with WordPress 6.5 and later.
        if (! class_exists('WP_Font_Library')) {
            return new WP_REST_Response(['font_families' => []], 200);
        }

        $collection = WP_Font_Library::get_instance()->get_font_collection(self::COLLECTION_SLUG);

        if (null === $collection) {
            return new WP_Error(
                'collection_missing',
                __('The Google Fonts collection is not registered on this site.', 'zoloblocks'),
                ['status' => 404]
            );
        }

        $data = $collection->get_data();

        if (is_wp_error($data)) {
            return new WP_Error(
                'fetch_failed',
                __('Failed to fetch the Google Fonts collection.', 'zoloblocks'),
                ['status' => 500]
            );
        }

        if (empty($data['font_families'])) {
            return new WP_Error(
                'invalid_response',
                __('The Google Fonts collection returned no font families.', 'zoloblocks'),
                ['status' => 500]
            );
        }

        // Cache the data
        set_transient(self::CACHE_KEY, $data, self::CACHE_DURATION);

        return new WP_REST_Response($data, 200);
    }
}
