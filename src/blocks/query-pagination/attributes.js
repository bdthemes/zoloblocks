/**
 * Internal dependencies
 */
const {
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    PAGINATION_ALIGN,
    PAGINATION_PADDING,
    PAGINATION_MARGIN,
    PAGINATION_BG,
    PAGINATION_BORDER,
    PAGINATION_BORDER_RADIUS,
    PAGINATION_SHADOW,
    PAGINATION_HOVER_BG,
    PAGINATION_HOVER_BORDER,
    PAGINATION_HOVER_BRADIUS,
    PAGINATION_HOVER_SHADOW,
    PAGINATION_ACTIVE_SHADOW,
    PAGINATION_ACTIVE_BG,
    NAV_BG,
    NAV_PADDING,
    NAV_MARGIN,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_SHADOW,
    NAV_HOVER_BG,
    NAV_HOVER_SHADOW,
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
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResAlignmentAttributies(PAGINATION_ALIGN),
    ...generateDimensionAttributes(PAGINATION_PADDING),
    ...generateDimensionAttributes(PAGINATION_MARGIN),
    ...generateNormalBGAttributes(PAGINATION_BG),
    ...generateBorderAttributies(PAGINATION_BORDER),
    ...generateDimensionAttributes(PAGINATION_BORDER_RADIUS),
    ...generateBoxShadowAttributies(PAGINATION_SHADOW),
    ...generateNormalBGAttributes(PAGINATION_HOVER_BG),
    ...generateBorderAttributies(PAGINATION_HOVER_BORDER),
    ...generateDimensionAttributes(PAGINATION_HOVER_BRADIUS),
    ...generateBoxShadowAttributies(PAGINATION_HOVER_SHADOW),
    ...generateBoxShadowAttributies(PAGINATION_ACTIVE_SHADOW),
    ...generateNormalBGAttributes(PAGINATION_ACTIVE_BG),

    //Nav Attributes
    ...generateNormalBGAttributes(NAV_BG),
    ...generateDimensionAttributes(NAV_PADDING),
    ...generateDimensionAttributes(NAV_MARGIN),
    ...generateBorderAttributies(NAV_BORDER),
    ...generateDimensionAttributes(NAV_BORDER_RADIUS),
    ...generateBoxShadowAttributies(NAV_SHADOW),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateBoxShadowAttributies(NAV_HOVER_SHADOW),

    paginationColor: {
        type: 'string',
    },

    paginationHoverColor: {
        type: 'string',
    },

    paginationHoverBorderColor: {
        type: 'string',
    },

    paginationActiveColor: {
        type: 'string',
    },

    paginationActiveBorderColor: {
        type: 'string',
    },

    navColor: {
        type: 'string',
    },

    navHoverColor: {
        type: 'string',
    },

    navHoverBorderColor: {
        type: 'string',
    },

    paginationType: {
        type: 'string',
        default: 'number-previous-next',
    },
    paginationNextPrevType: {
        type: 'string',
        default: 'icon',
    },
    truncatePaginationNumbers: {
        type: 'boolean',
        default: false,
    },
    PaginationNumberAmountBothSides: {
        type: 'number',
        default: 2,
    },
    paginationPreviousText: {
        type: 'string',
        default: 'Previous',
    },
    paginationNextText: {
        type: 'string',
        default: 'Next',
    },
    prevIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></svg>',
    },
    nextIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></svg>',
    },
};

export default attributes;
