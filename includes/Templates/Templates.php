<?php
namespace Zolo\Templates;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if( ! class_exists( 'Templates' ) ) {

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
            if (isset($_POST['json_file_url'])) {
                $json_file_url = sanitize_text_field($_POST['json_file_url']);

                // Fetch the JSON data from the external URL
                $response = wp_remote_get($json_file_url);

                if (is_wp_error($response)) {
                    wp_send_json_error('Failed to fetch JSON data');
                } else {
                    $body = wp_remote_retrieve_body($response);
                    $data = json_decode($body, true);
                    $content = $data['content'] ?? '';

                    if (json_last_error() !== JSON_ERROR_NONE) {
                        wp_send_json_error('Invalid JSON data');
                    } else {
                        // Define separate patterns
                        $img_pattern = '/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i';
                        $bg_pattern = '/background-image\s*:\s*url\((["\']?)([^"\')]+)\1\)/i';

                        // Find matches for img src
                        preg_match_all($img_pattern, $content, $img_matches);
                        $img_srcs = $img_matches[1];

                        // Find matches for background-image
                        preg_match_all($bg_pattern, $content, $bg_matches);
                        $bg_srcs = $bg_matches[2];

                        // remove \\u0022 from all $bg_srcs
                        if (!empty($bg_srcs)) {
                            $bg_srcs = array_map(function ($src) {
                                return str_replace('\\u0022', '', $src);
                            }, $bg_srcs);
                        }

                        // Combine all matches, filter out empty ones
                        $all_img_srcs = array_filter(array_merge($img_srcs, $bg_srcs));

                        if (!empty($all_img_srcs)) {
                            foreach ($all_img_srcs as $img_src) {
                                $response = wp_remote_get($img_src);
                                if (!is_wp_error($response)) {
                                    $body = wp_remote_retrieve_body($response);
                                    $filename = basename($img_src);

                                    // Use WordPress functions to handle file uploads
                                    $upload = wp_upload_bits($filename, null, $body);
                                    if (!$upload['error'] && file_exists($upload['file'])) {
                                        // Replace the image URL in the content
                                        $content = str_replace($img_src, $upload['url'], $content);
                                    }
                                }
                            }
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
                }
            } else {
                wp_send_json_error('No JSON file URL provided');
            }
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
            $response = wp_remote_get('https://templates.zoloblocks.com/wp-json/bdthemes/v1/template-manager?per_page=-1');
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
