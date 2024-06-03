import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';

import { optionOne, optionTwo, optionThree, optionFour, optionFive } from './options';

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

        const mainOptions = {
            ...(optPreset === 'hover_bubble' && {
                particles: {
                    ...optionOne?.particles,
                    color: {
                        value: color && color.length > 0 && color[0] !== '' ? color : optionOne?.particles.color?.value,
                    },
                    shape: {
                        type: shapes != false && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                    },
                    ...(optPreset === 'hover_bubble' && {
                        move: {
                            ...optionOne?.move,
                            direction: direction || 'none',
                        },
                    }),
                },
            }),
            ...(optPreset === 'hover_bubble' && { interactivity: optionOne?.interactivity }),

            // dust_wind
            ...(optPreset === 'dust_wind' && {
                particles: {
                    ...optionTwo?.particles,
                    color: {
                        value: color && color.length > 0 && color[0] !== '' ? color : optionTwo?.particles.color?.value || '#000000',
                    },
                    shape: {
                        type: shapes != false && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                    },
                },

                ...(optPreset === 'dust_wind' && {
                    move: optionTwo?.move,
                    direction: direction || 'none',
                }),
            }),
            //Flying Bubble
            ...(optPreset === 'flying_bubble' && {
                particles: {
                    ...optionThree?.particles,
                    color: {
                        value: color && color.length > 0 && color[0] !== '' ? color : optionThree?.particles.color?.value || '#000000',
                    },
                    shape: {
                        type: shapes != false && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                    },

                    move: {
                        ...optionThree?.move,
                        direction: direction || 'none',
                    },
                },
                //interactivity
                ...(optPreset === 'flying_bubble' && { interactivity: optionThree?.interactivity }),
            }),
            //snow fall
            ...(optPreset === 'snow_fall' && {
                particles: {
                    ...optionFour?.particles,
                    color: {
                        value: color && color.length > 0 && color[0] !== '' ? color : optionFour?.particles.color?.value || '#000000',
                    },
                    shape: {
                        type: shapes != false && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                    },
                    move: {
                        ...optionFour?.move,
                        direction: direction || 'none',
                    },
                },
                //interactivity
                ...(optPreset === 'snow_fall' && { interactivity: optionFour?.interactivity }),
            }),

            // flying shape
            ...(optPreset === 'flying_shape' && {
                particles: {
                    ...optionFive?.particles,
                    color: {
                        value: color && color.length > 0 && color[0] !== '' ? color : optionFive?.particles.color?.value || '#000000',
                    },
                    shape: {
                        type: shapes != false && shapes.length > 0 && shapes[0] !== '' ? shapes : optionFive?.particles.shape?.type,
                    },
                    move: {
                        ...optionFive?.move,
                        direction: direction || 'none',
                    },
                },
                //interactivity
                ...(optPreset === 'flying_shape' && { interactivity: optionFive?.interactivity }),
            }),

            retina_detect: true,
        };

        // add default options
        if (particleOptions === null || particleOptions === undefined) {
            setAttributes({
                particleOptions: toggleCustomOption && customOptions ? createObject(customOptions) : !toggleCustomOption && mainOptions,
            });
        }
        const optionData = toggleCustomOption && customOptions ? createObject(customOptions) : !toggleCustomOption && mainOptions;

        const deviceType = select('core/editor').getDeviceType();

        if (enableParticlesAnimation && particlesRef.current && resMode === 'Desktop' && deviceType === 'Desktop') {
            const particles = particlesRef.current.querySelector(`#zolo-particles-${uniqueId}`);
            const particlesId = particles.getAttribute('data-id');
            particlesJS(particlesId, optionData);
        }
    }, [resMode, enableParticlesAnimation, particleOptions, toggleCustomOption, optPreset, colorItem]);

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
