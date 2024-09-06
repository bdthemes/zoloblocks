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

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // block attributes
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

    //submenu attributes
    addSubmenu: {
        type: 'boolean',
        default: false,
    },
    submenuType: {
        type: 'string',
        default: 'dropdown',
    },
    label: {
        type: 'string',
    },
    type: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    rel: {
        type: 'string',
    },
    id: {
        type: 'number',
    },
    opensInNewTab: {
        type: 'boolean',
        default: false,
    },
    url: {
        type: 'string',
    },
    title: {
        type: 'string',
    },
    kind: {
        type: 'string',
    },
};
export default attributes;
