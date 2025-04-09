<?php

namespace Zolo\Form;

use WP_HTML_Tag_Processor;
use Zolo\Traits\SingletonTrait;


// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

/**
 * Class for registering form data post type.
 *
 * @package Zolo
 */
class Hooks {
    use SingletonTrait;
    private $form_fields_block;

    public function __construct() {
        add_action('init', [$this, 'init_form_field_hooks']);
    }

    public function init_form_field_hooks() {
        $this->form_fields_block = [
            "zolo/checkbox-field" => __("Checkbox", "zoloblocks"),
            "zolo/email" => __("Email", "zoloblocks"),
            "zolo/number-field" => __("Number", "zoloblocks"),
            "zolo/radio-field" => __("Radio", "zoloblocks"),
            "zolo/select-field" => __("Select", "zoloblocks"),
            "zolo/text-field" => __("Text", "zoloblocks"),
            "zolo/textarea" => __("Message", "zoloblocks"),
            'zolo/country-field' => __("Country", "zoloblocks"),
            'zolo/datetime-field' => __("Date/Time", "zoloblocks"),
            'zolo/phonenumber-field' => __("Phone Number", "zoloblocks"),
        ];

        foreach ($this->form_fields_block as $name => $block) {
            add_filter("render_block_{$name}", [$this, 'print_form_fields_data'], 10, 2);
        }
    }

    public function print_form_fields_data($content, $parsed_block) {
        if (isset($parsed_block['blockName'])) {
            $block_name = $parsed_block['blockName'];
            if (isset($this->form_fields_block[$block_name])) {
                $defult_label = $this->form_fields_block[$block_name];
                $label = isset($parsed_block['attrs']['label']) ? $parsed_block['attrs']['label'] : $defult_label;
                $tags = new \WP_HTML_Tag_Processor($content);
                $tags->next_tag();
                $tags->set_attribute('data-field-settings', wp_json_encode(array('label' => $label)));
                $content = $tags->get_updated_html();
            }
        }
        return $content;
    }
}
