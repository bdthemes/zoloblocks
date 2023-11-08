/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'team-grid';

// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: 'default' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
	{ label: __('Preset 2', 'zolo-blocks'), value: 'style-2' }
];

// Grid Background
export const TEAM_GRID_BG = 'teamGridBg';

// Grid Columns
export const GRID_COLUMNS = 'gridColumns';

// Columns Gap
export const COLUMNS_GAP = 'columnsGap';

// Rows Gap
export const ROWS_GAP = 'rowsGap';

// container margin
export const CONTAINER_MARGIN = 'containerMargin';

// container padding
export const CONTAINER_PADDING = 'containerPadding';
