import {__} from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-category';
export const PRESETS = [
  {label: __('Style 1', 'zoloblocks'), value: 'style-1'},
  { label: __('Style 2 (Pro)', 'zoloblocks'), value: 'style-2', disabled: true },
];
export const CAT_ORDER_BY = [
  {value: 'name', label: __('Name', 'zoloblocks')},
  {value: 'post_date', label: __('Date', 'zoloblocks')},
  {value: 'post_title', label: __('Title', 'zoloblocks')},
  {value: 'menu_order', label: __('Menu Order', 'zoloblocks')},
  {value: 'rand', label: __('Random', 'zoloblocks')},
]
export const GRID_COLUMNS = 'gridColumns';
export const COLUMNS_GAP = 'columnsGap';
export const ITEM_HEIGHT='itemHeight';
export const ITEM_TEXT_ALIGN='itemTextAlign';
export const TEXT_SPACING='textSpacing';
//count
export const COUNT_PADDING = 'countPadding';
export const COUNT_BG = 'countBg';
export const COUNT_BORDER = 'countBorder';
export const COUNT_BORDER_RADIUS = 'countBRadius';
export const COUNT_SHADOW = 'countShadow';
//item
export const ITEM_PADDING = 'itemPadding';
export const ITEM_BG = 'itemBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BORDER_RADIUS = 'itemBRadius';
export const ITEM_SHADOW = 'itemShadow';
export const ITEM_HOVER_BG = 'itemHoverBg';
export const ITEM_HOVER_SHADOW = 'itemHoverShadow';
//view all btn
export const VIEW_BTN_PADDING = 'viewBtnPadding';
export const VIEW_BTN_BORDER = 'viewBtnBorder';
export const VIEW_BTN_BORDER_RADIUS = 'viewBtnBRadius';
export const VIEW_BTN_SHADOW = 'viewBtnShadow';
export const THUMBNAIL_OVERLAY_BG = 'thumbnailOverly'








