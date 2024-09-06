/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'qrcode';

export const QR_CODE_LEVEL = [
    {
        label: __('Low (7%)', 'zoloblocks'),
        value: 'L',
    },
    {
        label: __('Medium (15%)', 'zoloblocks'),
        value: 'M',
    },
    {
        label: __('Qurtile (25%)', 'zoloblocks'),
        value: 'Q',
    },
    {
        label: __('High (30%)', 'zoloblocks'),
        value: 'H',
    },
];

export const QR_CODE_STYLE = [
    {
        label: __('Squares', 'zoloblocks'),
        value: 'squares',
    },
    {
        label: __('Dots', 'zoloblocks'),
        value: 'dots',
    },
    {
        label: __('Fluid', 'zoloblocks'),
        value: 'fluid',
    },
];

export const QR_LOGO_PADDING_STYLE = [
    {
        label: __('Square', 'zoloblocks'),
        value: 'square',
    },
    {
        label: __('Circle', 'zoloblocks'),
        value: 'circle',
    },
];

export const QR_CODE_ALIGN = 'qrCodeAlign';
export const QR_CODE_BORDER_RADIUS = 'qrCodeBorderRadius';
export const QR_CODE_BORDER = 'qrCodeBorder';
export const WRAP_QR_CODE_BORDER = 'wrapQrCodeBorder';
export const WRAP_QR_CODE_BORDER_RADIUS = 'wrapQrCodeBorderRadius';
export const WRAP_QR_CODE_PADDING = 'wrapQrCodePadding';
export const WRAP_QR_CODE_BOX_SHADOW = 'wrapQrCodeBoxShadow';

export const BADGE_QR_CODE_BORDER = 'badgeQrCodeBorder';
export const BADGE_QR_CODE_BORDER_RADIUS = 'badgeQrCodeBorderRadius';
export const BADGE_QR_CODE_PADDING = 'badgeQrCodePadding';
export const BADGE_QR_CODE_MARGIN = 'badgeQrCodeMargin';
export const BADGE_QR_CODE_BOX_SHADOW = 'badgeQrCodeBoxShadow';
export const BADGE_ICON_SIZE = 'badgeIconSize';
