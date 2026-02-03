import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
const {
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResRangeAttributies,
} = window.zoloModule;

import {
    //box
    BOX_PADDING,
    BOX_SEPARATOR_WIDTH,
    BOX_MIN_HEIGHT,
    BOX_MAX_WIDTH,
    BOX_BORDER,
    BOX_BORDER_RADIUS,
    BOX_SHADOW,

    // content
    CONTENT_PADDING,
    //header
    HEADER_BG,
    HEADER_PADDING,
    HEADER_MARGIN,
    HEADER_BORDER,
    HEADER_BORDER_RADIUS,
    HEADER_SHADOW,
    HEADER_ICON_SIZE,

    // toggle
    TOGGLE_ICON_BG,
    TOGGLE_ICON_PADDING,
    TOGGLE_ICON_MARGIN,
    TOGGLE_ICON_BORDER,
    TOGGLE_ICON_SHADOW,
    TOGGLE_ICON_BORDER_RADIUS,
    TOGGLE_ICON_H_BG,
    TOGGLE_ICON_H_SHADOW,

    //close
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_SHADOW,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_H_BG,
    CLOSE_ICON_H_SHADOW,

    // open
    OPEN_BTN_BG,
    OPEN_BTN_PADDING,
    OPEN_BTN_MARGIN,
    OPEN_BTN_BORDER,
    OPEN_BTN_SHADOW,
    OPEN_BTN_BORDER_RADIUS,
    OPEN_BTN_H_BG,
    OPEN_BTN_H_SHADOW,

    // list item marker
    UNORDERED_LIST_ITEM_MARKER_SIZE,
    UNORDERED_LIST_ITEM_MARKER_OFFSET,

    // LIST
    LIST_SPACE_BETWEEN,

    // child list
    CHILD_LIST_SPACE_BETWEEN,
    CHILD_LIST_TIMELINE_WIDTH,
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

    // block attributes
    showHeading: {
        type: 'boolean',
        default: true,
    },
    showCollapsible: {
        type: 'boolean',
        default: false,
    },
    isCollapsed: {
        type: 'boolean',
        default: true,
    },
    showSticky: {
        type: 'boolean',
        default: false,
    },
    stickyPosition: {
        type: 'string',
        default: 'left',
    },
    headingText: {
        type: 'string',
        default: 'Table of Contents',
    },
    headers: {
        type: 'array',
        default: [],
    },
    headingTags: {
        type: 'array',
        default: [
            { label: __('H1', 'zoloblocks'), value: 'h1' },
            { label: __('H2', 'zoloblocks'), value: 'h2' },
            { label: __('H3', 'zoloblocks'), value: 'h3' },
            { label: __('H4', 'zoloblocks'), value: 'h4' },
            { label: __('H5', 'zoloblocks'), value: 'h5' },
            { label: __('H6', 'zoloblocks'), value: 'h6' },
        ],
    },
    allowedHeading: {
        type: 'object',
        default: {
            h1: true,
            h2: true,
            h3: true,
            h4: true,
            h5: true,
            h6: true,
        },
    },
    contentSelector: {
        type: 'string',
        default: '',
    },
    listStyle: {
        type: 'string',
        default: 'ol',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //box
    ...generateDimensionAttributes(BOX_PADDING),
    ...generateResRangeAttributies(BOX_SEPARATOR_WIDTH),
    ...generateResRangeAttributies(BOX_MIN_HEIGHT),
    ...generateResRangeAttributies(BOX_MAX_WIDTH),
    ...generateBorderAttributies(BOX_BORDER),
    ...generateDimensionAttributes(BOX_BORDER_RADIUS),
    ...generateBoxShadowAttributies(BOX_SHADOW),

    //content
    ...generateDimensionAttributes(CONTENT_PADDING),
    //header

    ...generateNormalBGAttributes(HEADER_BG),
    ...generateDimensionAttributes(HEADER_PADDING),
    ...generateDimensionAttributes(HEADER_MARGIN),
    ...generateBorderAttributies(HEADER_BORDER),
    ...generateDimensionAttributes(HEADER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HEADER_SHADOW),
    ...generateResRangeAttributies(HEADER_ICON_SIZE),

    // toggle
    ...generateNormalBGAttributes(TOGGLE_ICON_BG),
    ...generateDimensionAttributes(TOGGLE_ICON_PADDING),
    ...generateDimensionAttributes(TOGGLE_ICON_MARGIN),
    ...generateBorderAttributies(TOGGLE_ICON_BORDER),
    ...generateBoxShadowAttributies(TOGGLE_ICON_SHADOW),
    ...generateDimensionAttributes(TOGGLE_ICON_BORDER_RADIUS),
    ...generateNormalBGAttributes(TOGGLE_ICON_H_BG),
    ...generateBoxShadowAttributies(TOGGLE_ICON_H_SHADOW),

    //close
    ...generateResRangeAttributies(CLOSE_ICON_SIZE),
    ...generateNormalBGAttributes(CLOSE_ICON_BG),
    ...generateDimensionAttributes(CLOSE_ICON_PADDING),
    ...generateDimensionAttributes(CLOSE_ICON_MARGIN),
    ...generateBorderAttributies(CLOSE_ICON_BORDER),
    ...generateBoxShadowAttributies(CLOSE_ICON_SHADOW),
    ...generateDimensionAttributes(CLOSE_ICON_BORDER_RADIUS),
    ...generateNormalBGAttributes(CLOSE_ICON_H_BG),
    ...generateBoxShadowAttributies(CLOSE_ICON_H_SHADOW),

    // open
    ...generateNormalBGAttributes(OPEN_BTN_BG),
    ...generateDimensionAttributes(OPEN_BTN_PADDING),
    ...generateDimensionAttributes(OPEN_BTN_MARGIN),
    ...generateBorderAttributies(OPEN_BTN_BORDER),
    ...generateBoxShadowAttributies(OPEN_BTN_SHADOW),
    ...generateDimensionAttributes(OPEN_BTN_BORDER_RADIUS),
    ...generateNormalBGAttributes(OPEN_BTN_H_BG),
    ...generateBoxShadowAttributies(OPEN_BTN_H_SHADOW),

    // LIST
    ...generateResRangeAttributies(LIST_SPACE_BETWEEN),
    ...generateResRangeAttributies(UNORDERED_LIST_ITEM_MARKER_SIZE),
    ...generateResRangeAttributies(UNORDERED_LIST_ITEM_MARKER_OFFSET),

    // child list
    ...generateResRangeAttributies(CHILD_LIST_SPACE_BETWEEN),
    ...generateResRangeAttributies(CHILD_LIST_TIMELINE_WIDTH),
    boxBgColor: {
        type: 'string',
    },
    boxSeparatorColor: {
        type: 'string',
    },
    headerColor: {
        type: 'string',
    },
    headerIconColor: {
        type: 'string',
    },
    toggleHoverIconColor: {
        type: 'string',
    },
    toggleHoverIconBorderColor: {
        type: 'string',
    },
    // close
    closeIconColor: {
        type: 'string',
    },
    closeIconHoverColor: {
        type: 'string',
    },
    closeIconHoverBorderColor: {
        type: 'string',
    },
    // open
    openBtnIconColor: {
        type: 'string',
    },
    openBtnIconHoverColor: {
        type: 'string',
    },
    openBtnIconHoverBorderColor: {
        type: 'string',
    },
    listColor: {
        type: 'string',
    },
    listHoverColor: {
        type: 'string',
    },
    listActiveColor: {
        type: 'string',
    },
    // child list
    childListColor: {
        type: 'string',
    },
    childListHoverColor: {
        type: 'string',
    },
    childListActiveColor: {
        type: 'string',
    },
    childListTimelineColor: {
        type: 'string',
    },
    childListTimelineActiveColor: {
        type: 'string',
    },
};

export default attributes;
