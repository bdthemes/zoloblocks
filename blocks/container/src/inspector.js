/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { ToggleControl, SelectControl, TextareaControl } from '@wordpress/components';
import Select2 from 'react-select';
import Sortable from './sortable';

/**
 * Internal depencencies
 */
const { ResRangeControl, HeaderTabs, IconicBtnGroup, ResAlignmentControl, AdvancedOptions, ZoloPanelBody, ResGapControl, PopoverControl } =
    window.zoloModule;

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
        toggleCustomOption,
        particleOptions,
        optPreset,
        colorItem,
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

    const onChangeHandler = (select) => {
        setAttributes({ optPreset: select });
        switch (select) {
            case 'hover_bubble':
                setAttributes({
                    particleOptions: { ...particleOptions, direction: 'none' },
                });

                break;
            case 'dust_wind':
                setAttributes({
                    particleOptions: { ...particleOptions, direction: 'right' },
                });

                break;
            case 'flying_bubble':
                setAttributes({
                    particleOptions: { ...particleOptions, direction: 'top-right' },
                });

                break;
            case 'snow_fall':
                setAttributes({
                    particleOptions: { ...particleOptions, direction: 'bottom' },
                });

                break;
            case 'flying_shape':
                setAttributes({
                    particleOptions: { ...particleOptions, direction: 'top' },
                });
        }
    };

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
                                label={__('Particles Animation', 'zoloblocks')}
                                checked={enableParticlesAnimation}
                                onChange={() => setAttributes({ enableParticlesAnimation: !enableParticlesAnimation })}
                            />
                            {enableParticlesAnimation && (
                                <PopoverControl
                                    label={__('Particles', 'zoloblocks')}
                                    children={
                                        <>
                                            {!toggleCustomOption && (
                                                <>
                                                    <SelectControl
                                                        label={__('Presets', 'zoloblocks')}
                                                        value={optPreset}
                                                        options={[
                                                            { label: __('Hover Bubble'), value: 'hover_bubble' },
                                                            { label: __('Dust Wind'), value: 'dust_wind' },
                                                            { label: __('Flying Bubble'), value: 'flying_bubble' },
                                                            { label: __('Snow Fall'), value: 'snow_fall' },
                                                            { label: __('Flying Shape'), value: 'flying_shape' },
                                                        ]}
                                                        onChange={(preset) => onChangeHandler(preset)}
                                                    />
                                                    <Select2
                                                        isMulti
                                                        isSearchable={false}
                                                        closeMenuOnSelect={true}
                                                        name="value"
                                                        options={[
                                                            { value: 'circle', label: __('Circle') },
                                                            { value: 'triangle', label: __('Triangle') },
                                                            { value: 'edge', label: __('Edge') },
                                                            { value: 'polygon', label: __('Polygon') },
                                                            { value: 'star', label: __('Star') },
                                                        ]}
                                                        onChange={(value) => {
                                                            setAttributes({
                                                                particleOptions: { ...particleOptions, shapes: value },
                                                            });
                                                        }}
                                                        value={particleOptions?.shapes}
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

                                                    <Sortable colorItem={colorItem} setAttributes={setAttributes} attributes={attributes} />
                                                </>
                                            )}

                                            <ToggleControl
                                                label={__('Enable Custom Options', 'zoloblocks')}
                                                checked={toggleCustomOption}
                                                onChange={() =>
                                                    setAttributes({
                                                        toggleCustomOption: !toggleCustomOption,
                                                    })
                                                }
                                            />

                                            {toggleCustomOption && (
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
                                                            <a
                                                                href="https://vincentgarreau.com/particles.js/"
                                                                target="_blank"
                                                                rel="noreferrer noopener"
                                                            >
                                                                {__('Genarate particle', 'zoloblocks')}
                                                            </a>
                                                        </div>
                                                    }
                                                />
                                            )}
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
