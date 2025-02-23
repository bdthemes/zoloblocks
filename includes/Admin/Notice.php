<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

class Notice {
    use SingletonTrait;

    public function __construct() {
    }

    /**
     * PHP Version Related Admin Notice
     */
    public static function zolo_check_php_version() {
        $message = sprintf(
            'ZoloBlocks requires minimum PHP version %s where your current PHP version is %2s. Please update your PHP version to enable ZoloBlocks features.',
            '5.6',
            ZOLO_PHP_VERSION
        );
        $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
        echo wp_kses_post($html_message);
    }

    /**
     * WordPress Version Related Admin Notice
     */
    public static function zolo_check_wp_version() {
        $message = sprintf(
            'ZoloBlocks requires minimum WordPress version %s where your current WordPress version is %2s. Please update your WordPress version to enable ZoloBlocks features.',
            '5.8',
            ZOLO_WP_VERSION
        );
        $html_message = sprintf('<div class="error">%s</div>', wpautop($message));
        echo wp_kses_post($html_message);
    }

    /**
     * Gutenberg Plugin Activation Related Admin Notice
     */
    public static function zolo_gutenberg_unavailable_notice() {

        if (!current_user_can('install_plugins')) {
            return;
        }

        $class = 'notice notice-error';
        /* translators: %s: html tags */
        $message = sprintf(
            'The <%1$s>%2$s</%1$s> plugin requires <%1$s>Gutenberg</%1$s> plugin installed & activated.',
            $tag = 'strong',
            ZOLO_NAMESPACE
        );

        $action_url   = wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=gutenberg'), 'install-plugin_gutenberg');
        $button_label = __('Install Gutenberg', 'zoloblocks');

        $button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

        printf('<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr($class), wp_kses_post($message), wp_kses_post($button));
    }
}
