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
    }

    /**
     * Deactivation Function
     *
     * @since 0.0.1
     */
    public function deactivation() {
    }
}
