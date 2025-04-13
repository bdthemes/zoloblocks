<?php

/**
 * ZoloBlocks Loader.
 *
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\Classes\StyleGenerator;
use Zolo\Classes\Registration;
use Zolo\API\GetPostsV1;
use Zolo\API\ZoloAi;
use Zolo\Classes\ZoloAJAX;
use Zolo\Admin\PostCategoryImage;
use Zolo\Admin\Author;
use Zolo\Classes\ZoloEnqueues;
use Zolo\Classes\FontLoader;
use Zolo\Classes\PostMeta;
use Zolo\Admin\Dashboard;
use Zolo\Admin\Assets;
use Zolo\Admin\Settings;
use Zolo\API\GetPostMetaV1;
use Zolo\API\TemplatesV1;
use Zolo\Templates\Templates;
use Zolo\Popup\PopupBuilder;
use Zolo\Form\Form;
use Zolo\Form\Recaptcha;
use Zolo\Mailchimp\Mailchimp;
use Zolo\Blocks\NoticeBlock;
use Zolo\Blocks\SocialShareBlock;
use Zolo\Extensions\ExtensionsLoader;

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
        add_filter('upload_mimes', array($this, 'upload_mimes'), 100);
        add_filter('wp_check_filetype_and_ext', array($this, 'wp_check_filetype_and_ext'), 100, 3);
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
        GetPostMetaV1::getInstance();
        ZoloAi::getInstance();
        ZoloHelpers::getInstance();
        StyleGenerator::getInstance();
        Registration::getInstance();
        ZoloAJAX::getInstance();
        ZoloEnqueues::getInstance();
        FontLoader::getInstance();
        PostMeta::getInstance();
        ExtensionsLoader::getInstance();

        // form
        Form::getInstance();
        Recaptcha::getInstance();

        // post category image
        PostCategoryImage::getInstance();

        // author
        Author::getInstance();

        //mailchimp
        Mailchimp::getInstance();

        // notice block
        NoticeBlock::getInstance();
        SocialShareBlock::getInstance();

        // popup
        PopupBuilder::getInstance();

        // Templates and Demo Import
        TemplatesV1::getInstance();
        Templates::getInstance();

        // Settings
        Settings::getInstance();

        if (is_admin()) {

            // Support SVG
            if (get_option('zolo_support_svg', false) === '1') {
                require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/SupportSVG.php';
            }

            // Admin Dashboard
            Dashboard::getInstance();
            Assets::getInstance();
        }
    }


    public function upload_mimes($mimes) {
        if (! isset($mimes['json'])) {
            $mimes['json'] = 'application/json';
        }
        return $mimes;
    }

    public function wp_check_filetype_and_ext($data, $file, $filename) {
        $ext = isset($data['ext']) ? $data['ext'] : '';

        if (! $ext) {
            $exploded = explode('.', $filename);
            $ext      = strtolower(end($exploded));
        }

        if ('json' === $ext) {
            $data['type'] = 'application/json';
            $data['ext']  = 'json';
        }

        return $data;
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
            } elseif ('astra' === $theme_folder) {
                // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-astra-compatibility.php';
            }
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
