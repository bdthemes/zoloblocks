import { __ } from '@wordpress/i18n';

export const sizeUnitTypes = [
	{ label: 'px', value: 'px' },
	{ label: '%', value: '%' },
	{ label: 'em', value: 'em' },
];

export const fontWeightOptions = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('100', 'zolo-blocks'), value: '100' },
	{ label: __('200', 'zolo-blocks'), value: '200' },
	{ label: __('300', 'zolo-blocks'), value: '300' },
	{ label: __('400', 'zolo-blocks'), value: '400' },
	{ label: __('500', 'zolo-blocks'), value: '500' },
	{ label: __('600', 'zolo-blocks'), value: '600' },
	{ label: __('700', 'zolo-blocks'), value: '700' },
	{ label: __('800', 'zolo-blocks'), value: '800' },
	{ label: __('900', 'zolo-blocks'), value: '900' },
];

export const textTransformOptions = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('None', 'zolo-blocks'), value: 'none' },
	{ label: __('Lowercase', 'zolo-blocks'), value: 'lowercase' },
	{ label: __('Capitalize', 'zolo-blocks'), value: 'capitalize' },
	{ label: __('Uppercase', 'zolo-blocks'), value: 'uppercase' },
];

export const textDecorationOptions = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('None', 'zolo-blocks'), value: 'initial' },
	{ label: __('Overline', 'zolo-blocks'), value: 'overline' },
	{ label: __('Line Through', 'zolo-blocks'), value: 'line-through' },
	{ label: __('Underline', 'zolo-blocks'), value: 'underline' },
	{
		label: __('Underline Oveline', 'zolo-blocks'),
		value: 'underline overline',
	},
];

export const fontStyleOptions = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('Normal', 'zolo-blocks'), value: 'normal' },
	{ label: __('Italic', 'zolo-blocks'), value: 'italic' },
	{ label: __('Oblique', 'zolo-blocks'), value: 'oblique' },
];

export const LHLS_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];