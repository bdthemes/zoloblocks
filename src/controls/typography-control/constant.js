import { __ } from '@wordpress/i18n';

export const sizeUnitTypes = [
    { label: 'px', value: 'px' },
    { label: '%', value: '%' },
    { label: 'em', value: 'em' },
];

export const fontWeightOptions = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('100', 'zoloblocks'), value: '100' },
    { label: __('200', 'zoloblocks'), value: '200' },
    { label: __('300', 'zoloblocks'), value: '300' },
    { label: __('400', 'zoloblocks'), value: '400' },
    { label: __('500', 'zoloblocks'), value: '500' },
    { label: __('600', 'zoloblocks'), value: '600' },
    { label: __('700', 'zoloblocks'), value: '700' },
    { label: __('800', 'zoloblocks'), value: '800' },
    { label: __('900', 'zoloblocks'), value: '900' },
];

export const textTransformOptions = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('None', 'zoloblocks'), value: 'none' },
    { label: __('Lowercase', 'zoloblocks'), value: 'lowercase' },
    { label: __('Capitalize', 'zoloblocks'), value: 'capitalize' },
    { label: __('Uppercase', 'zoloblocks'), value: 'uppercase' },
];

export const textDecorationOptions = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('None', 'zoloblocks'), value: 'initial' },
    { label: __('Overline', 'zoloblocks'), value: 'overline' },
    { label: __('Line Through', 'zoloblocks'), value: 'line-through' },
    { label: __('Underline', 'zoloblocks'), value: 'underline' },
    {
        label: __('Underline Oveline', 'zoloblocks'),
        value: 'underline overline',
    },
];

export const fontStyleOptions = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('Normal', 'zoloblocks'), value: 'normal' },
    { label: __('Italic', 'zoloblocks'), value: 'italic' },
    { label: __('Oblique', 'zoloblocks'), value: 'oblique' },
];

export const LHLS_UNITS = [
    { label: 'px', value: 'px' },
    { label: 'em', value: 'em' },
];
