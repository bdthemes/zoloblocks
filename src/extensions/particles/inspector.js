/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, SelectControl, TextareaControl, Button } from '@wordpress/components';
import Select2 from 'react-select';
import { useEffect } from '@wordpress/element';
import Sortable from './sortable';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    HeaderTabs,
    IconicBtnGroup,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    PopoverControl,
    SimpleRangeControl,
    ImageAvatar,
} = window.zoloModule;

import objAttributes from './attributes';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;

    const { resMode, zoloParticles, uniqueId } = attributes;

    const { active, colors, preset, particleOptions } = zoloParticles;
    const { color, shapes, direction, shapeSize } = particleOptions;

    const onChangeHandler = (select) => {
        // setAttributes({
        //     zoloParticles: {
        //         ...zoloParticles,
        //         preset: select,
        //     },
        // });
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
        }
    };

    useEffect(() => {
        setAttributes({
            zoloParticles: {
                ...zoloParticles,
                cursorId: uniqueId,
            },
        });
    }, [uniqueId]);

    const sortableProps = {
        attributes,
        setAttributes,
    };

    return (
        <ZoloPanelBody title={__('Particles Animation', 'zoloblocks')} panelProps={panelProps} firstOpen={false} isNew={true}>
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
                    {/* {!toggleCustomOption && (
                        <> */}
                    <SelectControl
                        label={__('Presets', 'zoloblocks')}
                        value={preset}
                        options={[
                            { label: __('Dust Wind', 'zoloblocks'), value: 'dust_wind' },
                            { label: __('Flying Bubble', 'zoloblocks'), value: 'flying_bubble' },
                            { label: __('Snow Fall', 'zoloblocks'), value: 'snow_fall' },
                            { label: __('Flying Shape', 'zoloblocks'), value: 'flying_shape' },
                            { label: __('Hover Bubble', 'zoloblocks'), value: 'hover_bubble' },
                            { label: __('Polygonal Move', 'zoloblocks'), value: 'polygonal_move' },
                        ]}
                        onChange={(preset) => onChangeHandler(preset)}
                    />

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
                    <PopoverControl
                        label={__('Color', 'zoloblocks')}
                        children={<Sortable sortableProps={sortableProps} />}
                    />
                    {/*
                            <PopoverControl
                                label={__('Shape Size', 'zoloblocks')}
                                children={
                                    <>

                                    </>
                                }
                            />

                        </>
                    )} */}
                    {/* <ToggleControl
                        label={__('Enable Custom Options', 'zoloblocks')}
                        checked={toggleCustomOption}
                        onChange={() =>
                            setAttributes({
                                toggleCustomOption: !toggleCustomOption,
                            })
                        }
                    /> */}

                    {/* {toggleCustomOption && (
                        <TextareaControl
                            label={__('Custom Options', 'zoloblocks')}
                            onChange={(v) =>
                                setAttributes({
                                    particleOptions: {
                                        ...particleOptions,
                                        customOptions: v,
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
                    )} */}
                </>
            )}
        </ZoloPanelBody>
    );
};
export default Inspector;
