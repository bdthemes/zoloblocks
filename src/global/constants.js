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
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'right',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Justify',
    value: 'justify',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={6} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export const DEFAULT_ALIGNS = [
  {
    label: 'Left',
    value: 'left',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Right',
    value: 'right',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
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
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12L16 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12L2 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={16} y={4} width={16} height={8} rx={1} transform="rotate(90 16 4)" stroke="#4D4D4D" strokeWidth="1.5" />
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
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Center',
    value: 'center',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
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

// Flex Properties
export const FLEX_DIRECTIONS = [
  {
    label: 'Row',
    value: 'row',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Column',
    value: 'column',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 12L12 19L5 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Row Reverse',
    value: 'row-reverse',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L5 12L12 5" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Column Reverse',
    value: 'column-reverse',
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12L12 5L19 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const FLEX_ALIGNS = [
  {
    label: 'Flex Start',
    value: 'flex-start',
    icon: <Dashicon icon="arrow-left-alt2" />,
  },
  {
    label: 'Center',
    value: 'center',
    icon: <Dashicon icon="arrow-up-alt" />,
  },
  {
    label: 'Flex End',
    value: 'flex-end',
    icon: <Dashicon icon="arrow-right-alt2" />,
  },
  {
    label: 'Stretch',
    value: 'stretch',
    icon: <Dashicon icon="arrow-down-alt" />,
  },
];

export const FLEX_JUSTIFIES = [
  {
    label: 'Flex Start',
    value: 'flex-start',
    icon: <Dashicon icon="arrow-left-alt2" />,
  },
  {
    label: 'Center',
    value: 'center',
    icon: <Dashicon icon="arrow-up-alt" />,
  },
  {
    label: 'Flex End',
    value: 'flex-end',
    icon: <Dashicon icon="arrow-right-alt2" />,
  },
  {
    label: 'Space Between',
    value: 'space-between',
    icon: <Dashicon icon="arrow-left-alt2" />,
  },
  {
    label: 'Space Around',
    value: 'space-around',
    icon: <Dashicon icon="arrow-up-alt" />,
  },
  {
    label: 'Space Evenly',
    value: 'space-evenly',
    icon: <Dashicon icon="arrow-right-alt2" />,
  },
];

export const FLEX_WRAPS = [
  {
    label: 'Wrap',
    value: 'wrap',
    icon: <Dashicon icon="arrow-up-alt" />,
  },
  {
    label: 'No Wrap',
    value: 'nowrap',
    icon: <Dashicon icon="arrow-left-alt2" />,
  },

  {
    label: 'Wrap Reverse',
    value: 'wrap-reverse',
    icon: <Dashicon icon="arrow-right-alt2" />,
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

// Width Types
export const WIDTH_TYPES = [
  {
    label: __('Full', 'zolo-blocks'),
    value: 'alignfull',
  },
  {
    label: __('Boxed', 'zolo-blocks'),
    value: 'alignwide',
  },
  {
    label: __('Custom', 'zolo-blocks'),
    value: 'custom_width',
  },
];

export const CONTENT_WIDTH_TYPES = [
  {
    label: __('Boxed', 'zolo-blocks'),
    value: 'alignwide',
  },
  {
    label: __('Full Width', 'zolo-blocks'),
    value: 'alignfull',
  },
];
