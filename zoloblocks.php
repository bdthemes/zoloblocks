<?php

/**
 * Plugin Name: ZoloBlocks
 * Plugin URI: https://bdthemes.com/
 * Version: 2.3.0
 * Author: BdThemes
 * Author URI: https://bdthemes.com/
 * Text Domain: zoloblocks
 * Description: A collection of custom Gutenberg blocks to design your webpages with ease.
 * Domain Path: /languages
 * Requires at least: 6.1
 * Requires PHP: 7.4
 * License: GPL v2 or later
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
        define('ZOLO_VERSION', '2.3.0');
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
