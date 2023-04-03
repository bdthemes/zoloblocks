/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-button';
// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'button-1' },
	{ label: __('Preset 2', 'zolo-blocks'), value: 'button-2' },
	{ label: __('Preset 3', 'zolo-blocks'), value: 'button-3' },
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
export const BUTTON_BG = 'buttonBg';
// Button Hover BG
export const BUTTON_HOVER_BG_COLOR = 'buttonHover';
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
// Button Border Radius
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
// Button Box Shadow
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
// Button Hover Box Shadow
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
