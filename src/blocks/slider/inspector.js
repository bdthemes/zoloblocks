/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { RangeControl, ToggleControl, SelectControl, CardDivider } = wp.components;
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
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        showPagination,
        paginationType,
        speed,
        sliderEffect,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        navPosition,
        pagiPosition,
        progressDirection,
        pagiFractionColor,
        pagiFractionCurrentColor,
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
                block="zolo/slider"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <Fragment>
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
                                        speed: v,
                                    })
                                }
                                min={1}
                                max={100}
                                help={__('Default Speed:', 'zoloblocks') + 8 * 100 + 'ms'}
                            />
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
                                label={__('Show Navigation', 'zoloblocks')}
                                checked={showNavigation === undefined ? true : showNavigation}
                                onChange={(v) =>
                                    setAttributes({
                                        showNavigation: v,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Pagination', 'zoloblocks')}
                                checked={showPagination}
                                onChange={() =>
                                    setAttributes({
                                        showPagination: !showPagination,
                                    })
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Effects', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Select Effect', 'zoloblocks')}
                                value={sliderEffect}
                                options={SLIDER_EFFECTS}
                                onChange={(v) => {
                                    setAttributes({
                                        sliderEffect: v,
                                    });
                                }}
                            />
                        </ZoloPanelBody>

                        {(showNavigation || showNavigation === undefined) && (
                            <>
                                <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
                                    <SelectControl
                                        label={__('Positions', 'zoloblocks')}
                                        value={navPosition || 'bullets'}
                                        options={NAV_POSITIONS}
                                        onChange={(value) =>
                                            setAttributes({
                                                navPosition: value,
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
                        {showPagination && (
                            <>
                                <ZoloPanelBody title={__('Pagination', 'zoloblocks')} panelProps={props}>
                                    <SelectControl
                                        label={__('Type', 'zoloblocks')}
                                        value={paginationType || 'bullets'}
                                        options={PAGINATION_TYPES}
                                        onChange={(value) =>
                                            setAttributes({
                                                paginationType: value,
                                            })
                                        }
                                    />
                                    {paginationType !== 'progressbar' && (
                                        <SelectControl
                                            label={__('Positions', 'zoloblocks')}
                                            value={pagiPosition || 'bullets'}
                                            options={PAGI_POSITIONS}
                                            onChange={(value) =>
                                                setAttributes({
                                                    pagiPosition: value,
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
                                                        progressDirection: value,
                                                    })
                                                }
                                                options={PROGRESS_DIRECTIONS}
                                            />
                                        </div>
                                    )}
                                </ZoloPanelBody>
                            </>
                        )}
                    </Fragment>
                }
                styleTab={
                    <Fragment>
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
                                                hoverControl={
                                                    <Fragment>
                                                        <ColorControl
                                                            label={__('Border Color', 'zoloblocks')}
                                                            color={navHoverBorderColor}
                                                            onChange={(color) => setAttributes({ navHoverBorderColor: color })}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={NAV_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
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
                                        </Fragment>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showPagination && (
                            <Fragment>
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
                                                    </>
                                                )}

                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={PAGI_MARGIN}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
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

                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Space Between', 'zoloblocks')}
                                                    controlName={PAG_SPACING}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                />
                                                {/* <ResRangeControl
                                                    label={__('Vertical Offset', 'zoloblocks')}
                                                    controlName={PAG_VERTICAL_OFFSET}
                                                    requiredProps={requiredProps}
                                                    min={-100}
                                                    max={100}
                                                /> */}
                                            </Fragment>
                                        }
                                        hoverComponents={
                                            <Fragment>
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
                                                    </>
                                                )}
                                            </Fragment>
                                        }
                                    />
                                </ZoloPanelBody>
                            </Fragment>
                        )}
                    </Fragment>
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
