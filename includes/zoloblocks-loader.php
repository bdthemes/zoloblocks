<?php

/**
 * Zolo Blocks Loader.
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\API\GetPostsV1;
use Zolo\Classes\StyleGenerator;
use Zolo\Classes\Registration;
use Zolo\Classes\ZoloEnqueues;
use Zolo\Classes\ZoloAjax;
use Zolo\Classes\FontLoader;
use Zolo\Classes\PostMeta;
use Zolo\Admin\Dashboard;
use Zolo\Admin\Assets;
use Zolo\Admin\Settings;
use Zolo\Classes\Mailchimp;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class ZoloBlocks_Loader {
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('plugins_loaded', [$this, 'plugins_loaded']);
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
        ZoloEnqueues::getInstance();
        ZoloAjax::getInstance();
        FontLoader::getInstance();
        PostMeta::getInstance();

        // addmin files
        Dashboard::getInstance();
        Assets::getInstance();
        Settings::getInstance();
        Mailchimp::getInstance();



        // form
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Form.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/FormAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Recaptcha.php';


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
}

// ZoloBlocks_Loader Instance
if (class_exists('ZoloBlocks_Loader')) {
    new ZoloBlocks_Loader();
}
