<?php

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

if (! class_exists('Dashboard')) {

    /**
     * Dashboard Class
     *
     * @since 0.0.1
     */
    class Dashboard {

        use SingletonTrait;

        /**
         * Class Dashboard
         *
         * This class represents the Dashboard functionality in the Zoloblocks plugin.
         * It is responsible for managing the admin dashboard and its related features.
         */
        public function __construct() {
            add_action('admin_menu', [$this, 'zolo_admin_menu']);
            add_action('admin_init', [$this, 'disable_admin_notice']);
            add_action('admin_init', [$this, 'handle_tab_redirect']);
            add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        }

        /**
         * Handle tab redirect
         *
         * @return void
         */
        public function handle_tab_redirect() {
            // phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $current_page = isset($_GET['page']) ? sanitize_text_field(wp_unslash($_GET['page'])) : '';

            // Only redirect for specific tab pages
            $tab_pages = ['zolo-blocks', 'zolo-extensions', 'zolo-api-settings', 'zolo-settings'];

            if (in_array($current_page, $tab_pages)) {
                // Map page slugs to tab hashes
                $tab_mapping = [
                    'zolo-blocks' => 'blocks',
                    'zolo-extensions' => 'extensions',
                    'zolo-api-settings' => 'apiSettings',
                    'zolo-settings' => 'settings',
                ];

                $tab = isset($tab_mapping[$current_page]) ? $tab_mapping[$current_page] : 'welcome';

                // Build the redirect URL
                $redirect_url = admin_url('admin.php?page=zoloblocks#' . $tab);

                // Perform the redirect
                wp_safe_redirect($redirect_url);
                exit;
            }
        }

        /**
         * Dummy page for submenu items (redirects are handled by admin_init)
         *
         * @return void
         */
        public function tab_redirect() {
            // This function is never actually called because handle_tab_redirect() redirects first
            // But it's required to avoid WordPress errors
            echo '<div class="wrap"></div>';
        }

        /**
         * Enqueues the Zolo dashboard scripts.
         */

        public function enqueue_scripts() {
            global $pagenow;
            if ($pagenow == 'post.php' || $pagenow == 'post-new.php' || $pagenow == 'site-editor.php' || $pagenow == 'widgets.php') return;
            wp_enqueue_style('zolo-dashboard-css', trailingslashit(ZOLO_ADMIN_URL) . 'includes/Admin/assets/css/dashboard.css', [], ZOLO_VERSION, 'all');
        }
        /**
         * Disables the admin notice.
         *
         * This method is responsible for disabling the admin notice in the WordPress dashboard.
         * It is called when the `disable_admin_notice` action is triggered.
         *
         * @since 1.0.0
         */
        public function disable_admin_notice() {
            if (!isset($_GET['page']) || !wp_verify_nonce(wp_create_nonce('zolo_admin_nonce'), 'zolo_admin_nonce')) {
                return;
            }

            $page = sanitize_text_field(wp_unslash($_GET['page']));
            if ($page === 'zoloblocks') {
                remove_all_actions('admin_notices');
                remove_all_actions('all_admin_notices');
                remove_all_actions('network_admin_notices');
            }
        }
        /**
         * Registers the Zolo admin menu.
         *
         * This method is responsible for registering the Zolo admin menu in the WordPress dashboard.
         * It is called when the `zolo_admin_menu` action is triggered.
         *
         * @since 1.0.0
         */
        public function zolo_admin_menu() {
            add_menu_page(
                __('ZoloBlocks', 'zoloblocks'),
                __('ZoloBlocks', 'zoloblocks'),
                'manage_options',
                'zoloblocks',
                [$this, 'zolo_blocks_page'],
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4zNTc5IDJMMi4wMzkxOCAxMC40MTA2TDIgMkgxMC4zNTc5Wk0xNS42NjM1IDEwLjg2M0wxOC45NTI1IDcuNTczOTdDMjAuNzcwNCA4Ljk1OTIzIDIxLjk5ODggMTEuMDA3NyAyMS45OTg4IDEzLjQ0MzVDMjEuOTk4OCAxNS43NDggMjEuMTc4NyAxOC4xNzE2IDE5LjU1NjkgMTkuNjU0OUMxNy44OTU4IDIxLjEzOTQgMTUuODk4OCAyMS44ODExIDEzLjQ5NjEgMjEuODgxMUg2LjY2ODA5TDIuMDMzMDggMjEuOTE0MlYxNC4xMDA1TDE0LjE4NjMgMkgyMC45MDI4TDYuMzYwMzUgMTYuMzA1OUgxMy41MDM1QzE0LjQwMzMgMTYuMzA1OSAxNS4xNjQ2IDE2LjAxMDQgMTUuNzQ5MyAxNS40MDYxQzE2LjM1MzYgMTQuNzgyMSAxNi43Mjc1IDE0LjAwMTIgMTYuNzI3NSAxMy4wNjIzQzE2LjcyNzUgMTIuMjgxNCAxNi4xNDg5IDExLjQwODYgMTUuNjYzNSAxMC44NjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
                59
            );

            add_submenu_page(
                'zoloblocks',
                __('Dashboard', 'zoloblocks'),
                __('Dashboard', 'zoloblocks'),
                'manage_options',
                'zoloblocks',
                [$this, 'zolo_blocks_page']
            );
            add_submenu_page(
                'zoloblocks',
                __('Blocks', 'zoloblocks'),
                __('Blocks', 'zoloblocks'),
                'manage_options',
                'zolo-blocks',
                [$this, 'tab_redirect']
            );

            add_submenu_page(
                'zoloblocks',
                __('Extensions', 'zoloblocks'),
                __('Extensions', 'zoloblocks'),
                'manage_options',
                'zolo-extensions',
                [$this, 'tab_redirect']
            );
            add_submenu_page(
                'zoloblocks',
                __('API Settings', 'zoloblocks'),
                __('API Settings', 'zoloblocks'),
                'manage_options',
                'zolo-api-settings',
                [$this, 'tab_redirect']
            );
            add_submenu_page(
                'zoloblocks',
                __('Settings', 'zoloblocks'),
                __('Settings', 'zoloblocks'),
                'manage_options',
                'zolo-settings',
                [$this, 'tab_redirect']
            );

            add_submenu_page(
                'zoloblocks',
                __('Popup Builder', 'zoloblocks'),
                __('Popup Builder', 'zoloblocks'),
                'manage_options',
                'edit.php?post_type=zolo-popup'
            );

            add_submenu_page(
                'zoloblocks',
                __('Form Entries', 'zoloblocks'),
                __('Form Entries', 'zoloblocks'),
                'manage_options',
                'edit.php?post_type=zolo_form_entries'
            );
        }

        /**
         * Renders the ZoloBlocks page.
         *
         * This method is responsible for rendering the ZoloBlocks page in the WordPress dashboard.
         * It is called when the `zolo_blocks_page` action is triggered.
         *
         * @since 1.0.0
         */
        public function zolo_blocks_page() {
?>
            <div id="zolo-dashboard"></div>
<?php
        }
    }
}
