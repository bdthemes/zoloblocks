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
export const BLOCK_PREFIX = 'reviewGrid';

// Grid Columns
export const GRID_COLUMNS = 'gridColumns';

// Columns Gap
export const COLUMNS_GAP = 'columnsGap';

// Rows Gap
export const ROWS_GAP = 'rowsGap';

// conatainer
export const REVIEW_GRID_BG = 'reviewGridBg';
export const REVIEW_GRID_PADDING = 'reviewGridPadding';
export const REVIEW_GRID_MARGIN = 'reviewGridMargin';
