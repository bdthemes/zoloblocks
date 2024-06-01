import options from './options';

document.addEventListener('DOMContentLoaded', function () {
    const zoloParticleContainers = document.querySelectorAll('.zolo-particles');

    if (zoloParticleContainers && zoloParticleContainers.length > 0) {
        zoloParticleContainers.forEach((container) => {
            const id = container.dataset?.id;

            const particleOptions = container.dataset.options ? JSON.parse(container.dataset.options) : {};
            const toggleCustomOption = container.dataset.togglcustomoption;
            const optPreset = container.dataset.optpreset;
            const colorItem = container.dataset.coloritem && JSON.parse(container.dataset.coloritem);
            const color = colorItem && colorItem.length > 0 && colorItem.map((item) => item.color);

            const shapes =
                particleOptions?.shapes && particleOptions?.shapes.length > 0 && particleOptions?.shapes.map((item) => item.value);
            const customOptions = particleOptions?.customOptions;
            const optionData = toggleCustomOption && customOptions ? createObject(customOptions) : optionsMain;
            function createObject(customOptions) {
                if (!customOptions) {
                    return false;
                }
                try {
                    let obj = JSON.parse(customOptions);
                    return obj;
                } catch (error) {
                    if (error) return false;
                }
            }
            const direction = particleOptions.direction;
            const optionsMain = {
                particles: {
                    number: {
                        value: options[optPreset].particles.number?.value || '',
                        density: {
                            enable: options[optPreset].particles.number.density?.enable || '',
                            value_area: options[optPreset].particles.number.density?.value_area || '',
                        },
                    },
                    color: {
                        value: !color[0] == '' ? color : options[optPreset].particles.color?.value || '',
                    },
                    shape: {
                        type: shapes || options[optPreset].particles.shape?.type || '',
                        stroke: {
                            width: options[optPreset].particles.shape.stroke?.width || '',
                            color: options[optPreset].particles.shape.stroke?.color || '',
                        },
                        polygon: {
                            nb_sides: options[optPreset].particles.shape.polygon?.nb_sides || '',
                        },
                    },
                    opacity: {
                        value: options[optPreset].particles.opacity?.value || '',
                        random: options[optPreset].particles.opacity?.random || '',
                        anim: {
                            enable: options[optPreset].particles.opacity.anim?.enable || '',
                            speed: options[optPreset].particles.opacity.anim?.speed || '',
                            opacity_min: options[optPreset].particles.opacity.anim?.opacity_min || '',
                            sync: options[optPreset].particles.opacity.anim?.sync || '',
                        },
                    },
                    size: {
                        value: options[optPreset].particles.size?.value || '',
                        random: options[optPreset].particles.size?.random || '',
                        anim: {
                            enable: options[optPreset].particles.size.anim?.enable || '',
                            speed: options[optPreset].particles.size.anim?.speed || '',
                            size_min: options[optPreset].particles.size.anim?.size_min || '',
                            sync: options[optPreset].particles.size.anim?.sync || '',
                        },
                    },
                    line_linked: {
                        enable: options[optPreset].particles.line_linked?.enable || '',
                        distance: options[optPreset].particles.line_linked?.distance || '',
                        color: options[optPreset].particles.line_linked?.color || '',
                        opacity: options[optPreset].particles.line_linked?.opacity || '',
                        width: options[optPreset].particles.line_linked?.width || '',
                    },
                    move: {
                        enable: options[optPreset].particles.move?.enable,
                        speed: options[optPreset].particles.move?.speed || '',
                        direction: direction && direction,
                        random: options[optPreset].particles.move?.random || '',
                        straight: options[optPreset].particles.move?.straight || '',
                        out_mode: options[optPreset].particles.move?.out_mode || '',
                        bounce: options[optPreset].particles.move?.bounce || '',
                        attract: {
                            enable: options[optPreset].particles.move.attract?.enable || '',
                            rotateX: options[optPreset].particles.move.attract?.rotateX || '',
                            rotateY: options[optPreset].particles.move.attract?.rotateY || '',
                        },
                    },
                },
                interactivity: {
                    detect_on: options[optPreset].interactivity?.detect_on || '',
                    events: {
                        onhover: {
                            enable: options[optPreset].interactivity?.events.onhover?.enable || '',
                            mode: options[optPreset].interactivity?.events.onhover?.mode || '',
                        },
                        onclick: {
                            enable: options[optPreset].interactivity?.events.onclick?.enable || '',
                            mode: options[optPreset].interactivity?.events.onclick?.mode || '',
                        },
                        resize: options[optPreset].interactivity?.events?.resize || '',
                    },
                    modes: {
                        grab: {
                            distance: options[optPreset].interactivity?.modes.grab?.distance || '',
                            line_linked: {
                                opacity: options[optPreset].interactivity?.modes.grab.line_linked?.opacity || '',
                            },
                        },
                        bubble: {
                            distance: options[optPreset].interactivity?.modes.bubble?.distance || '',
                            size: options[optPreset].interactivity?.modes.bubble?.size || '',
                            duration: options[optPreset].interactivity?.modes.bubble?.duration || '',
                            opacity: options[optPreset].interactivity?.modes.bubble?.opacity || '',
                            speed: options[optPreset].interactivity?.modes.bubble?.speed || '',
                        },
                        repulse: {
                            distance: options[optPreset].interactivity?.modes.repulse?.distance || '',
                            duration: options[optPreset].interactivity?.modes.repulse?.duration || '',
                        },
                        push: {
                            particles_nb: options[optPreset].interactivity?.modes.push?.particles_nb || '',
                        },
                        remove: {
                            particles_nb: options[optPreset].interactivity?.modes.remove?.particles_nb || '',
                        },
                    },
                },
                retina_detect: options[optPreset]?.retina_detect || '',
            };

            if (id) {
                particlesJS(id, optionData);
            }
        });
    }
});
