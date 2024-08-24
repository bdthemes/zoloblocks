<?php

/**
 * Zolo Blocks Loader.
 *
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\Classes\StyleGenerator;
use Zolo\Classes\Registration;
use Zolo\API\GetPostsV1;
use Zolo\Admin\PostCategoryImage;
use Zolo\Classes\ZoloAJAX;
use Zolo\Admin\Author;
// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Zolo all file loader
 */
class ZoloBlocks_Loader {
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('plugins_loaded', [$this, 'plugins_loaded']);
        add_action('init', [$this, 'init_actions']);
        add_action('admin_init', [$this, 'dci_plugin_zoloblocks']);
    }

    /**
     * Loads plugin files.
     *
     * @since 0.0.1
     *
     * @return void
     */
    public function plugins_loaded() {
        GetPostsV1::getInstance();
        ZoloHelpers::getInstance();
        StyleGenerator::getInstance();
        Registration::getInstance();
        ZoloAJAX::getInstance();
        // require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloEnqueues.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/FontLoader.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/PostMeta.php';

        // Load Admin files
        PostCategoryImage::getInstance();
        Author::getInstance();
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Dashboard.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Assets.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Settings.php';

        // form
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Form.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/FormAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Recaptcha.php';

        //mailchimp
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Mailchimp/Mailchimp.php';

        // notice block
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Blocks/NoticeBlock.php';

        // popup
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Popup/PopupBuilder.php';

        //templates
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Templates/Templates.php';

        if (is_admin()) {
            // zolo blocks settings
            $zoloSupportSVG = get_option('zolo_support_svg', false);
            if ($zoloSupportSVG === '1') {
                require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/SupportSVG.php';
            }
        }
    }

    /**
     * Init actions
     * @since 0.0.1
     * @return void
     */
    public function init_actions() {
        $theme_folder = get_template();

        if (function_exists('wp_is_block_theme') && wp_is_block_theme()) {
            if ('twentytwentytwo' === $theme_folder) {
                // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-twenty-twenty-two-compatibility.php';
            }
        }

        if ('astra' === $theme_folder) {
            // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-astra-compatibility.php';
        }
    }

    /**
     * SDK Integration
     */

    public function dci_plugin_zoloblocks() {

        // Include DCI SDK.
        require_once trailingslashit(ZOLO_DIR_PATH) . '/dci/start.php';

        wp_register_style('dci-sdk-zolo', ZOLO_ADMIN_URL . '/dci/assets/css/dci.css', array(), '1.2.1', 'all');
        wp_enqueue_style('dci-sdk-zolo');

        dci_dynamic_init(array(
            'sdk_version'         => '1.2.1',
            'product_id'          => 5,
            'plugin_name'         => 'ZoloBlocks', // make simple, must not empty
            'plugin_title'        => 'Love using ZoloBlocks? Congrats 🎉  ( Never miss an Important Update )',
            'plugin_icon'         => ZOLO_ADMIN_URL . 'assets/images/zb-brand.svg',
            'api_endpoint'        => 'https://analytics.bdthemes.com/wp-json/dci/v1/data-insights',
            'slug'                => 'zoloblocks',
            'menu'                => array(
                'slug' => 'zoloblocks',
            ),
            'public_key'          => 'pk_gxu6BkkwuuRmL5TYa9TlkiRPMKluYB4b',
            'is_premium'          => false,
            'popup_notice'        => false,
            'deactivate_feedback' => true,
            'delay_time'   => [
                'time' => 3 * DAY_IN_SECONDS
            ],
            'plugin_msg'          => '<p>Be Top-contributor by sharing non-sensitive plugin data and create an impact to the global WordPress community today! You can receive valuable emails periodically.',
        ));
    }
}

// ZoloBlocks_Loader Instance.
if (class_exists('ZoloBlocks_Loader')) {
    new ZoloBlocks_Loader();
}
