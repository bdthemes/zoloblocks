<?php

/**
 * Zolo Blocks Enqueues.
 *
 * @package Zolo
 */

use Zolo\Helpers\ZoloHelpers;

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

            add_action('enqueue_block_editor_assets', [$this, 'editor_assets_loader']);

            // enqueue style for both editor and frontend
            // add_action('admin_init', array($this, 'block_assets_loader'));
            add_action('enqueue_block_assets', [$this, 'block_assets_loader']);
        }

        /**
         * Load Block Assets for both editor and frontend
         * @since 0.0.1
         * @return void
         */
        public function block_assets_loader()
        {
            wp_register_style(
                'zolo-block-common-style',
                ZOLO_ADMIN_URL . 'dist/style.css',
                [],
                ZOLO_VERSION
            );

            // enqueue fontawesome icons
            wp_register_style(
                'zolo-fontawesome',
                ZOLO_ADMIN_URL . 'assets/css/fontawesome/css/fontawesome.min.css',
                [],
                ZOLO_VERSION
            );

            wp_enqueue_script('react', 'https://unpkg.com/react/umd/react.production.min.js', [], false, true);
            wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom/umd/react-dom.production.min.js', [], false, true);
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
            $dependency_path  = ZOLO_DIR_PATH . 'vendor-bundle/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

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
            $script_dependecy = file_exists($modules_dep_path) ? include $modules_dep_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $version = $script_dependecy['version'];

            // Enqueue Modules Scripts
            wp_register_script(
                'zolo-block-modules',
                ZOLO_ADMIN_URL . 'modules/index.js',
                $script_dependecy['dependencies'],
                $version,
                true
            );

            $dependency_path  = ZOLO_DIR_PATH . 'dist/index.asset.php';
            $script_dependecy = file_exists($dependency_path) ? include $dependency_path : [
                'dependencies' => [],
                'version'      => ZOLO_VERSION
            ];

            $version = $script_dependecy['version'];

            $script_dependecy = array_merge(
                $script_dependecy['dependencies'],
                [
                    'wp-blocks',
                    'wp-i18n',
                    'wp-element',
                    'wp-components',
                    'zolo-block-editor-dependency',
                    'zolo-block-modules'
                ]
            );

            // Enqueue Scripts
            wp_enqueue_script(
                'zolo-block-editor',
                ZOLO_ADMIN_URL . 'dist/index.js',
                $script_dependecy,
                $version,
                true
            );

            // Controls Editor style.
            wp_enqueue_style(
                'zolo-block-control-editor-style',
                ZOLO_ADMIN_URL . 'modules/style.css',
                [
                    'wp-edit-blocks',
                    'zolo-block-common-style',
                    'zolo-fontawesome'
                ],
                ZOLO_VERSION
            );

            //this file use for js
            wp_localize_script('zolo-block-editor', 'zoloParams', [
                'ajaxurl'    => admin_url('admin-ajax.php'),
                'post_types' => ZoloHelpers::get_post_types(),
                'get_users' => ZoloHelpers::get_all_users(),
                'get_taxonomies' => ZoloHelpers::get_taxonomies(),
                'all_term_list'  => ZoloHelpers::get_all_taxonomy(),
                'zolo_nonce' => wp_create_nonce('zolo-nonce'),
            ]);
        }
    }
}

Zolo_Block_Enqueue::get_instance();
