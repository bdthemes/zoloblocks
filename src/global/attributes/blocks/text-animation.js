/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

// Internal Dependencies
const { generateResRangeAttributies } = window.zoloModule;

// constants

/**
 * Filter Hook: blocks.registerBlockType
 * Description: Add new attribute to zolo/advanced-button block
 *
 */
addFilter('blocks.registerBlockType', 'zolo/advancedHeading/addAttribute', (settings, name) => {
    if (name !== 'zolo/advanced-heading') {
        return settings;
    }

    // Add new attribute
    settings.attributes = {
        ...settings.attributes,
        splitTextActive: {
            type: 'boolean',
            default: false,
        },
        headingAnimation: {
            type: 'object',
            default: {
                translateX: {
                    value: 0,
                    unit: 'px',
                },
                translateY: {
                    value: 0,
                    unit: 'px',
                },
                translateZ: {
                    value: 0,
                    unit: 'px',
                },
                rotateX: {
                    value: 0,
                    unit: 'deg',
                },
                rotateY: {
                    value: 0,
                    unit: 'deg',
                },
                rotateZ: {
                    value: 0,
                    unit: 'deg',
                },
                rotate3dActive: {
                    value: false,
                },
                scaleX: {
                    value: 1,
                    unit: '',
                },
                scaleY: {
                    value: 1,
                    unit: '',
                },
                scaleZ: {
                    value: 1,
                    unit: '',
                },
                skewX: {
                    value: 0,
                    unit: 'deg',
                },
                skewY: {
                    value: 0,
                    unit: 'deg',
                },
                opacity: 0,
                easing: 'power4.out',
                easingCustom: [],
                repeat: false,
                perspective: 400,
                duration: 800,
                delay: 0,
                splitType: 'words',
                animationType: 'maskedSlideUp',
                transformOrigin: 'center',
                presetAnimation: 'bottomMedium',
                transformOriginCustom: '',
                stagger: 100,
            },
        },
    };
    return settings;
});
