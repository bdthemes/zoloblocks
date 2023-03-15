import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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

export const HEADING = [
	{ label: __('H1', 'zolo-blocks'), value: 'h1' },
	{ label: __('H2', 'zolo-blocks'), value: 'h2' },
	{ label: __('H3', 'zolo-blocks'), value: 'h3' },
	{ label: __('H4', 'zolo-blocks'), value: 'h4' },
	{ label: __('H5', 'zolo-blocks'), value: 'h5' },
	{ label: __('H6', 'zolo-blocks'), value: 'h6' },
	{ label: __('P', 'zolo-blocks'), value: 'p' },
];

export const SEPERATOR_STYLES = [
	{ label: __('Solid', 'zolo-blocks'), value: 'solid' },
	{ label: __('Dashed', 'zolo-blocks'), value: 'dashed' },
	{ label: __('Dotted', 'zolo-blocks'), value: 'dotted' },
	{ label: __('Double', 'zolo-blocks'), value: 'double' },
	{ label: __('Groove', 'zolo-blocks'), value: 'groove' },
	{ label: __('Outset', 'zolo-blocks'), value: 'outset' },
	{ label: __('Ridge', 'zolo-blocks'), value: 'ridge' },
];

export const BACKGROUND_TYPES = [
	{ label: __("Classic", "zolo-blocks"), value: "classic" },
	{ label: __("Gradient", "zolo-blocks"), value: "gradient" },
]
