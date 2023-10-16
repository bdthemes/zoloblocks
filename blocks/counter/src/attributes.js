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
    CONTENT_ALIGN,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    ICON_BORDER,
    ICON_BOX_SHADOW,
    ICON_BORDER_RADIUS,
    ICON_SIZE,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_BACKGROUND,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    COUNTER_MARGIN,
    COUNTER_GAP,
    COUNTER_TEXT_SHADOW,
    COUNTER_TEXT_STROKE,
    ICON_IMAGE_SIZE,
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
    // content
    ...generateResAlignmentAttributies(CONTENT_ALIGN),
    // Item
    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateDimensionAttributes(CONTAINER_PADDING),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),

    // Counter
    ...generateDimensionAttributes(COUNTER_MARGIN),
    ...generateResRangeAttributies(COUNTER_GAP, {
        default: 30,
    }),
    ...generateTextShadowAttributies(COUNTER_TEXT_SHADOW),
    ...generateTextStrokeAttributies(COUNTER_TEXT_STROKE),
    // Icon
    ...generateBorderAttributies(ICON_BORDER),
    ...generateResRangeAttributies(ICON_SIZE, {
        default: 30,
    }),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateDimensionAttributes(ICON_MARGIN),
    ...generateBoxShadowAttributies(ICON_BOX_SHADOW),
    ...generateNormalBGAttributes(ICON_BACKGROUND),

    // Title
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // Image
    ...generateResRangeAttributies(ICON_IMAGE_SIZE, {
        default: 16,
    }),

    //Block Specific Attributes
    hideIcon: {
        type: 'boolean',
        default: true,
    },
    hideCounter: {
        type: 'boolean',
        default: true,
    },
    hideTitle: {
        type: 'boolean',
        default: true,
    },
    hideSuffix: {
        type: 'boolean',
        default: true,
    },
    counterNumber: {
        type: 'text',
        default: '1000',
    },
    counterSuffix: {
        type: 'text',
        default: '+',
    },
    titleText: {
        type: 'string',
        default: 'Happy Client',
    },
    iconType: {
        type: 'string',
        default: 'icon',
    },
    counterIcon: {
        type: 'string',
        default: 'fas fa-cog',
    },
    iconTypeImage: {
        type: 'object',
    },
    //old attributes
    titleTag: {
        type: 'string',
        default: 'h3',
    },
    textColor: {
        type: 'string',
    },
    suffixColor: {
        type: 'string',
    },
    titleTextColor: {
        type: 'string',
    },
    iconType: {
        type: 'string',
        default: 'icon',
    },
    iconColor: {
        type: 'string',
    },
    iconTypeImage: {
        type: 'object',
    },
};

export default attributes;
