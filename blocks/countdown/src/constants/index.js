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
    {
        label: 'Text',
        value: 'text',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.2846 4H11.9376C11.5193 4 11.1182 4.16857 10.8224 4.46863C10.5266 4.76869 10.3605 5.17565 10.3605 5.6V5.744C10.3602 6.02458 10.2872 6.30015 10.1488 6.54307C10.0103 6.78599 9.8114 6.98771 9.57187 7.128L9.23278 7.328C8.99302 7.46843 8.72105 7.54236 8.4442 7.54236C8.16735 7.54236 7.89538 7.46843 7.65562 7.328L7.53733 7.264C7.17542 7.05221 6.74546 6.99476 6.34184 7.10425C5.93821 7.21374 5.59391 7.48123 5.3845 7.848L5.21101 8.152C5.00224 8.51915 4.94561 8.95533 5.05354 9.3648C5.16146 9.77427 5.42514 10.1236 5.78667 10.336L5.90496 10.416C6.14333 10.5556 6.34154 10.7561 6.47988 10.9975C6.61822 11.2389 6.69188 11.5128 6.69355 11.792V12.2C6.69465 12.4819 6.6223 12.7592 6.48382 13.0036C6.34534 13.2481 6.14564 13.451 5.90496 13.592L5.78667 13.664C5.42514 13.8764 5.16146 14.2257 5.05354 14.6352C4.94561 15.0447 5.00224 15.4809 5.21101 15.848L5.3845 16.152C5.59391 16.5188 5.93821 16.7863 6.34184 16.8958C6.74546 17.0052 7.17542 16.9478 7.53733 16.736L7.65562 16.672C7.89538 16.5316 8.16735 16.4576 8.4442 16.4576C8.72105 16.4576 8.99302 16.5316 9.23278 16.672L9.57187 16.872C9.8114 17.0123 10.0103 17.214 10.1488 17.4569C10.2872 17.6998 10.3602 17.9754 10.3605 18.256V18.4C10.3605 18.8243 10.5266 19.2313 10.8224 19.5314C11.1182 19.8314 11.5193 20 11.9376 20H12.2846C12.7029 20 13.104 19.8314 13.3998 19.5314C13.6956 19.2313 13.8618 18.8243 13.8618 18.4V18.256C13.862 17.9754 13.9351 17.6998 14.0735 17.4569C14.2119 17.214 14.4108 17.0123 14.6503 16.872L14.9894 16.672C15.2292 16.5316 15.5012 16.4576 15.778 16.4576C16.0549 16.4576 16.3268 16.5316 16.5666 16.672L16.6849 16.736C17.0468 16.9478 17.4768 17.0052 17.8804 16.8958C18.284 16.7863 18.6283 16.5188 18.8377 16.152L19.0112 15.84C19.22 15.4729 19.2766 15.0367 19.1687 14.6272C19.0608 14.2177 18.7971 13.8684 18.4355 13.656L18.3173 13.592C18.0766 13.451 17.8769 13.2481 17.7384 13.0036C17.5999 12.7592 17.5276 12.4819 17.5287 12.2V11.8C17.5276 11.5181 17.5999 11.2408 17.7384 10.9964C17.8769 10.7519 18.0766 10.549 18.3173 10.408L18.4355 10.336C18.7971 10.1236 19.0608 9.77427 19.1687 9.3648C19.2766 8.95533 19.22 8.51915 19.0112 8.152L18.8377 7.848C18.6283 7.48123 18.284 7.21374 17.8804 7.10425C17.4768 6.99476 17.0468 7.05221 16.6849 7.264L16.5666 7.328C16.3268 7.46843 16.0549 7.54236 15.778 7.54236C15.5012 7.54236 15.2292 7.46843 14.9894 7.328L14.6503 7.128C14.4108 6.98771 14.2119 6.78599 14.0735 6.54307C13.9351 6.30015 13.862 6.02458 13.8618 5.744V5.6C13.8618 5.17565 13.6956 4.76869 13.3998 4.46863C13.104 4.16857 12.7029 4 12.2846 4Z"
                    stroke="#4D4D4D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12.1111 14.6667C13.5839 14.6667 14.7778 13.4728 14.7778 12C14.7778 10.5273 13.5839 9.33337 12.1111 9.33337C10.6384 9.33337 9.44446 10.5273 9.44446 12C9.44446 13.4728 10.6384 14.6667 12.1111 14.6667Z"
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
export const COUNT_BOX_RADIUS = 'countBoxRadius';
export const COUNT_BOX_SIZE = 'countBoxSize';
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
export const COUNTBOX_MARGIN = 'countNumMargin';
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
