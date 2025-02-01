<?php

namespace Zolo\Form;

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
    use SingletonTrait;

    public function __construct()
    {
        add_action("init", [$this, "register_form_data_post_type"]);
        add_action("save_post", [$this, "zolo_save_form_data"], 10, 2);
    }

    public function register_form_data_post_type()
    {
        register_post_type(
            "zolo_form_data",
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
                "public" => true,
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
                'post_type' => 'zolo_form_data',
                'post_status' => 'publish',
                'posts_per_page' => 1,
            ];

            $posts = get_posts($post_args);
            if (empty($posts[0]->ID)) {
                $post_id = wp_insert_post([
                    'post_type' => 'zolo_form_data',
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
            }else{
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
}
