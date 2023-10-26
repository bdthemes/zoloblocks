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
    SEPARATOR_ALIGN,
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    SUBTITLE_MARGIN,
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
    TPT_ALIGNMENT,
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

    titleText: {
        type: 'string',
        default: 'I am Advanced Heading',
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
    align: {
        type: 'string',
        default: 'left',
    },
    showTransparentTitle: {
        type: 'boolean',
        default: false,
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
        default: 'tab-mob',
    },
    transparentTitleRotateOrigin: {
        type: 'string',
        default: 'top-left',
    },

    ...generateResRangeAttributies(TPH_X_OFFSET),
    ...generateResRangeAttributies(TPH_Y_OFFSET),

    ...generateResAlignmentAttributies(TITLE_ALIGN, {
        defaultAlign: 'left',
    }),
    ...generateResAlignmentAttributies(SEPARATOR_ALIGN, {
        defaultAlign: 'flex-start',
    }),
    ...generateResAlignmentAttributies(TPT_ALIGNMENT),

    //design tab attributes
    titleColor: {
        type: 'string',
        default: '',
    },
    titleBgColor: {
        type: 'string',
        default: '',
    },

    subTitleColor: {
        type: 'string',
        default: '',
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
    ...generateResRangeAttributies(SEPARATOR_WIDTH, {
        defaultRange: 70,
    }),
    ...generateResRangeAttributies(SEPARATOR_HEIGHT, {
        defaultRange: 3,
    }),
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
};
export default attributes;
