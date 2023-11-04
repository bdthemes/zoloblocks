<?php

namespace Zolo\Traits;

trait SingletonTrait {
    /**
     * Singleton Instance
     *
     */
    private static $instance;

    /**
     * Private Constructor
     *
     * We can't use the constructor to create an instance of the class
     *
     * @return void
     */
    private function __construct() {
        // Don't do anything, we don't want to be initialized
    }

    /**
     * Get the singleton instance
     *
     */
    public static function getInstance() {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * Singleton instance.
     *
     * @return void
     */
    private function __clone() {
        // Don't do anything, we don't want to be cloned
    }

    /**
     * Private unserialize method to prevent unserializing of the Singleton
     * instance.
     *
     * @return void
     */
    public function __wakeup() {
        // Don't do anything, we don't want to be unserialized
    }
}
