<?php

/**
 * Zolo Blocks Enqueues.
 *
 * @package Zolo
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Zolo_Block_Enqueue')) {

    /**
     * Class Zolo_Block_Enqueue.
     */
    final class Zolo_Block_Enqueue
    {

        /**
         * Member Variable
         *
         * @var instance
         */
        private static $instance;

        /**
         *  Initiator
         */
        public static function get_instance()
        {
            if (!isset(self::$instance)) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        /**
         * Constructor
         */
        public function __construct()
        {

            add_action('enqueue_block_editor_assets', array($this, 'editor_assets_loader'));
        }

        /**
         * Load Block Editor Assets
         *
         * @since 0.0.1
         *
         * @return void
         */
        public function editor_assets_loader()
        {
            //Register vendor bundle
            $dependency_path = ZOLO_DIR_PATH . 'vendor-bundle/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : array(
                'dependencies' => array(),
                'version' => ZOLO_VERSION,
            );

            $version = $script_dependecy['version'];

            // Enqueue vendor bundle Scripts
            wp_register_script(
                'zolo-block-editor-dependency',
                ZOLO_ADMIN_URL . 'vendor-bundle/index.js',
                $script_dependecy['dependencies'],
                $version,
                true
            );

            //Register Modules
            $modules_dep_path = ZOLO_DIR_PATH . 'modules/index.asset.php';
            $script_dependecy = file_exists($modules_dep_path) ? include $modules_dep_path : array(
                'dependencies' => array(),
                'version' => ZOLO_VERSION,
            );

            $version = $script_dependecy['version'];

            // Enqueue Modules Scripts
            wp_register_script(
                'zolo-block-modules',
                ZOLO_ADMIN_URL . 'modules/index.js',
                $script_dependecy['dependencies'],
                $version,
                true
            );


            $dependency_path = ZOLO_DIR_PATH . 'dist/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : array(
                'dependencies' => array(),
                'version' => ZOLO_VERSION,
            );

            $version = $script_dependecy['version'];

            $script_dependecy = array_merge(
                $script_dependecy['dependencies'],
                array(
                    'wp-blocks',
                    'wp-i18n',
                    'wp-element',
                    'wp-components',
                    'zolo-block-editor-dependency',
                    'zolo-block-modules'
                )
            );

            // Enqueue Scripts
            wp_enqueue_script(
                'zolo-block-editor',
                ZOLO_ADMIN_URL . 'dist/index.js',
                $script_dependecy,
                $version,
                true
            );

            // Common Editor style.
            wp_enqueue_style(
                'zolo-block-common-editor-style',
                ZOLO_ADMIN_URL . 'dist/style.css',
                array('wp-edit-blocks'),
                ZOLO_VERSION
            );

            // Controls Editor style.
            wp_enqueue_style(
                'zolo-block-control-editor-style',
                ZOLO_ADMIN_URL . 'modules/style.css',
                array('wp-edit-blocks'),
                ZOLO_VERSION
            );
        }
    }
}

Zolo_Block_Enqueue::get_instance();
