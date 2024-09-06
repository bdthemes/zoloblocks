/**
 * Internal dependencies
 */
const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    NAV_MENU_ALIGNMENT,
    NAV_MENU_WRAP_BG,
    NAV_MENU_WRAP_BORDER,
    NAV_MENU_WRAP_BORDER_RADIUS,
    NAV_MENU_WRAP_PADDING,
    NAV_MENU_WRAP_BOX_SHADOW,
    NAV_MENU_ITEM_BG,
    NAV_MENU_ITEM_BORDER,
    NAV_MENU_ITEM_BORDER_RADIUS,
    NAV_MENU_ITEM_PADDING,
    NAV_MENU_ITEM_BOX_SHADOW,
    NAV_MENU_ITEM_HOVER_BG,
    NAV_MENU_ITEM_ACTIVE_BG,
    DROPDOWN_WRAP_BG,
    DROPDOWN_WRAP_BORDER,
    DROPDOWN_WRAP_BORDER_RADIUS,
    DROPDOWN_WRAP_PADDING,
    DROPDOWN_WRAP_MARGIN,
    DROPDOWN_WRAP_BOX_SHADOW,
    DROPDOWN_WIDTH,
    SUB_MENU_BG,
    SUB_MENU_BORDER,
    SUB_MENU_BORDER_RADIUS,
    SUB_MENU_PADDING,
    SUB_MENU_MARGIN,
    SUB_MENU_BOX_SHADOW,
    SUB_MENU_HOVER_BG,
    SUB_MENU_ACTIVE_BG,
    MB_LOGO_WIDTH,
    MB_LOGO_HEIGHT,
    MB_LOGO_MARGIN,
    MB_LOGO_PADDING,
    HUMBURGER_MENU_ICON_SIZE,
    HUMBURGER_MENU_BG,
    HUMBURGER_MENU_BORDER,
    HUMBURGER_MENU_BORDER_RADIUS,
    HUMBURGER_MENU_PADDING,
    HUMBURGER_MENU_MARGIN,
    HUMBURGER_MENU_BOX_SHADOW,
    HUMBURGER_MENU_HOVER_BG,
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Common Attributes

    globalConfig: {
        type: 'object',
        default: {
            background: {
                prefix: 'mainBg',
            },
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
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
    ...generateResAlignmentAttributies(NAV_MENU_ALIGNMENT),
    ...generateNormalBGAttributes(NAV_MENU_WRAP_BG),
    ...generateBorderAttributies(NAV_MENU_WRAP_BORDER),
    ...generateDimensionAttributes(NAV_MENU_WRAP_BORDER_RADIUS),
    ...generateDimensionAttributes(NAV_MENU_WRAP_PADDING),
    ...generateBoxShadowAttributies(NAV_MENU_WRAP_BOX_SHADOW),
    ...generateNormalBGAttributes(NAV_MENU_ITEM_BG),
    ...generateBorderAttributies(NAV_MENU_ITEM_BORDER),
    ...generateDimensionAttributes(NAV_MENU_ITEM_BORDER_RADIUS),
    ...generateDimensionAttributes(NAV_MENU_ITEM_PADDING),
    ...generateBoxShadowAttributies(NAV_MENU_ITEM_BOX_SHADOW),
    ...generateNormalBGAttributes(NAV_MENU_ITEM_HOVER_BG),
    ...generateNormalBGAttributes(NAV_MENU_ITEM_ACTIVE_BG),
    ...generateNormalBGAttributes(DROPDOWN_WRAP_BG),
    ...generateBorderAttributies(DROPDOWN_WRAP_BORDER),
    ...generateDimensionAttributes(DROPDOWN_WRAP_BORDER_RADIUS),
    ...generateDimensionAttributes(DROPDOWN_WRAP_PADDING),
    ...generateDimensionAttributes(DROPDOWN_WRAP_MARGIN),
    ...generateBoxShadowAttributies(DROPDOWN_WRAP_BOX_SHADOW),
    ...generateResRangeAttributies(DROPDOWN_WIDTH),
    ...generateNormalBGAttributes(SUB_MENU_BG),
    ...generateBorderAttributies(SUB_MENU_BORDER),
    ...generateDimensionAttributes(SUB_MENU_BORDER_RADIUS),
    ...generateDimensionAttributes(SUB_MENU_PADDING),
    ...generateDimensionAttributes(SUB_MENU_MARGIN),
    ...generateBoxShadowAttributies(SUB_MENU_BOX_SHADOW),
    ...generateNormalBGAttributes(SUB_MENU_HOVER_BG),
    ...generateNormalBGAttributes(SUB_MENU_ACTIVE_BG),

    // Mobile
    ...generateResRangeAttributies(MB_LOGO_WIDTH),
    ...generateResRangeAttributies(MB_LOGO_HEIGHT),
    ...generateDimensionAttributes(MB_LOGO_MARGIN),
    ...generateDimensionAttributes(MB_LOGO_PADDING),

    // Hamburger
    ...generateResRangeAttributies(HUMBURGER_MENU_ICON_SIZE),
    ...generateNormalBGAttributes(HUMBURGER_MENU_BG),
    ...generateBorderAttributies(HUMBURGER_MENU_BORDER),
    ...generateDimensionAttributes(HUMBURGER_MENU_BORDER_RADIUS),
    ...generateDimensionAttributes(HUMBURGER_MENU_PADDING),
    ...generateDimensionAttributes(HUMBURGER_MENU_MARGIN),
    ...generateBoxShadowAttributies(HUMBURGER_MENU_BOX_SHADOW),
    ...generateNormalBGAttributes(HUMBURGER_MENU_HOVER_BG),

    // Close Icon
    ...generateResRangeAttributies(CLOSE_ICON_SIZE),
    ...generateNormalBGAttributes(CLOSE_ICON_BG),
    ...generateBorderAttributies(CLOSE_ICON_BORDER),
    ...generateDimensionAttributes(CLOSE_ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(CLOSE_ICON_PADDING),
    ...generateDimensionAttributes(CLOSE_ICON_MARGIN),
    ...generateBoxShadowAttributies(CLOSE_ICON_BOX_SHADOW),
    ...generateNormalBGAttributes(CLOSE_ICON_HOVER_BG),

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // block attributes
    isVariationSelected: {
        type: 'boolean',
        default: false,
    },
    menuBreakpoint: {
        type: 'string',
        default: 'tablet',
    },

    navItemTextColor: {
        type: 'string',
    },

    navItemHoverTextColor: {
        type: 'string',
    },

    navItemActiveTextColor: {
        type: 'string',
    },

    navItemBorderHoverColor: {
        type: 'string',
    },

    navItemBorderActiveColor: {
        type: 'string',
    },

    subMenuTextColor: {
        type: 'string',
    },

    subMenuHoverTextColor: {
        type: 'string',
    },

    subMenuActiveTextColor: {
        type: 'string',
    },

    subMenuBorderHoverColor: {
        type: 'string',
    },

    subMenuBorderActiveColor: {
        type: 'string',
    },

    humburgerMenuColor: {
        type: 'string',
    },

    humburgerMenuHoverColor: {
        type: 'string',
    },

    humburgerMenuBorderHoverColor: {
        type: 'string',
    },

    closeIconColor: {
        type: 'string',
    },

    closeIconHoverColor: {
        type: 'string',
    },

    closeIconBorderHoverColor: {
        type: 'string',
    },
};
export default attributes;
