/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
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
} from './constants';

import { REVIEWER_NAME_TYPOGRAPHY, REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';

const {
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

} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
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
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        showNavigation,
        showPagination,
        speed,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        navBg,
        navHoverBg,
        navWidth,
    } = attributes;

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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => setAttributes({ preset: selected })}
                            />
                            <ToggleControl
                                label={__('Add Reviewer Website Link', 'zolo-blocks')}
                                checked={addReviewerWebsiteLink}
                                onChange={() =>
                                    setAttributes({
                                        addReviewerWebsiteLink: !addReviewerWebsiteLink,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Photo', 'zolo-blocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Name', 'zolo-blocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Designation', 'zolo-blocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Testimonial Message', 'zolo-blocks')}
                                checked={showTestimonialMessage}
                                onChange={() =>
                                    setAttributes({
                                        showTestimonialMessage: !showTestimonialMessage,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Rating', 'zolo-blocks')}
                                checked={showRating}
                                onChange={() =>
                                    setAttributes({
                                        showRating: !showRating,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Carousel Options', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Select Effect', 'zolo-blocks')}
                                options={CAROUSEL_EFFECTS}
                                onChange={(effect) =>
                                    setAttributes({
                                        carouselEffect: effect,
                                    })
                                }
                                value={carouselEffect}
                            />
                            <ResCounterControl
                                label={__('Column Number', 'zolo-blocks')}
                                controlName={CAROUSEL_COLUMNS}
                                requiredProps={requiredProps}
                                min={2}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Column Gap', 'zolo-blocks')}
                                controlName={CAROUSEL_GAP}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={true}
                            />
                            <RangeControl
                                label={__('Speed', 'zolo-blocks')}
                                value={speed}
                                onChange={(v) =>
                                    setAttributes({
                                        speed: v,
                                    })
                                }
                                min={1}
                                max={100}
                                help={__('Speed: ', 'zolo-blocks') + speed * 100 + 'ms'}
                            />
                            {carouselEffect === 'coverflow' && (
                                <>
                                    <RangeControl
                                        label={__('Rotate', 'zolo-blocks')}
                                        value={coverFlowEffect.rotate}
                                        onChange={onChangeRotate}
                                        min={0}
                                        max={360}
                                    />
                                    <RangeControl
                                        label={__('Stretch', 'zolo-blocks')}
                                        value={coverFlowEffect.stretch}
                                        onChange={onChangeStretch}
                                    />
                                    <RangeControl
                                        label={__('Depth', 'zolo-blocks')}
                                        value={coverFlowEffect.depth}
                                        onChange={onChangeDepth}
                                        min={0}
                                        max={1000}
                                    />
                                    <RangeControl
                                        label={__('Modifier', 'zolo-blocks')}
                                        value={coverFlowEffect.modifier}
                                        onChange={onChangeModifier}
                                        min={0}
                                        max={10}
                                    />
                                    <ToggleControl
                                        label={__('Shadow', 'zolo-blocks')}
                                        checked={coverFlowEffect.slideShadows}
                                        onChange={onChangeSlideShadows}
                                    />
                                </>
                            )}
                            <ToggleControl
                                label={__('Infinite Loop', 'zolo-blocks')}
                                checked={infiniteLoop}
                                onChange={() =>
                                    setAttributes({
                                        infiniteLoop: !infiniteLoop,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Autoplay', 'zolo-blocks')}
                                checked={autoplay}
                                onChange={() =>
                                    setAttributes({
                                        autoplay: !autoplay,
                                    })
                                }
                            />
                            {autoplay && (
                                <Fragment>
                                    <RangeControl
                                        label={__('Autoplay Delay', 'zolo-blocks')}
                                        value={autoplayDelay}
                                        onChange={(v) =>
                                            setAttributes({
                                                autoplayDelay: v,
                                            })
                                        }
                                        min={1}
                                        max={100}
                                        help={__('Autoplay Dealy: ', 'zolo-blocks') + autoplayDelay * 100 + 'ms'}
                                    />
                                    <ToggleControl
                                        label={__('Pause on Mouse Enter', 'zolo-blocks')}
                                        checked={pauseOnMouseEnter}
                                        onChange={() =>
                                            setAttributes({
                                                pauseOnMouseEnter: !pauseOnMouseEnter,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            <ToggleControl
                                label={__('Show Navigation', 'zolo-blocks')}
                                checked={showNavigation}
                                onChange={() =>
                                    setAttributes({
                                        showNavigation: !showNavigation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Pagination', 'zolo-blocks')}
                                checked={showPagination}
                                onChange={() =>
                                    setAttributes({
                                        showPagination: !showPagination,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        {showNavigation && (
                            <>
                                <ZoloPanelBody title={__('Navigation', 'zolo-blocks')} panelProps={props}>
                                    <ToggleControl
                                        label={__('Custom Navigation Icons', 'zolo-blocks')}
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
                                                label={__('Select Prev Icon', 'zolo-blocks')}
                                                value={prevNavIcon}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        prevNavIcon: value,
                                                    });
                                                }}
                                            />
                                            <ZoloIconPicker
                                                label={__('Select Next Icon', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <ResAlignmentControl
                                label={__('Content Alignmet', 'zolo-blocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                        </ZoloPanelBody>

                        {showPhoto && (
                            <ZoloPanelBody title={__('Photo', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_WIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={1000}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <BoxShadowControl
                                    controlName={REVIEWER_PHOTO_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={REVIEWER_PHOTO_BG} noMainBGImg={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_PHOTO_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}
                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!addReviewerWebsiteLink && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={nameColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                nameColor: color,
                                            })
                                        }
                                    />
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_NAME_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {addReviewerWebsiteLink && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={nameColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            nameColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={nameHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            nameHoverColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={64}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showTestimonialMessage && (
                            <ZoloPanelBody title={__('Review Text', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={REVIEWER_MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={testimonialMessageColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            testimonialMessageColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={REVIEWER_TESTIMONIAL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showRating && (
                            <ZoloPanelBody title={__('Rating', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={ICONS_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Active', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Inactive', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Active Star Color', 'zolo-blocks')}
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
                                                label={__('Inactive Star Color', 'zolo-blocks')}
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

                        {showNavigation && (
                            <ZoloPanelBody title={__('Navigation', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zolo-blocks')}
                                    controlName={NAV_WIDTH}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
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
                                <ResRangeControl
                                    label={__('Offset Horizontal', 'zolo-blocks')}
                                    controlName={NAV_OFFSET_HORIZONTAL}
                                    requiredProps={requiredProps}
                                    min={-100}
                                    max={300}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={NAV_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={navHoverBorderColor}
                                                onChange={(color) => setAttributes({ navHoverBorderColor: color })}
                                            />
                                        </Fragment>
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={NAV_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={NAV_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={navColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        navColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                label={__('Background', 'zolo-blocks')}
                                                controlName={NAV_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
                                        </Fragment>
                                    }
                                    hoverComponents={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={navHoverColor}
                                                onChange={(color) => setAttributes({ navHoverColor: color })}
                                            />
                                            <NormalBGControl
                                                label={__('Background', 'zolo-blocks')}
                                                controlName={NAV_HOVER_BG}
                                                requiredProps={requiredProps}
                                                noMainBGImg={true}
                                            />
                                        </Fragment>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showPagination && (
                            <Fragment>
                                <ZoloPanelBody title={__('Pagination', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <ResRangeControl
                                        label={__('Space Between', 'zolo-blocks')}
                                        controlName={PAG_SPACING}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />
                                    <ResRangeControl
                                        label={__('Bottom Spacing', 'zolo-blocks')}
                                        controlName={PAG_BOTTOM_SPACING}
                                        requiredProps={requiredProps}
                                        min={-100}
                                        max={100}
                                    />
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Normal', 'zolo-blocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Active', 'zolo-blocks'),
                                            },
                                        ]}
                                        normalComponents={
                                            <Fragment>
                                                <ResRangeControl
                                                    label={__('Width', 'zolo-blocks')}
                                                    controlName={PAG_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                />
                                                <ResRangeControl
                                                    label={__('Height', 'zolo-blocks')}
                                                    controlName={PAG_HEIGHT}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                />
                                                <BorderControl
                                                    label={__('Border', 'zolo-blocks')}
                                                    controlName={PAG_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zolo-blocks')}
                                                    controlName={PAG_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                                <NormalBGControl
                                                    label={__('Background', 'zolo-blocks')}
                                                    controlName={PAG_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />
                                            </Fragment>
                                        }
                                        hoverComponents={
                                            <Fragment>
                                                <ResRangeControl
                                                    label={__('Width', 'zolo-blocks')}
                                                    controlName={APAG_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                />
                                                <ResRangeControl
                                                    label={__('Height', 'zolo-blocks')}
                                                    controlName={APAG_HEIGHT}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                />
                                                <BorderControl
                                                    label={__('Border', 'zolo-blocks')}
                                                    controlName={APAG_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zolo-blocks')}
                                                    controlName={APAG_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                                <NormalBGControl
                                                    label={__('Background', 'zolo-blocks')}
                                                    controlName={APAG_BG}
                                                    requiredProps={requiredProps}
                                                    noMainBGImg={true}
                                                />
                                            </Fragment>
                                        }
                                    />
                                </ZoloPanelBody>
                            </Fragment>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
