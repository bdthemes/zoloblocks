import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl, CardDivider, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { RangeControl, Dropdown, Button } from '@wordpress/components';

import {
    PRESETS,
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
    const { attributes, setAttributes } = props;
    const {
        preset,
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
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

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
            default:
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-carousel"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zolo-blocks')}
                                value={preset}
                                options={applyFilters('zolo.postCarousel.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />

                            <ToggleControl
                                label={__('Show Excerpt', 'zolo-blocks')}
                                checked={showExcerpt}
                                onChange={() => setAttributes({ showExcerpt: !showExcerpt })}
                            />

                            <ToggleControl
                                label={__('Show Read More Button', 'zolo-blocks')}
                                checked={showReadMore}
                                onChange={() => setAttributes({ showReadMore: !showReadMore })}
                            />

                            <ToggleControl
                                label={__('Show Category', 'zolo-blocks')}
                                checked={showCategory}
                                onChange={() => setAttributes({ showCategory: !showCategory })}
                            />
                            <ToggleControl
                                label={__('Show Author', 'zolo-blocks')}
                                checked={showAuthor}
                                onChange={() => setAttributes({ showAuthor: !showAuthor })}
                            />
                            <ToggleControl
                                label={__('Show Meta', 'zolo-blocks')}
                                checked={showMeta}
                                onChange={() => setAttributes({ showMeta: !showMeta })}
                            />
                            {showMeta && (
                                <ToggleControl
                                    label={__('Show Reading Time', 'zolo-blocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}
                        </ZoloPanelBody>
                        {(showTitle || showExcerpt) && (
                            <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                                {showTitle && (
                                    <>
                                        <SelectControl
                                            label={__('Title Tag', 'zolo-blocks')}
                                            value={titleTag}
                                            options={HEADING}
                                            onChange={(titleTag) => setAttributes({ titleTag })}
                                        />
                                        <RangeResetControl
                                            label={__('Title Words', 'zolo-blocks')}
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
                                        <RangeResetControl
                                            label={__('Excerpt Words', 'zolo-blocks')}
                                            controlName={'excerptWords'}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />
                                        <TextControl
                                            label={__(' Expansion Indicator', 'zolo-blocks')}
                                            value={excerptindicator}
                                            onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                                        />
                                    </>
                                )}
                                {showMeta && showReadingTime && (
                                    <TextControl
                                        label={__('Meta Separator', 'zolo-blocks')}
                                        value={metaSeparator}
                                        onChange={(value) => setAttributes({ metaSeparator: value })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {showReadMore && (
                            <ZoloPanelBody title={__('Read More Button', 'zolo-blocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Text', 'zolo-blocks')}
                                    checked={showReadmoreText}
                                    onChange={() => setAttributes({ showReadmoreText: !showReadmoreText })}
                                />
                                <ToggleControl
                                    label={__('Show Icon', 'zolo-blocks')}
                                    checked={showReadmoreIcon}
                                    onChange={(showReadmoreIcon) => setAttributes({ showReadmoreIcon })}
                                />

                                {showReadmoreText && (
                                    <TextControl
                                        label={__('Button Text', 'zolo-blocks')}
                                        value={readMoreBtnText}
                                        onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                                    />
                                )}

                                {showReadmoreIcon && (
                                    <ZoloIconPicker
                                        label={__('Read More Icon', 'zolo-blocks')}
                                        value={readMoreIcon}
                                        onChange={(readMoreIcon) => setAttributes({ readMoreIcon })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Query', 'zolo-blocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
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
                        <ZoloPanelBody title={__('Item Container', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={COLUMN_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={COLUMN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={COLUMN_PADDING}
                                requiredProps={requiredProps}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                            <BoxShadowControl controlName={COLUMN_SHADOW} requiredProps={requiredProps} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        {showThumbnail && (
                            <ZoloPanelBody title={__('Thumbnail', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Content Height', 'zolo-blocks')}
                                    controlName={THUMBNAIL_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={600}
                                    step={1}
                                />
                                {showThumbnail && (
                                    <SelectControl
                                        label={__('Thumbnail Size', 'zolo-blocks')}
                                        value={postQuery?.postThumbnail}
                                        options={THUMBNAIL_SIZE}
                                        onChange={(postThumbnail) =>
                                            setAttributes({
                                                postQuery: { ...postQuery, postThumbnail },
                                            })
                                        }
                                    />
                                )}
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={THUMBNAIL_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={THUMBNAIL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={THUMBNAIL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={THUMBNAIL_BG} noMainBGImg={true} />
                                <BoxShadowControl
                                    controlName={THUMBNAIL_BOX_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Title Color', 'zolo-blocks')}
                                                color={titleColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Title Hover Color', 'zolo-blocks')}
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

                        {showExcerpt && (
                            <ZoloPanelBody title={__('Excerpt', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={excerptColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            excerptColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={EXCERPT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <ZoloPanelBody title={__('Meta', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={META_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={metaColor}
                                    onChange={(metaColor) => setAttributes({ metaColor })}
                                />
                                <ResRangeControl
                                    label={__('Space', 'zolo-blocks')}
                                    controlName={META_SPACE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={META_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showCategory && (
                            <ZoloPanelBody title={__('Category', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={CAT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={CAT_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={CAT_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={CAT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={CAT_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={CAT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={catColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={catBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catBgColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={catHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Read More Button', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={READMORE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={READMORE_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={READMORE_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={READMORE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={READMORE_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={READMORE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={readMoreColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={readMoreIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreIconColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={readMoreBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreBgColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={readMoreHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={readMoreIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreIconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Author', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={AVATAR_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BaseControl label={__('Avatar', 'zolo-blocks')}>
                                    <ResRangeControl
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={AVATAR_SIZE}
                                        requiredProps={requiredProps}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={AVATAR_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={AVATAR_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </BaseControl>

                                <CardDivider />
                                <BaseControl label={__('Name', 'zolo-blocks')}>
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={NAME_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                    />

                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Prefix Color', 'zolo-blocks')}
                                                    color={namePrefixColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            namePrefixColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Name Color', 'zolo-blocks')}
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
                                                    label={__('Name Hover Color', 'zolo-blocks')}
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
                                </BaseControl>
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
