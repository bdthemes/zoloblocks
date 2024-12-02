/**
 * Internal dependencies
 */
const {
    generateTextShadowAttributies,
    generateTextStrokeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    TITLE_ALIGN,
    TITLE_PADDING,
    TITLE_MARGIN,
    TITLE_BG,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_SHADOW,
    TITLE_HOVER_BG,
    TITLE_HOVER_BORDER,
    TITLE_HOVER_BRADIUS,
    TITLE_HOVER_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
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
    ...generateResAlignmentAttributies(TITLE_ALIGN),
    ...generateDimensionAttributes(TITLE_PADDING),
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateNormalBGAttributes(TITLE_BG),
    ...generateBorderAttributies(TITLE_BORDER),
    ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
    ...generateBoxShadowAttributies(TITLE_SHADOW),
    ...generateNormalBGAttributes(TITLE_HOVER_BG),
    ...generateBorderAttributies(TITLE_HOVER_BORDER),
    ...generateDimensionAttributes(TITLE_HOVER_BRADIUS),
    ...generateBoxShadowAttributies(TITLE_HOVER_SHADOW),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),

    paginationColor: {
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
