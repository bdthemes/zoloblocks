/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
export const BLOCK_PREFIX = 'slider';

// slider content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_PADDING = 'contentPadding';
export const SLIDER_HEIGHT = 'sliderHeight';

// Pagination Types
export const PAGINATION_TYPES = [
    { label: __('Bullets', 'zoloblocks'), value: 'bullets' },
    { label: __('Fraction', 'zoloblocks'), value: 'fraction' },
    { label: __('Progress Bar', 'zoloblocks'), value: 'progressbar' },
];

// Slide Effects
export const SLIDER_EFFECTS = [
    { label: __('Slide', 'zoloblocks'), value: 'slide' },
    { label: __('Fade', 'zoloblocks'), value: 'fade' },
    { label: __('Cube', 'zoloblocks'), value: 'cube' },
    { label: __('Coverflow', 'zoloblocks'), value: 'coverflow' },
    { label: __('Flip', 'zoloblocks'), value: 'flip' },
];

// Navigation settings
export const NAV_WIDTH = 'navWidth';
export const NAV_HEIGHT = 'navHeight';
export const NAV_BORDER = 'navBorder';
export const NAV_BORDER_RADIUS = 'navBorderRadius';
export const NAV_BG = 'navBg';
export const NAV_HOVER_BG = 'navHoverBg';
export const NAV_ICON_SIZE = 'navIconSize';

// Pagination settings
export const PAG_WIDTH = 'pagWidth';
export const PAG_HEIGHT = 'pagHeight';
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBorderRadius';
export const PAG_BG = 'pagBg';
export const PAG_SPACING = 'pagSpacing';
export const PAG_VERTICAL_OFFSET = 'pagVerticalOffset';

// Active Pagination
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';
export const APAG_BORDER = 'apagBorder';
export const APAG_BORDER_RADIUS = 'apagBorderRadius';
export const APAG_BG = 'apagBg';
