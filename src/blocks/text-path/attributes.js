/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies, generateTextStrokeAttributies } =
    window.zoloModule;

import { TEXTPATH_ALIGN, TEXTPATH_SIZE, TEXT_PATH_STROKE, TEXT_WORD_SPACING, PATH_TEXT_SPACING, CIRCLE_DURATION } from './constants';

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

    textPathTypeCircle: {
        type: 'boolean',
        default: false,
    },

    circleAnimationDuration: {
        type: 'object',
        default: {
            duration: 10000,
        },
    },
};

export default attributes;
