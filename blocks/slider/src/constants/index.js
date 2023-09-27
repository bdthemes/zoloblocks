/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
export const BLOCK_PREFIX = 'slider';

// Carousel Columns
export const COLUMNS = 'sliderColumns';
export const COLUMNS_GAP = 'sliderColumnsGap';

// slider item
export const SLIDER_HEIGHT = 'sliderHeight';

// slider content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_PADDING = 'contentPadding';

// Pagination Types
export const PAGINATION_TYPES = [
    { label: __('Bullets', 'zolo-blocks'), value: 'bullets' },
    { label: __('Fraction', 'zolo-blocks'), value: 'fraction' },
    { label: __('Progress Bar', 'zolo-blocks'), value: 'progressbar' },
];

// Slide Effects
export const SLIDER_EFFECTS = [
    { label: __('Slide', 'zolo-blocks'), value: 'slide' },
    { label: __('Fade', 'zolo-blocks'), value: 'fade' },
    { label: __('Cube', 'zolo-blocks'), value: 'cube' },
    { label: __('Coverflow', 'zolo-blocks'), value: 'coverflow' },
    { label: __('Flip', 'zolo-blocks'), value: 'flip' },
];

// Carousel Effects
export const CAROUSEL_EFFECTS = [
    { label: __('Slide', 'zolo-blocks'), value: 'slide' },
    { label: __('Cube', 'zolo-blocks'), value: 'cube' },
    { label: __('Coverflow', 'zolo-blocks'), value: 'coverflow' },
    { label: __('Flip', 'zolo-blocks'), value: 'flip' },
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

// Active Pagination
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';
export const APAG_BORDER = 'apagBorder';
export const APAG_BORDER_RADIUS = 'apagBorderRadius';
export const APAG_BG = 'apagBg';
