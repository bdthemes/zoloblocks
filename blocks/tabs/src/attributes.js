/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies, generateNormalBGAttributes } =
    window.zoloModule;

import { NAV_ITEMS_ALIGN, NAV_SPACING, CONTENT_SPACING, TAB_NORMAL_BGCOLOR, TAB_HOVER_BGCOLOR, TAB_ACTIVE_BGCOLOR } from './constants';

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
    tabChildCount: {
        type: 'number',
        default: 3,
    },
    tabActiveItemNo: {
        type: 'number',
        default: 1,
    },
    //tabs style
    normalTabColor: {
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

    // Generators
    ...generateResAlignmentAttributies(NAV_ITEMS_ALIGN),
    ...generateResRangeAttributies(NAV_SPACING),
    ...generateResRangeAttributies(CONTENT_SPACING),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(TAB_NORMAL_BGCOLOR),
    ...generateNormalBGAttributes(TAB_HOVER_BGCOLOR),
    ...generateNormalBGAttributes(TAB_ACTIVE_BGCOLOR),
};

export default attributes;
