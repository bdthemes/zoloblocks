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



    public function __construct() {
        //Generate Style on block render
        add_filter('render_block', [$this, 'generate_style_on_render_block'], 10, 2);
        add_filter('render_block', [$this, 'add_entrance_animation'], 10, 2);
    }

    /**
     * Add Entrance Animation
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function add_entrance_animation($block_content, $block) {
        if (isset($block['blockName']) && str_contains($block['blockName'], 'zolo/')) {

            $animationActive = $block['attrs']['entranceAnimationActive'] ?? false;
            if ($animationActive) {
                $entranceAnimation = $block['attrs']['entranceAnimation'] ?? [
                    'translateX' => ['value' => 0, 'unit' => 'px'],
                    'translateY' => ['value' => 50, 'unit' => 'px'],
                    'translateZ' => ['value' => 0, 'unit' => 'px'],
                    'rotateX' => ['value' => 0, 'unit' => 'deg'],
                    'rotateY' => ['value' => 0, 'unit' => 'deg'],
                    'rotateZ' => ['value' => 0, 'unit' => 'deg'],
                    'scaleX' => ['value' => 1, 'unit' => ''],
                    'scaleY' => ['value' => 1, 'unit' => ''],
                    'scaleZ' => ['value' => 1, 'unit' => ''],
                    'skewX' => ['value' => 0, 'unit' => 'deg'],
                    'skewY' => ['value' => 0, 'unit' => 'deg'],
                    'opacity' => 1,
                    'easing' => 'ease-out',
                    'easingCustom' => '',
                    'repeat' => false,
                    'perspective' => 0,
                    'duration' => 600,
                    'delay' => 0,
                    'transformOrigin' => 'center',
                    'presetAnimation' => 'bottomMedium',
                    'transformOriginCustom' => '',

                ];

                // Convert the entrance animation to JSON string
                $entranceAnimation = json_encode($entranceAnimation);

                if (!empty($entranceAnimation)) {
                    // Parse the block content as HTML
                    $dom = new \DOMDocument();
                    @$dom->loadHTML($block_content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

                    // Retrieve the outermost div
                    $outerDiv = $dom->getElementsByTagName('div')->item(0);

                    if ($outerDiv) {
                        // Retrieve existing class attribute
                        $existingClasses = $outerDiv->getAttribute('class');

                        // Add the animation attribute
                        $outerDiv->setAttribute('data-animation', $entranceAnimation);

                        // Restore existing classes
                        if (!empty($existingClasses)) {
                            $outerDiv->setAttribute('class', $existingClasses);
                        }

                        // Save the modified HTML
                        $block_content = $dom->saveHTML();
                    }
                }
            }
        }

        return $block_content;
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
                // minify style string
                // $style = preg_replace( '/\s+/', ' ', $style );

                // var_dump($block['attrs']);

                // $block_content = sprintf(
                //     '<style>%1$s</style>%2$s',
                //     $style,
                //     $block_content
                // );


                $handle = isset($block['attrs']['uniqueId']) ? $block['attrs']['uniqueId'] : 'zolo-blocks';

                // if ( is_array( $style ) && !empty( $style ) ) {
                //     $style = implode(' ', $style);
                // }
                // // minify style to remove extra space
                // $style = preg_replace( '/\s+/', ' ', $style );

                // var_dump($style);

                // register style
                wp_register_style($handle, false, ['zolo-block-common-style'], ZOLO_VERSION, 'all'); // wp_register_style( $handle, $src, $deps, $ver, $media );
                wp_enqueue_style($handle, false, [], ZOLO_VERSION, 'all');
                wp_add_inline_style($handle, $style);
            }
        }

        return $block_content;
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
