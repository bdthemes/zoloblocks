/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'brand-child';
// Presets
export const PRESETS = [
	{ label: __( 'Default', 'zolo-blocks' ), value: 'style-1' },
	{ label: __( 'Style 1', 'zolo-blocks' ), value: 'style-1' },
	{ label: __( 'Style 2', 'zolo-blocks' ), value: 'style-2' },
	{ label: __( 'Style 3', 'zolo-blocks' ), value: 'style-3' },
	{ label: __( 'Style 4', 'zolo-blocks' ), value: 'style-4' },
	{ label: __( 'Style 5', 'zolo-blocks' ), value: 'style-5' },
	{ label: __( 'Style 6', 'zolo-blocks' ), value: 'style-6' },
	{ label: __( 'Style 7', 'zolo-blocks' ), value: 'style-7' },
	{ label: __( 'Style 8', 'zolo-blocks' ), value: 'style-8' },
];

// title tag
export const TITLE_TAG = [
	{
		label: 'H1',
		value: 'h1',
	},
	{
		label: 'H2',
		value: 'h2',
	},
	{
		label: 'H3',
		value: 'h3',
	},
	{
		label: 'H4',
		value: 'h4',
	},
	{
		label: 'H5',
		value: 'h5',
	},
	{
		label: 'H6',
		value: 'h6',
	},
	{
		label: 'Span',
		value: 'span',
	},
	{
		label: 'P',
		value: 'p',
	},
];

// container
export const CONTAINER_BACKGROUND = 'brandContainerBackground';
export const CONTAINER_BORDER = 'brandContainerBorder';
export const CONTAINER_BORDER_RADIUS = 'brandContainerBorderRadius';
export const CONTAINER_BOX_SHADOW = 'brandContainerBoxShadow';

// brand photo
export const BRAND_PHOTO_BG = 'brandPhotoBackground';
export const BRAND_PHOTO_BORDER = 'brandPhotoBorder';
export const BRAND_PHOTO_BORDER_RADIUS = 'brandPhotoBorderRadius';
export const BRAND_PHOTO_BOX_SHADOW = 'brandPhotoBoxShadow';
export const BRAND_PHOTO_MARGIN = 'brandPhotoMargin';
export const BRAND_PHOTO_PADDING = 'brandPhotoPadding';

// title
export const TITLE_ALIGNMENT = 'titleAlignment';
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

// content
export const CONTENT_ALIGNMENT = 'brandContentAlignment';

// link
export const LINK_TEXT_SHADOW = 'linkTextShadow';
export const LINK_MARGIN = 'linkMargin';
export const LINK_TEXT_STROKE = 'linkTextStroke';
