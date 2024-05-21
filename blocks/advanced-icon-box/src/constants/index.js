/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';


// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Style 3', 'zoloblocks'), value: 'style-3' },
];


// animation types 
export const ANIMATION_TYPES = [
    {
        label: __('Select Animation', 'zoloblocks'),
        value: '',
    },
    {
        label: __('Style 1', 'zoloblocks'),
        value: 'style-1',
    },
    {
        label: __('Style 2', 'zoloblocks'),
        value: 'style-2',
    },
    {
        label: __('Style 3', 'zoloblocks'),
        value: 'style-3',
    }
];

export const ANIMATION_POSITIONS_ONE = [
    {
        label: __('Top Left', 'zoloblocks'),
        value: 'top-left',
    },
    {
        label: __('Top Right', 'zoloblocks'),
        value: 'top-right',
    },
    {
        label: __('Bottom Left', 'zoloblocks'),
        value: 'bottom-left',
    },
    {
        label: __('Bottom Right', 'zoloblocks'),
        value: 'bottom-right',
    },
];

export const ANIMATION_POSITIONS_TWO = [
    {
        label: __('Top', 'zoloblocks'),
        value: 'top',
    },
    {
        label: __('Bottom', 'zoloblocks'),
        value: 'bottom',
    },
    {
        label: __('Left', 'zoloblocks'),
        value: 'left',
    },
    {
        label: __('Right', 'zoloblocks'),
        value: 'right',
    }
];

export const PRESETS_ALIGNMENT = [
    {
        label: 'Left',
        value: 'iconbox-align-left',
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.73 8.32h6.22M15.73 12.41h6.22M15.73 16.5h6.22M6.53 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM12.05 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.23 7H3.99a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'iconbox-align-right',
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 8.32h6.22M3 12.41h6.22M3 16.5h6.22M16.26 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM21.78 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M20.96 7h-7.24a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        ),
    },
];

// content alignment
export const CONTENT_ALIGNMENT = 'contentAlignment';

// Icon
export const ICON_PADDING = 'iconPadding';
export const ICON_MARGIN = 'iconMargin';
export const ICON_BOX_ALIGNMENT = 'iconBoxAlignment';
export const ICON_BORDER = 'iconBorder';
export const ICON_BOX_SHADOW = 'iconBoxShadow';
export const ICON_HOVER_BOX_SHADOW = 'iconHoverBoxShadow';
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
export const ICON_SIZE = 'iconSize';
export const ICON_TEXT_SPACING = 'iconTextSpacing';
export const ICON_WRAPPER_BG_COLOR = 'iconWrapperBgColor';

// Button
export const BUTTON_BG_COLOR = 'buttonBgColor';
export const BUTTON_BG_HOVER_COLOR = 'buttonBgHoverColor';
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
export const BUTTON_ICON_SIZE = 'buttonIconSize';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_MARGIN = 'buttonMargin';
export const BUTTON_PADDING = 'buttonPadding';

// title
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

// description
export const DESCRIPTION_MARGIN = 'descMargin';

// image
export const ICON_IMAGE_SIZE = 'iconImageSize';
export const IMAGE_BORDER = 'imageBorder';
export const ICON_IMAGE_BORDER_RADIUS = 'iconImageBorderRadius';


// item
export const ITEM_BG = 'itemBg';
export const ITEM_HOVER_BG = 'itemHoverBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BRADIUS = 'itemBorderRadius';
export const ITEM_PADDING = 'itemPadding';
export const ITEM_MARGIN = 'itemMargin';
export const ITEM_BOX_SHADOW = 'itemBoxShadow';
export const ITEM_HBOX_SHADOW = 'itemHoverShadow';


// ribbon style
export const RIBBON_MARGIN = 'ribbonMargin';
export const RIBBON_PADDING = 'ribbonPadding';
export const RIBBON_BORDER = 'ribbonBorder';
export const RIBBON_RADIUS = 'ribbonRadius';
export const RIBBON_BG = 'ribbonBg';
export const RIBBON_POSITIONS = [
    { label: __('Top Left', 'zoloblocks'), value: 'top__left' },
    { label: __('Top Right', 'zoloblocks'), value: 'top__right' },
];

// export const RIBBON_ALIGN = [
//     { label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
//     { label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
//     { label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
//     { label: __(<Dashicon icon={'editor-justify'} />), value: 'justify' },
// ];