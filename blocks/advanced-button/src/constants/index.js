/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-button';
// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: 'preset-1' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'preset-2' },
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
