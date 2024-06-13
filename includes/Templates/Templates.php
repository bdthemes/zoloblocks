<?php
/**
 * Zolo Templates
 */
namespace Zolo\Templates;
use Zolo\Traits\SingletonTrait;

class Zolo_Templates {

    use SingletonTrait;

    public function __construct() {
        add_action('wp_ajax_zolo_demo_import', [$this, 'demo_import']);
        add_action('wp_ajax_nopriv_zolo_demo_import', [$this, 'demo_import']);
    }

    /**
     * Demo import via AJAX.
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

                    // find all src attributes values from the content
                    $img_srcs = [];
                    preg_match_all('/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i', $content, $matches);

                    if (!empty($matches[1])) {
                        $img_srcs = $matches[1];

                        // download images and replace src attributes with local path
                        foreach ($img_srcs as $img_src) {
                            $img_src = str_replace(['http:', 'https:'], '', $img_src);
                            $img_src = ABSPATH . str_replace(site_url(), '', $img_src);
                            $img_src = str_replace('//', '/', $img_src);

                            $img_name = basename($img_src);
                            $img_content = wp_remote_retrieve_body(wp_remote_get($img_src));

                            if ($img_content) {
                                $upload_dir = wp_upload_dir();
                                $img_path = $upload_dir['path'] . '/' . $img_name;
                                $img_url = $upload_dir['url'] . '/' . $img_name;

                                file_put_contents($img_path, $img_content);
                                $content = str_replace($img_src, $img_url, $content);
                            }
                        } 
                    } 

                    // Process your JSON data here
                    wp_send_json_success([
                        'status'  => 'success',
                        'message' => __('Pattern imported successfully!', 'zoloblocks'),
                        'content' => $content,
                        'img_srcs' => $img_srcs,
                    ]);
                }
            }
        } else {
            wp_send_json_error('No JSON file URL provided');
        }
    }
}

Zolo_Templates::getInstance();
