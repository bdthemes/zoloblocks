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
    generateMaskAttributes,
} = window.zoloModule;

import {
    BUTTON_ALIGNMENT,
    BUTTON_WIDTH,
    BUTTON_ONE_BG,
    BUTTON_ONE_BORDER,
    BUTTON_ONE_BORDER_RADIUS,
    BUTTON_ONE_MARGIN,
    BUTTON_ONE_PADDING,
    BUTTON_ONE_SHADOW,
    BUTTON_ONE_ALIGN,
    BUTTON_TWO_ALIGN,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER_RADIUS,
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
    buttonOneText: {
        type: 'string',
        default: '',
    },
    buttonTwoText: {
        type: 'string',
        default: '',
    },
    middleText: {
        type: 'boolean',
        default: false,
    },
    buttonOneLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    buttonOneIconAdd: {
        type: 'boolean',
        default: false,
    },
    buttonOneIcon: {
        type: 'string',
        default: '',
    },
    buttonOneIconPosition: {
        type: 'string',
        default: 'right',
    },
    buttonTwoLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    buttonTwoIconAdd: {
        type: 'boolean',
        default: false,
    },
    buttonTwoIcon: {
        type: 'string',
        default: '',
    },
    buttonTwoIconPosition: {
        type: 'string',
        default: 'right',
    },
    buttonOneColor: {
        type: 'string',
        default: '',
    },
    buttonTwoColor: {
        type: 'string',
        default: '',
    },
    middleTextColor: {
        type: 'string',
        default: '',
    },

    ...generateResAlignmentAttributies(BUTTON_ALIGNMENT),
    ...generateResRangeAttributies(BUTTON_WIDTH),
    ...generateNormalBGAttributes(BUTTON_ONE_BG),
    ...generateBorderAttributies(BUTTON_ONE_BORDER),
    ...generateDimensionAttributes(BUTTON_ONE_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_ONE_MARGIN),
    ...generateDimensionAttributes(BUTTON_ONE_PADDING),
    ...generateBoxShadowAttributies(BUTTON_ONE_SHADOW),
    ...generateResAlignmentAttributies(BUTTON_ONE_ALIGN),
    ...generateNormalBGAttributes(BUTTON_TWO_ALIGN),
    ...generateBorderAttributies(BUTTON_TWO_BORDER),
    ...generateDimensionAttributes(BUTTON_TWO_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_TWO_MARGIN),
    ...generateDimensionAttributes(BUTTON_TWO_PADDING),
    ...generateBoxShadowAttributies(BUTTON_TWO_SHADOW),
    ...generateResAlignmentAttributies(BUTTON_TWO_ALIGN),
    ...generateNormalBGAttributes(MIDDLE_TEXT_BG),
    ...generateDimensionAttributes(MIDDLE_TEXT_MARGIN),
    ...generateDimensionAttributes(MIDDLE_TEXT_PADDING),
    ...generateBoxShadowAttributies(MIDDLE_TEXT_SHADOW),
    ...generateBorderAttributies(MIDDLE_TEXT_BORDER),
    ...generateDimensionAttributes(MIDDLE_TEXT_BORDER_RADIUS),
};

export default attributes;
