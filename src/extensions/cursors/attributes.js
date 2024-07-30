import { addFilter } from '@wordpress/hooks';

const attributes = addFilter('blocks.registerBlockType', 'zolo/attributes/cursors', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            zoloCursors: {
                type: 'object',
                default: {
                    active: false,
                    source: 'default',
                    preset: 'style-1',
                    speed: 1,
                    disabledDefault: false,
                },
            },
        };
    }

    return settings;
});

export default attributes;
