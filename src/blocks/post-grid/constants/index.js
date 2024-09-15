/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-post-grid';
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Style 3', 'zoloblocks'), value: 'style-3' },
    { label: __('Style 4', 'zoloblocks'), value: 'style-4' },
    { label: __('Style 5 (Pro)', 'zoloblocks'), value: 'style-5', disabled: true },
];
export const GRID_COLUMNS = 'gridColumns';
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
export const META_BOX_WRAP_PADDING = 'metaBoxWrapPadding';

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
//filter taxonomy
export const FILTER_BORDER = 'filterBorder';
export const FILTER_BORDER_RADIUS = 'filterBRadius';
export const FILTER_MARGIN = 'filterMargin';
export const FILTER_PADDING = 'filterPadding';
export const FILTER_ALIGN = 'filterAlign';
export const FILTER_GAP = 'filterGap';

// pagination
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBRadius';
export const PAG_MARGIN = 'pagMargin';
export const PAG_PADDING = 'pagPadding';
export const PAG_ALIGN = 'pagAlign';

// post meta
export const META_SPACE = 'metaSpace';

// post meta arrow space
export const META_ARROW_SPACE = 'metaArrowSpace';

// content wrapper
export const CONTENT_PADDING = 'contentPadding';

export const createPreloader = () => {
  const preloader = document.createElement('div');
  preloader.classList.add('preloader');
  preloader.innerHTML = `
    <div class="container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>`;
  return preloader;
};
