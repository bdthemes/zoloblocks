<?php

/**
 * ZoloHelpers
 *
 * AJAX Event Handler
 *
 * @class    ZoloHelpers
 * @version  0.0.1
 * @package  zolo-helpers
 * @category Class
 */

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class StyleGenerator {
    use SingletonTrait;

    private $dynamic_styles; 

    public function __construct() {
        //Generate Style on block render
        add_filter('render_block', [$this, 'generate_style_on_render_block'], 10, 2);

        // Enqueue Dynamic Styles
        add_action('wp_enqueue_scripts', [$this, 'enqueue_dynamic_styles']);
    }

    /**
     * Hanlde Block Style
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function generate_style_on_render_block($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {
            do_action('zolo_block_render_block', $block);
            if (isset($block['attrs']['zoloStyles'])) {
                $style = $this::zolo_generate_style($block['attrs']['zoloStyles']);
                $this->dynamic_styles .= $style; 
            }
        }

        return $block_content;
    }

    /**
     * Enqueue Dynamic Styles
     *
     * @since 0.0.1
     *
     * @return void
     */
    public function enqueue_dynamic_styles() {
        if (!empty($this->dynamic_styles)) {
            $handle = 'zolo-block-inline-style-' . rand(100, 10000); 
            wp_register_style($handle, false, ['zolo-block-common-style'], ZOLO_VERSION, 'all');
            wp_enqueue_style($handle, false, [], ZOLO_VERSION, 'all');
            wp_add_inline_style($handle, $this->dynamic_styles);
        }
    }

    /**
     * Generate Style String
     */
    public static function zolo_generate_style($style) {
        $css = "";
        if (isset($style['desktop']) && strlen($style['desktop']) > 0) {
            $css .= $style['desktop'];
        }
        if (isset($style['tab']) && strlen($style['tab']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 1024px) {%1$s}',
                $style['tab']
            );
        }
        if (isset($style['mobile']) && strlen($style['mobile']) > 0) {
            $css .= sprintf(
                '@media all and (max-width: 767px) {%1$s}',
                $style['mobile']
            );
        }

        if (!empty($style['customCss']) && strlen($style['customCss']) > 0) {
            $css .= $style['customCss'];
        }

        return $css;
    }
}
