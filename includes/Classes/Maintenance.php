<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class Maintenance {
    use SingletonTrait;

    public function __construct() {
        $maintenance_mode = get_option('zolo_maintenance_mode');
        $maintenance_page_id = get_option('zolo_maintenance_mode_template');

        // Activation and deactivation hooks.
        register_activation_hook(ZOLO_FILE, [$this, 'activation']);
        register_deactivation_hook(ZOLO_FILE, [$this, 'deactivation']);

        // Template redirect if maintenance mode is enabled.
        if ($maintenance_mode && !empty($maintenance_page_id)) {
            add_action('template_redirect', [$this, 'redirect_to_maintenance_page'], 99);
            add_filter('template_include', [$this, 'load_maintenance_template'], 99);
        }
    }

    public function load_maintenance_template() {
        return ZOLO_DIR_PATH . 'views/maintenance.php';
    }

    public function redirect_to_maintenance_page() {
        $maintenance_mode = get_option('zolo_maintenance_mode');
        $maintenance_page_id = get_option('zolo_maintenance_mode_template');
        $current_page_id = get_the_ID();
        if ($maintenance_page_id == $current_page_id) {
            return;
        }
        if ($maintenance_mode && $maintenance_page_id !== $current_page_id) {
            status_header(503);
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
