<?php

namespace Zolo\Mailchimp;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (! class_exists('Mailchimp')) {

    /**
     * Class Mailchimp
     *
     * @package Zolo
     */

    class Mailchimp {

        use SingletonTrait;

        /**
         * Constructs a new instance of the Mailchimp class.
         */
        public function __construct() {
            add_action('wp_ajax_zolo_subscribe_newsletter', [$this, 'subscription']);
            add_action('wp_ajax_nopriv_zolo_subscribe_newsletter', [$this, 'subscription']);
        }


        /**
         * Subscription method for the Mailchimp class.
         *
         * This method handles the subscription process for the Mailchimp plugin.
         * It is responsible for managing the integration with the Mailchimp API
         * and adding subscribers to the specified mailing list.
         *
         * @return void
         */
        public function subscription() {
            check_ajax_referer('zolo-nonce', 'nonce');

            if (empty($_POST['data'])) {
                wp_send_json([
                    'status'  => 'error',
                    'message' => __('Settings data missing!', 'zoloblocks'),
                ]);
            }

            $data = json_decode(wp_unslash(html_entity_decode($_POST['data'])), true); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput

            if (0 !== json_last_error() || empty($data) || !is_array($data)) {
                wp_send_json([
                    'status'  => 'error',
                    'message' => __('Error occurred! Can\'t parse settings data.', 'zoloblocks'),
                ]);
            }

            $email = !empty($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
            $fname = !empty($_POST['fname']) ? sanitize_text_field(wp_unslash($_POST['fname'])) : '';
            $provider = !empty($_POST['provider']) ? sanitize_text_field(wp_unslash($_POST['provider'])) : '';
            $selectedWebhook = !empty($_POST['selectedWebhook']) ? sanitize_text_field(wp_unslash($_POST['selectedWebhook'])) : '';

            $data = wp_parse_args($this->sanitize($data), [
                'email'           => $email,
                'fname'           => $fname,
                'provider'        => $provider,
                'mailchimpApiKey' => get_option('zolo_mailchimp_api_key', false),
                'mailchimpListID' => get_option('zolo_mailchimp_audience_id', false),
                'textSuccess'     => __('Thank you for subscribing!', 'zoloblocks'),
                'textSubscribed'  => __('You are already subscribed with us!', 'zoloblocks'),
                'selectedWebhook' => $selectedWebhook,
            ]);

            if (!empty($data['mailchimpApiKey']) && !empty($data['mailchimpListID']) && $data['provider'] === 'mailchimp') {
                $this->process_mailchimp($data['email'], $data['fname'], $data['mailchimpApiKey'], $data['mailchimpListID'], $data['textSuccess'], $data['textSubscribed']);
                return;
            }
            if ($data['provider'] === 'webhook') {
                $this->process_webhook($data);
                return;
            }

            wp_send_json([
                'status'  => 'error',
                'message' => __('Can\'t process your request.', 'zoloblocks'),
            ]);
        }

        /**
         * Process Mailchimp subscription.
         *
         * @param string $email The email address of the subscriber.
         * @param string $fname The first name of the subscriber.
         * @param string $api_key The Mailchimp API key.
         * @param string $list_id The ID of the Mailchimp list.
         * @param callable $success The callback function to be executed on successful subscription.
         * @param callable $subscribed The callback function to be executed if the subscriber is already subscribed.
         * @return void
         */
        private function process_mailchimp($email, $fname, $api_key, $list_id, $success, $subscribed) {
            $phone = $lname = '';

            $api_endpoint = 'https://' . substr($api_key, strpos($api_key, '-') + 1) . '.api.mailchimp.com/3.0';

            $body = apply_filters('zolo_newsletter_mailchimp_data', [
                'email_address' => $email,
                'merge_fields'  => [
                    'FNAME' => $fname,
                    'LNAME' => $lname,
                    'PHONE' => $phone,
                ],
                'email_type'        => 'html',
                'status'            => 'subscribed',
                'double_optin'      => false,
                'update_existing'   => true,
                'replace_interests' => false,
                'send_welcome'      => false,
            ]);

            $response = wp_remote_post("{$api_endpoint}/lists/{$list_id}/members", [
                'headers'   => [
                    'Content-Type'  => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode("user:{$api_key}"),
                ],
                'body'      => wp_json_encode($body),
                'sslverify' => false,
            ]);

            if (is_wp_error($response)) {
                wp_send_json([
                    'status'  => 'error',
                    'message' => $response->get_error_message(),
                ]);
            } else {
                $result = json_decode(wp_remote_retrieve_body($response), true);
                $response = [];

                if (isset($result['status']) && $result['status'] == 'subscribed') {
                    $response['status']  = 'success';
                    $response['message'] = $success;
                } elseif (isset($result['status']) && $result['status'] == 400 && !isset($result['errors'])) {
                    $response['status']  = 'warning';
                    $response['message'] = "{$email} {$subscribed}";
                } else {
                    $response['status']  = 'error';
                    $response['message'] = $result['detail'] ?? __('Can\'t process your request.', 'zoloblocks');
                }
                wp_send_json($response);
            }
        }

        /**
         * Process Webhook subscription.
         *
         * @param string $email The email address of the subscriber.
         * @param string $fname The first name of the subscriber.
         * @return void
         */
        private function process_webhook($data) {
            $webhook_url =  $this->get_url_by_label($data['selectedWebhook']);
            if (!empty($webhook_url)) {
                $response = wp_remote_post($webhook_url, [
                    'body' => json_encode([
                        'email' => $data['email'],
                        'fname' => $data['fname'],
                    ]),
                ]);

                if (is_wp_error($response)) {
                    wp_send_json([
                        'success'  => false,
                        'message' => $response->get_error_message(),
                    ]);
                } else {
                    $result = json_decode(wp_remote_retrieve_body($response), true);

                    if (isset($result['success']) && $result['success'] == 'success') {
                        wp_send_json([
                            'success'  => true,
                            $response['status']  = 'success',
                            'message' => $data['textSuccess'] ?? __('Thank you for subscribing!', 'zoloblocks'),
                        ]);
                    } elseif (isset($result['status']) && $result['status'] == 400 && !isset($result['errors'])) {
                        $response['status']  = 'warning';
                        $response['message'] = "{$data['email']} {$data['textSubscribed']}";
                    } else {
                        wp_send_json([
                            'success'  => false,
                            $response['status']  = 'error',
                            'message' => $result['detail'] ?? __('Can\'t process your request.', 'zoloblocks'),
                        ]);
                    }
                }
            } else {
                wp_send_json([
                    'success'  => false,
                    $response['status']  = 'error',
                    'message' => __('Webhook URL is missing!', 'zoloblocks'),
                ]);
            }
        }

        private function get_url_by_label($label) {
            // Get the stored webhooks from the options table
            $webhooks = get_option('zolo_webhooks', []);
            // Loop through the webhooks to find the one with the specified label
            foreach ($webhooks as $webhook) {
                if (isset($webhook['label']) && $webhook['label'] === $label) {
                    return isset($webhook['url']) ? $webhook['url'] : null; // Return the URL or null if not set
                }
            }
            return null; // Return null if no matching label is found
        }

        /**
         * Sanitizes an array by removing any potentially harmful or unwanted elements.
         *
         * @param array $array The array to be sanitized.
         * @return array The sanitized array.
         */
        private function sanitize($array) {
            foreach ((array) $array as $k => $v) {
                if (is_array($v)) {
                    $array[$k] = $this->sanitize($v);
                } else {
                    $array[$k] = sanitize_text_field($v);
                }
            }
            return $array;
        }
    }
}
