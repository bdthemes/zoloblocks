<?php
namespace Zolo\Blocks;
use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

 if( ! class_exists( 'NoticeBlock' ) ) {

    /**
     * Class NoticeBlock
     * 
     * @since 1.1.0
     */
    class NoticeBlock {

        use SingletonTrait;

        /**
         * Constructor 
         * 
         * @since 1.1.0
         * 
         * @return void
         */
        public function __construct() {
            add_filter( 'render_block_zolo/notice', [$this, 'render_notice_block'], 10, 2 ); 
        }

        /**
         * Render notice block 
         * 
         * @since 0.0.1
         * 
         * @return string
         */
        public function render_notice_block( $block_content, $block ) {

            $attrs           = $block['attrs'];
            $id              = $attrs['uniqueId'] ?? '';
            $dismissible     = $attrs['dismissible'] ?? false;
            $infinite_repeat = $attrs['showAfterDismiss'] ?? false;

            // dismissible is true and infinite repeat is false
            if( $dismissible === true && $infinite_repeat === false ) {
                $cookie_name = 'zolo_' . $id; 
                if( isset( $_COOKIE[$cookie_name] ) && $_COOKIE[$cookie_name] === 'true' ) {
                    return '';
                }
            }
            return $block_content;

        }

    }
 }