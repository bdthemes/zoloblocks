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
    // BUTTON_BG,
    // BUTTON_HOVER_BG_COLOR,
    // BUTTON_BORDER,
    // BUTTON_BORDER_RADIUS,
    // BUTTON_BOX_SHADOW,
    // BUTTON_HOVER_BOX_SHADOW,
    // BUTTON_PADDING,
    // ICON_SIZE,
    // ICON_TEXT_SPACING,
    // ICON_BORDER,
    // ICON_BORDER_RADIUS,
    // ICON_BOX_SHADOW,
    // ICON_HOVER_BOX_SHADOW,
    // ICON_PADDING,
    // PO_SWIDTH,
    // PT_BORDER,
    // PT_BORDER_RADIUS,
    // PTH_BORDER,
    // PTH_BORDER_RADIUS,
    // PF_SWIDTH,
    // PFV_BORDER,
    // PFV_BORDER_RADIUS,
    // PS_BORDER,
    // PS_BORDER_RADIUS,
    // PSE_BORDER,
    // PSE_BRADIUS,
    // PSE_BG,
    // PT_BG,
    // PTH_BG,
    // PFTH_BG,
} from './constants';


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
};
export default attributes;
