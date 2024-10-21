import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    META_SPACING,
    AVATAR_HW_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_PADDING,
    AVATAR_MARGIN,
    AVATAR_SHADOW,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    DATE_MARGIN,
} from './constants';

/**
 * Internal dependencies
 */
const {
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateGapAttributes,
    generateResCounterAttributies,
    generateResRangeAttributies,
} = window.zoloModule;

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
    // block attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showText: {
        type: 'boolean',
        default: true,
    },
    textLimit: {
        type: 'number',
        default: 30,
    },
    showAuthor: {
        type: 'boolean',
        default: true,
    },
    authorMiddleText: {
        type: 'string',
        default: '@',
    },
    avatarSize: {
        type: 'string',
        default: '80',
    },
    showDate: {
        type: 'boolean',
        default: true,
    },

    ...generateResCounterAttributies(GRID_COLUMNS, {
        deskRange: 1,
        tabRange: 1,
        mobRange: 1,
    }),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
    }),
    commentQuery: {
        type: 'object',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    textColor: {
        type: 'string',
    },
    authorColor: {
        type: 'string',
    },
    authorHoverColor: {
        type: 'string',
    },
    dateColor: {
        type: 'string',
    },
    //item
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ITEM_SHADOW),
    //avatar
    ...generateResRangeAttributies(AVATAR_HW_SIZE),
    ...generateBorderAttributies(AVATAR_BORDER),
    ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),
    ...generateDimensionAttributes(AVATAR_PADDING),
    ...generateDimensionAttributes(AVATAR_MARGIN),
    ...generateBoxShadowAttributies(AVATAR_SHADOW),
    ...generateResRangeAttributies(META_SPACING),
    ...generateDimensionAttributes(DATE_MARGIN),
};
export default attributes;
