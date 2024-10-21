<?php

namespace Zolo\Popup;

use Zolo\Traits\SingletonTrait;
use Zolo\Helpers\ZoloHelpers;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (! class_exists('PopupBuilder')) {

    /**
     * Class PopupBuilder
     *
     * @package Zolo
     */
    class PopupBuilder {

        use SingletonTrait;

        /**
         * Constructor
         *
         * @return void
         */
        public function __construct() {
            add_action('init', [$this, 'register_post_type']);
            add_action('init', [$this, 'check_and_set_popup_cookie']);
            add_filter('manage_zolo-popup_posts_columns', [$this, 'set_custom_edit_zolo_popup_columns']);
            add_action('manage_zolo-popup_posts_custom_column', [$this, 'custom_zolo_popup_column'], 10, 2);
            add_filter('manage_edit-zolo-popup_sortable_columns', [$this, 'set_custom_edit_zolo_popup_columns']);
            add_action('wp_ajax_zolo_update_popup_status', [$this, 'update_popup_status']);
            add_action('wp_ajax_nopriv_zolo_update_popup_status', [$this, 'update_popup_status']);
            add_action('admin_enqueue_scripts', [$this, 'editor_enqueue_scripts']);
            add_action('wp_head', [$this, 'load_popup_builder']);
        }

        /**
         * Register Zolo Popup post type
         *
         * @return void
         */
        public function register_post_type() {
            $labels = [
                'name'               => __('Popup Builder', 'zoloblocks'),
                'singular_name'      => __('Popup Builder', 'zoloblocks'),
                'menu_name'          => __('Popup Builder', 'zoloblocks'),
                'name_admin_bar'     => __('Popup Builder', 'zoloblocks'),
                'add_new'            => __('Create Popup', 'zoloblocks'),
                'add_new_item'       => __('Create Popup', 'zoloblocks'),
                'new_item'           => __('Create Popup', 'zoloblocks'),
                'edit_item'          => __('Edit Popup', 'zoloblocks'),
                'view_item'          => __('View Popup', 'zoloblocks'),
                'all_items'          => __('All Popups', 'zoloblocks'),
                'search_items'       => __('Search Popups', 'zoloblocks'),
                'parent_item_colon'  => __('Parent Popups:', 'zoloblocks'),
                'not_found'          => __('No popups found.', 'zoloblocks'),
                'not_found_in_trash' => __('No popups found in Trash.', 'zoloblocks'),
            ];

            $args = [
                'labels'             => $labels,
                'description'        => __('Description.', 'zoloblocks'),
                'public'             => false,
                'publicly_queryable' => false,
                'show_ui'            => true,
                'show_in_menu'       => false,
                'query_var'          => true,
                'rewrite'            => ['slug' => 'zolo-popup'],
                'capability_type'    => 'post',
                'has_archive'        => false,
                'hierarchical'       => false,
                'menu_position'      => 20,
                'show_in_rest'       => true,
                'template'           => [['zolo/popup-builder']],
                'template_lock'      => 'all',
                'supports'           => ['title', 'editor', 'author', 'custom-fields'],
                'menu_icon'          => 'dashicons-admin-page'
            ];

            register_post_type('zolo-popup', $args);

            // Register Popup meta fields
            register_post_meta('zolo-popup', 'zolo_popup_id', [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'string',
            ]);

            register_post_meta('zolo-popup', 'zolo_popup_trigger', [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'string',
                'default'      => 'onload'
            ]);

            register_post_meta('zolo-popup', 'zolo_popup_enable_disable', [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'boolean',
                'default'      => true
            ]);

            register_post_meta('zolo-popup', 'zolo_popup_infinite_repeat', [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'boolean',
                'default'      => true
            ]);

            register_post_meta('zolo-popup', 'zolo_popup_repeat_num', [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'number',
                'default'      => 1
            ]);
        }

        /**
         * Cookie for popup
         *
         * @return void
         */
        public function check_and_set_popup_cookie() {
            $args = [
                'post_type'      => 'zolo-popup',
                'post_status'    => 'publish',
                'posts_per_page' => -1,
            ];

            $popups = new \WP_Query($args);

            if ($popups->have_posts()) {
                while ($popups->have_posts()) {
                    $popups->the_post();

                    $popup_id = get_post_meta(get_the_ID(), 'zolo_popup_id', true);
                    $repeat_num = get_post_meta(get_the_ID(), 'zolo_popup_repeat_num', true);
                    $infinite_repeat = get_post_meta(get_the_ID(), 'zolo_popup_infinite_repeat', true);

                    if ($infinite_repeat) {
                        $repeat_num = -1;
                    } else {
                        $repeat_num = intval($repeat_num);
                    }

                    // Check the cookie for this popup
                    $cookie_name = 'zp_' . $popup_id;
                    $cookie_value = isset($_COOKIE[$cookie_name]) ? intval($_COOKIE[$cookie_name]) : 0;

                    // Only increase the cookie value if it hasn't reached the maximum number of times
                    if ($cookie_value < $repeat_num || $repeat_num === -1) {
                        if ($repeat_num !== -1) {
                            setcookie($cookie_name, $cookie_value + 1, time() + 86400, "/"); // Cookie expires in 1 day
                        }
                    }
                }
            }

            wp_reset_postdata();
        }

        /**
         * Set custom columns for Zolo Popup
         *
         * @param array $columns
         * @return array
         */
        public function set_custom_edit_zolo_popup_columns($columns) {
            unset($columns['date']);
            $columns['zolo_popup_trigger'] = __('Trigger', 'zoloblocks');
            $columns['zolo_popup_enable_disable'] = __('Status', 'zoloblocks');
            $columns['date'] = __('Date', 'zoloblocks');

            return $columns;
        }

        /**
         * Custom Zolo Popup column
         *
         * @param string $column
         * @param int $post_id
         * @return void
         */
        public function custom_zolo_popup_column($column, $post_id) {
            if ('zolo_popup_trigger' === $column) {
                $trigger = get_post_meta($post_id, 'zolo_popup_trigger', true);
                echo esc_html($trigger);
            }

            if ('zolo_popup_enable_disable' === $column) {
                $status = get_post_meta($post_id, 'zolo_popup_enable_disable', true) ? 'checked' : '';
                $checked = $status ? 'switch-on' : 'switch-off';
                echo '<div class="zolo-popup-btn" data-post-id="' . $post_id . '">';
                echo '<span class="switch ' . $checked . '"></span>';
                echo '</div>';
            }
        }

        /**
         * Update Popup Status
         *
         * @return void
         */
        public function update_popup_status() {
            check_ajax_referer('zolo-nonce', 'nonce');

            if (empty($_POST['post_id'])) {
                wp_send_json([
                    'status'  => 'error',
                    'message' => __('Post ID is missing!', 'zoloblocks'),
                ]);
            }

            $post_id = absint($_POST['post_id']);
            $status = get_post_meta($post_id, 'zolo_popup_enable_disable', true);

            $status = $status ? false : true;

            update_post_meta($post_id, 'zolo_popup_enable_disable', $status);

            wp_send_json([
                'status'    => 'success',
                'message'   => __('Popup status updated!', 'zoloblocks'),
                'new_value' => $status
            ]);
        }

        /**
         * Load Editor assets
         *
         * @param string $screen
         * @return void
         */
        public function editor_enqueue_scripts($screen) {
            $current_post_type = get_current_screen()->post_type;
            if ('zolo-popup' !== $current_post_type) {
                return;
            }

            wp_enqueue_script('zolo-popup-builder-ajax', trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/assets/js/popup-builder.js', ['jquery'], ZOLO_VERSION, true);
            wp_enqueue_style('zolo-popup-builder-css', trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/assets/css/popup-builder.css', [], ZOLO_VERSION, 'all');

            wp_localize_script(
                'zolo-popup-builder-ajax',
                'zoloPopup',
                [
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce'   => wp_create_nonce('zolo-nonce')
                ]
            );
        }

        /**
         * Load Popup Builder
         *
         * @return void
         */
        public function load_popup_builder() {
            $args = [
                'post_type'      => 'zolo-popup',
                'post_status'    => 'publish',
                'posts_per_page' => -1,
            ];

            $popups = new \WP_Query($args);

            if ($popups->have_posts()) {
                while ($popups->have_posts()) {
                    $popups->the_post();

                    $meta_keys = [
                        'zolo_popup_id',
                        'zolo_popup_trigger',
                        'zolo_popup_enable_disable',
                        'zolo_popup_infinite_repeat',
                        'zolo_popup_repeat_num'
                    ];

                    $popup_meta = [];
                    foreach ($meta_keys as $key) {
                        $popup_meta[$key] = get_post_meta(get_the_ID(), $key, true);
                    }

                    $cookie_name = 'zp_' . $popup_meta['zolo_popup_id'];
                    $cookie_value = isset($_COOKIE[$cookie_name]) ? $_COOKIE[$cookie_name] : 0;

                    if ($popup_meta['zolo_popup_enable_disable']) {
                        $block_content = get_the_content();
                        $blocks = parse_blocks($block_content);
                        $styles = $this->process_blocks_recursively($blocks);

                        if (!empty($styles)) {
                            $this->enqueue_popup_styles($styles);
                        }

                        if ($popup_meta['zolo_popup_infinite_repeat']) {
                            $popup_meta['zolo_popup_repeat_num'] = -1;
                        } else {
                            $popup_meta['zolo_popup_repeat_num'] = intval($popup_meta['zolo_popup_repeat_num']);
                        }

                        if ($popup_meta['zolo_popup_repeat_num'] === -1 || intval($cookie_value) < intval($popup_meta['zolo_popup_repeat_num'])) {
                            if ('onload' === $popup_meta['zolo_popup_trigger']) {
                                the_content();
                            }
                        }
                    }
                }
            }

            wp_reset_postdata();
        }

        /**
         * Process blocks recursively
         *
         * @param array $blocks
         * @return string
         */
        private function process_blocks_recursively($blocks) {
            $styles = '';

            foreach ($blocks as $block) {
                if (isset($block['attrs']['zoloStyles'])) {
                    $styles .= ZoloHelpers::zolo_generate_style($block['attrs']['zoloStyles']);
                }

                if (isset($block['innerBlocks']) && !empty($block['innerBlocks'])) {
                    $styles .= $this->process_blocks_recursively($block['innerBlocks']);
                }
            }

            return $styles;
        }

        /**
         * Enqueue Popup Styles
         *
         * @param string $styles
         * @return void
         */
        public function enqueue_popup_styles($styles) {
            if (!empty($styles)) {
                $handle = 'zolo-block-inline-popup-style-' . rand(100, 10000);
                wp_register_style($handle, false, [], ZOLO_VERSION, 'all');
                wp_enqueue_style($handle, false, [], ZOLO_VERSION, 'all');
                wp_add_inline_style($handle, $styles);
            }
        }
    }
}
