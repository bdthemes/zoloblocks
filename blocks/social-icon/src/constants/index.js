/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'social-icon';
// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: 'preset-1' },
	{ label: __('Style 1', 'zolo-blocks'), value: 'preset-2' },
	{ label: __('Style 2', 'zolo-blocks'), value: 'preset-3' },
	{ label: __('Style 3', 'zolo-blocks'), value: 'preset-4' },
	{ label: __('Style 4', 'zolo-blocks'), value: 'preset-5' },
];

// button icon positions
export const ICON_POSITIONS = [
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

// social icon color
export const SOCIAL_ICON_COLOR = [
	{
		label: __('Original', 'zolo-blocks'),
		value: 'original',
	},
	{
		label: __('Custom', 'zolo-blocks'),
		value: 'custom',
	},
];

// column count
export const COLUMN_COUNT = 'columnCount';

//columns Number
export const COLUMNS_NUMBER = 'columns';
export const COLUMNS_GAP = 'columnsGap';
export const ROW_GAP = 'rowGap';

//button
export const BUTTON_PADDING = 'btnPadding';
export const BUTTON_SIZE = 'btnSize';
export const BUTTON_HEIGHT = 'buttonHeight';

// Button BG
export const BUTTON_BG_COLOR = 'buttonNormal';
// Button Hover BG
export const BUTTON_HOVER_BG_COLOR = 'buttonHover';
// Button Typography
export const BUTTON_TYPOGRAPHY = 'buttonTypography';

// Button Margin
export const BUTTON_MARGIN = 'buttonMargin';
// Button Alignment
export const BUTTON_ALIGNMENT = 'buttonAlignment';
// Button Border
export const BUTTON_BORDER = 'buttonBorder';
// Icon Size
export const ICON_SIZE = 'iconSize';
// icon and text spacing
export const ICON_TEXT_SPACING = 'iconTextSpacing';
