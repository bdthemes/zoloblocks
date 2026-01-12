const { generateResRangeAttributies, generateBorderAttributies, generateBoxShadowAttributies, generateNormalBGAttributes } =
    window.zoloModule;

import { addFilter } from '@wordpress/hooks';

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
                        shapeType: 'circle',

                        // Custom SVG Upload
                        customSvg: {
                            url: '',
                            id: null,
                        },
                        customSvgFillColor: '',
                        customSvgStrokeColor: '',

                        // Color & Gradient
                        fillType: 'solid',
                        color: '',
                        gradientColor1: '',
                        gradientColor2: '',
                        gradientType: '',
                        gradientAngle: 0,

                        // Size (simple values for repeater compatibility)
                        width: 200,
                        height: 200,

                        // Position
                        zIndex: 1,
                        horizontalOrientation: 'start',
                        horizontalOffset: 0,
                        verticalOrientation: 'start',
                        verticalOffset: 0,

                        // Transform Normal
                        translateX: 0,
                        translateY: 0,
                        rotate: 0,

                        // Transform Hover
                        translateXHover: 0,
                        translateYHover: 0,
                        rotateHover: 0,

                        // CSS Filters Normal
                        filterBlur: 0,
                        filterBrightness: 0,
                        filterContrast: 0,
                        filterSaturate: 0,
                        filterHue: 0,

                        // CSS Filters Hover
                        filterBlurHover: 0,
                        filterBrightnessHover: 0,
                        filterContrastHover: 0,
                        filterSaturateHover: 0,
                        filterHueHover: 0,

                        // Animation
                        animationEnabled: false,
                        animationTrigger: 'on-load',
                        animationName: 'fade-in',
                        animationDuration: 1,
                        animationDelay: 0,
                        animationEasing: 'power2.out',
                        animationRepeat: 0,
                        animationYoyo: false,
                        animationViewport: 0.1,
                    },
                ],
            },
        };
    }

    return settings;
});

export default attributes;
