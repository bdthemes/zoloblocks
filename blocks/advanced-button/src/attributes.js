/**
 * Internal dependencies
 */
const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    BUTTON_ALIGNMENT,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    BUTTON_PADDING,
    BUTTON_MARGIN,
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_PADDING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Common Attributes
    uniqueId: {
        type: 'string',
    },
    resDevice: {
        type: 'string',
        default: 'Desktop',
    },
    blockStyle: {
        type: 'object',
    },
    // Button Generators
    ...generateResAlignmentAttributies(BUTTON_ALIGNMENT, {
        defaultAlign: 'left',
    }),
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateResRangeAttributies(ICON_SIZE, {
        default: 16,
    }),
    ...generateResRangeAttributies(ICON_TEXT_SPACING, {
        default: 5,
    }),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateDimensionAttributes(BUTTON_MARGIN),
    // button icon generator
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICON_HOVER_BOX_SHADOW),
    ...generateDimensionAttributes(ICON_PADDING),
    //Block specific Attributes
    preset: {
        type: 'string',
        default: '',
    },
    presetOneStyles: {
        type: 'object',
        default: {
            shadowColor: '#000000',
        },
    },
    presetTwoStyles: {
        type: 'object',
        default: {
            bgColor: '#d5edf6',
            hoverBgColor: '#6dcff6',
        },
    },
    presetThreeStyles: {
        type: 'object',
        default: {
            bgColor: '',
        },
    },
    presetFourStyles: {
        type: 'object',
        default: {
            colorOne: '',
            colorTwo: '',
        },
    },
    presetFiveStyles: {
        type: 'object',
        default: {
            borderColor: '',
        },
    },
    presetSevenStyles: {
        type: 'object',
        default: {
            bgColor: '',
        },
    },
    presetEightStyles: {
        type: 'object',
        default: {
            overlayColor: '',
        },
    },
    presetTenStyles: {
        type: 'object',
        default: {
            outlineColor: '#373b44',
        },
    },
    presetElevenStyles: {
        type: 'object',
        default: {
            overlayBgColor: '',
        },
    },
    presetTwelveStyles: {
        type: 'object',
        default: {
            overlayBgColor: '',
        },
    },
    label: {
        type: 'string',
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    iconType: {
        type: 'string',
        default: 'none',
    },
    showIcon: {
        type: 'boolean',
        default: false,
    },
    icon: {
        type: 'object',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconBg: {
        type: 'string',
    },
    iconHoverBg: {
        type: 'string',
    },
    iconBorderHoverColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
    },
    textHoverColor: {
        type: 'string',
    },
    borderHoverColor: {
        type: 'string',
    },
};

export default attributes;
