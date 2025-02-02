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
class FormEntries
{
    private $post_type = "zolo_form_entries";
    use SingletonTrait;

    public function __construct()
    {
        add_action("init", [$this, "register_form_entries_post_type"]);
        add_filter("post_row_actions", [$this, "edit_entry_row_link"], 10, 2);
        add_action("add_meta_boxes_{$this->post_type}", [$this, "add_entry_meta_boxes"]);
    }

    public function register_form_entries_post_type()
    {
        register_post_type(
            $this->post_type,
            array(
                "labels" => array(
                    "name" => "Form Entries",
                    "singular_name" => "Form Entry",
                    "view_item" => "View Form Entry Data",
                    "search_items" => "Search Form Entry Data",
                    "not_found" => "No form entry data found",
                    "not_found_in_trash" => "No form entry data found in trash",
                ),
                'supports'              => ['title'],
                'capabilities'          => ['create_posts' => 'do_not_allow'],
                'map_meta_cap'          => true,
                'hierarchical'          => false,
                'public'                => false,
                'show_ui'               => true,
                'show_in_menu'          => false,
                'menu_icon'             => 'dashicons-format-aside',
                'menu_position'         => 999999,
                'show_in_admin_bar'     => false,
                'show_in_nav_menus'     => false,
                'can_export'            => true,
                'has_archive'           => false,
                'publicly_queryable'    => false,
                'rewrite'               => false,
                'query_var'             => true,
                'exclude_from_search'   => true,
                'capability_type'       => 'page',
                'show_in_rest'          => true,
            )
        );
    }

    public function edit_entry_row_link($actions, $post)
    {
        if ($post->post_type == $this->post_type) {
            // Create the "View" action first
            $view_action = [
                "view" => "<a href='" . get_edit_post_link($post->ID) . "'>" . __("View", "zoloblocks") . "</a>"
            ];

            // Remove the "edit" action
            unset($actions["edit"]);

            // Merge "View" first, then the remaining actions
            $actions = array_merge($view_action, $actions);
        }
        return $actions;
    }


    public function add_entry_meta_boxes()
    {
        add_meta_box(
            "zolo_form_entries_data_view",
            __("Entry Data", "zoloblocks"),
            [$this, "render_form_entries_meta_box"],
            $this->post_type,
            "normal",
            "high"
        );
    }

    public function render_form_entries_meta_box() {
        $post_id = get_the_ID();
        $data = get_post_meta($post_id, "form_entry_data", true);
    
        if (empty($data)) {
            return;
        }
    
        $data = json_decode($data, true);
        $form_settings = $data['form_settings'] ?? [];
        $form_data = $data['form_data'] ?? [];
    
        echo $this->generate_form_entries_table($form_data, $form_settings);
    }
    
    /**
     * Generates the form entries table HTML.
     *
     * @param array $form_data Form input data.
     * @param array $form_settings Form settings including email subject.
     * @return string HTML output of the form entries table.
     */
    private function generate_form_entries_table($form_data, $form_settings) {
        unset($form_data['formId']);
        unset($form_data['nonce']);
        

           
        $content = '<table class="form-entry-table"width="100%" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF" 
                    style="border: 1px solid #EAF2FA; word-break: break-word;">';

                    $content .= '<style>
                    table.form-entry-table td {
                        padding: 14px;
                        font-size: 14px;
                    }
                </style>';
        $content .= "<tbody>";
        
        // Loop through each form field
        foreach ($form_data as $key => $field) {
            $label = esc_html($field['label'] ?? $key);
            $value = esc_html($field['value'] ?? '');
    
            $content .= $this->generate_table_row($label, $value);
        }
    
        // Add email subject if available
        if (!empty($form_settings['emailSubject'])) {
            $content .= $this->generate_table_row(__("Subject", "zoloblocks"), esc_html($form_settings['emailSubject']));
        }
    
        $content .= "</tbody>";
        $content .= "</table>";
    
        return $content;
    }
    
    /**
     * Generates a single table row for the form entries table.
     *
     * @param string $label The field label.
     * @param string $value The field value.
     * @return string HTML for the table row.
     */
    public function generate_table_row($label, $value) {
        return "<tr bgcolor='#EAF2FA'>
                    <td><strong>{$label}</strong></td>
                </tr>
                <tr bgcolor='#FFFFFF'>
                    <td>{$value}</td>
                </tr>";
    }
    
}
