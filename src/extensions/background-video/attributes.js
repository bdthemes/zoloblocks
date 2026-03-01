import { addFilter } from '@wordpress/hooks';

const attributes = addFilter('blocks.registerBlockType', 'zolo/extension/backgroundVideo', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single') && (settings.name === 'zolo/container' || settings.name === 'zolo/slide')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            backgroundVideo: {
                type: 'object',
            },
        };
    }

    return settings;
});

export default attributes;
