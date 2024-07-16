const { generateResAlignmentAttributies, generateResRangeAttributies, generateBorderAttributies, generateDimensionAttributes } =
    window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { TOP_COLOR_SHAPE, TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const attributes = addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            enableShapeDivider: {
                type: 'boolean',
                default: false,
            },
            topType: {
                type: 'string',
                default: 'arrow',
            },

            // style Attributes
            topColor: {
                type: 'string',
                default: '',
            },
            topInvert: {
                type: 'boolean',
                default: false,
            },
            bottomType: {
                type: 'string',
                default: '',
            },
            bottomColor: {
                type: 'string',
                default: '',
            },
            bottomInvert: {
                type: 'boolean',
                default: false,
            },
            bringFront: {
                type: 'boolean',
                default: false,
            },
            ...generateDimensionAttributes(TOP_WIDTH_SHAPE),
            ...generateDimensionAttributes(TOP_HEIGHT_SHAPE),
            ...generateDimensionAttributes(BOTTOM_WIDTH_SHAPE),
            ...generateDimensionAttributes(BOTTOM_HEIGHT_SHAPE),
        };
    }

    return settings;
});

export default attributes;
