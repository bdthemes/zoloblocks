/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import Select2 from 'react-select';

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
    ColorControl,
<<<<<<< HEAD
    TabPanelControl,
=======
    ColorControlAlt,
>>>>>>> ef9e41d00a27149fd7bbdec910fad8b65f229b7a
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CONTAINER_WIDTH,
    CONTAINER_GAP,
    CONTENT_WIDTH,
    MIN_HEIGHT,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
    FLEX_ALIGN,
} from './constants';

import {
    FLEX_DIRECTIONS,
    FLEX_ALIGNS,
    FLEX_JUSTIFIES,
    FLEX_WRAPS,
    WIDTH_TYPES,
    CONTENT_WIDTH_TYPES,
    FLEX_ALIGNS_ROW,
    FLEX_JUSTIFIES_ROW,
} from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        containerWidthType,
        contentWidthType,
        resMode,
        isBlockRootParent,
        FlexDirectionZRPAlign,
        TABFlexDirectionZRPAlign,
        MOBFlexDirectionZRPAlign,
        enableParticlesAnimation,
        particleOptions,
        optionPreset,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const isRowDirection = FlexDirectionZRPAlign === 'row' || FlexDirectionZRPAlign === 'row-reverse';
    const isRowDirectionTab = TABFlexDirectionZRPAlign === 'row' || TABFlexDirectionZRPAlign === 'row-reverse';
    const isRowDirectionMob = MOBFlexDirectionZRPAlign === 'row' || MOBFlexDirectionZRPAlign === 'row-reverse';

    let alignItemsOptions;
    if (resMode === 'Desktop') alignItemsOptions = isRowDirection;
    else if (resMode === 'Tablet') alignItemsOptions = isRowDirectionTab;
    else if (resMode === 'Mobile') alignItemsOptions = isRowDirectionMob;
    alignItemsOptions ? (alignItemsOptions = FLEX_ALIGNS_ROW) : (alignItemsOptions = FLEX_ALIGNS);

    let justifyContentOptions;
    if (resMode === 'Desktop') justifyContentOptions = isRowDirection;
    else if (resMode === 'Tablet') justifyContentOptions = isRowDirectionTab;
    else if (resMode === 'Mobile') justifyContentOptions = isRowDirectionMob;
    justifyContentOptions ? (justifyContentOptions = FLEX_JUSTIFIES_ROW) : (justifyContentOptions = FLEX_JUSTIFIES);
    console.log('particleOptions', particleOptions.Color);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/container"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ToggleControl
                                label="Particles Animation"
                                checked={enableParticlesAnimation}
                                onChange={() => setAttributes({ enableParticlesAnimation: !enableParticlesAnimation })}
                            />
                            {enableParticlesAnimation && (
                                <PopoverControl
                                    label={__('Particles', 'zoloblocks')}
                                    children={
                                        <>
<<<<<<< HEAD
                                            <TabPanelControl
                                                options={[
                                                    { label: 'Basic', value: 'normal' },
                                                    { label: 'Advanced', value: 'hover' },
                                                ]}
                                                normalComponents={
                                                    <>
                                                        <SelectControl
                                                            label={__('Presets', 'zoloblocks')}
                                                            value={optionPreset}
                                                            options={[
                                                                { label: 'One', value: 'one' },
                                                                { label: 'Two', value: 'two' },
                                                                { label: 'Three', value: 'three' },
                                                            ]}
                                                            onChange={(preset) => {
                                                                setAttributes({ optionPreset: preset });
                                                            }}
                                                        />
                                                        <RangeControl
                                                            label={__('Number', 'zoloblocks')}
                                                            value={particleOptions.number}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, number: v } });
                                                            }}
                                                            min={0}
                                                            max={200}
                                                        />
                                                        <RangeControl
                                                            label={__('Density Area', 'zoloblocks')}
                                                            value={particleOptions.DensityArea}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, DensityArea: v } });
                                                            }}
                                                            min={0}
                                                            max={2000}
                                                        />
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={particleOptions.Color}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    particleOptions: { ...particleOptions, Color: value },
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <Select2
                                                            defaultValue={particleOptions.shape}
                                                            isMulti
                                                            isSearchable={true}
                                                            closeMenuOnSelect={false}
                                                            name="value"
                                                            options={[
                                                                { value: 'circle', label: 'Circle' },
                                                                { value: 'criangle', label: 'Triangle' },
                                                                { value: 'edge', label: 'Edge' },
                                                                { value: 'polygon', label: 'Polygon' },
                                                                { value: 'star', label: 'Star' },
                                                            ]}
                                                            onChange={(value) => {
                                                                setAttributes({
                                                                    particleOptions: { ...particleOptions, shape: value },
                                                                });
                                                            }}
                                                        />
                                                        <RangeControl
                                                            label={__('Stroke Width', 'zoloblocks')}
                                                            value={particleOptions.stroke}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, stroke: v } });
                                                            }}
                                                            min={0}
                                                            max={20}
                                                        />
                                                        <RangeControl
                                                            label={__('Size', 'zoloblocks')}
                                                            value={particleOptions.size}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, size: v } });
                                                            }}
                                                            min={0}
                                                            max={20}
                                                        />
                                                        <RangeControl
                                                            label={__('Speed', 'zoloblocks')}
                                                            value={particleOptions.speed}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, speed: v } });
                                                            }}
                                                            min={0}
                                                            max={10}
                                                        />
                                                        <RangeControl
                                                            label={__('Distance', 'zoloblocks')}
                                                            value={particleOptions.distance}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, distance: v } });
                                                            }}
                                                            min={0}
                                                            max={200}
                                                        />
                                                        <RangeControl
                                                            label={__('Move Speed', 'zoloblocks')}
                                                            value={particleOptions.moveSpeed}
                                                            onChange={(v) => {
                                                                setAttributes({ particleOptions: { ...particleOptions, moveSpeed: v } });
                                                            }}
                                                            min={0}
                                                            max={10}
                                                        />
                                                        <SelectControl
                                                            label={__('Direction', 'zoloblocks')}
                                                            value={particleOptions?.direction}
                                                            onChange={(value) => {
                                                                setAttributes({
                                                                    particleOptions: { ...particleOptions, direction: value },
                                                                });
                                                            }}
                                                            options={[
                                                                { label: 'None', value: 'none' },
                                                                { label: 'Top', value: 'top' },
                                                                { label: 'Top Right', value: 'top-right' },
                                                                { label: 'Right', value: 'right' },
                                                                { label: 'Bottom Right', value: 'bottom-right' },
                                                                { label: 'Bottom', value: 'bottom' },
                                                                { label: 'Bottom Left', value: 'bottom-left' },
                                                                { label: 'Left', value: 'left' },
                                                                { label: 'Top Left', value: 'top-left' },
                                                            ]}
                                                        />
                                                        <ToggleControl
                                                            label={__('On Hover', 'zoloblocks')}
                                                            checked={particleOptions.onHover}
                                                            onChange={() => {
                                                                setAttributes({
                                                                    particleOptions: {
                                                                        ...particleOptions,
                                                                        onHover: !particleOptions.onHover,
                                                                    },
                                                                });
                                                            }}
                                                        />
