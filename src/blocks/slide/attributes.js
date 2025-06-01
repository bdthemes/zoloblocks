/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateBorderAttributies, generateDimensionAttributes, generateNormalBGAttributes } =
    window.zoloModule;

import { SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

const attributes = {
    // global attributes
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
            responsiveControls: false,
        },
    },
    // Generators
    ...generateNormalBGAttributes(SLIDE_BG),
    ...generateDimensionAttributes(SLIDE_PADDING),
    ...generateBorderAttributies(SLIDE_BORDER),
    ...generateDimensionAttributes(SLIDE_BORDER_RADIUS),

    enableOverlay: {
        type: 'boolean',
        default: false,
    },
    overlayType: {
        type: 'string',
        default: 'overlay_color',
    },
    overlayColor: {
        type: 'string',
    },
    overlayGradient: {
        type: 'string',
    },
};

export default attributes;
