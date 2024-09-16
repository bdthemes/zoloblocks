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
                __('Popup Builder', 'zoloblocks'),
                __('Popup Builder', 'zoloblocks'),
                'manage_options',
                'edit.php?post_type=zolo-popup'
            );
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
