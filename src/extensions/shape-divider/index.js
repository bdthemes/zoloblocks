import React from 'react';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { SelectControl, ToggleControl } from '@wordpress/components';
import objAttributes from './attributes';
import './style.scss';
import Render from './render';
import Style from './style.js';
const {
    ColorControl,
    ResDimensionsControl,
    TabPanelControl,
    ZoloPanelBody,
} = window.zoloModule;
import { SHAPE_DIVIDER, TB_POSITION, TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const ShapeDivider = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const {
        resMode,

        // settings
        topType,
        topColor,
        topInvert,
        bottomType,
        bottomColor,
        bottomInvert,
        bringFront,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };
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
                                value={topType}
                                onChange={(value) =>
                                    setAttributes({
                                        topType: value,
                                    })
                                }
                                options={SHAPE_DIVIDER}
                            />

                            {topType === 'none' ? (
                                <></>
                            ) : (
                                <>
                                    <ColorControl
                                        label={__('Top Color', 'zoloblocks')}
                                        color={topColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                topColor: value,
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

                                    {topType === 'arrow' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'book' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'clouds' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'curve' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'curveasym' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'drops' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'mountains' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'pyramids' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'split' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'triangle' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'triangleAsy' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {topType === 'waves' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={topInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    <ToggleControl
                                        label={__('Bring To Front', 'zoloblocks')}
                                        checked={bringFront}
                                        onChange={() =>
                                            setAttributes({
                                                topbringFront: !bringFront,
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
                                value={bottomType}
                                onChange={(value) =>
                                    setAttributes({
                                        bottomType: value,
                                    })
                                }
                                options={SHAPE_DIVIDER}
                            />

                            {bottomType === 'none' ? (
                                <></>
                            ) : (
                                <>
                                    <ColorControl
                                        label={__('Bottom Color', 'zoloblocks')}
                                        color={bottomColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                bottomColor: value,
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

                                    {bottomType === 'arrow' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        bottomInvert: !bottomInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'book' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        bottomInvert: !bottomInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'clouds' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        bottomInvert: !bottomInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'mountains' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        bottomInvert: !bottomInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'pyramids' && (
                                        <>
                                            <ToggleControl
                                                label={__('Flip', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'split' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'triangle' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'triangleAsy' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {bottomType === 'waves' && (
                                        <>
                                            <ToggleControl
                                                label={__('Invert', 'zoloblocks')}
                                                checked={bottomInvert}
                                                onChange={() =>
                                                    setAttributes({
                                                        topInvert: !topInvert,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    <ToggleControl
                                        label={__('Bring To Front', 'zoloblocks')}
                                        checked={bringFront}
                                        onChange={() =>
                                            setAttributes({
                                                topbringFront: !bringFront,
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

addFilter('zolo.blocks.styleTab.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
    panels.push(<ShapeDivider panelProps={panelProps} />);
    return panels;
});


addFilter('zolo.blocks.render.shapeDivider.before', 'zolo/shape-divider', (panels, panelProps) => {
    const {Top} = Render(panelProps);
    panels.push(<Top />);
    return panels;
});

addFilter('zolo.blocks.render.shapeDivider.after', 'zolo/shape-divider', (panels, panelProps) => {
    const {Bottom } = Render(panelProps);
    panels.push(<Bottom />);
    return panels;
});



addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
    const {shapeDividerDesktop} = Style(props);
    return desktopAllStyle + shapeDividerDesktop;
});
