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
