/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateTextShadowAttributies,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    COLUMNS,
    TEXT_ALIGNMENT,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    FOCUS_TEXT_PADDING,
    USE_TEXT_BG_COLOR,
    USE_BG_RADIUS,
    USE_FILL_BG_COLOR,
    DROP_CROP_SHADOW,
    DROP_CROP_BG_COLOR,
    DROP_CROP_BORDER,
    DROP_CROP_RADIUS,
    DROP_CROP_PADDING,
    DROP_CROP_MARGIN,
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
    dropcap: {
        type: 'boolean',
        default: false,
    },
    textColor: {
        type: 'string',
        default: '#000000',
    },
    hoverTextColor: {
        type: 'string',
        default: '#000000',
    },
    linkColor: {
        type: 'string',
        default: '#000000',
    },
    hoverLinkColor: {
        type: 'string',
        default: '#000000',
    },
    focusTextColor: {
        type: 'string',
        default: '#000000',
    },
    focusHoverTextColor: {
        type: 'string',
        default: '#000000',
    },
    textDecorColor: {
        type: 'string',
        default: '#000000',
    },
    useBgOnText: {
        type: 'boolean',
        default: false,
    },
    useTextFill: {
        type: 'boolean',
        default: false,
    },
    dropcapColor: {
        type: 'string',
        default: '#000000',
    },

    ...generateResRangeAttributies(COLUMNS),
    ...generateResAlignmentAttributies(TEXT_ALIGNMENT),
    ...generateNormalBGAttributes(LINK_BG_COLOR),
    ...generateDimensionAttributes(LINK_RADIUS),
    ...generateDimensionAttributes(LINK_PADDING),
    ...generateNormalBGAttributes(HOVER_LINK_BG_COLOR),
    ...generateDimensionAttributes(HOVER_LINK_RADIUS),
    ...generateDimensionAttributes(HOVER_LINK_PADDING),
    ...generateDimensionAttributes(FOCUS_TEXT_PADDING),
    ...generateNormalBGAttributes(USE_TEXT_BG_COLOR),
    ...generateDimensionAttributes(USE_BG_RADIUS),
    ...generateNormalBGAttributes(USE_FILL_BG_COLOR),
    ...generateTextShadowAttributies(DROP_CROP_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(DROP_CROP_BG_COLOR),
};

export default attributes;
