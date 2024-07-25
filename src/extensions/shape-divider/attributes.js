const { generateDimensionAttributes } = window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const attributes = addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            enableShapeDivider: {
                type: 'boolean',
                default: false,
            },
            shapeDivider: {
                type: 'object',
                default: {
                    top: {
                        type: 'object',
                        default: {
                            type: 'none',
                            color: '',
                            invert: false,
                        },
                    },
                    bottom: {
                        type: 'object',
                        default: {
                            type: 'none',
                            color: '',
                            invert: false,
                        },
                    },
                },
            },
            topType: {
                type: 'string',
                default: 'book',
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
