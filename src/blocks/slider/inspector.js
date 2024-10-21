/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { RangeControl, ToggleControl, SelectControl, CardDivider } = wp.components;
/**
 * Internal dependencies
 */
const {
    HeaderTabs,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TabPanelControl,
    NormalBGControl,
    SimpleRangeControl,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    IconicBtnGroup,
    TypographyDropdown,
} = window.zoloModule;

// objAttributes
import objAttributes from './attributes';

/**
 * Constants
 */
import {
    SLIDER_EFFECTS,
    SLIDER_HEIGHT,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    // NAV_WIDTH,
    // NAV_HEIGHT,
    NAV_PADDING,
    NAV_MARGIN,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    PAG_VERTICAL_OFFSET,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
    PAGINATION_TYPES,
    PAGI_MARGIN,
    NAV_POSITIONS,
    PAGI_POSITIONS,
    PROGRESS_DIRECTIONS,
} from './constants';

import { PAGI_FRACTIONS_TYPO } from './constants/typoPrefixConstants';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        pagiFractionColor,
        pagiFractionCurrentColor,
        sliderOptions,
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
    } = sliderOptions;

    console.log('sliderOptions', sliderOptions);

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls>
            <HeaderTabs
                block="zolo/slider"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={SLIDER_HEIGHT}
                                requiredProps={requiredProps}
                                min={1}
                                max={1000}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Slider Options', 'zoloblocks')} panelProps={props}>
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
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Effects', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Select Effect', 'zoloblocks')}
                                value={effect}
                                options={SLIDER_EFFECTS}
                                onChange={(v) => {
                                    setAttributes({
                                        sliderOptions: {
                                            ...sliderOptions,
                                            effect: v,
                                        },
                                    });
                                }}
                            />

                            {/* { label: __('Cube', 'zoloblocks'), value: 'cube' },
                                { label: __('Coverflow', 'zoloblocks'), value: 'coverflow' },
                                { label: __('Flip', 'zoloblocks'), value: 'flip' },  */}

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
                        </ZoloPanelBody>

                        {navigation && (
                            <>
                                <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
                                    <SelectControl
                                        label={__('Positions', 'zoloblocks')}
                                        value={navPosition || 'bullets'}
                                        options={NAV_POSITIONS}
                                        onChange={(value) =>
                                            setAttributes({
                                                sliderOptions: {
                                                    ...sliderOptions,
                                                    navPosition: value,
                                                },
                                            })
                                        }
                                    />
                                    <CardDivider />
                                    <ToggleControl
                                        label={__('Custom Icons', 'zoloblocks')}
                                        checked={customNavIcon}
                                        onChange={() =>
                                            setAttributes({
                                                customNavIcon: !customNavIcon,
                                            })
                                        }
                                    />
                                    {customNavIcon && (
                                        <>
                                            <ZoloIconPicker
                                                label={__('Select Prev Icon', 'zoloblocks')}
                                                value={prevNavIcon}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        prevNavIcon: value,
                                                    });
                                                }}
                                            />
                                            <ZoloIconPicker
                                                label={__('Select Next Icon', 'zoloblocks')}
                                                value={nextNavIcon}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        nextNavIcon: value,
                                                    });
                                                }}
                                            />
                                        </>
                                    )}
                                </ZoloPanelBody>
                            </>
                        )}
                        {pagination && (
                            <>
                                <ZoloPanelBody title={__('Pagination', 'zoloblocks')} panelProps={props}>
                                    <SelectControl
                                        label={__('Type', 'zoloblocks')}
                                        value={paginationType || 'bullets'}
                                        options={PAGINATION_TYPES}
                                        onChange={(value) =>
                                            setAttributes({
                                                sliderOptions: {
                                                    ...sliderOptions,
                                                    paginationType: value,
                                                },
                                            })
                                        }
                                    />
                                    {paginationType !== 'progressbar' && (
                                        <SelectControl
                                            label={__('Positions', 'zoloblocks')}
                                            value={pagiPosition || 'center-center'}
                                            options={PAGI_POSITIONS}
                                            onChange={(value) =>
                                                setAttributes({
                                                    sliderOptions: {
                                                        ...sliderOptions,
                                                        pagiPosition: value,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {paginationType === 'progressbar' && (
                                        <div className="zolo-flex-row-control-tab">
                                            <IconicBtnGroup
                                                label={__('Direction', 'zoloblocks')}
                                                value={progressDirection}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        sliderOptions: {
                                                            ...sliderOptions,
                                                            progressDirection: value,
                                                        },
                                                    })
                                                }
                                                options={PROGRESS_DIRECTIONS}
                                            />
                                        </div>
                                    )}
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Max Width', 'zoloblocks')}
                                controlName={CONTENT_WIDTH}
                                requiredProps={requiredProps}
                                min={1}
                                max={2000}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        {navigation && (
                            <ZoloPanelBody title={__('Navigation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={navColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        navColor: value,
                                                    })
                                                }
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={NAV_ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={1}
                                                max={100}
                                            />
                                            <CardDivider />
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={NAV_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={NAV_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={NAV_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={NAV_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <>
                                                        <ColorControl
                                                            label={__('Border Color', 'zoloblocks')}
                                                            color={navHoverBorderColor}
                                                            onChange={(color) => setAttributes({ navHoverBorderColor: color })}
                                                        />
                                                    </>
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={NAV_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={navHoverColor}
                                                onChange={(color) => setAttributes({ navHoverColor: color })}
                                            />
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={NAV_HOVER_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {pagination && (
                            <>
                                <ZoloPanelBody title={__('Pagination', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Normal', 'zoloblocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Active', 'zoloblocks'),
                                            },
                                        ]}
                                        normalComponents={
                                            <>
                                                {paginationType === 'fraction' && (
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={pagiFractionColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    pagiFractionColor: value,
                                                                })
                                                            }
                                                        />
                                                        <TypographyDropdown
                                                            label={__('Typography', 'zoloblocks')}
                                                            typoPrefixConstant={PAGI_FRACTIONS_TYPO}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <CardDivider />
                                                    </>
                                                )}

                                                {paginationType === 'bullets' && (
                                                    <>
                                                        <ResRangeControl
                                                            label={__('Width', 'zoloblocks')}
                                                            controlName={PAG_WIDTH}
                                                            requiredProps={requiredProps}
                                                            min={1}
                                                            max={100}
                                                        />
                                                        <ResRangeControl
                                                            label={__('Height', 'zoloblocks')}
                                                            controlName={PAG_HEIGHT}
                                                            requiredProps={requiredProps}
                                                            min={1}
                                                            max={100}
                                                        />
                                                        <CardDivider />
                                                        <NormalBGControl
                                                            label={__('Background', 'zoloblocks')}
                                                            controlName={PAG_BG}
                                                            requiredProps={requiredProps}
                                                            noMainBGImg={true}
                                                        />
                                                    </>
                                                )}
                                                {paginationType !== 'progressbar' && (
                                                    <ResDimensionsControl
                                                        label={__('Margin', 'zoloblocks')}
                                                        controlName={PAGI_MARGIN}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={false}
                                                    />
                                                )}

                                                {paginationType === 'bullets' && (
                                                    <>
                                                        <CardDivider />
                                                        <BorderControl
                                                            label={__('Border', 'zoloblocks')}
                                                            controlName={PAG_BORDER}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Border Radius', 'zoloblocks')}
                                                            controlName={PAG_BORDER_RADIUS}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={true}
                                                        />
                                                    </>
                                                )}
                                                {paginationType !== 'progressbar' && (
                                                    <>
                                                        <CardDivider />
                                                        <ResRangeControl
                                                            label={__('Space Between', 'zoloblocks')}
                                                            controlName={PAG_SPACING}
                                                            requiredProps={requiredProps}
                                                            min={0}
                                                            max={100}
                                                        />
                                                    </>
                                                )}

                                                {paginationType === 'progressbar' && (
                                                    <>
                                                        <ResRangeControl
                                                            label={__('Height', 'zoloblocks')}
                                                            controlName={PAG_HEIGHT}
                                                            requiredProps={requiredProps}
                                                            min={1}
                                                            max={100}
                                                        />
                                                        <NormalBGControl
                                                            label={__('Background', 'zoloblocks')}
                                                            controlName={PAG_BG}
                                                            requiredProps={requiredProps}
                                                            noMainBGImg={true}
                                                        />
                                                        <CardDivider />
                                                        <BorderControl
                                                            label={__('Border', 'zoloblocks')}
                                                            controlName={PAG_BORDER}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Border Radius', 'zoloblocks')}
                                                            controlName={PAG_BORDER_RADIUS}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={true}
                                                        />
                                                    </>
                                                )}
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                {paginationType === 'fraction' && (
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={pagiFractionCurrentColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    pagiFractionCurrentColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                                {paginationType === 'bullets' && (
                                                    <>
                                                        <ResRangeControl
                                                            label={__('Width', 'zoloblocks')}
                                                            controlName={APAG_WIDTH}
                                                            requiredProps={requiredProps}
                                                            min={1}
                                                            max={100}
                                                        />
                                                        <ResRangeControl
                                                            label={__('Height', 'zoloblocks')}
                                                            controlName={APAG_HEIGHT}
                                                            requiredProps={requiredProps}
                                                            min={1}
                                                            max={100}
                                                        />

                                                        <CardDivider />
                                                        <NormalBGControl
                                                            label={__('Background', 'zoloblocks')}
                                                            controlName={APAG_BG}
                                                            requiredProps={requiredProps}
                                                            noMainBGImg={true}
                                                        />
                                                        <CardDivider />
                                                        <BorderControl
                                                            label={__('Border', 'zoloblocks')}
                                                            controlName={APAG_BORDER}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Border Radius', 'zoloblocks')}
                                                            controlName={APAG_BORDER_RADIUS}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={true}
                                                        />
                                                    </>
                                                )}

                                                {paginationType === 'progressbar' && (
                                                    <NormalBGControl
                                                        label={__('Background', 'zoloblocks')}
                                                        controlName={APAG_BG}
                                                        requiredProps={requiredProps}
                                                        noMainBGImg={true}
                                                    />
                                                )}
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/slider"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
