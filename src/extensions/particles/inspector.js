/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, SelectControl, TextareaControl, Button } from '@wordpress/components';
import Select2 from 'react-select';
import { useEffect } from '@wordpress/element';
import MultiColor from './multicolor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const { ZoloPanelBody, PopoverControl, SimpleRangeControl } = window.zoloModule;

import objAttributes from './attributes';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;

    const { resMode, zoloParticles, uniqueId } = attributes;

    const { active, colors, preset, particleOptions, toggleCustomOption } = zoloParticles;
    const { direction } = particleOptions;

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
            <ToggleControl
                label={__('Enable Particles Effect', 'zoloblocks')}
                checked={active}
                onChange={() =>
                    setAttributes({
                        zoloParticles: {
                            ...zoloParticles,
                            active: !active,
                        },
                    })
                }
            />

            {active && (
                <>
                    <SelectControl
                        label={__('Presets', 'zoloblocks')}
                        value={preset}
                        options={applyFilters('zolo.presets.particles', presets)}
                        onChange={(preset) => onChangeHandler(preset)}
                    />

                    {preset !== 'custom_options' && (
                        <>
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
                            <SimpleRangeControl
                                label={__('Shape Size', 'zoloblocks')}
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
                                        {__('Genarate particle', 'zoloblocks')}
                                    </a>
                                </div>
                            }
                        />
                    )}
                </>
            )}
        </>
    );
};
export default Inspector;
