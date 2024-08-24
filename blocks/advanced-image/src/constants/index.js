/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advancedImage';

export const LAYOUTS = [
    { value: 'normal', label: __('Normal', 'zoloblocks') },
    { value: 'overlay', label: __('Overlay', 'zoloblocks') },
];

// hover effect
export const HOVER_EFFECTS = [
    { value: '', label: __('None', 'zoloblocks') },
    // { value: 'zolo-adi-fade', label: __('Fade', 'zoloblocks') },
    { value: 'zolo-adi-blur', label: __('Blur', 'zoloblocks') },
    { value: 'zolo-adi-slide-top', label: __('Slide Top', 'zoloblocks') },
    { value: 'zolo-adi-slide-left', label: __('Slide Left', 'zoloblocks') },
    { value: 'zolo-adi-slide-bottom', label: __('Slide Bottom', 'zoloblocks') },
    { value: 'zolo-adi-slide-right', label: __('Slide Right', 'zoloblocks') },
    { value: 'zolo-adi-zoo', label: __('Zoom', 'zoloblocks') },
    { value: 'zolo-adi-gray', label: __('Gray Scale', 'zoloblocks') },
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
export const IMG_WIDTH ='imageWidth';
export const IMGMAX_WIDTH='imageMaxWidth';
export const IMG_HEIGHT ='imageHeight';
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
        label: __('Always', 'zoloblocks'),
        value: 'always_visible',
    },
    {
        label: __('Hover', 'zoloblocks'),
        value: 'hover_visible',
    },
];

export const SEPARATOR_STYLES = [
    {
        label: __('None', 'zoloblocks'),
        value: '',
    },
    {
        label: __('Solid', 'zoloblocks'),
        value: 'solid',
    },
    {
        label: __('Dotted', 'zoloblocks'),
        value: 'dotted',
    },
    {
        label: __('Dashed', 'zoloblocks'),
        value: 'dashed',
    },
    {
        label: __('Double', 'zoloblocks'),
        value: 'double',
    },
];

export const SEPARATOR_POSITIONS = [
    {
        label: __('Before Title', 'zoloblocks'),
        value: 'before_title',
    },
    {
        label: __('After Title', 'zoloblocks'),
        value: 'after_title',
    },
    {
        label: __('After Description', 'zoloblocks'),
        value: 'after_desc',
    },
];
