<?php

namespace Zolo\Form;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;


// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

/**
 * Class for registering form data post type.
 *
 * @package Zolo
 */
class FormDataPostType
{
    private $post_type = "zolo_form_data";
    use SingletonTrait;

    public function __construct()
    {
        add_action("init", [$this, "register_form_data_post_type"]);
        add_action("save_post", [$this, "zolo_save_form_data"], 10, 2);
        add_action("add_meta_boxes_{$this->post_type}", [$this, "add_form_data_meta_boxes"]);
    }

    public function register_form_data_post_type()
    {
        register_post_type(
            $this->post_type,
            array(
                "labels" => array(
                    "name" => "Form Data",
                    "singular_name" => "Form Data",
                    "add_new" => "Add New",
                    "add_new_item" => "Add New Form Data",
                    "edit_item" => "Edit Form Data",
                    "new_item" => "New Form Data",
                    "view_item" => "View Form Data",
                    "search_items" => "Search Form Data",
                    "not_found" => "No form data found",
                    "not_found_in_trash" => "No form data found in trash",
                    "parent_item_colon" => "",
                ),
                "public" => false,
                "menu_icon" => "dashicons-format-aside",
                "menu_position" => 100,
                "supports" => array("title"),
            )
        );
    }

    public function zolo_save_form_data($post_id, $post)
    {
        $post_content = $post->post_content;

        if (empty($post_content)) {
            return;
        }

        $blocks = parse_blocks($post_content);

        // Call the external method to get form attributes
        $form_attributes = $this->get_form_attributes($blocks);

        foreach ($form_attributes as $form_attribute) {
            $form_id = $form_attribute['formId'];
            $post_args = [
                'name' => $form_id,
                'post_type' => $this->post_type,
                'post_status' => 'publish',
                'posts_per_page' => 1,
            ];

            $posts = get_posts($post_args);
            if (empty($posts[0]->ID)) {
                $post_id = wp_insert_post([
                    'post_type' => $this->post_type,
                    'name' => $form_id,
                    'post_status' => 'publish',
                    'post_title' => $form_id
                ]);
                if (!is_wp_error($post_id)) {
                    update_post_meta($post_id, 'form_settings', $form_attribute['formSettings']);
                    update_post_meta($post_id, 'submission_settings', $form_attribute['submissionSettings']);
                    update_post_meta($post_id, 'validation_rules', $form_attribute['validationRules']);
                    update_post_meta($post_id, 're_captcha', $form_attribute['reCaptcha']);
                }
            } else {
                update_post_meta($posts[0]->ID, 'form_settings', $form_attribute['formSettings']);
                update_post_meta($posts[0]->ID, 'submission_settings', $form_attribute['submissionSettings']);
                update_post_meta($posts[0]->ID, 'validation_rules', $form_attribute['validationRules']);
                update_post_meta($posts[0]->ID, 're_captcha', $form_attribute['reCaptcha']);
            }
        }
    }

    // Move get_form_attributes outside the save method
    public function get_form_attributes($blocks, &$form_attributes = [])
    {
        foreach ($blocks as $block) {
            if ($block['blockName'] === 'zolo/form' && isset($block['attrs'])) {
                $form_attributes[] = [
                    'formId' => $block['attrs']['formId'] ?? '',
                    'formSettings' => $block['attrs']['formSettings'] ?? [],
                    'submissionSettings' => $block['attrs']['submissionSettings'] ?? [],
                    'validationRules' => $block['attrs']['validationRules'] ?? [],
                    'reCaptcha' => $block['attrs']['reCaptcha'] ?? [],
                ];
            }
            if (!empty($block['innerBlocks'])) {
                $this->get_form_attributes($block['innerBlocks'], $form_attributes); // Recursive call
            }
        }
        return $form_attributes;
    }

    public function add_form_data_meta_boxes()
    {
        add_meta_box(
            "zolo_form_data",
            "Form Data",
            [$this, "print_form_fields_data"],
            $this->post_type,
            "normal",
            "high"
        );
    }


    public function print_form_fields_data()
    {
        $post_id = get_the_ID();
        $form_settings = get_post_meta($post_id, "form_settings", true);
        $submission_settings = get_post_meta($post_id, "submission_settings", true);
        $validation_rules = get_post_meta($post_id, "validation_rules", true);
        $re_captcha = get_post_meta($post_id, "re_captcha", true);
        $data = [
            'form_settings' => $form_settings ?? [],
            'submission_settings' => $submission_settings ?? [],
            'validation_rules' => $validation_rules ?? [],
            're_captcha' => $re_captcha ?? [],
        ];

        if (empty($data)) {
            return;
        }

        foreach ($data as $key => $value) {
            if (!empty($value) && is_array($value)) {
                $content = '<h3>' . $key . '</h3>' . $this->generate_form_data_table($value);
                echo wp_kses($content, ZoloHelpers::wp_kses_allowed_svg($content));
            }
        }

        // echo $this->generate_form_entries_table($form_data, $form_settings);
    }


    /**
     * Generates the HTML table for displaying form data.
     *
     * @param array $data An associative array of form data where the key is the label
     *                    and the value is the field content.
     * @return string HTML representation of the form data table.
     */

    private function generate_form_data_table($data)
    {
        $content = '<table width="100%" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF" 
                    style="border: 1px solid #EAF2FA; word-break: break-word;">';
        $content .= "<tbody>";

        // Loop through each form field
        foreach ($data as $label => $field) {
            $content .= FormEntries::getInstance()->generate_table_row($label, $field);
        }

        $content .= "</tbody>";
        $content .= "</table>";

        return $content;
    }
}
