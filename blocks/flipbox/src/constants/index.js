/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'flipbox';

export const FLIPBLOX_SIDE = [
    { label: __('Front', 'zolo-blocks'), value: 'front' },
    { label: __('Back', 'zolo-blocks'), value: 'back' },
];

export const LINK_TYPE = [
    { label: __('Box', 'zolo-blocks'), value: 'box' },
    { label: __('Title', 'zolo-blocks'), value: 'title' },
    { label: __('Button', 'zolo-blocks'), value: 'button' },
];

export const FLIP_EFFECT = [
    { label: __('Flip Left', 'zolo-blocks'), value: '3' },
    { label: __('Flip Right', 'zolo-blocks'), value: '1' },
    { label: __('Flip Top', 'zolo-blocks'), value: '2' },
    { label: __('Flip Bottom', 'zolo-blocks'), value: '4' },
    { label: __('Slide Left', 'zolo-blocks'), value: '7' },
    { label: __('Slide Right', 'zolo-blocks'), value: '5' },
    { label: __('Slide Top', 'zolo-blocks'), value: '8' },
    { label: __('Slide Bottom', 'zolo-blocks'), value: '6' },
    { label: __('Push Top', 'zolo-blocks'), value: '9' },
    { label: __('Push Bottom', 'zolo-blocks'), value: '10' },
];

export const FLIP_TRIGGER_TYPE = [
    { label: __('Hover', 'zolo-blocks'), value: 'hover' },
    { label: __('Click', 'zolo-blocks'), value: 'click' },
];

 //FRONT ITEMS
 export const FLIPBOX_HEIGHT = 'FlipboxHeight';
 export const FLIPBOX_BORDER_RADIUS = 'FrontItemsBorderRadius';

export const FRONT_ITEMS_BORDER = 'FrontItemsBorder';
export const FRONT_ITEMS_BG = 'FrontItemsBg';
export const FRONT_ITEMS_PADDING = 'FrontItemsPadding';

export const BACK_ITEMS_BORDER = 'BackItemsBorder';
export const BACK_ITEMS_BG = 'BackItemsBg';
export const BACK_ITEMS_PADDING = 'BackItemsPadding';





export const FRONT_ICON_SIZE = 'FrontIconSize';
export const FRONT_ICON_BORDER = 'FrontIconBorder';
export const FRONT_ICON_BORDER_RADIUS = 'FrontIconBorderRadius';
export const FRONT_ICON_BG = 'FrontIconBg';
export const FRONT_ICON_PADDING = 'FrontIconPadding';
export const FRONT_ICON_HBG = 'FrontIconHoverBg';
export const FRONT_ICON_MARGIN = 'FrontIconMargin';
export const FRONT_TITLE_MARGIN = 'FrontTitleMargin';


export const BACK_ICON_SIZE = 'BackIconSize';
export const BACK_ICON_BORDER = 'BackIconBorder';
export const BACK_ICON_BORDER_RADIUS = 'BackIconBorderRadius';
export const BACK_ICON_BG = 'BackIconBg';
export const BACK_ICON_PADDING = 'BackIconPadding';
export const BACK_ICON_HBG = 'BackIconHoverBg';
export const BACK_ICON_MARGIN = 'BackIconMargin';
export const BACK_TITLE_MARGIN = 'BackTitleMargin';



