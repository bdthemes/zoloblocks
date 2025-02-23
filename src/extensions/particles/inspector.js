/**
 * WordPress dependencies
 */
import { Button, SelectControl, TextareaControl, CardDivider, BaseControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import Select2 from 'react-select';
import useParticlesInit from './init';
import MultiColor from './multicolor';

const { PopoverControl, SimpleRangeControl, popoverHasAttrVal, RangeResetControl } = window.zoloModule;

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { zoloParticles, uniqueId, parentClasses } = attributes;

    const { active, preset, particleOptions } = zoloParticles;
    const { direction } = particleOptions;

    const [isPreview, setIsPreview] = useState(false);

    const onChangeHandler = (select) => {
        switch (select) {
            case 'hover_bubble':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'none',
                        },
                    },
                });

                break;
            case 'dust_wind':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'right',
                        },
                    },
                });

                break;
            case 'flying_bubble':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'top-right',
                        },
                    },
                });

                break;
            case 'snow_fall':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'bottom',
                        },
                    },
                });
                break;
            case 'flying_shape':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'top',
                        },
                    },
                });
            case 'polygonal_move':
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                        particleOptions: {
                            ...particleOptions,
                            direction: 'top-left',
                        },
                    },
                });
                break;
            default:
                setAttributes({
                    zoloParticles: {
                        ...zoloParticles,
                        preset: select,
                    },
                });
                break;
        }
    };

    useEffect(() => {
        setAttributes({
            zoloParticles: {
                ...zoloParticles,
                particlesId: uniqueId,
            },
        });
    }, [uniqueId]);

    const sortableProps = {
        attributes,
        setAttributes,
    };

    //new code starts here
    const handleTogglePreview = () => {
        setIsPreview(!isPreview);
        if (!isPreview) {
            const editorWindow = window.frames['editor-canvas'] || window;
            useParticlesInit(panelProps, editorWindow);
        } else {
            // eslint-disable-next-line no-undef
            const element = document.getElementById(`zolo-particles-${uniqueId}`);
            if (element) {
                element.innerHTML = '';
            }
        }
    };

    //update the particles
    // useEffect(() => {
    //     if (isPreview) {
    //         useParticlesInit(panelProps);
    //     }
    // }, [zoloParticles]);

    // zolo.presets.particles;
    const presets = [
        { label: __('Dust Wind', 'zoloblocks'), value: 'dust_wind' },
        { label: __('Flying Bubble', 'zoloblocks'), value: 'flying_bubble' },
        { label: __('Snow Fall (pro)', 'zoloblocks'), value: 'snow_fall', disabled: true },
        { label: __('Flying Shape (pro)', 'zoloblocks'), value: 'flying_shape', disabled: true },
        { label: __('Hover Bubble (pro)', 'zoloblocks'), value: 'hover_bubble', disabled: true },
        { label: __('Polygonal Move (pro)', 'zoloblocks'), value: 'polygonal_move', disabled: true },
        { label: __('Custom Options (pro)', 'zoloblocks'), value: 'custom_options', disabled: true },
    ];

    return (
        <>
            <CardDivider />
            <PopoverControl
                label={__('Particles', 'zoloblocks')}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clip-rule="evenodd"
                            d="M2.75 1C2.33579 1 2 1.33579 2 1.75V17.841C2 18.2552 2.33579 18.591 2.75 18.591H8.58C8.99421 18.591 9.33 18.2552 9.33 17.841C9.33 17.4268 8.99421 17.091 8.58 17.091H3.5V14.5411C3.55676 14.5073 3.60997 14.4655 3.65793 14.4155L6.3117 11.6518L7.9075 13.2543C8.05026 13.3976 8.24488 13.4773 8.44718 13.475C8.64948 13.4728 8.8423 13.389 8.98188 13.2425L12.6766 9.36558L14.0467 10.8051C14.3322 11.1052 14.807 11.1169 15.107 10.8314C15.407 10.5458 15.4188 10.0711 15.1332 9.77102L13.2202 7.76102C13.0787 7.61233 12.8825 7.52814 12.6772 7.52808C12.4719 7.52801 12.2756 7.61207 12.134 7.76066L8.42714 11.6503L6.83339 10.0499C6.69098 9.90685 6.49694 9.82727 6.29512 9.82911C6.0933 9.83094 5.90074 9.91404 5.76096 10.0596L3.5 12.4143V2.5H18.091V6.538C18.091 6.95221 18.4268 7.288 18.841 7.288C19.2552 7.288 19.591 6.95221 19.591 6.538V1.75C19.591 1.33579 19.2552 1 18.841 1H2.75ZM8.439 5.62793C8.15623 5.62793 7.927 5.85716 7.927 6.13993C7.927 6.4227 8.15623 6.65193 8.439 6.65193C8.72177 6.65193 8.951 6.4227 8.951 6.13993C8.951 5.85716 8.72177 5.62793 8.439 5.62793ZM6.427 6.13993C6.427 5.02873 7.32781 4.12793 8.439 4.12793C9.5502 4.12793 10.451 5.02873 10.451 6.13993C10.451 7.25113 9.5502 8.15193 8.439 8.15193C7.32781 8.15193 6.427 7.25113 6.427 6.13993ZM9.45426 22.5008C9.77326 22.5908 10.1133 22.6308 10.4613 22.6308L10.4623 22.6318C12.0903 22.6318 13.8943 21.7528 14.5483 20.9448C14.9633 20.4341 15.1577 19.7933 15.098 19.1372L15.8192 18.2438C15.8431 18.2142 15.8643 18.1834 15.883 18.1516C16.7083 17.3543 17.5999 16.3755 18.5402 15.2338C20.3392 13.0088 23.1572 9.1058 21.8022 7.9558C20.4142 6.8528 17.1822 10.4378 15.3802 12.6668C14.4598 13.8037 13.6108 14.9963 12.9838 16.0301L12.3232 16.8484C11.6822 16.9157 11.066 17.2258 10.6273 17.7618C10.2837 18.1742 10.1955 18.6504 10.1176 19.071L10.1173 19.0728L10.1168 19.0752C10.008 19.6623 9.90523 20.2166 9.14026 20.8128C8.84226 21.0288 8.69926 21.3888 8.76626 21.7518C8.83326 22.1138 9.10826 22.4098 9.45426 22.5008ZM10.0413 22.0108L10.0628 21.994L10.0583 21.9977C10.053 22.002 10.0473 22.0066 10.0413 22.0108ZM11.7833 18.7168C11.9893 18.4648 12.2883 18.3338 12.5883 18.3338C12.8133 18.3338 13.0383 18.4078 13.2253 18.5598C13.4403 18.7348 13.5743 18.9838 13.6023 19.2608C13.6293 19.5288 13.5523 19.7918 13.3833 19.9988C13.3825 19.9988 13.382 19.9991 13.3817 19.9994C13.3813 20 13.3813 20.0008 13.3813 20.0008C13.0933 20.3568 11.9863 20.9508 10.9273 21.0978C11.3901 20.4381 11.5062 19.8103 11.5922 19.3454L11.5923 19.3448C11.6443 19.0588 11.6863 18.8328 11.7833 18.7168ZM14.5922 16.2878L15.1662 16.7518C15.8572 16.0568 16.6132 15.2138 17.3792 14.2848C19.0682 12.1938 20.0392 10.5608 20.4552 9.6308C19.6302 10.2308 18.2352 11.5208 16.5462 13.6098C15.8192 14.5078 15.1412 15.4398 14.5922 16.2878Z"
                            fill="#4D4D4D"
                        />
                    </svg>
                }
                // isPro={true}
                isActive={active}
                hasValue={popoverHasAttrVal(active, true, false) || popoverHasAttrVal(preset, true, 'dust_wind')}
                onReset={() => {
                    setAttributes({
                        zoloParticles: {
                            ...zoloParticles,
                            active: false,
                            preset: 'dust_wind',
                            particleOptions: {
                                customOptions: {},
                            },
                            colors: [],
                            toggleCustomOption: false,
                        },
                    });
                }}
                onChange={(v) => {
                    setIsPreview(false);
                    const element = document.getElementById(`zolo-particles-${uniqueId}`);
                    if (element) {
                        element.innerHTML = '';
                    }

                    setAttributes({
                        zoloParticles: {
                            ...zoloParticles,
                            active: true,
                        },
                    });

                    // if (!active) {
                    //     setAttributes({
                    //         parentClasses: [...parentClasses, 'zolo-particles'],
                    //     });
                    // } else {
                    //     setAttributes({
                    //         parentClasses: parentClasses.filter(function (e) {
                    //             return e !== 'zolo-particles';
                    //         }),
                    //     });
                    // }
                }}
            >
                <div className="zolo-flex-row-control">
                    <SelectControl
                        label={__('Presets', 'zoloblocks')}
                        value={preset}
                        options={applyFilters('zolo.presets.particles', presets)}
                        onChange={(preset) => onChangeHandler(preset)}
                    />
                </div>
                {preset !== 'custom_options' && (
                    <>
                        <div className="zolo-flex-row-control">
                            <SelectControl
                                label={__('Direction', 'zoloblocks')}
                                value={direction}
                                onChange={(value) => {
                                    setAttributes({
                                        zoloParticles: {
                                            ...zoloParticles,
                                            particleOptions: {
                                                ...particleOptions,
                                                direction: value,
                                            },
                                        },
                                    });
                                }}
                                options={[
                                    { label: __('None'), value: 'none' },
                                    { label: __('Top'), value: 'top' },
                                    { label: __('Top Right'), value: 'top-right' },
                                    { label: __('Right'), value: 'right' },
                                    { label: __('Bottom Right'), value: 'bottom-right' },
                                    { label: __('Bottom'), value: 'bottom' },
                                    { label: __('Bottom Left'), value: 'bottom-left' },
                                    { label: __('Left'), value: 'left' },
                                    { label: __('Top Left'), value: 'top-left' },
                                ]}
                            />
                        </div>
                        <BaseControl className="zolo-flex-col-control">
                            <div className="zolo-custom-label">{__('Choose Shape', 'zoloblocks')}</div>
                            <Select2
                                isMulti
                                isSearchable={false}
                                closeMenuOnSelect={true}
                                name="value"
                                options={[
                                    { value: 'circle', label: __('Circle', 'zoloblocks') },
                                    { value: 'triangle', label: __('Triangle', 'zoloblocks') },
                                    { value: 'edge', label: __('Edge', 'zoloblocks') },
                                    { value: 'polygon', label: __('Polygon', 'zoloblocks') },
                                    { value: 'star', label: __('Star', 'zoloblocks') },
                                ]}
                                onChange={(value) => {
                                    setAttributes({
                                        zoloParticles: {
                                            ...zoloParticles,
                                            particleOptions: {
                                                ...particleOptions,
                                                shapes: value.map((item) => item.value),
                                            },
                                        },
                                    });
                                }}
                                value={particleOptions?.shapes?.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </BaseControl>
                        <SimpleRangeControl
                            label={__('Speed', 'zoloblocks')}
                            onChange={(v) =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        speed: v,
                                    },
                                })
                            }
                            value={zoloParticles?.speed}
                            onReset={() =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        speed: 0,
                                    },
                                })
                            }
                            noUnits={true}
                        />
                        <SimpleRangeControl
                            label={__('Z Index', 'zoloblocks')}
                            onChange={(v) =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        zIndex: v,
                                    },
                                })
                            }
                            value={zoloParticles?.zIndex}
                            onReset={() =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        zIndex: 0,
                                    },
                                })
                            }
                            noUnits={true}
                        />
                        <div className="zolo-custom-heading">{__('Shape', 'zoloblocks')}</div>
                        <SimpleRangeControl
                            label={__('Size', 'zoloblocks')}
                            onChange={(v) =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        particleOptions: {
                                            ...particleOptions,
                                            shapeSize: v,
                                        },
                                    },
                                })
                            }
                            value={particleOptions?.shapeSize}
                            onReset={() =>
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        particleOptions: {
                                            ...particleOptions,
                                            shapeSize: undefined,
                                        },
                                    },
                                })
                            }
                            min={1}
                            max={200}
                            step={1}
                            noUnits={true}
                        />
                        <PopoverControl label={__('Color', 'zoloblocks')} children={<MultiColor propsMultiColor={sortableProps} />} />
                    </>
                )}
                {preset === 'custom_options' && (
                    <TextareaControl
                        label={__('Custom Options', 'zoloblocks')}
                        onChange={(v) =>
                            setAttributes({
                                zoloParticles: {
                                    ...zoloParticles,
                                    particleOptions: {
                                        ...particleOptions,
                                        customOptions: v,
                                    },
                                },
                            })
                        }
                        value={particleOptions.customOptions.length > 0 ? particleOptions.customOptions : ''}
                        help={
                            <div className="zolo_particle_help">
                                <a href="https://vincentgarreau.com/particles.js/" target="_blank" rel="noreferrer noopener">
                                    {__('Generate particle', 'zoloblocks')}
                                </a>
                            </div>
                        }
                    />
                )}

                <Button className="zolo-action-button" variant="primary" onClick={handleTogglePreview}>
                    {isPreview ? __('Stop Preview', 'zoloblocks-pro') : __('Preview', 'zoloblocks-pro')}
                </Button>
            </PopoverControl>
        </>
    );
};
export default Inspector;
