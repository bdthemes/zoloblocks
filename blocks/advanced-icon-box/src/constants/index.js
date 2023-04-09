/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: 'preset-1' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'preset-2' },
];

// icon positions
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
// Icon BG
export const ICON_BG_COLOR = 'iconNormal';
// Icon Hover BG
export const ICON_HOVER_BG_COLOR = 'iconHover';
// Icon Typography
export const ICON_TYPOGRAPHY = 'iconTypography';

// Icon Padding
export const ICON_PADDING = 'iconPadding';
// Icon Margin
export const ICON_MARGIN = 'iconMargin';
// Icon Alignment
export const ICON_ALIGNMENT = 'iconAlignment';
// Heading Alignment
export const HEADING_ALIGNMENT = 'headingAlignment';
// Icon Border
export const ICON_BORDER = 'iconBorder';
// Icon Size
export const ICON_SIZE = 'iconSize';
// icon and text spacing
export const ICON_TEXT_SPACING = 'iconTextSpacing';
