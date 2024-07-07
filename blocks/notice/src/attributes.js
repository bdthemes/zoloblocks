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
} = window.zoloModule;

import {
    ICON_BOX_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    DESCRIPTION_MARGIN,
    ICON_BORDER,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    BUTTON_BG_COLOR,
    BUTTON_BG_HOVER_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_BORDER_RADIUS,
    ICON_SIZE,
    BUTTON_ICON_SIZE,
    BUTTON_BORDER,
    ICON_TEXT_SPACING,
    ICON_PADDING,
    ICON_MARGIN,
    BUTTON_BORDER_RADIUS,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
    CONTENT_ALIGNMENT,
    ITEM_BG,
    ITEM_HOVER_BG,
    ITEM_BORDER,
    ITEM_BRADIUS,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BOX_SHADOW,
    ITEM_HBOX_SHADOW,
    RIBBON_BG,
    RIBBON_RADIUS,
    RIBBON_BORDER,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    ICON_WRAPPER_BG_COLOR,
    ICON_ANIMATION_BG,
    ICON_ANIMATION_SIZE,
    ICON_ANIMATION_RADIUS,
    ICON_ANIMATION_THICKNESS,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
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
    // item
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BRADIUS),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateDimensionAttributes(ITEM_MARGIN),
    ...generateBoxShadowAttributies(ITEM_BOX_SHADOW),
    ...generateBoxShadowAttributies(ITEM_HBOX_SHADOW),
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateNormalBGAttributes(ITEM_HOVER_BG),
    ...generateNormalBGAttributes(ICON_WRAPPER_BG_COLOR),
    // Icon
    ...generateResAlignmentAttributies(ICON_BOX_ALIGNMENT),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(ICON_TEXT_SPACING),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateDimensionAttributes(ICON_MARGIN),
    ...generateBoxShadowAttributies(ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICON_HOVER_BOX_SHADOW),

    // Button
    ...generateNormalBGAttributes(BUTTON_BG_COLOR),
    ...generateNormalBGAttributes(BUTTON_BG_HOVER_COLOR),
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateResRangeAttributies(BUTTON_ICON_SIZE),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateDimensionAttributes(BUTTON_MARGIN),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),

    // ribbon
    ...generateDimensionAttributes(RIBBON_MARGIN),
    ...generateDimensionAttributes(RIBBON_PADDING),
    ...generateNormalBGAttributes(RIBBON_BG),
    ...generateDimensionAttributes(RIBBON_RADIUS),
    ...generateBorderAttributies(RIBBON_BORDER),

    // Title
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),

    // Description
    ...generateDimensionAttributes(DESCRIPTION_MARGIN),

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // Image
    ...generateBorderAttributies(IMAGE_BORDER),
    ...generateResRangeAttributies(ICON_IMAGE_SIZE),
    ...generateDimensionAttributes(ICON_IMAGE_BORDER_RADIUS),

    // content alignment
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
    //animation
    ...generateNormalBGAttributes(ICON_ANIMATION_BG),
    ...generateResRangeAttributies(ICON_ANIMATION_SIZE),
    ...generateDimensionAttributes(ICON_ANIMATION_RADIUS),
    ...generateResRangeAttributies(ICON_ANIMATION_THICKNESS),

    // item
    itemHBorderColor: {
        type: 'string',
    },
    //Block Specific Attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    label: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'h2',
    },

    icon: {
        type: 'string',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    topIconPosition: {
        type: 'string',
        default: 'left',
    },
    containerBorderHoverColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
    },
    textHoverColor: {
        type: 'string',
    },
    descColor: {
        type: 'string',
    },
    descHoverColor: {
        type: 'string',
    },
    iconType: {
        type: 'string',
        default: 'icon',
    },
    iconAlignment: {
        type: 'string',
        default: 'flex-start',
    },
    iconBoxDirection: {
        type: 'string',
        default: 'iconbox-align-left',
    },
    iconBorderHoverColor: {
        type: 'string',
    },
    mainIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
    },
    buttonIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconBackgroundColor: {
        type: 'string',
    },
    iconBackgroundHoverColor: {
        type: 'string',
    },
    iconTypeImage: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.placeholder,
            alt: '',
        },
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    iconBoxTitle: {
        type: 'string',
        default: 'Save 20%',
    },
    iconBoxDescription: {
        type: 'string',
        default: 'Free shipping on all orders',
    },

    // animation
    animationType: {
        type: 'string',
    },
    animationPositionOne: {
        type: 'string',
    },
    animationPositionTwo: {
        type: 'string',
    },
    //notice
    dismissible: {
        type: 'boolean',
        default: false,
    },
    showAfterDismiss: {
        type: 'boolean',
        default: false,
    },
};

export default attributes;
