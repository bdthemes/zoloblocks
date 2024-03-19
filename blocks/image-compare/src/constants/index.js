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
        label: __('Horizontal', 'zolo-blocks'),
        value: 'horizontal_direction',
    },
    {
        label: __('Vertical', 'zolo-blocks'),
        value: 'vertical_direction',
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

export const HOTIZONTAL_POSITIONS = [
    {
        label: __('Top'),
        value: 'h_top',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4L2 4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        label: __('Center'),
        value: 'h_center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: __('Bottom'),
        value: 'h_bottom',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 20L2 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
];

export const VERTICAL_POSITIONS = [
    {
        label: __('Left'),
        value: 'v_top',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: __('Center'),
        value: 'v_center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: __('Right'),
        value: 'v_bottom',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];
