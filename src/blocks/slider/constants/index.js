/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'slider';

// slider content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_PADDING = 'contentPadding';
export const SLIDER_HEIGHT = 'sliderHeight';

// Pagination Types
export const PAGINATION_TYPES = [
    { label: __('Bullets', 'zoloblocks'), value: 'bullets' },
    { label: __('Fraction', 'zoloblocks'), value: 'fraction' },
    { label: __('Progress Bar', 'zoloblocks'), value: 'progressbar' },
];

export const PROGRESS_DIRECTIONS = [
    {
        label: 'Top',
        value: 'top',
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.73 8.32h6.22M15.73 12.41h6.22M15.73 16.5h6.22M6.53 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM12.05 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.23 7H3.99a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'bottom',
        icon: (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 8.32h6.22M3 12.41h6.22M3 16.5h6.22M16.26 10.75a.58.58 0 1 0 0-1.16.58.58 0 0 0 0 1.16zM21.78 13.7l-.84-.84c-.29-.29-.68-.45-1.09-.45-.41 0-.8.16-1.09.45l-4.71 4.71"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.96 7h-7.24a.99.99 0 0 0-.99.99v8.84c0 .547.443.99.99.99h7.24a.99.99 0 0 0 .99-.99V7.99a.99.99 0 0 0-.99-.99z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

// Slide Effects
export const SLIDER_EFFECTS = [
    { label: __('Slide', 'zoloblocks'), value: 'slide' },
    { label: __('Fade', 'zoloblocks'), value: 'fade' },
    { label: __('Cube', 'zoloblocks'), value: 'cube' },
    { label: __('Coverflow', 'zoloblocks'), value: 'coverflow' },
    { label: __('Flip', 'zoloblocks'), value: 'flip' },
];

export const NAV_POSITIONS = [
    { label: __('Center Center', 'zoloblocks'), value: 'center-center' },
    { label: __('Bottom Right', 'zoloblocks'), value: 'bottom-right' },
    { label: __('Bottom Left', 'zoloblocks'), value: 'bottom-left' },
    { label: __('Bottom Center', 'zoloblocks'), value: 'bottom-center' },
    { label: __('Top Right', 'zoloblocks'), value: 'top-right' },
    { label: __('Top Left', 'zoloblocks'), value: 'top-left' },
];

export const PAGI_POSITIONS = [
    { label: __('Bottom Center', 'zoloblocks'), value: 'bottom-center' },
    { label: __('Bottom Right', 'zoloblocks'), value: 'bottom-right' },
    { label: __('Bottom Left', 'zoloblocks'), value: 'bottom-left' },
    { label: __('Center Right', 'zoloblocks'), value: 'center-right' },
    { label: __('Center Left', 'zoloblocks'), value: 'center-left' },
];

// Navigation settings
export const NAV_WIDTH = 'navWidth';
export const NAV_HEIGHT = 'navHeight';
export const NAV_BORDER = 'navBorder';
export const NAV_BORDER_RADIUS = 'navBorderRadius';
export const NAV_BG = 'navBg';
export const NAV_HOVER_BG = 'navHoverBg';
export const NAV_ICON_SIZE = 'navIconSize';

// Pagination settings
export const PAGI_MARGIN = 'pagiMargin';
export const PAG_WIDTH = 'pagWidth';
export const PAG_HEIGHT = 'pagHeight';
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBorderRadius';
export const PAG_BG = 'pagBg';
export const PAG_SPACING = 'pagSpacing';
export const PAG_VERTICAL_OFFSET = 'pagVerticalOffset';

// Active Pagination
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';
export const APAG_BORDER = 'apagBorder';
export const APAG_BORDER_RADIUS = 'apagBorderRadius';
export const APAG_BG = 'apagBg';
