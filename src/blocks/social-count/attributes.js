const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateGapAttributes,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //icon
    ICON_BG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    ICON_H_SPACING,
    ICON_HOVER_BG,
    COUNTER_SPACING,
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

    //grid
    ...generateResCounterAttributies(GRID_COLUMNS, {
        defaultRange: 4,
    }),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
    }),

    // item
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateBoxShadowAttributies(ITEM_SHADOW),
    ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
    ...generateNormalBGAttributes(ITEM_HOVER_BG),
    //icon
    ...generateNormalBGAttributes(ICON_BG),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateNormalBGAttributes(ICON_HOVER_BG),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(ICON_SPACING),
    ...generateResRangeAttributies(ICON_H_SPACING),

    //counter
    ...generateResRangeAttributies(COUNTER_SPACING),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    itemHoverBorderColor: {
        type: 'string',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconHoverBorderColor: {
        type: 'string',
    },
    counterColor: {
        type: 'string',
    },
    counterHoverColor: {
        type: 'string',
    },
    metaColor: {
        type: 'string',
    },
    metaHoverColor: {
        type: 'string',
    },
};

export default attributes;
