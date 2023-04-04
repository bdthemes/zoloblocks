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
/**
 * Button
 */

export const BUTTON_BG = 'buttonBg';
export const BUTTON_HOVER_BG_COLOR = 'buttonHover';
export const BUTTON_PADDING = 'buttonPadding';
export const BUTTON_MARGIN = 'buttonMargin';
export const BUTTON_ALIGNMENT = 'buttonAlignment';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';

/**
 * Button Icon
 */

export const ICON_SIZE = 'iconSize';
export const ICON_TEXT_SPACING = 'iconTextSpacing';
export const ICON_BORDER = 'btnIconBorder';
export const ICON_BORDER_RADIUS = 'btnIconBorderRadius';
export const ICON_BOX_SHADOW = 'btnIconBoxShadow';
export const ICON_HOVER_BOX_SHADOW = 'btnIconHoverBoxShadow';
export const ICON_PADDING = 'btnIconPadding';
