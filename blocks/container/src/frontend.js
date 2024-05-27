document.addEventListener('DOMContentLoaded', function () {
    const zoloParticleContainers = document.querySelectorAll('.zolo-particles');

    if (zoloParticleContainers && zoloParticleContainers.length > 0) {
        zoloParticleContainers.forEach((container) => {
            const id = container.dataset?.id;

            console.log('id', id);

            const particleOptions = container.dataset.options ? JSON.parse(container.dataset.options) : {};
            const shape = particleOptions.shape.map((item) => item.value);
            const options = {
                particles: {
                    number: {
                        value: particleOptions?.number,
                        density: {
                            enable: true,
                            value_area: particleOptions?.DensityArea,
                        },
                    },
                    color: {
                        value: '#ff0000',
                    },
                    shape: {
                        type: [...shape],
                        stroke: {
                            width: particleOptions?.stroke || 0,
                            color: '#000000',
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: particleOptions?.size || 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: particleOptions?.speed || 6,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: particleOptions?.distance || 150,
                        color: '#000000',
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: particleOptions?.moveSpeed || 6,
                        direction: particleOptions?.direction || 'none',
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
                            enable: particleOptions?.onHover || false,
                            mode: particleOptions?.onHoverMode || 'grab',
                        },
                        onclick: {
                            enable: particleOptions?.onClick || false,
                            mode: particleOptions?.onClickMode || 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
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

            if (id) {
                particlesJS(id, options);
            }
        });
    }
});
