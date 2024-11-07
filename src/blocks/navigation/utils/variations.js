/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { plus } from '@wordpress/icons';

const variations = [
    {
        name: 'with-megamenu',
        title: __('Items with a Megamenu', 'zoloblocks'),
        icon: plus,
        innerBlocks: [
            ["zolo/navigation-item", {
                label: 'Home',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'About',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'Contact',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'Megamenu',
                url: '#',
                addSubmenu: true,
                submenuType: 'megamenu',
            },
                [
                    ["zolo/megamenu", {},
                        [
                            ["zolo/container", {}],
                        ]
                    ]
                ]
            ],
        ],
        scope: ['block'],
    },
    {
        name: 'with-submenu',
        title: __('Items with a Dropdown', 'zoloblocks'),
        icon: plus,
        innerBlocks: [
            ["zolo/navigation-item", {
                label: 'Home',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'About',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'Contact',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'Drop Down',
                url: '#',
                addSubmenu: true,
                submenuType: 'dropdown',
            },
                [
                    ["zolo/navigation-submenu", {},
                        [
                            ["zolo/navigation-item", {
                                label: 'Submenu Item #1',
                                url: '#',
                            }],
                            ["zolo/navigation-item", {
                                label: 'Submenu Item #2',
                                url: '#',
                            }],
                            ["zolo/navigation-item", {
                                label: 'Submenu Item #3',
                                url: '#',
                            }],
                        ]
                    ]
                ]
            ],
        ],
        scope: ['block'],
    },
    {
        name: 'items-only',
        title: __('Only Items', 'zoloblocks'),
        icon: plus,
        innerBlocks: [
            ["zolo/navigation-item", {
                label: 'Home',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'About',
                url: '#',
            }],
            ["zolo/navigation-item", {
                label: 'Contact',
                url: '#',
            }],
        ],
        scope: ['block'],
    },
];

export default variations;