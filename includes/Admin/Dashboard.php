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
                __('ZoloBlocks', 'zoloblocks'),
                __('ZoloBlocks', 'zoloblocks'),
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
                    $admin_url = admin_url('edit.php');
                    $form_entries_image_url = ZOLO_ADMIN_URL . 'includes/Admin/images/form-data.png';
                    $post_type_url = add_query_arg('post_type', 'zolo_form_entries', $admin_url);
                    $check_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>';
                    if (!class_exists('Zolo_Blocks_Pro')) {
                        $content = <<<EOF
                             <style>
                                .zolo-form-entries-upgrade-info {
                                    position: relative;
                                    height: 100vh;
                                }
                                .zolo-form-entries-upgrade-info:after {
                                    position: absolute;
                                    content: '';
                                    background: #ffffff00;
                                    left: -20px;
                                    right: 0;
                                    top: -20px;
                                    bottom: 0;
                                    box-sizing: border-box;
                                    backdrop-filter: blur(5px);
                                }
                                .zolo-form-upgrade-modal {
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    background: #fff;
                                    border-radius: 10px;
                                    z-index: 99;
                                    text-align: center;
                                    max-width: 600px;
                                    width: 100%;
                                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                                    box-sizing: border-box;
                                    border-radius: 6px;
                                    overflow: hidden;
                                }
                                .zolo-entries-top-notice {
                                    padding: 20px;
                                    background: #fff9e9;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 10px;
                                }

                                .zolo-entries-top-notice svg {
                                    width: 20px;
                                    height: 20px;
                                    display: block;
                                    color: #ffc200;
                                }

                                .zolo-entries-top-notice span {
                                    font-size: 14px;
                                    font-weight: 500;
                                    color:#35383c
                                }

                                .zolo-form-body-content {
                                    padding: 40px;
                                }
                                .zolo-form-body-content h2 {
                                    margin: 0 0 20px;
                                    font-size: 24px;
                                    line-height: 1.3;
                                }
                                .zolo-form-body-content p {
                                    margin: 0;
                                    color: #717274;
                                    font-size: 15px;
                                }
                                .zolo-forms-features {
                                    display: flex;
                                    text-align: left;
                                    justify-content: space-between;
                                    gap: 30px;
                                    margin-top: 40px;
                                }
                                .zolo-forms-features ul {
                                    list-style: none;
                                    padding: 0;
                                    margin: 0;
                                }
                                .zolo-forms-features ul li {
                                   display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    margin-bottom: 12px;
                                    font-size: 14px;
                                    color: #717274;
                                }
                                .zolo-forms-features ul li:last-child {
                                    margin-bottom: 0;
                                }
                                .zolo-forms-features ul li svg {
                                    color: #17b247;
                                    width: 22px;
                                    height: 22px;
                                    display: block;
                                    background: #36b24614;
                                    border-radius: 50%;
                                    padding: 2px;
                                }
                                .zolo-form-upgrade-btns {
                                    padding: 20px;
                                    background: #f8f8f8;
                                }
                                .zolo-form-upgrade-btn {
                                    display: inline-block;
                                    padding: 16px 20px;
                                    background: #3f8efc;
                                    color: #fff;
                                    border-radius: 6px;
                                    text-decoration: none;
                                    font-size: 14px;
                                    font-weight: 600;
                                    transition: all 0.3s;
                                }
                                .zolo-form-upgrade-btn:hover {
                                    background: #2d81f7;
                                    color: #fff;
                                }
                            </style>
                            <div class="zolo-form-entries-upgrade-info" style="background: url({$form_entries_image_url}) no-repeat center center;">
                                    <div class="zolo-form-upgrade-modal">
                                        <div class="zolo-entries-top-notice">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
                                            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                            </svg>
                                           <span>Upgrade to ZoloBlocks Pro to view all form entries</span>
                                        </div>
                                        <div class="zolo-form-body-content">
                                        <h2>View and Manage Your Form Entries inside WordPress</h2>
                                        <p>Upgrade to ZoloBlocks Pro to view all form entries and manage them inside WordPress. You can also export form entries to CSV and Excel files.</p>



                                        <div class="zolo-forms-features">
                                            <ul class="left">
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                            </ul>
                                             <ul class="right">
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                                <li>
                                                    {$check_icon}
                                                     View Entries in Dashboard
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div class="zolo-form-upgrade-btns">
                                         <a href="https://zoloblocks.com/pricing/" class="zolo-form-upgrade-btn" target="_blank" rel="noopener noreferrer">
                                            Upgrade to ZoloBlocks Pro
                                        </a>
                                        </div>
                                    </div>
                              </div>
                        EOF;
                        echo wp_kses($content, ZoloHelpers::wp_kses_allowed_svg($content));
                    } else {
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
