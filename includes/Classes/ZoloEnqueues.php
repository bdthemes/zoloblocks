<?php

namespace Zolo\Classes;

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\Admin\Author;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

if (! class_exists('ZoloEnqueues')) {

    /**
     * The ZoloEnqueues class handles enqueuing scripts and styles for the Zolo theme.
     *
     * This class provides methods to enqueue scripts and stylesheets required by the Zolo theme.
     * It ensures that the necessary assets are loaded in the correct order and with the appropriate dependencies.
     *
     * @since 1.0.0
     */
    class ZoloEnqueues {

        use SingletonTrait;

        /**

         * Extensions status
         *
         * @var array
         */

        public function __construct() {
            // block editor assets
            add_action('enqueue_block_editor_assets', [$this, 'editor_assets_loader'], 1);

            // enqueue style for both editor and frontend
            add_action('enqueue_block_assets', [$this, 'block_assets_loader']);
        }

        /**
         * Load Block Assets for both editor and frontend
         * @since 0.0.1
         * @return void
         */
        public function block_assets_loader() {
            /**
             * For both frontend and editor
             */
            wp_enqueue_script(
                'zolo-block-localize',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/localize/index.js',
                [],
                ZOLO_VERSION,
                true
            );

            // wp localize script
            wp_localize_script('zolo-block-localize', 'zoloSettings', [
                'ajaxurl'                 => admin_url('admin-ajax.php'),
                'home_url'                => home_url(),
                'zolo_nonce'              => wp_create_nonce('zolo-nonce'),
                'theme_fonts'             => ZoloHelpers::zolo_get_theme_fonts(),
                'googleAPIKey'            => get_option('zolo_google_api_key'),
                'maskShapes'              => [
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

            // common script + style for both frontend and editor
            $common_dep = trailingslashit(ZOLO_DIR_PATH) . 'build/common/index.asset.php';
            if (file_exists($common_dep)) {
                $common_dep = include $common_dep;
                wp_enqueue_script(
                    'zolo-common-script',
                    trailingslashit(ZOLO_ADMIN_URL) . 'build/common/index.js',
                    $common_dep['dependencies'],
                    $common_dep['version'],
                    true
                );
                wp_enqueue_style(
                    'zolo-common-style',
                    trailingslashit(ZOLO_ADMIN_URL) . 'build/common/style-index.css',
                    $common_dep['dependencies'],
                    $common_dep['version'],
                    'all'
                );
            }

            /**
             * Only for frontend
             */
            if (is_admin()) {
                return;
            }

            // particles js
            if (has_block('zolo/container') && ZoloHelpers::is_extension_enabled('particles')) {
                wp_enqueue_script(
                    'particles-js',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/particles/particles.min.js',
                    [],
                    ZOLO_VERSION,
                    true
                );

                wp_enqueue_script('particles-frontend', trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/particles/frontend.js', ['particles-js'], ZOLO_VERSION, true);
                wp_enqueue_style('particles-css', trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/particles/style-index.css', [], ZOLO_VERSION);
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

            // popup
            if (has_block('zolo/image-gallery') || has_block('zolo/lightbox')) {
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

            // zolo popup
            wp_enqueue_script('zolo-popup-frontend', trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/popup/popup.js', [], ZOLO_VERSION, true);
        }
        /**
         * Load Block Editor Assets
         *
         * @since 0.0.1
         *
         * @return void
         */
        public function editor_assets_loader() {

            if (! is_admin()) {
                return;
            }

            // editor override css
            wp_enqueue_style(
                'zolo-block-editor-override-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/css/override/editor-override.css',
                [],
                ZOLO_VERSION,
                'all'
            );

            // swiper only for editor
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

            if (ZoloHelpers::is_extension_enabled('particles')) {

                wp_enqueue_script(
                    'particles-js',
                    trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/particles/particles.min.js',
                    [],
                    ZOLO_VERSION,
                    true
                );
                wp_enqueue_style('particles-css', trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/particles/style-index.css', [], ZOLO_VERSION);

                // import shape divider
                $import_particles_file = trailingslashit(ZOLO_DIR_PATH) . 'build/extensions/particles/index.asset.php';
                if (file_exists($import_particles_file)) {
                    $script_dependecy = include $import_particles_file;
                    wp_enqueue_script(
                        'zolo-particles-editor-script',
                        trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/particles/index.js',
                        $script_dependecy['dependencies'],
                        ZOLO_VERSION,
                        true
                    );
                }
            }

            // Register Modules
            $modules_dep_path = ZOLO_DIR_PATH . 'build/module/index.asset.php';
            $script_dependecy = file_exists($modules_dep_path) ? include $modules_dep_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $script_dependecy['dependencies'][] = 'zolo-block-localize';

            wp_enqueue_script(
                'zoloblocks-modules-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/modules/index.js',
                $script_dependecy['dependencies'],
                $script_dependecy['version'],
                false
            );

            wp_enqueue_style(
                'zoloblocks-modules-style',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/modules/index.css',
                [],
                ZOLO_VERSION,
                'all'
            );

            // editor common
            $editor_common_dep = trailingslashit(ZOLO_DIR_PATH) . 'build/editor-common/index.asset.php';
            if (file_exists($editor_common_dep)) {
                $editor_common_dep = include $editor_common_dep;
                wp_enqueue_script(
                    'zolo-editor-common-script',
                    trailingslashit(ZOLO_ADMIN_URL) . 'build/editor-common/index.js',
                    $editor_common_dep['dependencies'],
                    $editor_common_dep['version'],
                    true
                );
                wp_enqueue_style(
                    'zolo-editor-common-style',
                    trailingslashit(ZOLO_ADMIN_URL) . 'build/editor-common/style-index.css',
                    $editor_common_dep['dependencies'],
                    $editor_common_dep['version'],
                    'all'
                );
            }

            // accordion
            wp_enqueue_script(
                'zolo-accordion-editor-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'assets/js/accordion/accordion.min.js',
                [],
                ZOLO_VERSION,
                true
            );

            //is_extension_enabled

            // block export extension
            if (ZoloHelpers::is_extension_enabled('export-pattern')) {
                $dep_file = trailingslashit(ZOLO_DIR_PATH) . 'build/extensions/export-pattern/index.asset.php';
                if (file_exists($dep_file)) {
                    $script_dependecy = include $dep_file;
                    wp_enqueue_script(
                        'zolo-export-pattern-editor-script',
                        trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/export-pattern/index.js',
                        $script_dependecy['dependencies'],
                        ZOLO_VERSION,
                        true
                    );
                    wp_enqueue_style('zolo-export-pattern-editor-style', trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/export-pattern/index.css', [], ZOLO_VERSION);
                }
            }

            // import block pattern
            if (ZoloHelpers::is_extension_enabled('import-pattern')) {

                $import_dep_file = trailingslashit(ZOLO_DIR_PATH) . 'build/extensions/import-pattern/index.asset.php';
                if (file_exists($import_dep_file)) {
                    $script_dependecy = include $import_dep_file;
                    wp_enqueue_script(
                        'zolo-import-pattern-editor-script',
                        trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/import-pattern/index.js',
                        $script_dependecy['dependencies'],
                        ZOLO_VERSION,
                        true
                    );
                    wp_enqueue_style('zolo-import-pattern-editor-style', trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/import-pattern/index.css', [], ZOLO_VERSION);
                }
            }

            // import shape divider
            if (ZoloHelpers::is_extension_enabled('shape-divider')) {

                $import_shape_divider_file = trailingslashit(ZOLO_DIR_PATH) . 'build/extensions/shape-divider/index.asset.php';
                if (file_exists($import_shape_divider_file)) {
                    $script_dependecy = include $import_shape_divider_file;
                    wp_enqueue_script(
                        'zolo-shape-divider-editor-script',
                        trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/shape-divider/index.js',
                        $script_dependecy['dependencies'],
                        ZOLO_VERSION,
                        true
                    );
                }
            }
            // import shape divider
            // if (ZoloHelpers::is_extension_enabled('background-video')) {

            $import_shape_divider_file = trailingslashit(ZOLO_DIR_PATH) . 'build/extensions/background-video/index.asset.php';
            if (file_exists($import_shape_divider_file)) {
                $script_dependecy = include $import_shape_divider_file;
                wp_enqueue_script(
                    'zolo-background-video-editor-script',
                    trailingslashit(ZOLO_ADMIN_URL) . 'build/extensions/background-video/index.js',
                    $script_dependecy['dependencies'],
                    ZOLO_VERSION,
                    true
                );
            }
            // }


            // template library
            $enable_template_library = get_option('zolo_enable_template_library');
            if ($enable_template_library !== '') {
                $tb_dep_file = trailingslashit(ZOLO_DIR_PATH) . 'build/template-library/index.asset.php';
                if (file_exists($tb_dep_file)) {
                    $script_dependecy = include $tb_dep_file;
                    wp_enqueue_script(
                        'zolo-template-library-editor-script',
                        trailingslashit(ZOLO_ADMIN_URL) . 'build/template-library/index.js',
                        $script_dependecy['dependencies'],
                        ZOLO_VERSION,
                        true
                    );
                    wp_enqueue_style('zolo-template-library-editor-style', trailingslashit(ZOLO_ADMIN_URL) . 'build/template-library/index.css', [], ZOLO_VERSION);
                }
            }

            //get editor type
            global $pagenow;

            $editor_type = 'edit-post';
            if ($pagenow == 'site-editor.php') {
                $editor_type = 'edit-site';
            } elseif ($pagenow == 'widgets.php') {
                $editor_type = 'edit-widgets';
            }

            // get pro status
            $zolo_pro_status = class_exists('Zolo_Blocks_Pro') ? 'active' : 'inactive';

            //this file use for js
            wp_localize_script('zoloblocks-modules-script', 'zoloParams', [
                'ajaxurl'        => admin_url('admin-ajax.php'),
                'post_types'     => ZoloHelpers::get_post_types(),
                'get_users'      => ZoloHelpers::get_all_users(),
                'get_taxonomies' => ZoloHelpers::get_taxonomies(),
                'all_term_list'  => ZoloHelpers::get_all_taxonomy(),
                'user_social_link' => Author::user_contact_social_link([], true),
                'home_url'       => home_url(),
                'zolo_nonce'     => wp_create_nonce('zolo-nonce'),
                'zolo_version'   => ZOLO_VERSION,
                'editor_type'    => $editor_type,
                'zolo_pro_status' => $zolo_pro_status,
                'admin_email'    => get_option('admin_email'),
                'blocksPreview'  => apply_filters('zolo_blocks_preview', [
                    'advancedSearch' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-search.svg',
                    'button'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-button.svg',
                    'businessHour' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/business-hour.svg',
                    'heading'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-heading.svg',
                    'icon'         => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/icon.svg',
                    'iconBox'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-icon-box.svg',
                    'imageGallery' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/image-gallery.svg',
                    'image'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/advanced-image.svg',
                    'charts'       => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/charts.svg',
                    'postCarousel' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-carousel.svg',
                    'postGrid'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-grid.svg',
                    'postList'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-list.svg',
                    'postCategory' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-category.svg',
                    'postTab'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/post-tab.svg',
                    'tagCloud'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/tag-cloud.svg',
                    'pricingTable' => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/pricing-table.svg',
                    'socialLinks'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/social-links.svg',
                    'socialShare'  => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/social-share.svg',
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
                    'progresspie'     => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/progress-pie.svg',
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
                    'newsletter'      => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/newsletter.svg',
                    'notice'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/notice.svg',
                    'textPath'        => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/text-path.svg',
                    'qrcode'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/blocks-preview/qrcode.svg',
                ])
            ]);

            // placeholder photos
            wp_localize_script('zoloblocks-modules-script', 'zoloPlaceholders', [
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
                'popupBg'          => trailingslashit(ZOLO_ADMIN_URL) . 'assets/images/popup-bg.svg',
            ]);
        }
    }
}
