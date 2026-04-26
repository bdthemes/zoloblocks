import '../../libs/particles.js';
import { optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix } from './options';

// Track initialized particles to prevent duplicates
const initializedParticles = new Set();

// Preset configuration mapping
const presetConfigs = {
    hover_bubble: optionOne,
    dust_wind: optionTwo,
    flying_bubble: optionThree,
    snow_fall: optionFour,
    flying_shape: optionFive,
    polygonal_move: optionSix
};

/**
 * Deep clone an object to prevent reference sharing
 * @param {Object} obj - Object to clone
 * @returns {Object} - Deep cloned object
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const clonedObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
}

/**
 * Safely parse JSON with error handling
 * @param {string} jsonString - JSON string to parse
 * @returns {Object|null} - Parsed object or null if invalid
 */
function safeJsonParse(jsonString) {
    if (!jsonString) return null;

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.warn('ZoloBlocks Particles: Invalid JSON data', error);
        return null;
    }
}

/**
 * Extract and validate colors from color data
 * @param {Array} colors - Color array from particle data
 * @returns {Array|null} - Valid colors or null
 */
function extractColors(colors) {
    if (!colors || !Array.isArray(colors) || colors.length === 0) {
        return null;
    }

    const validColors = colors
        .map(colorObj => colorObj?.color)
        .filter(color => color && color !== '');

    return validColors.length > 0 ? validColors : null;
}

/**
 * Extract and validate shapes from particle options
 * @param {Array} shapes - Shapes array from particle options
 * @returns {Array} - Valid shapes or default
 */
function extractShapes(shapes) {
    if (!shapes || !Array.isArray(shapes) || shapes.length === 0 || shapes[0] === '') {
        return ['circle'];
    }
    return shapes;
}

/**
 * Build particle configuration for a specific preset
 * @param {string} preset - Preset name
 * @param {Object} particleData - Particle configuration data
 * @returns {Object} - Complete particle configuration
 */
function buildParticleConfig(preset, particleData) {
    const { colors, particleOptions = {}, speed } = particleData;
    const { shapes, direction, shapeSize, customOptions } = particleOptions;

    // Handle custom options
    if (preset === 'custom_options' && customOptions) {
        const customConfig = safeJsonParse(customOptions);
        if (customConfig) {
            return { ...customConfig, retina_detect: true };
        }
    }

    // Get base configuration for preset and deep clone it to prevent reference sharing
    const baseConfig = presetConfigs[preset];
    if (!baseConfig) {
        console.warn(`ZoloBlocks Particles: Unknown preset "${preset}"`);
        return null;
    }

    // Deep clone the base configuration to ensure isolation between particles
    const config = deepClone(baseConfig);

    // Extract processed values
    const processedColors = extractColors(colors);
    const processedShapes = extractShapes(shapes);

    // Override with custom values
    if (processedColors) {
        config.particles.color.value = processedColors;
    }

    if (shapeSize) {
        config.particles.size.value = shapeSize;
    }

    if (processedShapes) {
        config.particles.shape.type = processedShapes;
    }

    if (direction) {
        config.particles.move.direction = direction;
    }

    if (speed) {
        config.particles.move.speed = speed;
    }

    // Ensure retina_detect is set
    config.retina_detect = true;

    // Handle special cases for flying_shape
    if (preset === 'flying_shape') {
        config.particles.line_linked = { enable: false };
    }

    // Handle special cases for polygonal_move
    if (preset === 'polygonal_move' && baseConfig.particles.opacity) {
        // The opacity is already included in the deep clone, no need to merge again
        // This was causing the reference sharing issue
    }

    return config;
}

/**
 * Initialize particles for a single element
 * @param {HTMLElement} element - DOM element containing particle data
 */
function initializeParticles(element) {
    const particlesOptions = element.dataset.particles;
    const particlesData = safeJsonParse(particlesOptions);

    if (!particlesData || !particlesData.active) {
        return;
    }

    const { particlesId, preset } = particlesData;
    const particleElementId = `zolo-particles-${particlesId}`;

    // Prevent duplicate initialization
    if (initializedParticles.has(particleElementId)) {
        return;
    }

    // Check if target element exists
    const targetElement = document.getElementById(particleElementId);
    if (!targetElement) {
        console.warn(`ZoloBlocks Particles: Target element "${particleElementId}" not found`);
        return;
    }

    // Build configuration
    const config = buildParticleConfig(preset, particlesData);
    if (!config) {
        return;
    }

    try {
        // Destroy existing particles if any (cleanup)
        if (window.pJSDom && window.pJSDom.find(item => item.pJS.canvas.el.id === particleElementId)) {
            window.pJSDom = window.pJSDom.filter(item => item.pJS.canvas.el.id !== particleElementId);
        }

        // Initialize particles with isolated configuration (global set by src/libs/particles.js)
        window.particlesJS(particleElementId, config);
        initializedParticles.add(particleElementId);
    } catch (error) {
        console.error(`ZoloBlocks Particles: Failed to initialize "${particleElementId}"`, error);
    }
}

/**
 * Initialize all particles on the page
 */
function initializeAllParticles() {
    const zoloParticles = document.querySelectorAll('.zolo-block[data-particles]');

    if (zoloParticles.length === 0) {
        return;
    }


    zoloParticles.forEach((element, index) => {
        // Add small delay between initializations to prevent conflicts
        setTimeout(() => {
            initializeParticles(element);
        }, index * 50);
    });
}

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAllParticles);

// Re-initialize on dynamic content changes (optional)
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
        let hasNewParticles = false;

        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.classList?.contains('zolo-block') && node.dataset?.particles) {
                            hasNewParticles = true;
                        } else if (node.querySelector?.('.zolo-block[data-particles]')) {
                            hasNewParticles = true;
                        }
                    }
                });
            }
        });

        if (hasNewParticles) {
            setTimeout(initializeAllParticles, 100);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
