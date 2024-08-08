const { generateResAlignmentAttributies, generateBorderAttributies, generateDimensionAttributes } = window.zoloModule;

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
        default: 'https://zoloblocks.com',
    },
    qrCodeLink: {
        type: 'boolean',
        default: false,
    },
    qrCodeStyle: {
        type: 'string',
        deafult: '#000',
    },
    logoQr: {
        type: 'object',
    },
    logoQrBehind: {
        type: 'boolean',
        default: false,
    },

    codeColor: {
        type: 'string',
        default: '#000',
    },
    backgroundColor: {
        type: 'string',
    },
    qrCodePadding: {
        type: 'number',
        default: '',
    },
    qrCodeLevel: {
        type: 'string',
        default: '',
    },
    qrCodeSize: {
        type: 'number',
        default: 240,
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
        default: '#000',
    },
    eyeRadius: {
        type: 'number',
        default: 0,
    },
    ...generateBorderAttributies(QR_CODE_BORDER),
    ...generateDimensionAttributes(QR_CODE_BORDER_RADIUS),
    ...generateResAlignmentAttributies(QR_CODE_ALIGN),
};

export default attributes;
