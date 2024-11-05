/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateResAlignmentAttributies, generateGapAttributes } = window.zoloModule;

import {
    CONTAINER_GAP,
    CONTAINER_WIDTH,
    CONTENT_WIDTH,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_JUSTIFY,
    FLEX_WRAP,
    MIN_HEIGHT,
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
    containerWidth: {
        type: 'string',
        default: 'cw_none',
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
        default: 'alignfull',
    },
    contentWidthType: {
        type: 'string',
        default: 'alignwide',
    },

    // test object
    testObject: {
        type: 'object',
        default: {
            dataOne: 'test',
            ...generateResRangeAttributies('TEST_WIDTH', {}, true),
        },
    },
    ...generateResRangeAttributies('TEST_HEIGHT'),
    test: {
        type: 'string',
        default: '',
    },

    // container gap
    ...generateGapAttributes(CONTAINER_GAP, {
        defaultRange: 20,
        defaultUnit: 'px',
    }),
    // New Generators
    ...generateResRangeAttributies(CONTAINER_WIDTH, {
        defaultRange: 100,
        defaultUnit: '%',
    }),
    ...generateResRangeAttributies(CONTENT_WIDTH, {
        defaultRange: 1200,
        defaultUnit: 'px',
    }),
    ...generateResRangeAttributies(MIN_HEIGHT, {}),

    // flex
    ...generateResAlignmentAttributies(FLEX_DIRECTION, {
        defaultAlign: 'row',
    }),
    ...generateResAlignmentAttributies(FLEX_ALIGN, {
        defaultAlign: 'center',
    }),
    ...generateResAlignmentAttributies(FLEX_JUSTIFY, {
        defaultAlign: 'center',
    }),
    ...generateResAlignmentAttributies(FLEX_WRAP, {
        defaultAlign: 'nowrap',
    }),
};

export default attributes;
