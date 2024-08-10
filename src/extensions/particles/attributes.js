import { addFilter } from '@wordpress/hooks';

const attributes = addFilter('blocks.registerBlockType', 'zolo/attributes/particles', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            zoloParticles: {
                type: 'object',
                default: {
                    particlesId: 'zolo-particles',
                    active: false,
                    preset: 'dust_wind',
                    particleOptions: {
                        customOptions: {},
                    },
                    colors: [],
                    toggleCustomOption: false,
                },
            },
        };
    }

    return settings;
});

export default attributes;
