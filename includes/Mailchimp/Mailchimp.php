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
        add_filter('render_block', [$this, 'render_zolo_form'], 10, 2);

        // hanlde ajax form submission
        add_action('wp_ajax_send_mailchimp_data', [$this, 'send_mailchimp_data']);
        add_action('wp_ajax_nopriv_send_mailchimp_data', [$this, 'send_mailchimp_data']);
    }

    static function submit_form() {
        $fields = array();
        if (empty($_POST['email']) || !is_email($_POST['email']) || empty($_POST['name']) || !preg_match("/^[a-zA-Z ]*$/", $_POST['name'])) {
            wp_send_json_error(4);
        }

        $options = get_option('wf-mailchimp-block');

        try {
            $mc = new DrewM\MailChimp($options['api_key']);
        } catch (Exception $e) {
            wp_send_json_error();
        }

        $list = $options['list'];
        $email = sanitize_email($_POST['email']);
        $name = sanitize_text_field($_POST['name']);

        $member_info = $mc->get('search-members', array('list_id' => $list, 'query' => $email));

        if (isset($member_info['exact_matches']) && $member_info['exact_matches']['total_items'] == 0) {
            $status = 'pending';

            $mc->post('lists/' . $list . '/members', array('email_address' => $email, 'status' => $status, 'merge_fields' => array('FNAME' => $name)));

            if ($mc->success()) {
                wp_send_json_success(1);
            } else {
                wp_send_json_error(2);
            }
        } else {
            wp_send_json_error(3);
        }

        die();
    } // submit_form
}


Zolo_Mailchimp::getInstance();
