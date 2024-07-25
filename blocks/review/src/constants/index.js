/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'review';


// Style Presets
export const STYLE_PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: '' },
    { label: __('Style 2 (Pro)', 'zoloblocks'), value: 'style-preset-2', disabled: true },
];

export const PRESETS = [
    {
        label: 'Left',
        value: 'default',
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
        label: 'Right',
        value: 'style-1',
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

// content alignment
export const CONTENT_ALIGNMENT = 'ContentAlignment';
export const CONTENT_BACKGROUND = 'ContentBackground';
export const CONTENT_BORDER = 'ContentBorder';
export const CONTENT_BORDER_RADIUS = 'ContentBorderRadius';
export const CONTENT_BOX_SHADOW = 'ContentBoxShadow';
export const CONTENT_MARGIN = 'ContentMargin';
export const CONTENT_PADDING = 'ContentPadding';

//  photo
export const REVIEWER_PHOTO_SIZE = 'PhotoSize';
export const REVIEWER_PHOTO_BG = 'PhotoBackground';
export const REVIEWER_PHOTO_BORDER = 'PhotoBorder';
export const REVIEWER_PHOTO_BORDER_RADIUS = 'PhotoBorderRadius';
export const REVIEWER_PHOTO_BOX_SHADOW = 'PhotoBoxShadow';
export const REVIEWER_PHOTO_MARGIN = 'PhotoMargin';
export const REVIEWER_PHOTO_PADDING = 'PhotoPadding';

// review wrapper
export const RW_BACKGROUND = 'rwBackground';
export const RW_BORDER = 'rwBorder';
export const RW_BORDER_RADIUS = 'rwBorderRadius';
export const RW_BOX_SHADOW = 'rwBoxShadow';
export const RW_MARGIN = 'rwMargin';
export const RW_PADDING = 'ContentPadding';


// name margin
export const REVIEWER_NAME_MARGIN = 'NameMargin';

// designation margin
export const REVIEWER_DESIGNATION_MARGIN = 'DesignationMargin';

// testimonail message margin
export const REVIEWER_TESTIMONIAL_MARGIN = 'TestimonialMessageMargin';

//  icons
export const ICONS_SIZE = 'IconsSize';

// Review detail page link icon
export const DPL_BG = 'DPLBg';
export const DPL_BORDER = 'DPLBorder';
export const DPL_BORDER_RADIUS = 'DPLBorderRadius';
export const DPL_PADDING = 'DPLPadding';
export const DPL_MARGIN = 'DPLMargin';
export const DPL_ICON_SIZE = 'DPLIconSize';

// GAP
export const CONTENT_GAP = 'ContentGap';
