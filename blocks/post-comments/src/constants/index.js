import {__} from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-post-category';
export const PRESETS = [
  {label: __('Style 1', 'zoloblocks'), value: 'style-1'},
  {label: __('Style 2', 'zoloblocks'), value: 'style-2'},
];
export const COMMENT_ORDER_BY = [
  {value: 'comment_author', label: __('Author', 'zoloblocks')},
  {value: 'comment_approved', label: __('Approved', 'zoloblocks')},
  {value: 'comment_date', label: __('Date', 'zoloblocks')},
  {value: 'comment_content', label: __('Content', 'zoloblocks')},
  {value: 'none', label: __('Random', 'zoloblocks')},
];
export const STATUS = [
  {value: 'approve', label: __('Approve', 'zoloblocks')},
  {value: 'hold', label: __('Hold', 'zoloblocks')},
  {value: 'all', label: __('All', 'zoloblocks')},
];
export const AVATAR_SIZE = [
  {value: '16', label: '16 X 16'},
  {value: '24', label: '24 X 24'},
  {value: '48', label: '48 X 48'},
  {value: '64', label: '64 X 64'},
  {value: '80', label: '80 X 80'},
  {value: '90', label: '90 X 90'},
  {value: '100', label: '100 X 100'},
  {value: '120', label: '120 X 120'},
];

//grid
export const GRID_COLUMNS = 'gridColumns';
export const COLUMNS_GAP = 'columnsGap';
//item
export const ITEM_PADDING = 'itemPadding';
export const ITEM_BG = 'itemBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BORDER_RADIUS = 'itemBRadius';
export const ITEM_SHADOW = 'itemShadow';
export const META_SPACING='metaSpacing';
//avatar
export const AVATAR_BORDER = 'avatarBorder';
export const AVATAR_BORDER_RADIUS = 'avatarBRadius';
export const AVATAR_PADDING = 'avatarPadding';
export const AVATAR_MARGIN = 'avatarMargin';
export const AVATAR_SHADOW = 'avatarShadow';
export const DATE_MARGIN='dateMargin';
