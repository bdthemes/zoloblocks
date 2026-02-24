/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloRangeControl,
    ResRangeControl,
    HeaderTabs,
    ResCounterControl,
    AdvancedOptions,
    ResAlignmentControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    NormalBGControl,
    TabPanelControl,
    ZoloPanelBody,
    ResGapControl,
    ZoloIconPicker,
    SimpleRangeControl,
} = window.zoloModule;

import {
    PRESETS,
    CAROUSEL_COLUMNS,
    CAROUSEL_GAP,
    CAROUSEL_EFFECTS,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_ICON_SIZE,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_COLOR,
    NAV_HOVER_COLOR,
    PAG_SPACING,
    PAG_BOTTOM_SPACING,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
    NAV_HOVER_BORDER_COLOR,
    CONTENT_ALIGNMENT,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    CAROUSEL_CONTAINER_PADDING,
    REVIEWER_PHOTO_WIDTH,
    REVIEWER_PHOTO_HEIGHT,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_NAME_MARGIN,
    REVIEWER_DESIGNATION_MARGIN,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
    RCONTAINER_BORDER,
    RCONTAINER_BG,
    RCONTAINER_BRADIUS,
    RCONTAINER_BSHADOW,
    RCONTAINER_PADDING,
    SHADOW_RANGE,
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        resMode,
        showPhoto,
        addReviewerWebsiteLink,
        showName,
        showDesignation,
        showTestimonialMessage,
        showRating,
        nameColor,
        nameHoverColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        carouselEffect,
        coverFlowEffect,
        infiniteLoop,
        // autoplay,
        // autoplayDelay,
        // pauseOnMouseEnter,
        showNavigation,
        showPagination,
        // speed,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        navBg,
        navHoverBg,
        navWidth,
        presetFiveArrowColor,
        sliderOptions,
    } = attributes;


        const {
            speed = 800,
            loop = true,
            autoplay = true,
            autoplayDelay = 3000,
            pauseOnMouseEnter = true,
            effect = 'slide',
            coverflowEffect = { slideShadows: true },
            navigation = false,
        } = sliderOptions || {};

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    // coverflow effect options
    const onChangeRotate = (rotate) => {
        setAttributes({ coverFlowEffect: { ...coverFlowEffect, rotate } });
    };
    const onChangeStretch = (stretch) => {
        setAttributes({ coverFlowEffect: { ...coverFlowEffect, stretch } });
    };

    const onChangeDepth = (depth) => {
        setAttributes({ coverFlowEffect: { ...coverFlowEffect, depth } });
    };

    const onChangeModifier = (modifier) => {
        setAttributes({ coverFlowEffect: { ...coverFlowEffect, modifier } });
    };

    const onChangeSlideShadows = (slideShadows) => {
        //return true or false
        setAttributes({ coverFlowEffect: { ...coverFlowEffect, slideShadows } });
    };

    const shadowFeature = applyFilters('zolo.blocks.controls.reviewCarousel.shadow', [], props, 'zolo/review-carousel');

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/review-carousel"
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.reviewCarousel.presets', PRESETS)}
                                onChange={(selected) => setAttributes({ preset: selected })}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Add Reviewer Website Link', 'zoloblocks')}
                                checked={addReviewerWebsiteLink}
                                onChange={() =>
                                    setAttributes({
                                        addReviewerWebsiteLink: !addReviewerWebsiteLink,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Photo', 'zoloblocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Name', 'zoloblocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Designation', 'zoloblocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Message', 'zoloblocks')}
                                checked={showTestimonialMessage}
                                onChange={() =>
                                    setAttributes({
                                        showTestimonialMessage: !showTestimonialMessage,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Rating', 'zoloblocks')}
                                checked={showRating}
                                onChange={() =>
                                    setAttributes({
                                        showRating: !showRating,
                                    })
                                }
                            />

                            {/* pro controls goes here */}
                            {shadowFeature && shadowFeature.length > 0 && shadowFeature}
                            {attributes?.enableShadow && (
                                <ResRangeControl
                                    label={__('Shadow Range', 'zoloblocks')}
                                    controlName={SHADOW_RANGE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={1000}
                                    step={1}
                                    noUnits={true}
                                />
                            )}
                            <ZoloCardDivider />
                            <ResAlignmentControl
                                label={__('Content Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Carousel Options', 'zoloblocks')} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Select Effect', 'zoloblocks')}
                                options={CAROUSEL_EFFECTS}
                                onChange={(effect) =>
                                    setAttributes({
                                        sliderOptions: {
                                            ...sliderOptions,
                                            effect,
                                        },
                                    })
                                }
                                value={effect || 'slide'}
                            />
                            <ResCounterControl
                                label={__('Column Number', 'zoloblocks')}
                                controlName={CAROUSEL_COLUMNS}
                                requiredProps={requiredProps}
                                min={2}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Column Gap', 'zoloblocks')}
                                controlName={CAROUSEL_GAP}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={true}
                            />
                            <ZoloCardDivider />
                            <ZoloRangeControl
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
                                min={1}
                                max={100}
                                help={__('Speed:', 'zoloblocks') + speed * 100 + 'ms'}
                            />
                            {effect === 'coverflow' && (
                                <>
                                    <ZoloToggleControl
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
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
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
                            <ZoloToggleControl
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
                                    <ZoloRangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Autoplay Delay (ms)', 'zoloblocks')}
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
                                        max={10000}
                                        help={__('Autoplay Dealy:', 'zoloblocks') + autoplayDelay + 'ms'}
                                    />
                                    <ZoloToggleControl
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
                            <ZoloToggleControl
                                label={__('Show Navigation', 'zoloblocks')}
                                checked={(showNavigation !== undefined ? showNavigation : navigation) !== false}
                                onChange={() => {
                                    const isOn = (showNavigation !== undefined ? showNavigation : navigation) !== false;
                                    const next = !isOn;
                                    setAttributes({
                                        showNavigation: next,
                                        sliderOptions: {
                                            ...sliderOptions,
                                            navigation: next,
                                        },
                                    });
                                }}
                            />
                            <ZoloToggleControl
                                label={__('Pagination', 'zoloblocks')}
                                checked={showPagination !== false}
                                onChange={() =>
                                    setAttributes({
                                        showPagination: showPagination === false,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        {(showNavigation !== undefined ? showNavigation : navigation) && (
                            <>
                                <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
                                    <ZoloToggleControl
                                        label={__('Custom Navigation Icons', 'zoloblocks')}
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
                                                label={__('Previous', 'zoloblocks')}
                                                value={prevNavIcon}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        prevNavIcon: value,
                                                    });
                                                }}
                                            />
                                            <ZoloIconPicker
                                                label={__('Next', 'zoloblocks')}
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
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

                            <div className="zolo-custom-heading">{__('Carousel Container', 'zoloblocks')}</div>

                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CAROUSEL_CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>

                        {showPhoto && (
                            <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_WIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <ZoloCardDivider />

                                <NormalBGControl requiredProps={requiredProps} controlName={REVIEWER_PHOTO_BG} noMainBGImg={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl
                                    controlName={REVIEWER_PHOTO_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={REVIEWER_PHOTO_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ZoloCardDivider />
                                {cssFilters && cssFilters.length > 0 && cssFilters}
                            </ZoloPanelBody>
                        )}
                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={nameColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            nameColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {addReviewerWebsiteLink && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={nameHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    nameHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={64}
                                />
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {preset === 'style-4' && (
                            <ZoloPanelBody title={__('Message Container', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Arrow Color', 'zoloblocks')}
                                    color={presetFiveArrowColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            presetFiveArrowColor: color,
                                        })
                                    }
                                />
                                <ZoloCardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={RCONTAINER_BG} noMainBGImg={false} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RCONTAINER_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={RCONTAINER_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl controlName={RCONTAINER_BSHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RCONTAINER_BRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        {showTestimonialMessage && (
                            <ZoloPanelBody title={__('Message', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={testimonialMessageColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            testimonialMessageColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={REVIEWER_MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={REVIEWER_TESTIMONIAL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showRating && (
                            <ZoloPanelBody title={__('Rating', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl label={__('Size', 'zoloblocks')} controlName={ICONS_SIZE} requiredProps={requiredProps} />
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Active', 'zoloblocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Inactive', 'zoloblocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={activeRatingColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        activeRatingColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={inactiveRatingColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        inactiveRatingColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {(showNavigation !== undefined ? showNavigation : navigation) && (
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
                                            <ZoloCardDivider />
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={NAV_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
                                            <ResRangeControl
                                                label={__('Width', 'zoloblocks')}
                                                controlName={NAV_WIDTH}
                                                requiredProps={requiredProps}
                                                min={1}
                                                max={100}
                                            />
                                            <ResRangeControl
                                                label={__('Height', 'zoloblocks')}
                                                controlName={NAV_HEIGHT}
                                                requiredProps={requiredProps}
                                                min={1}
                                                max={100}
                                                units={[
                                                    { label: 'px', value: 'px' },
                                                    { label: '%', value: '%' },
                                                    { label: 'em', value: 'em' },
                                                    { label: 'vh', value: 'vh' },
                                                ]}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={NAV_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={NAV_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />

                                            <ZoloCardDivider />
                                            <ResRangeControl
                                                label={__('Offset Horizontal', 'zoloblocks')}
                                                controlName={NAV_OFFSET_HORIZONTAL}
                                                requiredProps={requiredProps}
                                                min={-100}
                                                max={300}
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
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={navHoverBorderColor}
                                                onChange={(color) => setAttributes({ navHoverBorderColor: color })}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showPagination !== false && (
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
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={PAG_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
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
                                            <ZoloCardDivider />
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

                                            <ZoloCardDivider />
                                            <ResRangeControl
                                                label={__('Space Between', 'zoloblocks')}
                                                controlName={PAG_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                            />
                                            <ResRangeControl
                                                label={__('Vertical Offset', 'zoloblocks')}
                                                controlName={PAG_BOTTOM_SPACING}
                                                requiredProps={requiredProps}
                                                min={-200}
                                                max={200}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <NormalBGControl
                                                label={__('Background', 'zoloblocks')}
                                                controlName={APAG_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
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
                                            <ZoloCardDivider />
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
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/review-carousel"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
