/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ZoloDashicon } from '../../../controls/core-controls';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Style 3', 'zoloblocks'), value: 'style-3' },
];

export const ICON_BOX_PRESET_THREE_DIRECTION = [
    {
        label: 'Image Top',
        value: '',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.46997 15.3799H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.46997 18.95H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.46997 22.52H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M10.4399 5.27C10.7199 5.27 10.9499 5.04 10.9499 4.76C10.9499 4.48 10.7199 4.25 10.4399 4.25C10.1599 4.25 9.92993 4.48 9.92993 4.76C9.92993 5.04 10.1599 5.27 10.4399 5.27Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.82007 11.1901L14.1001 5.92007C14.3301 5.70007 14.6301 5.57007 14.9501 5.57007C15.2701 5.57007 15.5701 5.70007 15.8001 5.92007L19.3401 9.43007"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.69 2H5.81C5.36265 2 5 2.36265 5 2.81V10.63C5 11.0774 5.36265 11.44 5.81 11.44H18.69C19.1374 11.44 19.5 11.0774 19.5 10.63V2.81C19.5 2.36265 19.1374 2 18.69 2Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        label: 'Image Bottom (Pro)',
        value: 'zolo-directions-column-reverse',
        isPro: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.46997 2H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.46997 5.57007H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.46997 9.12988H19.03" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M10.4399 16.3401C10.7199 16.3401 10.9499 16.1101 10.9499 15.8301C10.9499 15.5501 10.7199 15.3201 10.4399 15.3201C10.1599 15.3201 9.92993 15.5501 9.92993 15.8301C9.92993 16.1101 10.1599 16.3401 10.4399 16.3401Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.82007 22.2599L14.1001 16.9899C14.3301 16.7699 14.6301 16.6399 14.9501 16.6399C15.2701 16.6399 15.5701 16.7699 15.8001 16.9899L19.3401 20.4999"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.69 13.0701H5.81C5.36265 13.0701 5 13.4327 5 13.8801V21.7001C5 22.1474 5.36265 22.5101 5.81 22.5101H18.69C19.1374 22.5101 19.5 22.1474 19.5 21.7001V13.8801C19.5 13.4327 19.1374 13.0701 18.69 13.0701Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        label: 'Image Left (Pro)',
        value: 'zolo-directions-row',
        isPro: true,
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.73 8.32h6.22M15.73 12.41h6.22M15.73 16.5h6.22M6.53 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM12.05 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.23 7H3.99a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        label: 'Image Right (Pro)',
        value: 'zolo-directions-row-reverse',
        isPro: true,
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 8.32h6.22M3 12.41h6.22M3 16.5h6.22M16.26 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM21.78 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.96 7h-7.24a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
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
    },
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
    },
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.23 7H3.99a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.96 7h-7.24a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
    { label: __('Left', 'zoloblocks'), value: 'top__left' },
    { label: __('Right', 'zoloblocks'), value: 'top__right' },
];

// export const RIBBON_ALIGN = [
//     { label: __(<ZoloDashicon icon={'editor-alignleft'} />), value: 'left' },
//     { label: __(<ZoloDashicon icon={'editor-aligncenter'} />), value: 'center' },
//     { label: __(<ZoloDashicon icon={'editor-alignright'} />), value: 'right' },
//     { label: __(<ZoloDashicon icon={'editor-justify'} />), value: 'justify' },
// ];

//animation

export const ICON_ANIMATION_BG = 'iconAnimationBg';
export const ICON_ANIMATION_SIZE = 'iconAnimationSize';
export const ICON_ANIMATION_RADIUS = 'iconAnimationRadius';
export const ICON_ANIMATION_THICKNESS = 'iconAnimationThickness';

// RIBON
export const RIBBON_X_POSITION = 'ribbonXPosition';
export const RIBBON_Y_POSITION = 'ribbonYPosition';
