<?php

/**
 * Zolo From
 */

namespace Zolo\Mailchimp;

use Zolo\Traits\SingletonTrait;

class Zolo_Mailchimp {

    use SingletonTrait;

    public function __construct() {
        // render form block
        // add_filter('render_block', [$this, 'render_zolo_form'], 10, 2);

        // hanlde ajax form submission
        add_action('wp_ajax_zolo_subscribe_newsletter', [$this, 'subscription']);
        add_action('wp_ajax_nopriv_zolo_subscribe_newsletter', [$this, 'subscription']);
    }

    /**
     * Process subscription via AJAX.
     */
    public function subscription() {
        check_ajax_referer('zolo-nonce', 'nonce');

        if (empty($_POST['data'])) {
            wp_send_json([
                'status'  => 'error',
                'message' => __('Settings data missing!', 'newsletter-block-gutena'),
            ]);
        }

        $data = json_decode(wp_unslash(html_entity_decode($_POST['data'])), true); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput

        if (0 !== json_last_error() || empty($data) || !is_array($data)) {
            wp_send_json([
                'status'  => 'error',
                'message' => __('Error occured! Can\'t parse settings data.', 'newsletter-block-gutena'),
            ]);
        }

        $email = !empty($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';

        $data = wp_parse_args($this->sanitize($data), [
            'email'           => $email,
            'provider'        => '',
            'mailchimpApiKey' => 'b977124615e8f40b3a13e9f5cd3ff591-us17',
            'mailchimpListID' => 'dba21cf7e6',
            'textSuccess'     => __('Thank you for subscribing!', 'newsletter-block-gutena'),
            'textSubscribed'  => __('You are already subscribed with us!', 'newsletter-block-gutena'),
        ]);

        if ('mailchimp' === $data['provider']) {
            if (!empty($data['mailchimpApiKey']) && !empty($data['mailchimpListID'])) {
                $this->process_mailchimp($data['email'], $data['mailchimpApiKey'], $data['mailchimpListID'], $data['textSuccess'], $data['textSubscribed']);
            } else {
                wp_send_json([
                    'status'  => 'error',
                    'message' => __('Connect the form to a provider', 'newsletter-block-gutena'),
                ]);
            }
        }

        wp_send_json([
            'status'  => 'error',
            'message' => __('Can\'t process your request.', 'newsletter-block-gutena'),
        ]);
    }

    /**
     * Process Mailchimp subscription.
     */
    private function process_mailchimp($email, $api_key, $list_id, $success, $subscribed) {
        $phone = $fname = $lname = '';

        $api_endpoint = 'https://<dc>.api.mailchimp.com/3.0/';
        list(, $datacentre) = explode('-', $api_key);
        $api_endpoint = str_replace('<dc>', $datacentre, $api_endpoint);

        $body = apply_filters('zolo_newsletter_mailchimp_data', [
            'email_address'     => $email,
            'merge_fields'      => [
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

        $response = wp_remote_post($api_endpoint . '/lists/' . $list_id . '/members', [
            'headers'   => [
                'Content-Type'  => 'application/json',
                'Authorization' => 'Basic ' . base64_encode('user:' . $api_key), // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
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
                $response['status'] = 'success';
                $response['message'] = $success;
            } elseif (isset($result['status']) && $result['status'] == 400 && !isset($result['errors'])) {
                $response['status'] = 'warning';
                $response['message'] = $email . ' ' . $subscribed;
            } else {
                $response['status'] = 'error';
                $response['message'] = __('Can\'t process your request.', 'newsletter-block-gutena');
            }

            wp_send_json($response);
        }
    }

    /**
     * Sanitize data.
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


Zolo_Mailchimp::getInstance();
