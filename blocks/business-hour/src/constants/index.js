/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'businessHour';
//business item working Day
export const BUSINESS_ITEM_BG = 'businessHourBG';
export const BUSINESS_ITEM_ODD_BG = 'businessHourOddBg';
export const BUSINESS_ITEM_RADIUS = 'businessItemRadius';
export const BUSINESS_ITEM_BORDER = 'businessItemBorder';
export const BUSINESS_ITEM_MARGIN = 'businessItemMargin';
export const BUSINESS_ITEM_PADDING = 'businessItemPadding';

//Days
export const DAYS_BG = 'daysBg';
export const DAYS_RADIUS = 'daysRadius';
export const DAYS_PADDING = 'daysPadding';
//closed day

export const CLOSED_DAYS_BG = 'closedDayBg';
export const CLOSED_DAYS_RADIUS = 'closedDayRadius';
export const CLOSED_DAYS_PADDING = 'closedDayPadding';
//times
export const TIMES_BG = 'timesBg';
export const TIMES_RADIUS = 'timesRadius';
export const TIMES_PADDING = 'timesPadding';

//closed time
export const CLOSED_TIMES_BG = 'closedTimeBg';
export const CLOSED_TIMES_RADIUS = 'closedTimeRadius';
export const CLOSED_TIMES_PADDING = 'closedTimePadding';

//option preset

export const PRESETOPTION = [
    { label: 'Preset-1', value: 'zolo-biz-hours-style-1' },
    { label: 'preset-2', value: 'zolo-biz-hours-style-2' },
];

export const PANEL_OPTION = [
    { label: 'Odd', value: 'normal' },
    { label: 'Even', value: 'hover' },
];

export const ITEM_OPTION = [
    { label: 'Business Item', value: 'normal' },
    { label: 'Closed Item', value: 'hover' },
];
export const DAYS_OPTION = [
    { label: 'Working Days', value: 'normal' },
    { label: 'Closed', value: 'hover' },
];

export const TIME_OPTION = [
    { label: 'Working Times', value: 'normal' },
    { label: 'Closed', value: 'hover' },
];
