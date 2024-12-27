/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl, CardDivider } from '@wordpress/components';
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

    // brand grid
    LINK_TYPES,
    LINK_TYPES_BASIC,
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    TITLE_TEXT_STROKE,
    TITLE_MARGIN,
    LINK_TEXT_STROKE,
    LINK_MARGIN,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS, FLEX_HORIZONTAL_OPTIONS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

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
    ZoloIconPicker,
    IconicBtnGroup,
    TextStrokeControl,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        resMode,
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

        // brand carousel
        brandNameVisible,
        brandLabelVisible,
        enableLogoLink,
        logoLinkType,
        nameColor,
        nameHoverColor,
        labelColor,
        labelHoverColor,
        contentHorizontalPosition,
        contentVerticalPosition,
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

    const shadowFeature = applyFilters('zolo.blocks.controls.brandCarousel.shadow', [], props, 'zolo/brand-carousel');

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/brand-carousel"
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.brandGrid.presets', PRESETS)}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <div className="zolo-custom-heading">{__('show hide elements', 'zoloblocks')}</div>
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <ToggleControl
                                        label={__('Brand Name', 'zoloblocks')}
                                        checked={brandNameVisible}
                                        onChange={() => setAttributes({ brandNameVisible: !brandNameVisible })}
                                    />
                                    <ToggleControl
                                        label={__('Brand Label', 'zoloblocks')}
                                        checked={brandLabelVisible}
                                        onChange={() => setAttributes({ brandLabelVisible: !brandLabelVisible })}
                                    />
                                </>
                            )}
                            <ToggleControl
                                label={__('Enable Logo Link', 'zoloblocks')}
                                checked={enableLogoLink}
                                onChange={() => setAttributes({ enableLogoLink: !enableLogoLink })}
                            />
                            {enableLogoLink && preset !== 'zb-brand-basic-style' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Link', 'zoloblocks')}
                                        value={logoLinkType}
                                        onChange={(value) =>
                                            setAttributes({
                                                logoLinkType: value,
                                            })
                                        }
                                        options={LINK_TYPES}
                                    />
                                </div>
                            )}

                            {enableLogoLink && preset === 'zb-brand-basic-style' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Link', 'zoloblocks')}
                                        value={logoLinkType}
                                        onChange={(value) =>
                                            setAttributes({
                                                logoLinkType: value,
                                            })
                                        }
                                        options={LINK_TYPES_BASIC}
                                    />
                                </div>
                            )}
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Content Alignment', 'zoloblocks')}</div>
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={CONTENT_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Horizontal', 'zoloblocks')}
                                            value={contentHorizontalPosition}
                                            onChange={(value) => setAttributes({ contentHorizontalPosition: value })}
                                            options={FLEX_HORIZONTAL_OPTIONS}
                                        />
                                    </div>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Vertical', 'zoloblocks')}
                                            value={contentVerticalPosition}
                                            onChange={(value) => setAttributes({ contentVerticalPosition: value })}
                                            options={FLEX_ALIGN_OPTIONS}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Carousel Options', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Select Effect', 'zoloblocks')}
                                options={CAROUSEL_EFFECTS}
                                onChange={(effect) =>
                                    setAttributes({
                                        carouselEffect: effect,
                                    })
                                }
                                value={carouselEffect}
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
                            <CardDivider />
                            <RangeControl
                                className="zolo-flex-col-control"
                                label={__('Speed', 'zoloblocks')}
                                value={speed}
                                onChange={(v) =>
                                    setAttributes({
                                        speed: v,
                                    })
                                }
                                min={1}
                                max={100}
                                help={__('Speed:', 'zoloblocks') + speed * 100 + 'ms'}
                            />
                            {carouselEffect === 'coverflow' && (
                                <>
                                    <CardDivider />
                                    <RangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Rotate', 'zoloblocks')}
                                        value={coverFlowEffect.rotate}
                                        onChange={onChangeRotate}
                                        min={0}
                                        max={360}
                                    />
                                    <RangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Stretch', 'zoloblocks')}
                                        value={coverFlowEffect.stretch}
                                        onChange={onChangeStretch}
                                    />
                                    <RangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Depth', 'zoloblocks')}
                                        value={coverFlowEffect.depth}
                                        onChange={onChangeDepth}
                                        min={0}
                                        max={1000}
                                    />
                                    <RangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Modifier', 'zoloblocks')}
                                        value={coverFlowEffect.modifier}
                                        onChange={onChangeModifier}
                                        min={0}
                                        max={10}
                                    />
                                    <ToggleControl
                                        label={__('Shadow', 'zoloblocks')}
                                        checked={coverFlowEffect.slideShadows}
                                        onChange={onChangeSlideShadows}
                                    />
                                </>
                            )}
                            <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Infinite Loop', 'zoloblocks')}
                                checked={infiniteLoop}
                                onChange={() =>
                                    setAttributes({
                                        infiniteLoop: !infiniteLoop,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Autoplay', 'zoloblocks')}
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
                                        className="zolo-flex-col-control"
                                        label={__('Autoplay Delay', 'zoloblocks')}
                                        value={autoplayDelay}
                                        onChange={(v) =>
                                            setAttributes({
                                                autoplayDelay: v,
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
                                                pauseOnMouseEnter: !pauseOnMouseEnter,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            <ToggleControl
                                label={__('Navigation', 'zoloblocks')}
                                checked={showNavigation}
                                onChange={() =>
                                    setAttributes({
                                        showNavigation: !showNavigation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Pagination', 'zoloblocks')}
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
                                <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
                                    <ToggleControl
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
                        <ZoloPanelBody title={__('Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                            min={0}
                                            max={100}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={CONTAINER_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_H_BG} noMainBGImg={false} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    {/* <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} /> */}
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CONTENT_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                        min={0}
                                        max={200}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={IMAGE_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <CardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={BRAND_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <CardDivider />
                                    {cssFilters && cssFilters.length > 0 && cssFilters}
                                </>
                            )}
                            {preset === 'zb-brand-basic-style' && (
                                <>
                                    {cssFilters && cssFilters.length > 0 && (
                                        <>
                                            <TabPanelControl
                                                options={[
                                                    {
                                                        value: 'normal',
                                                        label: __('Normal', 'zoloblocks'),
                                                    },
                                                    {
                                                        value: 'hover',
                                                        label: __('Hover', 'zoloblocks'),
                                                    },
                                                ]}
                                                normalComponents={<>{cssFilters}</>}
                                                hoverComponents={<>{cssFiltersHover}</>}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                {brandNameVisible && (
                                    <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__title') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={nameColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        nameColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TextStrokeControl
                                            controlName={TITLE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__title' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={nameColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    nameColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={nameHoverColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    nameHoverColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                                {brandLabelVisible && (
                                    <ZoloPanelBody title={__('Label', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__label') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={labelColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        labelColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={LINK_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <TextStrokeControl
                                            controlName={LINK_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={LINK_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__label' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={labelColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    labelColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={labelHoverColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    labelHoverColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}

                        {showNavigation && (
                            <ZoloPanelBody title={__('Navigation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <Fragment>
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
                                            <CardDivider />
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

                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Offset Horizontal', 'zoloblocks')}
                                                controlName={NAV_OFFSET_HORIZONTAL}
                                                requiredProps={requiredProps}
                                                min={-100}
                                                max={300}
                                            />
                                        </Fragment>
                                    }
                                    hoverComponents={
                                        <Fragment>
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
                                        </Fragment>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showPagination && (
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
                                        <Fragment>
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

                                            <CardDivider />
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
                                        </Fragment>
                                    }
                                    hoverComponents={
                                        <Fragment>
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
                                        </Fragment>
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
                            block="zolo/brand-carousel"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
