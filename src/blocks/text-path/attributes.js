/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateTextStrokeAttributies,
    generateNormalBGAttributes,
    generateDimensionAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    TEXTPATH_ALIGN,
    TEXTPATH_SIZE,
    TEXT_PATH_STROKE,
    TEXT_WORD_SPACING,
    PATH_TEXT_SPACING,
    CIRCLE_DURATION,
    CIRCLE_IMG_HEIGHT,
    CIRCLE_IMG_WIDTH,
    CIRCLE_IMAGE_BACKGROUND,
    CIRCLE_IMAGE_PADDING,
    CIRCLE_IMAGE_MARGIN,
    CIRCLE_IMAGE_BORDER,
    CIRCLE_IMAGE_BOX_SHADOW,
    CIRCLE_IMAGE_BORDER_RADIUS,
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
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResAlignmentAttributies(TEXTPATH_ALIGN),
    ...generateResRangeAttributies(TEXTPATH_SIZE),
    ...generateTextStrokeAttributies(TEXT_PATH_STROKE),
    ...generateResRangeAttributies(TEXT_WORD_SPACING),
    ...generateResRangeAttributies(PATH_TEXT_SPACING),
    ...generateResRangeAttributies(CIRCLE_DURATION),
    ...generateResRangeAttributies(CIRCLE_IMG_HEIGHT),
    ...generateResRangeAttributies(CIRCLE_IMG_WIDTH),

    ...generateDimensionAttributes(CIRCLE_IMAGE_PADDING),
    ...generateDimensionAttributes(CIRCLE_IMAGE_MARGIN),
    ...generateNormalBGAttributes(CIRCLE_IMAGE_BACKGROUND),
    ...generateBorderAttributies(CIRCLE_IMAGE_BORDER),
    ...generateBoxShadowAttributies(CIRCLE_IMAGE_BOX_SHADOW),
    ...generateDimensionAttributes(CIRCLE_IMAGE_BORDER_RADIUS),

    circlePhoto: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders?.zbBrand,
            alt: '',
        },
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    circlePhotoTitle: {
        type: 'string',
        default: 'zoloblocks',
    },

    textpathContent: {
        type: 'string',
        default: 'Add your curve text here',
    },
    textPathType: {
        type: 'string',
        default: 'wave',
    },
    pathlink: {
        type: 'object',
        default: {
            url: '',
            openInNewTab: false,
        },
    },
    textPathShow: {
        type: 'boolean',
        default: false,
    },
    textpathRotate: {
        type: 'number',
    },
    textpathLength: {
        type: 'number',
    },
    textPathSpoint: {
        type: 'number',
    },
    textPathColor: {
        type: 'string',
    },
    textPathHoverColor: {
        type: 'string',
    },

    pathColor: {
        type: 'string',
    },

    textPathTypeCircle: {
        type: 'boolean',
        default: false,
    },

    showCircleImg: {
        type: 'boolean',
        default: false,
    },

    circleAnimationDuration: {
        type: 'object',
        default: {
            duration: 10000,
            direction: 'clockwise',
        },
    },
};

export default attributes;
