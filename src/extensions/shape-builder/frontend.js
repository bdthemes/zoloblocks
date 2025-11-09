/**
 * Shape Builder Frontend Animation Handler
 * Uses GSAP for smooth animations following bdthemes pattern
 */

(function () {
    'use strict';

    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.warn('GSAP is not loaded. Shape Builder animations will not work.');
        return;
    }

    // Animation configurations based on effect name
    const ANIMATION_CONFIGS = {
        'fade-in': { opacity: 0, duration: 1 },
        'fade-in-up': { opacity: 0, y: 50, duration: 1 },
        'fade-in-down': { opacity: 0, y: -50, duration: 1 },
        'fade-in-left': { opacity: 0, x: -50, duration: 1 },
        'fade-in-right': { opacity: 0, x: 50, duration: 1 },
        'zoom-in': { opacity: 0, scale: 0.5, duration: 1 },
        'zoom-out': { opacity: 0, scale: 1.5, duration: 1 },
        'rotate-in': { opacity: 0, rotation: -180, duration: 1 },
        'flip-x': { opacity: 0, rotationY: 180, duration: 1 },
        'flip-y': { opacity: 0, rotationX: 180, duration: 1 },
        bounce: { y: -30, duration: 0.6, ease: 'bounce.out' },
        pulse: { scale: 1.1, duration: 0.8, ease: 'power2.inOut' },
        swing: { rotation: 15, transformOrigin: 'top center', duration: 0.8, ease: 'power2.inOut' },
        shake: { x: 10, duration: 0.8, ease: 'power2.inOut' },
        'slide-in-left': { x: -100, opacity: 0, duration: 1 },
        'slide-in-right': { x: 100, opacity: 0, duration: 1 },
        'slide-in-up': { y: 100, opacity: 0, duration: 1 },
        'slide-in-down': { y: -100, opacity: 0, duration: 1 },
    };

    // Initialize custom SVG color handling
    function initCustomSvgColors() {
        const customShapes = document.querySelectorAll('.zolo-shape-builder-custom[data-custom-svg-url]');
        
        customShapes.forEach((shape) => {
            const svgUrl = shape.getAttribute('data-custom-svg-url');
            const fillColor = shape.getAttribute('data-custom-fill');
            const strokeColor = shape.getAttribute('data-custom-stroke');
            const imgElement = shape.querySelector('.zolo-custom-svg-image');
            
            if (!svgUrl || !imgElement) return;
            
            // Fetch and inline the SVG for color manipulation
            fetch(svgUrl)
                .then(response => response.text())
                .then(svgContent => {
                    // Create a temporary div to parse SVG
                    const temp = document.createElement('div');
                    temp.innerHTML = svgContent.trim();
                    const svgElement = temp.querySelector('svg');
                    
                    if (svgElement) {
                        // Set dimensions to match container
                        svgElement.style.width = '100%';
                        svgElement.style.height = '100%';
                        svgElement.style.display = 'block';
                        
                        // Apply colors to all paths and shapes in SVG
                        if (fillColor) {
                            svgElement.querySelectorAll('path, circle, rect, ellipse, polygon, polyline').forEach(el => {
                                el.style.fill = fillColor;
                            });
                        }
                        
                        if (strokeColor) {
                            svgElement.querySelectorAll('path, circle, rect, ellipse, polygon, polyline, line').forEach(el => {
                                el.style.stroke = strokeColor;
                            });
                        }
                        
                        // Replace img with inline SVG
                        imgElement.replaceWith(svgElement);
                    }
                })
                .catch(error => {
                    console.warn('Failed to load custom SVG:', error);
                });
        });
    }

    // Initialize shape animations
    function initShapeAnimations() {
        const shapes = document.querySelectorAll('.zolo-shape-builder[data-animation-enabled="true"]');

        shapes.forEach((shape) => {
            const trigger = shape.getAttribute('data-animation-trigger');
            const animationName = shape.getAttribute('data-animation-name');
            const duration = parseFloat(shape.getAttribute('data-animation-duration')) || 1;
            const delay = parseFloat(shape.getAttribute('data-animation-delay')) || 0;
            const easing = shape.getAttribute('data-animation-easing') || 'power2.out';
            const repeat = parseInt(shape.getAttribute('data-animation-repeat')) || 0;
            const yoyo = shape.getAttribute('data-animation-yoyo') === 'true';
            const viewport = parseFloat(shape.getAttribute('data-animation-viewport')) || 0.1;

            const animConfig = ANIMATION_CONFIGS[animationName] || ANIMATION_CONFIGS['fade-in'];

            // Build animation properties
            const fromVars = {
                ...animConfig,
                duration: duration,
                delay: delay,
                ease: easing !== 'none' ? easing : 'none',
            };

            // Add repeat and yoyo if applicable
            if (repeat !== 0 && trigger !== 'on-hover') {
                fromVars.repeat = repeat;
                if (yoyo) {
                    fromVars.yoyo = true;
                }
            }

            // Handle different trigger types
            if (trigger === 'on-load') {
                // Use ScrollTrigger for viewport-based animations
                if (typeof ScrollTrigger !== 'undefined') {
                    gsap.registerPlugin(ScrollTrigger);

                    gsap.from(shape, {
                        ...fromVars,
                        scrollTrigger: {
                            trigger: shape,
                            start: 'top bottom',
                            toggleActions: 'play none none none',
                            once: repeat === 0, // Only play once if no repeat
                        },
                    });
                } else {
                    // Fallback to simple animation
                    gsap.from(shape, fromVars);
                }
            } else if (trigger === 'on-hover') {
                // On hover animations
                const wrapper = shape.closest(`[data-wrapper-id]`);
                if (wrapper) {
                    const wrapperId = shape.getAttribute('data-wrapper-id');
                    const parentWrapper = document.querySelector(`.${wrapperId}`);

                    if (parentWrapper) {
                        parentWrapper.addEventListener('mouseenter', () => {
                            gsap.to(shape, {
                                ...animConfig,
                                duration: duration,
                                ease: easing !== 'none' ? easing : 'none',
                            });
                        });

                        parentWrapper.addEventListener('mouseleave', () => {
                            gsap.to(shape, {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                rotation: 0,
                                rotationX: 0,
                                rotationY: 0,
                                duration: duration * 0.5,
                                ease: 'power2.out',
                            });
                        });
                    }
                }
            }
        });
    }

    // Initialize all shape builder features
    function initShapeBuilder() {
        initCustomSvgColors();
        initShapeAnimations();
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initShapeBuilder);
    } else {
        initShapeBuilder();
    }

    // Re-initialize on dynamic content load (e.g., AJAX)
    window.addEventListener('load', () => {
        setTimeout(initShapeBuilder, 100);
    });
})();
