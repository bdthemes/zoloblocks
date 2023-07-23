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
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={16}
				fill="currentColor"
				className="bi bi-align-start"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
				/>
				<path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
			</svg>
		),
	},
	{
		label: 'Center',
		value: 'center',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={16}
				fill="currentColor"
				className="bi bi-align-center"
				viewBox="0 0 16 16"
			>
				<path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
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
				<rect width={100} height={100} style={{ fill: 'none' }} />
				<path
					d="M75.37,12.93a5,5,0,0,0-5,5V32.7H25.11a5,5,0,0,0,0,10H70.37V57.4H43.64a5,5,0,1,0,0,10H70.37V81.35a5,5,0,0,0,10,0V17.93A5,5,0,0,0,75.37,12.93Z"
					transform="translate(0 0)"
					style={{ fill: '#39394d' }}
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
