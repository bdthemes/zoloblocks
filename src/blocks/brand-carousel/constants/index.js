/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'brandCarousel';

// Presets
export const PRESETS = [
    { label: __('Basic', 'zoloblocks'), value: 'zb-brand-basic-style' },
    { label: __('Style 1', 'zoloblocks'), value: 'zb-brand-style-1' },
    { label: __('Style 2', 'zoloblocks'), value: 'zb-brand-style-2' },
    { label: __('Style 3 (Pro)', 'zoloblocks'), value: 'zb-brand-style-3', disabled: true },
];

// icon types
export const LINK_TYPES = [
    {
        label: __('Global', 'zoloblocks'),
        value: 'logo__global',
    },
    {
        label: __('Label', 'zoloblocks'),
        value: 'logo__label',
    },
    {
        label: __('Title', 'zoloblocks'),
        value: 'logo__title',
    },
];

export const LINK_TYPES_BASIC = [
    {
        label: __('Global', 'zoloblocks'),
        value: 'logo__global',
    },
];

export const CAROUSEL_EFFECTS = [
    { label: __('Slide', 'zoloblocks'), value: 'slide' },
    { label: __('Coverflow', 'zoloblocks'), value: 'coverflow' },
];

// Grid
export const GRID_COLUMNS = 'gridColumns';
export const GRID_GAP = 'gridGap';

// global style for child blocks
// container
export const CONTAINER_HEIGHT = 'containerHeight';
export const CONTAINER_BG = 'containerBg';
export const CONTAINER_H_BG = 'containerHBg';
export const CONTAINER_BORDER = 'containerBorder';
export const CONTAINER_BORDER_RADIUS = 'containerBorderRadius';
export const CONTAINER_BOX_SHADOW = 'containerBoxShadow';
export const CONTAINER_MARGIN = 'containerMargin';
export const CONTAINER_PADDING = 'containerPadding';

//  photo
export const BRAND_PHOTO_BG = 'photoBackground';
export const BRAND_PHOTO_BORDER = 'photoBorder';
export const BRAND_PHOTO_BORDER_RADIUS = 'photoBorderRadius';
export const BRAND_PHOTO_BOX_SHADOW = 'photoBoxShadow';
export const BRAND_PHOTO_MARGIN = 'photoMargin';
export const BRAND_PHOTO_PADDING = 'photoPadding';

// title
export const TITLE_ALIGNMENT = 'titleAlignment';
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

// content
export const CONTENT_ALIGNMENT = 'ContentAlignment';
export const CONTENT_PADDING = 'ContentPadding';
export const CONTENT_BG = 'ContentBg';

// link
export const LINK_TEXT_SHADOW = 'linkTextShadow';
export const LINK_MARGIN = 'linkMargin';
export const LINK_TEXT_STROKE = 'linkTextStroke';

// image
export const IMAGE_HEIGHT = 'imageHeight';
export const IMAGE_WIDTH = 'imageWidth';

// Carousel Columns
export const CAROUSEL_COLUMNS = 'carouselColumns';
export const CAROUSEL_GAP = 'carouselGap';
export const THUMBNAIL_HEIGHT = 'thumbHeight';

// Navigation settings
export const NAV_WIDTH = 'navWidth';
export const NAV_HEIGHT = 'navHeight';
export const NAV_OFFSET_HORIZONTAL = 'navOffsetHorizontal';
export const NAV_OFFSET_VERTICAL = 'navOffsetVertical';
export const NAV_BORDER = 'navBorder';
export const NAV_BORDER_RADIUS = 'navBorderRadius';
export const NAV_BG = 'navBg';
export const NAV_HOVER_BG = 'navHoverBg';
export const NAV_ICON_SIZE = 'navIconSize';

// Pagination settings
export const PAG_WIDTH = 'pagWidth';
export const PAG_HEIGHT = 'pagHeight';
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBorderRadius';
export const PAG_BG = 'pagBg';
export const PAG_SPACING = 'pagSpacing';
export const PAG_BOTTOM_SPACING = 'pagBottomSpacing';

// Active Pagination
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';
export const APAG_BORDER = 'apagBorder';
export const APAG_BORDER_RADIUS = 'apagBorderRadius';
export const APAG_BG = 'apagBg';
