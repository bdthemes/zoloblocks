/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
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
    PRESETS_ALIGNMENT,
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
                    <Fragment>
                        <ZoloPanelBody title={__('General', 'zolo-block')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-block')}
                                options={applyFilters('zolo.fancyList.presets', PRESETS)}
                                onChange={(v) => onPresetChange(v)}
                                value={preset}
                            />
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-4' && (
                                    <IconicBtnGroup
                                        label={__('Layout Direction', 'zoloblocks')}
                                        value={fancyDirection}
                                        onChange={(value) =>
                                            setAttributes({
                                                fancyDirection: value,
                                            })
                                        }
                                        options={PRESETS_ALIGNMENT}
                                    />
                                )
                            }
                            <ToggleControl
                                label={__('Show title', 'zolo-block')}
                                checked={titleToggle}
                                onChange={() => {
                                    setAttributes({ titleToggle: !titleToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Show description', 'zolo-block')}
                                checked={textToggle}
                                onChange={() => {
                                    setAttributes({ textToggle: !textToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Show media', 'zolo-block')}
                                checked={imageToggle}
                                onChange={() => {
                                    setAttributes({ imageToggle: !imageToggle });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Icon', 'zolo-block')}
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
                                max={3}
                                defaults={{
                                    deskRange: 2,
                                    tabRange: 1,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={GRID_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                        {imageToggle && (
                            <ZoloPanelBody title={__('Media', 'zolo-block')} panelProps={props}>
                                <div className='zolo-flex-row-control-tab'>
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
                    </Fragment>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
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
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                                        <BoxShadowControl
                                            controlName={ITEM_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG_HOVER} noMainBGImg={false} />
                                }
                            />
                        </ZoloPanelBody>
                        {titleToggle && (
                            <ZoloPanelBody title={__('Title', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-block')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zolo-block')}
                                    options={HEADING}
                                    onChange={(v) =>
                                        setAttributes({
                                            headingTag: v,
                                        })
                                    }
                                    value={headingTag}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-block')}
                                    controlName={TITLE_SPACING}
                                    requiredProps={requiredProps}
                                    max={100}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={titleColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    titleColor: v,
                                                })
                                            }
                                        />
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-block')}
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
                            <ZoloPanelBody title={__('Description', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-block')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-block')}
                                    controlName={DESC_SPACING}
                                    requiredProps={requiredProps}
                                    max={100}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={dscColor}
                                            onChange={(v) =>
                                                setAttributes({
                                                    dscColor: v,
                                                })
                                            }
                                        />
                                    }
                                    hoverComponents={
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-block')}
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
                            <ZoloPanelBody title={__('Icon', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <ResRangeControl label={__('Size', 'zolo-block')} controlName={ICON_WIDTH} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border')}
                                    controlName={ICON_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Color', 'zolo-block')}
                                            color={iconHBColor}
                                            onChange={(v) => setAttributes({ iconHBColor: v })}
                                        />
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-block')}
                                    controlName={ICON_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-block')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-block')}
                                                color={iconColor}
                                                onChange={(v) => setAttributes({ iconColor: v })}
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-block')}
                                                color={iconHColor}
                                                onChange={(v) => setAttributes({ iconHColor: v })}
                                            />

                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_HBG} noMainBGImg={true} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {imageToggle && (
                            <ZoloPanelBody
                                title={mediaType === 'image' ? __('Image', 'zolo-block') : __('Text', 'zolo-block')}
                                stylePanel={true}
                                panelProps={props}
                            >
                                {mediaType === 'text' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={MEDIA_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-block')}
                                            color={mediaTextColor}
                                            onChange={(v) => setAttributes({ mediaTextColor: v })}
                                        />
                                        <ColorControl
                                            label={__('Background Color', 'zolo-block')}
                                            color={mediaTextBgColor}
                                            onChange={(v) => setAttributes({ mediaTextBgColor: v })}
                                        />
                                    </>
                                )}
                                <ResRangeControl
                                    label={__('Width', 'zolo-block')}
                                    controlName={IMAGE_WIDTH}
                                    requiredProps={requiredProps}
                                    max={500}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-block')}
                                    controlName={IMAGE_HEIGHT}
                                    requiredProps={requiredProps}
                                    max={500}
                                />
                                <ResRangeControl label={__('Gap', 'zolo-block')} controlName={GAP} requiredProps={requiredProps} />
                                <BorderControl
                                    label={__('Border', 'zolo-block')}
                                    controlName={IMAGE_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-block')}
                                    controlName={IMAGE_BORDERRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-block')}
                                    controlName={IMAGE_PADDING}
                                    requiredProps={requiredProps}
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
