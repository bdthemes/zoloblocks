/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'video';

export const VIDEO_SOURCE = [
    { label: __('Youtube', 'zoloblocks'), value: 'youtube' },
    { label: __('Vimeo', 'zoloblocks'), value: 'vimeo' },
    { label: __('Custom', 'zoloblocks'), value: 'custom' },
];

export const VIDEO_ALIGN = 'videoAlign';
export const POPUP_BUTTON_ALIGNMENT = 'popupButtonAlignment';
