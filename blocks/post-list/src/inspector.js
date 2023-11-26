import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
    PRESETS,
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
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    COUNT_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE } from '../../../src/global/constants';

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
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
        selectedPanel,
        selectedTab,
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => changePremade(selected)}
                            />
                            {/* <ToggleControl
                                label={__('Show Thumbnail', 'zolo-blocks')}
                                checked={showThumbnail}
                                onChange={(showThumbnail) => setAttributes({ showThumbnail })}
                            /> */}
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={(showTitle) => setAttributes({ showTitle })}
                            />
                            <ToggleControl
                                label={__('Show Excerpt', 'zolo-blocks')}
                                checked={showExcerpt}
                                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                            />

                            <ToggleControl
                                label={__('Show Category', 'zolo-blocks')}
                                checked={showCategory}
                                onChange={(showCategory) => setAttributes({ showCategory })}
                            />
                            <ToggleControl
                                label={__('Show Meta', 'zolo-blocks')}
                                checked={showMeta}
                                onChange={(showMeta) => setAttributes({ showMeta })}
                            />
                            <ToggleControl
                                label={__('Show Reading Time', 'zolo-blocks')}
                                checked={showReadingTime}
                                onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                            />
                            {'style-1' !== preset && 'style-2' !== preset && (
                                <ToggleControl
                                    label={__('Show Count', 'zolo-blocks')}
                                    checked={showCount}
                                    onChange={(showCount) => setAttributes({ showCount })}
                                />
                            )}

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
                        <PanelBody
                            title={__('Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'content' })}
                            opened={selectedPanel === 'content'}
                        >
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
                            <ResRangeControl
                                label={__('Items Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Query', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'query' })}
                            opened={selectedPanel === 'query'}
                        >
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody
                            title={__('Item', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'containerStyle' })}
                            opened={selectedPanel === 'containerStyle'}
                        >
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
                        </PanelBody>

                        {showThumbnail && (
                            <PanelBody
                                title={__('Thumbnail', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'thumbnailStyle' })}
                                opened={selectedPanel === 'thumbnailStyle'}
                            >
                                <ResRangeControl
                                    label={__('Thumbnail Height', 'zolo-blocks')}
                                    controlName={THUMBNAIL_HEIGHT}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={600}
                                    step={1}
                                />

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
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={THUMBNAIL_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
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
                            </PanelBody>
                        )}

                        {showTitle && (
                            <PanelBody
                                title={__('Title', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'titleStyle' })}
                                opened={selectedPanel === 'titleStyle'}
                            >
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
                            </PanelBody>
                        )}

                        {showExcerpt && (
                            <PanelBody
                                title={__('Excerpt', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'excerptStyle' })}
                                opened={selectedPanel === 'excerptStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={EXCERPT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
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
                            </PanelBody>
                        )}

                        {showMeta && (
                            <PanelBody
                                title={__('Meta', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'metaStyle' })}
                                opened={selectedPanel === 'metaStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={META_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={metaColor}
                                    onChange={(metaColor) => setAttributes({ metaColor })}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={META_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}

                        {showCategory && (
                            <PanelBody
                                title={__('Category', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'categoryStyle' })}
                                opened={selectedPanel === 'categoryStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={CAT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
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
                            </PanelBody>
                        )}

                        {showCount && 'style-1' !== preset && 'style-2' !== preset && (
                            <PanelBody
                                title={__('Count', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'countStyle' })}
                                opened={selectedPanel === 'countStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={COUNT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />

                                <ResRangeControl label={__('Size', 'zolo-blocks')} controlName={COUNT_SIZE} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={COUNT_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={COUNT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={countColor}
                                                onChange={(countColor) => setAttributes({ countColor })}
                                            />
                                            <ColorControl
                                                label={__('Background Color', 'zolo-blocks')}
                                                color={countBGColor}
                                                onChange={(countBGColor) => setAttributes({ countBGColor })}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zolo-blocks')}
                                                color={countHoverColor}
                                                onChange={(countHoverColor) => setAttributes({ countHoverColor })}
                                            />
                                            <ColorControl
                                                label={__('Hover Background Color', 'zolo-blocks')}
                                                color={countHoverBGColor}
                                                onChange={(countHoverBGColor) => setAttributes({ countHoverBGColor })}
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}

                        {postQuery?.showPagination && (
                            <PanelBody
                                title={__('Pagination', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'paginationStyle' })}
                                opened={selectedPanel === 'paginationStyle'}
                            >
                                <ResAlignmentControl
                                    label={__('Alignment', 'zolo-blocks')}
                                    controlName={PAG_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={PAG_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={PAG_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={PAG_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={PAG_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={PAG_MARGIN}
                                    requiredProps={requiredProps}
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
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={pagColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={pagBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        pagBgColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Separator', 'zolo-blocks')}
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
                                                label={__('Color', 'zolo-blocks')}
                                                color={apagColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        apagColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
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
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
