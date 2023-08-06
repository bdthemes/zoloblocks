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

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Zolo_Blocks_Loader
{
    use SingletonTrait;

    /**
     * Constructor
     */
    public function __construct()
    {

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
    public function plugins_loaded()
    {
        GetPostsV1::getInstance();
        ZoloHelpers::getInstance();
        StyleGenerator::getInstance();
        Registration::getInstance();
        require_once ZOLO_DIR_PATH . 'includes/classes/zolo-ajax.php';
        require_once ZOLO_DIR_PATH . 'includes/classes/zolo-enqueues.php';
        require_once ZOLO_DIR_PATH . '/includes/classes/font-loader.php';
        require_once ZOLO_DIR_PATH . '/includes/classes/post-meta.php';

        if (is_admin()) {
            //Load Admin required files
        }
    }

    /**
     * Init actions
     *
     * @since 0.0.1
     *
     * @return void
     */
    public function init_actions()
    {

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
}

// Zolo_Blocks_Loader Instance
if (class_exists('Zolo_Blocks_Loader')) {
    new Zolo_Blocks_Loader();
}
