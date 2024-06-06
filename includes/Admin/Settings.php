<?php

/**
 * ZoloBlocks Settings Endpoint
 */

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

class Zolo_Settings {
    use SingletonTrait;

    // Create a new endpoint route for all blocks
    public function __construct() {
        // add_action('admin_init', [$this, 'zolo_blocks_settings_init']);
        add_action('rest_api_init', [$this, 'zolo_blocks_settings_init']);
        add_action('admin_init', [$this, 'update_settings_if_needed']);
    }

    /**
     * Zolo Blocks Settings Endpoint
     */
    public function zolo_blocks_settings_init() {

        // register a new setting that returns an array of block names and their default values
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
                                'name' => [
                                    'type' => 'string',
                                ],
                                'categories' => [
                                    'type'  => 'array',
                                    'items' => [
                                        'type' => 'string',
                                    ],
                                ],
                                'status' => [
                                    'type' => 'boolean',
                                ],
                            ],
                        ],
                    ],
                ],
            ]
        );

        // register zolo google api key setting
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_google_api_key',
            [
                'type'         => 'string',
                'default'      => '',
                'show_in_rest' => [
                    'schema' => [
                        'type' => 'string',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // register editor width
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_editor_width',
            [
                'type'             => 'integer',
                'default'          => 1200,
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'integer',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // register support svg
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_support_svg',
            [
                'type'             => 'boolean',
                'default'          => false,
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'boolean',
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
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // Enable google recaptcha
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_enable_recaptcha',
            [
                'type'             => 'boolean',
                'default'          => false,
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'boolean',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // Google recaptcha site key
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_recaptcha_site_key',
            [
                'type'             => 'string',
                'default'          => '',
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'string',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // Google recaptcha secret key
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_recaptcha_secret_key',
            [
                'type'             => 'string',
                'default'          => '',
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'string',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );
        // mailchimp API key
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_mailchimp_api_key',
            [
                'type'             => 'string',
                'default'          => '',
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'string',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // mailchimp audience ID
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_mailchimp_audience_id',
            [
                'type'             => 'string',
                'default'          => '',
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'string',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );

        // block export addon
        register_setting(
            'zolo_blocks_settings_group',
            'zolo_enable_block_export',
            [
                'type'             => 'boolean',
                'default'          => false,
                'show_in_rest'     => [
                    'schema' => [
                        'type' => 'boolean',
                    ],
                ],
                'sanitize_callback' => NULL,
            ]
        );
    }

    // Update settings on plugin activation
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
     * Zolo Blocks List
     */
    public static function block_list() {
        $blocks_file = trailingslashit(ZOLO_DIR_PATH) . 'includes/Admin/Blocks.php';

        if (file_exists($blocks_file)) {
            $blocks = require $blocks_file;
            return is_array($blocks) ? $blocks : [];
        } else {
            return [];
        }
    }
}

Zolo_Settings::getInstance();
