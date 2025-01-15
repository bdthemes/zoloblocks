<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

class GetPostMetaV1 {
    use SingletonTrait;
    /**
     * Constructor: Initialize the class and register hooks.
     */
    public function __construct() {
        add_action( "rest_api_init", [ $this, "register_routes" ] );
    }

    /**
     * Register the REST API routes.
     */
    public function register_routes() {
        register_rest_route(
            "zolo/v1",
            "/meta-list",
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [ $this, 'handle_request' ],
                'permission_callback' => [ $this, 'permission_callback' ],
            ]
        );
    }

    /**
     * Handle the API request and return the response.
     *
     * @param WP_REST_Request $request The REST API request.
     * @return WP_REST_Response The response object.
     */
    public function handle_request( WP_REST_Request $request ) {
        $meta_keys = $this->get_meta_keys();

        if ( empty( $meta_keys ) ) {
            return new WP_REST_Response(
                [
                    'error'   => true,
                    'message' => 'No meta keys found in the database.',
                    'data'    => [],
                ],
                200
            );
        }

        // Format meta keys as key-value pairs.
        $response_data = array_map(
            function( $meta_key ) {
                return [
                    'label' => $meta_key,
                    'value' => $meta_key,
                ];
            },
            $meta_keys
        );

        return new WP_REST_Response( $response_data, 200 );
    }

    public function permission_callback() {
        return apply_filters( 'zolo_meta_keys_permission', current_user_can( 'edit_posts' ) );
    }

    private function get_meta_keys() {
        $cached_keys = get_transient( 'zolo_meta_keys' );
        if ( $cached_keys !== false ) {
            return $cached_keys;
        }

        global $wpdb;
        $prefix = $wpdb->prefix;
        $query = $wpdb->prepare(
            "SELECT DISTINCT meta_key FROM {$prefix}postmeta WHERE meta_key NOT LIKE %s",
            '\_%'
        );
        
        $meta_keys = $wpdb->get_col( $query );

        if ( $meta_keys ) {
            set_transient( 'zolo_meta_keys', $meta_keys, HOUR_IN_SECONDS );
        }

        return $meta_keys ?: [];
    }
    
}