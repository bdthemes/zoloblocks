/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateResCounterAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateTextShadowAttributies,
    generateResAlignmentAttributies,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    TEXT_MARGIN,
    COLUMNS,
    COLUMNS_GAP,
    TEXT_ALIGNMENT,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    LINK_BORDER,
    LINK_BOX_SHADOW,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    DROP_CAP_SHADOW,
    DROP_CAP_BG_COLOR,
    DROP_CAP_BORDER,
    DROP_CAP_RADIUS,
    DROP_CAP_PADDING,
    DROP_CAP_MARGIN,
    TEXT_GRADIENT_COLOR,
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
    content: {
        type: 'string',
        source: 'html',
        selector: 'div',
        default: '',
    },
    dropcap: {
        type: 'boolean',
        default: false,
    },
    textColor: {
        type: 'string',
        default: '#39384b',
    },
    linkColor: {
        type: 'string',
        default: '#2667ff',
    },
    hoverLinkColor: {
        type: 'string',
        default: '#175af5',
    },
    hoverLinkBorderColor: {
        type: 'string',
    },
    dropcapColor: {
        type: 'string',
        default: '#000000',
    },

    textGradient: {
        type: 'boolean',
        default: false,
    },

    textGradientType: {
        type: 'string',
        default: 'zolo-text-gradient-color',
    },

    ...generateDimensionAttributes(TEXT_MARGIN),
    ...generateResCounterAttributies(COLUMNS, {
        deskRange: 1,
        tabRange: 1,
        mobRange: 1,
    }),
    ...generateResRangeAttributies(COLUMNS_GAP),
    ...generateResAlignmentAttributies(TEXT_ALIGNMENT),
    ...generateNormalBGAttributes(LINK_BG_COLOR),
    ...generateDimensionAttributes(LINK_RADIUS),
    ...generateDimensionAttributes(LINK_PADDING),
    ...generateBorderAttributies(LINK_BORDER),
    ...generateBoxShadowAttributies(LINK_BOX_SHADOW),
    ...generateNormalBGAttributes(HOVER_LINK_BG_COLOR),
    ...generateDimensionAttributes(HOVER_LINK_RADIUS),
    ...generateDimensionAttributes(HOVER_LINK_PADDING),
    ...generateTextShadowAttributies(DROP_CAP_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(DROP_CAP_BG_COLOR),
    ...generateBorderAttributies(DROP_CAP_BORDER),
    ...generateDimensionAttributes(DROP_CAP_RADIUS),
    ...generateDimensionAttributes(DROP_CAP_PADDING),
    ...generateDimensionAttributes(DROP_CAP_MARGIN),
    ...generateNormalBGAttributes(TEXT_GRADIENT_COLOR),
};

export default attributes;
