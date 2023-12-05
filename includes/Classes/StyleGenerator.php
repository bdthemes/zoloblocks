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
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class StyleGenerator {
    use SingletonTrait;

    public function __construct() {
        //Generate Style on block render
        add_filter( 'render_block', [$this, 'generate_style_on_render_block'], 10, 2 );
    }

    /**
     * Hanlde Block Style
     *
     * @since 0.0.1
     *
     * @return array
     */
    public function generate_style_on_render_block( $block_content, $block ) {
        if ( isset( $block['blockName'] ) && str_contains( $block['blockName'], 'zolo/' ) ) {
            do_action('zolo_block_render_block', $block);
            if ( isset( $block['attrs']['zoloStyles'] ) ) {
                $style = $this::zolo_generate_style( $block['attrs']['zoloStyles'] );
                  // minify style string
                $style = preg_replace( '/\s+/', ' ', $style );

                $block_content = sprintf(
                    '<style>%1$s</style>%2$s',
                    $style,
                    $block_content
                );
            }
        }

        return $block_content;
    }

    /**
     * Generate Style String
     */
    public static function zolo_generate_style( $style ) {
        $css = "";
        if ( isset( $style['desktop'] ) && strlen( $style['desktop'] ) > 0 ) {
            $css .= $style['desktop'];
        }
        if ( isset( $style['tab'] ) && strlen( $style['tab'] ) > 0 ) {
            $css .= sprintf(
                '@media all and (max-width: 1024px) {%1$s}',
                $style['tab']
            );
        }
        if ( isset( $style['mobile'] ) && strlen( $style['mobile'] ) > 0 ) {
            $css .= sprintf(
                '@media all and (max-width: 767px) {%1$s}',
                $style['mobile']
            );
        }

        return $css;
    }
}
