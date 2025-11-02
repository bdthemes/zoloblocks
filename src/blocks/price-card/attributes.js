const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTextShadowAttributies,
} = window.zoloModule;

import {
    PRICE_CART,
    PRICE_CART_ALIGN,
    CARD_BG,
    CARD_MARGIN,
    CARD_PADDING,
    CARD_BORDER,
    CARD_SHADOW,
    CARD_RADIUS,
    BUTTON_BG,
    BUTTON_PADDING,
    BUTTON_BORDER,
    BUTTON_SHADOW,
    BUTTON_RADIUS,
    HOVER_BUTTON_BG,
    HOVER_BUTTON_SHADOW,
    RIBBON_BG,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_SHADOW,
    RIBBON_RADIUS,
    SWITCHER_WIDTH,
    SWITCHER_HEIGHT,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_BG,
    ACTIVE_SWITCHER_BG,
} from './constants';

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
    toggleStyle: {
        type: 'string',
        default: 'classicToggle',
    },
    ribbonToggle: {
        type: 'boolean',
        default: false,
    },
    ribbonText: {
        type: 'string',
        default: 'Popular',
    },
    ribbonColor: {
        type: 'string',
        default: '',
    },
    switchColor: {
        type: 'string',
        default: '',
    },
    activeSwitchColor: {
        type: 'string',
        default: '',
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
        default: 'only',
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
        default: 'only',
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
        default: 'Enjoy Up To 87% OFF on Premium Products.',
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
    primaryFooterText: {
        type: 'string',
        default: 'Billed yearly. Cancel anytime.',
    },
    secondaryFooterText: {
        type: 'string',
        default: 'One-time payment, lifetime access.',
    },
    primaryToggleTextColor: {
        type: 'string',
        default: '',
    },
    primaryBeforeTitleColor: {
        type: 'string',
        default: '',
    },
    primaryPrefixColor: {
        type: 'string',
        default: '',
    },
    primaryPriceColor: {
        type: 'string',
        default: '',
    },
    primarySuffixColor: {
        type: 'string',
        default: '',
    },
    primaryDescriptionColor: {
        type: 'string',
        default: '',
    },
    primaryOriginalPriceColor: {
        type: 'string',
        default: '',
    },
    primaryFooterTextColor: {
        type: 'string',
        default: '',
    },
    secondaryToggleTextColor: {
        type: 'string',
        default: '',
    },
    secondaryBeforeTitleColor: {
        type: 'string',
        default: '',
    },
    secondaryPrefixColor: {
        type: 'string',
        default: '',
    },
    secondaryPriceColor: {
        type: 'string',
        default: '',
    },
    secondarySuffixColor: {
        type: 'string',
        default: '',
    },
    secondaryDescriptionColor: {
        type: 'string',
        default: '',
    },
    secondaryFooterTextColor: {
        type: 'string',
        default: '',
    },
    buttonColor: {
        type: 'string',
        default: '',
    },
    hoverButtonColor: {
        type: 'string',
        default: '',
    },

    ...generateResAlignmentAttributies(PRICE_CART),
    ...generateResRangeAttributies(PRICE_CART_ALIGN),
    ...generateNormalBGAttributes(CARD_BG),
    ...generateDimensionAttributes(CARD_MARGIN),
    ...generateDimensionAttributes(CARD_PADDING),
    ...generateBorderAttributies(CARD_BORDER),
    ...generateBoxShadowAttributies(CARD_SHADOW),
    ...generateDimensionAttributes(CARD_RADIUS),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateBoxShadowAttributies(BUTTON_SHADOW),
    ...generateDimensionAttributes(BUTTON_RADIUS),
    ...generateNormalBGAttributes(HOVER_BUTTON_BG),
    ...generateBoxShadowAttributies(HOVER_BUTTON_SHADOW),

    ...generateNormalBGAttributes(RIBBON_BG),
    ...generateDimensionAttributes(RIBBON_PADDING),
    ...generateBorderAttributies(RIBBON_BORDER),
    ...generateBoxShadowAttributies(RIBBON_SHADOW),
    ...generateDimensionAttributes(RIBBON_RADIUS),

    ...generateResRangeAttributies(SWITCHER_WIDTH),
    ...generateResRangeAttributies(SWITCHER_HEIGHT),
    ...generateDimensionAttributes(SWITCHER_BORDER_RADIUS),
    ...generateNormalBGAttributes(SWITCHER_BG),
    ...generateNormalBGAttributes(ACTIVE_SWITCHER_BG),
};

export default attributes;
