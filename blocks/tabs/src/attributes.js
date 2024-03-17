/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
} = window.zoloModule;

import {
    NAV_ITEMS_ALIGN,
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_MARGIN,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_BOTTOM_SPACING,
    ACTIVE_HINT_HEIGHT,
    ICON_SIZE,
    ICON_BG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';
const attributes = {
    // global Attributes
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
    // tabs
    tabTitles: {
        type: 'array',
        default: [],
    },
    tabsLayout: {
        type: 'string',
        default: 'horizontal',
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showDesc: {
        type: 'boolean',
        default: true,
    },
    showIcon: {
        type: 'boolean',
        default: true,
    },
    tabChildCount: {
        type: 'number',
        default: 3,
    },
    tabActiveItemNo: {
        type: 'number',
        default: 1,
    },
    //tabs style title color
    normalTabColor: {
        type: 'string',
        default: '',
    },
    activeHintTabColor: {
        type: 'string',
        default: '',
    },
    hoverTabcolor: {
        type: 'string',
        default: '#000000',
    },
    activeTabColor: {
        type: 'string',
        default: '#000000',
    },
    //tabs style description color
    descColor: {
        type: 'string',
        default: '#000000',
    },
    descButtomSpacing: {
        type: 'number',
        default: 10,
    },
    descHoverColor: {
        type: 'string',
        default: '#000000',
    },
    descActiveColor: {
        type: 'string',
        default: '#000000',
    },
    //tabs style icon color
    iconColor: {
        type: 'string',
        default: '#000000',
    },

    // Generators
    ...generateResAlignmentAttributies(NAV_ITEMS_ALIGN),
    ...generateResRangeAttributies(NAV_SPACING),
    ...generateResRangeAttributies(CONTENT_SPACING),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(TAB_NORMAL_BGCOLOR),
    ...generateNormalBGAttributes(TAB_HOVER_BGCOLOR),
    ...generateNormalBGAttributes(TAB_ACTIVE_BGCOLOR),
    ...generateDimensionAttributes(TAB_ITEM_PADDING),
    ...generateDimensionAttributes(TAB_ITEM_MARGIN),
    ...generateDimensionAttributes(TAB_ITEM_RADIUS),
    ...generateResRangeAttributies(TITLE_BOTTOM_SPACING),
    ...generateResRangeAttributies(ACTIVE_HINT_HEIGHT),
    // ICON
    ...generateDimensionAttributes(ICON_SIZE),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
};

export default attributes;
