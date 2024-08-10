import {__} from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-post-category';
export const PRESETS = [
  {label: __('Grid', 'zoloblocks'), value: 'grid'},
  {label: __('List', 'zoloblocks'), value: 'list'},
];
export const ORDER_BY = [
  {value: 'display_name', label: __('Nicename', 'zoloblocks')},
  {value: 'post_count', label: __('Post Count', 'zoloblocks')},
  {value: 'registered', label: __('Registered', 'zoloblocks')},
  {value: 'rand', label: __('Random', 'zoloblocks')},

]
export const USER_ROLE = [
  {value: 'subscriber', label: __('Subscriber', 'zoloblocks')},
  {value: 'contributor', label: __('Contributor', 'zoloblocks')},
  {value: 'author', label: __('Author', 'zoloblocks')},
  {value: 'editor', label: __('Editor', 'zoloblocks')},
  {value: 'administrator', label: __('Administrator', 'zoloblocks')},
]

export const AVATAR_SIZE = [
    {value: '25', label: __('25 x 25')},
    {value: '35', label: __('35 x 35')},
    {value: '45', label: __('45 x 45')},
    {value: '60', label: __('60 x 60')},
    {value: '80', label: __('80 x 80')},
    {value: '100', label: __('100 x 100')},
    {value: '150', label: __('150 x 150')},
    {value: '200', label: __('200 x 200')},
    {value: '250', label: __('250 x 250')},
  ]

  export
const GRID_COLUMNS = 'gridColumns';
export const COLUMNS_GAP = 'columnsGap';
//count
export const COUNT_PADDING = 'countPadding';
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


