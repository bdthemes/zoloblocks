const { generateResRangeAttributies, generateNormalBGAttributes } = window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';
import { shape } from 'prop-types';

const attributes = addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        console.log('settings', settings.attributes);
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
        };
    }

    return settings;
});

export default attributes;
