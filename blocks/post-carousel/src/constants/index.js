/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-carousel';
export const PRESETS = [
    { label: __('Style 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
    { label: __('Style 3', 'zolo-blocks'), value: 'style-3' },
];
export const CAROUSEL_EFFECTS = [
    { label: __('Slide', 'zolo-blocks'), value: 'slide' },
    { label: __('Coverflow', 'zolo-blocks'), value: 'coverflow' },

];

export const COLUMNS = 'sliderColumns';
export const COLUMNS_GAP = 'columnsGap';
export const THUMBNAIL_HEIGHT = 'thumbHeight';

//desing
export const COLUMN_PADDING = 'columnPadding';
export const COLUMN_BG = 'columnBg';
export const COLUMN_BORDER = 'columnBorder';
export const COLUMN_BORDER_RADIUS = 'columnBRadius';
export const COLUMN_SHADOW = 'columnShadow';

export const THUMBNAIL_BORDER = 'thumbBorder';
export const THUMBNAIL_BORDER_RADIUS = 'thumbBRadius';
export const THUMBNAIL_BG = 'thumbBg';
export const THUMBNAIL_BOX_SHADOW = 'thumbShadow';

export const THUMBNAIL_MARGIN = 'thumbMargin';

export const TITLE_MARGIN = 'titleMargin';
export const EXCERPT_MARGIN = 'excerptMargin';
export const META_MARGIN = 'metaMargin';

export const CAT_GAP = 'catGap';
export const CAT_BORDER = 'catBorder';
export const CAT_BORDER_RADIUS = 'catBRadius';
export const CAT_MARGIN = 'catMargin';
export const CAT_PADDING = 'catPading';

export const READMORE_GAP = 'readMoreGap';
export const READMORE_BORDER = 'readMoreBorder';
export const READMORE_BORDER_RADIUS = 'readMoreBRadius';
export const READMORE_MARGIN = 'readMoreMargin';
export const READMORE_PADDING = 'readMorePadding';

export const AVATAR_SIZE = 'avatarSize';
export const AVATAR_BORDER = 'avatarBorder';
export const AVATAR_BORDER_RADIUS = 'avatarBRadius';
export const AVATAR_GAP = 'avatarGap';
// post meta
export const META_SPACE = 'metaSpace';



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
export const PAG_BOTTOM_SPACING = 'pagBottomSpacing';

// Active Pagination
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';
export const APAG_BORDER = 'apagBorder';
export const APAG_BORDER_RADIUS = 'apagBorderRadius';
export const APAG_BG = 'apagBg';