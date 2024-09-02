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
    TITLE_MARGIN,
    DESC_MARGIN,
    FLEX_GAP,
    ICON_TEXT_SPACING,
    ICON_S_SIZE,
    ICON_TEXT_S_SPACING,
    BUTTON_S_BORDER,
    BUTTON_S_BORDER_RADIUS,
    BUTTON_S_PADDING,
    BUTTON_S_BG,
    BUTTON_S_BOX_SHADOW,
    BUTTON_HOVER_S_BG_COLOR,
    BUTTON_HOVER_S_BOX_SHADOW,
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
    ...generateBorderAttributies(BUTTON_S_BORDER),
    ...generateResRangeAttributies(ICON_TEXT_SPACING),
    ...generateResRangeAttributies(ICON_TEXT_S_SPACING),
    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // title
    ...generateDimensionAttributes(TITLE_MARGIN),
    // description
    ...generateDimensionAttributes(DESC_MARGIN),

    ...generateDimensionAttributes(BUTTON_S_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateNormalBGAttributes(BUTTON_S_BG),
    ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
    ...generateNormalBGAttributes(BUTTON_HOVER_S_BG_COLOR),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_S_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_S_BOX_SHADOW),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateDimensionAttributes(BUTTON_S_PADDING),

    // button icon generator
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(ICON_S_SIZE),

    // presets
    ...generateResRangeAttributies(PO_SWIDTH),

    ...generateBorderAttributies(PT_BORDER),
    ...generateDimensionAttributes(PT_BORDER_RADIUS),

    ...generateBorderAttributies(PTH_BORDER),
    ...generateDimensionAttributes(PTH_BORDER_RADIUS),

    ...generateResRangeAttributies(PF_SWIDTH),

    ...generateBorderAttributies(PFV_BORDER),
    ...generateDimensionAttributes(PFV_BORDER_RADIUS),

    ...generateBorderAttributies(PS_BORDER),
    ...generateDimensionAttributes(PS_BORDER_RADIUS),

    ...generateResRangeAttributies(FLEX_GAP),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: '',
    },
    reversePosition: {
        type: 'boolean',
        default: false,
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showDescription: {
        type: 'boolean',
        default: true,
    },
    showBtn: {
        type: 'boolean',
        default: true,
    },
    showSecondaryBtn: {
        type: 'boolean',
        default: false,
    },
    title: {
        type: 'string',
        default: 'Transform Your Website Today!',
    },
    titleTag: {
        type: 'string',
        default: 'h2',
    },
    titleColor: {
        type: 'string',
    },
    description: {
        type: 'string',
        default: 'Ready to take your website to the next level? With our powerful suite of tools and expert guidance, you can unlock its full potential.',
    },
    descriptionColor: {
        type: 'string',
    },
    label: {
        type: 'string',
        default: 'Get the Deal Now',
    },
    Slabel: {
        type: 'string',
        default: 'Secondary',
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    Slink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    iconType: {
        type: 'string',
        default: 'iconText',
    },
    SiconType: {
        type: 'string',
        default: 'iconText',
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
    Sicon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    SiconPosition: {
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
    StextColor: {
        type: 'string',
    },
    SHoverColor: {
        type: 'string',
    },
    borderHoverColor: {
        type: 'string',
    },
    SborderHoverColor: {
        type: 'string',
    },
};

export default attributes;
