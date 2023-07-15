import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

//Attribute Prefix
export const prefix = 'zolo_';

export const UNIT_TYPES = [
	{ label: 'px', value: 'px' },
	{ label: '%', value: '%' },
	{ label: 'em', value: 'em' },
];

export const NORMAL_HOVER = [
	{ label: 'Normal', value: 'normal' },
	{ label: 'Hover', value: 'hover' },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
	{ label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
	{ label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
];

export const TEXT_ALIGN_OPTIONS = [
	{
		label: 'Left',
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
		label: 'Center',
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
		label: 'Right',
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
	{
		label: 'Justify',
		value: 'justify',
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
					d="M76.47,11.88a5,5,0,0,0-5,5v6.64H28.53V16.88a5,5,0,0,0-10,0V83.12a5,5,0,0,0,10,0V76.48H71.47v6.64a5,5,0,0,0,10,0V16.88A5,5,0,0,0,76.47,11.88Zm-5,55.41H28.53V62.48H71.47Zm0-14H28.53V46.71H71.47Zm0-15.77H28.53v-4.8H71.47Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
];

export const FLEX_ALIGN_OPTIONS = [
	{
		label: 'Top',
		value: 'flex-start',
	},
	{
		label: 'Center',
		value: 'center',
	},
	{
		label: 'Bottom',
		value: 'flex-end',
	},
];

export const HEADING = [
	{ label: __('H1', 'zolo-blocks'), value: 'h1' },
	{ label: __('H2', 'zolo-blocks'), value: 'h2' },
	{ label: __('H3', 'zolo-blocks'), value: 'h3' },
	{ label: __('H4', 'zolo-blocks'), value: 'h4' },
	{ label: __('H5', 'zolo-blocks'), value: 'h5' },
	{ label: __('H6', 'zolo-blocks'), value: 'h6' },
	{ label: __('P', 'zolo-blocks'), value: 'p' },
];

export const BORDER_TYPES = [
	{ label: __('None', 'zolo-blocks'), value: 'none' },
	{ label: __('Solid', 'zolo-blocks'), value: 'solid' },
	{ label: __('Custom', 'zolo-blocks'), value: 'custom' },
];

export const SEPERATOR_STYLES = [
	{ label: __('Dashed', 'zolo-blocks'), value: 'dashed' },
	{ label: __('Dotted', 'zolo-blocks'), value: 'dotted' },
	{ label: __('Double', 'zolo-blocks'), value: 'double' },
	{ label: __('Groove', 'zolo-blocks'), value: 'groove' },
	{ label: __('Outset', 'zolo-blocks'), value: 'outset' },
	{ label: __('Ridge', 'zolo-blocks'), value: 'ridge' },
];

export const BACKGROUND_TYPES = [
	{
		label: __('Classic', 'zolo-blocks'),
		value: 'classic',
		icon: 'color-picker',
	},
	{
		label: __('Gradient', 'zolo-blocks'),
		value: 'gradient',
		icon: 'art',
	},
];

export const BOX_SHADOW_TYPES = [
	{
		label: __('None', 'zolo-blocks'),
		value: 'none',
	},
	{
		label: __('Inner', 'zolo-blocks'),
		value: 'inset',
	},
	{
		label: __('Outer', 'zolo-blocks'),
		value: 'outset',
	},
];

export const DEFAULT_ALIGNS = [
	{
		label: 'Left',
		value: 'left',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
			>
				<path
					d="M72.53,24.31H27.47a6.5,6.5,0,0,0-1.47.18V16.87a2.5,2.5,0,1,0-5,0V83.12a2.5,2.5,0,0,0,5,0V75.51a6.5,6.5,0,0,0,1.47.18H52.65a6.48,6.48,0,0,0,6.47-6.48V60.6a6.48,6.48,0,0,0-6.47-6.48H27.47A6.5,6.5,0,0,0,26,54.3V45.7a6.5,6.5,0,0,0,1.47.17H72.53A6.47,6.47,0,0,0,79,39.4V30.79A6.48,6.48,0,0,0,72.53,24.31ZM27.47,59.12H52.65a1.48,1.48,0,0,1,1.47,1.48v8.61a1.47,1.47,0,0,1-1.47,1.48H27.47A1.47,1.47,0,0,1,26,69.21V60.6A1.48,1.48,0,0,1,27.47,59.12ZM74,39.4a1.47,1.47,0,0,1-1.47,1.47H27.47A1.47,1.47,0,0,1,26,39.4V30.79a1.47,1.47,0,0,1,1.47-1.48H72.53A1.47,1.47,0,0,1,74,30.79Z"
					style={{
						fill: '#39394d',
					}}
				/>
				<rect
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
		label: 'Center',
		value: 'center',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
			>
				<path
					d="M71.75,25.11H52.5V18a2.5,2.5,0,1,0-5,0v7.1H28.25a6.34,6.34,0,0,0-6.34,6.34v8.31a6.34,6.34,0,0,0,6.34,6.34H47.5v7.8H34.65a6.34,6.34,0,0,0-6.34,6.34v8.31a6.34,6.34,0,0,0,6.34,6.34H47.5V82a2.5,2.5,0,1,0,5,0v-7.1H65.35a6.34,6.34,0,0,0,6.34-6.34V60.24a6.34,6.34,0,0,0-6.34-6.34H52.5V46.1H71.75a6.34,6.34,0,0,0,6.34-6.34V31.45A6.34,6.34,0,0,0,71.75,25.11ZM65.35,58.9a1.34,1.34,0,0,1,1.34,1.34v8.31a1.34,1.34,0,0,1-1.34,1.34H34.65a1.34,1.34,0,0,1-1.34-1.34V60.24a1.34,1.34,0,0,1,1.34-1.34Zm7.74-19.14a1.34,1.34,0,0,1-1.34,1.34H28.25a1.34,1.34,0,0,1-1.34-1.34V31.45a1.34,1.34,0,0,1,1.34-1.34h43.5a1.34,1.34,0,0,1,1.34,1.34Z"
					style={{
						fill: '#39394d',
					}}
				/>
				<rect
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
		label: 'Right',
		value: 'right',
		icon: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
			>
				<path
					d="M79.05,39.44V16.87a2.5,2.5,0,0,0-5,0V24.5a6.59,6.59,0,0,0-1.48-.18H27.42a6.5,6.5,0,0,0-6.49,6.49v8.63a6.49,6.49,0,0,0,6.49,6.48H72.57a6.58,6.58,0,0,0,1.48-.17v8.63a6.59,6.59,0,0,0-1.48-.18H47.33a6.49,6.49,0,0,0-6.48,6.49v8.63a6.49,6.49,0,0,0,6.48,6.48H72.57a6.58,6.58,0,0,0,1.48-.17v7.63a2.5,2.5,0,0,0,5,0V39.44Zm-5,29.9a1.48,1.48,0,0,1-1.48,1.46H47.33a1.48,1.48,0,0,1-1.48-1.48V60.69a1.49,1.49,0,0,1,1.48-1.49H72.57a1.49,1.49,0,0,1,1.48,1.47Zm0-29.88a1.48,1.48,0,0,1-1.48,1.46H27.42a1.49,1.49,0,0,1-1.49-1.48V30.81a1.49,1.49,0,0,1,1.49-1.49H72.57a1.49,1.49,0,0,1,1.48,1.47Z"
					transform="translate(0.01 -0.01)"
					style={{
						fill: '#39394d',
					}}
				/>
				<rect
					width="100"
					height="100"
					style={{
						fill: 'none',
					}}
				/>
			</svg>
		),
	},
];

// position
export const POSITIONS = [
	{
		label: 'Left',
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
					d="M20.9,86.66V56.17l.2,0h63a5,5,0,0,0,0-10h-63l-.2,0V15.72a5,5,0,1,0-10,0V86.66a5,5,0,0,0,10,0Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
	{
		label: 'Right',
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
					d="M79.1,15.72V46.21l-.2,0h-63a5,5,0,0,0,0,10h63l.2,0V86.66a5,5,0,0,0,10,0V15.72a5,5,0,1,0-10,0Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
	{
		label: 'Top',
		value: 'top',
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
					d="M14.53,22.09H45c0,.07,0,.13,0,.2v63a5,5,0,1,0,10,0v-63c0-.07,0-.13,0-.2H85.47a5,5,0,0,0,0-10H14.53a5,5,0,0,0,0,10Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
	{
		label: 'Bottom',
		value: 'bottom',
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
					d="M85.47,80.29H55c0-.07,0-.13,0-.2v-63a5,5,0,0,0-10,0v63c0,.07,0,.13,0,.2H14.53a5,5,0,0,0,0,10H85.47a5,5,0,0,0,0-10Z"
					style={{
						fill: '#39394d',
					}}
				/>
			</svg>
		),
	},
];
