/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'slider';

// slider content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_PADDING = 'contentPadding';
export const SLIDER_HEIGHT = 'sliderHeight';

// Content Position
export const CONTENT_POSITIONS = [
    { label: __('Center Center', 'zoloblocks'), value: '' },
    { label: __('Center Left', 'zoloblocks'), value: 'content-center-left' },
    { label: __('Center Right', 'zoloblocks'), value: 'content-center-right' },
    { label: __('Bottom Left', 'zoloblocks'), value: 'content-bottom-left' },
    { label: __('Bottom Right', 'zoloblocks'), value: 'content-bottom-right' },
    { label: __('Bottom Center', 'zoloblocks'), value: 'content-bottom-center' },
    { label: __('Top Left', 'zoloblocks'), value: 'content-top-left' },
    { label: __('Top Right', 'zoloblocks'), value: 'content-top-right' },
    { label: __('Top Center', 'zoloblocks'), value: 'content-top-center' },
];

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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M2.04992 18.3333L17.9499 18.3333C18.1616 18.3333 18.3333 18.1702 18.3333 17.9691L18.3333 7.51908C18.3333 7.31796 18.1616 7.15492 17.9499 7.15492L2.04992 7.15492C1.83821 7.15492 1.66659 7.31796 1.66659 7.51908L1.66659 17.9691C1.66659 18.1702 1.83821 18.3333 2.04992 18.3333Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    style={{ stroke: 'none' }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.57495 2.49995C8.57495 1.71295 9.21295 1.07495 9.99995 1.07495L17.5416 1.07495C18.3286 1.07495 18.9666 1.71295 18.9666 2.49995C18.9666 3.28696 18.3286 3.92495 17.5416 3.92495L9.99995 3.92495C9.21294 3.92495 8.57495 3.28696 8.57495 2.49995Z"
                    fill="#E6E6E6"
                />
                <path d="M2.45825 2.5L9.99992 2.5" stroke="#4D4D4D" strokeWidth="3.42" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3916 12.7363L16.2 12.7363" stroke="#4D4D4D" strokeWidth="1.24" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.2 12.7363L15.175 11.628" stroke="#4D4D4D" strokeWidth="1.24" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.2 12.7364L15.1666 13.8606" stroke="#4D4D4D" strokeWidth="1.24" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M6.59985 12.7363L3.79152 12.7363"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.79165 12.7363L4.81665 11.628"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.79183 12.7364L4.8335 13.8606"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M17.95 1.66675H2.04996C1.83825 1.66675 1.66663 1.82979 1.66663 2.03091V12.4809C1.66663 12.682 1.83825 12.8451 2.04996 12.8451H17.95C18.1617 12.8451 18.3333 12.682 18.3333 12.4809V2.03091C18.3333 1.82979 18.1617 1.66675 17.95 1.66675Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    style={{ stroke: 'none' }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.57495 17.5C8.57495 16.7129 9.21295 16.075 9.99995 16.075H17.5416C18.3286 16.075 18.9666 16.7129 18.9666 17.5C18.9666 18.287 18.3286 18.925 17.5416 18.925H9.99995C9.21295 18.925 8.57495 18.287 8.57495 17.5Z"
                    fill="#E6E6E6"
                />
                <path d="M2.45825 17.5H9.99992" stroke="#4D4D4D" strokeWidth="3.42" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.60826 7.26367H3.79993" stroke="#4D4D4D" strokeWidth="1.24" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M3.79993 7.26367L4.82493 8.37201"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.79993 7.26357L4.83326 6.1394"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M13.4001 7.26367H16.2085" stroke="#4D4D4D" strokeWidth="1.24" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M16.2083 7.26367L15.1833 8.37201"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.2082 7.26357L15.1665 6.1394"
                    stroke="#4D4D4D"
                    strokeWidth="1.24"
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
export const NAV_PADDING = 'navPadding';
export const NAV_MARGIN = 'navMargin';
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
