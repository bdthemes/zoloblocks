/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'fancy-list';

// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: '4' },
    { label: __('Preset 2', 'zolo-blocks'), value: '5' },
    { label: __('Preset 3', 'zolo-blocks'), value: '6' },
    { label: __('Preset 4', 'zolo-blocks'), value: '7' },
];
//tag
export const TAGS = [
    { label: 'h1', value: 'h1' },
    { label: 'h2', value: 'h2' },
    { label: 'h3', value: 'h3' },
    { label: 'h4', value: 'h4' },
    { label: 'h5', value: 'h5' },
    { label: 'h6', value: 'h6' },
    { label: 'span', value: 'span' },
    { label: 'div', value: 'div' },
];
//units
export const UNITS = [
    { label: 'px', value: 'px' },
    { label: '%', value: '%' },
    { label: 'em', value: 'em' },
];

//Icon
export const ICON_WIDTH = 'iconWidth';
export const ICON_BORDER = 'iconBorder';
export const ICON_PADDING = 'iconPadding';
export const ICON_RADIUS = 'iconRadius';
//image
export const IMAGE_SIZE = 'imageSize';
export const IMAGE_BORDER = 'imageBorder';
export const IMAGE_BORDERRADIUS = 'imageBorderRadius';
export const IMAGE_PADDING = 'imagePadding';
