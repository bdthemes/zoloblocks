<?php

namespace Zolo\Admin;

use Zolo\Helpers\ZoloHelpers;
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
            add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        }

        /**
         * Enqueues the Zolo dashboard scripts.
         */

        public function enqueue_scripts() {
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
            if (isset($_GET['page']) && $_GET['page'] === 'zoloblocks') {
                remove_all_actions('admin_notices');
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
                __('Zolo Blocks', 'zoloblocks'),
                __('Zolo Blocks', 'zoloblocks'),
                'manage_options',
                'zoloblocks',
                [$this, 'zolo_blocks_page'],
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4zNTc5IDJMMi4wMzkxOCAxMC40MTA2TDIgMkgxMC4zNTc5Wk0xNS42NjM1IDEwLjg2M0wxOC45NTI1IDcuNTczOTdDMjAuNzcwNCA4Ljk1OTIzIDIxLjk5ODggMTEuMDA3NyAyMS45OTg4IDEzLjQ0MzVDMjEuOTk4OCAxNS43NDggMjEuMTc4NyAxOC4xNzE2IDE5LjU1NjkgMTkuNjU0OUMxNy44OTU4IDIxLjEzOTQgMTUuODk4OCAyMS44ODExIDEzLjQ5NjEgMjEuODgxMUg2LjY2ODA5TDIuMDMzMDggMjEuOTE0MlYxNC4xMDA1TDE0LjE4NjMgMkgyMC45MDI4TDYuMzYwMzUgMTYuMzA1OUgxMy41MDM1QzE0LjQwMzMgMTYuMzA1OSAxNS4xNjQ2IDE2LjAxMDQgMTUuNzQ5MyAxNS40MDYxQzE2LjM1MzYgMTQuNzgyMSAxNi43Mjc1IDE0LjAwMTIgMTYuNzI3NSAxMy4wNjIzQzE2LjcyNzUgMTIuMjgxNCAxNi4xNDg5IDExLjQwODYgMTUuNjYzNSAxMC44NjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
                25
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
                function () {
                    echo '<script>document.location.href = "/wp-admin/admin.php?page=zoloblocks#blocks";</script>';
                }
            );

            add_submenu_page(
                'zoloblocks',
                __('Extensions', 'zoloblocks'),
                __('Extensions', 'zoloblocks'),
                'manage_options',
                'zolo-extensions',
                function () {
                    echo '<script>document.location.href = "/wp-admin/admin.php?page=zoloblocks#extensions";</script>';
                }
            );
            add_submenu_page(
                'zoloblocks',
                __('API Settings', 'zoloblocks'),
                __('API Settings', 'zoloblocks'),
                'manage_options',
                'zolo-api-settings',
                function () {
                    echo '<script>document.location.href = "/wp-admin/admin.php?page=zoloblocks#apiSettings";</script>';
                }
            );
            add_submenu_page(
                'zoloblocks',
                __('Settings', 'zoloblocks'),
                __('Settings', 'zoloblocks'),
                'manage_options',
                'zolo-settings',
                function () {
                    echo '<script>document.location.href = "/wp-admin/admin.php?page=zoloblocks#settings";</script>';
                }
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
                'edit.php?post_type=zolo_form_entries',
                function () {
                    $admin_url = admin_url( 'edit.php' );
                    $post_type_url = add_query_arg('post_type', 'zolo_form_entries', $admin_url );
                    if (!class_exists('Zolo_Blocks_Pro')) {
                        $content = <<<EOF
                            <style>
                                .wp-list-table {
                                    border-collapse: collapse;
                                }
                                .wp-list-table td {
                                    border: 1px solid #ddd;
                                    padding: 8px;
                                }
                                .wp-list-table th {
                                    background-color: #4CAF50;
                                    color: white;
                                }
                            </style>
                            <table class="wp-list-table widefat fixed striped pages">
                                <thead>
                                    <tr>
                                        <th>Form Name</th>
                                        <th>Form Type</th>
                                        <th>Entries</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>My Form</td>
                                        <td>Contact Form</td>
                                        <td>3</td>
                                        <td>2022-07-01 12:00:00</td>
                                    </tr>
                                    <tr>
                                        <td>My Form</td>
                                        <td>Contact Form</td>
                                        <td>3</td>
                                        <td>2022-07-01 12:00:00</td>
                                    </tr>
                                    <tr>
                                        <td>My Form</td>
                                        <td>Contact Form</td>
                                        <td>3</td>
                                        <td>2022-07-01 12:00:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        EOF;
                        echo wp_kses($content, ZoloHelpers::wp_kses_allowed_svg($content));
                    }else{
                        echo '<script>document.location.href = "' . $post_type_url . '";</script>';
                    }
                }
            );

            if (!class_exists('Zolo_Blocks_Pro')) {
                add_submenu_page(
                    'zoloblocks',
                    __('Upgrade', 'zoloblocks'),
                    __('Upgrade', 'zoloblocks'),
                    'manage_options',
                    'zolo-pro',
                    function () {
                        echo '<script>document.location.href = "https://zoloblocks.com/pricing/";</script>';
                    }
                );
            }
        }

        /**
         * Renders the Zolo Blocks page.
         *
         * This method is responsible for rendering the Zolo Blocks page in the WordPress dashboard.
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
