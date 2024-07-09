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
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_HOVER_BG,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BOX_SHADOW,
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

    // Close icon
    ...generateResRangeAttributies(CLOSE_ICON_SIZE),
    ...generateNormalBGAttributes(CLOSE_ICON_BG),
    ...generateNormalBGAttributes(CLOSE_ICON_HOVER_BG),
    ...generateDimensionAttributes(CLOSE_ICON_PADDING),
    ...generateDimensionAttributes(CLOSE_ICON_MARGIN),
    ...generateBorderAttributies(CLOSE_ICON_BORDER),
    ...generateDimensionAttributes(CLOSE_ICON_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CLOSE_ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(CLOSE_ICON_HOVER_BOX_SHADOW),
    // item
    itemHBorderColor: {
        type: 'string',
    },
    //Block Specific Attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    noticeType: {
        type: 'string',
        default: 'info',
    },
    infoDefaultIcon: {
        type: 'object',
        default: {
            success:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path> </svg>',
            info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"></path></svg>',
            danger: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',
            warning:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path fill="#ffcc00" d="M498.5 389.1L291.5 44.5c-9.4-16.3-25.6-16.3-35 0L13.5 389.1c-9.8 16.9 2.5 38.9 19.7 38.9h445.6c17.2 0 29.5-22 19.7-38.9zM256 464c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM256 352c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32z"/></svg>',
        },
    },
    label: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'h3',
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
        default: 'center',
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
        default: '',
    },

    iconColor: {
        type: 'string',
        default: '',
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
        default: 'Congratulations',
    },
    iconBoxDescription: {
        type: 'string',
        default: 'Zoloblocks plugin has been updated for the latest version',
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
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showText: {
        type: 'boolean',
        default: true,
    },
    closedColor: {
        type: 'string',
    },
    closeIconHoverColor: {
        type: 'string',
    },
    closeIconBorderHoverColor: {
        type: 'string',
    },
};

export default attributes;