=======
                                            <RangeControl
                                                label={__('Number', 'zoloblocks')}
                                                value={particleOptions.number}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, number: v } });
                                                }}
                                                min={0}
                                                max={200}
                                            />
                                            <RangeControl
                                                label={__('Density Area', 'zoloblocks')}
                                                value={particleOptions.DensityArea}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, DensityArea: v } });
                                                }}
                                                min={0}
                                                max={2000}
                                            />
                                            <ColorControlAlt
                                                label={__('Color', 'zoloblocks')}
                                                color={particleOptions?.Color}
                                                onChange={(value) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, Color: value } });
                                                }}
                                            />
                                            {/* <SelectControl
                                                label={__('Shape', 'zoloblocks')}
                                                value={particleOptions?.shape}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        particleOptions: { ...particleOptions, shape: value },
                                                    });
                                                }}
                                                options={[
                                                    { label: 'Circle', value: 'circle' },
                                                    { label: 'Triangle', value: 'triangle' },
                                                    { label: 'Edge', value: 'edge' },
                                                    { label: 'Polygon', value: 'polygon' },
                                                    { label: 'Star', value: 'star' },
                                                ]}
                                            /> */}
                                            <Select2
                                                defaultValue={[{ value: 'circle', label: 'Circle' }]}
                                                isMulti
                                                isSearchable={false}
                                                closeMenuOnSelect={false}
                                                name="value"
                                                options={[
                                                    { value: 'circle', label: 'Circle' },
                                                    { value: 'triangle', label: 'Triangle' },
                                                    { value: 'edge', label: 'Edge' },
                                                    { value: 'polygon', label: 'Polygon' },
                                                    { value: 'star', label: 'Star' },
                                                ]}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        particleOptions: { ...particleOptions, shapes: value },
                                                    });
                                                }}
                                                value={particleOptions?.shapes}
                                            />
                                            <RangeControl
                                                label={__('Stroke Width', 'zoloblocks')}
                                                value={particleOptions.stroke}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, stroke: v } });
                                                }}
                                                min={0}
                                                max={20}
                                            />
                                            <RangeControl
                                                label={__('Size', 'zoloblocks')}
                                                value={particleOptions.size}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, size: v } });
                                                }}
                                                min={0}
                                                max={20}
                                            />
                                            <RangeControl
                                                label={__('Speed', 'zoloblocks')}
                                                value={particleOptions.speed}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, speed: v } });
                                                }}
                                                min={0}
                                                max={10}
                                            />
                                            <RangeControl
                                                label={__('Distance', 'zoloblocks')}
                                                value={particleOptions.distance}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, distance: v } });
                                                }}
                                                min={0}
                                                max={200}
                                            />
                                            <RangeControl
                                                label={__('Move Speed', 'zoloblocks')}
                                                value={particleOptions.moveSpeed}
                                                onChange={(v) => {
                                                    setAttributes({ particleOptions: { ...particleOptions, moveSpeed: v } });
                                                }}
                                                min={0}
                                                max={10}
                                            />
                                            <SelectControl
                                                label={__('Direction', 'zoloblocks')}
                                                value={particleOptions?.direction}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        particleOptions: { ...particleOptions, direction: value },
                                                    });
                                                }}
                                                options={[
                                                    { label: 'None', value: 'none' },
                                                    { label: 'Top', value: 'top' },
                                                    { label: 'Top Right', value: 'top-right' },
                                                    { label: 'Right', value: 'right' },
                                                    { label: 'Bottom Right', value: 'bottom-right' },
                                                    { label: 'Bottom', value: 'bottom' },
                                                    { label: 'Bottom Left', value: 'bottom-left' },
                                                    { label: 'Left', value: 'left' },
                                                    { label: 'Top Left', value: 'top-left' },
                                                ]}
                                            />
                                            <ToggleControl
                                                label={__('On Hover', 'zoloblocks')}
                                                checked={particleOptions.onHover}
                                                onChange={() => {
                                                    setAttributes({
                                                        particleOptions: { ...particleOptions, onHover: !particleOptions.onHover },
                                                    });
                                                }}
                                            />
