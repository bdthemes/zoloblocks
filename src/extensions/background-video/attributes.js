import { addFilter } from '@wordpress/hooks';

const attributes = addFilter('blocks.registerBlockType', 'zolo/extension/backgroundVideo', (settings) => {
    if (settings.category && settings.category == 'zoloblocks' && settings.name === 'zolo/container') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            backgroundVideo: {
                type: 'object',
                // default: {
                //     url: '',
                //     loop: true,
                //     muted: true,
                //     playsInline: true,
                //     preload: 'auto',
                //     autoPlay: true,
                //     position: 'absolute',
                //     top: '50%',
                //     left: '50%',
                //     transform: 'translate(-50%, -50%)',
                //     width: '100%',
                //     height: '100%',
                //     overflow: 'hidden',
                // }
            },
        };
    }

    return settings;
});

export default attributes;
