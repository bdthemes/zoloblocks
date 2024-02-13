/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advancedImage';

export const LAYOUTS = [
    { value: 'normal', label: __('Normal', 'zolo-blocks') },
    { value: 'overlay', label: __('Overlay', 'zolo-blocks') },
];

// hover effect
export const HOVER_EFFECTS = [
    { value: '', label: __('None', 'zolo-blocks') },
    { value: 'zoom', label: __('Zoom', 'zolo-blocks') },
    { value: 'fade', label: __('Fade', 'zolo-blocks') },
    { value: 'blur', label: __('Blur', 'zolo-blocks') },
    { value: 'grayscale', label: __('Grayscale', 'zolo-blocks') },
    { value: 'sepia', label: __('Sepia', 'zolo-blocks') },
    { value: 'brightness', label: __('Brightness', 'zolo-blocks') },
    { value: 'contrast', label: __('Contrast', 'zolo-blocks') },
    { value: 'invert', label: __('Invert', 'zolo-blocks') },
    { value: 'saturate', label: __('Saturate', 'zolo-blocks') },
    { value: 'hue-rotate', label: __('Hue Rotate', 'zolo-blocks') },
];

// mask shapes
export const MASK_SHAPES = [
    { value: 'none', label: __('None', 'zolo-blocks') },
    { value: 'circle', label: __('Circle', 'zolo-blocks') },
    { value: 'rounded', label: __('Rounded', 'zolo-blocks') },
];

// mask position
export const MASK_POSITIONS = [
    { value: 'center top', label: __('Center Top', 'zolo-blocks') },
    { value: 'center center', label: __('Center Center', 'zolo-blocks') },
    { value: 'center bottom', label: __('Center Bottom', 'zolo-blocks') },
    { value: 'left top', label: __('Left Top', 'zolo-blocks') },
    { value: 'left center', label: __('Left Center', 'zolo-blocks') },
    { value: 'left bottom', label: __('Left Bottom', 'zolo-blocks') },
    { value: 'right top', label: __('Right Top', 'zolo-blocks') },
    { value: 'right center', label: __('Right Center', 'zolo-blocks') },
    { value: 'right bottom', label: __('Right Bottom', 'zolo-blocks') },
];

// mask repeat
export const MASK_REPEATS = [
    { value: 'no-repeat', label: __('No Repeat', 'zolo-blocks') },
    { value: 'repeat', label: __('Repeat', 'zolo-blocks') },
    { value: 'repeat-x', label: __('Repeat X', 'zolo-blocks') },
    { value: 'repeat-y', label: __('Repeat Y', 'zolo-blocks') },
];

// mask sizes
export const MASK_SIZES = [
    { value: 'auto', label: __('Auto', 'zolo-blocks') },
    { value: 'cover', label: __('Cover', 'zolo-blocks') },
    { value: 'contain', label: __('Contain', 'zolo-blocks') },
];

// photo
export const PHOTO_ALIGN = 'photoAlign';
export const CAPTION_ALIGN = 'captionAlign';

// Block Settings
export const ITEMS_ALIGN = 'itemsAlign';
export const STAR_SIZE = 'starSize';
export const STAR_MARGIN = 'starMargin';

// title
export const TITLE_GAP = 'titleGap';
