const { generateResRangeAttributies, generateNormalBGAttributes } = window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const attributes = addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            shapeBuilder: {
                type: 'object',
                default: {},
            },
            builderShapes: {
                type: 'array',
                default: [],
            },

            ...generateResRangeAttributies(TOP_HEIGHT_SHAPE),
            ...generateResRangeAttributies(BOTTOM_HEIGHT_SHAPE),
            ...generateResRangeAttributies(TOP_WIDTH_SHAPE, {
                defaultUnit: '%',
            }),
            ...generateResRangeAttributies(BOTTOM_WIDTH_SHAPE, {
                defaultUnit: '%',
            }),
            ...generateNormalBGAttributes('shapeBG1'),
        };
    }

    return settings;
});

export default attributes;
