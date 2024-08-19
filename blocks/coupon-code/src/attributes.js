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

import {
    COUPON_REV_PADDING,
    COUPON_REV_WIDTH,
    COUPON_SPACE,
    COUPON_ALIGN,
    COUPON_MESS_ALIGN,
    COUPON_MESS_BORDER,
    COUPON_BORDER_RADIUS,
    TOP_COUPON_BG,
    TOP_COUPON_SHADOW,
    BOTTOM_COUPON_BG,
    BOTTOM_BORDER_COLOR,
    BOTTOM_COUPON_SHADOW,
    COUPON_CODE_ALIGN,
    COUPON_CODE_BORDER,
    COUPON_CODE_BORDER_RADIUS,
    CODE_TOP_COUPON_BG,
    CODE_BOTTOM_COUPON_BG,
    CODE_TOP_COUPON_SHADOW,
} from './constants';

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
    preset: {
        type: 'string',
        default: '',
    },
    couponText: {
        type: 'string',
        default: 'Get the deal',
    },
    couponIcon: {
        type: 'string',
        default: '',
    },
    couponCode: {
        type: 'string',
        default: 'ZOLO50',
    },
    enableTriggerLink: {
        type: 'boolean',
        default: false,
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    enableTriggerAction: {
        type: 'boolean',
        default: false,
    },
    couponPlaceHolder: {
        type: 'string',
        default: 'XX-XX-XX',
    },
    fromSelector: {
        type: 'string',
        default: '',
    },
    enableTriggerAttention: {
        type: 'boolean',
        default: false,
    },

    ...generateDimensionAttributes(COUPON_REV_PADDING),
    ...generateResRangeAttributies(COUPON_REV_WIDTH),
    ...generateResRangeAttributies(COUPON_SPACE),
    ...generateResAlignmentAttributies(COUPON_ALIGN),
    ...generateResAlignmentAttributies(COUPON_MESS_ALIGN),
    ...generateBorderAttributies(COUPON_MESS_BORDER),
    ...generateDimensionAttributes(COUPON_BORDER_RADIUS),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    couponNormalColor: {
        type: 'string',
        default: '',
    },
    couponHoverColor: {
        type: 'string',
        default: '',
    },

    ...generateNormalBGAttributes(TOP_COUPON_BG),
    ...generateTextShadowAttributies(TOP_COUPON_SHADOW),
    ...generateNormalBGAttributes(BOTTOM_COUPON_BG),
    ...generateBorderAttributies(BOTTOM_BORDER_COLOR),
    ...generateTextShadowAttributies(BOTTOM_COUPON_SHADOW),
    ...generateResAlignmentAttributies(COUPON_CODE_ALIGN),
    ...generateBorderAttributies(COUPON_CODE_BORDER),
    ...generateDimensionAttributes(COUPON_CODE_BORDER_RADIUS),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    codeTopNormalColor: {
        type: 'string',
        default: '',
    },
    codeBottomHoverColor: {
        type: 'string',
        default: '',
    },

    ...generateNormalBGAttributes(CODE_TOP_COUPON_BG),
    ...generateTextShadowAttributies(CODE_TOP_COUPON_SHADOW),
    ...generateNormalBGAttributes(CODE_BOTTOM_COUPON_BG),
};

export default attributes;
