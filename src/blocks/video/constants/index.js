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

export const POPUP_BTN_ICON_SIZE = 'popupBtnIconSize';
export const POPUP_BTN_BG_COLOR = 'popupBtnBgColor';
export const POPUP_BTN_PADDING = 'popupBtnPadding';
export const POPUP_BTN_MARGIN = 'popupBtnMargin';
export const POPUP_BTN_BORDER_RADIUS = 'popupBtnBorderRadius';
export const POPUP_BTN_BORDER = 'popupBtnBorder';
export const POPUP_BTN_BOX_SHADOW = 'popupBtnBoxShadow';
export const POPUP_BTN_H_BG_COLOR = 'popupBtnHBgColor';
export const POPUP_BTN_H_BOX_SHADOW = 'popupBtnHBoxShadow';

export const POPUP_IMAGE_BORDER = 'popupImageBorder';
export const POPUP_IMAGE_BORDER_RADIUS = 'popupImageBorderRadius';
export const POPUP_IMAGE_PADDING = 'popupImagePadding';
export const POPUP_IMAGE_BG_COLOR = 'popupImageBgColor';
export const INLINE_VIDEO_CONTANER_WIDTH = 'inlineVideoContainerWidth';
export const INLINE_VIDEO_CONTANER_HEIGHT = 'inlineVideoContainerHeight';
