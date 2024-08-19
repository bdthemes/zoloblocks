const {
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateResRangeAttributies,
} = window.zoloModule;

import {
    QR_CODE_ALIGN,
    QR_CODE_BORDER_RADIUS,
    QR_CODE_PADDING,
    QR_CODE_BORDER,
    WRAP_QR_CODE_BORDER,
    WRAP_QR_CODE_BORDER_RADIUS,
    WRAP_QR_CODE_PADDING,
    WRAP_QR_CODE_BOX_SHADOW,
    BADGE_QR_CODE_BORDER,
    BADGE_QR_CODE_BORDER_RADIUS,
    BADGE_QR_CODE_PADDING,
    BADGE_QR_CODE_BOX_SHADOW,
    BADGE_QR_CODE_MARGIN,
    BADGE_ICON_SIZE,
} from './constants/index';

import * as typographyObjs from './constants/typoPrefixConstant';

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

    badgeStyle: {
        type: 'string',
        default: 'zolo-badge-style-1',
    },

    showBadge: {
        type: 'boolean',
        default: false,
    },

    showBadgeIcon: {
        type: 'boolean',
        default: false,
    },

    badgeText: {
        type: 'string',
        default: 'Scan me',
    },

    badgeIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 32C170.5 32 192 53.49 192 80V176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144zM128 96H64V160H128V96zM144 288C170.5 288 192 309.5 192 336V432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144zM128 352H64V416H128V352zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM320 160H384V96H320V160zM352 448H384V480H352V448zM448 480H416V448H448V480zM416 288H448V416H352V384H320V480H256V288H352V320H416V288z"/></svg>',
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

    wrapBackgroundColor: {
        type: 'string',
    },

    badgeTextColor: {
        type: 'string',
    },

    badgeBackgroundColor: {
        type: 'string',
    },
    badgeBackgroundArrowColor: {
        type: 'string',
    },
    ...generateBorderAttributies(QR_CODE_BORDER),
    ...generateDimensionAttributes(QR_CODE_BORDER_RADIUS),
    ...generateResAlignmentAttributies(QR_CODE_ALIGN),
    ...generateBorderAttributies(WRAP_QR_CODE_BORDER),
    ...generateDimensionAttributes(WRAP_QR_CODE_BORDER_RADIUS),
    ...generateDimensionAttributes(WRAP_QR_CODE_PADDING),
    ...generateBoxShadowAttributies(WRAP_QR_CODE_BOX_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    ...generateBorderAttributies(BADGE_QR_CODE_BORDER),
    ...generateDimensionAttributes(BADGE_QR_CODE_BORDER_RADIUS),
    ...generateDimensionAttributes(BADGE_QR_CODE_PADDING),
    ...generateDimensionAttributes(BADGE_QR_CODE_MARGIN),
    ...generateBoxShadowAttributies(BADGE_QR_CODE_BOX_SHADOW),
    ...generateResRangeAttributies(BADGE_ICON_SIZE),
};

export default attributes;
