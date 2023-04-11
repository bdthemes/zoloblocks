/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'team-member';

// Presets
export const PRESETS = [
	{ label: __('Default', 'zolo-blocks'), value: '' },
	{ label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
];

// content alignment
export const CONTENT_ALIGNMENT = 'teamContentAlignment';

// team border
export const TEAM_PHOTO_BORDER = 'teamPhotoBorder';

// team border radius
export const TEAM_PHOTO_BORDER_RADIUS = 'teamPhotoBorderRadius';

// box shadow
export const TEAM_PHOTO_BOX_SHADOW = 'teamPhotoBoxShadow';

// team margin
export const TEAM_PHOTO_MARGIN = 'teamPhotoMargin';

// team padding
export const TEAM_PHOTO_PADDING = 'teamPhotoPadding';
