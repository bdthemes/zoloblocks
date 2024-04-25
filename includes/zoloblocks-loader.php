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
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/ZoloEnqueues.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/FontLoader.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Classes/PostMeta.php';

        // Load Admin files
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Dashboard.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Assets.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Admin/Settings.php';

        // form
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Form.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/FormAjax.php';
        require_once trailingslashit(ZOLO_DIR_PATH) . '/includes/Form/Recaptcha.php';

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
            }
        }

        if ('astra' === $theme_folder) {
            // require_once ZOLO_DIR_PATH . 'compatibility/class-uagb-astra-compatibility.php';
        }
    }
    public function zoloblocks_editor_custom_body_class($classes) {
        // Check if we are on editing screen in WordPress admin
        if (is_admin() && isset($_GET['action']) && $_GET['action'] === 'edit') {
            $classes .= ' zolo-editor';
        }
        return $classes;
    }
    public function zoloblocks_custom_body_class(array $classes) {
        $new_class =  'zolo-preview';
        if ($new_class) {
            $classes[] = $new_class;
        }
        return $classes;
    }
}

// ZoloBlocks_Loader Instance
if (class_exists('ZoloBlocks_Loader')) {
    new ZoloBlocks_Loader();
}
