<?php 
namespace Zolo\Form;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if( ! class_exists ( 'FormAjax' ) ) {

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
            if (!wp_verify_nonce($_POST['security'], 'zolo-nonce')) {
                wp_send_json_error('Invalid nonce');
            }

            // form settings data
            $formId             = $_POST['formId'] ?? '';
            $formSettings       = $_POST['formSettings'] ?? '';
            $submissionSettings = $_POST['submissionSettings'] ?? '';
            $validationRules    = $_POST['validationRules'] ?? '';

            // serialize form settings
            $formSettings       = maybe_serialize($formSettings);
            $submissionSettings = maybe_serialize($submissionSettings);
            $validationRules    = maybe_serialize($validationRules);

            global $wpdb;
            $table = $wpdb->prefix . 'zolo_form';
            $form  = $wpdb->get_row($wpdb->prepare("SELECT * FROM %s WHERE form_id = %d", $table, $formId));

            $data = [
                'form_settings'       => $formSettings,
                'submission_settings' => $submissionSettings,
                'validation_rules'    => $validationRules,
                'updated_at'          => current_time('mysql'),
            ];

            if (empty($formId)) {
                $data['form_id']    = $formId;
                $data['created_at'] = current_time('mysql');
                $wpdb->insert($table, $data);
            } else {
                $wpdb->update($table, $data, ['form_id' => $formId]);
            }
            
            echo wp_json_encode('Form settings updated');
        }
     }
}