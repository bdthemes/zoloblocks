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
use Zolo\Classes\SupportSVG;
use Zolo\Admin\Dashboard;
use Zolo\Admin\Settings;
use Zolo\Classes\Newsletter;
use Zolo\Templates\Templates;
use Zolo\Popup\PopupBuilder;
use Zolo\Blocks\NoticeBlock;
use Zolo\Blocks\Form\Form;

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
        ZoloHelpers::getInstance();
        Settings::getInstance();
        GetPostsV1::getInstance();
        StyleGenerator::getInstance();
        Registration::getInstance();
        ZoloEnqueues::getInstance();
        ZoloAjax::getInstance();
        FontLoader::getInstance();
        NoticeBlock::getInstance();
        Form::getInstance();
        PopupBuilder::getInstance();
        Newsletter::getInstance();

        // addmin files
        if (is_admin()) {
            Dashboard::getInstance();
            Templates::getInstance();
            PostMeta::getInstance();
            $zoloSupportSVG = get_option('zolo_support_svg', false);
            if ($zoloSupportSVG === '1') {
                SupportSVG::getInstance();
            }
        }
    }
}

// ZoloBlocks_Loader Instance
if (class_exists('ZoloBlocks_Loader')) {
    new ZoloBlocks_Loader();
}
