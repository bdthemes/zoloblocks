/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'navmenu';

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
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.64645 7.35355C4.84171 7.15829 5.15829 7.15829 5.35355 7.35355L7.14645 9.14645C7.46143 9.46143 7.23835 10 6.79289 10H3.20711C2.76165 10 2.53857 9.46143 2.85355 9.14645L4.64645 7.35355Z"
                    fill="#1E1E1E"
                />
                <rect x="0.5" y="1.5" width={9} height={6} rx={1} stroke="#1E1E1E" />
            </svg>
        ),
    },
    {
        value: 'tablet',
        label: __('Tablet', 'zoloblocks'),
        icon: (
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="0.5" width={7} height={9} rx={1} stroke="#1E1E1E" />
                <circle cx={5} cy={8} r={1} fill="#1E1E1E" />
            </svg>
        ),
    },

    {
        value: 'mobile',
        label: __('Mobile', 'zoloblocks'),
        icon: (
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="0.5" width={5} height={9} rx={1} stroke="#1E1E1E" />
                <path
                    d="M7 1.08412C6.9572 1.59704 6.52662 2 6.00175 2H3.99825C3.47338 2 3.0428 1.59704 3 1.08412C3.15567 1.02963 3.32306 1 3.49738 1H6.50262C6.67694 1 6.84433 1.02963 7 1.08412Z"
                    fill="#1E1E1E"
                />
            </svg>
        ),
    },
];
