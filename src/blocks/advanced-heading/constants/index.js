import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-advanced-heading';

//settings tab
export const STYLES = [
    { label: __('Preset 1', 'zoloblocks'), value: 'style-0' },
    { label: __('Preset 2', 'zoloblocks'), value: 'style-1' },
];

export const SUB_TITLE_BADGE_STYLES = [
    { label: __('None', 'zoloblocks'), value: '' },
    { label: __('Style 1 (Pro)', 'zoloblocks'), value: 'badge-style-1', disabled: true },
];

export const ZOLO_SUB_TITLE_BADGE_DIRECTION = [
    {
        label: 'Left',
        value: 'zolo-badge-left',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <rect x={6} y={14} width={4} height={4} rx="0.5" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={1} y={9} width={30} height={14} rx="0.5" stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M27 16H20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 9L16 23" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'zolo-badge-right',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <rect width={4} height={4} rx="0.5" transform="matrix(-1 0 0 1 26 14)" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect width={30} height={14} rx="0.5" transform="matrix(-1 0 0 1 31 9)" stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M5 16H12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 9L16 23" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const ST_POSITION = [
    {
        label: 'Top',
        value: 'top',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4L2 4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'bottom',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 20L2 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
];

export const TPT_HIDE = [
    { label: 'Nothing', value: 'nothing' },
    { label: 'Tablet and Mobile', value: 'tab-mob' },
    { label: 'Mobile', value: 'mob' },
];

export const TPT_ROTATE_ORIGIN = [
    { label: 'Default', value: '' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Center', value: 'center' },
    { label: 'Center Left', value: 'center-left' },
    { label: 'Center Right', value: 'center-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Center', value: 'bottom-center' },
    { label: 'Bottom Right', value: 'bottom-right' },
];

//style tab
export const TITLE_ALIGN = 'titleAlign';
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_SHADOW = 'titleShadow';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

export const SUBTITLE_PADDING = 'subTitlePadding';
export const SUBTITLE_MARGIN = 'subTitleMargin';
export const SUBTITE_BORDER = 'subTitleBorder';
export const SUBTITLE_BORDER_RADIUS = 'subTitleBorderRadius';
export const SUBTITLE_TEXT_SHADOW = 'subTitleTextShadow';
export const SUBTITLE_TEXT_STROKE = 'subTitleTextStroke';

export const SEPARATOR_WIDTH = 'separatorWidth';
export const SEPARATOR_SPACING = 'separatorSpacing';
export const SEPARATOR_HEIGHT = 'separatorHeight';
export const SEPARATOR_ALIGN = 'separatorAlign';

export const TPT_MARGIN = 'TPTMargin';
export const TPT_BORDER = 'TPTBorder';
export const TPT_BORDER_RADIUS = 'TPTBorderRadius';
export const TPT_PADDING = 'TPTPadding';
export const TPT_SHADOW = 'TPTShadow';
export const TPT_TEXT_SHADOW = 'TPTTextShadow';
export const TPT_TEXT_STROKE = 'TPTTextStroke';

//advance tab
export const WRAPPER_MARGIN = 'wrapMargin';
export const WRAPPER_PADDING = 'wrapPadding';
export const WRAPPER_BG = 'wrapBg';
export const WRAPPER_BORDER = 'wrapBorder';
export const WRAPPER_SHADOW = 'wrapShadow';

export const TEST_NORMAL_BG = 'testBg';

// transparent heading offset
export const TPH_X_OFFSET = 'tphXOffset';
export const TPH_Y_OFFSET = 'tphYOffset';

//text gradient color
export const TEXT_GRADIENT_COLOR = 'textGradientColor';

// sub title badge

export const SUBTITLE_BADGE_BG = 'subTitleBadgeBg';
export const SUBTITLE_BADGE_PADDING = 'subTitleBadgePadding';
export const SUBTITLE_BADGE_MARGIN = 'subTitleBadgeMargin';
export const SUBTITE_BADGE_BORDER = 'subTitleBadgeBorder';
export const SUBTITLE_BADGE_BORDER_RADIUS = 'subTitleBadgeBorderRadius';

// sub title ICON

export const SUBTITLE_ICON_SIZE = 'subTitleIconSize';
export const SUBTITLE_ICON_BG = 'subTitleIconBg';
export const SUBTITLE_ICON_PADDING = 'subTitleIconPadding';
export const SUBTITLE_ICON_MARGIN = 'subTitleIconMargin';
export const SUBTITLE_ICON_BORDER = 'subTitleIconBorder';
export const SUBTITLE_ICON_BORDER_RADIUS = 'subTitleIconBorderRadius';
