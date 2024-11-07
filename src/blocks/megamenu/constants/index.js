/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'navigation';
export const DROPDOWN_WRAP_BOX_SHADOW = 'dropdownWrapBoxShadow';
export const DROPDOWN_WRAP_BG = 'dropdownWrapBg';
export const DROPDOWN_WRAP_BORDER = 'dropdownWrapBorder';
export const DROPDOWN_WRAP_BORDER_RADIUS = 'dropdownWrapBorderRadius';
export const DROPDOWN_WRAP_PADDING = 'dropdownWrapPadding';
export const DROPDOWN_WRAP_MARGIN = 'dropdownWrapMargin';
export const DROPDOWN_WIDTH = 'dropdownWidth';
export const DROPDOWN_WIDTH_OFFSET = 'dropdownWidthOffset';

// tab states
export const TAB_STATES = [
    {
        value: 'normal',
        label: __('Normal', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Hover', 'zoloblocks'),
    },
    {
        value: 'active',
        label: __('Active', 'zoloblocks'),
    },
];
