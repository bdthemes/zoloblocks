/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, ToggleControl, SelectControl, BaseControl } = wp.components;
const { Fragment } = wp.element;

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
    IconicBtnGroup,
    ResCounterControl,
    AdvancedOptions,
} = window.zoloModule;

import { IconPicker } from 'wordpress-icon-picker';
// objAttributes
import objAttributes from './attributes';

/**
 * Constants
 */
import {
    SLIDER_EFFECTS,
    CAROUSEL_EFFECTS,
    COLUMNS,
    SLIDER_HEIGHT,
    COLUMNS_GAP,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    NAV_WIDTH,
    NAV_HEIGHT,
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
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resMode,
        sliderType,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        navColor,
        navHoverColor,
        showPagination,
        speed,
        carouselEffect,
        sliderEffect,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls>
            <HeaderTabs
                generalTab={
                    <Fragment>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <IconicBtnGroup
                                label={__('Slider Type', 'zolo-blocks')}
                                value={sliderType}
                                onChange={(type) => setAttributes({ sliderType: type })}
                                options={[
                                    { label: __('Slider', 'zolo-blocks'), value: 'slider' },
                                    { label: __('Carousel', 'zolo-blocks'), value: 'carousel' },
                                ]}
                            />
                        </PanelBody>
                        <PanelBody title={__('Slider Container', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Slider Height', 'zolo-blocks')}
                                controlName={SLIDER_HEIGHT}
                                requiredProps={requiredProps}
                                min={1}
                                max={1000}
                            />
                        </PanelBody>
                        <PanelBody title={__('Slider Content', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Content Max Width', 'zolo-blocks')}
                                controlName={CONTENT_WIDTH}
                                requiredProps={requiredProps}
                                min={1}
                                max={2000}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Slider Options', 'zolo-blocks')} initialOpen={false}>
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
                        </PanelBody>
                        {sliderType === 'carousel' && (
                            <PanelBody title={__('Carousel Options', 'zolo-blocks')} initialOpen={false}>
                                <ResCounterControl
                                    label={__('Column Number', 'zolo-blocks')}
                                    controlName={COLUMNS}
                                    requiredProps={requiredProps}
                                    min={2}
                                    max={5}
                                />
                                <ResRangeControl
                                    label={__('Column Gap', 'zolo-blocks')}
                                    controlName={COLUMNS_GAP}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                    noUnits={true}
                                />
                            </PanelBody>
                        )}
                        {sliderType === 'slider' && (
                            <PanelBody title={__('Slider Effects', 'zolo-blocks')} initialOpen={false}>
                                <SelectControl
                                    label={__('Select Effect', 'zolo-blocks')}
                                    value={sliderEffect}
                                    options={SLIDER_EFFECTS}
                                    onChange={(v) => {
                                        setAttributes({
                                            sliderEffect: v,
                                        });
                                    }}
                                />
                            </PanelBody>
                        )}
                        {sliderType === 'carousel' && (
                            <PanelBody title={__('Carousel Effects', 'zolo-blocks')} initialOpen={false}>
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
                            </PanelBody>
                        )}
                        {showNavigation && (
                            <>
                                <PanelBody title={__('Navigation', 'zolo-blocks')} initialOpen={false}>
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
                                            <BaseControl label={__('Select Prev Icon', 'zolo-blocks')}>
                                                <IconPicker
                                                    value={prevNavIcon}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            prevNavIcon: value,
                                                        });
                                                    }}
                                                    showHeading={false}
                                                    disableDashicon={true}
                                                />
                                            </BaseControl>
                                            <BaseControl label={__('Select Next Icon', 'zolo-blocks')}>
                                                <IconPicker
                                                    value={nextNavIcon}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            nextNavIcon: value,
                                                        });
                                                    }}
                                                    showHeading={false}
                                                    disableDashicon={true}
                                                />
                                            </BaseControl>
                                        </>
                                    )}
                                </PanelBody>
                            </>
                        )}
                    </Fragment>
                }
                styleTab={
                    <Fragment>
                        {showNavigation && (
                            <PanelBody title={__('Navigation', 'zolo-blocks')} initialOpen={true}>
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
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={NAV_BORDER} requiredProps={requiredProps} />
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
                            </PanelBody>
                        )}
                        {showPagination && (
                            <Fragment>
                                <PanelBody title={__('Pagination', 'zolo-blocks')} initialOpen={false}>
                                    <ResRangeControl
                                        label={__('Space Between', 'zolo-blocks')}
                                        controlName={PAG_SPACING}
                                        requiredProps={requiredProps}
                                        min={0}
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
                                </PanelBody>
                            </Fragment>
                        )}
                    </Fragment>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
