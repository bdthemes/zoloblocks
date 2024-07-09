/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'container';

export const PB_WIDTH = 'pbWidth';
export const PB_BORDER = 'pbBorder';
export const PB_BRADIUS = 'pbBradius';
export const PB_PADDING = 'pbPadding';
export const PB_BG = 'pbBg';
export const PB_OVERLAY_BG = 'pbOverlayBg';
export const CB_TOP_OFFSET = 'cbTopOffset';
export const CB_RIGHT_OFFSET = 'cbRightOffset';
export const CB_LEFT_OFFSET = 'cbBottomOffset';

export const CONTENT_POS = [
    {
        label: __('Top', 'zoloblocks'),
        value: 'inp_top',
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
        label: __('Bottom', 'zoloblocks'),
        value: 'inp_bottom',
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

export const PB_POSITIONS = [
    { label: __('Top Left', 'zoloblocks'), value: 'pbp_top_left' },
    { label: __('Top Center', 'zoloblocks'), value: 'pbp_top_center' },
    { label: __('Top Right', 'zoloblocks'), value: 'pbp_top_right' },
    { label: __('Center Left', 'zoloblocks'), value: 'pbp_center_left' },
    { label: __('Center Center', 'zoloblocks'), value: 'pbp_center_center' },
    { label: __('Center Right', 'zoloblocks'), value: 'pbp_center_right' },
    { label: __('Bottom Left', 'zoloblocks'), value: 'pbp_bottom_left' },
    { label: __('Bottom Center', 'zoloblocks'), value: 'pbp_bottom_center' },
    { label: __('Bottom Right', 'zoloblocks'), value: 'pbp_bottom_right' },
];

export const POPUP_TYPES = [
    { label: __('Info Bar', 'zoloblocks'), value: 'info_bar' },
    { label: __('Popup Box', 'zoloblocks'), value: 'popup_box' },
];
