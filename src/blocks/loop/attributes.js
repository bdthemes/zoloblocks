const { generateResRangeAttributies, generateResAlignmentAttributies, generateGapAttributes, generateResCounterAttributies } =
    window.zoloModule;
import {
    GRID_MIN_WIDTH,
    GRID_MIN_HEIGHT,
    GRID_GAP,
    GRID_COL_COUNT,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
} from './constants';

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
    ref: {
        type: 'number',
    },
    isStartingScreenSet: {
        type: 'boolean',
        default: false,
    },

    loopLayoutType: {
        type: 'string',
        default: 'grid',
    },

    gridLayoutType: {
        type: 'string',
        default: 'loop-grid',
    },

    sliderOptions: {
        type: 'object',
    },

    // Generators
    ...generateResRangeAttributies(GRID_MIN_WIDTH),
    ...generateResRangeAttributies(GRID_MIN_HEIGHT),
    // Column Count
    ...generateResCounterAttributies(GRID_COL_COUNT, {
        deskRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),

    //Columns Gaps
    ...generateGapAttributes(GRID_GAP, {
        defaultUnit: 'px',
    }),

    // Flex Properties
    ...generateResAlignmentAttributies(FLEX_DIRECTION),
    ...generateResAlignmentAttributies(FLEX_ALIGN),
    ...generateResAlignmentAttributies(FLEX_JUSTIFY),
    ...generateResAlignmentAttributies(FLEX_WRAP),
};

export default attributes;
