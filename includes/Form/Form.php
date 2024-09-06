<?php

namespace Zolo\Form;

use Zolo\Traits\SingletonTrait;


// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Form')) {

    /**
     * Class Form
     *
     * @package Zolo
     */
    class Form {

        use SingletonTrait;

        /**
         * Constructor for the Form class.
         */
        public function __construct() {
            add_filter('render_block', [$this, 'render_zolo_form'], 10, 2);
            add_action('wp_ajax_send_form_data', [$this, 'send_form_data']);
            add_action('wp_ajax_nopriv_send_form_data', [$this, 'send_form_data']);
        }

        /**
         * Renders the Zolo form.
         *
         * @param string $block_content The content of the block.
         * @param WP_Block $block The block object.
         * @return void
         */
        public function render_zolo_form($block_content, $block) {
            $zoloForm = $block['blockName'] ?? '';

            if ($zoloForm !== 'zolo/form') {
                return $block_content;
            }

            $formAttrs = $block['attrs'] ?? [];
            $formId    = $formAttrs['formId'] ?? '';

            $formSettings = $formAttrs['formSettings'] ?? [
                'formTitle'        => 'Contact Form',
                'notificationType' => 'send_mail',
                'emailTo'          => get_option('admin_email'),
                'emailCC'          => '',
                'emailBCC'         => '',
                'emailSubject'     => 'New Form Submission',
            ];

            $formSettings = wp_json_encode($formSettings);

            $submissionSettings = $formAttrs['submissionSettings'] ?? [
                'successType'       => 'message',
                'successMessage'    => 'Thank you for your submission',
                'failMessage'       => 'Sorry, form submission failed',
                'validationMessage' => 'Form validation failed',
            ];
            $submissionSettings = wp_json_encode($submissionSettings);

            $validationRules = $formAttrs['validationRules'] ?? [
                'name'    => false,
                'email'   => true,
                'message' => true,
            ];
            $validationRules = wp_json_encode($validationRules);

            // insert form settings and submission settings into database called zolo_form table check if formId does not exist in form_id column
            global $wpdb;
            $table_name = $wpdb->prefix . 'zolo_form';
            $form_id    = $wpdb->get_var("SELECT form_id FROM $table_name WHERE form_id = '$formId'"); // phpcs:ignore

            if ($form_id === NULL) {
                $wpdb->insert( // phpcs:ignore
                    $table_name,
                    array(
                        'form_id'             => $formId,
                        'form_settings'       => $formSettings,
                        'submission_settings' => $submissionSettings,
                        'validation_rules'    => $validationRules,
                        'created_at'          => current_time('mysql'),
                    )
                );
            } else {
                $wpdb->update( // phpcs:ignore
                    $table_name,
                    array(
                        'form_id'             => $formId,                 // string
                        'form_settings'       => $formSettings,
                        'submission_settings' => $submissionSettings,
                        'validation_rules'    => $validationRules,
                        'updated_at'          => current_time('mysql'),
                    ),
                    array('form_id' => $formId)
                );
            }

            return $block_content;
        }

        /**
         * Send Form Data
         */
        public function send_form_data() {

            $nonceValidationFail = false;

            // verify nonce
            if (!wp_verify_nonce(json_decode(stripslashes($_POST['formData']), true)['nonce'], 'zolo-nonce')) {
                $nonceValidationFail = true;
            }

            // Get form data
            $data = json_decode(stripslashes($_POST['formData']), true);

            if (isset($data)) {

                $recaptchaValidationFail = false;
                $recaptchaFailMessage = 'Recaptcha validation failed';

                // google recaptcha validation
                if (isset($data['g-recaptcha-response'])) {
                    $recaptcha_secret_key = get_option('zolo_recaptcha_secret_key');
                    $recaptcha_response = $data['g-recaptcha-response'];
                    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
                    $recaptcha = wp_remote_post($recaptcha_url, [
                        'body' => [
                            'secret'   => $recaptcha_secret_key,
                            'response' => $recaptcha_response,
                        ],
                    ]);
                    $result = json_decode(wp_remote_retrieve_body($recaptcha));

                    if ($result->success === false) {
                        $recaptchaValidationFail = true;
                    }
                }

                if ($recaptchaValidationFail) {
                    echo wp_json_encode(array('recaptchaStatus' => $recaptchaValidationFail, 'recaptchaFailMessage' => $recaptchaFailMessage));
                    wp_die();
                } else {

                    $sanitizedData = [];

                    // formId
                    $formId = $data['formId'] ?? '';

                    if (empty($formId)) {
                        return;
                    }

                    // Database
                    global $wpdb;
                    $table_name = $wpdb->prefix . 'zolo_form';

                    // Fetch form settings, submission settings, and validation rules in a single query
                    $form_query = $wpdb->prepare("SELECT form_settings, submission_settings, validation_rules FROM $table_name WHERE form_id = %s", $formId);
                    $form_data  = $wpdb->get_row($form_query);                                                                                                 // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared

                    $form_submission_settings = json_decode($form_data->submission_settings, true);

                    // Validate form data
                    $validationStatus = false;
                    $validationMessage = sanitize_text_field($form_submission_settings['validationMessage']) ?? 'Form validation failed';
                    foreach ($form_data->validation_rules as $key => $value) {
                        if ($value === true && empty($data[$key])) {
                            $validationStatus = true;
                        }
                    }

                    // Initialize status variables
                    $successStatus = false;
                    $successMessage = sanitize_text_field($form_submission_settings['successMessage']) ?? 'Thank you for your submission';

                    // success message
                    $failStatus = false;
                    $failMessage = sanitize_text_field($form_submission_settings['failMessage']) ?? 'Sorry, form submission failed';

                    // Prepare email headers and message
                    $emailSettings = json_decode($form_data->submission_settings, true);
                    $formSettings = json_decode($form_data->form_settings, true);
                    $emailSubject = isset($emailSettings['emailSubject']) ? sanitize_text_field($emailSettings['emailSubject']) : 'New Form Submission';
                    $emailTo = isset($emailSettings['emailTo']) ? sanitize_email($emailSettings['emailTo']) : get_option('admin_email');
                    $emailCC = isset($emailSettings['emailCC']) ? sanitize_email($emailSettings['emailCC']) : '';
                    $emailBCC = isset($emailSettings['emailBCC']) ? sanitize_email($emailSettings['emailBCC']) : '';
                    $headers = array(
                        'Content-Type: text/html; charset=UTF-8',
                        'Cc: ' . $emailCC,
                        'Bcc: ' . $emailBCC,
                    );
                    $message = $formSettings['formTitle'] . "\n\n";
                    foreach ($data as $key => $value) {
                        switch (strtolower($key)) {
                            case 'email':
                                $value = sanitize_email($value);
                                break;
                            case 'message':
                                $value = sanitize_textarea_field($value);
                                break;
                            default:
                                $value = sanitize_text_field($value);
                                break;
                        }

                        // Exclude formId from email message
                        if ($key !== 'formId') {
                            $message .= $key . ': ' . $value . "\n";
                        }

                        // Sanitize form data
                        $sanitizedData[$key] = $value;
                    }

                    // Send email
                    $mail_sent = wp_mail($emailTo, $emailSubject, $message, $headers);

                    // Check if the mail is sent or not
                    if ($mail_sent && !$nonceValidationFail) {
                        $successStatus = true;

                        // Insert form data into database called zolo_form table
                        $wpdb->insert( // phpcs:ignore
                            $table_name,
                            array(
                                'form_id' => $formId,
                                'form_fields' => serialize($sanitizedData),
                                'form_settings' => serialize($formSettings),
                                'submission_settings' => serialize($emailSettings),
                                'validation_rules' => serialize($form_data->validation_rules),
                                'created_at' => current_time('mysql'),
                            )
                        );
                    } else {
                        $failStatus = true;
                    }

                    // Return response
                    echo wp_json_encode(array('validationStatus' => $validationStatus, 'validationMessage' => $validationMessage, 'successStatus' => $successStatus, 'failStatus' => $failStatus, 'successMessage' => $successMessage, 'failMessage' => $failMessage));
                }
            } else {
                // Return error response
                echo wp_json_encode(array('success' => false, 'error' => 'Form data not received'));
            }

            wp_die();
        }
    }
}
