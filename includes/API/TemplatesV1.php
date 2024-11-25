<?php

namespace Zolo\API;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

/**
 * Zolo Templates API
 */
class TemplatesV1 {

    use SingletonTrait;

    /**
     * Construct method
     */
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_templates_route']);
    }

    /**
     * Register post route
     *
     * @return void
     */
    public function register_templates_route() {
        register_rest_route('zolo/v1', '/templates', [
            'methods'             => 'GET',
            'callback'            => [$this, 'get_templates'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('zolo/v1', '/demos', [
            'methods'             => 'GET',
            'callback'            => [$this, 'get_demos'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route('zolo/v1', '/page-templates', [
            'methods'             => 'GET',
            'callback'            => [$this, 'get_page_templates'],
            'permission_callback' => '__return_true',
        ]);
    }

    /**
     * Retrieves the templates from the specified file path.
     *
     * @return array An array of templates.
     */
    public function get_templates() {
        $transient_key = 'zolo_templates';
        $templates     = get_transient($transient_key);

        if (empty($templates)) {
            $response = wp_remote_get('https://templates.zoloblocks.com/wp-json/template-manager/v1/zolo', [
                'timeout' => 30,
            ]);
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);
            if (!empty($data)) {
                $templates = $data ?? [];
                set_transient($transient_key, $templates, 7 * DAY_IN_SECONDS);
            }
        }
        wp_send_json_success($templates);
    }

    /**
     * Retrieves the demos from the specified file path.
     *
     * @return array An array of demos.
     */
    public function get_demos() {
        $transient_key = 'zolo_demos';
        $demos         = get_transient($transient_key);

        if (empty($demos)) {
            $response = wp_remote_get('https://demo.zoloblocks.com/wp-json/template-manager/v1/zolo', [
                'timeout' => 30,
            ]);
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);

            if (!empty($data)) {
                $demos = $data ?? [];
                set_transient($transient_key, $demos, 7 * DAY_IN_SECONDS);
            }
        }

        wp_send_json_success($demos);
    }

    /**
     * Retrieves the page templates from the specified file path.
     *
     * @return array An array of page templates.
     */
    public function get_page_templates() {
        $data     = get_transient('zolo_templates');

        // check if the transient is empty
        if (empty($data)) {
            $response = wp_remote_get('https://templates.zoloblocks.com/wp-json/template-manager/v1/zolo', [
                'timeout' => 30,
            ]);
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);

            if (!empty($data)) {
                $templates = $data ?? [];
                set_transient('zolo_templates', $templates, 7 * DAY_IN_SECONDS);
            }
        }

        $templates = [];
        foreach ($data as $key => $value) {
            if (isset($value['templates_category']) && !empty($value['templates_category'])) {
                foreach ($value['templates_category'] as $template) {
                    $templates[$template][] = [
                        'id'           => $value['id'],
                        'title'        => $value['title'],
                        'json_file'    => $value['json_file'],
                        'demo_preview' => $value['demo_preview'],
                        'status'       => $value['status'],
                        'demo_link'    => $value['demo_link'],
                    ];
                }
            }
        }

        wp_send_json_success($templates);
    }
}
