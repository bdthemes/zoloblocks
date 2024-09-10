import {
    COLUMNS_GAP,
    GRID_COLUMNS,
    ITEM_HEIGHT,
    ITEM_TEXT_ALIGN,
    TEXT_SPACING,
    COUNT_PADDING,
    COUNT_BG,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    VIEW_BTN_PADDING,
    VIEW_BTN_BORDER,
    VIEW_BTN_BORDER_RADIUS,
    VIEW_BTN_SHADOW,
    THUMBNAIL_OVERLAY_BG,
} from './constants';

/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResCounterAttributies,
    generateResAlignmentAttributies,
    generateGapAttributes,
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
    showCount: {
        type: 'boolean',
        default: true,
    },
    showText: {
        type: 'boolean',
        default: false,
    },
    viewAllBtn: {
        type: 'boolean',
        default: false,
    },
    showImage: {
        type: 'boolean',
        default: false,
    },
    itemTextLimit: {
        type: 'number',
        default: 12,
    },
    itemHoverOpacity: {
        type: 'number',
    },
    ...generateResAlignmentAttributies(ITEM_TEXT_ALIGN),
    ...generateResRangeAttributies(ITEM_HEIGHT),
    ...generateResRangeAttributies(TEXT_SPACING),
    ...generateResCounterAttributies(GRID_COLUMNS, {
        deskRange: 4,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
    }),
    catQuery: {
        type: 'object',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
    },
    textHoverColor: {
        type: 'string',
    },
    countColor: {
        type: 'string',
    },
    countHoverColor: {
        type: 'string',
    },
    viewBtnColor: {
        type: 'string',
    },
    viewBtnHoverColor: {
        type: 'string',
    },
    viewAllBtnText: {
        type: 'string',
        default: 'View All',
    },
    viewAllBtnIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>',
    },
    viewBtnBgColor: {
        type: 'string',
    },
    viewBtnBgHoverColor: {
        type: 'string',
    },
    viewBtnIconColor: {
        type: 'string',
    },
    viewBtnIconHoverColor: {
        type: 'string',
    },

    itemBorderHoverColor: {
        type: 'string',
    },
    viewBtnHoverBorderColor: {
        type: 'string',
    },
    ...generateNormalBGAttributes(THUMBNAIL_OVERLAY_BG),
    //item
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ITEM_SHADOW),
    ...generateNormalBGAttributes(ITEM_HOVER_BG),
    ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
    //count
    ...generateDimensionAttributes(COUNT_PADDING),
    ...generateNormalBGAttributes(COUNT_BG),
    ...generateBorderAttributies(COUNT_BORDER),
    ...generateDimensionAttributes(COUNT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(COUNT_SHADOW),
    //view btn
    ...generateDimensionAttributes(VIEW_BTN_PADDING),
    ...generateBorderAttributies(VIEW_BTN_BORDER),
    ...generateDimensionAttributes(VIEW_BTN_BORDER_RADIUS),
    ...generateBoxShadowAttributies(VIEW_BTN_SHADOW),
};
export default attributes;
