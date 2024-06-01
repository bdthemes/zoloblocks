import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';
import options from './options';

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
        optPreset,
        colorItem,
        toggleCustomOption,
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
        const shapes = particleOptions?.shapes && particleOptions?.shapes.length > 0 && particleOptions?.shapes.map((item) => item.value);

        const customOptions = particleOptions?.customOptions;
        const color = colorItem && colorItem.length > 0 && colorItem.map((item) => item.color);

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
                        enable: options[optPreset].particles.opacity.anim?.enable || false,
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
                    enable: options[optPreset].particles.line_linked?.enable || false,
                    distance: options[optPreset].particles.line_linked?.distance || '',
                    color: options[optPreset].particles.line_linked?.color || '',
                    opacity: options[optPreset].particles.line_linked?.opacity || '',
                    width: options[optPreset].particles.line_linked?.width || '',
                },
                move: {
                    enable: options[optPreset].particles.move?.enable || false,
                    speed: options[optPreset].particles.move?.speed || '',
                    direction: direction && direction,
                    random: options[optPreset].particles.move?.random || '',
                    straight: options[optPreset].particles.move?.straight || '',
                    out_mode: options[optPreset].particles.move?.out_mode || '',
                    bounce: options[optPreset].particles.move?.bounce || '',
                    attract: {
                        enable: options[optPreset].particles.move.attract?.enable || false,
                        rotateX: options[optPreset].particles.move.attract?.rotateX || 600,
                        rotateY: options[optPreset].particles.move.attract?.rotateY || 1200,
                    },
                },
            },
            interactivity: {
                detect_on: options[optPreset].interactivity?.detect_on || 'canvas',
                events: {
                    onhover: {
                        enable: options[optPreset].interactivity?.events.onhover?.enable || false,
                        mode: options[optPreset].interactivity?.events.onhover?.mode || 'grab',
                    },
                    onclick: {
                        enable: options[optPreset].interactivity?.events.onclick?.enable || false,
                        mode: options[optPreset].interactivity?.events.onclick?.mode || 'grab',
                    },
                    resize: options[optPreset].interactivity?.events?.resize || false,
                },
                modes: {
                    grab: {
                        distance: options[optPreset].interactivity?.modes.grab?.distance || 0,
                        line_linked: {
                            opacity: options[optPreset].interactivity?.modes.grab.line_linked?.opacity || 1,
                        },
                    },
                    bubble: {
                        distance: options[optPreset].interactivity?.modes.bubble?.distance || 1,
                        size: options[optPreset].interactivity?.modes.bubble?.size || 5,
                        duration: options[optPreset].interactivity?.modes.bubble?.duration || 1,
                        opacity: options[optPreset].interactivity?.modes.bubble?.opacity || 1,
                        speed: options[optPreset].interactivity?.modes.bubble?.speed || 1,
                    },
                    repulse: {
                        distance: options[optPreset].interactivity?.modes.repulse?.distance || 1,
                        duration: options[optPreset].interactivity?.modes.repulse?.duration || 1,
                    },
                    push: {
                        particles_nb: options[optPreset].interactivity?.modes.push?.particles_nb || 4,
                    },
                    remove: {
                        particles_nb: options[optPreset].interactivity?.modes.remove?.particles_nb || 2,
                    },
                },
            },
            retina_detect: options[optPreset]?.retina_detect || false,
        };

        // add default options
        if (particleOptions === null || particleOptions === undefined) {
            setAttributes({
                particleOptions: toggleCustomOption && customOptions ? createObject(customOptions) : optionsMain,
            });
        }
        const optionData = toggleCustomOption && customOptions ? createObject(customOptions) : optionsMain;

        const deviceType = select('core/editor').getDeviceType();
        if (enableParticlesAnimation && particlesRef.current && resMode === 'Desktop' && deviceType === 'Desktop') {
            const particles = particlesRef.current.querySelector(`#zolo-particles-${uniqueId}`);
            const particlesId = particles.getAttribute('data-id');
            particlesJS(particlesId, optionData);
        }
    }, [resMode, enableParticlesAnimation, particleOptions, toggleCustomOption, options, optPreset, colorItem]);

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
