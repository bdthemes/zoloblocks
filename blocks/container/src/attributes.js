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
    //particle attr
    enableParticlesAnimation: {
        type: 'boolean',
        default: false,
    },
    toggleCustomOption: {
        type: 'boolean',
        default: false,
    },
    optPreset: {
        type: 'string',
        default: 'optionOne',
    },
    //particle color
    colorItem: {
        type: 'array',
        default: [
            {
                id: 1,
                color: '',
            },
        ],
    },
    particleOptions: {
        type: 'object',
        default: {
            color: {
                type: 'string',
            },

            shapes: {
                type: 'array',
                default: [],
            },

            direction: {
                type: 'string',
            },

            customOptions: {
                type: 'string',
                default: '',
            },
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
        default: 'alignfull',
    },
    contentWidthType: {
        type: 'string',
        default: 'alignwide',
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
