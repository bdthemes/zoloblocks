import { __ } from '@wordpress/i18n';

//Attribute Prefix
export const prefix = 'zolo_';

export const UNIT_TYPES = [
    { label: 'px', value: 'px' },
    { label: '%', value: '%' },
    { label: 'em', value: 'em' },
];

export const NORMAL_HOVER = [
    { label: 'Normal', value: 'normal' },
    { label: 'Hover', value: 'hover' },
];

export const TEXT_ALIGN_OPTIONS = [
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Justify',
        value: 'justify',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={6} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const DEFAULT_ALIGNS = [
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const DEFAULT_ALIGNS_VERTICAL = [
    {
        label: 'Top',
        value: 'top',
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
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'bottom',
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

export const FLEX_ALIGN_OPTIONS = [
    {
        label: 'Top',
        value: 'flex-start',
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
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12L16 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12L2 12" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={16} y={4} width={16} height={8} rx={1} transform="rotate(90 16 4)" stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'flex-end',
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

export const FLEX_HORIZONTAL_OPTIONS = [
    {
        label: 'Left',
        value: 'flex-start',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'flex-end',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

// Flex Properties
export const FLEX_DIRECTIONS = [
    {
        label: 'Row',
        value: 'row',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M17.2781 7.53729L15.3485 5.28601"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.2781 7.53723L15.3485 9.78851"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M17.2781 16.4173L15.3485 14.1774"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.2781 16.4172L15.3485 18.6685"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Column',
        value: 'column',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M7.65393 6.72949L7.65393 17.1923"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.65381 17.1923L9.85767 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.65393 17.1923L5.43889 15.2941"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Row Reverse',
        value: 'row-reverse',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2705 16.391L6.80771 16.391" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.80767 16.3909L8.70593 18.606" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.80767 16.391L8.70593 14.176" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M17.2705 7.65393L6.80771 7.65393"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.80767 7.65381L8.70593 9.85767"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.80767 7.65393L8.70593 5.43889"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M21 3L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Column Reverse',
        value: 'column-reverse',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.60901 17.2705L7.60901 6.80771"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.60908 6.80767L5.39404 8.70593"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.60901 6.80767L9.82405 8.70593"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.3461 17.2705L16.3461 6.80771"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.3462 6.80767L14.1423 8.70593"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.3461 6.80767L18.5611 8.70593"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FLEX_ALIGNS = [
    {
        label: 'Flex Start',
        value: 'flex-start',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.142 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.15051 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46875 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.4974 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Flex End',
        value: 'flex-end',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.858 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.8495 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Stretch',
        value: 'stretch',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.86999 15.69L7.87 8.88" stroke="#4D4D4D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.03003 3.96997L4.03003 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.51 3.96997L20.51 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.67 15.69L16.67 8.88" stroke="#4D4D4D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FLEX_ALIGNS_ROW = [
    {
        label: 'Flex Start',
        value: 'flex-start',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Flex End',
        value: 'flex-end',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Stretch',
        value: 'stretch',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.72 16.64H8.91003" stroke="#4D4D4D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20.48H20.54" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 4H20.54" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.72 7.83997H8.91003" stroke="#4D4D4D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FLEX_JUSTIFIES = [
    {
        label: 'Flex Start',
        value: 'flex-start',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Flex End',
        value: 'flex-end',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Between',
        value: 'space-between',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 7.1615L7.48088 7.1615" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.606 16.8386L7.48088 16.8386" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Around',
        value: 'space-around',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6713 8.21777L7.54619 8.21777" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.606 15.8041L7.48088 15.8041" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Evenly',
        value: 'space-evenly',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.606 8.73425L7.48088 8.73425" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.606 15.2767L7.48088 15.2767" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FLEX_JUSTIFIES_ROW = [
    {
        label: 'Flex Start',
        value: 'flex-start',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.142 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.15051 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46875 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.4974 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Flex End',
        value: 'flex-end',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.858 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.8495 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Between',
        value: 'space-between',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.1615 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.8386 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Around',
        value: 'space-around',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21777 7.32874V16.4538" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8041 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Space Evenly',
        value: 'space-evenly',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.73425 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.2767 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FLEX_WRAPS = [
    {
        label: 'Wrap',
        value: 'wrap',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        label: 'No Wrap',
        value: 'nowrap',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        label: 'Wrap Reverse',
        value: 'wrap-reverse',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

export const HEADING = [
    { label: __('H1', 'zoloblocks'), value: 'h1' },
    { label: __('H2', 'zoloblocks'), value: 'h2' },
    { label: __('H3', 'zoloblocks'), value: 'h3' },
    { label: __('H4', 'zoloblocks'), value: 'h4' },
    { label: __('H5', 'zoloblocks'), value: 'h5' },
    { label: __('H6', 'zoloblocks'), value: 'h6' },
    { label: __('P', 'zoloblocks'), value: 'p' },
    { label: __('Span', 'zoloblocks'), value: 'span' },
];

export const NORMAL_HTML_TAG = [
    { label: __('P', 'zoloblocks'), value: 'p' },
    { label: __('Span', 'zoloblocks'), value: 'span' },
];

export const BORDER_TYPES = [
    { label: __('None', 'zoloblocks'), value: 'none' },
    { label: __('Solid', 'zoloblocks'), value: 'solid' },
    { label: __('Custom', 'zoloblocks'), value: 'custom' },
];

export const SEPERATOR_STYLES = [
    { label: __('Dashed', 'zoloblocks'), value: 'dashed' },
    { label: __('Dotted', 'zoloblocks'), value: 'dotted' },
    { label: __('Double', 'zoloblocks'), value: 'double' },
    { label: __('Groove', 'zoloblocks'), value: 'groove' },
    { label: __('Outset', 'zoloblocks'), value: 'outset' },
    { label: __('Ridge', 'zoloblocks'), value: 'ridge' },
];

export const BACKGROUND_TYPES = [
    {
        label: __('Classic', 'zoloblocks'),
        value: 'classic',
        icon: 'color-picker',
    },
    {
        label: __('Gradient', 'zoloblocks'),
        value: 'gradient',
        icon: 'art',
    }
];

export const BOX_SHADOW_TYPES = [
    {
        label: __('Outer', 'zoloblocks'),
        value: 'outset',
    },
    {
        label: __('Inner', 'zoloblocks'),
        value: 'inset',
    },
];

// position
export const POSITIONS = [
    {
        label: 'Left',
        value: 'row-reverse',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <rect
                    x="7"
                    y="8"
                    width="12"
                    height="8"
                    rx="1"
                    fill="none"
                    stroke="#4D4D4D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                ></rect>
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'row',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Top',
        value: 'column-reverse',
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
        label: 'Bottom',
        value: 'column',
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

// position
export const ICON_POSITIONS = [
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={11} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={3} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={3} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={18} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Top',
        value: 'top',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={6} y={16} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={10} y={8} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'bottom',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={6} y={8} width={12} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={10} y={12} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

// horizontal position
export const ICON_HPOSITIONS = [
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <rect
                    x="7"
                    y="8"
                    width="12"
                    height="8"
                    rx="1"
                    fill="none"
                    stroke="#4D4D4D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                ></rect>
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];
// horizontal position
export const VPOSITIONS = [
    {
        label: __('Top', 'zoloblocks'),
        value: 'top',
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
        value: 'bottom',
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

// social icon text
export const ICON_STATUS = [
    {
        label: __('No Icon', 'zoloblocks'),
        value: 'none',
        icon: (
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={9} cy={9} r={8} stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M3.13904 4.3877L14.3609 14.1124" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: __('Icon & Text', 'zoloblocks'),
        value: 'iconText',
        icon: (
            <svg width={35} height={24} viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 9.5V9" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M23 12H31M23 15H27.7059" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx={12} cy={12} r={8} stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M23 9H33.5" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: __('Only Icon', 'zoloblocks'),
        value: 'iconOnly',
        icon: (
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={9} cy={9} r={8} stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M9 9V13" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 6.5V6" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const ORDER_BY = [
    { label: __('Date', 'zoloblocks'), value: 'date' },
    { label: __('Author', 'zoloblocks'), value: 'author' },
    { label: __('Title', 'zoloblocks'), value: 'title' },
    { label: __('Last modified date', 'zoloblocks'), value: 'modified' },
    { label: __('Post parent ID', 'zoloblocks'), value: 'parent' },
];

export const SORT_ORDER = [
    { label: __('ASC', 'zoloblocks'), value: 'asc' },
    { label: __('DESC', 'zoloblocks'), value: 'desc' },
];

export const PRINT_TAXONOMY = (taxonomy) => {
    let allTax = [];
    for (let tax in taxonomy) {
        allTax.push({ value: tax, label: __(taxonomy[tax], 'zoloblocks') });
    }
    return allTax;
};
export const THUMBNAIL_SIZE = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('Thumbnail', 'zoloblocks'), value: 'thumbnail' },
    { label: __('Medium', 'zoloblocks'), value: 'medium' },
    { label: __('Large', 'zoloblocks'), value: 'large' },
    { label: __('Full', 'zoloblocks'), value: 'full' },
];

// social icon text
export const ICON_BOX_OPTIONS = [
    {
        label: __('Image', 'zoloblocks'),
        value: 'image',
    },
    {
        label: __('Icon', 'zoloblocks'),
        value: 'icon',
    },
];

// Width Types
export const WIDTH_TYPES = [
    {
        label: __('Full', 'zoloblocks'),
        value: 'alignfull',
    },
    {
        label: __('Boxed', 'zoloblocks'),
        value: 'alignwide',
    },
    {
        label: __('Custom', 'zoloblocks'),
        value: 'custom_width',
    },
];

export const CONTENT_WIDTH_TYPES = [
    {
        label: __('Boxed', 'zoloblocks'),
        value: 'alignwide',
    },
    {
        label: __('Full Width', 'zoloblocks'),
        value: 'alignfull',
    },
];

export const OVERFLOWS = [
    { label: __('Auto', 'zoloblocks'), value: 'auto' },
    { label: __('Visible', 'zoloblocks'), value: 'visible' },
    { label: __('Hidden', 'zoloblocks'), value: 'hidden' },
    { label: __('Scroll', 'zoloblocks'), value: 'scroll' },
    { label: __('Clip', 'zoloblocks'), value: 'clip' },
];
export const CONTENT_POSITIONS = [
    { label: __('Select Position', 'zoloblocks'), value: '' },
    { label: __('Relative', 'zoloblocks'), value: 'relative' },
    { label: __('Absolute', 'zoloblocks'), value: 'absolute' },
    { label: __('Fixed', 'zoloblocks'), value: 'fixed' },
];

export const CONTENT_WIDTH = [
    { label: __('Default', 'zoloblocks'), value: 'default' },
    { label: __('Full Width', 'zoloblocks'), value: 'full' },
    { label: __('Inline (auto)', 'zoloblocks'), value: 'inline' },
    { label: __('Custom', 'azoloblocks'), value: 'custom' },
];

export const OBJECT_FITS = [
    { label: __('None', 'zoloblocks'), value: 'none' },
    { label: __('Fill', 'zoloblocks'), value: 'fill' },
    { label: __('Contain', 'zoloblocks'), value: 'contain' },
    { label: __('Cover', 'zoloblocks'), value: 'cover' },
    { label: __('Scale Down', 'zoloblocks'), value: 'scale-down' },
];

// mask shapes
export const MASK_SHAPES = [
    { label: __('None', 'zoloblocks'), value: '' },
    { label: __('Abstract', 'zoloblocks'), value: 'abstract' },
    { label: __('Abstract Brush 1', 'zoloblocks'), value: 'abstract-brush-1' },
    { label: __('Abstract Brush 2', 'zoloblocks'), value: 'abstract-brush-2' },
    { label: __('Aesthetic Blob', 'zoloblocks'), value: 'aesthetic-blob' },
    { label: __('Amorphous Blob', 'zoloblocks'), value: 'amorphous-blob' },
    { label: __('Brush', 'zoloblocks'), value: 'brush' },
    { label: __('Comment', 'zoloblocks'), value: 'comment' },
    { label: __('Container', 'zoloblocks'), value: 'container' },
    { label: __('Hand Drawn Blob', 'zoloblocks'), value: 'hand-drawn-blob' },
    { label: __('Hexagon', 'zoloblocks'), value: 'hexagon' },
    { label: __('Hexagon Blob', 'zoloblocks'), value: 'hexagon-blob' },
    { label: __('Irregular Blob', 'zoloblocks'), value: 'irregular-blob' },
    { label: __('Minimal Round', 'zoloblocks'), value: 'minimal-round' },
    { label: __('Octagon', 'zoloblocks'), value: 'octagon' },
    { label: __('Organic Blob', 'zoloblocks'), value: 'organic-blob' },
    { label: __('Oval Blob', 'zoloblocks'), value: 'oval-blob' },
    { label: __('Pattern', 'zoloblocks'), value: 'pattern' },
    { label: __('Popup 1', 'zoloblocks'), value: 'popup-1' },
    { label: __('Popup 2', 'zoloblocks'), value: 'popup-2' },
    { label: __('Popup 3', 'zoloblocks'), value: 'popup-3' },
    { label: __('Round Brush', 'zoloblocks'), value: 'round-brush' },
    { label: __('Round Design', 'zoloblocks'), value: 'round-design' },
    { label: __('Square Pattern', 'zoloblocks'), value: 'squar-pattern' },
    { label: __('Testimonial', 'zoloblocks'), value: 'testimonial' },
    { label: __('Triangle Blob', 'zoloblocks'), value: 'triangle-blob' },
];

// mask position
export const MASK_POSITIONS = [
    { value: 'center top', label: __('Center Top', 'zoloblocks') },
    { value: 'center center', label: __('Center Center', 'zoloblocks') },
    { value: 'center bottom', label: __('Center Bottom', 'zoloblocks') },
    { value: 'left top', label: __('Left Top', 'zoloblocks') },
    { value: 'left center', label: __('Left Center', 'zoloblocks') },
    { value: 'left bottom', label: __('Left Bottom', 'zoloblocks') },
    { value: 'right top', label: __('Right Top', 'zoloblocks') },
    { value: 'right center', label: __('Right Center', 'zoloblocks') },
    { value: 'right bottom', label: __('Right Bottom', 'zoloblocks') },
];

// mask repeat
export const MASK_REPEATS = [
    { value: 'no-repeat', label: __('No Repeat', 'zoloblocks') },
    { value: 'repeat', label: __('Repeat', 'zoloblocks') },
    { value: 'repeat-x', label: __('Repeat X', 'zoloblocks') },
    { value: 'repeat-y', label: __('Repeat Y', 'zoloblocks') },
];

// mask sizes
export const MASK_SIZES = [
    { value: 'auto', label: __('Auto', 'zoloblocks') },
    { value: 'cover', label: __('Cover', 'zoloblocks') },
    { value: 'contain', label: __('Contain', 'zoloblocks') },
];

export const ANIMATION_TYPES = [
    { label: 'Fade', value: 'fade' },
    // { label: 'Slide', value: 'slide' },
    // { label: 'Scale', value: 'scale' },
    // { label: 'Rotate', value: 'rotate' },
    // { label: 'Flip', value: 'flip' },
    // { label: 'Zoom', value: 'zoom' },
    { label: 'Scale Up', value: 'scaleUp' },
    { label: 'Scale Down', value: 'scaleDown' },
    { label: 'Top', value: 'top' },
    { label: 'Right', value: 'right' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Top Small', value: 'topSmall' },
    { label: 'Right Small', value: 'rightSmall' },
    { label: 'Bottom Small', value: 'bottomSmall' },
    { label: 'Left Small', value: 'leftSmall' },
    { label: 'Top Medium', value: 'topMedium' },
    { label: 'Right Medium', value: 'rightMedium' },
    { label: 'Bottom Medium', value: 'bottomMedium' },
    { label: 'Left Medium', value: 'leftMedium' },
    { label: 'Custom (Pro)', value: 'custom' },
];

export const TRANSFORM_ORIGINS = [
    { label: __('Top'), value: 'top' },
    { label: __('Right'), value: 'right' },
    { label: __('Bottom'), value: 'bottom' },
    { label: __('Left'), value: 'left' },
    { label: __('Center'), value: 'center' },
    { label: __('Initial'), value: 'initial' },
    { label: __('Inherit'), value: 'inherit' },
    { label: __('Revert'), value: 'revert' },
    { label: __('Unset'), value: 'unset' },
    { label: __('Revert Layer'), value: 'revert-layer' },
    { label: 'Custom', value: 'custom' },
];

export const EASING_TYPES = [
    { label: __('Ease Out', 'zoloblocks'), value: 'ease-out' },
    { label: __('Ease In Out', 'zoloblocks'), value: 'ease-in-out' },
    { label: __('Linear', 'zoloblocks'), value: 'linear' },
    { label: __('Custom', 'zoloblocks'), value: 'custom' },
];

export const TRANSLATE_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M2.35461 11.9548H21.6455" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M12 2.35278V21.2396" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ROTATE_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M22.0001 2.21997V8.66997H15.5601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21.7801V15.3301H8.44" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SCALE_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9999 8.16V2L15.8799 2.07" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M16.2598 13.8798H10.0798L10.1398 7.78979"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M10.4299 13.5898L21.7299 2.30981" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export const SKEW_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 4H7.74545L2 20H16.2545L22 4Z"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const OPACITY_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L2 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const FLIP_ICON = (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12H22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2L22 12L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const INCLUDE_BY = [
    { label: __('Authors', 'zoloblocks'), value: 'authors' },
    { label: __('Terms', 'zoloblocks'), value: 'terms' },
];

export const EXCLUDE_BY=[
  {value:'authors'         , label: __('Authors', 'zoloblocks')},
  {value:'current_post'    , label: __('Current Post', 'zoloblocks')},
  {value:'manual_selection', label: __('Manual Selection', 'zoloblocks')},
  {value:'terms'           , label: __('Terms', 'zoloblocks')},
]
export const PAGINARION_TYPE=[
  {label:  __('Default Pagination','zoloblocks'), value: 'normal'},
  {label: __('Ajax Pagination','zoloblocks'), value: 'number'},
  {label: __('Load More-Click','zoloblocks'), value: 'button'},
  {label: __('Load More-Scroll','zoloblocks'), value: 'scroll'}
]
