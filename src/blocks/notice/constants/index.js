/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'notice';
// Presets
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Style 3 (Pro)', 'zoloblocks'), value: 'style-3', disabled: true },
    { label: __('Style 4 (Pro)', 'zoloblocks'), value: 'style-4', disabled: true },
];
export const NOTICE_TYPE = [
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
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

//animation

export const ICON_ANIMATION_BG = 'iconAnimationBg';
export const ICON_ANIMATION_SIZE = 'iconAnimationSize';
export const ICON_ANIMATION_RADIUS = 'iconAnimationRadius';
export const ICON_ANIMATION_THICKNESS = 'iconAnimationThickness';

// Close icon

export const CLOSE_ICON_SIZE = 'closeIconSize';
export const CLOSE_ICON_BG = 'closeIconBg';
export const CLOSE_ICON_HOVER_BG = 'closeIconHoverBg';
export const CLOSE_ICON_PADDING = 'closeIconPadding';
export const CLOSE_ICON_MARGIN = 'closeIconMargin';
export const CLOSE_ICON_BORDER = 'closeIconBorder';
export const CLOSE_ICON_BORDER_RADIUS = 'closeIconBorderRadius';
export const CLOSE_ICON_BOX_SHADOW = 'closeIconBoxShadow';
export const CLOSE_ICON_HOVER_BOX_SHADOW = 'closeIconHoverBoxShadow';

export const STYLE3_ICON_BG_COLOR = 'style3IconBgColor';
export const STYLE3_ICON_SIZE = 'style3IconSize';
// export const STYLE3_ICON_RADIUS = 'style3IconRadius';
export const STYLE3_ICON_OFFSET = 'style3IconOffset';

export const HIGHTLIGHT_BORDER_WIDTH = 'highlightBorderWidth';
export const HIGHTLIGHT_BORDER_HEIGHT = 'highlightBorderHeight';

export const CONTENT_TAB_PANEL_OPTION = [
    { label: 'Icon', value: 'normal' },
    { label: 'Title', value: 'hover' },
    { label: 'Description', value: 'active' },
];
