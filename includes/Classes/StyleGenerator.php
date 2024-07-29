<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

if (!defined('ABSPATH')) {
    exit;
}

class StyleGenerator {
    use SingletonTrait;

    private $dynamic_styles = '';

    public function __construct() {
        // Ensure blocks in post content are rendered
        add_filter('the_content', 'do_blocks', 9);

        // Generate Style on block render
        add_filter('render_block', [$this, 'generate_style_on_render_block'], 10, 2);

        // Enqueue Dynamic Styles
        if( wp_is_block_theme() ) {
            add_action('wp_head', [$this, 'output_dynamic_styles']);
        } else {
            add_action('wp_footer', [$this, 'output_dynamic_styles']);
        }

    }

    public function generate_style_on_render_block($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {
            do_action('zolo_block_render_block', $block);
            if (isset($block['attrs']['zoloStyles'])) {
                $style = ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                $this->dynamic_styles .= $style;
            }
        }

        return $block_content;
    }

    public function output_dynamic_styles() {
        if (!empty($this->dynamic_styles)) {
            echo '<style id="zolo-block-inline-styles">' . $this->dynamic_styles . '</style>';
        }
    }
}
