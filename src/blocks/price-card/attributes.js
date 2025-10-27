const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import { PRICE_CART, PRICE_CART_ALIGN } from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    // global Attributes
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
        default: 'preset1',
    },
    ribbonToggle: {
        type: 'boolean',
        default: false,
    },
    buttonToggle: {
        type: 'boolean',
        default: false,
    },
    primaryTitle: {
        type: 'string',
        default: 'Yearly',
    },
    secondaryTitle: {
        type: 'string',
        default: 'Lifetime',
    },
    // Primary Content
    primaryPriceTitle: {
        type: 'string',
        default: 'Starting From',
    },
    primaryPrefix: {
        type: 'string',
        default: '$',
    },
    primaryPrice: {
        type: 'string',
        default: '49',
    },
    primarySuffix: {
        type: 'string',
        default: '',
    },
    primaryShowOriginalPrice: {
        type: 'boolean',
        default: true,
    },
    primaryOriginalPrice: {
        type: 'string',
        default: '70',
    },
    primaryDescription: {
        type: 'string',
        default: 'Enjoy Up To 87% OFF on Premium Products.',
    },
    // Secondary Content
    secondaryPriceTitle: {
        type: 'string',
        default: 'Starting From',
    },
    secondaryPrefix: {
        type: 'string',
        default: '$',
    },
    secondaryPrice: {
        type: 'string',
        default: '299',
    },
    secondarySuffix: {
        type: 'string',
        default: '',
    },
    secondaryShowOriginalPrice: {
        type: 'boolean',
        default: true,
    },
    secondaryOriginalPrice: {
        type: 'string',
        default: '399',
    },
    secondaryDescription: {
        type: 'string',
        default: 'One-time payment, lifetime access.',
    },
    // Common Button
    buttonText: {
        type: 'string',
        default: 'Grab Your Deal',
    },
    buttonLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    ...generateResAlignmentAttributies(PRICE_CART),
    ...generateResRangeAttributies(PRICE_CART_ALIGN),
};

export default attributes;
