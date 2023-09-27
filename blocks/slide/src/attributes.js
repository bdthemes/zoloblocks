/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateBorderAttributies, generateDimensionAttributes, generateNormalBGAttributes } =
    window.zoloModule;

import { SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

const attributes = {
    //Common Attributes
    uniqueId: {
        type: 'string',
    },
    resDevice: {
        type: 'string',
        default: 'Desktop',
    },
    blockStyle: {
        type: 'object',
    },
    // Generators
    ...generateNormalBGAttributes(SLIDE_BG),
    ...generateResRangeAttributies(SLIDE_PADDING),
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
