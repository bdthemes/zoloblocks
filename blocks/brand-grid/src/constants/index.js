/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'brand-grid';

// Presets
export const PRESETS = [
    { label: __('Default', 'zolo-blocks'), value: 'default' },
    { label: __('Style 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
    { label: __('Style 3', 'zolo-blocks'), value: 'style-3' },
    { label: __('Style 4', 'zolo-blocks'), value: 'style-4' },
    { label: __('Style 5', 'zolo-blocks'), value: 'style-5' },
    { label: __('Style 6', 'zolo-blocks'), value: 'style-6' },
    { label: __('Style 7', 'zolo-blocks'), value: 'style-7' },
    { label: __('Style 8', 'zolo-blocks'), value: 'style-8' },
];

// container
export const CONTAINER_BACKGROUND = 'brandContainerBackground';
export const CONTAINER_HOVER_BACKGROUND = 'brandHoverContainerBackground';

// title tag
export const TITLE_TAG = [
    {
        label: 'H1',
        value: 'h1',
    },
    {
        label: 'H2',
        value: 'h2',
    },
    {
        label: 'H3',
        value: 'h3',
    },
    {
        label: 'H4',
        value: 'h4',
    },
    {
        label: 'H5',
        value: 'h5',
    },
    {
        label: 'H6',
        value: 'h6',
    },
    {
        label: 'Span',
        value: 'span',
    },
    {
        label: 'P',
        value: 'p',
    },
];

// icon positions
export const ICON_BOX_POSITIONS = [
    {
        label: 'Left',
        value: 'left',
    },
    {
        label: 'Right',
        value: 'right',
    },
    {
        label: 'Top',
        value: 'top',
    },
    {
        label: 'Bottom',
        value: 'bottom',
    },
];

// icon positions
export const ICON_POSITIONS = [
    {
        label: 'Left',
        value: 'row-reverse',
    },
    {
        label: 'Right',
        value: 'row',
    },
    {
        label: 'Top',
        value: 'column-reverse',
    },
    {
        label: 'Bottom',
        value: 'column',
    },
];

// button positions
export const BUTTON_POSITIONS = [
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
];

// side icon positions
export const SIDE_ICON_POSITIONS = [
    {
        label: 'Top',
        value: 'left',
    },
    {
        label: 'Center',
        value: 'center',
    },
    {
        label: 'Bottom',
        value: 'end',
    },
];

// top icon positions
export const TOP_ICON_POSITIONS = [
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
];

// Grid
export const GRID_COLUMNS = 'gridColumns';
export const COLUMNS_GAP = 'columnsGap';
export const ROWS_GAP = 'rowsGap';

// Container
export const CONTAINER_PADDING = 'containerPadding';
export const CONTAINER_BORDER = 'containerBorder';
export const CONTAINER_BORDER_HOVER = 'containerBorderHover';
export const CONTAINER_BORDER_RADIUS = 'containerBorderRadius';
export const CONTAINER_BOX_SHADOW = 'containerBoxShadow';
export const CONTAINER_BOX_SHADOW_HOVER = 'containerBoxShadowHover';
