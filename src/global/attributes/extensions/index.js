/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateNormalBGAttributes,
    generateDimensionAttributes,
    generateTypographyAttributes,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';
import { delay } from 'motion';

/**
 * Attributes for the visibility extension.
 */
addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/addVisibilityAttribute', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            enableAdvancedVisibility: {
                type: 'boolean',
                default: false,
            },
            visibilityType: {
                type: 'string',
                default: 'cd_show',
            },
            displayConditions: {
                type: 'array',
                default: [],
            },
            operator: {
                type: 'string',
                default: 'and',
            },
        };
    }

    return settings;
});


addFilter('blocks.registerBlockType', 'zolo/attributes/interactions', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            interactions: {
                type: 'array',
                default: []
            },
        };
    }

    return settings;
});

/**
 * Attributes for the sticky animation.
 */
addFilter('blocks.registerBlockType', 'zolo/extension/sticky', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            isSticky: {
                type: 'boolean',
                default: false,
            },
            stickyAnimation: {
                type: 'object',
                default: {
                    position: 'top',
                    offset: 0,
                    effect: 'fade',
                    zIndex: 1000,
                    devices: null,
                },
            },
        };
    }

    return settings;
});

/**
 * Attributes for the parallax animation.
 *
 */
addFilter('blocks.registerBlockType', 'zolo/extension/parallax', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            parallaxAnimationActive: {
                type: 'boolean',
                default: false,
            },
            parallaxAnimation: {
                type: 'object',
                default: {
                    vertical: {
                        triggerPosition: 'top',
                        viewportPosition: 'center',
                        endTriggerPosition: 'bottom',
                        endViewportPosition: 'top',
                        isStartAdvanced: false,
                        isEndAdvanced: false,
                        start: undefined,
                        end: undefined,
                        speed: -100,
                        scrub: 2,
                    },
                    horizontal: {
                        triggerPosition: 'top',
                        viewportPosition: 'center',
                        endTriggerPosition: 'bottom',
                        endViewportPosition: 'top',
                        isStartAdvanced: false,
                        isEndAdvanced: false,
                        start: undefined,
                        end: undefined,
                        speed: 0,
                        scrub: 2,
                    },
                    rotate: {
                        triggerPosition: 'top',
                        viewportPosition: 'center',
                        endTriggerPosition: 'bottom',
                        endViewportPosition: 'top',
                        isStartAdvanced: false,
                        isEndAdvanced: false,
                        start: undefined,
                        end: undefined,
                        speed: 0,
                        scrub: 2,
                    },
                    scale: {
                        triggerPosition: 'top',
                        viewportPosition: 'center',
                        endTriggerPosition: 'bottom',
                        endViewportPosition: 'top',
                        isStartAdvanced: false,
                        isEndAdvanced: false,
                        start: undefined,
                        end: undefined,
                        speed: 1,
                        scrub: 2,
                    },
                },
            }
        };
    }

    return settings;
});
/**
 * Attributes for the floating animation.
 *
 */
addFilter('blocks.registerBlockType', 'zolo/extension/floating', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            floatingAnimationActive: {
                type: 'boolean',
                default: false,
            },
            floatingAnimation: {
                type: 'object',
                default: {
                    translateX: {
                        minValue: -100,
                        maxValue: 100,
                        unit: 'px',
                    },
                    translateY: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'px',
                    },
                    translateZ: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'px',
                    },
                    rotateX: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    rotateY: {
                        minValue: 0,
                        maxValue: 0,
                    },
                    rotateZ: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    scaleX: {
                        minValue: 0,
                        maxValue: 0,
                        unit: '',
                    },
                    scaleY: {
                        minValue: 0,
                        maxValue: 0,
                        unit: '',
                    },
                    scaleZ: {
                        minValue: 0,
                        maxValue: 0,
                        unit: '',
                    },
                    skewX: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    skewY: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    opacity: {
                        minValue: 1,
                        maxValue: 1,
                        unit: '',
                    },
                    easing: 'ease-out',
                    easingCustom: '',
                    repeat: false,
                    perspective: 1000,
                    duration: 3000,
                    delay: 0,
                    transformOrigin: 'center',
                },
            },
        };
    }

    return settings;
});

/**
 * Attributes for the entrance animation.
 */
addFilter('blocks.registerBlockType', 'zolo/extension/entrance', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            entranceAnimationActive: {
                type: 'boolean',
                default: false,
            },
            entranceAnimation: {
                type: 'object',
                default: {
                    active3D: false,
                    repeatable: false,
                    translateX: {
                        value: 0,
                        unit: 'px',
                    },
                    translateY: {
                        value: 50,
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
                    scaleX: {
                        value: 0,
                        unit: '',
                    },
                    scaleY: {
                        value: 0,
                        unit: '',
                    },
                    scaleZ: {
                        value: 0,
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
                    opacity: undefined,
                    easing: 'power4.out',
                    easingCustom: [0.165, 0.84, 0.44, 1],
                    repeat: false,
                    perspective: 1000,
                    duration: 1800,
                    delay: 180,
                    transformOrigin: 'center',
                    presetAnimation: 'bottomMedium',
                    transformOriginCustom: '',
                },
            },
        };
    }

    return settings;
});

/**
 * Attributes for the tilt effect.
 */

addFilter('blocks.registerBlockType', 'zolo/attributes/tilt', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        settings.attributes = {
            ...settings.attributes,
            zoloTilt: {
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
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
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
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
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
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
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


/**
* Attributes for the Cursor.
*/
addFilter('blocks.registerBlockType', 'zolo/attributes/cursors', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        settings.attributes = {
            ...settings.attributes,
            zoloCursors: {
                type: 'object',
                default: {
                    active: false,
                    source: 'default',
                    imageSource: {
                        url: zoloPlaceholders.placeholder,
                        id: '',
                    },
                    disabledDefault: false,
                    speed: 2,
                    disabledDefault: false,
                    textLabel: 'ZoloBlocks',
                },
            },
            ...generateResRangeAttributies('dotSize'),
            ...generateResRangeAttributies('cursorImageSize'),
            ...generateResRangeAttributies('iconSize'),
            ...generateBorderAttributies('textBorder'),
            ...generateDimensionAttributes('textBorderRadius'),
            ...generateDimensionAttributes('textPadding'),
            ...generateTypographyAttributes(Object.values(typographyObjs)),
            ...generateBorderAttributies('imageBorder'),
            ...generateDimensionAttributes('cursorImageBorderRadius'),
            ...generateNormalBGAttributes('textBgColor'),
        };
    }

    return settings;
});

/**
* Attributes for the background parallax.
*/
/**
 * Attributes for the parallax animation.
 *
 */
addFilter('blocks.registerBlockType', 'zolo/extension/image-parallax', (settings) => {
    if (settings.category && (settings.category == 'zoloblocks' || settings.category == 'zoloblocks-single')) {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            imageParallax: {
                type: 'object',
                default: {
                    active: false,
                    orientation: 'up',
                    scale: 1.4,
                    delay: 0.4,

                },
            },
        };
    }

    return settings;
});