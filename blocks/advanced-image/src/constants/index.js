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
    // { value: 'zolo-adi-fade', label: __('Fade', 'zolo-blocks') },
    { value: 'zolo-adi-blur', label: __('Blur', 'zolo-blocks') },
    { value: 'zolo-adi-slide-top', label: __('Slide Top', 'zolo-blocks') },
    { value: 'zolo-adi-slide-left', label: __('Slide Left', 'zolo-blocks') },
    { value: 'zolo-adi-slide-bottom', label: __('Slide Bottom', 'zolo-blocks') },
    { value: 'zolo-adi-slide-right', label: __('Slide Right', 'zolo-blocks') },
    { value: 'zolo-adi-zoom ', label: __('Zoom', 'zolo-blocks') },
    { value: 'zolo-adi-gray ', label: __('Gray Scale', 'zolo-blocks') },
];

// image masking
export const PHOTO_MASK = 'photo';

// photo
export const PHOTO_ALIGN = 'photoAlign';

// caption
export const CAPTION_ALIGN = 'captionAlign';
export const CAPTION_MARGIN = 'captionMargin';

export const IMG_BORDER = 'imgBorder';
export const IMG_BRADIUS = 'imgBradius';
export const IMG_MARGIN = 'imgMargin';
export const IMG_BSHADOW = 'imgBShadow';
export const IMG_HBSHADOW = 'imgHbShadow';

// overlay
export const OVERLAY_BG = 'overlayBg';
export const OVERLAY_BORDER = 'overlayBorder';
export const OVERLAY_BRADIUS = 'overlayBradius';
export const OVERLAY_EDGE_DISTANCE = 'overlayEdgeDistance';

export const CONTENT_PADDING = 'overlayContentPadding';
export const CONTENT_MAX_WIDTH = 'overlayContentMaxWidth';
export const CONTENT_MARGIN = 'overlayContentMargin';

export const HEADING_MARGIN = 'headingMargin';
export const DESC_MARGIN = 'descMargin';

// separator
export const SEPARATOR_WIDTH = 'separatorWidth';
export const SEPARATOR_HEIGHT = 'separatorHeight';
export const SEPARATOR_MARGIN = 'separatorMargin';

export const ITEM_VISIBILITY = [
    {
        label: __('Always', 'zolo-blocks'),
        value: 'always_visible',
    },
    {
        label: __('Hover', 'zolo-blocks'),
        value: 'hover_visible',
    },
];

export const SEPARATOR_STYLES = [
    {
        label: __('None', 'zolo-blocks'),
        value: '',
    },
    {
        label: __('Solid', 'zolo-blocks'),
        value: 'solid',
    },
    {
        label: __('Dotted', 'zolo-blocks'),
        value: 'dotted',
    },
    {
        label: __('Dashed', 'zolo-blocks'),
        value: 'dashed',
    },
    {
        label: __('Double', 'zolo-blocks'),
        value: 'double',
    },
];

export const SEPARATOR_POSITIONS = [
    {
        label: __('Before Title', 'zolo-blocks'),
        value: 'before_title',
    },
    {
        label: __('After Title', 'zolo-blocks'),
        value: 'after_title',
    },
    {
        label: __('After Description', 'zolo-blocks'),
        value: 'after_desc',
    },
];
