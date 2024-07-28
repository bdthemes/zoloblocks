const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody } = window.zoloModule;
import { SHAPE_DIVIDER, TB_POSITION, TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

import { __ } from '@wordpress/i18n';

import { SelectControl, ToggleControl } from '@wordpress/components';
import objAttributes from './attributes';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode, shapeDivider } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };
    const toggleInvertTop =
        shapeDivider.top.type !== 'wavebrush' &&
        shapeDivider.top.type !== 'wavepattern';
    const toggleInvertBottom = shapeDivider.bottom.type !== 'wavebrush' && shapeDivider.bottom.type !== 'wavepattern';
    return (
        <ZoloPanelBody title={__('Shape Divider', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <TabPanelControl
                options={TB_POSITION}
                normalComponents={
                    <>
                        <SelectControl
                            label={__('Type', 'zoloblocks')}
                            value={shapeDivider.top.type}
                            onChange={(value) =>
                                setAttributes({
                                    shapeDivider: {
                                        ...shapeDivider,
                                        top: {
                                            ...shapeDivider.top,
                                            type: value,
                                        },
                                    },
                                })
                            }
                            options={SHAPE_DIVIDER}
                        />

                        {shapeDivider?.top?.type !== 'none' && (
                            <>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shapeDivider.top.color}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    color: value,
                                                },
                                            },
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={TOP_WIDTH_SHAPE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={TOP_HEIGHT_SHAPE}
                                    requiredProps={requiredProps}
                                />

                                <ToggleControl
                                    label={__('Flip', 'zoloblocks')}
                                    checked={shapeDivider.top.flip}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    flip: value,
                                                },
                                            },
                                        })
                                    }
                                />
                                {toggleInvertTop && (
                                    <ToggleControl
                                        label={__('Invert', 'zoloblocks')}
                                        checked={shapeDivider.top.invert}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    top: {
                                                        ...shapeDivider.top,
                                                        invert: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}

                                <ToggleControl
                                    label={__('Bring to Front', 'zoloblocks')}
                                    checked={shapeDivider.top.bringToFront}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    bringToFront: value,
                                                },
                                            },
                                        })
                                    }
                                />
                            </>
                        )}
                    </>
                }
                hoverComponents={
                    <>
                        <SelectControl
                            label={__('Type', 'zoloblocks')}
                            value={shapeDivider.bottom.type}
                            onChange={(value) =>
                                setAttributes({
                                    shapeDivider: {
                                        ...shapeDivider,
                                        bottom: {
                                            ...shapeDivider.bottom,
                                            type: value,
                                        },
                                    },
                                })
                            }
                            options={SHAPE_DIVIDER}
                        />

                        {shapeDivider.bottom.type === 'none' ? (
                            <></>
                        ) : (
                            <>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shapeDivider.bottom.color}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    color: value,
                                                },
                                            },
                                        })
                                    }
                                />

                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={BOTTOM_WIDTH_SHAPE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={BOTTOM_HEIGHT_SHAPE}
                                    requiredProps={requiredProps}
                                />
                                <ToggleControl
                                    label={__('Flip', 'zoloblocks')}
                                    checked={shapeDivider.bottom.flip}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    flip: value,
                                                },
                                            },
                                        })
                                    }
                                />

                                {toggleInvertBottom && (
                                    <ToggleControl
                                        label={__('Invert', 'zoloblocks')}
                                        checked={shapeDivider.bottom.invert}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    bottom: {
                                                        ...shapeDivider.bottom,
                                                        invert: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}
                                <ToggleControl
                                    label={__('Bring to Front', 'zoloblocks')}
                                    checked={shapeDivider.bottom.bringToFront}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    bringToFront: value,
                                                },
                                            },
                                        })
                                    }
                                />
                            </>
                        )}
                    </>
                }
            />
        </ZoloPanelBody>
    );
};

export default Inspector;
