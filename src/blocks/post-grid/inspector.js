import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { InspectorControls } from '@wordpress/block-editor';

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
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
    ResAlignmentControl,
    ZoloPanelBody,
    ResGapControl,
    getTaxonomies,
    Select2AjaxControl,
} = window.zoloModule;

import {
    PRESETS,
    POST_TITLE_ANIMATION,
    GRID_COLUMNS,
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
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
    PAG_MARGIN,
    PAG_PADDING,
    PAG_ALIGN,
    META_SPACE,
    META_ARROW_SPACE,
    CONTENT_PADDING,
    META_BOX_WRAP_PADDING,
    FILTER_BORDER,
    FILTER_BORDER_RADIUS,
    FILTER_MARGIN,
    FILTER_PADDING,
    FILTER_ALIGN,
    FILTER_GAP,
    INNER_CONTENT_PADDING,
    INNER_CONTENT_MARGIN,
    INNER_CONTENT_BG,
    INNER_CONTENT_BORDER,
    INNER_CONTENT_BORDER_RADIUS,
    INNER_CONTENT_SHADOW,
    BOTTOM_CONTENT_SPACING,
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    READMORE_TYPOGRAPHY,
    NAME_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
    FILTER_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE, PAGINARION_TYPE } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

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
        namePrefixHoverColor,
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
        metaSeparator,
        authorPrefix,
        // post meta
        showReadingTime,
        paginationType,
        previousText,
        nextText,
        loadMoreText,
        //for filter
        showFilterTaxonomy,
        postTerms,
        postTaxonomy,
        taxonomyName,
        filterColor,
        filterBgColor,
        filterBorderColor,
        filterAColor,
        filterABgColor,
        filterABorderColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
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
                    showExcerpt: false,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 2,
                });
                break;
            case 'style-5':
                setAttributes({
                    showExcerpt: true,
                    showReadMore: false,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            case 'style-6':
                setAttributes({
                    showExcerpt: false,
                    showReadMore: true,
                    showThumbnail: true,
                    zolo_gridColumnsRange: 3,
                });
                break;
            default:
                break;
        }
    };

    //for only taxonomy filter
    let postType = postQuery?.postType === 'related_posts' ? postQuery?.currentPostType : postQuery?.postType;
    const zoloTaxonomies = getTaxonomies(postType || 'post', zoloParams.get_taxonomies);
    let zoloTaxonomiesFilter = [
        {
            value: '',
            label: __('Select Type', 'zoloblocks-pro'),
        },
        ...zoloTaxonomies,
    ];
    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.postGrid.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />

                            <ZoloToggleControl
                                label={__('Excerpt', 'zoloblocks')}
                                checked={showExcerpt}
                                onChange={() => setAttributes({ showExcerpt: !showExcerpt })}
                            />

                            <ZoloToggleControl
                                label={__('Read More Button', 'zoloblocks')}
                                checked={showReadMore}
                                onChange={() => setAttributes({ showReadMore: !showReadMore })}
                            />

                            <ZoloToggleControl
                                label={__('Category', 'zoloblocks')}
                                checked={showCategory}
                                onChange={() => setAttributes({ showCategory: !showCategory })}
                            />
                            {preset !== 'style-6' && (
                                <ZoloToggleControl
                                    label={__('Author', 'zoloblocks')}
                                    checked={showAuthor}
                                    onChange={() => setAttributes({ showAuthor: !showAuthor })}
                                />
                            )}
                            <ZoloToggleControl
                                label={preset === 'style-6' ? __('Date', 'zoloblocks') : __('Meta', 'zoloblocks')}
                                checked={showMeta}
                                onChange={() => setAttributes({ showMeta: !showMeta })}
                            />
                            {showMeta && (
                                <ZoloToggleControl
                                    label={__('Reading Time', 'zoloblocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}
                            <ZoloToggleControl
                                label={__('Pagination', 'zoloblocks')}
                                checked={postQuery?.showPagination}
                                onChange={(showPagination) =>
                                    setAttributes({
                                        postQuery: { ...postQuery, showPagination },
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showTitle && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Title', 'zoloblocks')}
                                    </div>
                                    <ZoloSelectControl
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
                                        label={__('Words', 'zoloblocks')}
                                        controlName={'excerptWords'}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                    <ZoloTextControl
                                        label={__('Indicator', 'zoloblocks')}
                                        value={excerptindicator}
                                        onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                                    />
                                </>
                            )}
                            {preset !== 'style-6' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Meta', 'zoloblocks')}</div>
                                    {showMeta && showReadingTime && (
                                        <ZoloTextControl
                                            label={__('Separator', 'zoloblocks')}
                                            value={metaSeparator}
                                            onChange={(value) => setAttributes({ metaSeparator: value })}
                                        />
                                    )}
                                    {showAuthor && (
                                        <ZoloTextControl
                                            label={__('Author Prefix', 'zoloblocks')}
                                            value={authorPrefix}
                                            onChange={(authorPrefix) => setAttributes({ authorPrefix })}
                                        />
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        {showReadMore && (
                            <ZoloPanelBody title={__('Read More Button', 'zoloblocks')} panelProps={props}>
                                <ZoloToggleControl
                                    label={__('Text', 'zoloblocks')}
                                    checked={showReadmoreText}
                                    onChange={(showReadmoreText) => setAttributes({ showReadmoreText })}
                                />
                                <ZoloToggleControl
                                    label={__('Icon', 'zoloblocks')}
                                    checked={showReadmoreIcon}
                                    onChange={(showReadmoreIcon) => setAttributes({ showReadmoreIcon })}
                                />

                                {showReadmoreText && (
                                    <ZoloTextControl
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

                        {postQuery?.showPagination && (
                            <ZoloPanelBody title={__('Pagination', 'zoloblocks')} panelProps={props}>
                                <ZoloSelectControl
                                    label={__('Type', 'zoloblocks')}
                                    value={paginationType}
                                    options={PAGINARION_TYPE}
                                    onChange={(paginationType) => setAttributes({ paginationType })}
                                />

                                {(paginationType === 'number' || paginationType === 'normal') && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Previous Text', 'zoloblocks')}
                                            value={previousText}
                                            onChange={(previousText) => setAttributes({ previousText })}
                                        />
                                        <ZoloTextControl
                                            label={__('Next Text', 'zoloblocks')}
                                            value={nextText}
                                            onChange={(nextText) => setAttributes({ nextText })}
                                        />
                                    </>
                                )}

                                {paginationType === 'button' && (
                                    <ZoloTextControl
                                        label={__('Load More', 'zoloblocks')}
                                        value={loadMoreText}
                                        onChange={(loadMoreText) => setAttributes({ loadMoreText })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
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
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Filter By Taxonomy', 'zoloblocks')} panelProps={props}>
                            <ZoloToggleControl
                                label={__('Filter', 'zoloblocks')}
                                checked={showFilterTaxonomy}
                                onChange={(showFilterTaxonomy) => setAttributes({ showFilterTaxonomy })}
                            />

                            {showFilterTaxonomy && (
                                <>
                                    <ZoloSelectControl
                                        label={__('Select', 'zoloblocks-pro')}
                                        value={postTaxonomy}
                                        onChange={(value) => {
                                            const tName = zoloTaxonomiesFilter.find((option) => option.value === value);
                                            setAttributes({ postTaxonomy: value });
                                            setAttributes({ taxonomyName: tName.label });
                                            if (postTaxonomy !== value) {
                                                setAttributes({ postTerms: [] });
                                            }
                                        }}
                                        options={zoloTaxonomiesFilter}
                                    />

                                    {postTaxonomy && (
                                        <div className="zolo-flex-col-control">
                                            <Select2AjaxControl
                                                label={__(`Select ${taxonomyName}`, 'zoloblocks-pro')}
                                                placeholder={__('Search...', 'zoloblocks-pro')}
                                                sourceName="taxonomy"
                                                sourceType={postTaxonomy}
                                                isMulti={true}
                                                value={postTerms || []}
                                                onChange={(postTerms) => setAttributes({ postTerms })}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
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
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={COLUMN_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={COLUMN_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={COLUMN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            {preset !== 'style-6' && (
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={CONTENT_PADDING}
                                    requiredProps={requiredProps}
                                />
                            )}

                            {preset === 'style-6' && (
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Content', 'zoloblocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Inner Cnt', 'zoloblocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={CONTENT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={INNER_CONTENT_BG}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={INNER_CONTENT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={INNER_CONTENT_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={INNER_CONTENT_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl controlName={INNER_CONTENT_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={INNER_CONTENT_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <div className="zolo-custom-heading">{__('Bottom Content Spacing', 'zoloblocks')}</div>
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={BOTTOM_CONTENT_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </>
                                    }
                                />
                            )}
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
                                    <ZoloSelectControl
                                        label={__('Resolution', 'zoloblocks')}
                                        value={postQuery?.postThumbnail}
                                        options={THUMBNAIL_SIZE}
                                        onChange={(postThumbnail) =>
                                            setAttributes({
                                                postQuery: { ...postQuery, postThumbnail },
                                            })
                                        }
                                    />
                                )}
                                <ZoloCardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={THUMBNAIL_BG} noMainBGImg={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={CONTENT_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={THUMBNAIL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
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
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={TITLE_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ZoloSelectControl
                                                label={__('Animations', 'zoloblocks')}
                                                value={postTitleAnimation}
                                                options={applyFilters('zolo.postGrid.titleAnimation', POST_TITLE_ANIMATION)}
                                                onChange={(postTitleAnimation) => setAttributes({ postTitleAnimation })}
                                            />
                                            <ZoloCardDivider />
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
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={EXCERPT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <ZoloPanelBody
                                title={preset === 'style-6' ? __('Date', 'zoloblocks') : __('Meta', 'zoloblocks')}
                                stylePanel={true}
                                panelProps={props}
                            >
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
                                <ZoloCardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={META_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Space', 'zoloblocks')}
                                    controlName={META_SPACE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                {preset === 'style-5' && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Meta Wrap', 'zoloblocks')}</div>
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
                                            <ZoloCardDivider />
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
                                            <ZoloCardDivider />
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
                                            <ZoloCardDivider />
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
                                                label={__('Text Color', 'zoloblocks')}
                                                color={readMoreColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={readMoreIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreIconColor: value,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={READMORE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ZoloCardDivider />
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
                                            <ZoloCardDivider />
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
                                            <ZoloCardDivider />
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
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={readMoreIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreIconHoverColor: value,
                                                    })
                                                }
                                            />
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

                        {showAuthor && preset !== 'style-6' && (
                            <ZoloPanelBody title={__('Author', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={AVATAR_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
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
                                {/* </BaseControl> */}
                                <div className="zolo-custom-heading">{__('Name', 'zoloblocks')}</div>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Prefix Color', 'zoloblocks')}
                                                color={namePrefixColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        namePrefixColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Name Color', 'zoloblocks')}
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
                                                label={__('Name Hover Color', 'zoloblocks')}
                                                color={nameHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        nameHoverColor: color,
                                                    })
                                                }
                                            />
                                            {preset === 'style-3' && (
                                                <ColorControl
                                                    label={__('Prefix Hover Color', 'zoloblocks')}
                                                    color={namePrefixHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            namePrefixHoverColor: color,
                                                        })
                                                    }
                                                />
                                            )}
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {postQuery?.showPagination && (
                            <ZoloPanelBody title={__('Pagination', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={PAG_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
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
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={pagColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={PAG_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={pagBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagBgColor: color,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={PAG_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={PAG_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <ColorControl
                                                label={__('Separator', 'zoloblocks')}
                                                color={pagSeparatorColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagSeparatorColor: color,
                                                    })
                                                }
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={apagColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        apagColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={apagBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        apagBgColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showFilterTaxonomy && (
                            <ZoloPanelBody title={__('Filter Taxonomy', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={FILTER_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zoloblocks'),
                                        },
                                        {
                                            value: 'active',
                                            label: __('Active', 'zoloblocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={filterColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        filterColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={FILTER_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={filterBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        filterBgColor: color,
                                                    })
                                                }
                                            />

                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={FILTER_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={FILTER_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={FILTER_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={FILTER_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ZoloCardDivider />
                                            <ResGapControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={FILTER_GAP}
                                                requiredProps={requiredProps}
                                                max={100}
                                            />
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={filterAColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        filterAColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={filterABgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        filterABgColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={filterABorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        filterABorderColor: color,
                                                    })
                                                }
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
                            block="zolo/post-grid"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
