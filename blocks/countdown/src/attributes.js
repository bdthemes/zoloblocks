/**dependencies
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateBorderAttributies,
    generateNormalBGAttributes,
    generateResCounterAttributies,
    generateGapAttributes,
} = window.zoloModule;

import {
    INNER_ALIGNMENT,
    LABEL_POSITION,
    COUNTLABEL_MARGIN,
    COUNTLABEL_PADDING,
    COUNTLABEL_BORDER,
    COUNT_LABEL_BG,
    COUNT_LABEL_RADIUS,
    COUNT_BOX_GRID,
    COUNT_BOX_RADIUS,
    COUNT_BOX_SIZE,
    GRID_BOX_GAP,
    ALLBOX_PADDING,
    SEPERATR_SPACING,
    SEPARATOR_TOP_SPACING,
    BOX_SHADOW,
    COUNT_MARGIN,
    COUNT_BORDER,
    COUNT_BG,
    COUNTNUM_BORDER,
    COUNTNUM_PADDING,
    COUNTBOX_MARGIN,
    COUNT_NUM_BG,
    COUNT_NUM_RADIUS,
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
    // Generators
    ...generateResAlignmentAttributies(INNER_ALIGNMENT),
    ...generateResAlignmentAttributies(LABEL_POSITION),
    ...generateDimensionAttributes(COUNTLABEL_PADDING),
    ...generateDimensionAttributes(COUNTLABEL_MARGIN),
    ...generateDimensionAttributes(COUNT_LABEL_RADIUS),
    ...generateBorderAttributies(COUNTLABEL_BORDER),
    ...generateDimensionAttributes(COUNTNUM_PADDING),
    ...generateDimensionAttributes(COUNTBOX_MARGIN),
    ...generateDimensionAttributes(COUNT_NUM_RADIUS),
    ...generateBorderAttributies(COUNTNUM_BORDER),
    ...generateDimensionAttributes(COUNT_BOX_RADIUS),
    ...generateDimensionAttributes(COUNT_BOX_SIZE),
    ...generateResCounterAttributies(COUNT_BOX_GRID, {
        noUnits: true,
        defaults: {
            deskRange: 4,
            tabRange: 2,
            mobRange: 1,
        },
    }),
    ...generateGapAttributes(GRID_BOX_GAP, {
        defaultUnit: 'px',
    }),

    ...generateResRangeAttributies(SEPERATR_SPACING),
    ...generateResRangeAttributies(SEPARATOR_TOP_SPACING),
    ...generateBoxShadowAttributies(BOX_SHADOW),
    ...generateDimensionAttributes(ALLBOX_PADDING),
    ...generateDimensionAttributes(COUNT_MARGIN),
    ...generateBorderAttributies(COUNT_BORDER),
    ...generateNormalBGAttributes(COUNT_BG),
    ...generateNormalBGAttributes(COUNT_NUM_BG),
    ...generateNormalBGAttributes(COUNT_LABEL_BG),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    presets: {
        type: 'string',
    },
    CountDate: {
        type: 'string',
        default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
    },
    itemsVisibility: {
        type: 'object',
        default: {
            years: false,
            months: false,
            weeks: false,
            days: true,
            hours: true,
            minutes: true,
            seconds: true,
        },
    },
    itemsLabels: {
        type: 'object',
        default: {
            years: 'Years',
            months: 'Months',
            weeks: 'Weeks',
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds',
        },
    },
    toggleLabels: {
        type: 'boolean',
        default: true,
    },

    digitColor: {
        type: 'string',
    },
    labelColor: {
        type: 'string',
    },
    seperaColor: {
        type: 'string',
    },
    customLabel: {
        type: 'boolean',
        default: false,
    },
    countSeparator: {
        type: 'string',
        default: ':',
    },
    toggleSeparator: {
        type: 'boolean',
        default: true,
    },
    layout: {
        type: 'string',
        default: 'flex',
    },
    separatorItem: {
        type: 'string',
        default: '?',
    },
    overflow: {
        type: 'string',
        default: 'auto',
    },
};

export default attributes;
