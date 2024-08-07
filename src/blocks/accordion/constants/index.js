/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'slide';

export const PRESETS = [
    { label: __('Preset 1', 'zoloblocks'), value: '' },
    { label: __('Preset 2 (Pro)', 'zoloblocks'), value: 'style-2', disabled: true },
    { label: __('Preset 3 (Pro)', 'zoloblocks'), value: 'style-3', disabled: true },
];

// accordion container
export const AC_CONTAINER_BORDER = 'accBorder';
export const AC_CONTAINER_BORDER_RADIUS = 'accBorderRadius';
export const AC_CONTAINER_BOX_SHADOW = 'accBoxShadow';
export const AC_CONTAINER_PADDING = 'accPadding';
export const AC_CONTAINER_MARGIN = 'accMargin';
export const AC_CONTAINER_BG = 'accBg';

// accordion header
export const AC_HEADER_BORDER = 'achBorder';
export const AC_HEADER_BORDER_RADIUS = 'achBorderRadius';
export const AC_HEADER_PADDING = 'achPadding';
export const AC_HEADER_MARGIN = 'achMargin';
export const AC_HEADER_BG = 'achBg';
export const AC_HEADER_HBG = 'achHoverBg';

// accordion body
export const AC_BODY_BORDER = 'acbBorder';
export const AC_BODY_BORDER_RADIUS = 'acbBorderRadius';
export const AC_BODY_PADDING = 'acbPadding';
export const AC_BODY_MARGIN = 'acbMargin';
export const AC_BODY_BG = 'acbBg';

// accordion icon
export const ICONTAINER_BG = 'iContainerBg';
export const ICONTAINER_PADDING = 'iContainerPadding';
export const ICONTAINER_BORDER = 'iContainerBorder';
export const ICONTAINER_BRADIUS = 'iContainerBorderRadius';
export const ICONTAINER_HBG = 'iContainerHoverBg';
export const ICON_SIZE = 'iconSize';

// Active accordion header
export const AAC_HEADER_BG = 'aachBg';

// accordion body
export const AAC_BODY_BG = 'aacbBg';

// accordion icon
export const AICONTAINER_BG = 'aiContainerBg';

// animated border size
export const ANIMATED_BORDER_SIZE = 'animatedBorderSize';
