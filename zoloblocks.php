<?php

/**
 * Plugin Name: ZoloBlocks
 * Plugin URI: https://bdthemes.com/
 * Version: 1.3.2
 * Author: BdThemes
 * Author URI: https://bdthemes.com/
 * Text Domain: zoloblocks
 * Description: A collection of custom Gutenberg blocks to design your webpages with ease.
 * Domain Path: /languages
 * Requires at least: 6.0
 * Requires PHP: 7.0
 *  License: GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

use Zolo\Admin\Notice;
use Zolo\Classes\Maintenance;

/**
 * Final Class for ZOLO Blocks
 */
final class ZoloBlocks {

    private static $instance;

    /**
     * ZoloBlocks Instance
     */
    public static function get_instance() {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    public function __construct() {
        //Define Zolo Constants
        $this->zolo_constants();

        if (!version_compare(ZOLO_WP_VERSION, '5.8', '>=')) {
            add_action('admin_notices', [Notice::class, 'zolo_check_wp_version']);
        } elseif (!version_compare(ZOLO_PHP_VERSION, '5.6', '>=')) {
            add_action('admin_notices', [Notice::class, 'zolo_check_php_version']);
        } elseif (!function_exists('register_block_type')) {
            add_action('admin_notices', [Notice::class, 'zolo_gutenberg_unavailable_notice']);
        } else {
            $this->includes();
        }

        //Run Maintainance
        Maintenance::getInstance();
    }
    /**
     * Define Constants
     */
    public function zolo_constants() {
        define('ZOLO_FILE', __FILE__);
        define('ZOLO_DIR', __DIR__);
        define('ZOLO_NAMESPACE', 'zoloblocks');
        define('ZOLO_SLUG', 'zoloblocks');
        define('ZOLO_VERSION', '1.3.2');
        define('ZOLO_DIR_PATH', plugin_dir_path(__FILE__));
        define('ZOLO_ADMIN_URL', plugin_dir_url(__FILE__));
        define('ZOLO_WP_VERSION', (float) get_bloginfo('version'));
        define('ZOLO_PHP_VERSION', (float) phpversion());
    }

    /**
     * Include required files
     */
    public function includes() {
        require_once trailingslashit(ZOLO_DIR_PATH) . 'includes/zoloblocks-loader.php';
    }
}

/**
 * Initialize the ZoloBlocks
 */
ZoloBlocks::get_instance();


/**
 * SDK Integration
 */

if (!function_exists('dci_plugin_zoloblocks')) {
    function dci_plugin_zoloblocks() {

        // Include DCI SDK.
        require_once dirname(__FILE__) . '/dci/start.php';

        wp_register_style('dci-sdk-zolo', plugins_url('dci/assets/css/dci.css', __FILE__), array(), '1.2.1', 'all');
        wp_enqueue_style('dci-sdk-zolo');

        dci_dynamic_init(array(
            'sdk_version'         => '1.2.1',
            'product_id'          => 5,
            'plugin_name'         => 'ZoloBlocks', // make simple, must not empty
            'plugin_title'        => 'Love using ZoloBlocks? Congrats 🎉  ( Never miss an Important Update )',
            'plugin_icon'         => plugins_url('/', __FILE__) . 'assets/images/zb-brand.svg',
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
    add_action('admin_init', 'dci_plugin_zoloblocks');
}
