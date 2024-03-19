/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'beaf-slider';

export const CAPTION_ITEM_ALIGNMENT = 'captionItemAlignment';
export const BEFORE_LABEL_BG = 'beforeLabelBg';
export const BEFORE_BORDER = 'beforeBorder';
export const BEFORE_RADIUS = 'beforeRadius';
export const BEFORE_MARGIN = 'beforeMargin';
export const BEFORE_PADDING = 'beforePadding';
//after label
export const AFTER_LABEL_BG = 'afterLabelBg';
export const AFTER_BORDER = 'afterBorder';
//control line
export const LINE_THICKNESS = 'lineThickness';
export const THICKNESS_BG = 'thicknessBg';
export const LINE_BOX_SHADOW = 'lineBoxShadow';
//Arrow btn
export const ARROW_BTN_WIDTH = 'arrowBtnWidth';
export const ARROW_BTN_HEIGHT = 'arrowBtnHeight';
export const ARROW_BTN_BORDER = 'arrowBtnBorder';
export const ARROW_BTN_RADIUS = 'arrowBtnRadius';
export const ARROW_BTN_BG = 'arrowBtnBg';
export const ARROW_SIZE = 'arrowSize';

//slide position option
export const SLIDE_POSITION = [
    {
        label: __('Vertical', 'zolo-blocks'),
        value: false,
    },
    {
        label: __('Horizontal', 'zolo-blocks'),
        value: true,
    },
];

export const NORMAL_TAB_OPTION = [
    { label: __('Normal'), value: 'normal' },
    { label: __('After'), value: 'hover' },
];

export const NORMAL_CONTROL_OPTION = [
    { label: __('Line'), value: 'normal' },
    { label: __('Button'), value: 'hover' },
];
