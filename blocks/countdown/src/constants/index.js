/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'countDown';

export const PRESETS = [
    { label: 'Presets 1', value: 'zolo-countdown-style-1' },
    { label: 'Presets 2', value: 'zolo-countdown-style-2' },
    { label: 'Presets 3', value: 'zolo-countdown-style-3' },
    { label: 'Presets 4', value: 'zolo-countdown-style-4' },
];

export const SEPARATOR_POSITIONS = [
    {
        label: 'Colon',
        value: ':',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7143" cy="9.71429" r="0.714286" stroke="#4D4D4D" stroke-width="1.5" />
                <circle cx="11.7143" cy="15.2857" r="0.714286" stroke="#4D4D4D" stroke-width="1.5" />
            </svg>
        ),
    },
    {
        label: 'Line',
        value: '|',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7L12 17" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Slash',
        value: '/',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.9028 7.92896L9.09713 16.0711"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        ),
    },
];

// Block Settings
export const INNER_ALIGNMENT = 'innerAlignment';
export const LABEL_POSITION = 'labelPosition';
export const COUNTLABEL_MARGIN = 'countLabelMargin';
export const COUNTLABEL_PADDING = 'countLabelPadding';
export const COUNTLABEL_BORDER = 'countLabelBorder';
export const COUNT_LABEL_BG = 'countLabelBg';
export const COUNT_LABEL_RADIUS = 'countLabelRadius';
export const COUNT_BOX_GRID = 'countBoxGrid';
export const GRID_BOX_GAP = 'gridBoxGap';
export const ALLBOX_PADDING = 'allBoxPadding';
export const SEPERATR_SPACING = 'separatrSpacing';
export const SEPARATOR_TOP_SPACING = 'seperatorTopSpacing';
export const BOX_SHADOW = 'boxShadow';
export const BOX_SHADOW_HOVER = 'boxShadowHover';
export const COUNT_BG = 'countBoxBG';
export const COUNT_MARGIN = 'countMargin';
export const COUNT_BORDER = 'countBorderStyle';
// Number
export const COUNTNUM_BORDER = 'countNumBorder';
export const COUNTNUM_PADDING = 'countNumPadding';
export const COUNTNUM_MARGIN = 'countNumMargin';
export const COUNT_NUM_BG = 'countNumbg';
export const COUNT_NUM_RADIUS = 'countNumRadius';

export const LABEL_POSITION_OPTION = [
    {
        label: 'Top',
        value: 'column',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={6} y={16} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={10} y={8} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Buttom',
        value: 'column-reverse',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={6} y={8} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={10} y={12} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];
