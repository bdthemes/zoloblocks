/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'social-icon';
// Presets
export const PRESETS = [
	{ label: __( 'Default', 'zolo-blocks' ), value: 'preset-1' },
	{ label: __( 'Preset 1', 'zolo-blocks' ), value: 'preset-2' },
	{ label: __( 'Preset 2', 'zolo-blocks' ), value: 'preset-3' },
	{ label: __( 'Preset 3', 'zolo-blocks' ), value: 'preset-4' },
	{ label: __( 'Preset 4', 'zolo-blocks' ), value: 'preset-5' },
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
// social icon text
export const SOCIAL_TEXT = [
	{
		label: 'Icon & Text',
		value: 'icontext',
	},
	{
		label: 'Icon',
		value: 'icon',
	},

	{
		label: 'Text',
		value: 'text',
	},
];
// social icon color
export const SOCIAL_ICON_COLOR = [
	{
		label: 'Original Color',
		value: 'original',
	},
	{
		label: 'Custom Color',
		value: 'icon',
	},
];
//columns Number
export const COLUMNS_NUMBER = 'columns';
export const COLUMNS_GAP = 'columnsGap';
export const ROW_GAP = 'rowGap';
//button size
export const BUTTON_SIZE = 'btnSize';
export const BUTTON_ICON_SIZE = 'buttonIconSize';
export const BUTTON_HEIGHT = 'buttonHeight';

// Button BG
export const BUTTON_BG_COLOR = 'buttonNormal';
// Button Hover BG
export const BUTTON_HOVER_BG_COLOR = 'buttonHover';
// Button Typography
export const BUTTON_TYPOGRAPHY = 'buttonTypography';

// Button Padding
export const BUTTON_PADDING = 'buttonPadding';
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
