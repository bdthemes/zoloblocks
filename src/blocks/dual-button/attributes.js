const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
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
    BUTTON_ONE_BG_HOVER,
    BUTTON_ONE_BORDER_HOVER,
    BUTTON_ONE_SHADOW_HOVER,
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    BUTTON_TWO_BG_HOVER,
    BUTTON_TWO_BORDER_HOVER,
    BUTTON_TWO_SHADOW_HOVER,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER_RADIUS,
    MIDDLE_TEXT_BG_HOVER,
    MIDDLE_TEXT_BORDER_HOVER,
    MIDDLE_TEXT_SHADOW_HOVER,
    BUTTON_ONE_ICON_BG,
    BUTTON_ONE_ICON_SIZE,
    BUTTON_ONE_ICON_GAP,
    BUTTON_ONE_ICON_PADDING,
    BUTTON_ONE_ICON_BORDER,
    BUTTON_ONE_ICON_SHADOW,
    BUTTON_ONE_ICON_BORDER_RADIUS,
    BUTTON_ONE_ICON_BG_HOVER,
    BUTTON_ONE_ICON_SHADOW_HOVER,
    BUTTON_TWO_ICON_BG,
    BUTTON_TWO_ICON_SIZE,
    BUTTON_TWO_ICON_GAP,
    BUTTON_TWO_ICON_PADDING,
    BUTTON_TWO_ICON_BORDER,
    BUTTON_TWO_ICON_SHADOW,
    BUTTON_TWO_ICON_BORDER_RADIUS,
    BUTTON_TWO_ICON_BG_HOVER,
    BUTTON_TWO_ICON_SHADOW_HOVER,
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
        default: 'Button One',
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
    buttonOneColor: {
        type: 'string',
        default: '',
    },
    buttonOneColorHover: {
        type: 'string',
        default: '',
    },
    buttonTwoText: {
        type: 'string',
        default: 'Button Two',
    },
    middleText: {
        type: 'boolean',
        default: true,
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
    buttonTwoColor: {
        type: 'string',
        default: '',
    },
    buttonTwoColorHover: {
        type: 'string',
        default: '',
    },
    middleTextColor: {
        type: 'string',
        default: '',
    },
    middleTextColorHover: {
        type: 'string',
        default: '',
    },
    buttonOneIconColor: {
        type: 'string',
        default: '',
    },
    buttonOneIconColorHover: {
        type: 'string',
        default: '',
    },
    buttonTwoIconColor: {
        type: 'string',
        default: '',
    },
    buttonTwoIconColorHover: {
        type: 'string',
        default: '',
    },

    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResAlignmentAttributies(BUTTON_ALIGNMENT),
    ...generateResRangeAttributies(BUTTON_WIDTH, {
        defaultUnit: '%',
    }),
    ...generateNormalBGAttributes(BUTTON_ONE_BG),
    ...generateBorderAttributies(BUTTON_ONE_BORDER),
    ...generateDimensionAttributes(BUTTON_ONE_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_ONE_MARGIN),
    ...generateDimensionAttributes(BUTTON_ONE_PADDING),
    ...generateBoxShadowAttributies(BUTTON_ONE_SHADOW),
    ...generateResAlignmentAttributies(BUTTON_ONE_ALIGN),
    ...generateNormalBGAttributes(BUTTON_ONE_BG_HOVER),
    ...generateBorderAttributies(BUTTON_ONE_BORDER_HOVER),
    ...generateBoxShadowAttributies(BUTTON_ONE_SHADOW_HOVER),
    ...generateNormalBGAttributes(BUTTON_TWO_BG),
    ...generateBorderAttributies(BUTTON_TWO_BORDER),
    ...generateDimensionAttributes(BUTTON_TWO_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_TWO_MARGIN),
    ...generateDimensionAttributes(BUTTON_TWO_PADDING),
    ...generateBoxShadowAttributies(BUTTON_TWO_SHADOW),
    ...generateResAlignmentAttributies(BUTTON_TWO_ALIGN),
    ...generateNormalBGAttributes(BUTTON_TWO_BG_HOVER),
    ...generateBorderAttributies(BUTTON_TWO_BORDER_HOVER),
    ...generateBoxShadowAttributies(BUTTON_TWO_SHADOW_HOVER),
    ...generateNormalBGAttributes(MIDDLE_TEXT_BG),
    ...generateDimensionAttributes(MIDDLE_TEXT_MARGIN),
    ...generateDimensionAttributes(MIDDLE_TEXT_PADDING),
    ...generateBoxShadowAttributies(MIDDLE_TEXT_SHADOW),
    ...generateBorderAttributies(MIDDLE_TEXT_BORDER),
    ...generateDimensionAttributes(MIDDLE_TEXT_BORDER_RADIUS),
    ...generateNormalBGAttributes(MIDDLE_TEXT_BG_HOVER),
    ...generateBorderAttributies(MIDDLE_TEXT_BORDER_HOVER),
    ...generateBoxShadowAttributies(MIDDLE_TEXT_SHADOW_HOVER),

    ...generateNormalBGAttributes(BUTTON_ONE_ICON_BG),
    ...generateResRangeAttributies(BUTTON_ONE_ICON_SIZE),
    ...generateResRangeAttributies(BUTTON_ONE_ICON_GAP),
    ...generateDimensionAttributes(BUTTON_ONE_ICON_PADDING),
    ...generateBorderAttributies(BUTTON_ONE_ICON_BORDER),
    ...generateBoxShadowAttributies(BUTTON_ONE_ICON_SHADOW),
    ...generateDimensionAttributes(BUTTON_ONE_ICON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_ONE_ICON_BG_HOVER),
    ...generateBoxShadowAttributies(BUTTON_ONE_ICON_SHADOW_HOVER),

    ...generateNormalBGAttributes(BUTTON_TWO_ICON_BG),
    ...generateResRangeAttributies(BUTTON_TWO_ICON_SIZE),
    ...generateResRangeAttributies(BUTTON_TWO_ICON_GAP),
    ...generateDimensionAttributes(BUTTON_TWO_ICON_PADDING),
    ...generateBorderAttributies(BUTTON_TWO_ICON_BORDER),
    ...generateBoxShadowAttributies(BUTTON_TWO_ICON_SHADOW),
    ...generateDimensionAttributes(BUTTON_TWO_ICON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_TWO_ICON_BG_HOVER),
    ...generateBoxShadowAttributies(BUTTON_TWO_ICON_SHADOW_HOVER),
};

export default attributes;
