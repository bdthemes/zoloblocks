import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl, CardDivider, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { RangeControl } from '@wordpress/components';

import {
    POSITION_OPTIONS,
    COLUMNS,
    COLUMNS_GAP,
    SLIDER_EFFECTS,
    //main image
    MAIN_IMG_BORDER,
    MAIN_IMG_BORDER_RADIUS,
    IMG_CONTENT_BG,
    IMG_CONTENT_BORDER,
    IMG_CONTENT_BORDER_RADIUS,
    IMG_CONTENT_PADDING,
    IMG_CONTENT_MARGIN,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_SPACE,

    //category
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,

    //Slider navigation
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_BTN_PADDING,
    NAV_BTN_MARGIN,
    NAV_OFFSET_HORIZONTAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_ICON_SIZE,
    NAV_BG,
    NAV_HOVER_BG,

    //thumbs
    THUMB_HEIGHT,
    THUMB_BORDER,
    THUMB_BORDER_RADIUS,
    LINE_HEIGHT,
    PLAY_BTN_SIZE,
    PLAY_BTN_ICON_SIZE,
    PLAY_BTN_BG,
    PLAY_BTN_BORDER,
    PLAY_BTN_BORDER_RADIUS,
    PLAY_BTN_HOVER_BG,
} from './constants';

import { TITLE_TYPOGRAPHY, EXCERPT_TYPOGRAPHY, META_TYPOGRAPHY, CAT_TYPOGRAPHY } from './constants/typoPrefixConstant';

import { HEADING, THUMBNAIL_SIZE } from '../../../src/global/constants';

