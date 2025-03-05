<?php

namespace Zolo\Templates;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (! class_exists('Templates')) {

    /**
     * Class Templates
     *
     * @package Zolo
     */
    class Templates {

        use SingletonTrait;

        /**
         * Constructs a new instance of the Templates class.
         */
        public function __construct() {
            add_action('wp_ajax_zolo_demo_import', [$this, 'demo_import']);
            add_action('wp_ajax_nopriv_zolo_demo_import', [$this, 'demo_import']);

            // update transient for the api
            add_action('wp_ajax_zolo_demo_pull', [$this, 'update_transient']);
            add_action('wp_ajax_nopriv_zolo_demo_pull', [$this, 'update_transient']);

            // update transient for the demos api
            add_action('wp_ajax_zolo_demo_template_pull', [$this, 'update_demos_transient']);
            add_action('wp_ajax_nopriv_zolo_demo_template_pull', [$this, 'update_demos_transient']);
        }

        /**
         * Imports the demo content.
         *
         * This method is responsible for importing the demo content into the WordPress site.
         * It is located in the `Templates.php` file within the `zoloblocks/includes/Templates` directory.
         * The method is public and can be accessed from other parts of the codebase.
         *
         * @since 1.0.0
         */
        public function demo_import() {
            // Access the json_file_url from the POST data
            if (!isset($_POST['json_file_url'])) {
                wp_send_json_error('No JSON file URL provided');
                return;
            }

            $json_file_url = sanitize_text_field($_POST['json_file_url']);

            // Fetch the JSON data from the external URL
            $response = wp_remote_get($json_file_url, [
                'timeout' => 30,
            ]);

            if (is_wp_error($response)) {
                wp_send_json_error('Failed to fetch JSON data' . $response->get_error_message());
                return;
            }

            $body    = wp_remote_retrieve_body($response);
            $data    = json_decode($body, true);
            $content = $data['content'] ?? '';

            if (json_last_error() !== JSON_ERROR_NONE) {
                wp_send_json_error('Invalid JSON data');
                return;
            }

            // Define patterns for img src and background-image
            $patterns = [
                'img' => '/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i',
                'bg'  => '/background-image\s*:\s*url\((["\']?)([^"\')]+)\1\)/i'
            ];

            $all_img_srcs = [];

            foreach ($patterns as $type => $pattern) {
                preg_match_all($pattern, $content, $matches);
                $srcs = $matches[1] ?? $matches[2];

                if ($type === 'bg') {
                    $srcs = array_map(function ($src) {
                        return str_replace('\\u0022', '', $src);
                    }, $srcs);
                }

                $all_img_srcs = array_merge($all_img_srcs, array_filter($srcs));
            }

            foreach ($all_img_srcs as $img_src) {
                $response = wp_remote_get($img_src);
                if (is_wp_error($response)) {
                    continue;
                }

                $body     = wp_remote_retrieve_body($response);
                $filename = basename($img_src);

                // Use WordPress functions to handle file uploads
                $upload = wp_upload_bits($filename, null, $body);

                if ($upload['error'] || !file_exists($upload['file'])) {
                    continue;
                }

                // Add image to media library
                $wp_filetype = wp_check_filetype($filename, null);
                $attachment  = [
                    'post_mime_type' => $wp_filetype['type'],
                    'post_title'     => sanitize_file_name($filename),
                    'post_content'   => '',
                    'post_status'    => 'inherit',
                ];
                $attach_id = wp_insert_attachment($attachment, $upload['file']);

                // Require the needed file
                require_once(ABSPATH . 'wp-admin/includes/image.php');
                $attached_data = wp_generate_attachment_metadata($attach_id, $upload['file']);

                // Update the attachment metadata
                wp_update_attachment_metadata($attach_id, $attached_data);

                // Replace the image URL in the content
                $content = str_replace($img_src, $upload['url'], $content);
            }

            // Process your JSON data here
            wp_send_json_success([
                'status'   => 'success',
                'message'  => __('Pattern imported successfully!', 'zoloblocks'),
                'content'  => $content,
                'img_srcs' => $img_srcs,
                'bg_srcs'  => $bg_srcs,
            ]);
        }

        /**
         * Updates the transient for the API.
         *
         * This method is responsible for updating the transient for the API.
         * It is located in the `Templates.php` file within the `zoloblocks/includes/Templates` directory.
         * The method is public and can be accessed from other parts of the codebase.
         *
         * @since 1.0.0
         */
        public function update_transient() {
            $transient_key = 'zolo_templates';

            // Delete old transient
            delete_transient($transient_key);

            // Fetch latest templates from external server
            $response = wp_remote_get('https://templates.zoloblocks.com/wp-json/template-manager/v1/zolo', [
                'timeout' => 30,
            ]);
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);

            $templates = [];

            // Set transient if data is available
            if (!empty($data)) {
                $templates = $data ?? [];
                set_transient($transient_key, $templates, 7 * DAY_IN_SECONDS);
            }

            // Immediately update data in REST API endpoint
            wp_send_json_success([
                'status'  => 'success',
                'message' => __('Templates pulled and REST API updated successfully!', 'zoloblocks'),
                'data'    => $templates,
            ]);
        }
        /**
         * Updates the transient for the Demo API.
         *
         * This method is responsible for updating the transient for the API.
         * It is located in the `Templates.php` file within the `zoloblocks/includes/Templates` directory.
         * The method is public and can be accessed from other parts of the codebase.
         *
         * @since 1.0.0
         */
        public function update_demos_transient() {
            $transient_key = 'zolo_demos';

            // Delete old transient
            delete_transient($transient_key);

            // Fetch latest templates from external server
            $response = wp_remote_get('https://demo.zoloblocks.com/wp-json/template-manager/v1/zolo', [
                'timeout' => 30,
            ]);
            $body     = wp_remote_retrieve_body($response);
            $data     = json_decode($body, true);

            $templates = [];

            // Set transient if data is available
            if (!empty($data)) {
                $templates = $data ?? [];
                set_transient($transient_key, $templates, 7 * DAY_IN_SECONDS);
            }

            // Immediately update data in REST API endpoint
            wp_send_json_success([
                'status'  => 'success',
                'message' => __('Templates pulled and REST API updated successfully!', 'zoloblocks'),
                'data'    => $templates,
            ]);
        }
    }
}
