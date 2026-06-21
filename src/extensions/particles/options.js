import defaultOptions from './default-options';

const deepMerge = (target, source) => {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
};

const isObject = (item) => {
    return (item && typeof item === 'object' && !Array.isArray(item));
};

export const mergeWithDefault = (options) => {
    return deepMerge(defaultOptions, options);
};

export const optionTwo = mergeWithDefault({
    particles: {
        number: { value: 14, density: 1 },
        color: { value: ['#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40'] },
        shape: { type: ['circle'] },
        opacity: { value: 1 },
        line_linked: { enable: false },
        size: {
            value: 8,
            random: true,
            anim: { enable: true, size_min: 1, speed: 1 },
        },
        move: { enable: true, direction: 'right', out_mode: 'out', speed: 2 },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0,
                },
            },
        },
    },
    retina_detect: true,
});

export const optionThree = mergeWithDefault({
    particles: {
        number: {
            value: 15,
            density: {
                enable: true,
                value_area: 631.3280775270874,
            },
        },
        color: {
            value: ['#77db97', '#833692', '#e4ed2e'],
        },
        shape: { type: 'circle', stroke: { width: 0, color: '#000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 1, random: true, anim: { enable: true, speed: 0, opacity_min: 0.5, sync: true } },
        line_linked:{
            enable: false,
        },
        size: { value: 40, random: true, anim: { enable: false, speed: 40, size_min: 20, sync: true } },
        move: { enable: true, speed: 4, direction: 'top-right', random: true, straight: true, out_mode: 'out', bounce: false },
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'repulse' }, resize: true },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: { distance: 400, size: 5, duration: 0.3, opacity: 1, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: false,
});
