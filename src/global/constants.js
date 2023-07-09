import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

//Attribute Prefix
export const prefix = 'zolo_';

export const UNIT_TYPES = [
  { label: 'px', value: 'px' },
  { label: '%', value: '%' },
  { label: 'em', value: 'em' },
];

export const NORMAL_HOVER = [
  { label: 'Normal', value: 'normal' },
  { label: 'Hover', value: 'hover' },
];

export const TEXT_ALIGN = [
  { label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
  { label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
  { label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
];

export const TEXT_ALIGN_OPTIONS = [
  {
    label: 'Left',
    value: 'left',
  },
  {
    label: 'Center',
    value: 'center',
  },
  {
    label: 'Right',
    value: 'right',
  },
  {
    label: 'Justify',
    value: 'justify',
  },
];

export const FLEX_ALIGN_OPTIONS = [
  {
    label: 'Top',
    value: 'flex-start',
  },
  {
    label: 'Center',
    value: 'center',
  },
  {
    label: 'Bottom',
    value: 'flex-end',
  },
];

export const HEADING = [
  { label: __('H1', 'zolo-blocks'), value: 'h1' },
  { label: __('H2', 'zolo-blocks'), value: 'h2' },
  { label: __('H3', 'zolo-blocks'), value: 'h3' },
  { label: __('H4', 'zolo-blocks'), value: 'h4' },
  { label: __('H5', 'zolo-blocks'), value: 'h5' },
  { label: __('H6', 'zolo-blocks'), value: 'h6' },
  { label: __('P', 'zolo-blocks'), value: 'p' },
];

export const SEPERATOR_STYLES = [
  { label: __('Solid', 'zolo-blocks'), value: 'solid' },
  { label: __('Dashed', 'zolo-blocks'), value: 'dashed' },
  { label: __('Dotted', 'zolo-blocks'), value: 'dotted' },
  { label: __('Double', 'zolo-blocks'), value: 'double' },
  { label: __('Groove', 'zolo-blocks'), value: 'groove' },
  { label: __('Outset', 'zolo-blocks'), value: 'outset' },
  { label: __('Ridge', 'zolo-blocks'), value: 'ridge' },
];

export const BACKGROUND_TYPES = [
  {
    label: __('Classic', 'zolo-blocks'),
    value: 'classic',
    icon: 'color-picker',
  },
  {
    label: __('Gradient', 'zolo-blocks'),
    value: 'gradient',
    icon: 'art',
  },
];


export const ORDER_BY = [
  { label: __("Date", "zolo-blocks"), value: "date" },
  { label: __("Author", "zolo-blocks"), value: "author" },
  { label: __("Title", "zolo-blocks"), value: "title" },
  { label: __("Last modified date", "zolo-blocks"), value: "modified" },
  { label: __("Post parent ID", "zolo-blocks"), value: "parent" },
]

export const SORT_ORDER = [
  { label: __("ASC", "zolo-blocks"), value: "asc" },
  { label: __("DESC", "zolo-blocks"), value: "desc" },
]

export const PRINT_TAXONOMY = (taxonomy) => {
  let allTax = [];
  for (let tax in taxonomy) {
    allTax.push({ value: tax, label: __(taxonomy[tax], 'zolo-blocks') })
  }
  return allTax;
}
export const THUMBNAIL_SIZE = [
  { label: __('Default', 'zolo-blocks'), value: '' },
  { label: __('Thumbnail', 'zolo-blocks'), value: 'thumbnail' },
  { label: __('Medium', 'zolo-blocks'), value: 'medium' },
  { label: __('Large', 'zolo-blocks'), value: 'large' },
  { label: __('Full', 'zolo-blocks'), value: 'full' },
];
