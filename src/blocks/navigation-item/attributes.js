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
    SUB_MENU_INDICATOR_SIZE,
    SUB_MENU_INDICATOR_BG,
    SUB_MENU_INDICATOR_PADDING,
    SUB_MENU_INDICATOR_MARGIN,
    SUB_MENU_INDICATOR_BORDER,
    SUB_MENU_INDICATOR_BORDER_RADIUS,
    SUB_MENU_INDICATOR_BOX_SHADOW,
    SUB_MENU_INDICATOR_HOVER_BG,
    SUB_MENU_INDICATOR_ACTIVE_BG,
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

    ...generateResRangeAttributies(SUB_MENU_INDICATOR_SIZE),
    ...generateNormalBGAttributes(SUB_MENU_INDICATOR_BG),
    ...generateDimensionAttributes(SUB_MENU_INDICATOR_PADDING),
    ...generateDimensionAttributes(SUB_MENU_INDICATOR_MARGIN),
    ...generateBorderAttributies(SUB_MENU_INDICATOR_BORDER),
    ...generateDimensionAttributes(SUB_MENU_INDICATOR_BORDER_RADIUS),
    ...generateBoxShadowAttributies(SUB_MENU_INDICATOR_BOX_SHADOW),
    ...generateNormalBGAttributes(SUB_MENU_INDICATOR_HOVER_BG),
    ...generateNormalBGAttributes(SUB_MENU_INDICATOR_ACTIVE_BG),

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
    subMenuIndicator: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>',
    },
    subMenuIconColor: {
        type: 'string',
    },
    subMenuIconHoverColor: {
        type: 'string',
    },
    subMenuIconActiveColor: {
        type: 'string',
    },
    subMenuIconHoverBorderColor: {
        type: 'string',
    },

    subMenuIconActiveBorderColor: {
        type: 'string',
    },
};
export default attributes;
