<?php

/**
 * Zolo Blocks Loader.
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;
use Zolo\Traits\SingletonTrait;
use Zolo\Classes\StyleGenerator;
use Zolo\Classes\Registration;
use Zolo\API\GetPostsV1;
use Zolo\Classes\ZoloAjax; 
use Zolo\Classes\ZoloEnqueues;
use Zolo\Classes\FontLoader;
use Zolo\Classes\PostMeta;

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
        add_action('init', [$this, 'init_actions']);
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
        ZoloAjax::getInstance();
        ZoloEnqueues::getInstance();
        FontLoader::getInstance();
        PostMeta::getInstance();

        // Load Admin files
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
        add_filter('admin_body_class', [$this, 'zoloblocks_editor_custom_body_class']);
        add_filter('body_class', [$this, 'zoloblocks_custom_body_class']);
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
     * Add custom body class for editor
     * @param string $classes
     * @return string
     */
    public function zoloblocks_editor_custom_body_class($classes) {
        // Check if we are on editing screen in WordPress admin
        if (is_admin() && isset($_GET['action']) && $_GET['action'] === 'edit') {
            $classes .= ' zolo-editor';
        }
    }

    /**
     * Add custom body class
     * @param array $classes
     * @return array
     */
    public function zoloblocks_custom_body_class(array $classes) {
        $new_class = 'zolo-frontend';
        if ($new_class) {
            $classes[] = $new_class;
        }
        return $classes;
    }
}

ZoloBlocks_Loader::getInstance();