
import { addFilter } from '@wordpress/hooks';



/**
* Attributes for the Text Animation
 */
addFilter('blocks.registerBlockType', 'zolo/advancedHeading/addAttribute', (settings, name) => {
    if (name !== 'zolo/advanced-heading') {
        return settings;
    }
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

/**
* Attributes for the backdrop filters.
*/
addFilter('blocks.registerBlockType', 'zolo/attributes/backdropFilters', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        settings.attributes = {
            ...settings.attributes,
            backdropFilters: {
                type: 'object',
                default: {
                    active: false,
                    blur: 0,
                    brightness: 100,
                    contrast: 100,
                    saturate: 100,
                    hueRotate: 0,
                    grayscale: 0,
                    invert: 0,
                    sepia: 0,
                    opacity: 100,
                },
            },
        };
    }
    return settings;
});

/**
* Attributes for the background parallax.
*/
addFilter('blocks.registerBlockType', 'zolo/attributes/backgroundParallax', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        settings.attributes = {
            ...settings.attributes,
            zoloBackgroundParallax: {
                type: 'object',
                default: {
                    active: false,
                },
            },
        };
    }

    return settings;
});

/**
* Attributes for the css filters.
*/
addFilter('blocks.registerBlockType', 'zolo/attributes/cssFilters', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        settings.attributes = {
            ...settings.attributes,
            cssFilters: {
                type: 'object',
                default: {
                    active: false,
                    blur: 0,
                    brightness: 100,
                    contrast: 100,
                    saturate: 100,
                    hueRotate: 0,
                },
            },
            cssFiltersHover: {
                type: 'object',
                default: {
                    active: false,
                    blur: 0,
                    brightness: 100,
                    contrast: 100,
                    saturate: 100,
                    hueRotate: 0,
                },
            },
        };
    }

    return settings;
});