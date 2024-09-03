/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-timeline';
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: 'style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Style 3 (Pro)', 'zoloblocks'), value: 'style-3', disabled: false },
];
export const LINE_STYLE = [
    { value: 'solid', label: __('Solid', 'zoloblocks') },
    { value: 'dashed', label: __('Dashed', 'zoloblocks') },
    { value: 'dotted', label: __('Dotted', 'zoloblocks') },
    { value: 'double', label: __('Double', 'zoloblocks') },
    { value: 'groove', label: __('Groove', 'zoloblocks') },
];

//timeline
export const LINE_WIDTH = 'lineWidth';
export const NUMBER_BG = 'numberBg';
export const NUMBER_HOVER_BG = 'numberHBG';
export const NUMBER_BORDER_RADIUS = 'numberBRadius';
export const START_END_BG = 'seBG';
export const START_END_BORDER_RADIUS = 'seBRadius';
export const START_END_BG_SIZE = 'seBGSize';

//items
export const ITEM_GAP = 'itemGap';
export const ITEM_OFFSET = 'itemOffset';
export const ITEM_PADDING = 'itemPadding';
export const ITEM_BG = 'itemBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BORDER_RADIUS = 'itemBRadius';
export const ITEM_SHADOW = 'itemShadow';
//thumbnail
export const THUMBNAIL_BORDER = 'thumbBorder';
export const THUMBNAIL_BORDER_RADIUS = 'thumbBRadius';
export const THUMBNAIL_SPACING = 'thumbSpacing';
//title
export const TITLE_SPACING = 'titleSpacing';
export const TITLE_TEXT_SHADOW = 'titleTShadow';

export const EXCERPT_MARGIN = 'excerptMargin';
export const DATE_SPACING = 'dateSpacing';
export const META_SPACE = 'metaSpace';

// pagination
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBRadius';
export const PAG_MARGIN = 'pagMargin';
export const PAG_PADDING = 'pagPadding';
export const PAG_ALIGN = 'pagAlign';

// Number
export const NUMBER_BG_SIZE = 'numberBGSize';
