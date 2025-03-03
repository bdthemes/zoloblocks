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
                '/extensions',
                [
                    'methods'  => ['GET', 'POST'],
                    'callback' => [$this, 'handle_extensions_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
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
         * Retrieves the extensions list.
         *
         * @return array The extensions list.
         */
        public static function get_extensions() {
            return get_option('zolo_extensions_settings', []);
        }

        /**
         * Updates the block list.
         *
         * This method is responsible for updating the block list.
         * It is a static method that can be called without instantiating the class.
         *
         * @param WP_REST_Request $request The request object.
         * @return array The updated block list.
         */
        public function update_blocks($request) {
            $nonce = $request->get_param('zolo_nonce');

            if (! wp_verify_nonce($nonce, 'zolo-nonce')) {
                return new WP_Error('invalid_request', __('Invalid request.', 'zoloblocks'), array('status' => 400));
            }

            $block_names = $request->get_param('names');
            $single_block_name = filter_var($request->get_param('name'), FILTER_SANITIZE_STRING);
            $active_status = filter_var($request->get_param('status'), FILTER_VALIDATE_BOOLEAN);

            // Fetch existing blocks
            $blocks = get_option('zolo_blocks_settings', []);

            // Determine if it's a single block or multiple blocks
            if (!empty($single_block_name)) {
                // Handle single block update
                $block_names = [sanitize_text_field($single_block_name)];
            } elseif (is_array($block_names)) {
                // Sanitize all block names in the array
                $block_names = array_map('sanitize_text_field', $block_names);
            } else {
                return new WP_Error('invalid_request', __('Invalid block name(s) provided.', 'zoloblocks'), array('status' => 400));
            }

            // Update the blocks' active status
            foreach ($blocks as &$block) {
                if (in_array($block['name'], $block_names)) {
                    $block['status'] = $active_status;
                }
            }

            // Update the option
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

            if (! wp_verify_nonce($nonce, 'zolo-nonce')) {
                return new WP_Error('invalid_request', __('Invalid request.', 'zoloblocks'), array('status' => 400));
            }

            $extension_names = $request->get_param('names');
            $single_extension_name = filter_var($request->get_param('name'), FILTER_SANITIZE_STRING);
            $active_status = filter_var($request->get_param('status'), FILTER_VALIDATE_BOOLEAN);

            // Fetch existing blocks
            $extensions = get_option('zolo_extensions_settings', []);

            // Determine if it's a single block or multiple blocks
            if (!empty($single_extension_name)) {
                // Handle single block update
                $extension_names = [sanitize_text_field($single_extension_name)];
            } elseif (is_array($extension_names)) {
                // Sanitize all block names in the array
                $extension_names = array_map('sanitize_text_field', $extension_names);
            } else {
                return new WP_Error('invalid_request', __('Invalid block name(s) provided.', 'zoloblocks'), array('status' => 400));
            }

            // Update the blocks' active status
            foreach ($extensions as &$extension) {
                if (in_array($extension['name'], $extension_names)) {
                    $extension['status'] = $active_status;
                }
            }

            // Update the option
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
            $all_blocks = ZoloHelpers::allowedFormats();

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
