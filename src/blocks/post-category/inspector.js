import { InspectorControls } from '@wordpress/block-editor';
import {
    SelectControl,
    ToggleControl,
    RangeControl,
    __experimentalInputControl as InputControl,
    TextareaControl,
    TextControl,
    CardDivider,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import objAttributes from './attributes';
import { NAME_TYPOGRAPHY, TEXT_TYPOGRAPHY, COUNT_TYPOGRAPHY, VIEW_BTN_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { THUMBNAIL_SIZE } from '../../../src/global/constants';
import QuerySettings from './query-settings';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ITEM_HEIGHT,
    TEXT_SPACING,
    COUNT_PADDING,
    COUNT_BG,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    VIEW_BTN_BORDER,
    VIEW_BTN_BORDER_RADIUS,
    VIEW_BTN_PADDING,
    VIEW_BTN_SHADOW,
    THUMBNAIL_OVERLAY_BG,
    CAT_NAME_BG,
    CAT_NAME_PADDING,
    CAT_NAME_BORDER,
    CAT_NAME_SHADOW,
    CAT_NAME_BORDER_RADIUS,
    CAT_NAME_HOVER_BG,
    CAT_NAME_HOVER_SHADOW,
} from './constants';

const {
    ResDimensionsControl,
    ResRangeControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    ResCounterControl,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ZoloIconPicker,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        catQuery,
        resMode,
        preset,
        itemTextLimit,
        showCount,
        showText,
        viewAllBtn,
        showImage,
        nameColor,
        nameHoverColor,
        textColor,
        textHoverColor,
        countColor,
        countHoverColor,
        postCategoryPro,
        itemHoverOpacity,
        viewBtnColor,
        viewBtnHoverColor,
        viewBtnBgColor,
        viewBtnBgHoverColor,
        viewAllBtnText,
        viewAllBtnIcon,
        viewBtnHoverBorderColor,
        itemBorderHoverColor,
        countHoverBgColor,
        countHoverBColor,
        catNameHoverBColor,
    } = attributes;
    const { enableMultipleBG } = postCategoryPro ?? {};
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
                    viewAllBtn: false,
                    showText: false,
                    showImage: false,
                });
                break;
            case 'style-2':
                setAttributes({
                    viewAllBtn: true,
                    showText: true,
                    showImage: true,
                });
                break;
            case 'style-3':
                setAttributes({
                    viewAllBtn: false,
                    showText: false,
                    showImage: true,
                });
                break;
        }
    };
    const multipleBgControl = applyFilters('zolo.blocks.postCategory.style.controls.multipleBg', [], props);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-category"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.postCategory.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />

                            <div className="zolo-custom-heading">{__('Show/Hide Elements', 'zoloblocks')}</div>

                            <ToggleControl
                                label={__('Count', 'zoloblocks')}
                                checked={showCount}
                                onChange={(showCount) => setAttributes({ showCount })}
                            />
                            {preset === 'style-1' && (
                                <ToggleControl
                                    label={__('Text', 'zoloblocks')}
                                    checked={showText}
                                    onChange={(showText) => setAttributes({ showText })}
                                />
                            )}

                            {preset === 'style-2' ||
                                (preset === 'style-3' && (
                                    <ToggleControl
                                        label={__('Image', 'zoloblocks')}
                                        checked={showImage}
                                        onChange={(showImage) => setAttributes({ showImage })}
                                    />
                                ))}

                            {preset === 'style-1' && (
                                <ToggleControl
                                    label={__('View All Button', 'zoloblocks')}
                                    checked={viewAllBtn}
                                    onChange={(viewAllBtn) => setAttributes({ viewAllBtn })}
                                />
                            )}
                        </ZoloPanelBody>

                        {(viewAllBtn || showText) && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                                {showText && (
                                    <>
                                        <InputControl
                                            label={__('Text Limit', 'zoloblocks')}
                                            value={itemTextLimit}
                                            onChange={(itemTextLimit) => setAttributes({ itemTextLimit })}
                                            type="number"
                                            min={1}
                                            max={99}
                                            labelPosition="edge"
                                            __unstableInputWidth="64px"
                                        />
                                    </>
                                )}

                                {viewAllBtn && (
                                    <>
                                        <div className="zolo-custom-heading">{__('View All Button', 'zoloblocks')}</div>
                                        <TextControl
                                            label={__('Button Text', 'zoloblocks')}
                                            value={viewAllBtnText}
                                            onChange={(viewAllBtnText) => setAttributes({ viewAllBtnText })}
                                        />
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zoloblocks')}
                                            value={viewAllBtnIcon}
                                            onChange={(value) => {
                                                setAttributes({
                                                    viewAllBtnIcon: value,
                                                });
                                            }}
                                        />
                                    </>
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
                            <QuerySettings attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={ITEM_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />

                                        <CardDivider />
                                        {/*from pro*/}
                                        {multipleBgControl && multipleBgControl.length > 0 && multipleBgControl}
                                        {!enableMultipleBG && (
                                            <>
                                                <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                            </>
                                        )}

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        {!enableMultipleBG && (
                                            <>
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={ITEM_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                        <BoxShadowControl
                                            controlName={ITEM_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {!enableMultipleBG && (
                                            <>
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={ITEM_HOVER_BG}
                                                    noMainBGImg={true}
                                                />
                                                <CardDivider />
                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={itemBorderHoverColor}
                                                    onChange={(color) => setAttributes({ itemBorderHoverColor: color })}
                                                />
                                            </>
                                        )}

                                        <BoxShadowControl
                                            controlName={ITEM_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <RangeControl
                                            className="zolo-flex-col-control"
                                            label={__('Opacity', 'zoloblocks')}
                                            value={itemHoverOpacity}
                                            onChange={(v) => setAttributes({ itemHoverOpacity: v })}
                                            min={0}
                                            max={1}
                                            step={0.1}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showImage && (
                            <ZoloPanelBody title={__('Thumbnail', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <SelectControl
                                    label={__('Resolution', 'zoloblocks')}
                                    value={catQuery?.catThumbnail}
                                    options={THUMBNAIL_SIZE}
                                    onChange={(catThumbnail) =>
                                        setAttributes({
                                            catQuery: { ...catQuery, catThumbnail },
                                        })
                                    }
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={THUMBNAIL_OVERLAY_BG} noMainBGImg={true} />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={NAME_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />

                                        {preset === 'style-3' && (
                                            <>
                                                <CardDivider />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={CAT_NAME_BG}
                                                    noMainBGImg={true}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={CAT_NAME_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <CardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={CAT_NAME_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <BoxShadowControl
                                                    controlName={CAT_NAME_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />

                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={CAT_NAME_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={nameHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    nameHoverColor: color,
                                                })
                                            }
                                        />

                                        {preset === 'style-3' && (
                                            <>
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={CAT_NAME_HOVER_BG}
                                                    noMainBGImg={true}
                                                />
                                                <CardDivider />
                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={catNameHoverBColor}
                                                    onChange={(color) => setAttributes({ catNameHoverBColor: color })}
                                                />

                                                <BoxShadowControl
                                                    controlName={CAT_NAME_HOVER_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {showCount && (
                            <ZoloPanelBody title={__('Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={countColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={COUNT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />

                                            <CardDivider />

                                            <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noMainBGImg={true} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={COUNT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={COUNT_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={COUNT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={COUNT_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={countHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countHoverColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={countHoverBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countHoverBgColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={countHoverBColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countHoverBColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showText && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        textColor: color,
                                                    })
                                                }
                                            />

                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TEXT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={TEXT_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={200}
                                                step={1}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        textHoverColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {viewAllBtn && (
                            <ZoloPanelBody title={__('View All Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={viewBtnColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        viewBtnColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={VIEW_BTN_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />

                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={viewBtnBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        viewBtnBgColor: color,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={VIEW_BTN_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />

                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={VIEW_BTN_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <BoxShadowControl
                                                controlName={VIEW_BTN_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={VIEW_BTN_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={viewBtnHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        viewBtnHoverColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={viewBtnBgHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        viewBtnBgHoverColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={viewBtnHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        viewBtnHoverBorderColor: color,
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
                            block="zolo/post-category"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
