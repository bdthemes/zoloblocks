const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateGapAttributes,
    generateResAlignmentAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    BUSINESS_ITEM_BG,
    BUSINESS_ITEM_ODD_BG,
    BUSINESS_ITEM_RADIUS,
    BUSINESS_ITEM_BORDER,
    BUSINESS_ITEM_MARGIN,
    BUSINESS_ITEM_PADDING,
    //closed day
    DAYS_BG,
    DAYS_RADIUS,
    DAYS_PADDING,
    //closed day
    CLOSED_DAYS_BG,
    CLOSED_DAYS_RADIUS,
    CLOSED_DAYS_PADDING,
    //time
    TIMES_BG,
    TIMES_RADIUS,
    TIMES_PADDING,
    //closed time
    CLOSED_TIMES_BG,
    CLOSED_TIMES_RADIUS,
    CLOSED_TIMES_PADDING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Global Attributes
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
    ...generateNormalBGAttributes(BUSINESS_ITEM_BG),
    ...generateNormalBGAttributes(BUSINESS_ITEM_ODD_BG),
    ...generateDimensionAttributes(BUSINESS_ITEM_RADIUS),
    ...generateBorderAttributies(BUSINESS_ITEM_BORDER),
    ...generateDimensionAttributes(BUSINESS_ITEM_MARGIN),
    ...generateDimensionAttributes(BUSINESS_ITEM_PADDING),

    // days
    ...generateNormalBGAttributes(DAYS_BG),
    ...generateDimensionAttributes(DAYS_RADIUS),
    ...generateDimensionAttributes(DAYS_PADDING),
    // closed days
    ...generateNormalBGAttributes(CLOSED_DAYS_BG),
    ...generateDimensionAttributes(CLOSED_DAYS_RADIUS),
    ...generateDimensionAttributes(CLOSED_DAYS_PADDING),
    //times

    ...generateNormalBGAttributes(TIMES_BG),
    ...generateDimensionAttributes(TIMES_RADIUS),
    ...generateDimensionAttributes(TIMES_PADDING),
    //Closed times
    ...generateNormalBGAttributes(CLOSED_TIMES_BG),
    ...generateDimensionAttributes(CLOSED_TIMES_RADIUS),
    ...generateDimensionAttributes(CLOSED_TIMES_PADDING),

    //Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    preset: {
        type: 'string',
        default: 'zolo-biz-hours-style-1',
    },
    businessList: {
        type: 'array',
        default: [
            {
                id: 1,
                name: 'Saturday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: false,
                closedDay: 'closed',
            },
            {
                id: 2,
                name: 'Sunday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: false,
                closedDay: 'closed',
            },
            {
                id: 3,
                name: 'Monday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: true,
                closedDay: 'closed',
            },
            {
                id: 4,
                name: 'Tuesday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: true,
                closedDay: 'closed',
            },
            {
                id: 5,
                name: ' Wednesday',
                startDate: '09:00 AM',
                endDate: '5:00 PM',
                toggleworkday: true,
                closedDay: 'closed',
            },
            {
                id: 6,
                name: 'Thursday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: true,
                closedDay: 'closed',
            },
            {
                id: 7,
                name: 'Friday',
                startDate: '9:00 AM',
                endDate: '5:00 PM',
                toggleworkday: true,
                closedDay: 'closed',
            },
        ],
    },

    dayColor: {
        type: 'string',
    },
    CloseddayColor: { type: 'string' },
    timeColor: {
        type: 'string',
    },
    timeclosedColor: {
        type: 'string',
    },
};

export default attributes;
