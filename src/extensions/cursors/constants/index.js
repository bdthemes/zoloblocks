import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-cursors-extension';

//settings tab

export const LA_POSITION = [
    {
        value: 'normal',
        label: __('Layout', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Style', 'zoloblocks'),
    },
];

export const SELECT_SOURCE = [
    {
        value: 'default',
        label: __('Default', 'zoloblocks'),
    },
    {
        value: 'text',
        label: __('Text', 'zoloblocks'),
    },
    {
        value: 'image',
        label: __('Image', 'zoloblocks'),
    },
    {
        value: 'icon',
        label: __('Icon', 'zoloblocks'),
    },
];

export const PRESET = [
    {
        value: 'style-1',
        label: __('Style 1', 'zoloblocks'),
    },
    {
        value: 'style-2',
        label: __('Style 2', 'zoloblocks'),
    },
    {
        value: 'style-3',
        label: __('Style 3', 'zoloblocks'),
    },
];

export const DOT_SIZE = 'dotSize';
export const TEXT_BG_COLOR = 'textBgColor';
export const TEXT_BORDER = 'textBorder';
export const TEXT_BORDER_RADIUS = 'textBorderRadius';
export const TEXT_PADDING = 'textPadding';
export const IMAGE_BORDER = 'imageBorder';
export const IMAGE_BORDER_RADIUS = 'imageBorderRadius';
