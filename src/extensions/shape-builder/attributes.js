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
                        horizontalOffset: '',
                        verticalOrientation: 'start',
                        verticalOffset: '',

                        // Transform Normal
                        translateX: '',
                        translateY: '',
                        rotate: '',

                        // Transform Hover
                        translateXHover: '',
                        translateYHover: '',
                        rotateHover: '',

                        // CSS Filters Normal
                        filterBlur: '',
                        filterBrightness: '',
                        filterContrast: '',
                        filterSaturate: '',
                        filterHue: '',

                        // CSS Filters Hover
                        filterBlurHover: '',
                        filterBrightnessHover: '',
                        filterContrastHover: '',
                        filterSaturateHover: '',
                        filterHueHover: '',

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
