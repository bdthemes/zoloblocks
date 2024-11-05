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
    MOBILE_MENU_WIDTH,
    MOBILE_MENU_WRAP_BG,
    MOBILE_MENU_WRAP_BORDER,
    MOBILE_MENU_WRAP_BORDER_RADIUS,
    MOBILE_MENU_WRAP_PADDING,
    MOBILE_MENU_WRAP_BOX_SHADOW,
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

    // Mobile Menu
    ...generateResRangeAttributies(MOBILE_MENU_WIDTH),
    ...generateNormalBGAttributes(MOBILE_MENU_WRAP_BG),
    ...generateBorderAttributies(MOBILE_MENU_WRAP_BORDER),
    ...generateDimensionAttributes(MOBILE_MENU_WRAP_BORDER_RADIUS),
    ...generateDimensionAttributes(MOBILE_MENU_WRAP_PADDING),
    ...generateBoxShadowAttributies(MOBILE_MENU_WRAP_BOX_SHADOW),

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

    navItemTextHoverColor: {
        type: 'string',
    },

    navItemTextActiveColor: {
        type: 'string',
    },

    navItemBorderHoverColor: {
        type: 'string',
    },

    navItemBorderActiveColor: {
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

    brandPhoto: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders?.zoloLogo,
            alt: '',
        },
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    humbergerIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>',
    },
};
export default attributes;
