<?php 
/**
 * Zolo From 
 */

 namespace Zolo\Form;
 use Zolo\Traits\SingletonTrait;

 class Zolo_Form_Ajax {

    use SingletonTrait;
    
    public function __construct() {
        // hanlde ajax form submission
        add_action('wp_ajax_update_form_settings', [$this, 'update_form_settings']);
        add_action('wp_ajax_nopriv_update_form_settings', [$this, 'update_form_settings']);
    }

    /**
     * Update form settings
     */
    public function update_form_settings() {
        if( isset( $_POST['security'] ) ) {
            $nonce = $_POST['security'];
            if( ! wp_verify_nonce( $nonce, 'zolo-nonce' ) ) {
                wp_send_json_error( 'Invalid nonce' );
            }
        }

        // form settings data
        $formId             = $_POST['formId'] ?? '';
        $formSettings       = $_POST['formSettings'] ?? '';
        $submissionSettings = $_POST['submissionSettings'] ?? '';
        $validationRules    = $_POST['validationRules'] ?? '';

        // serialize form settings
        $formSettings       = maybe_serialize( $formSettings );
        $submissionSettings = maybe_serialize( $submissionSettings );
        $validationRules    = maybe_serialize( $validationRules );

        global $wpdb;
        $table = $wpdb->prefix . 'zolo_form';
        $form = $wpdb->get_row( $wpdb->prepare("SELECT * FROM $table WHERE form_id = %s", $formId) );

        if( empty($formId) ) {
            $wpdb->insert( $table, [
                'form_id'             => $formId,
                'form_settings'       => $formSettings,
                'submission_settings' => $submissionSettings,
                'validation_rules'    => $validationRules,
                'created_at'          => current_time('mysql'),
            ]);
        } else {
            $wpdb->update( $table, [
                'form_settings'       => $formSettings,
                'submission_settings' => $submissionSettings,
                'validation_rules'    => $validationRules,
                'updated_at'          => current_time('mysql'),
            ], ['form_id' => $formId]);
        }
        // echo wp_send_json_success( 'Form settings updated');
        echo json_encode( 'Form settings updated' );
    }
 }


 Zolo_Form_Ajax::getInstance();