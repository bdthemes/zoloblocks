<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class Maintenance {
    use SingletonTrait;

    public function __construct() {
        $maintenance_mode = get_option('zolo_maintenance_mode');
        $coming_soon_mode = get_option('zolo_coming_soon_mode');
        $maintenance_page_id = get_option('zolo_maintenance_mode_template');

        // Activation and deactivation hooks.
        register_activation_hook(ZOLO_FILE, [$this, 'activation']);
        register_deactivation_hook(ZOLO_FILE, [$this, 'deactivation']);

        // Template redirect if maintenance mode is enabled.
        if ((!empty($maintenance_mode) || !empty($coming_soon_mode)) && !empty($maintenance_page_id)) {
            add_action('template_redirect', [$this, 'redirect_to_maintenance_page'], 99);
        }

        // Add maintenance mode settings.
        add_action('admin_init', [$this, 'add_maintenance_mode_settings']);
    }

    public function add_maintenance_mode_settings() {
        add_option('zolo_site_visibility_secret_key', wp_generate_password(32, false));
    }
    public function redirect_to_maintenance_page() {


        $maintenance_mode = get_option('zolo_maintenance_mode');
        $maintenance_page_id = get_option('zolo_maintenance_mode_template');
        $current_page_id = get_the_ID();
        if ($maintenance_page_id == $current_page_id) {
            return;
        }

        if (get_option('zolo_site_visibility_private_link') === '1') {
            // Exclude users with a private link.
            if (isset($_GET['private_link']) && get_option('zolo_site_visibility_secret_key') === $_GET['private_link']) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
                // Persist the share link with a cookie for 90 days.
                setcookie('private_link', sanitize_text_field(wp_unslash($_GET['private_link'])), time() + 60 * 60 * 24 * 90, '/'); //phpcs:ignore WordPress.Security.NonceVerification.Recommended
                return false;
            }
            if (isset($_COOKIE['private_link']) && get_option('zolo_site_visibility_secret_key') === $_COOKIE['private_link']) {
                return false;
            }
        }

        if (!is_user_logged_in() && $maintenance_page_id !== $current_page_id) {
            if ($maintenance_mode) {
                status_header(503);
            }
            echo '<script type="text/javascript">window.location.href = "' . esc_url(get_page_link($maintenance_page_id)) . '";</script>';
            exit();
        }
    }

    /**
     * Activation Function
     *
     * @since 0.0.1
     */
    public function activation() {
        update_option(ZOLO_SLUG . '-version', ZOLO_VERSION);

        global $wpdb;
        $table_name = $wpdb->prefix . 'zolo_form';
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            form_id varchar(100) NOT NULL,
            form_fields longtext NOT NULL,
            form_settings longtext NOT NULL,
            submission_settings longtext NOT NULL,
            validation_rules longtext NOT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }

    /**
     * Deactivation Function
     *
     * @since 0.0.1
     */
    public function deactivation() {
        // Deactivation logic here (if needed)
    }
}
