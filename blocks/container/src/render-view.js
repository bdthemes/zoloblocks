import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';

const { classArrayToStr } = window.zoloModule;

export default function RenderView({ attributes, clientId, className, setAttributes }) {
    const {
        uniqueId,
        resMode,
        containerWidthType,
        contentWidthType,
        isBlockRootParent,
        parentClasses,
        enableParticlesAnimation,
        particleOptions,
        optionPreset,
    } = attributes;

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

    const particlesRef = useRef(null);

    useEffect(() => {
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
                    type: 'circle',
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

        // add default options
        if (particleOptions === null || particleOptions === undefined) {
            setAttributes({ particleOptions: options });
        }

        const deviceType = select('core/editor').getDeviceType();
        if (enableParticlesAnimation && particlesRef.current && resMode === 'Desktop' && deviceType === 'Desktop') {
            const particles = particlesRef.current.querySelector(`#zolo-particles-${uniqueId}`);
            const particlesId = particles.getAttribute('data-id');
            particlesJS(particlesId, options);
        }
    }, [resMode, enableParticlesAnimation, particleOptions, uniqueId]);

    return (
        <div {...blockProps} ref={particlesRef}>
            {enableParticlesAnimation && (
                <div data-id={`zolo-particles-${uniqueId}`} id={`zolo-particles-${uniqueId}`} className="zolo-particles"></div>
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
