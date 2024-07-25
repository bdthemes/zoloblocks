const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateTextShadowAttributies,
    generateTextStrokeAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import { QR_CODE_ALIGN, QR_CODE_BORDER_RADIUS, QR_CODE_PADDING, QR_CODE_BORDER } from './constants/index';

const attributes = {
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: true,
        },
    },

    qrContent: {
        type: 'string',
        default: 'Qr Code',
    },
    qrCodeLink: {
        type: 'boolean',
        default: false,
    },
    qrCodeStyle: {
        type: 'string',
        default: '',
    },
    logoQr: {
        type: 'object',
    },
    logoQrBehind: {
        type: 'boolean',
        default: false,
    },

    ...generateResAlignmentAttributies(QR_CODE_ALIGN),

    codeColor: {
        type: 'string',
    },
    backgroundColor: {
        type: 'string',
    },
    qrCodePadding: {
        type: 'number',
        default: '',
    },

    ...generateBorderAttributies(QR_CODE_BORDER),
    ...generateDimensionAttributes(QR_CODE_BORDER_RADIUS),

    qrCodeLevel: {
        type: 'string',
        default: '',
    },
    qrCodeSize: {
        type: 'number',
        default: 100,
    },
    qrCodeLevel: {
        type: 'string',
        default: 'M',
    },

    logoWidth: {
        type: 'number',
        default: 48,
    },
    logoOpacity: {
        type: 'number',
        default: 1,
    },
    logoPaddingStyle: {
        type: 'string',
        default: 'square',
    },
    logoPadding: {
        type: 'number',
        default: '',
    },
    eyeColor: {
        type: 'string',
        default: '',
    },
    eyeRadius: {
        type: 'string',
        default: 0,
    },
};

export default attributes;
