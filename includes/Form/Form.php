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
    class Form
    {

        use SingletonTrait;

        /**
         * Constructor for the Form class.
         */
        public function __construct()
        {
            FormDataPostType::getInstance();
            Hooks::getInstance();
            FormEntries::getInstance();
            add_action('wp_ajax_send_form_data', [$this, 'send_form_data']);
            add_action('wp_ajax_nopriv_send_form_data', [$this, 'send_form_data']);
        }

        /**
         * Send form data and process form submission.
         */
        public function send_form_data()
        {
            // Ensure form data is provided
            if (empty($_POST['formData'])) {
                $this->error_response(__('Form data is empty', 'zoloblocks')); // 400
            }

            // Decode the form data
            $form_data = json_decode(stripslashes($_POST['formData']), true);

            // Verify nonce
            if (!$this->verify_nonce($form_data['nonce'])) {
                $this->error_response( __('Nonce verification failed', 'zoloblocks')); // 403
            }

            // Validate reCAPTCHA
            if (!$this->is_recaptcha_valid($form_data)) {
                $this->error_response(__('Recaptcha validation failed', 'zoloblocks')); // 403
            }

            // Sanitize form data
            $sanitized_data = $this->sanitize_form_data($form_data);

            // Process form data if formId is provided
            if (!empty($sanitized_data['formId'])) {
                $post_id = $this->get_form_post_id($sanitized_data['formId']);

                if ($post_id) {
                    $data = $this->validate_mail_data($post_id, $form_data);
                    if ($data['form_settings']['notificationType'] === 'send_mail') {
                        if($this->send_mail($data)) {
                            if (!class_exists('Zolo_Blocks_Pro')) {
                                $this->save_form_entries($data);
                            }
                            $this->success_response($data['submission_settings']['successMessage']);
                        }else{
                            $this->error_response($data['submission_settings']['failMessage']);
                        }
                    }
                    // TODO: Need to move the code below to Zolo_Blocks_Pro
                    if ($data['form_settings']['notificationType'] === 'save_response' && class_exists('Zolo_Blocks_Pro')) {
                        if($this->save_form_entries($data)) {
                            $this->success_response($data['submission_settings']['successMessage']);
                        }else{
                            $this->error_response($data['submission_settings']['failMessage']);
                        }
                    }
                    // TODO: Need to move the code below to Zolo_Blocks_Pro
                    if ($data['form_settings']['notificationType'] === 'save_send' && class_exists('Zolo_Blocks_Pro')) {
                        if($this->send_mail($data) && $this->save_form_entries($data)) {
                            $this->success_response($data['submission_settings']['successMessage']);
                        }else{
                            $this->error_response($data['submission_settings']['failMessage']);
                        }
                    }
                }
            }
        }

         /**
         * Handle error response.
         *
         * @param array  $response The error response message.
         * @param int    $status_code The HTTP status code.
         */
        private function error_response($response)
        {
            wp_send_json_error($response);
            wp_die();
        }

        /**
         * Verify nonce.
         *
         * @param string $nonce The nonce to verify.
         * @return bool True if nonce is valid, false otherwise.
         */
        private function verify_nonce($nonce)
        {
            return wp_verify_nonce($nonce, 'zolo-nonce');
        }

        /**
         * is_recaptcha_valid
         *
         * @param array $data Form submission data.
         * @return bool True if reCAPTCHA is valid, false otherwise.
         */
        private function is_recaptcha_valid(array $data): bool
        {
            // Ensure reCAPTCHA response exists in the data
            if (isset($data['g-recaptcha-response'])) {
                // Retrieve the secret key from options
                $recaptcha_secret_key = get_option('zolo_recaptcha_secret_key');
                if (empty($recaptcha_secret_key)) {
                    return false;
                }

                // Prepare the reCAPTCHA API request
                $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
                $response = wp_remote_post($recaptcha_url, [
                    'body' => [
                        'secret'   => $recaptcha_secret_key,
                        'response' => $data['g-recaptcha-response'],
                    ],
                ]);

                // Check for errors in the API request
                if (is_wp_error($response)) {
                    return false;
                }

                // Parse and validate the API response
                $result = json_decode(wp_remote_retrieve_body($response));
                if (!is_object($result) || empty($result->success)) {
                    return false;
                }
            }

            // Return the success status
            return true;
        }

        /**
         * Sanitize form data.
         *
         * @param array $form_data The form data to sanitize.
         * @return array The sanitized form data.
         */
        private function sanitize_form_data($form_data)
        {
            $sanitized_data = [];
            foreach ($form_data as $key => $data) {
                if (is_array($data)) {
                    $sanitized_data[$key] = [
                        'value' => is_email($data['value']) ? sanitize_email($data['value']) : sanitize_text_field($data['value']),
                        'label' => sanitize_text_field($data['label']),
                    ];
                    continue;
                }

                $sanitized_data[$key] = sanitize_text_field($data);
            }
            return $sanitized_data;
        }

        /**
         * Get form post ID by form ID.
         *
         * @param string $form_id The form ID.
         * @return int|null The post ID if found, otherwise null.
         */
        private function get_form_post_id($form_id)
        {
            $posts = get_posts([
                'name'        => $form_id,
                'post_type'   => 'zolo_form_data',
                'post_status' => 'publish',
                'numberposts' => 1, // Ensures only one result
            ]);

            return !empty($posts) ? $posts[0]->ID : null;
        }


        /**
         * Validate and prepare form data for processing.
         *
         * @param int   $post_id The post ID of the form.
         * @param array $form_data The submitted form data.
         *
         * @return array Validated and merged form settings, submission settings, validation rules, and form data.
         */
        private function validate_mail_data(int $post_id, array $form_data): array
        {
            // Fetch saved meta data for form settings, submission settings, and validation rules
            $form_settings = get_post_meta($post_id, 'form_settings', true);
            $submission_settings = get_post_meta($post_id, 'submission_settings', true);
            $validation_rules = get_post_meta($post_id, 'validation_rules', true);

            // Set defaults and merge with saved settings using wp_parse_args
            $form_settings = wp_parse_args($form_settings, [
                'formTitle' => 'Contact Form',
                'notificationType' => 'send_mail',
                'emailTo' => get_option('admin_email'),
                'emailCC' => '',
                'emailBCC' => '',
                'emailSubject' => 'New Form Submission',
            ]);

            // TODO: Need to move the code below to Zolo_Blocks_Pro and change the notificationType with a filter
            if (!class_exists('Zolo_Blocks_Pro')) {
                $form_settings['notificationType'] = 'send_mail';
            }

            $submission_settings = wp_parse_args($submission_settings, [
                'successType' => 'message',
                'successMessage' => 'Thank you for your submission',
                'failMessage' => 'Sorry, form submission failed',
                'validationMessage' => 'Form validation failed',
            ]);

            $validation_rules = wp_parse_args($validation_rules, [
                'name' => false,
                'email' => true,
                'message' => true,
            ]);

            // Return the merged data
            return [
                'form_settings' => $form_settings,
                'submission_settings' => $submission_settings,
                'validation_rules' => $validation_rules,
                'form_data' => $form_data,
            ];
        }

        /**
         * Send email with form data.
         *
         * @param array $data The form data, including settings and submitted values.
         */
        public function send_mail($data)
        {
            $form_settings = $data['form_settings'];
            $form_data = $data['form_data'];

            $subject = $form_settings['emailSubject'];
            $message = $this->build_email_message($form_settings, $form_data);

            $emailCC = $form_settings['emailCC'];
            $emailBCC = $form_settings['emailBCC'];

            $headers = array(
                'Content-Type: text/html; charset=UTF-8',
            );

            if (!empty($emailCC)) {
                $headers[] = 'Cc: ' . $emailCC;
            }

            if (!empty($emailBCC)) {
                $headers[] = 'Bcc: ' . $emailBCC;
            }

            $mail_sent = wp_mail(
                $form_settings['emailTo'],
                $subject,
                $message,
                $headers
            );

            if ($mail_sent) {
                return true;
            }

            return false;
        }

        private function success_response($message, $status_code = 200)
        {
            wp_send_json_success($message, $status_code);
        }

        private function save_form_entries($data){
            $form_settings = $data['form_settings'];
            $entries_post_type = 'zolo_form_entries';
            $form_title = $form_settings['formTitle'];
            $entry_title = $form_title . '-' . substr(bin2hex(random_bytes(3)), 0, 6);

            $entry_data = [
                'post_title' => $entry_title,
                'post_type' => $entries_post_type,
                'post_status' => 'publish',
            ];

            $entry_id = wp_insert_post($entry_data);

            if ($entry_id) {
                add_post_meta($entry_id, 'form_entry_data', json_encode($data), true);
                return $entry_id;
            }

            return false;
        }

        /**
         * Build email message content.
         *
         * @param array $form_settings The form settings.
         * @param array $form_data The submitted form data.
         * @return string The email message.
         */
        private function build_email_message($form_settings, $form_data)
        {
            // Remove 'formId' and 'nonce' from the form data
            unset($form_data['formId']);
            unset($form_data['nonce']);

            // Initialize the message content with the subject
            $message = "<body>";

            if(!empty($form_settings['formTitle'])) {
                $message .= "<h2 style='text-align: center;'>" . esc_html($form_settings['formTitle']) . "</h2>";
                $message .= "<br>";
            }

            $message .= '<table width="100%" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF" style="border: 1px solid #EAF2FA; word-break: break-word;">';
            $message .= "<tbody>";
            // Loop through each field and add it to the message
            foreach ($form_data as $key => $data) {
                $message .= "<tr bgcolor='#EAF2FA'>";
                $message .= "<td>";
                $message .= "<strong>" . esc_html($data['label'] ?: $key) . "</strong>";
                $message .= "</td>";
                $message .= "</tr>";
                $message .= "<tr bgcolor='#FFFFFF'>";
                $message .= "<td>";
                $message .= esc_html($data['value']);
                $message .= "</td>";
                $message .= "</tr>";
            }

            if(!empty($form_settings['emailSubject'])) {
                $message .= "<tr bgcolor='#EAF2FA'>";
                $message .= "<td>";
                $message .= "<strong>" . __("Subject", "zoloblocks") . "</strong>";
                $message .= "</td>";
                $message .= "</tr>";
                $message .= "<tr bgcolor='#FFFFFF'>";
                $message .= "<td>";
                $message .= esc_html($form_settings['emailSubject']);
                $message .= "</td>";
                $message .= "</tr>";
            }

            $message .= "</tbody>";
            $message .= "</table>";
            $message .= "</body>";

            // Return the dynamically generated message with proper HTML formatting
            return $message;
        }
    }
}
