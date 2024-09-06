/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'slide';

// Block Settings
export const ITEMS_ALIGN = 'itemsAlign';
export const STAR_SIZE = 'starSize';
export const STAR_MARGIN = 'starMargin';

// title
export const TITLE_GAP = 'titleGap';
//icon
export const ICON_SIZE = 'iconSize';
export const ICON_BORDER = 'iconBorder';
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
export const ICON_PADDING = 'iconPadding';
export const ICON_BG = 'iconBg';


export const ICON_OPTIONS = [
    {
        label: __('Image', 'zoloblocks'),
        value: 'image',
    },
    {
        label: __('Icon', 'zoloblocks'),
        value: 'icon',
    },
];
