import { InspectorControls } from '@wordpress/block-editor';
import { CardDivider, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
    PRESETS,
    CONTENT_ALIGN,
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
    THUMBNAIL_PADDING,
    THUMBNAIL_BG,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_MARGIN,
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    COUNT_SIZE,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_MARGIN,
    PAG_PADDING,
    PAG_ALIGN,
    FTHUMB_HEIGHT,
    FCONTENT_PADDING,
    FCONTAINER_PADDING,
    FCONTAINER_BG,
    FCONTAINER_OVERLAY,
    FCONTAINER_BORDER,
    FCONTAINER_BORDER_RADIUS,
    FCONTAINER_SHADOW,
    META_SPACE,
    CONTENT_DIRECTIONS,
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    COUNT_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
    FTITLE_TYPOGRAPHY,
    FEXCERPT_TYPOGRAPHY,
    FMETA_TYPOGRAPHY,
    FCAT_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE, TEXT_ALIGN_OPTIONS, PAGINARION_TYPE } from '../../../src/global/constants';
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
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    IconicBtnGroup,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        resMode,
        postQuery,
        titleTag,
        showExcerpt,
        excerptindicator,
        showCategory,
        showCount,
        showMeta,
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        catBgColor,
        catColor,
        catBgHoverColor,
        catHoverColor,
        countColor,
        countBGColor,
        countHoverColor,
        countHoverBGColor,
        showReadingTime,
        metaSeparator,
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
        authorPrefixColor,
        authorColor,
        authorHoverColor,
        // featured post
        showfeatureimg,
        contentDirection,
        ftitleColor,
        ftitleHoverColor,
        fexcerptColor,
        fmetaColor,
        fcatBgColor,
        fcatColor,
        fcatBgHoverColor,
        fcatHoverColor,
        fauthorPrefixColor,
        fauthorColor,
        fauthorHoverColor,
        fcountColor,
        fcountBGColor,
        authorPrefix,
        paginationType,
        previousText,
        nextText,
        loadMoreText,
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
                    showCount: false,
                });
                break;
            case 'style-2':
                setAttributes({
                    showCount: false,
                });
                break;
            case 'style-3':
                setAttributes({
                    showCount: true,
                });
                break;
            case 'style-4':
                setAttributes({
                    showCount: true,
                });
                break;
            case 'style-5':
                setAttributes({
                    showCount: true,
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
                block="zolo/post-list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.postList.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Feature Post', 'zoloblocks')}
                                checked={showfeatureimg}
                                onChange={(v) => setAttributes({ showfeatureimg: v })}
                            />
                            <ToggleControl
                                label={__('Excerpt', 'zoloblocks')}
                                checked={showExcerpt}
                                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                            />

                            <ToggleControl
                                label={__('Category', 'zoloblocks')}
                                checked={showCategory}
                                onChange={(showCategory) => setAttributes({ showCategory })}
                            />
                            <ToggleControl
                                label={__('Meta', 'zoloblocks')}
                                checked={showMeta}
                                onChange={(showMeta) => setAttributes({ showMeta })}
                            />
                            {showMeta && (
                                <ToggleControl
                                    label={__('Reading Time', 'zoloblocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}

                            {'style-1' !== preset && 'style-2' !== preset && (
                                <ToggleControl
                                    label={__('Count', 'zoloblocks')}
                                    checked={showCount}
                                    onChange={(showCount) => setAttributes({ showCount })}
                                />
                            )}

                            <ToggleControl
                                label={__('Pagination', 'zoloblocks')}
                                checked={postQuery?.showPagination}
                                onChange={(showPagination) =>
                                    setAttributes({
                                        postQuery: { ...postQuery, showPagination },
                                    })
                                }
                            />

                            <CardDivider />
                            {('style-1' == preset || 'style-3' == preset) && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Direction', 'zoloblocks')}
                                        value={contentDirection}
                                        options={CONTENT_DIRECTIONS}
                                        onChange={(v) =>
                                            setAttributes({
                                                contentDirection: v,
                                            })
                                        }
                                    />
                                </div>
                            )}

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
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
                                    <TextControl
                                        label={__('Author Prefix', 'zoloblocks')}
                                        value={authorPrefix}
                                        onChange={(authorPrefix) => setAttributes({ authorPrefix })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>

                        {postQuery?.showPagination && (
                            <ZoloPanelBody title={__('Pagination', 'zoloblocks')} panelProps={props}>
                                <SelectControl
                                    label={__('Type', 'zoloblocks')}
                                    value={paginationType}
                                    options={PAGINARION_TYPE}
                                    onChange={(paginationType) => setAttributes({ paginationType })}
                                />
                                {(paginationType === 'number' || paginationType === 'normal') && (
                                    <>
                                        <CardDivider />
                                        <TextControl
                                            label={__('Previous Text', 'zoloblocks')}
                                            value={previousText}
                                            onChange={(previousText) => setAttributes({ previousText })}
                                        />
                                        <TextControl
                                            label={__('Next Text', 'zoloblocks')}
                                            value={nextText}
                                            onChange={(nextText) => setAttributes({ nextText })}
                                        />
                                    </>
                                )}
                                {paginationType === 'button' && (
                                    <>
                                        <CardDivider />
                                        <TextControl
                                            label={__('Load More Text', 'zoloblocks')}
                                            value={loadMoreText}
                                            onChange={(loadMoreText) => setAttributes({ loadMoreText })}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <ResRangeControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Featured', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={COLUMN_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={COLUMN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={COLUMN_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={COLUMN_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={FCONTAINER_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={FCONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BoxShadowControl controlName={FCONTAINER_SHADOW} requiredProps={requiredProps} />
                                        <div className="zolo-custom-heading">{__('Content', 'zoloblocks')}</div>
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={FCONTENT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Thumbnail', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Featured', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        {preset === 'style-1' && (
                                            <ResRangeControl
                                                label={__('Height', 'zoloblocks')}
                                                controlName={THUMBNAIL_HEIGHT}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={600}
                                                step={1}
                                            />
                                        )}
                                        <SelectControl
                                            label={__('Resolution', 'zoloblocks')}
                                            value={postQuery?.postThumbnail}
                                            options={THUMBNAIL_SIZE}
                                            onChange={(postThumbnail) =>
                                                setAttributes({
                                                    postQuery: { ...postQuery, postThumbnail },
                                                })
                                            }
                                        />
                                        <CardDivider />

                                        <NormalBGControl requiredProps={requiredProps} controlName={THUMBNAIL_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={THUMBNAIL_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
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
                                        <CardDivider />
                                        {cssFilters && cssFilters.length > 0 && cssFilters}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {showfeatureimg && (
                                            <>
                                                <ResRangeControl
                                                    label={__('Height', 'zoloblocks')}
                                                    controlName={FTHUMB_HEIGHT}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={600}
                                                    step={1}
                                                />
                                                <CardDivider />
                                                <NormalBGControl
                                                    label={__('Overlay', 'zoloblocks')}
                                                    requiredProps={requiredProps}
                                                    controlName={FCONTAINER_OVERLAY}
                                                    noMainBGImg={true}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Featured', 'zoloblocks'),
                                    },
                                ]}
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
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
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
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={ftitleColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    ftitleColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={FTITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Hover Color', 'zoloblocks')}
                                            color={ftitleHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    ftitleHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showExcerpt && (
                            <ZoloPanelBody title={__('Excerpt', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zoloblocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zoloblocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={fexcerptColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fexcerptColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={FEXCERPT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <>
                                <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Normal', 'zoloblocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Featured', 'zoloblocks'),
                                            },
                                        ]}
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
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={fmetaColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            fmetaColor: color,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={FMETA_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Author', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={authorColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Prefix Color', 'zoloblocks')}
                                                    color={authorPrefixColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorPrefixColor: color,
                                                        })
                                                    }
                                                />
                                                {showfeatureimg && (
                                                    <>
                                                        <div className="zolo-custom-heading">{__('Featured', 'zoloblocks')}</div>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={fauthorColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fauthorColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__('Prefix Color', 'zoloblocks')}
                                                            color={fauthorPrefixColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fauthorPrefixColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={authorHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorHoverColor: color,
                                                        })
                                                    }
                                                />
                                                {showfeatureimg && (
                                                    <>
                                                        <div className="zolo-custom-heading">{__('Featured', 'zoloblocks')}</div>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={fauthorHoverColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fauthorHoverColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showCategory && (
                            <ZoloPanelBody title={__('Category', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zoloblocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zoloblocks'),
                                        },
                                    ]}
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
                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
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
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={fcatColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcatColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={FCAT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={fcatBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcatBgColor: color,
                                                    })
                                                }
                                            />

                                            <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={fcatHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcatHoverColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={fcatBgHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcatBgHoverColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showCount && 'style-1' !== preset && 'style-2' !== preset && (
                            <ZoloPanelBody title={__('Counter', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zoloblocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zoloblocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={countColor}
                                                            onChange={(countColor) => setAttributes({ countColor })}
                                                        />
                                                        <TypographyDropdown
                                                            label={__('Typography', 'zoloblocks')}
                                                            typoPrefixConstant={COUNT_TYPOGRAPHY}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ResRangeControl
                                                            label={__('Size', 'zoloblocks')}
                                                            controlName={COUNT_SIZE}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <BorderControl
                                                            label={__('Border', 'zoloblocks')}
                                                            controlName={COUNT_BORDER}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Border Radius', 'zoloblocks')}
                                                            controlName={COUNT_BORDER_RADIUS}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={true}
                                                        />
                                                        <ColorControl
                                                            label={__('Background Color', 'zoloblocks')}
                                                            color={countBGColor}
                                                            onChange={(countBGColor) => setAttributes({ countBGColor })}
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Hover Color', 'zoloblocks')}
                                                            color={countHoverColor}
                                                            onChange={(countHoverColor) => setAttributes({ countHoverColor })}
                                                        />
                                                        <ColorControl
                                                            label={__('Hover Background Color', 'zoloblocks')}
                                                            color={countHoverBGColor}
                                                            onChange={(countHoverBGColor) => setAttributes({ countHoverBGColor })}
                                                        />
                                                    </>
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={fcountColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcountColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background Color', 'zoloblocks')}
                                                color={fcountBGColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcountBGColor: color,
                                                    })
                                                }
                                            />
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
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={PAG_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={PAG_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={PAG_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
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
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={pagBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagBgColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Separator', 'zoloblocks')}
                                                color={pagSeparatorColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagSeparatorColor: color,
                                                    })
                                                }
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
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-list"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
