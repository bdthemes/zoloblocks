<?php
/**
 * Plugin Name: Zolo Blocks
 * Plugin URI: https://bdthemes.com/
 * Version: 0.0.2
 * Author: BdThemes
 * Author URI: https://bdthemes.com/
 * Text Domain: zolo-blocks
 * Description: A collection of custom Gutenberg blocks to design your webpages with ease. 
 * Domain Path: /languages
*  License: GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

use Zolo\Admin\Notice;
use Zolo\Classes\Maintenance;

/**
 * Final Class for ZOLO Blocks
 */
final class Zolo_Blocks {

    private static $instance;

    /**
     * Zolo_Blocks Instance
     */
    public static function get_instance() {
        if ( ! isset( self::$instance ) ) {
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

        if ( ! version_compare( ZOLO_WP_VERSION, '5.8', '>=' ) ) {
            add_action( 'admin_notices', [Notice::class, 'zolo_check_wp_version'] );
        } elseif ( ! version_compare( ZOLO_PHP_VERSION, '5.6', '>=' ) ) {
            add_action( 'admin_notices', [Notice::class, 'zolo_check_php_version'] );
        } elseif ( ! function_exists( 'register_block_type' ) ) {
            add_action( 'admin_notices', [Notice::class, 'zolo_gutenberg_unavailable_notice'] );
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
        define( 'ZOLO_FILE', __FILE__ );
        define( 'ZOLO_NAMESPACE', 'zolo-blocks' );
        define( 'ZOLO_SLUG', 'zolo-blocks' );
        define( 'ZOLO_VERSION', '0.0.2' );
        define( 'ZOLO_DIR_PATH', plugin_dir_path( __FILE__ ) );
        define( 'ZOLO_ADMIN_URL', plugin_dir_url( __FILE__ ) );
        define( 'ZOLO_WP_VERSION', (float) get_bloginfo( 'version' ) );
        define( 'ZOLO_PHP_VERSION', (float) phpversion() );
    }

    /**
     * Include required files
     */
    public function includes() {
        require_once trailingslashit( ZOLO_DIR_PATH ) . 'includes/zolo-blocks-loader.php';
    }
}

/**
 * Initialize the Zolo_Blocks
 */
Zolo_Blocks::get_instance();
