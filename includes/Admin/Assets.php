<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (! class_exists('Assets')) {

    /**
     * Assets Class
     *
     * @since 0.0.1
     */
    class Assets {

        use SingletonTrait;

        /**
         * Constructs a new instance of the Assets class.
         */
        public function __construct() {
            add_action('admin_enqueue_scripts', [$this, 'zolo_admin_enqueue_scripts']);

            // blocks icons
            add_action('enqueue_block_editor_assets', [$this, 'zolo_blocks_icons'], 2);
            add_action('admin_enqueue_scripts', [$this, 'zolo_blocks_icons'], 2);
        }
        /**
         * Enqueues scripts and styles for the Zoloblocks admin area.
         *
         * This function is responsible for enqueueing necessary scripts and styles
         * for the Zoloblocks plugin in the WordPress admin area.
         *
         * @param string $screen The current screen being displayed in the admin area.
         * @return void
         */
        public function zolo_admin_enqueue_scripts($screen) {

            if ('toplevel_page_zoloblocks' !== $screen) {
                return;
            }

            $dependencyFile = trailingslashit(ZOLO_DIR_PATH) . 'build/admin/index.asset.php';

            if (! file_exists($dependencyFile)) {
                return;
            }
            $dependency = require_once $dependencyFile;

            wp_enqueue_script(
                'zolo-admin-js',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/admin/index.js',
                $dependency['dependencies'],
                $dependency['version'],
                false
            );

            wp_enqueue_style(
                'zolo-admin-style-css',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/admin/style-index.css',
                [],
                ZOLO_VERSION
            );

            wp_enqueue_style(
                'zolo-admin-index-css',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/admin/index.css',
                [],
                ZOLO_VERSION
            );

            // enqueue components style
            wp_enqueue_style('wp-components');

            // wp localizing script
            wp_localize_script(
                'zolo-admin-js',
                'zoloBlocks',
                [
                    'system_info' => [
                        'php_version'        => ZoloHelpers::get_php_version(),
                        'wp_version'         => ZoloHelpers::get_wp_version(),
                        'memory_limit'       => ZoloHelpers::get_memory_limit(),
                        'max_upload_size'    => ZoloHelpers::get_max_upload_size(),
                        'post_max_size'      => ZoloHelpers::get_max_post_size(),
                        'max_execution_time' => ZoloHelpers::get_max_execution_time(),
                        'gzip'               => ZoloHelpers::get_gzip_status(),
                        'multi_site'         => ZoloHelpers::is_multisite(),
                        'debug_mode'         => ZoloHelpers::is_debug_mode(),
                    ],
                    'zolo_counter'   => ZoloHelpers::zolo_blocks_extensions_count(),
                    'zolo_nonce'     => wp_create_nonce('zolo-nonce'),
                    'zolo_rest_url'  => esc_url_raw(rest_url('zolo/v1/settings')),
                    'site_url'       =>  esc_url_raw(site_url()),
                    'plugin_version' => ZOLO_VERSION,
                    'pro_version'    => defined('ZOLO_PRO_VERSION') ? ZOLO_PRO_VERSION : '',
                    'has_pro'        => defined('ZOLO_PRO_VERSION'),
                    'logo'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/logo.svg',
                    'community'      => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/community.svg',
                    'support'        => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/support.svg',
                    'idea'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/idea.svg',
                    'product'        => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/product.svg',
                    'knowledgeBase'  => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/knowledgeBase.svg',
                    'map'            => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/map.svg',
                    'captcha'        => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/captcha.svg',
                    'oops'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/oops.svg',
                    'mailchimp'      => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/mailchimp.svg',
                    'webhook'        => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/webhook.svg',
                    'facebook'       => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/facebook.svg',
                    'zoloai'         => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/zoloai.svg',
                    'instagram'      => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/instagram.svg',
                    'yelp'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/yelp.svg',
                    'google'         => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/google.svg',
                    'zoom'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/zoom.svg',
                    'gss'            => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/gss.svg',
                ]
            );

            // wp_enqueue_script('frill-widget', '//widget.frill.co/v2/widget.js', null, null, true);
        }

        /**
         * Enqueue blocks icons
         *
         * @return void
         */
        public function zolo_blocks_icons($screen) {
            // zoloModules
            $dep_file = ZOLO_DIR_PATH . 'build/zolo-icons/index.asset.php';
            $script_dependecy = file_exists($dep_file) ? include $dep_file : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];
            wp_enqueue_script(
                'zoloblocks-icons-script',
                trailingslashit(ZOLO_ADMIN_URL) . 'build/zolo-icons/index.js',
                $script_dependecy['dependencies'],
                $script_dependecy['version'],
                false
            );
        }
    }
}
