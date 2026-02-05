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
use Zolo\Admin\Biggopties;
use Zolo\Admin\Assets;
use Zolo\Admin\Settings;
use Zolo\API\GetPostMetaV1;
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
        add_filter('upload_mimes', array($this, 'upload_mimes'), 100);
        add_filter('wp_check_filetype_and_ext', array($this, 'wp_check_filetype_and_ext'), 100, 3);
        add_filter('plugin_action_links_' . plugin_basename(ZOLO_FILE), [$this, 'add_settings_link']);
    }

    public function add_settings_link($links) {
        $settings_link = '<a href="' . esc_url(get_admin_url(null, 'admin.php?page=zoloblocks')) . '">' . __('Settings', 'zoloblocks') . '</a>';
        array_unshift($links, $settings_link);
        if (!defined('ZOLO_PRO_VERSION')) {
            $promo_link = '<a href="https://zoloblocks.com/pricing/" target="_blank" rel="noopener noreferrer" style="color: #ef476f; font-weight: 600;">' . __('Get Pro', 'zoloblocks') . '</a>';
            $links[] = $promo_link;
        }

        return $links;
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
            Biggopties::getInstance();
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
}

// ZoloBlocks_Loader Instance.
if (class_exists('ZoloBlocks_Loader')) {
    new ZoloBlocks_Loader();
}
