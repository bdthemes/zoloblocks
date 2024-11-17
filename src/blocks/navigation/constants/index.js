/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'navigation';

export const NAV_MENU_ALIGNMENT = 'navAlignment';
export const NAV_MENU_WRAP_BG = 'navWrapBg';
export const NAV_MENU_WRAP_BORDER = 'navWrapBorder';
export const NAV_MENU_WRAP_BORDER_RADIUS = 'navWrapBorderRadius';
export const NAV_MENU_WRAP_PADDING = 'navWrapPadding';
export const NAV_MENU_WRAP_BOX_SHADOW = 'navWrapBoxShadow';

export const NAV_MENU_ITEM_BG = 'navItemBg';
export const NAV_MENU_ITEM_BORDER = 'navItemBorder';
export const NAV_MENU_ITEM_BORDER_RADIUS = 'navItemBorderRadius';
export const NAV_MENU_ITEM_PADDING = 'navItemPadding';
export const NAV_MENU_ITEM_BOX_SHADOW = 'navItemBoxShadow';

export const NAV_MENU_ITEM_HOVER_BG = 'navItemHoverBg';
export const NAV_MENU_ITEM_ACTIVE_BG = 'navItemHoverBg';
export const NAV_MENU_ITEM_GAP = 'navItemGap';

export const MOBILE_MENU_WIDTH = 'mobileMenuWidth';
export const MOBILE_MENU_WRAP_BG = 'mobileMenuWrapBg';
export const MOBILE_MENU_WRAP_BORDER = 'mobileMenuWrapBorder';
export const MOBILE_MENU_WRAP_BORDER_RADIUS = 'mobileMenuWrapBorderRadius';
export const MOBILE_MENU_WRAP_PADDING = 'mobileMenuWrapPadding';
export const MOBILE_MENU_WRAP_BOX_SHADOW = 'mobileMenuWrapBoxShadow';

export const MB_LOGO_WIDTH = 'mbLogoWidth';
export const MB_LOGO_HEIGHT = 'mbLogoHeight';
export const MB_LOGO_MARGIN = 'mbLogoMargin';
export const MB_LOGO_PADDING = 'mbLogoPadding';

export const HUMBURGER_MENU_ICON_SIZE = 'humburgerMenuIconSize';
export const HUMBURGER_MENU_BG = 'humburgerMenuBg';
export const HUMBURGER_MENU_BORDER = 'humburgerMenuBorder';
export const HUMBURGER_MENU_BORDER_RADIUS = 'humburgerMenuBorderRadius';
export const HUMBURGER_MENU_PADDING = 'humburgerMenuPadding';
export const HUMBURGER_MENU_MARGIN = 'humburgerMenuMargin';
export const HUMBURGER_MENU_BOX_SHADOW = 'humburgerMenuBoxShadow';
export const HUMBURGER_MENU_HOVER_BG = 'humburgerMenuHoverBg';

export const CLOSE_ICON_SIZE = 'closeIconSize';
export const CLOSE_ICON_BG = 'closeIconBg';
export const CLOSE_ICON_BORDER = 'closeIconBorder';
export const CLOSE_ICON_BORDER_RADIUS = 'closeIconBorderRadius';
export const CLOSE_ICON_PADDING = 'closeIconPadding';
export const CLOSE_ICON_MARGIN = 'closeIconMargin';
export const CLOSE_ICON_BOX_SHADOW = 'closeIconBoxShadow';
export const CLOSE_ICON_HOVER_BG = 'closeIconHoverBg';

// tab states
export const TAB_STATES = [
    {
        value: 'normal',
        label: __('Normal', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Hover', 'zoloblocks'),
    },
    {
        value: 'active',
        label: __('Active', 'zoloblocks'),
    },
];

// tab states
export const TAB_MOBILE = [
    {
        value: 'normal',
        label: __('Logo', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Humburger', 'zoloblocks'),
    },
    {
        value: 'active',
        label: __('Close', 'zoloblocks'),
    },
];

// Vertical direction
export const BREAKPOINT_OPTIONS = [
    {
        value: 'desktop',
        label: __('Desktop', 'zoloblocks'),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
                <path
                    d="M20.5909 3H3.40909C2.63087 3 2 3.63087 2 4.40909V15.1909C2 15.9691 2.63087 16.6 3.40909 16.6H20.5909C21.3691 16.6 22 15.9691 22 15.1909V4.40909C22 3.63087 21.3691 3 20.5909 3Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M9.85461 17.0366V20.6275" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1727 17.0366V20.6275" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.28186 21.1819H16.7182" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        value: 'tablet',
        label: __('Tablet', 'zoloblocks'),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
                <path
                    d="M18.4273 2H5.93636C4.86694 2 4 2.86694 4 3.93636V20.0636C4 21.1331 4.86694 22 5.93636 22H18.4273C19.4967 22 20.3636 21.1331 20.3636 20.0636V3.93636C20.3636 2.86694 19.4967 2 18.4273 2Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.1818 19.6273C12.8646 19.6273 13.4182 19.0737 13.4182 18.3909C13.4182 17.7081 12.8646 17.1545 12.1818 17.1545C11.499 17.1545 10.9454 17.7081 10.9454 18.3909C10.9454 19.0737 11.499 19.6273 12.1818 19.6273Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                />
                <path d="M19.9819 14.791H4.39099" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },

    {
        value: 'mobile',
        label: __('Mobile', 'zoloblocks'),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
                <path
                    d="M16.7273 2H7.86364C6.83438 2 6 2.83438 6 3.86364V20.1364C6 21.1656 6.83438 22 7.86364 22H16.7273C17.7565 22 18.5909 21.1656 18.5909 20.1364V3.86364C18.5909 2.83438 17.7565 2 16.7273 2Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.3 19.6273C12.9828 19.6273 13.5363 19.0737 13.5363 18.3909C13.5363 17.7081 12.9828 17.1545 12.3 17.1545C11.6171 17.1545 11.0636 17.7081 11.0636 18.3909C11.0636 19.0737 11.6171 19.6273 12.3 19.6273Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                />
            </svg>
        ),
    },
];
