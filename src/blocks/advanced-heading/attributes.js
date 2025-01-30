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
    generateTextStrokeAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

//block constants
import {
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    SUBTITLE_MARGIN,
    SUBTITLE_PADDING,
    SUBTITE_BORDER,
    SUBTITLE_BORDER_RADIUS,
    SUBTITLE_TEXT_SHADOW,
    SUBTITLE_TEXT_STROKE,
    TEST_NORMAL_BG,
    TITLE_ALIGN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TPT_BORDER,
    TPT_BORDER_RADIUS,
    TPT_MARGIN,
    TPT_PADDING,
    TPT_SHADOW,
    TPT_TEXT_SHADOW,
    TPT_TEXT_STROKE,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    TPH_X_OFFSET,
    TPH_Y_OFFSET,
    TEXT_GRADIENT_COLOR,
    // badge style
    SUBTITLE_BADGE_BG,
    SUBTITLE_BADGE_PADDING,
    SUBTITLE_BADGE_MARGIN,
    SUBTITE_BADGE_BORDER,
    SUBTITLE_BADGE_BORDER_RADIUS,
} from './constants';
import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Common Attributes
    globalConfig: {
        type: 'object',
        default: {
            background: {
                prefix: 'mainBg',
            },
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
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

    //settings tab
    styles: {
        type: 'string',
        default: 'style-0',
    },

    subTitleStyles: {
        type: 'string',
        default: '',
    },

    textGradient: {
        type: 'boolean',
        default: false,
    },

    textGradientType: {
        type: 'string',
        default: 'zolo-text-gradient-color',
    },

    titleText: {
        type: 'string',
        default: 'Advanced Heading',
    },
    enableTitleLink: {
        type: 'boolean',
        default: false,
    },
    titleLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    titleTagName: {
        type: 'string',
        default: 'h2',
    },
    showSubTitle: {
        type: 'boolean',
        default: false,
    },
    subTitleText: {
        type: 'string',
        default: 'Sub Heading Here',
    },
    subTitleTag: {
        type: 'string',
        default: 'h4',
    },
    subTitlePosition: {
        type: 'string',
        default: 'top',
    },
    showSeparator: {
        type: 'boolean',
        default: false,
    },
    separatorPosition: {
        type: 'string',
        default: 'bottom',
    },
    showTransparentTitle: {
        type: 'boolean',
        default: false,
    },
    transparentTag: {
        type: 'string',
        default: 'h2',
    },
    transparentTitleText: {
        type: 'string',
        default: 'Advanced Heading',
    },
    transparentTitleRotate: {
        type: 'number',
        default: 0,
    },
    transparentTitleHide: {
        type: 'string',
        default: 'nothing',
    },
    transparentTitleRotateOrigin: {
        type: 'string',
        default: 'top-left',
    },

    subTitleBadgeText: {
        type: 'string',
        default: 'new',
    },

    showSubTitleBadgeText: {
        type: 'boolean',
        default: true,
    },

    showSubTitleBadgeIcon: {
        type: 'boolean',
        default: false,
    },

    subTitleBadgeIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>',
    },

    badgeDirection: {
        type: 'string',
        default: 'zolo-badge-left',
    },

    ...generateResRangeAttributies(TPH_X_OFFSET),
    ...generateResRangeAttributies(TPH_Y_OFFSET),

    ...generateResAlignmentAttributies(TITLE_ALIGN),
    //design tab attributes
    titleColor: {
        type: 'string',
        default: '',
    },
    titleBgColor: {
        type: 'string',
        default: '',
    },
    titleHoverColor: {
        type: 'string',
    },
    presetBg: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.presetBg,
            alt: '',
        },
    },
    subTitleColor: {
        type: 'string',
        default: '',
    },
    subTitleBgColor: {
        type: 'string',
        default: '',
    },

    subTitleBadgeColor: {
        type: 'string',
    },

    tptColor: {
        type: 'string',
        default: '',
    },
    tptBgColor: {
        type: 'string',
        default: '',
    },
    tptOpacity: {
        type: 'number',
        default: 0.14,
    },

    separatorColor: {
        type: 'string',
        default: '',
    },
    ...generateResRangeAttributies(SEPARATOR_WIDTH),
    ...generateResRangeAttributies(SEPARATOR_HEIGHT),
    ...generateResRangeAttributies(SEPARATOR_SPACING),

    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(TITLE_PADDING),
    ...generateBorderAttributies(TITLE_BORDER),
    ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
    ...generateBoxShadowAttributies(TITLE_SHADOW),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),

    ...generateDimensionAttributes(TPT_MARGIN),
    ...generateDimensionAttributes(TPT_PADDING),
    ...generateBorderAttributies(TPT_BORDER),
    ...generateDimensionAttributes(TPT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(TPT_SHADOW),
    ...generateTextShadowAttributies(TPT_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TPT_TEXT_STROKE),

    ...generateBorderAttributies(SUBTITE_BORDER),
    ...generateDimensionAttributes(SUBTITLE_BORDER_RADIUS),
    ...generateDimensionAttributes(SUBTITLE_PADDING),
    ...generateDimensionAttributes(SUBTITLE_MARGIN),
    ...generateTextShadowAttributies(SUBTITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(SUBTITLE_TEXT_STROKE),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //advance tab attributes
    ...generateDimensionAttributes(WRAPPER_MARGIN),
    ...generateDimensionAttributes(WRAPPER_PADDING),
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    }),
    ...generateBorderAttributies(WRAPPER_BORDER),
    ...generateBoxShadowAttributies(WRAPPER_SHADOW),

    ...generateNormalBGAttributes(TEST_NORMAL_BG, {
        defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    }),

    ...generateNormalBGAttributes(TEXT_GRADIENT_COLOR),

    // badge style attributes
    ...generateNormalBGAttributes(SUBTITLE_BADGE_BG),
    ...generateDimensionAttributes(SUBTITLE_BADGE_MARGIN),
    ...generateDimensionAttributes(SUBTITLE_BADGE_PADDING),
    ...generateBorderAttributies(SUBTITE_BADGE_BORDER),
    ...generateDimensionAttributes(SUBTITLE_BADGE_BORDER_RADIUS),
};
export default attributes;
