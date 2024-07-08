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
    ICON_BORDER_RADIUS,
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_PADDING,
    ICON_MARGIN,
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
        default: 'style-2',
    },
    noticeType: {
        type: 'string',
        default: 'default',
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"></path></svg>',
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
    enableIcon: {
        type: 'boolean',
        default: true,
    },
    closedColor: {
        type: 'string',
    },
};

export default attributes;
