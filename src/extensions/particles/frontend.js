import { optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix } from './options';

document.addEventListener('DOMContentLoaded', function () {
    const zoloParticles = document.querySelectorAll('.zolo-block');
    if (zoloParticles && zoloParticles.length > 0) {
        zoloParticles.forEach((particles) => {
            const particlesOptions = particles.dataset.particles;
            if (!particlesOptions) return;
            const particlesData = JSON.parse(particlesOptions);
            // active check for particles
            if (!particlesData.active) {
                return;
            }

            const { particlesId, preset, colors, particleOptions, speed } = particlesData;
            const { shapes, direction, shapeSize, customOptions } = particleOptions;

            const color = colors && colors.map((color) => color.color);
            function createObject(customOptions) {
                if (!customOptions) {
                    return false;
                }
                try {
                    let obj = JSON.parse(customOptions);
                    return obj;
                } catch (error) {
                    return false;
                }
            }
            const mainOptions = {
                ...(preset === 'hover_bubble' && {
                    particles: {
                        ...optionOne?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionOne?.particles.color?.value,
                        },
                        size: {
                            ...optionOne?.particles?.size,
                            value: shapeSize ? shapeSize : optionOne?.particles.size?.value,
                        },

                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                        },
                        ...(preset === 'hover_bubble' && {
                            move: {
                                ...optionOne?.particles?.move,
                                direction: direction || 'none',
                                speed: speed || optionOne?.particles?.move?.speed,
                            },
                        }),
                    },
                }),
                ...(preset === 'hover_bubble' && { interactivity: optionOne?.interactivity }),

                // dust_wind
                ...(preset === 'dust_wind' && {
                    particles: {
                        ...optionTwo?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionTwo?.particles.color?.value || '#000000',
                        },
                        size: {
                            ...optionTwo?.particles?.size,
                            value: shapeSize ? shapeSize : optionTwo?.particles.size?.value,
                        },
                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                        },
                        move: {
                            ...optionTwo?.particles?.move,
                            direction: direction || 'none',
                            speed: speed || optionTwo?.particles?.move?.speed,
                        },
                    },
                    //interactivity
                    ...(preset === 'dust_wind' && { interactivity: optionTwo?.interactivity }),
                }),
                //Flying Bubble
                ...(preset === 'flying_bubble' && {
                    particles: {
                        ...optionThree?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionThree?.particles.color?.value || '#000000',
                        },
                        size: {
                            ...optionThree?.particles?.size,
                            value: shapeSize ? shapeSize : optionThree?.particles.size?.value,
                        },
                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                        },

                        move: {
                            ...optionThree?.particles?.move,
                            direction: direction || 'none',
                            speed: speed || optionThree?.particles?.move?.speed,
                        },
                    },
                    //interactivity
                    ...(preset === 'flying_bubble' && { interactivity: optionThree?.interactivity }),
                }),
                //snow fall
                ...(preset === 'snow_fall' && {
                    particles: {
                        ...optionFour?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionFour?.particles.color?.value || '#000000',
                        },
                        size: {
                            ...optionFour?.particles?.size,
                            value: shapeSize ? shapeSize : optionFour?.particles.size?.value,
                        },
                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                        },
                        move: {
                            ...optionFour?.particles?.move,
                            direction: direction || 'none',
                            speed: speed || optionFour?.particles?.move?.speed,
                        },
                    },
                    //interactivity
                    ...(preset === 'snow_fall' && { interactivity: optionFour?.interactivity }),
                }),

                // flying shape
                ...(preset === 'flying_shape' && {
                    particles: {
                        ...optionFive?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionFive?.particles.color?.value || '#000000',
                        },
                        size: {
                            ...optionFive?.particles?.shapeSize,
                            value: shapeSize ? shapeSize : optionFive?.particles.size?.value,
                        },
                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : optionFive?.particles.shape?.type,
                        },
                        move: {
                            ...optionFive?.particles?.move,
                            direction: direction || 'none',
                            speed: speed || optionFive?.particles?.move?.speed,
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    //interactivity
                    ...(preset === 'flying_shape' && { interactivity: optionFive?.interactivity }),
                }),
                // polygon Move
                ...(preset === 'polygonal_move' && {
                    particles: {
                        ...optionSix?.particles,
                        color: {
                            value: color && color.length > 0 && color[0] !== '' ? color : optionSix?.particles.color?.value || '#000000',
                        },
                        size: {
                            ...optionSix?.particles.size,
                            value: shapeSize ? shapeSize : optionSix?.particles.size?.value,
                        },

                        shape: {
                            type: shapes != undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : optionSix?.particles.shape?.type,
                        },
                        ...optionSix?.particles?.opacity,
                        move: {
                            ...optionSix?.particles?.move,
                            direction: direction || 'none',
                            speed: speed || optionSix?.particles?.move?.speed,
                        },
                    },
                }),

                retina_detect: true,
            };

            const optionData = preset === 'custom_options' && customOptions ? createObject(customOptions) : preset !== 'custom_options' && mainOptions;

            try {
                particlesJS(`zolo-particles-${particlesId}`, optionData);

            } catch (error) {
                console.log(error);

            }
        });
    }
});
