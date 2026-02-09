/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'zolo-counter';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zoloblocks'), value: '' },
    { label: __('Preset 2', 'zoloblocks'), value: 'style-1' },
    { label: __('Preset 3 (Pro)', 'zoloblocks'), value: 'style-3', disabled: true },
    { label: __('Preset 4 (Pro)', 'zoloblocks'), value: 'style-4', disabled: true },
];

export const PRESETS_ALIGNMENT = [
    {
        label: 'Left',
        value: 'counter-align-left',
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
        value: 'counter-align-right',
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

export const ZOLO_CONTENT_LAYOUT = [
    {
        label: 'Block',
        value: '',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.391 6.72949L16.391 17.1923"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.3909 17.1923L18.606 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.391 17.1923L14.176 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65393 6.72949L7.65393 17.1923"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65381 17.1923L9.85767 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65393 17.1923L5.43889 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
    {
        label: 'Inline',
        value: 'zolo-content-inline',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M17.2781 7.53729L15.3485 5.28601"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17.2781 7.53723L15.3485 9.78851"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M17.2781 16.4173L15.3485 14.1774"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17.2781 16.4172L15.3485 18.6685"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
];

export const ZOLO_CONTENT_LAYOUT_4 = [
    {
        label: 'Flex',
        value: '',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M17.2781 7.53729L15.3485 5.28601"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17.2781 7.53723L15.3485 9.78851"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M17.2781 16.4173L15.3485 14.1774"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17.2781 16.4172L15.3485 18.6685"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
    {
        label: 'Block',
        value: 'zolo-content-inline-block',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.391 6.72949L16.391 17.1923"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.3909 17.1923L18.606 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.391 17.1923L14.176 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65393 6.72949L7.65393 17.1923"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65381 17.1923L9.85767 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M7.65393 17.1923L5.43889 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        ),
    },
];

// content
export const CONTENT_ALIGN = 'contentAlign';
export const CONTENT_V_ALIGN = 'contentVAlign';

// Item
export const CONTAINER_BACKGROUND = 'containerBg';
export const CONTAINER_HOVER_BG = 'containerHoverBg';
export const CONTAINER_BORDER = 'containerBorder';
export const CONTAINER_BORDER_RADIUS = 'containerBorderRadius';
export const CONTAINER_BOX_SHADOW = 'containerBoxShadow';
export const CONTAINER_HOVER_BOX_SHADOW = 'containerHoverBoxShadow';
export const CONTAINER_MARGIN = 'containerMargin';
export const CONTAINER_PADDING = 'containerPadding';

// Counter
export const COUNTER_MARGIN = 'counterMargin';
export const COUNTER_GAP = 'counterGap';
export const COUNTER_TEXT_SHADOW = 'counterTextShadow';
export const COUNTER_TEXT_STROKE = 'counterTextStroke';

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
export const ICON_BACKGROUND = 'iconBg';
export const ICON_HOVER_BG = 'iconHoverBg';

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

export const TITLE_BACKGROUND = 'titleBg';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_BOX_SHADOW = 'titleBoxShadow';
export const TITLE_HOVER_BOX_SHADOW = 'titleHoverBoxShadow';

// image
export const ICON_IMAGE_SIZE = 'iconImageSize';
export const IMAGE_BORDER = 'imageBorder';
export const ICON_IMAGE_BORDER_RADIUS = 'iconImageBorderRadius';

export const NUMBER_BG_MASK = 'numberBgMask';
export const NUMBER_BACKGROUND = 'numberBg';
export const NUMBER_BG_SIZE = 'numberBorder';
export const NUMBER_PADDING = 'numberPadding';

export const NUMBER_BORDER = 'numberBorder';
export const NUMBER_BORDER_RADIUS = 'numberBorderRadius';
export const NUMBER_BOX_SHADOW = 'numberTextShadow';
export const NUMBER_HOVER_BOX_SHADOW = 'numberHoverBoxShadow';
