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
                        
                        // Color & Gradient
                        fillType: 'solid',
                        color: '',
                        gradientColor1: '#08AEEC',
                        gradientColor2: '#20E2AD',
                        gradientType: 'linear',
                        gradientAngle: 90,
                        
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
                        filterBrightness: 100,
                        filterContrast: 100,
                        filterSaturate: 100,
                        filterHue: 0,
                        
                        // CSS Filters Hover
                        filterBlurHover: 0,
                        filterBrightnessHover: 100,
                        filterContrastHover: 100,
                        filterSaturateHover: 100,
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
