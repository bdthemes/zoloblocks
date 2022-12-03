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

//Define Global Constants
define('ZOLO_NAME', 'zolo-blocks');
define('ZOLO_SLUG', 'zolo-blocks');
define('ZOLO_VERSION', '0.0.1');
define('ZOLO_FILE', __FILE__);
define('ZOLO_DIR_PATH', plugin_dir_path(__FILE__));
define('ZOLO_ADMIN_URL', plugin_dir_url(__FILE__));
define('ZOLO_WP_VERSION', (float) get_bloginfo('version'));
define('ZOLO_PHP_VERSION', (float) phpversion());

//Zolo Blocks compatibility check
if (!version_compare(ZOLO_PHP_VERSION, '5.6', '>=')) {
    add_action('admin_notices', 'zolo_check_php_version');
} elseif (!version_compare(ZOLO_WP_VERSION, '5.8', '>=')) {
    add_action('admin_notices', 'zolo_check_wp_version');
} elseif (!function_exists('register_block_type')) {
    add_action('admin_notices', 'zolo_check_gutenberg_active');
} else {
    require_once 'includes/zolo-blocks-loader.php';
}

/**
 * Zolo Blocks admin notice for minimum PHP version.
 *
 * Warning when the site doesn't have the minimum required PHP version.
 *
 * @since 0.0.1
 *
 * @return void
 */
function zolo_check_php_version()
{
    $message = sprintf(
        esc_html__('Zolo Blocks requires minimum PHP version %s where your current PHP version is %2s. Please update your PHP version to enable Zolo Blocks features. ', 'zolo-blocks'),
        '5.6',
        ZOLO_PHP_VERSION
    );
    $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
    echo wp_kses_post($html_message);
}


/**
 * Zolo Blocks admin notice for minimum WordPress version.
 *
 * Warning when the site doesn't have the minimum required WP version.
 *
 * @since 0.0.1
 *
 * @return void
 */
function zolo_check_wp_version()
{
    $message = sprintf(
        esc_html__('Zolo Blocks requires minimum WP version %s where your current WP version is %2s. Please update your WP version to enable Zolo Blocks features. ', 'zolo-blocks'),
        '5.8',
        ZOLO_WP_VERSION
    );
    $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
    echo wp_kses_post($html_message);
}