const {
    ResDimensionsControl,
    QueryControl,
    ResRangeControl,
    RangeResetControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    ResCounterControl,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ResAlignmentControl,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        contentPosition,
        showTitle,
        showCategory,
        showExcerpt,
        showMeta,
        showAuthor,
        showDate,
        titleTag,
        excerptindicator,
        titleColor,
        titleHoverColor,
        excerptColor,
        catBgColor,
        catColor,
        catBgHoverColor,
        catHoverColor,
        categoryHoverBorderColor,
        //meta
        metaColor,
        metaHColor,
        metaSeparator,
        //slider settings
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        speed,
        carouselEffect,
        showNavigation,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        authorPrefix,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        //thumbs
        lineColor,
        playBtnIconColor,
        playBtnIconHoverColor,
        playBtnHoverBorderColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-video-slider"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Content Position', 'zoloblocks')}
                                value={contentPosition}
                                options={POSITION_OPTIONS}
                                onChange={(contentPosition) => setAttributes({ contentPosition })}
                            />
                            <div className="zolo-custom-heading">{__('show hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ToggleControl
                                label={__('Category', 'zoloblocks')}
                                checked={showCategory}
                                onChange={(showCategory) => setAttributes({ showCategory })}
                            />
                            <ToggleControl
                                label={__('Excerpt', 'zoloblocks')}
                                checked={showExcerpt}
                                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                            />
                            <ToggleControl
                                label={__('Meta', 'zoloblocks')}
                                checked={showMeta}
                                onChange={(showMeta) => setAttributes({ showMeta })}
                            />
                            {showMeta && (
                                <>
                                    <ToggleControl
                                        label={__('Author', 'zoloblocks')}
                                        checked={showAuthor}
                                        onChange={(showAuthor) => setAttributes({ showAuthor })}
                                    />
                                    <ToggleControl
                                        label={__('Date', 'zoloblocks')}
                                        checked={showDate}
                                        onChange={(showDate) => setAttributes({ showDate })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {(showTitle || showMeta || showExcerpt) && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                                {showTitle && (
                                    <>
                                        <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                            {__('Title', 'zoloblocks')}
                                        </div>
                                        <SelectControl
                                            label={__('Tag', 'zoloblocks')}
                                            value={titleTag}
                                            options={HEADING}
                                            onChange={(titleTag) => setAttributes({ titleTag })}
                                        />
                                        <RangeResetControl
                                            label={__('Words', 'zoloblocks')}
                                            controlName={'titleWords'}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                )}
                                {showExcerpt && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Excerpt', 'zoloblocks')}</div>
                                        <RangeResetControl
                                            label={__(' Words', 'zoloblocks')}
                                            controlName={'excerptWords'}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />
                                        <TextControl
                                            label={__('Indicator', 'zoloblocks')}
                                            value={excerptindicator}
                                            onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                                        />
                                    </>
                                )}

                                {showMeta && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Meta', 'zoloblocks')}</div>
                                        <TextControl
                                            label={__('Separator', 'zoloblocks')}
                                            value={metaSeparator}
                                            onChange={(value) => setAttributes({ metaSeparator: value })}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Slider Settings', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Effect', 'zoloblocks')}
                                options={SLIDER_EFFECTS}
                                onChange={(effect) =>
                                    setAttributes({
                                        carouselEffect: effect,
                                    })
                                }
                                value={carouselEffect}
                            />
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
                                <>
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
                                </>
                            )}
                            <ToggleControl
                                label={__('Navigation', 'zoloblocks')}
                                checked={showNavigation}
                                onChange={(showNavigation) => setAttributes({ showNavigation })}
                            />
                            <div className="zolo-custom-heading">{__('Thumb Settings', 'zoloblocks')}</div>
                            <ResCounterControl
                                label={__('Column Number', 'zoloblocks')}
                                controlName={COLUMNS}
                                requiredProps={requiredProps}
                                min={2}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Column Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={true}
                            />
                        </ZoloPanelBody>
                        {showNavigation && (
                            <>
                                <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
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
                                                label={__('Prev Icon', 'zoloblocks')}
                                                value={prevNavIcon}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        prevNavIcon: value,
                                                    });
                                                }}
                                            />
                                            <ZoloIconPicker
                                                label={__('Next Icon', 'zoloblocks')}
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
                        <ZoloPanelBody title={__('Main Slider', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { value: 'normal', label: 'Image' },
                                    { value: 'hover', label: 'Content' },
                                ]}
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={MAIN_IMG_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={MAIN_IMG_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={IMG_CONTENT_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={IMG_CONTENT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={IMG_CONTENT_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={IMG_CONTENT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={IMG_CONTENT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={TITLE_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleHoverColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showCategory && (
                            <ZoloPanelBody title={__('Category', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={catColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catColor: value,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={CAT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={catBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catBgColor: value,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={CAT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={CAT_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={CAT_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={CAT_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Space Between', 'zoloblocks')}
                                                controlName={CAT_GAP}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={catHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={catBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catBgHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={categoryHoverBorderColor}
                                                onChange={(color) => setAttributes({ categoryHoverBorderColor: color })}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showExcerpt && (
                            <ZoloPanelBody title={__('Excerpt', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={excerptColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            excerptColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />

                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={EXCERPT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={metaColor}
                                                onChange={(metaColor) => setAttributes({ metaColor })}
                                            />

                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={META_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Space Between', 'zoloblocks')}
                                                controlName={META_SPACE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={metaHColor}
                                                onChange={(metaHColor) => setAttributes({ metaHColor })}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showNavigation && (
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
                                                controlName={NAV_BTN_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            {contentPosition !== 'zolo-center-center' && (
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={NAV_BTN_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                            )}
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
                                            {contentPosition === 'zolo-center-center' && (
                                                <ResRangeControl
                                                    label={__('Offset Horizontal', 'zoloblocks')}
                                                    controlName={NAV_OFFSET_HORIZONTAL}
                                                    requiredProps={requiredProps}
                                                    min={-100}
                                                    max={300}
                                                />
                                            )}
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

                        <ZoloPanelBody title={__('Thumbs', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { value: 'normal', label: 'Image' },
                                    { value: 'hover', label: 'Line' },
                                    { value: 'active', label: 'Play' },
                                ]}
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={THUMB_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={600}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={THUMB_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={THUMB_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={lineColor}
                                            onChange={(color) => setAttributes({ lineColor: color })}
                                        />
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={LINE_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={20}
                                            step={1}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={playBtnIconColor}
                                            onChange={(color) => setAttributes({ playBtnIconColor: color })}
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={PLAY_BTN_ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={50}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={PLAY_BTN_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={PLAY_BTN_SIZE}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PLAY_BTN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={PLAY_BTN_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={playBtnIconHoverColor}
                                            onChange={(color) => setAttributes({ playBtnIconHoverColor: color })}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={PLAY_BTN_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('BorderColor', 'zoloblocks')}
                                            color={playBtnHoverBorderColor}
                                            onChange={(color) => setAttributes({ playBtnHoverBorderColor: color })}
                                        />
                                    </>
                                }
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
                            block="zolo/post-video-slider"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
