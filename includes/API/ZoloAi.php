<?php

/**
 * Zolo AI ASISTANT API Class
 */

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use WP_REST_Controller;
use WP_REST_Request;
use WP_Error;
use WP_REST_Response;

class ZoloAi extends WP_REST_Controller {
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_zoloai_route']);
    }

    /**
     * Register ZoloAi REST API route
     */
    public function register_zoloai_route() {
        register_rest_route(
            'zolo/v1',
            'zoloai',
            [
                'methods'             => ['GET', 'POST'],
                'callback'            => [$this, 'call_sigmative_api'],
                'permission_callback' => [$this, 'zolo_permission_callback'],
            ]
        );
    }

    /**
     * Permission callback for REST API
     */
    public function zolo_permission_callback() {
        if (!current_user_can('edit_posts')) {
            return new WP_Error(
                'rest_forbidden',
                __('You are not allowed to access this route.', 'zoloblocks'),
                ['status' => 401]
            );
        }
        return true;
    }

    function call_sigmative_api(WP_REST_Request $request) {
        $data = $request->get_params();
        $context = $data['context'] ?? '';
        $request = $data['request'] ?? '';
        $api_url = $this->get_api_url();
        $api_key = $this->get_api_key();
        $payload = [
            'command' => $request,
            'context'     => $context,
            // 'max_tokens'  => 1000,
            // 'max_steps'   => 50,
            // 'temperature' => 0,
        ];

        // Make the API request
        $response = wp_remote_post(
            $api_url,
            [
                'headers' => [
                    'Accept'        => 'application/json',
                    'Content-Type'  => 'application/json',
                    'Authorization' => 'Bearer ' . $api_key,
                ],
                'body'    => wp_json_encode($payload),
                'timeout' => 30,
                'sslverify' => false, // Disable SSL verification

            ]
        );

        // Check for errors
        if (is_wp_error($response)) {
            return new WP_Error(
                'request_failed',
                __('Failed to connect to the Sigmative API.', 'your-textdomain'),
                $response->get_error_message()
            );
        }

        // Retrieve and decode the response body
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (empty($data)) {
            return new WP_Error(
                'invalid_response',
                __('The API returned an invalid response.', 'your-textdomain')
            );
        }

        // Return the response data
        // return $data;

        return new WP_REST_Response(['success' => true, 'response' => $data], 200);
    }
    /**
     * Retrieve API key
     */
    private function get_api_key() {
        return  get_option('zolo_sigmative_api_key');
    }
    /**
     * Retrieve API URL
     */
    private function get_api_url() {
        // if (defined('SIGMATIVE_AI_URL')) {
        //     return SIGMATIVE_AI_URL;
        // }
        return 'https://ai.sigmative.com/api/prompt/v1/generation/chat/completions';
    }
}
