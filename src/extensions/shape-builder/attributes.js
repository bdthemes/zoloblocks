const { generateResRangeAttributies, generateBorderAttributies, generateBoxShadowAttributies, generateNormalBGAttributes } =
    window.zoloModule;

import { addFilter } from '@wordpress/hooks';

import { ANIMATION_DURATION } from './constants';

const attributes = addFilter('blocks.registerBlockType', 'zolo/shapeBuilder/addAttribute', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            shapeBuilder: {
                type: 'object',
                default: {
                    enabled: false,
                },
            },
            shape: {
                type: 'array',
                default: [
                    {
                        id: 'shape-1',
                        shapeType: 'blob',
                        color: '',
                        width: 100,
                        height: 100,
                    },
                ],
            },
        };
    }

    return settings;
});

export default attributes;
