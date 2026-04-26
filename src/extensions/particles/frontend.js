import '../../libs/particles.js';
import { optionTwo, optionThree } from './options';

const initializedParticles = new Set();

const presetConfigs = {
    dust_wind: optionTwo,
    flying_bubble: optionThree,
};

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

function safeJsonParse(jsonString) {
    if (!jsonString) return null;

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.warn('ZoloBlocks Particles: Invalid JSON data', error);
        return null;
    }
}

function extractColors(colors) {
    if (!colors || !Array.isArray(colors) || colors.length === 0) {
        return null;
    }

    const validColors = colors
        .map(colorObj => colorObj?.color)
        .filter(color => color && color !== '');

    return validColors.length > 0 ? validColors : null;
}

function extractShapes(shapes) {
    if (!shapes || !Array.isArray(shapes) || shapes.length === 0 || shapes[0] === '') {
        return ['circle'];
    }
    return shapes;
}

function getPremiumPresetConfig(preset) {
    if (typeof window === 'undefined' || !window.zoloBlocksParticlesPro?.presetConfigs) {
        return null;
    }
    return window.zoloBlocksParticlesPro.presetConfigs[preset] || null;
}

function buildParticleConfig(preset, particleData) {
    const { colors, particleOptions = {}, speed } = particleData;
    const { shapes, direction, shapeSize, customOptions } = particleOptions;

    if (preset === 'custom_options' && customOptions) {
        if (typeof window !== 'undefined' && window.zoloBlocksParticlesPro?.mergeCustomConfig) {
            const merged = window.zoloBlocksParticlesPro.mergeCustomConfig(customOptions);
            if (merged) {
                return { ...merged, retina_detect: true };
            }
        }
        return null;
    }

    const baseConfig = presetConfigs[preset] || getPremiumPresetConfig(preset);
    if (!baseConfig) {
        return null;
    }

    const config = deepClone(baseConfig);

    const processedColors = extractColors(colors);
    const processedShapes = extractShapes(shapes);

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

    config.retina_detect = true;

    if (preset === 'flying_shape') {
        config.particles.line_linked = { enable: false };
    }

    return config;
}

function initializeParticles(element) {
    const particlesOptions = element.dataset.particles;
    const particlesData = safeJsonParse(particlesOptions);

    if (!particlesData || !particlesData.active) {
        return;
    }

    const { particlesId, preset } = particlesData;
    const particleElementId = `zolo-particles-${particlesId}`;

    if (initializedParticles.has(particleElementId)) {
        return;
    }

    const targetElement = document.getElementById(particleElementId);
    if (!targetElement) {
        console.warn(`ZoloBlocks Particles: Target element "${particleElementId}" not found`);
        return;
    }

    const config = buildParticleConfig(preset, particlesData);
    if (!config) {
        return;
    }

    try {
        if (window.pJSDom && window.pJSDom.find(item => item.pJS.canvas.el.id === particleElementId)) {
            window.pJSDom = window.pJSDom.filter(item => item.pJS.canvas.el.id !== particleElementId);
        }

        window.particlesJS(particleElementId, config);
        initializedParticles.add(particleElementId);
    } catch (error) {
        console.error(`ZoloBlocks Particles: Failed to initialize "${particleElementId}"`, error);
    }
}

function initializeAllParticles() {
    const zoloParticles = document.querySelectorAll('.zolo-block[data-particles]');

    if (zoloParticles.length === 0) {
        return;
    }

    zoloParticles.forEach((element, index) => {
        setTimeout(() => {
            initializeParticles(element);
        }, index * 50);
    });
}

document.addEventListener('DOMContentLoaded', initializeAllParticles);

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
