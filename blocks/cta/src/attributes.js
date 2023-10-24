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
    TITLE_MARGIN,
    DESC_MARGIN,
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
    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // title
    ...generateDimensionAttributes(TITLE_MARGIN),
    // description
    ...generateDimensionAttributes(DESC_MARGIN),

    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
    ...generateDimensionAttributes(BUTTON_PADDING),

    // button icon generator
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICON_HOVER_BOX_SHADOW),
    ...generateDimensionAttributes(ICON_PADDING),

    // presets
    ...generateResRangeAttributies(PO_SWIDTH, {
        defaultRange: 1,
    }),

    ...generateBorderAttributies(PT_BORDER),
    ...generateDimensionAttributes(PT_BORDER_RADIUS),

    ...generateBorderAttributies(PTH_BORDER),
    ...generateDimensionAttributes(PTH_BORDER_RADIUS),

    ...generateResRangeAttributies(PF_SWIDTH, {
        defaultRange: 6,
    }),

    ...generateBorderAttributies(PFV_BORDER),
    ...generateDimensionAttributes(PFV_BORDER_RADIUS),

    ...generateBorderAttributies(PS_BORDER),
    ...generateDimensionAttributes(PS_BORDER_RADIUS),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: '',
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
    title: {
        type: 'string',
        default: 'Call to Action',
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
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    descriptionColor: {
        type: 'string',
    },
    label: {
        type: 'string',
        default: 'Button',
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
        default: 'iconText',
    },
    showIcon: {
        type: 'boolean',
        default: false,
    },
    icon: {
        type: 'string',
        default: 'fab fa-whatsapp',
    },
    iconPosition: {
        type: 'string',
        default: 'left',
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
