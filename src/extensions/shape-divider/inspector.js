const { ColorControl, ResDimensionsControl, TabPanelControl, ZoloPanelBody } = window.zoloModule;
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
    const toggleTypeFlip =
        shapeDivider.top.type === 'clouds' ||
        shapeDivider.top.type === 'curve' ||
        shapeDivider.top.type === 'curveasym' ||
        shapeDivider.top.type === 'pyramids';
    const toggleTypeFlipBottom =
        shapeDivider.bottom.type === 'clouds' ||
        shapeDivider.bottom.type === 'curve' ||
        shapeDivider.bottom.type === 'curveasym' ||
        shapeDivider.bottom.type === 'pyramids';
    return (
        <ZoloPanelBody title={__('Shape Divider', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <ToggleControl
                label={__('Enable Shape Divider', 'zoloblocks')}
                checked={attributes.enableShapeDivider}
                onChange={() =>
                    setAttributes({
                        enableShapeDivider: !attributes.enableShapeDivider,
                    })
                }
            />
            {attributes.enableShapeDivider && (
                <TabPanelControl
                    options={TB_POSITION}
                    normalComponents={
                        <>
                            <SelectControl
                                label={__('Top Type', 'zoloblocks')}
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

                            {shapeDivider.top.type === 'none' ? (
                                <></>
                            ) : (
                                <>
                                    <ColorControl
                                        label={__('Top Color', 'zoloblocks')}
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

                                    <ResDimensionsControl
                                        label={__('Width', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={TOP_WIDTH_SHAPE}
                                        max={300}
                                        min={1}
                                    />

                                    <ResDimensionsControl
                                        label={__('Height', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={TOP_HEIGHT_SHAPE}
                                        max={500}
                                        min={1}
                                    />
                                    <ToggleControl
                                        label={__(`${toggleTypeFlip ? 'Flip' : 'Invert'}`, 'zoloblocks')}
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
                                </>
                            )}
                        </>
                    }
                    hoverComponents={
                        <>
                            <SelectControl
                                label={__('Bottom Type', 'zoloblocks')}
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
                                        label={__('Bottom Color', 'zoloblocks')}
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

                                    <ResDimensionsControl
                                        label={__('Width', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={BOTTOM_WIDTH_SHAPE}
                                        max={300}
                                        min={1}
                                    />

                                    <ResDimensionsControl
                                        label={__('Height', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={BOTTOM_HEIGHT_SHAPE}
                                        max={500}
                                        min={1}
                                    />
                                    <ToggleControl
                                        label={__(`${toggleTypeFlipBottom ? 'Flip' : 'Invert'}`, 'zoloblocks')}
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
                                </>
                            )}
                        </>
                    }
                />
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
