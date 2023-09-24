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
    READMORE_GAP,
    READMORE_BORDER,
    READMORE_BORDER_RADIUS,
    READMORE_MARGIN,
    READMORE_PADDING,
    AVATAR_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_SHADOW,
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

const {
    ResDimensionsControl,
    QueryControl,
    ResRangeControl,
    RangeResetControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    BackgroundControl,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    ResCounterControl,
} = window.zoloModule;

function Inspector({ attributes, setAttributes }) {
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
        readMoreBgColor,
        readMoreColor,
        readMoreBgHoverColor,
        readMoreHoverColor,
        namePrefixColor,
        nameColor,
        nameHoverColor,
        namePrefixHoverColor,
    } = attributes;

    const resRequiredProps = {
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
                    showReadMore: true,
                    showThumbnail: false,
                    zolo_gridColumnsRange: 1,
                });
                break;
            default:
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Query', 'zolo-blocks')} initialOpen={true}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </PanelBody>

                        <PanelBody title={__('Layout Style', 'zolo-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ResCounterControl
                                label={__('Column', 'zolo-blocks')}
                                controlName={GRID_COLUMNS}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={6}
                            />
                            <ResRangeControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ToggleControl
                                label={__('Show Thumbnail', 'zolo-blocks')}
                                checked={showThumbnail}
                                onChange={(showThumbnail) => setAttributes({ showThumbnail })}
                            />
                            <ResRangeControl
                                label={__('Thumbnail Height', 'zolo-blocks')}
                                controlName={THUMBNAIL_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={600}
                                step={1}
                            />
                            <SelectControl
                                label={__('Thumbnail Image Size', 'zolo-blocks')}
                                value={postQuery?.postThumbnail}
                                options={THUMBNAIL_SIZE}
                                onChange={(postThumbnail) =>
                                    setAttributes({
                                        postQuery: { ...postQuery, postThumbnail },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={(showTitle) => setAttributes({ showTitle })}
                            />
                            <SelectControl
                                label={__('Title Tag', 'zolo-blocks')}
                                value={titleTag}
                                options={HEADING}
                                onChange={(titleTag) => setAttributes({ titleTag })}
                            />
                            <RangeResetControl
                                label={__('Title Words', 'zolo-blocks')}
                                controlName={'titleWords'}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />

                            <ToggleControl
                                label={__('Show Excerpt', 'zolo-blocks')}
                                checked={showExcerpt}
                                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                            />
                            <RangeResetControl
                                label={__('Excerpt Words', 'zolo-blocks')}
                                controlName={'excerptWords'}
                                resRequiredProps={resRequiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <TextControl
                                label={__(' Expansion Indicator', 'zolo-blocks')}
                                value={excerptindicator}
                                onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                            />

                            <ToggleControl
                                label={__('Show Read More Button', 'zolo-blocks')}
                                checked={showReadMore}
                                onChange={(showReadMore) => setAttributes({ showReadMore })}
                            />
                            {showReadMore && (
                                <TextControl
                                    label={__('Button Text', 'zolo-blocks')}
                                    value={readMoreBtnText}
                                    onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Category', 'zolo-blocks')}
                                checked={showCategory}
                                onChange={(showCategory) => setAttributes({ showCategory })}
                            />
                            <ToggleControl
                                label={__('Show Author', 'zolo-blocks')}
                                checked={showAuthor}
                                onChange={(showAuthor) => setAttributes({ showAuthor })}
                            />
                            <ToggleControl
                                label={__('Show Meta', 'zolo-blocks')}
                                checked={showMeta}
                                onChange={(showMeta) => setAttributes({ showMeta })}
                            />
                            <ToggleControl
                                label={__('Show Pagination', 'zolo-blocks')}
                                checked={postQuery?.showPagination}
                                onChange={(showPagination) =>
                                    setAttributes({
                                        postQuery: { ...postQuery, showPagination },
                                    })
                                }
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Grid Columns', 'zolo-blocks')} initialOpen={true}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={COLUMN_PADDING}
                                resRequiredProps={resRequiredProps}
                            />
                            <NormalBGControl resRequiredProps={resRequiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={COLUMN_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={COLUMN_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={COLUMN_SHADOW} resRequiredProps={resRequiredProps} />
                        </PanelBody>

                        {showThumbnail && (
                            <PanelBody title={__('Thumbnail', 'zolo-blocks')} initialOpen={false}>
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={THUMBNAIL_PADDING}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={THUMBNAIL_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />
                                <NormalBGControl resRequiredProps={resRequiredProps} controlName={THUMBNAIL_BG} noMainBGImg={true} />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={THUMBNAIL_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={THUMBNAIL_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <BoxShadowControl
                                    controlName={THUMBNAIL_BOX_SHADOW}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />
                            </PanelBody>
                        )}

                        {showTitle && (
                            <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    resRequiredProps={resRequiredProps}
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
                            </PanelBody>
                        )}

                        {showExcerpt && (
                            <PanelBody title={__('Excerpt', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
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
                                    resRequiredProps={resRequiredProps}
                                />
                            </PanelBody>
                        )}

                        {showMeta && (
                            <PanelBody title={__('Meta', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={META_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={metaColor}
                                    onChange={(metaColor) => setAttributes({ metaColor })}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={META_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />
                            </PanelBody>
                        )}

                        {showCategory && (
                            <PanelBody title={__('Category', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={CAT_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={catBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catBgColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={catColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={catBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catBgHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={catHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        catHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                                <CardDivider />

                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={CAT_GAP}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={CAT_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={CAT_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={CAT_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={CAT_PADDING}
                                    resRequiredProps={resRequiredProps}
                                />
                            </PanelBody>
                        )}

                        {showReadMore && (
                            <PanelBody title={__('Read More Button', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={READMORE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={readMoreBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreBgColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={readMoreColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={readMoreBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreBgHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={readMoreHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        readMoreHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                                <CardDivider />

                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={READMORE_GAP}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={READMORE_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={READMORE_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={READMORE_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={READMORE_PADDING}
                                    resRequiredProps={resRequiredProps}
                                />
                            </PanelBody>
                        )}

                        {showAuthor && (
                            <PanelBody title={__('Author', 'zolo-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={READMORE_GAP}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <BaseControl label={__('Avatar', 'zolo-blocks')}>
                                    <ResRangeControl
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={AVATAR_SIZE}
                                        resRequiredProps={resRequiredProps}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={AVATAR_BORDER}
                                        resRequiredProps={resRequiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={AVATAR_BORDER_RADIUS}
                                        resRequiredProps={resRequiredProps}
                                        forBorderRadius={true}
                                    />
                                </BaseControl>

                                <CardDivider />
                                <BaseControl label={__('Name', 'zolo-blocks')}>
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={NAME_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
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
                                                <ColorControl
                                                    label={__('Prefix Hover Color', 'zolo-blocks')}
                                                    color={namePrefixHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            namePrefixHoverColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                </BaseControl>
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <>
                            <PanelBody title={__('Wrapper Margin & Padding', 'zolo-blocks')} initialOpen={true}>
                                <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} resRequiredProps={resRequiredProps} />
                                <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} resRequiredProps={resRequiredProps} />
                            </PanelBody>

                            <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                                <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} />
                            </PanelBody>

                            <PanelBody title={__('Border & BoxShadow', 'zolo-blocks')} initialOpen={false}>
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={WRAPPER_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />
                                <BoxShadowControl controlName={WRAPPER_SHADOW} resRequiredProps={resRequiredProps} />
                            </PanelBody>
                        </>
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
