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
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_PADDING,
    PO_SWIDTH,
    PT_BORDER,
    PT_BORDER_RADIUS,
    PTH_BORDER,
    PTH_BORDER_RADIUS,
    PF_SWIDTH,
    PFV_BORDER,
    PFV_BORDER_RADIUS,
    PS_BORDER,
    PS_BORDER_RADIUS,
    PSE_BORDER,
    PSE_BRADIUS,
    PSE_BG,
    PT_BG,
    PTH_BG,
    PFTH_BG,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'advBtnMargin',
            },
            padding: {
                prefix: 'advBtnPadding',
            },
            background: {
                prefix: 'advBtnBg',
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
    // Button Generators
    ...generateResAlignmentAttributies(BUTTON_ALIGNMENT),
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(ICON_TEXT_SPACING),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(BUTTON_PADDING),

    // button icon generator
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICON_HOVER_BOX_SHADOW),
    ...generateDimensionAttributes(ICON_PADDING),

    // presets
    ...generateResRangeAttributies(PO_SWIDTH),

    ...generateNormalBGAttributes(PT_BG),
    ...generateNormalBGAttributes(PTH_BG),
    ...generateNormalBGAttributes(PFTH_BG),

    ...generateBorderAttributies(PT_BORDER),
    ...generateDimensionAttributes(PT_BORDER_RADIUS),

    ...generateBorderAttributies(PTH_BORDER),
    ...generateDimensionAttributes(PTH_BORDER_RADIUS),

    ...generateResRangeAttributies(PF_SWIDTH),

    ...generateBorderAttributies(PFV_BORDER),
    ...generateDimensionAttributes(PFV_BORDER_RADIUS),

    ...generateBorderAttributies(PS_BORDER),
    ...generateDimensionAttributes(PS_BORDER_RADIUS),

    ...generateBorderAttributies(PSE_BORDER),
    ...generateDimensionAttributes(PSE_BRADIUS),
    ...generateNormalBGAttributes(PSE_BG),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: '',
    },
    presetTwoStyles: {
        type: 'object',
        default: {
            bgColor: '',
            hoverBgColor: '',
        },
    },
    presetThreeStyles: {
        type: 'object',
        default: {
            bgColor: '',
            hoverBgColor: '',
        },
    },
    presetFourStyles: {
        type: 'object',
        default: {
            shadowColor: '',
            colorOne: '',
            textColor: '',
            textShadowColor: '',
        },
    },
    presetSixStyle: {
        type: 'string',
    },
    presetSevenStyles: {
        type: 'object',
        default: {
            bgColor: '',
        },
    },

    label: {
        type: 'string',
        default: 'Explore Now',
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
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
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
    iconAnimation: {
        type: 'string',
    },
    buttonTwoBorderColor: {
        type: 'string',
    },
};

export default attributes;
