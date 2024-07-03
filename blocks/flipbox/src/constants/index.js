/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'flipbox';

export const FLIPBLOX_SIDE = [
    { label: __('Front', 'zoloblocks'), value: 'front' },
    { label: __('Back', 'zoloblocks'), value: 'back' },
];

export const FLIPBOX_ICON_OPTIONS = [
    {
        label: __('Image', 'zoloblocks'),
        value: 'image',
    },
    {
        label: __('Icon', 'zoloblocks'),
        value: 'icon',
    },
];

export const LINK_TYPE = [
    { label: __('Box', 'zoloblocks'), value: 'box' },
    { label: __('Title', 'zoloblocks'), value: 'title' },
    { label: __('Button', 'zoloblocks'), value: 'button' },
];

export const FLIP_EFFECT = [
    { label: __('Flip Left', 'zoloblocks'), value: '3' },
    { label: __('Flip Right', 'zoloblocks'), value: '1' },
    { label: __('Flip Top', 'zoloblocks'), value: '2' },
    { label: __('Flip Bottom', 'zoloblocks'), value: '4' },
    { label: __('Slide Left', 'zoloblocks'), value: '7' },
    { label: __('Slide Right', 'zoloblocks'), value: '5' },
    { label: __('Slide Top', 'zoloblocks'), value: '8' },
    { label: __('Slide Bottom', 'zoloblocks'), value: '6' },
    { label: __('Push Top', 'zoloblocks'), value: '9' },
    { label: __('Push Bottom', 'zoloblocks'), value: '10' },
    { label: __('Push Left', 'zoloblocks'), value: '11' },
    { label: __('Push Right', 'zoloblocks'), value: '12' },
    { label: __('Top to Bottom Angle', 'zoloblocks'), value: '13' },
    { label: __('Bottom to Top Angle', 'zoloblocks'), value: '14' },
    { label: __('Zoom', 'zoloblocks'), value: '15' },
];

export const FLIP_EASING_TYPE = [
    { label: __('Ease Out', 'zoloblocks'), value: 'ease-out' },
    { label: __('Ease In Out', 'zoloblocks'), value: 'ease-in-out' },
    { label: __('Linear', 'zoloblocks'), value: 'linear' },
    { label: __('Custom', 'zoloblocks'), value: 'custom' },
];

export const FLIP_TRIGGER_TYPE = [
    { label: __('Hover', 'zoloblocks'), value: 'hover' },
    { label: __('Click', 'zoloblocks'), value: 'click' },
];

//FRONT ITEMS
export const FLIPBOX_HEIGHT = 'FlipboxHeight';
export const FLIPBOX_BORDER_RADIUS = 'FrontItemsBorderRadius';
export const FLIPBOX_ITEMS_PADDING = 'FlipboxItemsPadding';
export const FRONT_ITEMS_BORDER = 'FrontItemsBorder';
export const FRONT_ITEMS_BG = 'FrontItemsBg';
export const FRONT_ITEMS_ALIGNMENT = 'FrontItemsAlignment';
export const FRONT_ITEMS_VERTICAL_ALIGNMENT = 'FrontItemsVerticalAlignment';


//BACK ITEMS
export const BACK_ITEMS_BORDER = 'BackItemsBorder';
export const BACK_ITEMS_BG = 'BackItemsBg';
export const BACK_ITEMS_PADDING = 'BackItemsPadding';
export const BACK_ITEMS_ALIGNMENT = 'BackItemsAlignment';
export const BACK_ITEMS_VERTICAL_ALIGNMENT = 'BackItemsVerticalAlignment';


// FRONT ICON
export const FRONT_ICON_SIZE = 'FrontIconSize';
export const FRONT_ICON_BORDER = 'FrontIconBorder';
export const FRONT_ICON_BORDER_RADIUS = 'FrontIconBorderRadius';
export const FRONT_ICON_BG = 'FrontIconBg';
export const FRONT_ICON_PADDING = 'FrontIconPadding';
export const FRONT_ICON_HBG = 'FrontIconHoverBg';
export const FRONT_ICON_MARGIN = 'FrontIconMargin';
export const FRONT_TITLE_MARGIN = 'FrontTitleMargin';

// BACK ICON
export const BACK_ICON_SIZE = 'BackIconSize';
export const BACK_ICON_BORDER = 'BackIconBorder';
export const BACK_ICON_BORDER_RADIUS = 'BackIconBorderRadius';
export const BACK_ICON_BG = 'BackIconBg';
export const BACK_ICON_PADDING = 'BackIconPadding';
export const BACK_ICON_HBG = 'BackIconHoverBg';
export const BACK_ICON_MARGIN = 'BackIconMargin';
export const BACK_TITLE_MARGIN = 'BackTitleMargin';

// BACK LINK BUTTON
export const BACK_LINK_BORDER = 'BackLinkBorder';
export const BACK_LINK_BORDER_RADIUS = 'BackLinkBorderRadius';
export const BACK_LINK_BG = 'BackLinkBg';
export const BACK_LINK_HBG = 'BackLinkHBg';
export const BACK_LINK_PADDING = 'BackLinkPadding';

// VERTICAL ALIGNMENT

export const FLIPBOX_VERTICAL_ALIGNMENT = [
    {
        label: 'Flex Start',
        value: 'flex-start',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M7.39385 7.15051L16.5189 7.15051"
                    stroke="#4D4D4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.5599 9.46875L7.42934 9.46875"
                    stroke="#4D4D4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.5599 14.4974L7.42934 14.4974"
                    stroke="#4D4D4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Flex End',
        value: 'flex-end',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M16.606 16.8495L7.48088 16.8495"
                    stroke="#4D4D4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Between',
        value: 'space-between',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 7.1615L7.48088 7.1615" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M16.606 16.8386L7.48088 16.8386"
                    stroke="#4D4D4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];
