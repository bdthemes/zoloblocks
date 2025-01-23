/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'fancy-list';

// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Preset 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Preset 3', 'zoloblocks'), value: 'style-3' },
    { label: __('Preset 4', 'zoloblocks'), value: 'style-4' },
];
export const PRESETS_ALIGNMENT = [
    {
        label: 'Left',
        value: 'fancy-list-align-left',
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
        value: 'fancy-list-align-right',
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

// item
export const ITEM_BG = 'ItemBg';
export const ITEM_BG_HOVER = 'ItemBgHover';
export const ITEM_PADDING = 'ItemPadding';
export const ITEM_MARGIN = 'ItemMargin';
export const ITEM_BORDER = 'ItemBorder';
export const ITEM_BORDER_RADIUS = 'ItemBorderRadius';
export const ITEM_BOX_SHADOW = 'ItemBoxShadow';

// Grid Background
export const COLUMNS = 'gridColumns';
export const GRID_GAP = 'gridGap';

// title
export const TITLE_SPACING = 'titleSpacing';

// description
export const DESC_SPACING = 'descSpacing';

//Icon
export const ICON_WIDTH = 'iconWidth';
export const ICON_BORDER = 'iconBorder';
export const ICON_PADDING = 'iconPadding';
export const ICON_RADIUS = 'iconRadius';
export const ICON_BG = 'iconBg';
export const ICON_HBG = 'iconHbg';
export const ICON_SHADOW = 'iconShadow';
export const ICON_SHADOW_HOVER = 'iconHoverShadow';

//image
export const IMAGE_WIDTH = 'imageWidth';
export const IMAGE_HEIGHT = 'imageHeight';
export const IMAGE_BORDER = 'imageBorder';
export const IMAGE_BORDERRADIUS = 'imageBorderRadius';
export const IMAGE_PADDING = 'imagePadding';
export const ITEM_BOX_HOVER_SHADOW = 'itemBoxHoverShadow';

// gap
export const GAP = 'gap';

export const MEDIA_BOX_SHADOW = 'mediaBoxShadow';
export const MEDIA_BOX_SHADOW_HOVER = 'mediaBoxShadowHover';
