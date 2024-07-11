<?php

/**
 * Zolo Blocks Admin Page
 */

namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

class Dashboard {
    use SingletonTrait;

    public function __construct() {
        add_action('admin_menu', [$this, 'zolo_admin_menu']);
    }

    /**
     * Zolo Blocks Admin Menu
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
     * Zolo Blocks Admin Page
     */
    public function zolo_blocks_page() {
?>
        <div id="zolo-dashboard"></div>
<?php
    }
}

Dashboard::getInstance();
