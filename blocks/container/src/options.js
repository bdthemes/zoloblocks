const optionOne = {
    particles: {
        number: {
            value: 15,
            density: {
                enable: true,
                value_area: 1650,
            },
        },
        color: {
            value: '#ff0000',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0,
            random: false,
            anim: {
                enable: false,
                speed: 0.8932849335314796,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 4.008530152163807,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 2000,
            color: '#ffffff',
            opacity: 0.9620472365193137,
            width: 4.489553770423464,
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

const optionTwo = {
    particles: {
        number: { value: 14, density: 1 },
        color: { value: ['#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40'] },
        shape: { type: ['circle'] },
        opacity: { value: 1 },
        size: {
            value: 8,
            random: true,
            anim: { enable: true, size_min: 1, speed: 1 },
        },
        move: { enable: true, direction: 'right', out_mode: 'out' },
    },
    retina_detect: true,
};

const optionThree = {
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
};

const optionFour = {
    particles: {
        number: {
            value: 66,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#d5d5d5',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ffffff',
            },
            polygon: {
                nb_sides: 0,
            },
        },
        opacity: {
            value: 0.8522794529628545,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble',
            },
            onclick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5,
                },
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

const options = {
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
};

export default options;
