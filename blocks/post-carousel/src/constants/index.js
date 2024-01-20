/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-carosel';
export const PRESETS = [
    { label: __('Style 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
    { label: __('Style 3', 'zolo-blocks'), value: 'style-3' },
    // { label: __('Style 4', 'zolo-blocks'), value: 'style-4' },
    // { label: __('Style 5', 'zolo-blocks'), value: 'style-5' },
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
