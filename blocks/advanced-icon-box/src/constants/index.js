/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';


// Block Prefix
export const BLOCK_PREFIX = 'advanced-icon-box';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
    { label: __('Preset 3', 'zolo-blocks'), value: 'style-3' },
];

// content alignment
export const CONTENT_ALIGNMENT = 'contentAlignment';

// Icon
export const ICON_PADDING = 'iconPadding';
export const ICON_MARGIN = 'iconMargin';
export const ICON_BOX_ALIGNMENT = 'iconBoxAlignment';
export const ICON_BORDER = 'iconBorder';
export const ICON_BOX_SHADOW = 'iconBoxShadow';
export const ICON_HOVER_BOX_SHADOW = 'iconHoverBoxShadow';
export const ICON_BORDER_RADIUS = 'iconBorderRadius';
export const ICON_SIZE = 'iconSize';
export const ICON_TEXT_SPACING = 'iconTextSpacing';

// Button
export const BUTTON_BG_COLOR = 'buttonBgColor';
export const BUTTON_BG_HOVER_COLOR = 'buttonBgHoverColor';
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';
export const BUTTON_ICON_SIZE = 'buttonIconSize';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_MARGIN = 'buttonMargin';
export const BUTTON_PADDING = 'buttonPadding';

// title
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_STROKE = 'titleTextStroke';

// description
export const DESCRIPTION_MARGIN = 'descMargin';

// image
export const ICON_IMAGE_SIZE = 'iconImageSize';
export const IMAGE_BORDER = 'imageBorder';
export const ICON_IMAGE_BORDER_RADIUS = 'iconImageBorderRadius';


// item
export const ITEM_BG = 'itemBg';
export const ITEM_HOVER_BG = 'itemHoverBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BRADIUS = 'itemBorderRadius';
export const ITEM_PADDING = 'itemPadding';
export const ITEM_MARGIN = 'itemMargin';
export const ITEM_BOX_SHADOW = 'itemBoxShadow';
export const ITEM_HBOX_SHADOW = 'itemHoverShadow';


// ribbon style
export const RIBBON_MARGIN = 'ribbonMargin';
export const RIBBON_PADDING = 'ribbonPadding';
export const RIBBON_BORDER = 'ribbonBorder';
export const RIBBON_RADIUS = 'ribbonRadius';
export const RIBBON_BG = 'ribbonBg';
export const RIBBON_POSITIONS = [
    { label: __('Top Left', 'zolo-blocks'), value: 'top__left' },
    { label: __('Top Right', 'zolo-blocks'), value: 'top__right' },
];

// export const RIBBON_ALIGN = [
//     { label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
//     { label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
//     { label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
//     { label: __(<Dashicon icon={'editor-justify'} />), value: 'justify' },
// ];