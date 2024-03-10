<?php

namespace Zolo\Classes;

use Zolo\Traits\SingletonTrait;

class Maintenance {
    use SingletonTrait;

    public function __construct() {
        // Activation hook.
        register_activation_hook( ZOLO_FILE, [$this, 'activation'] );

        // deactivation hook.
        register_deactivation_hook( ZOLO_FILE, [$this, 'deactivation'] );
    }

    /**
     * Activation Function
     *
     * @since 0.0.1
     */
    public function activation() {
        update_option( ZOLO_SLUG . '-version', ZOLO_VERSION );

        // create a new table in the database with the name 'zolo_form' if it does not exist and add the following columns: id, form_id, form_fields, form_settings, created_at, updated_at
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
            created_at datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            updated_at datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }

    /**
     * Deactivation Function
     *
     * @since 0.0.1
     */
    public function deactivation() {
    }
}
