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
use Zolo\Helpers\ZoloHelpers;

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
        // add_action('wp_enqueue_scripts', [$this, 'enqueue_dynamic_styles'], 90);
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
            $currnet_post_type = get_post_type();
            do_action('zolo_block_render_block', $block);
            if (isset($block['attrs']['zoloStyles'])) {
                $uniqueId = $block['attrs']['uniqueId'];
                $style = ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                $handle = 'zolo-block-inline-style-' . $uniqueId;
                wp_register_style($handle, false, ['zolo-block-common-style'], ZOLO_VERSION, 'all');
                wp_enqueue_style($handle, false, [], ZOLO_VERSION, 'all');
                wp_add_inline_style($handle, $style);
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
    // public function enqueue_dynamic_styles() {
    //     var_dump($this->dynamic_styles);
    //     if (isset($this->dynamic_styles)) {
    //         $handle = 'zolo-block-inline-style-' . rand(100, 10000);
    //         wp_register_style($handle, false, ['zolo-block-common-style'], ZOLO_VERSION, 'all');
    //         wp_enqueue_style($handle, false, [], ZOLO_VERSION, 'all');
    //         wp_add_inline_style($handle, $this->dynamic_styles);
    //     }
    // }
}
