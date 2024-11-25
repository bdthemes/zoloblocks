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

// Style tab constants
export const TOP_WIDTH_SHAPE = 'topWidthShape';
export const TOP_HEIGHT_SHAPE = 'topHeightShape';
export const BOTTOM_WIDTH_SHAPE = 'bottomWidthShape';
export const BOTTOM_HEIGHT_SHAPE = 'bottomHeightShape';
