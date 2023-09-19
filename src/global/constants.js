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

export const TEXT_ALIGN_OPTIONS = [
  {
    label: 'Left',
    value: 'left',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33331 1.66669V18.3334" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3.33331" y="11.6667" width="8.33333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x="3.33331" y="4.16669" width="13.3333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.33334" y="4.16669" width="13.3333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={5} y="11.6667" width={10} height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <path d="M10 8.33331L10 11.6666" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.8333L10 18.3333" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 1.66669V4.16669" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'right',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 1.66667V18.3333" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect
          width="8.33333"
          height="4.16667"
          rx={1}
          transform="matrix(-1 0 0 1 16.6667 11.6667)"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
        <rect
          width="13.3333"
          height="4.16667"
          rx={1}
          transform="matrix(-1 0 0 1 16.6667 4.16667)"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: 'Justify',
    value: 'justify',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 1.66669V18.3334" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.33334 1.66669V18.3334" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3.33334" y={5} width="4.16667" height={10} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x="12.5" y={5} width="4.16667" height={10} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export const DEFAULT_ALIGNS = [
  {
    label: 'Left',
    value: 'left',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33331 1.66669V18.3334" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3.33331" y="11.6667" width="8.33333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x="3.33331" y="4.16669" width="13.3333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.33334" y="4.16669" width="13.3333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={5} y="11.6667" width={10} height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <path d="M10 8.33331L10 11.6666" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.8333L10 18.3333" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 1.66669V4.16669" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'right',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 1.66667V18.3333" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect
          width="8.33333"
          height="4.16667"
          rx={1}
          transform="matrix(-1 0 0 1 16.6667 11.6667)"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
        <rect
          width="13.3333"
          height="4.16667"
          rx={1}
          transform="matrix(-1 0 0 1 16.6667 4.16667)"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export const FLEX_ALIGN_OPTIONS = [
  {
    label: 'Top',
    value: 'flex-start',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4L2 4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
          d="M10 12L14 12M4 12H5M19 12H20M6 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H6C5.44772 8 5 8.44772 5 9V15C5 15.5523 5.44772 16 6 16ZM15 18H18C18.5523 18 19 17.5523 19 17V7C19 6.44772 18.5523 6 18 6H15C14.4477 6 14 6.44772 14 7V17C14 17.5523 14.4477 18 15 18Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Bottom',
    value: 'flex-end',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 20L2 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export const FLEX_HORIZONTAL_OPTIONS = [
  {
    label: 'Left',
    value: 'flex-start',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2V22" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <rect
          x="7"
          y="8"
          width="12"
          height="8"
          rx="1"
          fill="none"
          stroke="#4D4D4D"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        ></rect>
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.33334" y="4.16669" width="13.3333" height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={5} y="11.6667" width={10} height="4.16667" rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
        <path d="M10 8.33331L10 11.6666" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.8333L10 18.3333" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 1.66669V4.16669" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'flex-end',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
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

export const BORDER_TYPES = [
  { label: __('None', 'zolo-blocks'), value: 'none' },
  { label: __('Solid', 'zolo-blocks'), value: 'solid' },
  { label: __('Custom', 'zolo-blocks'), value: 'custom' },
];

export const SEPERATOR_STYLES = [
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

export const BOX_SHADOW_TYPES = [
  {
    label: __('None', 'zolo-blocks'),
    value: 'none',
  },
  {
    label: __('Inner', 'zolo-blocks'),
    value: 'inset',
  },
  {
    label: __('Outer', 'zolo-blocks'),
    value: 'outset',
  },
];

// position
export const POSITIONS = [
  {
    label: 'Left',
    value: 'row-reverse',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2V22" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <rect
          x="7"
          y="8"
          width="12"
          height="8"
          rx="1"
          fill="none"
          stroke="#4D4D4D"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        ></rect>
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'row',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Top',
    value: 'column-reverse',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4L2 4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: 'Bottom',
    value: 'column',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 20L2 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
// position
export const ICON_POSITIONS = [
  {
    label: 'Left',
    value: 'left',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={11} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={3} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'right',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={3} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={18} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Top',
    value: 'top',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={6} y={16} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={10} y={8} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Bottom',
    value: 'bottom',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={6} y={8} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
        <rect x={10} y={12} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
];

// social icon text
export const ICON_STATUS = [
  {
    label: __('No Icon', 'zolo-blocks'),
    value: 'none',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17157 9.17157L14.8284 14.8284" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.8284 9.17157L9.17157 14.8284" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx={12} cy={12} r={8} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: __('Icon & Text', 'zolo-blocks'),
    value: 'iconText',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 20V4M10 4H4M10 20H4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 10H20M12 14H16.7059" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: __('Only Icon', 'zolo-blocks'),
    value: 'iconOnly',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={12} cy={12} r={8} stroke="#4D4D4D" strokeWidth="1.5" />
        <path d="M12 15V9M14 9H10M14 15H10" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const ORDER_BY = [
  { label: __('Date', 'zolo-blocks'), value: 'date' },
  { label: __('Author', 'zolo-blocks'), value: 'author' },
  { label: __('Title', 'zolo-blocks'), value: 'title' },
  { label: __('Last modified date', 'zolo-blocks'), value: 'modified' },
  { label: __('Post parent ID', 'zolo-blocks'), value: 'parent' },
];

export const SORT_ORDER = [
  { label: __('ASC', 'zolo-blocks'), value: 'asc' },
  { label: __('DESC', 'zolo-blocks'), value: 'desc' },
];

export const PRINT_TAXONOMY = (taxonomy) => {
  let allTax = [];
  for (let tax in taxonomy) {
    allTax.push({ value: tax, label: __(taxonomy[tax], 'zolo-blocks') });
  }
  return allTax;
};
export const THUMBNAIL_SIZE = [
  { label: __('Default', 'zolo-blocks'), value: '' },
  { label: __('Thumbnail', 'zolo-blocks'), value: 'thumbnail' },
  { label: __('Medium', 'zolo-blocks'), value: 'medium' },
  { label: __('Large', 'zolo-blocks'), value: 'large' },
  { label: __('Full', 'zolo-blocks'), value: 'full' },
];

// social icon text
export const ICON_BOX_OPTIONS = [
  {
    label: __('Image', 'zolo-blocks'),
    value: 'image',
  },
  {
    label: __('Icon', 'zolo-blocks'),
    value: 'icon',
  },
];
