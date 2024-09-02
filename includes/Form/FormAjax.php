<?php

namespace Zolo\Form;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

if (! class_exists('FormAjax')) {

    /**
     * Class FormAjax
     */
    class FormAjax {

        use SingletonTrait;

        /**
         * Constructs a new instance of the FormAjax class.
         */
        public function __construct() {
            add_action('wp_ajax_update_form_settings', [$this, 'update_form_settings']);
            add_action('wp_ajax_nopriv_update_form_settings', [$this, 'update_form_settings']);
        }

        /**
         * Update form settings
         */
        public function update_form_settings() {

            // Sanitize security field
            $security = isset($_POST['security']) ? sanitize_text_field(wp_unslash($_POST['security'])) : ''; 
            if (!wp_verify_nonce($security, 'zolo-nonce')) {
                wp_send_json_error('Invalid nonce');
            }
        
            // Sanitize and unslash form settings data
            $formId = isset($_POST['formId']) ? sanitize_text_field(wp_unslash($_POST['formId'])) : '';
        
            // For serialized data, use a combination of wp_kses_post() and maybe_serialize()
            $formSettings       = isset($_POST['formSettings']) ? sanitize_text_field(wp_unslash($_POST['formSettings'])) : '';
            $submissionSettings = isset($_POST['submissionSettings']) ? sanitize_text_field(wp_unslash($_POST['submissionSettings'])) : '';
            $validationRules    = isset($_POST['validationRules']) ? sanitize_text_field(wp_unslash($_POST['validationRules'])) : '';
        
            global $wpdb;
            $table = $wpdb->prefix . 'zolo_form';
            $form  = $wpdb->get_row($wpdb->prepare("SELECT * FROM %s WHERE form_id = %d", $table, $formId)); // phpcs:ignore
        
            $data = [
                'form_settings'       => $formSettings,
                'submission_settings' => $submissionSettings,
                'validation_rules'    => $validationRules,
                'updated_at'          => current_time('mysql'),
            ];
        
            if (empty($formId)) {
                $data['form_id']    = $formId;
                $data['created_at'] = current_time('mysql');
                $wpdb->insert($table, $data); // phpcs:ignore
            } else {
                $wpdb->update($table, $data, ['form_id' => $formId]); // phpcs:ignore
            }
        
            echo wp_json_encode('Form settings updated');
        }
    }
}
