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

import { DEFAULT_ALIGNS, HEADING, THUMBNAIL_SIZE, TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
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
    IconicBtnGroup
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
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
                block="zolo/post-list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={applyFilters('zolo.postList.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />
                                <ToggleControl
                                label={__('Show Feature Image', 'zolo-blocks')}
                                checked={showfeatureimg}
                                onChange={(v) => setAttributes({ showfeatureimg:v })}
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
                            {showMeta && (
                                <ToggleControl
                                    label={__('Show Reading Time', 'zolo-blocks')}
                                    checked={showReadingTime}
                                    onChange={() => setAttributes({ showReadingTime: !showReadingTime })}
                                />
                            )}

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
                           { ("style-1" ==preset || "style-3" ==preset) && (
                             <IconicBtnGroup
                                    label={__('Direction', 'zolo-blocks')}
                                    value={contentDirection}
                                    options={CONTENT_DIRECTIONS}
                                    onChange={(v) =>
                                        setAttributes({
                                            contentDirection: v,
                                        })
                                    }
                                />)}

                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />

                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
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
                                label={__('Expansion Indicator', 'zolo-blocks')}
                                value={excerptindicator}
                                onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                            />
                            <TextControl
                                label={__('Meta Separator', 'zolo-blocks')}
                                value={metaSeparator}
                                onChange={(value) => setAttributes({ metaSeparator: value })}
                            />
                            <ResRangeControl
                                label={__('Items Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Query', 'zolo-blocks')} panelProps={props}>
                            <QueryControl attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Featured', 'zolo-blocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={COLUMN_BORDER}
                                            requiredProps={requiredProps}
                                        />
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
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={FCONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={FCONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Content Padding', 'zolo-blocks')}
                                            controlName={FCONTENT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={FCONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={FCONTAINER_BG} noMainBGImg={true} />
                                        <BoxShadowControl controlName={FCONTAINER_SHADOW} requiredProps={requiredProps} />
                                        <NormalBGControl
                                            label={__('Overlay', 'zolo-blocks')}
                                            requiredProps={requiredProps}
                                            controlName={FCONTAINER_OVERLAY}
                                            noMainBGImg={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Thumbnail', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Featured', 'zolo-blocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
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
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Thumbnail Height', 'zolo-blocks')}
                                            controlName={FTHUMB_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={600}
                                            step={1}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zolo-blocks')}
                                                typoPrefixConstant={FTITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zolo-blocks')}
                                                            color={ftitleColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    ftitleColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Hover Color', 'zolo-blocks')}
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
                                        </>
                                    }
                                />
                        </ZoloPanelBody>


                        {showExcerpt && (
                            <ZoloPanelBody title={__('Excerpt', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zolo-blocks')}
                                                typoPrefixConstant={FEXCERPT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={fexcerptColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fexcerptColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showMeta && (
                            <>
                                <ZoloPanelBody title={__('Meta', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Normal', 'zolo-blocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Featured', 'zolo-blocks'),
                                            },
                                        ]}
                                        normalComponents={
                                            <>
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
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <TypographyDropdown
                                                    label={__('Typography', 'zolo-blocks')}
                                                    typoPrefixConstant={FMETA_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={fmetaColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            fmetaColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Author', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Prefix Color', 'zolo-blocks')}
                                                    color={authorPrefixColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorPrefixColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Name Color', 'zolo-blocks')}
                                                    color={authorColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorColor: color,
                                                        })
                                                    }
                                                />
                                                <CardDivider />
                                                <ColorControl
                                                    label={__('Featured Prefix', 'zolo-blocks')}
                                                    color={fauthorPrefixColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            fauthorPrefixColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Featured Name', 'zolo-blocks')}
                                                    color={fauthorColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            fauthorColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Name Color', 'zolo-blocks')}
                                                    color={authorHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            authorHoverColor: color,
                                                        })
                                                    }
                                                />
                                                <CardDivider />
                                                <ColorControl
                                                    label={__('Featured Name', 'zolo-blocks')}
                                                    color={fauthorHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            fauthorHoverColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showCategory && (
                            <ZoloPanelBody title={__('Category', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
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
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={CAT_BORDER}
                                                requiredProps={requiredProps}
                                            />
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zolo-blocks')}
                                                typoPrefixConstant={FCAT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zolo-blocks')}
                                                            color={fcatColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fcatColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__('Background', 'zolo-blocks')}
                                                            color={fcatBgColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fcatBgColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Hover Color', 'zolo-blocks')}
                                                            color={fcatHoverColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    fcatHoverColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__('Hover Background', 'zolo-blocks')}
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
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showCount && 'style-1' !== preset && 'style-2' !== preset && (
                            <ZoloPanelBody title={__('Counter', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Normal', 'zolo-blocks'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Featured', 'zolo-blocks'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <TypographyDropdown
                                                label={__('Typography', 'zolo-blocks')}
                                                typoPrefixConstant={COUNT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zolo-blocks')}
                                                controlName={COUNT_SIZE}
                                                requiredProps={requiredProps}
                                            />
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
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={fcountColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        fcountColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background Color', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Pagination', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
