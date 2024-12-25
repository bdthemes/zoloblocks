/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TabPanel, RangeControl, SelectControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    TabPanelControl,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
    ResGapControl,
    ResCounterControl,
    SimpleRangeControl,

    // RangeControl,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    GRID_MIN_WIDTH,
    GRID_MIN_HEIGHT,
    GRID_GAP,
    GRID_COL_COUNT,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_JUSTIFY,
    FLEX_WRAP,
} from './constants';

import {
    FLEX_ALIGNS,
    FLEX_ALIGNS_ROW,
    FLEX_DIRECTIONS,
    FLEX_JUSTIFIES,
    FLEX_JUSTIFIES_ROW,
    FLEX_WRAPS,
} from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const {
        resMode,
        loopLayoutType,
        gridLayoutType,
        sliderOptions,
        FlexDirectionZRPAlign,
        TABFlexDirectionZRPAlign,
        MOBFlexDirectionZRPAlign,
    } = attributes;

    const {
        speed = 800,
        autoplay = false,
        autoplayDelay = 3000,
        pauseOnMouseEnter = false,
        loop = false,
        navigation = true,
        navPosition = 'center-center',
        pagination = true,
        paginationType = 'bullets',
        pagiPosition = 'bottom-center',
        progressDirection = 'top',
        effect = 'slide', // slide, fade, cube, coverflow, flip, creative, cards

        cardsEffect = {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
        },
        coverflowEffect = {
            slideShadows: true,
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            // shadowOffset: 20,
            // shadowScale: 0.94,
        },
        cubeEffect = {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        creativePreset = 'preset1',
        fadeEffect = {
            crossfade: false,
        },
        flipEffect = {
            slideShadows: true,
            limitRotation: true,
            // shadowOffset: 20,
            // shadowScale: 0.94,
        },
    } = sliderOptions || {};

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-query"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <IconicBtnGroup
                                label={__('Layout Type', 'zoloblocks')}
                                value={loopLayoutType}
                                onChange={(value) =>
                                    setAttributes({
                                        loopLayoutType: value,
                                    })
                                }
                                options={[
                                    { value: 'grid', label: 'Grid' },
                                    { value: 'slider', label: 'Slider' },
                                    { value: 'flex', label: 'Flex' },
                                    { value: 'block', label: 'Block' },
                                ]}
                            />

                            {loopLayoutType === 'grid' && (
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Type', 'zoloblocks')}
                                            value={gridLayoutType}
                                            onChange={(value) =>
                                                setAttributes({
                                                    gridLayoutType: value,
                                                })
                                            }
                                            options={[
                                                { value: 'loop-grid', label: 'Grid' },
                                                { value: 'loop-masonary', label: 'Masonary' },
                                            ]}
                                        />
                                    </div>
                                    {gridLayoutType && (
                                        <>
                                            <ResCounterControl
                                                label={__('Columns', 'zoloblocks')}
                                                controlName={GRID_COL_COUNT}
                                                requiredProps={requiredProps}
                                                min={1}
                                                max={6}
                                                defaults={{
                                                    deskRange: 3,
                                                    tabRange: 2,
                                                    mobRange: 1,
                                                }}
                                            />
                                            <ResGapControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={GRID_GAP}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                            {loopLayoutType === 'slider' && (
                                <>
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Basic', 'zoloblocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Effect', 'zoloblocks'),
                                            },
                                        ]}
                                        normalComponents={
                                            <>
                                                <RangeControl
                                                    className="zolo-flex-col-control"
                                                    label={__('Speed', 'zoloblocks')}
                                                    value={speed}
                                                    onChange={(v) =>
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                speed: v,
                                                            },
                                                        })
                                                    }
                                                    min={100}
                                                    step={100}
                                                    max={3000}
                                                    help={__('Default Speed:', 'zoloblocks') + 8 * 100 + 'ms'}
                                                />
                                                <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
                                                <ToggleControl
                                                    label={__('Infinite Loop', 'zoloblocks')}
                                                    checked={loop}
                                                    onChange={() =>
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                loop: !loop,
                                                            },
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__('Autoplay', 'zoloblocks')}
                                                    checked={autoplay}
                                                    onChange={() =>
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                autoplay: !autoplay,
                                                            },
                                                        })
                                                    }
                                                />
                                                {autoplay && (
                                                    <>
                                                        <RangeControl
                                                            className="zolo-flex-col-control"
                                                            label={__('Autoplay Delay', 'zoloblocks')}
                                                            value={autoplayDelay}
                                                            onChange={(v) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        autoplayDelay: v,
                                                                    },
                                                                })
                                                            }
                                                            min={1}
                                                            max={100}
                                                            help={__('Autoplay Dealy:', 'zoloblocks') + autoplayDelay * 100 + 'ms'}
                                                        />
                                                        <ToggleControl
                                                            label={__('Pause on Mouse Enter', 'zoloblocks')}
                                                            checked={pauseOnMouseEnter}
                                                            onChange={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        pauseOnMouseEnter: !pauseOnMouseEnter,
                                                                    },
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                                <ToggleControl
                                                    label={__('Show Navigation', 'zoloblocks')}
                                                    checked={navigation || false}
                                                    onChange={() =>
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                navigation: !navigation,
                                                            },
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__('Show Pagination', 'zoloblocks')}
                                                    checked={pagination || false}
                                                    onChange={() =>
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                pagination: !pagination,
                                                            },
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <SelectControl
                                                    label={__('Select Effect', 'zoloblocks')}
                                                    value={effect}
                                                    options={[
                                                        { label: __('Slide', 'zoloblocks'), value: 'slide' },
                                                        { label: __('Fade', 'zoloblocks'), value: 'fade' },
                                                        { label: __('Cube', 'zoloblocks'), value: 'cube' },
                                                        { label: __('Coverflow', 'zoloblocks'), value: 'coverflow' },
                                                        { label: __('Flip', 'zoloblocks'), value: 'flip' },
                                                    ]}
                                                    onChange={(v) => {
                                                        setAttributes({
                                                            sliderOptions: {
                                                                ...sliderOptions,
                                                                effect: v,
                                                            },
                                                        });
                                                    }}
                                                />

                                                {effect === 'cube' && (
                                                    <>
                                                        <ToggleControl
                                                            label={__('Shadow', 'zoloblocks')}
                                                            checked={cubeEffect?.slideShadows || false}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            slideShadows: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                        />
                                                        <ToggleControl
                                                            label={__('Cube Shadow', 'zoloblocks')}
                                                            checked={cubeEffect?.shadow || false}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            shadow: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Shadow Offset (px)', 'zoloblocks')}
                                                            value={cubeEffect?.shadowOffset || 20}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            shadowOffset: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            shadowOffset: 20,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Shadow Scale', 'zoloblocks')}
                                                            value={cubeEffect?.shadowScale || 0.94}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            shadowScale: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        cubeEffect: {
                                                                            ...cubeEffect,
                                                                            shadowScale: 0.94,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={0}
                                                            max={1}
                                                            step={0.01}
                                                            noUnits={true}
                                                        />
                                                    </>
                                                )}
                                                {effect === 'fade' && (
                                                    <>
                                                        <ToggleControl
                                                            label="Crossfade"
                                                            checked={fadeEffect?.crossfade || false}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        fadeEffect: {
                                                                            ...fadeEffect,
                                                                            crossfade: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}

                                                {effect === 'flip' && (
                                                    <>
                                                        <ToggleControl
                                                            label={__('Slide Shadows', 'zoloblocks')}
                                                            checked={flipEffect?.slideShadows || false}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    options: {
                                                                        ...options,
                                                                        flipEffect: {
                                                                            ...flipEffect,
                                                                            slideShadows: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Shadow Offset (px)', 'zoloblocks')}
                                                            value={flipEffect?.shadowOffset || 20}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        flipEffect: {
                                                                            ...flipEffect,
                                                                            shadowOffset: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        flipEffect: {
                                                                            ...flipEffect,
                                                                            shadowOffset: 20,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Shadow Scale', 'zoloblocks')}
                                                            value={flipEffect?.shadowScale || 0.94}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        flipEffect: {
                                                                            ...flipEffect,
                                                                            shadowScale: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        flipEffect: {
                                                                            ...flipEffect,
                                                                            shadowScale: 0.94,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={0}
                                                            max={1}
                                                            step={0.01}
                                                            noUnits={true}
                                                        />
                                                    </>
                                                )}
                                                {effect === 'coverflow' && (
                                                    <>
                                                        <ToggleControl
                                                            label={__('Slide Shadows', 'zoloblocks')}
                                                            checked={coverflowEffect?.slideShadows || false}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            slideShadows: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Rotate', 'zoloblocks')}
                                                            value={coverflowEffect?.rotate || 50}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            rotate: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            rotate: 50,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={-360}
                                                            max={360}
                                                            noUnits={true}
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Stretch', 'zoloblocks')}
                                                            value={coverflowEffect?.stretch || 0}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            stretch: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={-360}
                                                            max={360}
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            stretch: 0,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />

                                                        <SimpleRangeControl
                                                            label={__('Depth', 'zoloblocks')}
                                                            value={coverflowEffect?.depth || 100}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            depth: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={0}
                                                            max={1000}
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            depth: 100,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />

                                                        <SimpleRangeControl
                                                            label={__('Shadow Scale', 'zoloblocks')}
                                                            value={coverflowEffect?.shadowScale || 1}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            shadowScale: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={0}
                                                            max={1}
                                                            step={0.01}
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            shadowScale: 1,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />
                                                        <SimpleRangeControl
                                                            label={__('Modifier', 'zoloblocks')}
                                                            value={coverflowEffect?.modifier || 1}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            modifier: value,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            min={0}
                                                            max={1}
                                                            step={0.01}
                                                            onReset={() =>
                                                                setAttributes({
                                                                    sliderOptions: {
                                                                        ...sliderOptions,
                                                                        coverflowEffect: {
                                                                            ...coverflowEffect,
                                                                            modifier: 1,
                                                                        },
                                                                    },
                                                                })
                                                            }
                                                            noUnits={true}
                                                        />
                                                    </>
                                                )}
                                            </>
                                        }
                                    />
                                </>
                            )}
                            {loopLayoutType === 'flex' && (
                                <>
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

                                    <CardDivider />
                                    <ResGapControl
                                        label={__('Gap', 'zoloblocks')}
                                        controlName={GRID_GAP}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />
                                    <CardDivider />
                                    <ResRangeControl
                                        label={__('Width', 'zoloblocks')}
                                        controlName={GRID_MIN_WIDTH}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />
                                    <ResRangeControl
                                        label={__('Height', 'zoloblocks')}
                                        controlName={GRID_MIN_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-query"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
