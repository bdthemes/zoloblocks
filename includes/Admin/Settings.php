<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

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
            add_action('admin_init', [$this, 'save_default_blocks']);
            add_action('admin_init', [$this, 'save_default_extensions']);
            add_action("admin_init", [$this, 'zolo_site_visibility_settings']);
        }

        /**
         * Zolo Site Visibility Settings
         */

        public function zolo_site_visibility_settings() {
            add_settings_section(
                'zolo_site_visibility',
                __('ZoloBlocks Site Visibility', 'zoloblocks'),
                [$this, 'zolo_site_visibility_section'],
                'reading'
            );
            add_settings_field(
                'zolo_site_visibility',
                __('Site Visibility', 'zoloblocks'),
                [$this, 'zolo_site_visibility_field'],
                'reading',
                'zolo_site_visibility'
            );

            register_setting('reading', 'zolo_maintenance_mode');
            register_setting('reading', 'zolo_coming_soon_mode');
            register_setting('reading', 'zolo_maintenance_mode_template');
            register_setting('reading', 'zolo_site_visibility_private_link');
            // register_setting('reading', 'zolo_site_visibility_secret_key');
        }



        public function zolo_site_visibility_section() {
            echo wp_kses_post('<p>' . __('Choose whether you want to enable Maintenance Mode or Coming Soon Mode for your site.', 'zoloblocks') . '</p>');
        }

        public function zolo_site_visibility_field() {
            $zolo_maintenance_mode = get_option('zolo_maintenance_mode', false);
            $zolo_coming_soon_mode = get_option('zolo_coming_soon_mode', false);
            $selected_page = get_option('zolo_maintenance_mode_template', '');
            $pages = get_pages(); // Fetch all available pages
            $site_url = get_site_url();
            $visibility_secrect_key = get_option('zolo_site_visibility_secret_key', '');
            $visibility_private_link = get_option('zolo_site_visibility_private_link', false);
            $private_url = $site_url . '/?private_link=' . $visibility_secrect_key;
?>
            <fieldset>
                <legend class="screen-reader-text"><span><?php _e('Site Visibility', 'zoloblocks'); ?></span></legend>

                <!-- Coming Soon Mode Toggle -->
                <label for="zolo_coming_soon_mode">
                    <input type="checkbox" name="zolo_coming_soon_mode" id="zolo_coming_soon_mode" value="1" <?php checked($zolo_coming_soon_mode, true); ?>>
                    <?php echo esc_html__('Enable Coming Soon Mode', 'zoloblocks'); ?>
                </label>
                <p class="zolo-settings-text">
                    <?php echo esc_html__("If your website is under construction, the 'Coming Soon' page will return an HTTP 200 status code.", 'zoloblocks'); ?>
                </p>

                <br>

                <!-- Maintenance Mode Toggle -->
                <label for="zolo_maintenance_mode">
                    <input type="checkbox" name="zolo_maintenance_mode" id="zolo_maintenance_mode" value="1" <?php checked($zolo_maintenance_mode, true); ?>>
                    <?php echo esc_html__('Enable Maintenance Mode', 'zoloblocks'); ?>
                </label>
                <p class="zolo-settings-text">
                    <?php echo esc_html__("Maintenance Mode returns an HTTP 503 status code, signaling search engines to revisit the site shortly.", 'zoloblocks'); ?>
                </p>

                <br>

                <!-- Template Selection -->
                <div id="template-selection-wrapper" style="display: <?php echo esc_attr(($zolo_maintenance_mode || $zolo_coming_soon_mode) ? 'block' : 'none'); ?>;">

                    <!-- Enable Private Link Checkbox -->
                    <label for="zolo_site_visibility_private_link">
                        <input type="checkbox" name="zolo_site_visibility_private_link" id="zolo_site_visibility_private_link" value="1" <?php checked($visibility_private_link, true); ?>>
                        <?php echo esc_html__('Enable Private Link', 'zoloblocks'); ?>
                    </label>
                    <p class="zolo-settings-text">
                        <?php echo esc_html__("When enabled, only users with the secret key can access the site. Useful for sharing previews with clients.", 'zoloblocks'); ?>
                    </p>
                    <br>
                    <!-- Private Link Field (Initially Hidden) -->
                    <div id="private-link-field" style="display: <?php echo esc_attr($visibility_private_link ? 'block' : 'none'); ?>;">
                        <input readonly type="text" name="zolo_site_visibility_secret_key" id="zolo_site_visibility_secret_key" class="regular-text" value="<?php echo esc_attr($private_url); ?>" placeholder="<?php _e('Enter Secret Key', 'zoloblocks'); ?>">
                        <button class="zolo-private-link-copy-btn" onclick="copyToClipboard(event)">Copy</button>
                    </div>
                    <br>
                    <h4><?php echo esc_html__('Select a Template', 'zoloblocks'); ?></h4>
                    <label for="zolo_maintenance_mode_template">
                        <select name="zolo_maintenance_mode_template" id="zolo_maintenance_mode_template">
                            <option value="" <?php selected($selected_page, ''); ?>><?php echo esc_html__('Select Template', 'zoloblocks'); ?></option>
                            <?php foreach ($pages as $page) : ?>
                                <option value="<?php echo esc_attr($page->ID); ?>" <?php selected($selected_page, $page->ID); ?>><?php echo esc_html($page->post_title); ?></option>
                            <?php endforeach; ?>
                        </select>
                    </label>
                </div>
            </fieldset>

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const maintenanceCheckbox = document.getElementById('zolo_maintenance_mode');
                    const comingSoonCheckbox = document.getElementById('zolo_coming_soon_mode');
                    const templateWrapper = document.getElementById('template-selection-wrapper');
                    const privateLinkCheckbox = document.getElementById('zolo_site_visibility_private_link');
                    const privateLinkField = document.getElementById('private-link-field');

                    function toggleVisibility() {
                        // Toggle template visibility based on mode
                        templateWrapper.style.display = (maintenanceCheckbox.checked || comingSoonCheckbox.checked) ? 'block' : 'none';
                        // Toggle private link visibility based on checkbox
                        privateLinkField.style.display = privateLinkCheckbox.checked ? 'block' : 'none';
                    }

                    function ensureExclusiveMode() {
                        // Ensure only one mode is enabled
                        if (this.id === 'zolo_maintenance_mode' && this.checked) {
                            comingSoonCheckbox.checked = false;
                        } else if (this.id === 'zolo_coming_soon_mode' && this.checked) {
                            maintenanceCheckbox.checked = false;
                        }
                        toggleVisibility();
                    }



                    // Initial toggle based on saved settings
                    toggleVisibility();

                    // Event listeners for checkbox changes
                    maintenanceCheckbox.addEventListener('change', ensureExclusiveMode);
                    comingSoonCheckbox.addEventListener('change', ensureExclusiveMode);
                    privateLinkCheckbox.addEventListener('change', toggleVisibility);
                });


                function copyToClipboard(event) {
                    event.preventDefault(); // Prevents the default button behavior
                    var copyText = document.getElementById("zolo_site_visibility_secret_key");
                    copyText.select();
                    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                    document.execCommand("copy");

                    // Change button text immediately
                    document.querySelector('.zolo-private-link-copy-btn').textContent = 'Copied';

                    // Reset the button text after 2 seconds
                    setTimeout(() => {
                        document.querySelector('.zolo-private-link-copy-btn').textContent = 'Copy';
                    }, 2000);
                }
            </script>
