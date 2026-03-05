import { __ } from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-cloud-list';

export const CLOUD_SHAPES = [
    { label: __('Sphere', 'zoloblocks'), value: 'sphere' },
    { label: __('H-Cylinder', 'zoloblocks'), value: 'hcylinder' },
    { label: __('V-Cylinder', 'zoloblocks'), value: 'vcylinder' },
    { label: __('H-Ring', 'zoloblocks'), value: 'hring' },
    { label: __('V-Ring', 'zoloblocks'), value: 'vring' },
];

// ZoloChoose options – short text labels for button group
export const ROTATION_LOCK_CHOOSE = [
    { label: __('None', 'zoloblocks'), value: '' },
    { label: 'X', value: 'x' },
    { label: 'Y', value: 'y' },
    { label: 'XY', value: 'xy' },
];

export const TRIGGER_CHOOSE = [
    { label: __('Always', 'zoloblocks'), value: 'always' },
    { label: __('Hover', 'zoloblocks'), value: 'hover' },
];

export const CURSOR_TYPES = [
    { label: __('Pointer', 'zoloblocks'), value: 'pointer' },
    { label: __('Crosshair', 'zoloblocks'), value: 'crosshair' },
    { label: __('Text', 'zoloblocks'), value: 'text' },
    { label: __('Wait', 'zoloblocks'), value: 'wait' },
    { label: __('Progress', 'zoloblocks'), value: 'progress' },
    { label: __('Default', 'zoloblocks'), value: 'default' },
];

export const WEIGHT_MODES = [
    { label: __('Size', 'zoloblocks'), value: 'size' },
    { label: __('Colour', 'zoloblocks'), value: 'colour' },
    { label: __('Both', 'zoloblocks'), value: 'both' },
    { label: __('BG Colour', 'zoloblocks'), value: 'bgcolour' },
    { label: __('BG Outline', 'zoloblocks'), value: 'bgoutline' },
    { label: __('Outline', 'zoloblocks'), value: 'outline' },
];
