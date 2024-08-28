import {
    ROW_ALIGNMENT,
    COLUMNS_GAP,
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_BORDER_RADIUS,
    ITEM_HOVER_PADDING,
    ITEM_HOVER_SHADOW,
    //home
    HOME_BG,
    HOME_BORDER,
    HOME_BORDER_RADIUS,
    HOME_PADDING,
    HOME_SHADOW,
    HOME_HOVER_BG,
    HOME_HOVER_BORDER_RADIUS,
    HOME_HOVER_PADDING,
    HOME_HOVER_SHADOW,
    HOME_ICON_SPACE,
    HOME_ICON_SIZE,
    //current
    CURRENT_BG,
    CURRENT_BORDER,
    CURRENT_BORDER_RADIUS,
    CURRENT_PADDING,
    CURRENT_SHADOW,
    CURRENT_HOVER_BG,
    CURRENT_HOVER_BORDER_RADIUS,
    CURRENT_HOVER_PADDING,
    CURRENT_HOVER_SHADOW,
    //separator
    SEP_SIZE,
    SEP_BG,
    SEP_BORDER,
    SEP_BORDER_RADIUS,
    SEP_PADDING,
    SEP_SHADOW,
    SEP_HOVER_BG,
    SEP_HOVER_BORDER_RADIUS,
    SEP_HOVER_PADDING,
    SEP_HOVER_SHADOW,
    SEP_MARGIN,
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
    generateResRangeAttributies,
    generateResAlignmentAttributies,
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
        default: '1',
    },
    showSeparator: {
        type: 'boolean',
        default: true,
    },
    separatorIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>',
    },
    showHome: {
        type: 'boolean',
        default: true,
    },
    homeText: {
        type: 'string',
        default: 'Home',
    },
    homeIcon: {
        type: 'string',
        default: '',
    },
    showCurrent: {
        type: 'boolean',
        default: true,
    },
    ...generateResAlignmentAttributies(ROW_ALIGNMENT),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
    }),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    itemColor: {
        type: 'string',
    },
    itemHoverColor: {
        type: 'string',
    },
    itemHoverBColor: {
        type: 'string',
    },
    homeColor: {
        type: 'string',
    },
    homeHoverColor: {
        type: 'string',
    },
    homeHoverBColor: {
        type: 'string',
    },
    currentColor: {
        type: 'string',
    },
    currentHoverColor: {
        type: 'string',
    },
    currentHoverBColor: {
        type: 'string',
    },
    sepColor: {
        type: 'string',
    },
    sepHoverColor: {
        type: 'string',
    },
    sepHoverBColor: {
        type: 'string',
    },

    homeBtnType: {
        type: 'string',
        default: 'text',
    },

    //item
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ITEM_SHADOW),
    ...generateDimensionAttributes(ITEM_HOVER_PADDING),
    ...generateNormalBGAttributes(ITEM_HOVER_BG),
    ...generateDimensionAttributes(ITEM_HOVER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
    //home
    ...generateDimensionAttributes(HOME_PADDING),
    ...generateNormalBGAttributes(HOME_BG),
    ...generateBorderAttributies(HOME_BORDER),
    ...generateDimensionAttributes(HOME_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HOME_SHADOW),
    ...generateDimensionAttributes(HOME_HOVER_PADDING),
    ...generateNormalBGAttributes(HOME_HOVER_BG),
    ...generateDimensionAttributes(HOME_HOVER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HOME_HOVER_SHADOW),
    ...generateResRangeAttributies(HOME_ICON_SIZE),
    ...generateGapAttributes(HOME_ICON_SPACE, {
        defaultUnit: 'px',
    }),
    //current
    ...generateDimensionAttributes(CURRENT_PADDING),
    ...generateNormalBGAttributes(CURRENT_BG),
    ...generateBorderAttributies(CURRENT_BORDER),
    ...generateDimensionAttributes(CURRENT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CURRENT_SHADOW),
    ...generateDimensionAttributes(CURRENT_HOVER_PADDING),
    ...generateNormalBGAttributes(CURRENT_HOVER_BG),
    ...generateDimensionAttributes(CURRENT_HOVER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CURRENT_HOVER_SHADOW),
    //separator
    ...generateResRangeAttributies(SEP_SIZE),
    ...generateDimensionAttributes(SEP_PADDING),
    ...generateDimensionAttributes(SEP_MARGIN),
    ...generateNormalBGAttributes(SEP_BG),
    ...generateBorderAttributies(SEP_BORDER),
    ...generateDimensionAttributes(SEP_BORDER_RADIUS),
    ...generateBoxShadowAttributies(SEP_SHADOW),
    ...generateDimensionAttributes(SEP_HOVER_PADDING),
    ...generateNormalBGAttributes(SEP_HOVER_BG),
    ...generateDimensionAttributes(SEP_HOVER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(SEP_HOVER_SHADOW),
};
export default attributes;
