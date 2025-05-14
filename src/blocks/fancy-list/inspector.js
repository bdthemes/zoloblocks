/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloCardDivider,
    HeaderTabs,
    ColorControl,
    TabPanelControl,
    TypographyDropdown,
    BorderControl,
    ResRangeControl,
    ResDimensionsControl,
    NormalBGControl,
    AdvancedOptions,
    ZoloPanelBody,
    IconicBtnGroup,
    ResCounterControl,
    BoxShadowControl,
    ResGapControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
    TITLE_SPACING,
    DESC_SPACING,
    ICON_BG,
    ICON_HBG,
    GAP,
    COLUMNS,
    GRID_GAP,
    ITEM_BG,
    ITEM_BG_HOVER,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    ITEM_BOX_HOVER_SHADOW,
    PRESETS_ALIGNMENT,
    ICON_SHADOW,
    ICON_SHADOW_HOVER,
    MEDIA_BOX_SHADOW,
    MEDIA_BOX_SHADOW_HOVER,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { HEADING } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        headingTag,
        titleColor,
        titleHColor,
        dscColor,
        desHcolor,
        mediaType,
        mediaTextColor,
        mediaTextBgColor,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        iconColor,
        iconHColor,
        iconHBColor,
        fancyDirection,
        itemBorderHoverColor,
        mediaTextHoverColor,
        mediaTextBgHoverColor,
        mediaBorderHoverColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'style-1':
                setAttributes({
                    imageToggle: false,
                    textToggle: false,
                });
                break;

            case 'style-2':
                setAttributes({
                    textToggle: false,
                    imageToggle: true,
                    mediaType: 'text',
                });
                break;

            case 'style-3':
                setAttributes({
                    imageToggle: false,
                    textToggle: true,
                });
                break;

            case 'style-4':
                setAttributes({
                    imageToggle: true,
                    mediaType: 'image',
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/fancy-list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Presets', 'zoloblocks')}
                                options={applyFilters('zolo.fancyList.presets', PRESETS)}
                                onChange={(v) => onPresetChange(v)}
                                value={preset}
                            />
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-4' && (
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Direction', 'zoloblocks')}
                                            value={fancyDirection}
                                            onChange={(value) =>
                                                setAttributes({
                                                    fancyDirection: value,
                                                })
                                            }
                                            options={PRESETS_ALIGNMENT}
                                        />
                                    </div>
                                )
                            }

                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={titleToggle}
                                onChange={() => {
                                    setAttributes({ titleToggle: !titleToggle });
                                }}
                            />
                            <ZoloToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={textToggle}
                                onChange={() => {
                                    setAttributes({ textToggle: !textToggle });
                                }}
                            />
                            <ZoloToggleControl
                                label={__('Media', 'zoloblocks')}
                                checked={imageToggle}
                                onChange={() => {
                                    setAttributes({ imageToggle: !imageToggle });
                                }}
                            />
                            <ZoloToggleControl
                                label={__('Enable Icon', 'zoloblocks')}
                                checked={iconToggle}
                                onChange={() => {
                                    setAttributes({ iconToggle: !iconToggle });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column', 'zoloblocks')}
                                controlName={COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 2,
                                    tabRange: 1,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl label={__('Gap', 'zoloblocks')} controlName={GRID_GAP} requiredProps={requiredProps} max={200} />
                        </ZoloPanelBody>
                        {imageToggle && (
                            <ZoloPanelBody title={__('Media', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Type', 'zoloblocks')}
                                        value={mediaType}
                                        onChange={(value) =>
                                            setAttributes({
                                                mediaType: value,
                                            })
                                        }
                                        options={[
                                            {
                                                label: __('Text', 'zoloblocks'),
                                                value: 'text',
                                            },
                                            {
                                                label: __('Image', 'zoloblocks'),
                                                value: 'image',
                                            },
                                        ]}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={ITEM_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_BOX_SHADOW}
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
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG_HOVER} noMainBGImg={false} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={itemBorderHoverColor}
                                            onChange={(v) => setAttributes({ itemBorderHoverColor: v })}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_BOX_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {titleToggle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleColor}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        titleColor: v,
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
                                                controlName={TITLE_SPACING}
                                                requiredProps={requiredProps}
                                                max={100}
                                            />
                                            <ZoloCardDivider />
                                            <ZoloSelectControl
                                                label={__('Tag', 'zoloblocks')}
                                                options={HEADING}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        headingTag: v,
                                                    })
                                                }
                                                value={headingTag}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleHColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    titleHColor: v,
                                                })
                                            }
                                        />
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {textToggle && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={dscColor}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        dscColor: v,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TEXT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={DESC_SPACING}
                                                requiredProps={requiredProps}
                                                max={100}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={desHcolor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    desHcolor: v,
                                                })
                                            }
                                        />
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {iconToggle && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={iconColor}
                                                onChange={(v) => setAttributes({ iconColor: v })}
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={ICON_WIDTH}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ICON_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl label={__('Border')} controlName={ICON_BORDER} requiredProps={requiredProps} />
                                            <BoxShadowControl
                                                controlName={ICON_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={ICON_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={iconHColor}
                                                onChange={(v) => setAttributes({ iconHColor: v })}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_HBG} noMainBGImg={true} />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={iconHBColor}
                                                onChange={(v) => setAttributes({ iconHBColor: v })}
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_SHADOW_HOVER}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {imageToggle && (
                            <ZoloPanelBody
                                title={mediaType === 'image' ? __('Media Image', 'zoloblocks') : __('Media Text', 'zoloblocks')}
                                stylePanel={true}
                                panelProps={props}
                            >
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            {mediaType === 'text' && (
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={mediaTextColor}
                                                        onChange={(v) => setAttributes({ mediaTextColor: v })}
                                                    />
                                                    <TypographyDropdown
                                                        label={__('Typography', 'zoloblocks')}
                                                        typoPrefixConstant={MEDIA_TYPOGRAPHY}
                                                        requiredProps={requiredProps}
                                                        max={36}
                                                    />
                                                    <ZoloCardDivider />
                                                    <ColorControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        color={mediaTextBgColor}
                                                        onChange={(v) => setAttributes({ mediaTextBgColor: v })}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={IMAGE_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                </>
                                            )}

                                            {mediaType === 'image' && (
                                                <>
                                                    <ResRangeControl
                                                        label={__('Width', 'zoloblocks')}
                                                        controlName={IMAGE_WIDTH}
                                                        requiredProps={requiredProps}
                                                        max={500}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Height', 'zoloblocks')}
                                                        controlName={IMAGE_HEIGHT}
                                                        requiredProps={requiredProps}
                                                        max={500}
                                                    />
                                                </>
                                            )}
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={IMAGE_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={MEDIA_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={IMAGE_BORDERRADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ZoloCardDivider />
                                            <ResRangeControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={GAP}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            {mediaType === 'text' && (
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={mediaTextHoverColor}
                                                        onChange={(v) => setAttributes({ mediaTextHoverColor: v })}
                                                    />

                                                    <ColorControl
                                                        label={__('Background Color', 'zoloblocks')}
                                                        color={mediaTextBgHoverColor}
                                                        onChange={(v) => setAttributes({ mediaTextBgHoverColor: v })}
                                                    />
                                                    <ZoloCardDivider />
                                                </>
                                            )}

                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={mediaBorderHoverColor}
                                                onChange={(v) => setAttributes({ mediaBorderHoverColor: v })}
                                            />
                                            <BoxShadowControl
                                                controlName={MEDIA_BOX_SHADOW_HOVER}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
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
                            block="zolo/fancy-list"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
