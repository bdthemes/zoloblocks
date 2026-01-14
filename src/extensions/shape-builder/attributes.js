const { generateResRangeAttributies, generateBorderAttributies, generateBoxShadowAttributies, generateNormalBGAttributes } =
    window.zoloModule;

import { addFilter } from '@wordpress/hooks';

const attributes = addFilter('blocks.registerBlockType', 'zolo/shapeBuilder/addAttribute', (settings) => {
    if (settings?.name?.startsWith('zolo/')) {
        settings.attributes = {
            ...settings.attributes,
            enableShapeBuilder: {
                type: 'boolean',
                default: false,
            },
            shape: {
                type: 'array',
                default: [
                    {
                        id: 'shape-1',
                        shapeType: 'circle',
                    },
                ],
            },
        };
    }

    return settings;
});

export default attributes;
