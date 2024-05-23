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
    enableParticlesAnimation: {
        type: 'boolean',
        default: false,
    },
    particleOptions: {
        type: 'object',
        default: {
            number: {
                type: 'number',
                default: 80,
            },
            DensityArea: {
                type: 'number',
                default: 800,
            },
            Color: {
                type: 'string',
                default: '#fff',
            },
            shape: {
                type: 'string',
                default: 'circle',
            },
            //sroke width
            stroke: {
                type: 'number',
                default: 0,
            },
            //size
            size: {
                type: 'number',
                default: 3,
            },
            //speed
            speed: {
                type: 'number',
                default: 6,
            },
            //link distance
            distance: {
                type: 'number',
                default: 150,
            },
            //link color
            linkColor: {
                type: 'string',
                default: '#000',
            },
            //move speed
            moveSpeed: {
                type: 'number',
                default: 6,
            },
            //directon
            direction: {
                type: 'string',
                default: 'none',
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
