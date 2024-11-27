import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-shape-builder';
// Settings tab
export const TB_POSITION = [
    {
        value: 'normal',
        label: __('Top', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Bottom', 'zoloblocks'),
    },
];

export const SHAPE_BUILDER_PS = [
    {
        value: 'bottom-left',
        label: __('Bottom Left', 'zoloblocks'),
    },
    {
        value: 'bottom-right',
        label: __('Bottom Right', 'zoloblocks'),
    },
    {
        value: 'bottom-center',
        label: __('Bottom Center', 'zoloblocks'),
    },
    {
        value: 'top-left',
        label: __('Top Left', 'zoloblocks'),
    },
    {
        value: 'top-right',
        label: __('Top Right', 'zoloblocks'),
    },
    {
        value: 'top-center',
        label: __('Top Center', 'zoloblocks'),
    },
    {
        value: 'middle-left',
        label: __('Middle Left', 'zoloblocks'),
    },
    {
        value: 'middle-right',
        label: __('Middle Right', 'zoloblocks'),
    },
];

// Style tab constants
export const TOP_WIDTH_SHAPE = 'topWidthShape';
export const TOP_HEIGHT_SHAPE = 'topHeightShape';
export const BOTTOM_WIDTH_SHAPE = 'bottomWidthShape';
export const BOTTOM_HEIGHT_SHAPE = 'bottomHeightShape';
