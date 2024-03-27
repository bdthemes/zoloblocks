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
    DAYS_BG,
    DAYS_RADIUS,
    DAYS_PADDING,
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
                startDate: 'closed',
                endDate: '',
            },
            {
                id: 2,
                name: 'Sunday',
                startDate: 'closed',
                endDate: '',
            },
            {
                id: 3,
                name: 'Monday',
                startDate: '10:00 AM',
                endDate: '7:00 PM',
            },
            {
                id: 4,
                name: 'Tuesday',
                startDate: '10:00 AM',
                endDate: '7:00 PM',
            },
            {
                id: 5,
                name: ' Wednesday',
                startDate: '10:00 AM',
                endDate: '7:00 PM',
            },
            {
                id: 6,
                name: 'Thursday',
                startDate: '10:00 AM',
                endDate: '7:00 PM',
            },
            {
                id: 7,
                name: 'Friday',
                startDate: '10:00 AM',
                endDate: '7:00 PM',
            },
        ],
    },

    dayColor: {
        type: 'string',
    },
    timeColor: {
        type: 'string',
    },
};

export default attributes;
