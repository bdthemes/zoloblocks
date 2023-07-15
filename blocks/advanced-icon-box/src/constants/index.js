/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: 'style-0' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
	{ label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
	{ label: __('Preset 3', 'zolo-blocks'), value: 'style-3' },
];

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
		label: __('Left', 'zolo-blocks'),
		value: 'left',
	},
	{
		label: __('Right', 'zolo-blocks'),
		value: 'right',
	},
	{
		label: __('Top', 'zolo-blocks'),
		value: 'top',
	},
	{
		label: __('Bottom', 'zolo-blocks'),
		value: 'bottom',
	},
];

// icon positions
export const ICON_POSITIONS = [
	{
		label: __('Left', 'zolo-blocks'),
		value: 'row-reverse',
	},
	{
		label: __('Right', 'zolo-blocks'),
		value: 'row',
	},
	{
		label: __('Top', 'zolo-blocks'),
		value: 'column-reverse',
	},
	{
		label: __('Bottom', 'zolo-blocks'),
		value: 'column',
	},
];

// button positions
export const BUTTON_POSITIONS = [
	{
		label: __('Left', 'zolo-blocks'),
		value: 'left',
	},
	{
		label: __('Center', 'zolo-blocks'),
		value: 'center',
	},
	{
		label: __('Right', 'zolo-blocks'),
		value: 'right',
	},
];

// side icon positions
export const SIDE_ICON_POSITIONS = [
	{
		label: __('Top', 'zolo-blocks'),
		value: 'left',
	},
	{
		label: __('Center', 'zolo-blocks'),
		value: 'center',
	},
	{
		label: __('Bottom', 'zolo-blocks'),
		value: 'end',
	},
];

// top icon positions
export const TOP_ICON_POSITIONS = [
	{
		label: __('Left', 'zolo-blocks'),
		value: 'left',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
			>
				<rect
					width="100"
					height="100"
					style={{
						fill: 'none',
					}}
				/>
				<path
					d="M72.53,24h-44V17.38a5,5,0,0,0-10,0V83.62a5,5,0,0,0,10,0V77H52.65c4.73,0,8.57-3.57,8.57-8V61.77c0-4.39-3.84-8-8.57-8H28.5V47.19h44c4.72,0,8.57-3.57,8.57-8V32C81.1,27.57,77.25,24,72.53,24ZM52,63v4.81H28.5V63ZM71.9,38H28.5V33.19H71.9Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
	{
		label: __('Center', 'zolo-blocks'),
		value: 'center',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100.08 100.08"
			>
				<path
					d="M71.75,23.93H55V18.51a5,5,0,0,0-10,0v5.42H28.25a8.3,8.3,0,0,0-8.52,8v7.28a8.3,8.3,0,0,0,8.52,8H45v5.43H34.65a8.29,8.29,0,0,0-8.52,8V68a8.29,8.29,0,0,0,8.52,8H45v6.42a5,5,0,1,0,10,0V76.07H65.35a8.29,8.29,0,0,0,8.52-8V60.76a8.29,8.29,0,0,0-8.52-8H55V47.29H71.75a8.3,8.3,0,0,0,8.52-8V32A8.3,8.3,0,0,0,71.75,23.93ZM64.51,62.07v4.65h-29V62.07Zm6.4-24.14H29.09V33.29H70.91Z"
					transform="translate(0.04 -0.46)"
					style={{
						fill: '#39394d',
					}}
				/>
				<rect
					x="0.04"
					y="0.04"
					width="100"
					height="100"
					style={{
						fill: 'none',
					}}
				/>
			</svg>
		),
	},
	{
		label: __('Right', 'zolo-blocks'),
		value: 'right',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
			>
				<rect
					width="100"
					height="100"
					style={{
						fill: 'none',
					}}
				/>
				<path
					d="M76.35,11.8a5,5,0,0,0-5,5v6.67H27.22c-4.73,0-8.57,3.57-8.57,8V38.7c0,4.39,3.84,7.95,8.57,7.95H71.35v6.7H47.14c-4.73,0-8.57,3.56-8.57,7.95v7.28c0,4.38,3.84,8,8.57,8H71.35V83.2a5,5,0,1,0,10,0V16.8A5,5,0,0,0,76.35,11.8Zm-5,55.55H47.75V62.53h23.6Zm0-29.88H27.83V32.65H71.35Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
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
export const ICON_BOX_ALIGNMENT = 'iconBoxAlignment';
// Icon Border
export const ICON_BORDER = 'iconBorder';
// Icon Box Shadow
export const ICON_BOX_SHADOW = 'iconBoxShadow';
// Icon Hover Box Shadow
export const ICON_HOVER_BOX_SHADOW = 'iconHoverBoxShadow';
// Button Box Shadow
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
// Button Hover Box Shadow
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
// Icon Border Radius
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
// Icon Size
export const ICON_SIZE = 'iconSize';
// Button Icon Size
export const BUTTON_ICON_SIZE = 'buttonIconSize';
// Button
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_MARGIN = 'buttonMargin';
export const BUTTON_PADDING = 'buttonPadding';
// icon and spacing
export const ICON_SPACING = 'iconSpacing';
// icon and text spacing
export const ICON_TEXT_SPACING = 'iconTextSpacing';
// title Alignment
export const TITLE_ALIGNMENT = 'titleAlignment';
// title margin
export const TITLE_MARGIN = 'titleMargin';
// description margin
export const DESCRIPTION_MARGIN = 'descMargin';
// description Alignment
export const DESC_ALIGNMENT = 'descAlignment';
// title controls
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';
