import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, CardDivider, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

import { TextControl } from '../../components/Core';

import {
    PRESETS,
    POST_TITLE_ANIMATION,
    COLUMNS,
    COLUMNS_GAP,
    CAROUSEL_EFFECTS,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    CONTENT_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    THUMBNAIL_BORDER,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BG,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_MARGIN,
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    READMORE_GAP,
    READMORE_BORDER,
    READMORE_BORDER_RADIUS,
    READMORE_MARGIN,
    READMORE_PADDING,
    AVATAR_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_GAP,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    META_SPACE,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_ICON_SIZE,
    NAV_BG,
    NAV_HOVER_BG,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_SPACING,
    PAG_BOTTOM_SPACING,
    PAG_BG,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BG,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    META_BOX_WRAP_PADDING,
    META_ARROW_SPACE,
    CAROUSEL_CONTAINER_PADDING,
    SHADOW_RANGE,
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    READMORE_TYPOGRAPHY,
    NAME_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { HEADING, THUMBNAIL_SIZE } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

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
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        postTitleAnimation,
        titleAnimationTypeBgColor,
        resMode,
        postQuery,
        showThumbnail,
        showTitle,
        titleTag,
        showExcerpt,
        excerptindicator,
        showReadMore,
        readMoreBtnText,
        showCategory,
        showAuthor,
        showMeta,
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        metaHColor,
        metaArrowColor,
        catBgColor,
        catColor,
        catBgHoverColor,
        catHoverColor,
        showReadmoreText,
        showReadmoreIcon,
        readMoreIcon,
        readMoreBgColor,
        readMoreColor,
        readMoreIconColor,
        readMoreBgHoverColor,
        readMoreHoverColor,
        readMoreIconHoverColor,
        namePrefixColor,
        nameColor,
        nameHoverColor,
        metaSeparator,
        showReadingTime,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        showPagination,
        speed,
        carouselEffect,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        coverFlowEffect,
        authorPrefix,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const shadowFeature = applyFilters('zolo.blocks.controls.postCarousel.shadow', [], props, 'zolo/post-carousel');

    // const { rotate, stretch, depth, modifier, slideShadows } = coverFlowEffect;

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

    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'style-1':
                setAttributes({
                    showExcerpt: false,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            case 'style-2':
                setAttributes({
                    showExcerpt: false,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            case 'style-3':
                setAttributes({
                    showExcerpt: false,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            case 'style-4':
                setAttributes({
                    showExcerpt: true,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            default:
                break;
        }
    };

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-carousel"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.postCarousel.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                                __nextHasNoMarginBottom={true}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />

                            <ToggleControl
                                label={__('Excerpt', 'zoloblocks')}
                                checked={showExcerpt}
                                onChange={() => setAttributes({ showExcerpt: !showExcerpt })}
                            />

                            <ToggleControl
                                label={__('Read More Button', 'zoloblocks')}
                                checked={showReadMore}
                                onChange={() => setAttributes({ showReadMore: !showReadMore })}
                            />

                            <ToggleControl
                                label={__('Category', 'zoloblocks')}
                                checked={showCategory}
                                onChange={() => setAttributes({ showCategory: !showCategory })}
                            />
                            <ToggleControl
                                label={__('Author', 'zoloblocks')}
                                checked={showAuthor}
                                onChange={() => setAttributes({ showAuthor: !showAuthor })}
                            />
                            <ToggleControl
                                label={__('Meta', 'zoloblocks')}
                                checked={showMeta}
                                onChange={() => setAttributes({ showMeta: !showMeta })}
                            />
                            {showMeta && (
                                <ToggleControl
                                    label={__('Reading Time', 'zoloblocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}
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
                        </ZoloPanelBody>
                        {(showTitle || showExcerpt) && (
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
                                            __nextHasNoMarginBottom={true}
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
                                {showMeta && showReadingTime && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Meta', 'zoloblocks')}</div>
                                        <TextControl
                                            label={__('Separator', 'zoloblocks')}
                                            value={metaSeparator}
                                            onChange={(value) => setAttributes({ metaSeparator: value })}
                                        />
                                    </>
                                )}
                                {showAuthor && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Author', 'zoloblocks')}</div>
                                        <TextControl
                                            label={__('Prefix', 'zoloblocks')}
                                            value={authorPrefix}
                                            onChange={(authorPrefix) => setAttributes({ authorPrefix })}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showReadMore && (
                            <ZoloPanelBody title={__('Read More Button', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Text', 'zoloblocks')}
                                    checked={showReadmoreText}
                                    onChange={() => setAttributes({ showReadmoreText: !showReadmoreText })}
                                />
                                <ToggleControl
                                    label={__('Icon', 'zoloblocks')}
                                    checked={showReadmoreIcon}
                                    onChange={(showReadmoreIcon) => setAttributes({ showReadmoreIcon })}
                                />

                                {showReadmoreText && (
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={readMoreBtnText}
                                        onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                                    />
                                )}

                                {showReadmoreIcon && (
                                    <ZoloIconPicker
                                        label={__('Icon', 'zoloblocks')}
                                        value={readMoreIcon}
                                        onChange={(readMoreIcon) => setAttributes({ readMoreIcon })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Carousel Options', 'zoloblocks')} panelProps={props}>
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
                            <CardDivider />
                            <SelectControl
                                label={__('Effect', 'zoloblocks')}
                                options={CAROUSEL_EFFECTS}
                                onChange={(effect) =>
                                    setAttributes({
                                        carouselEffect: effect,
                                    })
                                }
                                value={carouselEffect}
                                __nextHasNoMarginBottom={true}
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
                            {carouselEffect === 'coverflow' && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <RangeControl
                                            label={__('Rotate', 'zoloblocks')}
                                            value={coverFlowEffect.rotate}
                                            onChange={onChangeRotate}
                                            min={0}
                                            max={360}
                                        />
                                    </div>

                                    <div className="zolo-flex-col-control">
                                        <RangeControl
                                            label={__('Stretch', 'zoloblocks')}
                                            value={coverFlowEffect.stretch}
                                            onChange={onChangeStretch}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <RangeControl
                                            label={__('Depth', 'zoloblocks')}
                                            value={coverFlowEffect.depth}
                                            onChange={onChangeDepth}
                                            min={0}
                                            max={1000}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <RangeControl
                                            label={__('Modifier', 'zoloblocks')}
                                            value={coverFlowEffect.modifier}
                                            onChange={onChangeModifier}
                                            min={0}
                                            max={10}
                                        />
                                    </div>
                                    <ToggleControl
                                        label={__('Shadow', 'zoloblocks')}
                                        checked={coverFlowEffect.slideShadows}
                                        onChange={onChangeSlideShadows}
                                    />
                                </>
                            )}
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
                        <ZoloPanelBody title={__('Item Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={COLUMN_PADDING}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={COLUMN_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={COLUMN_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={COLUMN_BORDER_RADIUS}
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

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        {showThumbnail && (
                            <ZoloPanelBody title={__('Thumbnail', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={THUMBNAIL_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={600}
                                    step={1}
                                />
                                {showThumbnail && (
                                    <SelectControl
                                        label={__('Resolution', 'zoloblocks')}
                                        value={postQuery?.postThumbnail}
                                        options={THUMBNAIL_SIZE}
                                        onChange={(postThumbnail) =>
                                            setAttributes({
                                                postQuery: { ...postQuery, postThumbnail },
                                            })
                                        }
                                        __nextHasNoMarginBottom={true}
                                    />
                                )}
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={THUMBNAIL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={THUMBNAIL_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl
                                    controlName={THUMBNAIL_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={THUMBNAIL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
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
                            </ZoloPanelBody>
                        )}

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
                                            <SelectControl
                                                label={__('Animations', 'zoloblocks')}
                                                value={postTitleAnimation}
                                                options={applyFilters('zolo.postCarousel.titleAnimation', POST_TITLE_ANIMATION)}
                                                onChange={(postTitleAnimation) => setAttributes({ postTitleAnimation })}
                                                __nextHasNoMarginBottom={true}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleHoverColor: color,
                                                    })
                                                }
                                            />

                                            {postTitleAnimation === 'zolo-post-title-type-1' && (
                                                <>
                                                    <div className="zolo-custom-heading">{__('Animation Type', 'zoloblocks')}</div>
                                                    <ColorControl
                                                        label={__('Background', 'zoloblocks')}
                                                        color={titleAnimationTypeBgColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                titleAnimationTypeBgColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
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
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={metaColor}
                                    onChange={(metaColor) => setAttributes({ metaColor })}
                                />
                                {preset === 'style-3' && (
                                    <ColorControl
                                        label={__('Hover Color', 'zoloblocks')}
                                        color={metaHColor}
                                        onChange={(metaHColor) => setAttributes({ metaHColor })}
                                    />
                                )}
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={META_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Space', 'zoloblocks')}
                                    controlName={META_SPACE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={META_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                {preset === 'style-4' && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Meta Box', 'zoloblocks')}</div>
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={META_BOX_WRAP_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <div className="zolo-custom-heading">{__('Arrow', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaArrowColor}
                                            onChange={(metaArrowColor) => setAttributes({ metaArrowColor })}
                                        />
                                        <ResRangeControl
                                            label={__('Spacing', 'zoloblocks')}
                                            controlName={META_ARROW_SPACE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                )}
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
                                                label={__('Gap', 'zoloblocks')}
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
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showReadMore && (
                            <ZoloPanelBody title={__('Read More Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={readMoreColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreColor: value,
                                                    })
                                                }
                                            />
                                            {showReadmoreIcon && (
                                                <ColorControl
                                                    label={__('Icon Color', 'zoloblocks')}
                                                    color={readMoreIconColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            readMoreIconColor: value,
                                                        })
                                                    }
                                                />
                                            )}
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={READMORE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={readMoreBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreBgColor: value,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={READMORE_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={READMORE_MARGIN}
                                                requiredProps={requiredProps}
                                            />

                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={READMORE_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={READMORE_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={READMORE_GAP}
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
                                                color={readMoreHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreHoverColor: value,
                                                    })
                                                }
                                            />
                                            {showReadmoreIcon && (
                                                <ColorControl
                                                    label={__('Icon Color', 'zoloblocks')}
                                                    color={readMoreIconHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            readMoreIconHoverColor: value,
                                                        })
                                                    }
                                                />
                                            )}
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={readMoreBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreBgHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showAuthor && (
                            <ZoloPanelBody title={__('Author', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <div className="zolo-custom-heading">{__('Avatar', 'zoloblocks')}</div>
                                <ResRangeControl label={__('Size', 'zoloblocks')} controlName={AVATAR_SIZE} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={AVATAR_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={AVATAR_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={AVATAR_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <div className="zolo-custom-heading">{__('Name', 'zoloblocks')}</div>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={nameColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        nameColor: color,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__('Prefix Color', 'zoloblocks')}
                                                color={namePrefixColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        namePrefixColor: color,
                                                    })
                                                }
                                            />

                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={NAME_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Name Hover Color', 'zoloblocks')}
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

                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Offset Horizontal', 'zoloblocks')}
                                                controlName={NAV_OFFSET_HORIZONTAL}
                                                requiredProps={requiredProps}
                                                min={-100}
                                                max={500}
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
                        {showPagination && (
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
                                            </>
                                        }
                                        hoverComponents={
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
                            block="zolo/post-carousel"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
