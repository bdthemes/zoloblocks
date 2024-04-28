<?php

/**
 * Zolo Blocks Enqueues.
 *
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Zolo_Block_Enqueue')) {
    /**
     * Class Zolo_Block_Enqueue.
     */
    final class Zolo_Block_Enqueue {

        /**
         * Member Variable
         *
         * @var instance
         */
        private static $instance;

        /**
         *  Initiator
         */
        public static function get_instance() {
            if (!isset(self::$instance)) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        /**
         * Constructor
         */
        public function __construct() {
            // only for editor
            add_action('enqueue_block_assets', [$this, 'editor_assets_loader']);

            // enqueue style for both editor and frontend
            add_action('enqueue_block_assets', [$this, 'block_assets_loader']);

            // enqueue inline css to hide block before animation
            add_action('wp_head', [$this, 'initial_css_loader']);
        }

        /**
         * Load Inline CSS
         *
         * @since 0.0.1
         *
         * @return void
         */
        public function initial_css_loader() {
            $custom_css = ".zolo-entrance-animation:not(.animation-initialized) { opacity: 0; }
                   .zolo-editor .zolo-entrance-animation:not(.animation-initialized) { opacity: 1; }";
            if (!empty($custom_css)) {
                echo '<style id="zolo-init">' . $custom_css . '</style>';
            }
        }


        /**
         * Load Block Assets for both editor and frontend
         * @since 0.0.1
         * @return void
         */
        public function block_assets_loader() {
            //Register vendor bundle
            $dependency_path  = trailingslashit(ZOLO_DIR_PATH) . 'vendor-bundle/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $version = $script_dependecy['version'];

            // Enqueue vendor bundle Scripts
            wp_register_script(
                'zolo-block-editor-dependency',
                trailingslashit(ZOLO_ADMIN_URL) . 'vendor-bundle/index.js',
                $script_dependecy['dependencies'],
                $version,
                true
            );

            // wp localize script
            wp_localize_script('zolo-block-editor-dependency', 'zoloSettings', [
                'ajaxurl'      => admin_url('admin-ajax.php'),
                'zolo_nonce'   => wp_create_nonce('zolo-nonce'),
                'googleAPIKey' => get_option('zolo_google_api_key'),
                'maskShapes' => [
                    'abstract'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/abstract.svg',
                    'abstract-brush-1' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/abstract-brush-1.svg',
                    'abstract-brush-2' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/abstract-brush-2.svg',
                    'aesthetic-blob'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/aesthetic-blob.svg',
                    'amorphous-blob'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/amorphous-blob.svg',
                    'brush'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/brush.svg',
                    'comment'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/comment.svg',
                    'container'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/container.svg',
                    'hand-drawn-blob'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/hand-drawn-blob.svg',
                    'hexagon'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/hexagon.svg',
                    'hexagon-blob'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/hexagon-blob.svg',
                    'irregular-blob'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/irregular-blob.svg',
                    'minimal-round'    => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/minimal-round.svg',
                    'octagon'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/octagon.svg',
                    'organic-blob'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/organic-blob.svg',
                    'oval-blob'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/oval-blob.svg',
                    'pattern'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/pattern.svg',
                    'popup-1'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/popup-1.svg',
                    'popup-2'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/popup-2.svg',
                    'popup-3'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/popup-3.svg',
                    'round-brush'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/round-brush.svg',
                    'round-design'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/round-design.svg',
                    'squar-abstract'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/squar-abstract.svg',
                    'squar-pattern'    => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/squar-pattern.svg',
                    'testimonial'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/testimonial.svg',
                    'triangle-blob'    => trailingslashit(ZOLO_ADMIN_URL) . 'assets/mask-shapes/triangle-blob.svg'
                ]
            ]);

            // assets for both editor and frontend
            wp_enqueue_style(
                'zolo-block-common-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/dist/style.css',
                [],
                ZOLO_VERSION
            );

            // override css
            if (is_admin()) {
                return;
            }

            // form validation
            if (has_block('zolo/form')) {
                wp_enqueue_script(
                    'zolo-form-validation',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/form/pristine.min.js',
                    [],
                    ZOLO_VERSION,
                    true
                );
            }

            // commom viewport / waypoint
            wp_enqueue_script(
                'zolo-waypoint-frontent',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/waypoint/noframework.waypoints.min.js',
                [],
                ZOLO_VERSION,
                true
            );

            // magnific popup animations
            if (has_block('zolo/image-gallery')) {
                wp_enqueue_style(
                    'zolo-maginific-popup-animations',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/css/magnific-popup/mpa-animations.css',
                    [],
                    ZOLO_VERSION
                );
            }

            // popup
            if (has_block('zolo/image-gallery')) {
                wp_enqueue_script(
                    'zolo-fslightbox-popup',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/lightbox/fslightbox.js',
                    [],
                    ZOLO_VERSION,
                    true
                );
            }

            // Swiper Scripts and Styles
            if (has_block('zolo/slider') || has_block('zolo/post-carousel') || has_block('zolo/review-carousel')) {
                wp_enqueue_style(
                    'zolo-swiper-frontend-style',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/css/swiper/swiper-bundle.min.css',
                    [],
                    ZOLO_VERSION
                );

                wp_enqueue_script(
                    'zolo-swiper-frontend-script',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/swiper/swiper-bundle.min.js',
                    [],
                    ZOLO_VERSION,
                    true
                );
            }

            // accordion Scripts and Styles
            if (has_block('zolo/accordion')) {
                wp_enqueue_script(
                    'zolo-accordion-frontend-script',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/accordion/accordion.min.js',
                    [],
                    ZOLO_VERSION,
                    true
                );
            }

            // social share Scripts and Styles
            if (has_block('zolo/social-share')) {
                wp_enqueue_script('zolo-social-share-frontend', trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/sharer/sharer.min.js', [], ZOLO_VERSION, true);
            }

            // roll number js
            if (has_block('zolo/progress-bar')) {
                wp_enqueue_script('zolo-roll-number', trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/animate-counter/rollNumber.js', [], ZOLO_VERSION, true);
            }

            if (has_block('zolo/tabs')) {
                wp_enqueue_script('zolo-tabs-frontend', trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/tabs/tabify.js', [], ZOLO_VERSION, true);
            }

            if (has_block('zolo/charts')) {
                wp_enqueue_script('zolo-charts-lib-frontend', trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/apexcharts/apexcharts.min.js', [], ZOLO_VERSION, true);
            }

            // load gsap from cdn
            wp_enqueue_script('zolo-transform-effects', trailingslashit(ZOLO_ADMIN_URL) . '/build/animation/index.js', [], ZOLO_VERSION, true);
        }
        /**
         * Load Block Editor Assets
         *
         * @since 0.0.1
         *
         * @return void
         */
        public function editor_assets_loader() {
            if (!is_admin()) {
                return;
            }

            // override css
            wp_enqueue_style(
                'zolo-block-editor-override-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/css/override/editor-override.css',
                [],
                ZOLO_VERSION,
                'all'
            );

            // Swiper Scripts and Styles
            wp_enqueue_style(
                'zolo-swiper-editor-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/css/swiper/swiper-bundle.min.css',
                [],
                ZOLO_VERSION,
                'all'
            );

            wp_enqueue_script(
                'zolo-swiper-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/swiper/swiper-bundle.min.js',
                [],
                ZOLO_VERSION,
                false
            );

            //Register Modules
            $modules_dep_path = ZOLO_DIR_PATH . 'build/module/index.asset.php';
            $script_dependecy = file_exists($modules_dep_path) ? include $modules_dep_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $version = $script_dependecy['version'];

            // Enqueue Modules Scripts
            wp_register_script(
                'zolo-block-modules',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/module/index.js',
                $script_dependecy['dependencies'],
                $version,
                true
            );

            $dependency_path  = trailingslashit(ZOLO_DIR_PATH) . 'build/dist/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $version = $script_dependecy['version'];

            $script_dependecy = array_merge(
                $script_dependecy['dependencies'],
                [
                    'wp-blocks',
                    'wp-i18n',
                    'wp-element',
                    'wp-components',
                    'zolo-block-editor-dependency',
                    'zolo-block-modules',
                    'zolo-swiper-editor-script'
                ]
            );

            // Enqueue Scripts
            wp_enqueue_script(
                'zolo-block-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/dist/index.js',
                $script_dependecy,
                $version,
                true
            );

            // Controls Editor style.
            wp_enqueue_style(
                'zolo-block-control-editor-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/module/style.css',
                [
                    'wp-edit-blocks',
                    'zolo-block-common-style',
                    'zolo-swiper-editor-style',
                    'zolo-block-editor-override-style'
                ],
                ZOLO_VERSION
            );

            // accordion
            wp_enqueue_script(
                'zolo-accordion-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/accordion/accordion.min.js',
                [],
                ZOLO_VERSION,
                true
            );

            //get editor type
            global $pagenow;

            $editor_type = 'edit-post';
            if ($pagenow == 'site-editor.php') {
                $editor_type = 'edit-site';
            } elseif ($pagenow == 'widgets.php') {
                $editor_type = 'edit-widgets';
            }

            //this file use for js
            wp_localize_script('zolo-block-editor-script', 'zoloParams', [
                'ajaxurl'        => admin_url('admin-ajax.php'),
                'post_types'     => ZoloHelpers::get_post_types(),
                'get_users'      => ZoloHelpers::get_all_users(),
                'get_taxonomies' => ZoloHelpers::get_taxonomies(),
                'all_term_list'  => ZoloHelpers::get_all_taxonomy(),
                'home_url'       => home_url(),
                'zolo_nonce'     => wp_create_nonce('zolo-nonce'),
                'editor_type'    => $editor_type,
                'admin_email'    => get_option('admin_email'),
                'blocksPreview'  => [
                    'advancedSearch' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-search.svg',
                    'button'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-button.svg',
                    'businessHour' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/business-hour.svg',
                    'heading'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-heading.svg',
                    'iconBox'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-icon-box.svg',
                    'imageGallery' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/image-gallery.svg',
                    'image'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/image-preview.svg',
                    'charts'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/charts.svg',
                    'postCarousel' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-carousel.svg',
                    'postGrid'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-grid.svg',
                    'postList'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-list.svg',
                    'pricingTable' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/pricing-table.svg',
                    'socialLinks'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/social-links.svg',
                    'teamGrid'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/team-grid.svg',
                    'brandGrid'    => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/brand-grid.svg',
                    'review'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/review.svg',
                    'reviewGrid'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/review-grid.svg',
                    'profileCard'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/profile-card.svg',
                    'counter'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/counter.svg',
                    'slider'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/slider.svg',
                    'starRating'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/star-rating.svg',
                    'accordion'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/accordion.svg',
                    'cta'             => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/call-to-action.svg',
                    'fancyList'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/fancy-list.svg',
                    'progressbar'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/progress-bar.svg',
                    'gmap'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/gmap.svg',
                    'flipbox'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/flip-box.svg',
                    'countdown'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/countdown.svg',
                    'form'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/form.svg',
                    'list'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/list.svg',
                    'text'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/text.svg',
                    'textarea'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/textarea.svg',
                    'mail'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/mail.svg',
                    'tabs'            => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/tabs.svg',
                    'imageComparison' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/image-comparison.svg',
                ]
            ]);

            // placeholder photos
            wp_localize_script('zolo-block-editor-script', 'zoloPlaceholders', [
                'placeholder'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder.svg',
                'placeholderTwo'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder-2.svg',
                'placeholderThree' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder-3.svg',
                'placeholderFour'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder-4.svg',
                'placeholderFive'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder-5.svg',
                'placeholderSix'   => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/placeholder-6.svg',
                'avatarSquare'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/avatar-square.svg',
                'avatarRound'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/avatar-round.svg',
                'presetBg'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/preset-bg.svg',
                'zbBrand'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/zb-brand.svg',
                'epBrand'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/ep-brand.svg',
                'psBrand'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/ps-brand.svg',
                'upkBrand'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/upk-brand.svg',
            ]);
        }
    }
}

Zolo_Block_Enqueue::get_instance();
