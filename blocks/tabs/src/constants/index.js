/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'tabs';

// layouts
export const LAYOUTS = [
    {
        value: 'horizontal',
        label: __('Horizontal', 'zoloblocks'),
    },
    {
        value: 'vertical',
        label: __('Vertical', 'zoloblocks'),
    },
];

// Vertical direction
export const VERTICAL_DIRECTIONS = [
    {
        value: 'vertical-left',
        label: __('Left', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        value: 'vertical-right',
        label: __('Right', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

// Content styles
export const CONTENT_STYLES = [
    {
        value: 'content-style-2',
        label: __('Style 1', 'zoloblocks'),
    },
    {
        value: 'content-style-two',
        label: __('Style 2', 'zoloblocks'),
    },
];

// Content directions
export const CONTENT_DIRECTIONS = [
    {
        value: 'content-style-1',
        label: __('Left', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        value: 'content-style-3',
        label: __('Right', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

// Tab item widths
export const TAB_ITEM_WIDTHS = [
    {
        value: 'tiw_auto',
        label: __('Auto', 'zoloblocks'),
    },
    {
        value: 'tiw_justify',
        label: __('Justify', 'zoloblocks'),
    },
];

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

// Indicator styles
export const INDICATOR_STYLES = [
    {
        value: 'animation-style-1',
        label: __('Style 1', 'zoloblocks'),
    },
    {
        value: 'animation-style-2',
        label: __('Style 2', 'zoloblocks'),
    },
    {
        value: 'animation-style-3',
        label: __('Style 3', 'zoloblocks'),
    },
];

// Block Settings
export const NAV_ITEMS_ALIGN = 'navItemsAlign';
export const NAV_CONTENT_ALIGN = 'navContentAlign';
export const NAV_ICON_ALIGN = 'navIconAlign';
export const NAV_SPACING = 'navSpacing';
export const CONTENT_SPACING = 'contentSpacing';

// tabs container
export const TABS_CWIDTH = 'tabsCWidth';

// tabs
export const TAB_NORMAL_BGCOLOR = 'tabNormalBgColor';
export const TAB_HOVER_BGCOLOR = 'tabHoverBgColor';
export const TAB_ACTIVE_BGCOLOR = 'tabActiveBgColor';
export const TAB_ITEM_PADDING = 'tabItemPadding';
export const TAB_ITEM_MARGIN = 'tabItemMargin';
export const TAB_ITEM_RADIUS = 'tabItemBorderRadius';
export const TAB_ITEM_BORDER = 'tabItemBorder';
export const TAB_ITEM_BSHADOW = 'tabItemBShadow';
export const TAB_ITEM_HBSHADOW = 'tabItemHBShadow';
export const TAB_ITEM_ABSHADOW = 'tabItemABShadow';

// tab Wrap
export const TAB_WRAP_BGCOLOR = 'tabWrapBgColor';
export const TAB_WRAP_BORDER = 'tabWrapBorder';
export const TAB_WRAP_RADIUS = 'tabWrapBorderRadius';
export const TAB_WRAP_PADDING = 'tabWrapPadding';
export const TAB_WRAP_BSHADOW = 'tabWrapBShadow';


// title
export const TITLE_MARGIN = 'tabTitleMargin';
export const ACTIVE_HINT_HEIGHT = 'activeHintHeight';

// desc
export const DESC_MARGIN = 'tabDescMargin';
// icon
export const ICON_SIZE = 'iconSize';
export const ICON_BORDER = 'iconBorder';
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
export const ICON_PADDING = 'iconPadding';
export const ICON_MARGIN = 'iconMargin';
export const ICON_BG = 'iconBg';
export const ICON_HBG = 'iconHoverBg';
export const ICON_ABG = 'iconActiveBg';
