import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl, CardDivider, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

import {
    PRESETS,
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
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    READMORE_TYPOGRAPHY,
    NAME_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE } from '../../../src/global/constants';
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
    ResAlignmentControl,
    ZoloPanelBody,
    ResGapControl,
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
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
        metaSeparator,
        authorPrefix,
        // post meta
        showReadingTime,
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
            default:
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.postGrid.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />

                            <ToggleControl
                                label={__('Show Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />

                            <ToggleControl
                                label={__('Show Excerpt', 'zoloblocks')}
                                checked={showExcerpt}
                                onChange={() => setAttributes({ showExcerpt: !showExcerpt })}
                            />

                            <ToggleControl
                                label={__('Show Read More Button', 'zoloblocks')}
                                checked={showReadMore}
                                onChange={() => setAttributes({ showReadMore: !showReadMore })}
                            />

                            <ToggleControl
                                label={__('Show Category', 'zoloblocks')}
                                checked={showCategory}
                                onChange={() => setAttributes({ showCategory: !showCategory })}
                            />
                            <ToggleControl
                                label={__('Show Author', 'zoloblocks')}
                                checked={showAuthor}
                                onChange={() => setAttributes({ showAuthor: !showAuthor })}
                            />
                            <ToggleControl
                                label={__('Show Meta', 'zoloblocks')}
                                checked={showMeta}
                                onChange={() => setAttributes({ showMeta: !showMeta })}
                            />
                            {showMeta && (
                                <ToggleControl
                                    label={__('Show Reading Time', 'zoloblocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}
                            <ToggleControl
                                label={__('Show Pagination', 'zoloblocks')}
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
                                    <SelectControl
                                        label={__('Title Tag', 'zoloblocks')}
                                        value={titleTag}
                                        options={HEADING}
                                        onChange={(titleTag) => setAttributes({ titleTag })}
                                    />
                                    <RangeResetControl
                                        label={__('Title Words', 'zoloblocks')}
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
                                        label={__('Excerpt Words', 'zoloblocks')}
                                        controlName={'excerptWords'}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                    <TextControl
                                        label={__(' Expansion Indicator', 'zoloblocks')}
                                        value={excerptindicator}
                                        onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                                    />
                                </>
                            )}
                            {showMeta && showReadingTime && (
                                <TextControl
                                    label={__('Meta Separator', 'zoloblocks')}
                                    value={metaSeparator}
                                    onChange={(value) => setAttributes({ metaSeparator: value })}
                                />
                            )}
                            {
                                showAuthor && (
                                    <TextControl
                                        label={__('Author Prefix', 'zoloblocks')}
                                        value={authorPrefix}
                                        onChange={(authorPrefix) => setAttributes({ authorPrefix })}
                                    />
                                )
                            }
                        </ZoloPanelBody>
                        {showReadMore && (
                            <ZoloPanelBody title={__('Read More Button', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Text', 'zoloblocks')}
                                    checked={showReadmoreText}
                                    onChange={(showReadmoreText) => setAttributes({ showReadmoreText })}
                                />
                                <ToggleControl
                                    label={__('Show Icon', 'zoloblocks')}
                                    checked={showReadmoreIcon}
                                    onChange={(showReadmoreIcon) => setAttributes({ showReadmoreIcon })}
                                />

                                {showReadmoreText && (
                                    <TextControl
                                        label={__('Button Text', 'zoloblocks')}
                                        value={readMoreBtnText}
                                        onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                                    />
                                )}

                                {showReadmoreIcon && (
                                    <ZoloIconPicker
                                        label={__('Read More Icon', 'zoloblocks')}
                                        value={readMoreIcon}
                                        onChange={(readMoreIcon) => setAttributes({ readMoreIcon })}
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
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={COLUMN_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={COLUMN_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={COLUMN_PADDING}
                                requiredProps={requiredProps}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                            <BoxShadowControl controlName={COLUMN_SHADOW} requiredProps={requiredProps} />
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
                                        label={__('Thumbnail Resolution', 'zoloblocks')}
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
                                    label={__('Border', 'zoloblocks')}
                                    controlName={THUMBNAIL_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={THUMBNAIL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
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

                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={CONTENT_PADDING}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Title Color', 'zoloblocks')}
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
                                                label={__('Title Hover Color', 'zoloblocks')}
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
                            <ZoloPanelBody title={__('Excerpt', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={excerptColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            excerptColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={EXCERPT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={META_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={metaColor}
                                    onChange={(metaColor) => setAttributes({ metaColor })}
                                />
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

                                {preset === 'style-5' && (
                                    <ResDimensionsControl
                                        label={__('Meta Wrap Padding', 'zoloblocks')}
                                        controlName={META_BOX_WRAP_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                )}

                                {preset === 'style-5' && (
                                    <ColorControl
                                        label={__('Arrow Color', 'zoloblocks')}
                                        color={metaArrowColor}
                                        onChange={(metaArrowColor) => setAttributes({ metaArrowColor })}
                                    />
                                )}

                                {preset === 'style-5' && (
                                    <ResRangeControl
                                        label={__('Arrow Spacing', 'zoloblocks')}
                                        controlName={META_ARROW_SPACE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}

                        {showCategory && (
                            <ZoloPanelBody title={__('Category', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={CAT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={CAT_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={CAT_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={CAT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
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
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
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
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={READMORE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={READMORE_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
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
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
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

                        {showAuthor && (
                            <ZoloPanelBody title={__('Author', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={AVATAR_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BaseControl label={__('Avatar', 'zoloblocks')}>
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={AVATAR_SIZE}
                                        requiredProps={requiredProps}
                                    />
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
                                </BaseControl>

                                <CardDivider />
                                <BaseControl label={__('Name', 'zoloblocks')}>
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
                                            </>
                                        }
                                    />
                                </BaseControl>
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
                            block="zolo/post-grid"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
