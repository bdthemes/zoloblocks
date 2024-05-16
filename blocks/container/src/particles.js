import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Particleslib = (props) => {
    const [particlesLoaded, setParticlesLoaded] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load only what's necessary
        }).then(() => {
            setParticlesLoaded(true);
        });
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return (
        particlesLoaded && (
            <Particles
                id={props.id}
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: '#0d47a1',
                        },
                    },
                    fullScreen: {
                        enable: false,
                        zIndex: -1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: props.particlesColor,
                        },
                        links: {
                            color: props.linksColor,
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: props.prtDirection,
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: props.prtSpeed,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: props.toggleDensity,
                                area: props.particleArea,
                            },
                            value: props.particleNum,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: props.prtShape,
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        )
    );
};

export default Particleslib;
