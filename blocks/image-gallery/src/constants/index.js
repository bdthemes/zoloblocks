/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-image-gallery';

// Presets
// export const PRESETS = [
//     { label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
//     { label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
// ];

// Grid
export const COLUMN_COUNT = 'columnCount';
export const COLUMN_GAP = 'columnGap';

// Container
export const CONTAINER_BORDER = 'containerBorder';
export const CONTAINER_HOVER_BORDER = 'containerHoverBorder';
export const CONTAINER_BACKGROUND = 'containerBackground';
export const CONTAINER_MARGIN = 'containerMargin';
export const CONTAINER_PADDING = 'containerPadding';
export const CONTAINER_BORDER_RADIUS = 'containerBorderRadius';
export const CONTAINER_BOX_SHADOW = 'containerBoxShadow';
export const CONTAINER_HOVER_BOX_SHADOW = 'containerHoverBoxShadow';
export const CONTAINER_HOVER_BACKGROUND = 'container_hover_background';

// Image
export const IMAGE_BORDER = 'imageBorder';
export const IMAGE_BORDER_RADIUS = 'imageBorderRadius';
export const IMAGE_BOX_SHADOW = 'imageBoxShadow';
export const IMAGE_BACKGROUND = 'imageBackground';
export const IMAGE_HOVER_BOX_SHADOW = 'imageHoverBoxShadow';
export const IMAGE_HOVER_BACKGROUND = 'imageHoverBackground';
export const IMAGE_PADDING = 'imagePadding';
export const IMAGE_HEIGHT = 'imageHeight';

// Heading
export const HEADING_BORDER = 'headingBorder';
export const HEADING_BACKGROUND = 'headingBackground';
export const HEADING_MARGIN = 'headingMargin';
export const HEADING_PADDING = 'headingPadding';
export const HEADING_BORDER_RADIUS = 'headingBorderRadius';
export const HEADING_BOX_SHADOW = 'headingBoxShadow';

// Zoom Icon
export const ZOOM_ICON_PADDING = 'zoomIconPadding';
export const ZOOM_ICON_BORDER_RADIUS = 'zoomIconBorderRadius';
export const ZOOM_ICON_BORDER = 'zoomIconBorder';
export const ZOOM_ICON_BOX_SHADOW = 'zoomIconBoxShadow';
export const ZOOM_ICON_BG_COLOR = 'zoomIconBgColor';
export const ZOOM_ICON_HOVER_BOX_SHADOW = 'zoomIconHoverBoxShadow';
export const ZOOM_ICON_BG_HOVER_COLOR = 'zoomIconBgHoverColor';
export const ZOOM_ICON_SIZE = 'zoomIconSize';

// Overlay BG
export const OVERLAY_BG_COLOR = 'overlayBgColor';

// MPA Animations
export const MPA_ANIMATIONS = [
    {
        label: __('Zoom', 'zolo-blocks'),
        value: 'zolo-zoom-in',
    },
    {
        label: __('Newspaper', 'zolo-blocks'),
        value: 'zolo-newspaper',
    },
    {
        label: __('Move Horizontal', 'zolo-blocks'),
        value: 'zolo-move-horizontal',
    },
    {
        label: __('Move Top', 'zolo-blocks'),
        value: 'zolo-move-form-top',
    },
    {
        label: __('3d Unfold', 'zolo-blocks'),
        value: 'zolo-3d-unfold',
    },
    {
        label: __('Zoom Out', 'zolo-blocks'),
        value: 'zolo-zoom-out',
    },
];
