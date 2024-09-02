<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (! class_exists('Settings')) {

    /**
     * Settings Class
     *
     * @since 0.0.1
     */
    class Settings {

        use SingletonTrait;

        /**
         * Constructs a new instance of the Settings class.
         */
        public function __construct() {
            add_action('rest_api_init', [$this, 'zolo_blocks_settings_init']);
            add_action('admin_init', [$this, 'update_settings_if_needed']);
        }

        /**
         * Zolo Blocks Settings Endpoint
         */
        public function zolo_blocks_settings_init() {
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_blocks_settings',
                [
                    'type'              => 'array',
                    'default'           => $this::block_list(),
                    'sanitize_callback' => NULL,
                    'show_in_rest'      => [
                        'schema' => [
                            'type'  => 'array',
                            'items' => [
                                'type'       => 'object',
                                'properties' => [
                                    'name'       => ['type' => 'string'],
                                    'categories' => [
                                        'type'  => 'array',
                                        'items' => ['type' => 'string'],
                                    ],
                                    'status'     => ['type' => 'boolean'],
                                ],
                            ],
                        ],
                    ],
                ]
            );
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_extensions_settings',
                [
                    'type'              => 'array',
                    'default'           => $this::extensions_list(),
                    'sanitize_callback' => NULL,
                    'show_in_rest'      => [
                        'schema' => [
                            'type'  => 'array',
                            'items' => [
                                'type'       => 'object',
                                'properties' => [
                                    'name'       => ['type' => 'string'],
                                    'categories' => [
                                        'type'  => 'array',
                                        'items' => ['type' => 'string'],
                                    ],
                                    'status'     => ['type' => 'boolean'],
                                ],
                            ],
                        ],
                    ],
                ]
            );
            // favorite templates
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_favorite_templates',
                [
                    'type'              => 'array',
                    'default'           => [],
                    'sanitize_callback' => NULL,
                    'show_in_rest'      => [
                        'schema' => [
                            'type'  => 'array',
                            'items' => ['type' => 'number'],
                        ],
                    ],
                ]
            );

            // register zolo google api key setting
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_google_api_key',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // register zolo google spread sheet api key setting
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_google_spread_sheet_api_key',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // register editor width
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_editor_width',
                [
                    'type'              => 'integer',
                    'default'           => 1200,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'integer'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // register support svg
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_support_svg',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // register support maintenance mode
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_maintenance_mode',
                [
                    'type'             => 'boolean',
                    'default'          => '',
                    'show_in_rest'     => [
                        'schema' => [
                            'type' => 'boolean',
                        ],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_coming_soon_mode',
                [
                    'type'             => 'boolean',
                    'default'          => '',
                    'show_in_rest'     => [
                        'schema' => [
                            'type' => 'boolean',
                        ],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
            // register support maintenance mode template
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_maintenance_mode_template',
                [
                    'type'             => 'string',
                    'default'          => false,
                    'show_in_rest'     => [
                        'schema' => [
                            'type' => 'string',
                        ],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // smooth scroller
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_smooth_scroller',
                [
                    'type'             => 'boolean',
                    'default'          => false,
                    'show_in_rest'     => [
                        'schema' => [
                            'type' => 'boolean',
                        ],
                        'sanitize_callback' => NULL,
                    ]
                ]
            );

            // Enable google recaptcha
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_enable_recaptcha',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // Google recaptcha site key
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_recaptcha_site_key',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // Google recaptcha secret key
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_recaptcha_secret_key',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
            // mailchimp API key
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_mailchimp_api_key',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // mailchimp audience ID
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_mailchimp_audience_id',
                [
                    'type'              => 'string',
                    'default'           => '',
                    'show_in_rest'      => [
                        'schema' => ['type' => 'string'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // block export addon
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_enable_block_export',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // block import addon
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_enable_block_import',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_enable_template_library',
                [
                    'type'              => 'boolean',
                    'default'           => true,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
        }

        /**
         * Updates the settings if needed.
         *
         * This method is responsible for updating the settings if there are any changes that need to be applied.
         * It is called within the Zoloblocks plugin and is located in the Settings.php file.
         *
         * @since 1.0.0
         */
        public function update_settings_if_needed() {
            // Get the old and new blocks
            $old_blocks = get_option('zolo_blocks_settings', []);
            $new_blocks = $this::block_list();

            // Check if there are any differences between the current and new blocks
            $blocks_changed = $old_blocks !== $new_blocks;

            if ($blocks_changed) {
                // Preserve the status of existing blocks
                foreach ($new_blocks as &$new_block) {
                    foreach ($old_blocks as $old_block) {
                        if ($new_block['name'] === $old_block['name']) {
                            $new_block['status'] = $old_block['status'];
                            break;
                        }
                    }
                }

                // Update the zolo_blocks_settings option
                update_option('zolo_blocks_settings', $new_blocks);
            }
        }

        /**
         * Retrieves the block list.
         *
         * This method is responsible for retrieving the block list.
         * It is a static method that can be called without instantiating the class.
         *
         * @return array The block list.
         */
        public static function block_list() {
            $blocks_file = trailingslashit(ZOLO_DIR_PATH) . 'includes/Admin/Blocks.php';

            if (file_exists($blocks_file)) {
                return require $blocks_file ?: [];
            }

            return [];
        }

        /**
         * Retrieves the list of extensions.
         *
         * This method is responsible for retrieving the list of extensions.
         * It returns an array of extensions available in the system.
         *
         * @return array The list of extensions.
         */
        public static function extensions_list() {
            $extensions_file = trailingslashit(ZOLO_DIR_PATH) . 'includes/Admin/Extensions.php';

            if (file_exists($extensions_file)) {
                return require $extensions_file ?: [];
            }

            return [];
        }
    }
}
