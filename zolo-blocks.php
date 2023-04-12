<?php
/**
 * Plugin Name: Zolo Blocks
 * Plugin URI: https://bdthemes.com/
 * Version: 0.0.1
 * Author: BdThemes
 * Author URI: https://bdthemes.com/
 * Text Domain: zolo-blocks
 * Description: Zolo Blocks for Gutenberg
 * Domain Path: /languages
 * License: GPL3
 *
 * @package Zolo
 */

if (!defined('ABSPATH')) {
    exit;
}


/**
 * Final Class for ZOLO Blocks
 */
final class Zolo_Blocks {

    private static $instance;

    /**
     * Zolo_Blocks Instance
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
        $this->define_constants();
        if( ! version_compare( ZOLO_WP_VERSION, '5.8', '>=' ) ) {
            add_action( 'admin_notices', [ $this, 'zolo_check_wp_version' ] );
        } elseif( ! version_compare( ZOLO_PHP_VERSION, '5.6', '>=' ) ) {
            add_action( 'admin_notices', [ $this, 'zolo_check_php_version' ] );
        } elseif ( ! function_exists( 'register_block_type' ) ) {
            add_action( 'admin_notices', [ $this, 'zolo_gutenberg_unavailable_notice' ] );
        } else {
            $this->includes();
        }
    }

    /**
     * Define Constants
     */
    public function define_constants() {
        define('ZOLO_NAME', 'zolo-blocks');
        define('ZOLO_SLUG', 'zolo-blocks');
        define('ZOLO_VERSION', '0.0.1');
        define('ZOLO_FILE', __FILE__);
        define('ZOLO_DIR_PATH', plugin_dir_path(__FILE__));
        define('ZOLO_ADMIN_URL', plugin_dir_url(__FILE__));
        define('ZOLO_WP_VERSION', (float) get_bloginfo('version'));
        define('ZOLO_PHP_VERSION', (float) phpversion());
    }

    /**
     * Include required files
     */
    public function includes() {
        require_once ZOLO_DIR_PATH . 'includes/zolo-blocks-loader.php';
    }

    /**
     * PHP Version Related Admin Notice
     */
    public function zolo_check_php_version() {
        $message = sprintf(
            esc_html__('Zolo Blocks requires minimum PHP version %s where your current PHP version is %2s. Please update your PHP version to enable Zolo Blocks features. ', 'zolo-blocks'),
            '5.6',
            ZOLO_PHP_VERSION
        );
        $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
        echo wp_kses_post($html_message);
    }

    /**
     * WordPress Version Related Admin Notice
     */
    public function zolo_check_wp_version() {
        $message = sprintf(
            esc_html__('Zolo Blocks requires minimum WordPress version %s where your current WordPress version is %2s. Please update your WordPress version to enable Zolo Blocks features. ', 'zolo-blocks'),
            '5.8',
            ZOLO_WP_VERSION
        );
        $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
        echo wp_kses_post($html_message);
    }

    /**
     * Gutenberg Plugin Activation Related Admin Notice
     */
    public function zolo_gutenberg_unavailable_notice() {

        if (!current_user_can('install_plugins')) {
            return;
        }

        $class = 'notice notice-error';
        /* translators: %s: html tags */
        $message = sprintf(
            __('The <%1$s>%2$s</%1$s> plugin requires <%1$s>Gutenberg</%1$s> plugin installed & activated.', 'zolo-blocks'),
            $tag = 'strong',
            ZOLO_NAME
        );

        $action_url = wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=gutenberg'), 'install-plugin_gutenberg');
        $button_label = __('Install Gutenberg', 'zolo-blocks');

        $button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

        printf('<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr($class), wp_kses_post($message), wp_kses_post($button));
    }
}

/**
 * Initialize the Zolo_Blocks
 */
function zolo_blocks() {
    return Zolo_Blocks::get_instance();
}

// Run Zolo_Blocks
zolo_blocks();