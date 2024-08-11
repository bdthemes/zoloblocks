const { generateResRangeAttributies } = window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const attributes = addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            shapeDivider: {
                type: 'object',
                default: {
                    top: {
                        type: 'none',
                        color: '#2667ff',
                        invert: false,
                        flip: false,
                        bringToFront: false,
                    },
                    bottom: {
                        type: 'none',
                        color: '#2667ff',
                        invert: false,
                        flip: false,
                        bringToFront: false,
                    },
                },
            },
            ...generateResRangeAttributies(TOP_HEIGHT_SHAPE),
            ...generateResRangeAttributies(BOTTOM_HEIGHT_SHAPE),
            ...generateResRangeAttributies(TOP_WIDTH_SHAPE, {
                defaultUnit: '%',
            }),
            ...generateResRangeAttributies(BOTTOM_WIDTH_SHAPE, {
                defaultUnit: '%',
            }),
        };
    }

    return settings;
});

export default attributes;
