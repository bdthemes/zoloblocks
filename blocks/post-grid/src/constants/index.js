/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Presets
export const PRESETS = [
  { label: __('Default', 'zolo-blocks'), value: 'default' },
  { label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
  { label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
];

// Block Prefix
export const BLOCK_PREFIX = 'zolo-post-grid';


// conatainer spacing
export const CONTAINER_MARGIN = 'postContainerMargin';
export const CONTAINER_PADDING = 'postContainerPadding';