>>>>>>> ef9e41d00a27149fd7bbdec910fad8b65f229b7a

                                                        <SelectControl
                                                            label={__('On Hover Mode', 'zoloblocks')}
                                                            value={particleOptions?.oNhoverMode}
                                                            onChange={(value) => {
                                                                setAttributes({
                                                                    particleOptions: { ...particleOptions, oNhoverMode: value },
                                                                });
                                                            }}
                                                            options={[
                                                                { label: 'Repulse', value: 'repulse' },
                                                                { label: 'Bubble', value: 'bubble' },
                                                                { label: 'Grab', value: 'grab' },
                                                            ]}
                                                        />
                                                        <ToggleControl
                                                            label={__('On Click', 'zoloblocks')}
                                                            checked={particleOptions.onClick}
                                                            onChange={() => {
                                                                setAttributes({
                                                                    particleOptions: {
                                                                        ...particleOptions,
                                                                        onClick: !particleOptions.onClick,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <SelectControl
                                                            label={__('On Click Mode', 'zoloblocks')}
                                                            value={particleOptions?.onClickMode}
                                                            onChange={(value) => {
                                                                setAttributes({
                                                                    particleOptions: { ...particleOptions, onClickMode: value },
                                                                });
                                                            }}
                                                            options={[
                                                                { label: 'Repulse', value: 'repulse' },
                                                                { label: 'Bubble', value: 'bubble' },
                                                                { label: 'Grab', value: 'grab' },
                                                            ]}
                                                        />
                                                    </>
                                                }
                                            />
                                        </>
                                    }
                                />
                            )}
                            {isBlockRootParent && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Container Width', 'zoloblocks')}
                                        value={containerWidthType}
                                        onChange={(value) =>
                                            setAttributes({
                                                containerWidthType: value,
                                            })
                                        }
                                        options={WIDTH_TYPES}
                                    />
                                    {containerWidthType === 'alignfull' && (
                                        <>
                                            <IconicBtnGroup
                                                label={__('Content Width', 'zoloblocks')}
                                                value={contentWidthType}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        contentWidthType: value,
                                                    })
                                                }
                                                options={CONTENT_WIDTH_TYPES}
                                            />
                                            {contentWidthType === 'alignwide' && (
                                                <ResRangeControl
                                                    label={__('Content Width', 'zoloblocks')}
                                                    controlName={CONTENT_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={2000}
                                                />
                                            )}
                                        </>
                                    )}
                                </>
                            )}

                            {((isBlockRootParent && containerWidthType === 'custom_width') || !isBlockRootParent) && (
                                <ResRangeControl
                                    label={__('Custom Width', 'zoloblocks')}
                                    controlName={CONTAINER_WIDTH}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={2000}
                                />
                            )}

                            <ResRangeControl
                                label={__('Minimum Height', 'zoloblocks')}
                                controlName={MIN_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Flex Properties', 'zoloblocks')} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Direction', 'zoloblocks')}
                                controlName={FLEX_DIRECTION}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_DIRECTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Align Items', 'zoloblocks')}
                                controlName={FLEX_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={alignItemsOptions}
                            />

                            <ResAlignmentControl
                                label={__('Justify Content', 'zoloblocks')}
                                controlName={FLEX_JUSTIFY}
                                requiredProps={requiredProps}
                                alignOptions={justifyContentOptions}
                                customClass="zb-flex-justify-content"
                            />
                            <ResAlignmentControl
                                label={__('Wrap', 'zoloblocks')}
                                controlName={FLEX_WRAP}
                                requiredProps={requiredProps}
                                alignOptions={FLEX_WRAPS}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container Gap', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={CONTAINER_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/container"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
