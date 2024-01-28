/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'countDown';

// Block Settings
export const SEPARATOR_TYPE = 'separatorType';
export const OVERALL_ALIGNMENT = 'overallAlignment';
export const INNER_ALIGNMENT = 'innerAlignment';
export const LABEL_POSITION = 'labelPosition';
export const BOX_WIDTH = 'boxWidth';
export const GAP_BOX_WIDTH = 'gapBoxWidth';
export const GAP_BETWEEN_DIGITLABEL = 'gapbetweenDigitlabel';
export const ALLBOX_PADDING = 'allBoxPadding';
export const SEPERATR_SPACING = 'separatrSpacing';
export const SEPARATOR_TOP_SPACING = 'seperatorTopSpacing';
export const BOX_SHADOW = 'boxShadow';
export const COUNT_PADDING = 'countPadding';
export const COUNT_MARGIN = 'countMargin';

export const SEPARATOR_OPTION = [
    {
        label: 'Colon',
        value: ':',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Line',
        value: '|',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Slash',
        value: '/',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const LABEL_POSITION_OPTION = [
    {
        label: 'Colon',
        value: ':',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Line',
        value: '|',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="6" width="18" height="4"></rect>
                <rect x="3" y="14" width="18" height="4"></rect>
            </svg>
        ),
    },
];
