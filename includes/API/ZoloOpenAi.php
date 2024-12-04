<?php

/**
 * OpenAI API Class
 */

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use WP_REST_Controller;
use WP_REST_Request;
use WP_Error;
use WP_REST_Response;

class ZoloOpenAi extends WP_REST_Controller {
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_openai_route']);
    }

    /**
     * Register OpenAI REST API route
     */
    public function register_openai_route() {
        register_rest_route(
            'zolo/v1',
            'openai',
            [
                'methods'             => ['GET', 'POST'],
                'callback'            => [$this, 'get_openai_response'],
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

    /**
     * Handle OpenAI API request
     */
    public function get_openai_response(WP_REST_Request $request) {
        $data = $request->get_params();
        // print_r($data);
        $api_key = $this->get_api_key();

        if (empty($api_key)) {
            return new WP_Error(
                'rest_forbidden',
                __('Please add OpenAI API key in settings.', 'zoloblocks'),
                ['status' => 401]
            );
        }

        $response = $this->query_openai($data['request'] ?? '', $api_key);

        if (is_wp_error($response)) {
            return $response;
        }

        return new WP_REST_Response(['success' => true, 'response' => $response], 200);
    }

    /**
     * Query OpenAI API
     */
    private function query_openai(string $message, string $api_key) {
        if (empty($message)) {
            return new WP_Error(
                'invalid_request',
                __('Message parameter is required.', 'zoloblocks'),
                ['status' => 400]
            );
        }

        $response = wp_remote_post(
            'https://api.openai.com/v1/chat/completions',
            [
                'headers' => [
                    'Content-Type'  => 'application/json',
                    'Authorization' => 'Bearer ' . $api_key,
                ],
                'body'    => json_encode([
                    'model'       => 'gpt-3.5-turbo',
                    'stream'      => false,
                    'temperature' => 0.7,
                    'messages'    => [
                        ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                        ['role' => 'user', 'content' => $message],
                    ],
                ]),
            ]
        );

        if (is_wp_error($response)) {
            return $response;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($body['choices'][0]['message']['content'])) {
            return new WP_Error(
                'api_error',
                __('Invalid response from OpenAI API.', 'zoloblocks'),
                ['status' => 500]
            );
        }

        $result = [
            'content' => $body['choices'][0]['message']['content'],
            // generate a random number between 1 and 100
            'id' => rand(1, 100),
        ];

        return $result;

        // return $body['choices'][0]['message']['content'];
    }

    /**
     * Retrieve API key
     */
    private function get_api_key() {
        return defined('OPENAI_API_KEY') ? OPENAI_API_KEY : get_option('zolo_openai_api_key', '');
    }
}
