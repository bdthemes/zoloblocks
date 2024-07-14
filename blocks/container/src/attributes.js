/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateResAlignmentAttributies, generateGapAttributes } = window.zoloModule;

import {
    CONTAINER_WIDTH,
    CONTAINER_GAP,
    CONTENT_WIDTH,
    MIN_HEIGHT,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
    FLEX_ALIGN,
} from './constants';

const attributes = {
    // global config
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
    // block attributes
    variationStatus: {
        type: 'boolean',
        default: false,
    },
    isBlockRootParent: {
        type: 'boolean',
        default: false,
    },
    templates: {
        type: 'array',
        default: [],
    },
    containerWidthType: {
        type: 'string',
    },
    contentWidthType: {
        type: 'string',
    },

    // container layout class
    containerLayoutClass: {
        type: 'string',
        default: '',
    },
    // container gap
    ...generateGapAttributes(CONTAINER_GAP, {}),
    // New Generators
    ...generateResRangeAttributies(CONTAINER_WIDTH, {
        defaultUnit: '%',
    }),
    ...generateResRangeAttributies(CONTENT_WIDTH, {}),
    ...generateResRangeAttributies(MIN_HEIGHT, {}),

    // flex
    ...generateResAlignmentAttributies(FLEX_DIRECTION, {}),
    ...generateResAlignmentAttributies(FLEX_ALIGN, {}),
    ...generateResAlignmentAttributies(FLEX_JUSTIFY, {}),
    ...generateResAlignmentAttributies(FLEX_WRAP, {}),
};

export default attributes;
