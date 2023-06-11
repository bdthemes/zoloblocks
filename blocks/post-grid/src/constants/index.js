/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Presets
export const PRESETS = [
  { label: __('Default', 'zolo-blocks'), value: 'default' },
  { label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
  { label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
];

// Block Prefix
export const BLOCK_PREFIX = 'zolo-post-grid';


// conatainer spacing
export const CONTAINER_MARGIN = 'postContainerMargin';
export const CONTAINER_PADDING = 'postContainerPadding';


export const POST_TYPE = [
  { label: __("Posts", "zolo-blocks"), value: "post" },
  // { label: __("Pages", "zolo-blocks"), value: "page" },
]

export const TEXONOMY_RELATION = [
  { label: __("OR", "zolo-blocks"), value: "OR" },
  { label: __("AND", "zolo-blocks"), value: "AND" },
]
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

export const AUTHOR_LISTS = zoloParams.get_users;

export const PRINT_TAXONOMY = (taxonomy) => {
  let allTax = [];
  for (let tax in taxonomy) {
    allTax.push({ value: tax, label: __(taxonomy[tax], 'zolo-blocks') })
  }
  return allTax;
}
