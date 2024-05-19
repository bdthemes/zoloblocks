import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select, use } from '@wordpress/data';
import classnames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';
const { classArrayToStr } = window.zoloModule;

// particles js
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function RenderView({ attributes, clientId, className, setAttributes }) {
    const { uniqueId, containerWidthType, contentWidthType, isBlockRootParent, parentClasses, enableParticlesAnimation, particleOptions } =
        attributes;

    const { getBlockOrder } = select('core/block-editor');
    const hasChildBlocks = getBlockOrder(clientId).length > 0;
    const hasChildren = 0 !== select('core/block-editor').getBlocks(clientId).length;
    const hasChildrenClass = hasChildren ? 'zolo-container-has-children' : '';
    const isRootContainerClass = isBlockRootParent ? 'zolo-root-container' : '';

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} ${containerWidthType} ${hasChildrenClass} ${isRootContainerClass} backend`,
            classArrayToStr(parentClasses)
        ),
    });

    useEffect(() => {
        // check particleOptions is empty
        if (particleOptions === null || particleOptions === undefined) {
            setAttributes({
                particleOptions: {
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
                            value: '#ffffff',
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                },
            });
        }
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    return (
        <div {...blockProps}>
            {enableParticlesAnimation && (
                <Particles options={particleOptions} id={`${uniqueId}-particles`} className="zolo-particles-background" />
            )}

            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    <InnerBlocks renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender} />
                </div>
            ) : (
                <InnerBlocks renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender} />
            )}
        </div>
    );
}
