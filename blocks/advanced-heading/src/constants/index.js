import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-advanced-heading';

//settings tab
export const STYLES = [
    { label: __('Default', 'zolo-blocks'), value: 'style-0' },
    { label: __('Style 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
    { label: __('Style 3', 'zolo-blocks'), value: 'style-3' },
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

export const HEADING_TAG = [
    { label: __('H1', 'zolo-blocks'), value: 'h1' },
    { label: __('H2', 'zolo-blocks'), value: 'h2' },
    { label: __('H3', 'zolo-blocks'), value: 'h3' },
    { label: __('H4', 'zolo-blocks'), value: 'h4' },
    { label: __('H5', 'zolo-blocks'), value: 'h5' },
    { label: __('H6', 'zolo-blocks'), value: 'h6' },
    { label: __('Div', 'zolo-blocks'), value: 'div' },
    { label: __('P', 'zolo-blocks'), value: 'p' },
    { label: __('Span', 'zolo-blocks'), value: 'span' },
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

export const TPT_ALIGNMENT = 'tpAlign';
//style tab
export const TITLE_ALIGN = 'titleAlign';
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_SHADOW = 'titleShadow';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

export const SUBTITLE_MARGIN = 'subTitleMargin';
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