<?php
        }

        /**
         * ZoloBlocks Settings Endpoint
         */
        public function zolo_blocks_settings_init() {

            register_rest_route(
                'zolo/v1',
                '/blocks',
                [
                    'methods'  => ['GET', 'POST'],
                    'callback' => [$this, 'handle_blocks_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ]
            );

            register_rest_route(
                'zolo/v1',
                '/favorites',
                [
                    'methods'  => ['GET', 'POST'],
                    'callback' => [$this, 'handle_favorites_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ]
            );

            register_rest_route(
                'zolo/v1',
                '/extensions',
                [
                    'methods'  => ['GET', 'POST'],
                    'callback' => [$this, 'handle_extensions_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
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
            // register zolo zoloai api key setting
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_sigmative_api_key',
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

            register_setting(
                'zolo_blocks_settings_group',
                'zolo_site_visibility_private_link',
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
                'zolo_site_visibility_secret_key',
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
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_disable_core_patterns',
                [
                    'type'              => 'boolean',
                    'default'           => true,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_auto_recovery',
                [
                    'type'              => 'boolean',
                    'default'           => true,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            register_setting(
                'zolo_blocks_settings_group',
                'zolo_sidebar_opener',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );

            // zolo webhooks
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_webhooks',
                [
                    'type'              => 'array',
                    'default'           => [],
                    'sanitize_callback' => null, // Add a custom sanitize callback if necessary
                    'show_in_rest'      => [
                        'schema' => [
                            'type'  => 'array',
                            'items' => [
                                'type'       => 'object',
                                'properties' => [
                                    'label' => [
                                        'type' => 'string',
                                    ],
                                    'url' => [
                                        'type' => 'string',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ]
            );

            //Enable video link.
            register_setting(
                'zolo_blocks_settings_group',
                'zolo_enable_video_link',
                [
                    'type'              => 'boolean',
                    'default'           => false,
                    'show_in_rest'      => [
                        'schema' => ['type' => 'boolean'],
                    ],
                    'sanitize_callback' => NULL,
                ]
            );
        }

        /**
         * Handles the blocks settings.
         *
         * This method is responsible for handling the blocks settings.
         *
         * @param WP_REST_Request $request The request object.
         */
        public function handle_blocks_settings($request) {
            if ($request->get_method() === 'GET') {
                return $this->get_blocks();
            } else {
                return $this->update_blocks($request);
            }
        }

        /**
         * Handles the demos settings.
         *
         * This method is responsible for handling the demos settings.
         *
         * @param WP_REST_Request $request The request object.
         */
        public function handle_demos_settings($request) {
            if ($request->get_method() === 'GET') {
                return $this->get_demos();
            } else {
                return $this->update_demos($request);
            }
        }
        /**
         * Handles the favorites settings.
         *
         * This method is responsible for handling the favorites settings.
         *
         * @param WP_REST_Request $request The request object.
         */
        public function handle_favorites_settings($request) {
            if ($request->get_method() === 'GET') {
                return $this->get_favorites();
            } else {
                return $this->update_favorites($request);
            }
        }

        /**
         * Handles the extensions settings.
         *
         * This method is responsible for handling the extensions settings.
         *
         * @param WP_REST_Request $request The request object.
         */
        public function handle_extensions_settings($request) {
            if ($request->get_method() === 'GET') {
                return $this->get_extensions();
            } else {
                return $this->update_extensions($request);
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
        public static function get_blocks() {
            return get_option('zolo_blocks_settings', []);
        }

        /**
         * Retrieves the favorites list.
         *
         * @return array The favorites list.
         */
        public static function get_favorites() {
            return get_option('zolo_favorites', []);
        }

        /**
         * Retrieves the extensions list.
         *
         * @return array The extensions list.
         */
        public static function get_extensions() {
            return get_option('zolo_extensions_settings', []);
        }

        /**
         * Updates the block list.
         * This method is responsible for updating the block list.
         * It is a static method that can be called without instantiating the class.
         *
         * @param WP_REST_Request $request The request object.
         * @return array The updated block list.
         */
        public function update_blocks($request) {
            $nonce = $request->get_param('zolo_nonce');

            // Verify nonce
            if (!wp_verify_nonce($nonce, 'zolo-nonce')) {
                return new WP_Error('invalid_request', __('Invalid request.', 'zoloblocks'), array('status' => 400));
            }

            // Fetch the updates array from the request
            $updates = $request->get_param('updates');
            $block_names = $request->get_param('names'); // For bulk update
            $status = filter_var($request->get_param('status'), FILTER_VALIDATE_BOOLEAN); // Status for bulk update

            // Fetch existing blocks from the options
            $blocks = get_option('zolo_blocks_settings', []);

            // If the updates array is provided, use it for individual updates
            if (is_array($updates) && !empty($updates)) {
                foreach ($updates as $update) {
                    $block_name = sanitize_text_field($update['name']);
                    $block_status = filter_var($update['status'], FILTER_VALIDATE_BOOLEAN);

                    // Find and update the matching block
                    foreach ($blocks as &$block) {
                        if ($block['name'] === $block_name) {
                            $block['status'] = $block_status;
                            break;
                        }
                    }
                }
            } elseif (is_array($block_names) && !empty($block_names)) {
                // For bulk updates with names array
                $block_names = array_map('sanitize_text_field', $block_names);

                foreach ($blocks as &$block) {
                    if (in_array($block['name'], $block_names)) {
                        $block['status'] = $status;
                    }
                }
            } else {
                return new WP_Error('invalid_request', __('Invalid block name(s) provided.', 'zoloblocks'), array('status' => 400));
            }

            // Update the option with the new blocks data
            update_option('zolo_blocks_settings', $blocks);

            return rest_ensure_response($blocks);
        }

        /**
         * Updates the favorites list.
         *
         * This method is responsible for updating the favorites list.
         * It is a static method that can be called without instantiating the class.
         *
         * @param WP_REST_Request $request The request object.
         * @return array The updated favorites list.
         */
        public function update_favorites($request) {
            $nonce = $request->get_param('zolo_nonce');

            if (! wp_verify_nonce($nonce, 'zolo-nonce')) {
                return new WP_Error('invalid_request', __('Invalid request.', 'zoloblocks'), array('status' => 400));
            }

            $fav_id = $request->get_param('fav_id') ? intval($request->get_param('fav_id')) : '';

            // Fetch existing blocks
            $fav_items = get_option('zolo_favorites', []);

            // if fav_id is not empty then add to favorite list else remove from favorite list
            if (!empty($fav_id)) {

                // check if it is already in favorite list or not
                $fav_exists = false;
                foreach ($fav_items as $fav_item) {
                    if ($fav_item === $fav_id) {
                        $fav_exists = true;
                        break;
                    }
                }

                // if not exists then add to favorite list else remove from favorite list
                if (!$fav_exists) {
                    $fav_items[] = $fav_id;
                } else {
                    $key = array_search($fav_id, $fav_items);
                    if ($key !== false) {
                        unset($fav_items[$key]);
                    }
                }
            } else {
                return new WP_Error('invalid_request', __('Invalid favorite id provided.', 'zoloblocks'), array('status' => 400));
            }

            // Update the option
            update_option('zolo_favorites', $fav_items);

            return rest_ensure_response($fav_items);
        }

        /**
         * Updates the extensions list. // update_extensions
         *
         * @param WP_REST_Request $request The request object.
         * @return array The updated extensions list.
         */
        public function update_extensions($request) {

            $nonce = $request->get_param('zolo_nonce');

            // Verify nonce
            if (!wp_verify_nonce($nonce, 'zolo-nonce')) {
                return new WP_Error('invalid_request', __('Invalid request.', 'zoloblocks'), array('status' => 400));
            }

            // Fetch the updates array from the request
            $updates = $request->get_param('updates');
            $extension_names = $request->get_param('names'); // For bulk update
            $status = filter_var($request->get_param('status'), FILTER_VALIDATE_BOOLEAN); // Status for bulk update

            // Fetch existing extensions from the options
            $extensions = get_option('zolo_extensions_settings', []);

            // If the updates array is provided, use it for individual updates
            if (is_array($updates) && !empty($updates)) {
                foreach ($updates as $update) {
                    $extension_name = sanitize_text_field($update['name']);
                    $extension_status = filter_var($update['status'], FILTER_VALIDATE_BOOLEAN);

                    // Find and update the matching block
                    foreach ($extensions as &$extension) {
                        if ($extension['name'] === $extension_name) {
                            $extension['status'] = $extension_status;
                            break;
                        }
                    }
                }
            } elseif (is_array($extension_names) && !empty($extension_names)) {
                // For bulk updates with names array
                $extension_names = array_map('sanitize_text_field', $extension_names);

                foreach ($extensions as &$extension) {
                    if (in_array($extension['name'], $extension_names)) {
                        $extension['status'] = $status;
                    }
                }
            } else {
                return new WP_Error('invalid_request', __('Invalid extension name(s) provided.', 'zoloblocks'), array('status' => 400));
            }

            // Update the option with the new blocks data
            update_option('zolo_extensions_settings', $extensions);

            return rest_ensure_response($extensions);
        }

        /**
         * Default Block Settings
         *
         * @return array
         *
         */
        public function save_default_blocks() {
            $existing_blocks = get_option('zolo_blocks_settings', []);
            $new_blocks = ZoloHelpers::get_zolo_blocks();

            // Temporary array to store the merged blocks
            $merged_blocks = [];

            // Merge existing and new blocks
            foreach ($new_blocks as $new_block) {
                $found = false;

                foreach ($existing_blocks as $existing_block) {
                    if ($existing_block['name'] === $new_block['name']) {
                        // Merge the existing block with new data, but retain the status
                        $merged_blocks[] = array_merge($new_block, ['status' => $existing_block['status']]);
                        $found = true;
                        break;
                    }
                }

                // If the block does not exist in the current options, add it
                if (!$found) {
                    $merged_blocks[] = $new_block;
                }
            }

            // Remove blocks that are no longer in the new list
            foreach ($existing_blocks as $existing_block) {
                $block_exists = false;

                foreach ($new_blocks as $new_block) {
                    if ($new_block['name'] === $existing_block['name']) {
                        $block_exists = true;
                        break;
                    }
                }

                if (!$block_exists) {
                    // If the block exists in existing_blocks but not in new_blocks, remove it from merged_blocks
                    $key = array_search($existing_block['name'], array_column($merged_blocks, 'name'));
                    if ($key !== false) {
                        unset($merged_blocks[$key]);
                    }
                }
            }

            // Re-index the array to ensure there are no gaps in keys
            $merged_blocks = array_values($merged_blocks);

            update_option('zolo_blocks_settings', $merged_blocks);
        }

        /**
         * Default Extensions Settings
         *
         * @return array
         *
         */
        public function save_default_extensions() {
            $existing_extensions = get_option('zolo_extensions_settings', []);
            $new_extensions = ZoloHelpers::get_zolo_extensions();

            // Temporary array to store the merged blocks
            $merged_extensions = [];

            // Merge existing and new blocks
            foreach ($new_extensions as $new_extension) {
                $found = false;

                foreach ($existing_extensions as $existing_extension) {
                    if ($existing_extension['name'] === $new_extension['name']) {
                        // Merge the existing block with new data, but retain the status
                        $merged_extensions[] = array_merge($new_extension, ['status' => $existing_extension['status']]);
                        $found = true;
                        break;
                    }
                }

                // If the extension does not exist in the current options, add it
                if (!$found) {
                    $merged_extensions[] = $new_extension;
                }
            }

            // Remove blocks that are no longer in the new list
            foreach ($existing_extensions as $existing_extension) {
                $extension_exists = false;

                foreach ($new_extensions as $new_extension) {
                    if ($new_extension['name'] === $existing_extension['name']) {
                        $extension_exists = true;
                        break;
                    }
                }

                if (!$extension_exists) {
                    // If the block exists in existing_blocks but not in new_blocks, remove it from merged_blocks
                    $key = array_search($existing_extension['name'], array_column($merged_extensions, 'name'));
                    if ($key !== false) {
                        unset($merged_extensions[$key]);
                    }
                }
            }

            // Re-index the array to ensure there are no gaps in keys
            $merged_extensions = array_values($merged_extensions);

            update_option('zolo_extensions_settings', $merged_extensions);
        }
    }
}
