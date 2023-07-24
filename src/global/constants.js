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
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={4}
					y={14}
					width={10}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={4}
					y={5}
					width={16}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Center',
		value: 'center',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={4}
					y={5}
					width={16}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={7}
					y={14}
					width={10}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10L12 14"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 19L12 22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 2V5"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		label: 'Right',
		value: 'right',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={10}
					y={14}
					width={10}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={4}
					y={5}
					width={16}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Justify',
		value: 'justify',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={4}
					y={6}
					width={5}
					height={12}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={15}
					y={6}
					width={5}
					height={12}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
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
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={4}
					y={14}
					width={10}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={4}
					y={5}
					width={16}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Center',
		value: 'center',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={4}
					y={5}
					width={16}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={7}
					y={14}
					width={10}
					height={5}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10L12 14"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 19L12 22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 2V5"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
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
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={8}
					y={8}
					width={12}
					height={8}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Right',
		value: 'right',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 2V22"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x={4}
					y={8}
					width={12}
					height={8}
					rx={1}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Top',
		value: 'top',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22 4L2 4"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Bottom',
		value: 'bottom',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22 20L2 20"
					stroke="#4D4D4D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];
// position
export const ICON_POSITIONS = [
	{
		label: 'Left',
		value: 'left',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={11}
					y={12}
					width={11}
					height="0.01"
					rx="0.005"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={3}
					y={10}
					width={4}
					height={4}
					rx={2}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Right',
		value: 'right',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={3}
					y={12}
					width={11}
					height="0.01"
					rx="0.005"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={18}
					y={10}
					width={4}
					height={4}
					rx={2}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Top',
		value: 'top',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={6}
					y={16}
					width={12}
					height="0.01"
					rx="0.005"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={10}
					y={8}
					width={4}
					height={4}
					rx={2}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: 'Bottom',
		value: 'bottom',
		icon: (
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x={6}
					y={8}
					width={12}
					height="0.01"
					rx="0.005"
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
				<rect
					x={10}
					y={12}
					width={4}
					height={4}
					rx={2}
					stroke="#4D4D4D"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];
