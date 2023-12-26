//internal dependencies controls
const {
    generateBackgroundAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateResAlignmentAttributies,
    generateTextShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

//block constants
import {
    BTN_BORDER,
    BTN_RADIUS,
    BTN_HOVER_BG,
    BTN_MARGIN,
    BTN_NORMAL_BG,
    BTN_PADDING,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    CBTN_BORDER,
    CBTN_RADIUS,
    CBTN_HOVER_BG,
    CBTN_MARGIN,
    CBTN_NORMAL_BG,
    CBTN_PADDING,
    CBTN_SHADOW,
    CBTN_HOVER_SHADOW,
    DESC_MARGIN,
    ALIGNENT,
    FEATURE_DESC_MARGIN,
    FEATURE_ICON_GAP,
    FEATURE_ICON_SIZE,
    FEATURE_ITEM_GAP,
    FEATURE_MARGIN,
    FEATURE_PADDING,
    ORGINAL_PRICE_MARGIN,
    PERIOD_MARGIN,
    PRICE_MARGIN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_TEXT_PADDING,
    TITLE_TEXT_SHADOW,
    TITLE_BG,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_BORDER_RADIUS,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    RIBBON_BG,
    RIBBON_RADIUS,
    RIBBON_BORDER,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    FEATURE_ICON_PADDING,
    SEPARATOR_WIDTH,
} from './constants';
import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    // global attributes
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
    //header
    titleText: {
        type: 'string',
        default: 'Service Name',
    },
    titleTagName: {
        type: 'string',
        default: 'h3',
    },
    showDesc: {
        type: 'boolean',
        default: true,
    },
    descText: {
        type: 'string',
        default: 'Basic features for up to 10 user',
    },

    //price
    pricePrefix: {
        type: 'string',
        default: '$',
    },
    price: {
        type: 'string',
        default: '49',
    },
    priceSuffix: {
        type: 'string',
        default: '',
    },
    sale: {
        type: 'boolean',
        default: false,
    },
    orginalPrice: {
        type: 'string',
        default: '79',
    },
    period: {
        type: 'string',
        default: 'per user,per month',
    },

    //features
    showFeatureHeading: {
        type: 'boolean',
        default: true,
    },
    featureTitle: {
        type: 'string',
        default: 'FEATURES',
    },
    showFeatureDesc: {
        type: 'boolean',
        default: true,
    },
    featureDesc: {
        type: 'string',
        default: 'Everything in our free plan',
    },
    features: {
        type: 'array',
        default: [
            {
                id: 1,
                text: 'List Item #1',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>',
            },
            {
                id: 2,
                text: 'List Item #2',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>',
            },
        ],
    },
    separatorColor: {
        type: 'string',
    },

    //Buttons
    showBtn: {
        type: 'boolean',
        default: true,
    },
    buttonText: {
        type: 'string',
        default: 'Get Started',
    },
    buttonLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    showChatBtn: {
        type: 'boolean',
        default: true,
    },
    chatBtnText: {
        type: 'string',
        default: 'Chat To Sales',
    },
    chatBtnLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },

    //ribbon
    showRibbon: {
        type: 'boolean',
        default: true,
    },
    ribbonTitle: {
        type: 'string',
        default: 'Popular',
    },
    ribbonXPosition: {
        type: 'number',
        default: 0,
    },
    ribbonYPosition: {
        type: 'number',
        default: 0,
    },
    ribbonRotate: {
        type: 'number',
        default: 0,
    },

    //header style
    titleColor: {
        type: 'string',
        default: '',
    },
    titleBgColor: {
        type: 'string',
        default: '',
    },
    descColor: {
        type: 'string',
        default: '',
    },

    //price style
    prefixPosition: {
        type: 'number',
    },
    suffixPosition: {
        type: 'number',
    },
    prefixSize: {
        type: 'number',
    },
    suffixSize: {
        type: 'number',
    },
    priceColor: {
        type: 'string',
        default: '',
    },
    orginalPriceColor: {
        type: 'string',
        default: '',
    },
    periodColor: {
        type: 'string',
        default: '',
    },

    //features style
    featureTitleColor: {
        type: 'string',
        default: '',
    },
    featureDescColor: {
        type: 'string',
        default: '',
    },
    featureColor: {
        type: 'string',
        default: '',
    },
    featureIconColor: {
        type: 'string',
        default: '',
    },
    featureIconBgColor: {
        type: 'string',
        default: '',
    },
    //buttons style
    btnTextColor: {
        type: 'string',
        default: '',
    },
    btnHoverTextColor: {
        type: 'string',
        default: '',
    },
    btnHoverBorderColor: {
        type: 'string',
    },
    chatBtnColor: {
        type: 'string',
    },
    chatBtnHoverColor: {
        type: 'string',
    },
    chatBtnHoverBorderColor: {
        type: 'string',
    },
    //ribbon style
    ribbonColor: {
        type: 'string',
        default: '',
    },
    ribbonBgColor: {
        type: 'string',
        default: '',
    },
    ribbonPosition: {
        type: 'string',
        default: 'top__right',
    },

    // extra
    btnsPosition: {
        type: 'string',
        default: 'bottom',
    },
    btnsDirection: {
        type: 'string',
        default: 'column',
    },

    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(TITLE_PADDING),
    ...generateDimensionAttributes(TITLE_TEXT_PADDING),
    ...generateBorderAttributies(TITLE_BORDER),
    ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateDimensionAttributes(DESC_MARGIN),
    ...generateNormalBGAttributes(TITLE_BG),

    //price
    ...generateDimensionAttributes(PRICE_MARGIN),
    ...generateDimensionAttributes(ORGINAL_PRICE_MARGIN),
    ...generateDimensionAttributes(PERIOD_MARGIN),

    //feature
    ...generateResAlignmentAttributies(ALIGNENT),
    ...generateDimensionAttributes(FEATURE_DESC_MARGIN),
    ...generateResRangeAttributies(FEATURE_ITEM_GAP),
    ...generateDimensionAttributes(FEATURE_MARGIN),
    ...generateDimensionAttributes(FEATURE_PADDING),
    ...generateResRangeAttributies(FEATURE_ICON_GAP),
    ...generateResRangeAttributies(FEATURE_ICON_SIZE),
    ...generateDimensionAttributes(FEATURE_ICON_PADDING),

    //button
    ...generateDimensionAttributes(BTN_MARGIN),
    ...generateDimensionAttributes(BTN_PADDING),
    ...generateNormalBGAttributes(BTN_NORMAL_BG, {
        defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    }),
    ...generateNormalBGAttributes(BTN_HOVER_BG, {
        defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    }),
    ...generateBorderAttributies(BTN_BORDER),
    ...generateDimensionAttributes(BTN_RADIUS),
    ...generateBoxShadowAttributies(BTN_SHADOW),
    ...generateBoxShadowAttributies(BTN_HOVER_SHADOW),

    //chat button
    ...generateDimensionAttributes(CBTN_MARGIN),
    ...generateDimensionAttributes(CBTN_PADDING),
    ...generateNormalBGAttributes(CBTN_NORMAL_BG),
    ...generateNormalBGAttributes(CBTN_HOVER_BG),
    ...generateBorderAttributies(CBTN_BORDER),
    ...generateDimensionAttributes(CBTN_RADIUS),
    ...generateBoxShadowAttributies(CBTN_SHADOW),
    ...generateBoxShadowAttributies(CBTN_HOVER_SHADOW),

    // ribbon
    ...generateDimensionAttributes(RIBBON_MARGIN),
    ...generateDimensionAttributes(RIBBON_PADDING),
    ...generateNormalBGAttributes(RIBBON_BG),
    ...generateDimensionAttributes(RIBBON_RADIUS),
    ...generateBorderAttributies(RIBBON_BORDER),

    //all typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //advance tab attributes
    ...generateDimensionAttributes(WRAPPER_MARGIN),
    ...generateDimensionAttributes(WRAPPER_PADDING),
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    }),
    ...generateBorderAttributies(WRAPPER_BORDER),
    ...generateDimensionAttributes(WRAPPER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(WRAPPER_SHADOW),

    // separator
    ...generateResRangeAttributies(SEPARATOR_WIDTH),
};
export default attributes;
