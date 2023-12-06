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
    ...generateResRangeAttributies(ICON_IMAGE_SIZE),

    //Block Specific Attributes
    preset: {
        type: 'string',
        default: '',
    },
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
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"></path></svg>',
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
