/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: 'style-1' },
    { label: __('Preset 2', 'zolo-blocks'), value: 'style-2' },
];

// Block Prefix
export const BLOCK_PREFIX = 'form';

// Label
export const LABEL_MARGIN = 'labelMargin';

// submit button
export const BTN_ALIGNMENT = 'btnAlignment';
export const BTN_BG = 'btnBg';
export const BTN_HBG = 'btnHoverBg';
export const BTN_BORDER = 'btnBorder';
export const BTN_BRADIUS = 'btnBorderRadius';
export const BTN_PADDING = 'btnPadding';
export const BTN_MARGIN = 'btnMargin';

// icon
export const ICON_SIZE = 'iconSize';

// Input Field
export const FIELD_BORDER = 'fieldBorder';
export const FIELD_PADDING = 'fieldPadding';
export const FIELD_BG = 'fieldBg';
export const FIELD_BRADIUS = 'fieldBorderRadius';

// Notification types
export const NOTIFICATION_TYPES = [
    { label: __('Send Mail', 'zolo-blocks'), value: 'send_mail' },
    { label: __('Save Response (Pro)', 'zolo-blocks'), value: 'save_response', disabled: true },
    { label: __('Save Response & Send Mail (Pro)', 'zolo-blocks'), value: 'save_send', disabled: true },
];

// Success types
export const SUCCESS_TYPES = [
    { label: __('Message', 'zolo-blocks'), value: 'message' },
    { label: __('Redirect (Pro)', 'zolo-blocks'), value: 'redirect', disabled: true },
];

// message pos
export const MESSAGE_POS = [
    { label: __('Form Top', 'zolo-blocks'), value: 'form_top' },
    { label: __('Form Bottom', 'zolo-blocks'), value: 'form_bottom' },
];

// success message
export const SCC_BORDER = 'sccBorder';
export const SCC_BRADIUS = 'sccBorderRadius';
export const SCC_BG = 'sccBg';
export const SCC_PADDING = 'sccPadding';

// error message
export const ERR_BORDER = 'errMsgBorder';
export const ERR_BRADIUS = 'errMsgBorderRadius';
export const ERR_BG = 'errMsgBg';
export const ERR_PADDING = 'errMsgPadding';
