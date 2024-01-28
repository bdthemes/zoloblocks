/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    SEPARATOR_TYPE,
    OVERALL_ALIGNMENT,
    INNER_ALIGNMENT,
    LABEL_POSITION,
    BOX_WIDTH,
    GAP_BOX_WIDTH,
    GAP_BETWEEN_DIGITLABEL,
    ALLBOX_PADDING,
    SEPERATR_SPACING,
    SEPARATOR_TOP_SPACING,
    BOX_SHADOW,
    COUNT_PADDING,
    COUNT_MARGIN,
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
    ...generateResAlignmentAttributies(SEPARATOR_TYPE),
    ...generateResAlignmentAttributies(OVERALL_ALIGNMENT),
    ...generateResAlignmentAttributies(INNER_ALIGNMENT),
    ...generateResAlignmentAttributies(LABEL_POSITION),
    ...generateResRangeAttributies(BOX_WIDTH),
    ...generateResRangeAttributies(GAP_BOX_WIDTH),
    ...generateResRangeAttributies(GAP_BETWEEN_DIGITLABEL),
    ...generateResRangeAttributies(SEPERATR_SPACING),
    ...generateResRangeAttributies(SEPARATOR_TOP_SPACING),
    ...generateBoxShadowAttributies(BOX_SHADOW),
    ...generateDimensionAttributes(ALLBOX_PADDING),
    ...generateDimensionAttributes(COUNT_PADDING),
    ...generateDimensionAttributes(COUNT_MARGIN),

    ...generateTypographyAttributes(Object.values(typographyObjs)),
    CountDate: {
        type: 'string',
        default: new Date(),
    },
    toggleYears: {
        type: 'boolean',
        default: true,
    },
    toggleMonths: {
        type: 'boolean',
        default: true,
    },
    toggleDays: {
        type: 'boolean',
        default: true,
    },
    toggleHourse: {
        type: 'boolean',
        default: true,
    },
    toggleMinutes: {
        type: 'boolean',
        default: true,
    },
    toggleLabels: {
        type: 'boolean',
        defalult: true,
    },
    yearsLabel: {
        type: 'string',
        default: 'years',
    },
    monthsLabel: {
        type: 'string',
        default: 'Months',
    },
    daysLabel: {
        type: 'string',
        default: 'days',
    },
    hoursLabel: {
        type: 'string',
        default: 'Hours',
    },
    minutesLabel: {
        type: 'string',
        default: 'Minutes',
    },
    secondsLabel: {
        type: 'string',
        default: 'Seconds',
    },
    toggleSeparator: {
        type: 'boolen',
        default: true,
    },
    seperatorType: {
        type: 'string',
        default: ':',
    },
    borderStyle: {
        type: 'string',
        default: 'default',
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
};

export default attributes;
