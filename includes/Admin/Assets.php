<?php

/**
 * Enqueue scripts and styles.
 */

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

class Zolo_Admin_Assets {

    use SingletonTrait;

    /**
     * Constructor
     * @return void
     */
    public function __construct() {
        add_action('admin_enqueue_scripts', [$this, 'zolo_admin_enqueue_scripts']);

        // editor script
        add_action('admin_head', [$this, 'zolo_block_editor_assets']);
    }

    /**
     * Enqueue block editor assets
     *
     * @return void
     */
    public function zolo_block_editor_assets() {

        $zoloEditorWidth = get_option('zolo_editor_width', 1200);

?>
        <style>
            .editor-styles-wrapper .block-editor-block-list__layout.is-root-container> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
                max-width: <?php echo esc_attr($zoloEditorWidth); ?>px !important;
            }
        </style>
<?php
    }

    /**
     * Enqueue Scripts
     * @return void
     */
    public function zolo_admin_enqueue_scripts($screen) {

        if ('toplevel_page_zoloblocks' !== $screen) {
            return;
        }

        $dependencyFile = trailingslashit(ZOLO_DIR_PATH) . 'build/admin/index.asset.php';

        if (!file_exists($dependencyFile)) {
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
            'zolo-admin-css',
            trailingslashit(ZOLO_ADMIN_URL) . 'build/admin/style.css',
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
                'zolo_nonce'     => wp_create_nonce('zolo-nonce'),                                                 // Use the correct nonce action
                'zolo_rest_url'  => esc_url_raw(rest_url('zolo/v1/settings')),
                'plugin_version' => ZOLO_VERSION,
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
                'facebook'       => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/facebook.svg',
                'instagram'      => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/instagram.svg',
                'yelp'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/yelp.svg',
                'google'         => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/google.svg',
                'zoom'           => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/zoom.svg',
                'gss'            => trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/images/gss.svg',
            ]
        );

        wp_enqueue_script('frill-widget', '//widget.frill.co/v2/widget.js', [], ZOLO_VERSION, true);
    }
}

Zolo_Admin_Assets::getInstance();
