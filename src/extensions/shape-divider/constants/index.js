import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-shape-block';

//settings tab

export const TB_POSITION = [
    {
        value: 'normal',
        label: __('Top', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Bottom', 'zoloblocks'),
    },
];

export const SHAPE_DIVIDER = [
    {
        label: __('None', 'zoloblocks'),
        value: 'none',
    },
    {
        label: __('Arrow', 'zoloblocks'),
        value: 'arrow',
    },
    {
        label: __('Book', 'zoloblocks'),
        value: 'book',
    },
    {
        label: __('Clouds', 'zoloblocks'),
        value: 'clouds',
    },
    {
        label: __('Curve', 'zoloblocks'),
        value: 'curve',
    },
    {
        label: __('Curve Asymmetrical', 'zoloblocks'),
        value: 'curveasym',
    },
    {
        label: __('Drops', 'zoloblocks'),
        value: 'drops',
    },
    {
        label: __('Mountains', 'zoloblocks'),
        value: 'mountains',
    },
    {
        label: __('Opacity', 'zoloblocks'),
        value: 'opacityFan',
    },
    {
        label: __('Opacity Tilt', 'zoloblocks'),
        value: 'opacityTilt',
    },
    {
        label: __('Pyramids', 'zoloblocks'),
        value: 'pyramids',
    },
    {
        label: __('Semi Circle', 'zoloblocks'),
        value: 'split',
    },
    {
        label: __('Semi Circle Asymmetrical', 'zoloblocks'),
        value: 'stilt',
    },
    {
        label: __('Triangle', 'zoloblocks'),
        value: 'triangle',
    },
    {
        label: __('Triangle Asymmetrical', 'zoloblocks'),
        value: 'triangleAsy',
    },
    {
        label: __('Waves', 'zoloblocks'),
        value: 'waves',
    },
    {
        label: __('Waves Brush', 'zoloblocks'),
        value: 'wavebrush',
    },
    {
        label: __('Wave Pattern', 'zoloblocks'),
        value: 'wavepattern',
    },
    {
        label: __('Zigzag', 'zoloblocks'),
        value: 'zigzag',
    },
];

// style tab
export const TOP_WIDTH_SHAPE = 'topWidthShape';
export const TOP_HEIGHT_SHAPE = 'topHeightShape';
export const BOTTOM_WIDTH_SHAPE = 'bottomWidthShape';
export const BOTTOM_HEIGHT_SHAPE = 'bottomHeightShape';
