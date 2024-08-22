/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'lightbox';

export const LIGHT_BOX_SELECT = [
    {
        label: __('Poster', 'zoloblocks'),
        value: 'poster',
    },
    {
        label: __('Button', 'zoloblocks'),
        value: 'button',
    },
    // {
    //     label: __('Icon', 'zoloblocks'),
    //     value: 'icon',
    // },
];

export const LIGHT_BOX_CONTENT = [
    {
        label: __('Image', 'zoloblocks'),
        value: 'image',
    },
    {
        label: __('Youtube', 'zoloblocks'),
        value: 'youtube',
    },
    {
        label: __('Vimeo', 'zoloblocks'),
        value: 'vimeo',
    },
    {
        label: __('Google Map', 'zoloblocks'),
        value: 'googleMap',
    },
];

export const POSTER_HEIGHT = 'posterHeight';
export const BUTTON_ALIGN = 'buttonAlign';
export const ICON_ALIGN = 'iconAlign';
export const POSTER_BG_COLOR = 'posterBgColor';
export const POSTER_BORDER = 'posterBorder';
export const POSTER_BORDER_RADIUS = 'posterBorderRadius';
export const POSTER_PADDING = 'posterPadding';
export const POSTER_BOX_SHADOW = 'posterBoxShadow';
export const HOVER_POSTER_BG_COLOR = 'hoverPosterBgColor';
export const HOVER_POSTER_BORDER_RADIUS = 'hoverPosterBorderRadius';
export const HOVER_POSTER_BOX_SHADOW = 'hoverPosterBoxShadow';

export const BUTTON_BG_COLOR = 'buttonBgColor';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_PADDING = 'buttonPadding';
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const HOVER_BUTTON_BG_COLOR = 'hoverButtonBgColor';
export const HOVER_BUTTON_BORDER_RADIUS = 'hoverButtonBorderRadius';
export const HOVER_BUTTON_BOX_SHADOW = 'hoverButtonBoxShadow';

