/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
	{ label: __( 'Default', 'zolo-blocks' ), value: 'style-0' },
	{ label: __( 'Preset 1', 'zolo-blocks' ), value: 'style-1' },
	{ label: __( 'Preset 2', 'zolo-blocks' ), value: 'style-2' },
	{ label: __( 'Preset 3', 'zolo-blocks' ), value: 'style-3' },
];

// Title
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

export const ICON_POSITIONS = [
	{
		label: __( 'Left', 'zolo-blocks' ),
		value: 'row-reverse',
	},
	{
		label: __( 'Right', 'zolo-blocks' ),
		value: 'row',
	},
	{
		label: __( 'Top', 'zolo-blocks' ),
		value: 'column-reverse',
	},
	{
		label: __( 'Bottom', 'zolo-blocks' ),
		value: 'column',
	},
];

// Item

export const CONTAINER_BACKGROUND = 'containerBg';
export const CONTAINER_MARGIN = 'containerMargin';
export const CONTAINER_PADDING = 'containerPadding';

// Icon
export const ICON_PADDING = 'iconPadding';
export const ICON_MARGIN = 'iconMargin';
export const ICON_BOX_ALIGNMENT = 'iconBoxAlignment';
export const ICON_BORDER = 'iconBorder';
export const ICON_BOX_SHADOW = 'iconBoxShadow';
export const ICON_HOVER_BOX_SHADOW = 'iconHoverBoxShadow';
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
export const ICON_SIZE = 'iconSize';
export const ICON_TEXT_SPACING = 'iconTextSpacing';

// Button
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
export const BUTTON_ICON_SIZE = 'buttonIconSize';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_MARGIN = 'buttonMargin';
export const BUTTON_PADDING = 'buttonPadding';

// title
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

// description
export const DESCRIPTION_MARGIN = 'descMargin';
