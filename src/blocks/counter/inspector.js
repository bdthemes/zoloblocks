/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloBaseControl,
    ZoloButton,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    ImageSizes,
    MaskControl,
    TabPanelControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    CONTENT_ALIGN,
    CONTENT_V_ALIGN,
    COUNTER_MARGIN,
    COUNTER_GAP,
    COUNTER_TEXT_SHADOW,
    COUNTER_TEXT_STROKE,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TITLE_BACKGROUND,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_PADDING,
    TITLE_BOX_SHADOW,
    TITLE_HOVER_BOX_SHADOW,
    ICON_SIZE,
    ICON_BACKGROUND,
    ICON_HOVER_BG,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_PADDING,
    ICON_IMAGE_SIZE,
    PRESETS_ALIGNMENT,
    ZOLO_CONTENT_LAYOUT,
    NUMBER_BG_MASK,
    ZOLO_CONTENT_LAYOUT_4,
    NUMBER_BACKGROUND,
    NUMBER_BG_SIZE,
    NUMBER_PADDING,
    NUMBER_BORDER,
    NUMBER_BOX_SHADOW,
    NUMBER_HOVER_BOX_SHADOW,
    NUMBER_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { NORMAL_HTML_TAG, ICON_BOX_OPTIONS, DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        hideIcon,
        hideTitle,
        hideCounter,
        hideSuffix,
        counterNumber,
        iconHoverColor,
        counterSuffix,
        titleText,
        iconType,
        counterIcon,
        iconTypeImage,
        titleTextColor,
        titleHoverColor,
        titleTag,
        resMode,
        iconColor,
        textColor,
        suffixColor,
        numberHoverColor,
        suffixHoverColor,
        imageRes,
        counterDirection,
        contentCounterTitle,
        maskImage,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case '':
                setAttributes({
                    hideIcon: true,
                });
                break;
            case 'style-3':
                setAttributes({
                    hideIcon: false,
                });
                break;
            case 'style-4':
                setAttributes({
                    hideIcon: false,
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/counter"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Preset', 'zoloblocks')}
                                options={applyFilters('zolo.counter.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                                value={preset}
                            />
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-1' && (
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Direction', 'zoloblocks')}
                                            value={counterDirection}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterDirection: value,
                                                })
                                            }
                                            options={PRESETS_ALIGNMENT}
                                        />
                                    </div>
                                )
                            }

                            <div className="zolo-custom-heading">{__('Show/hide Elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={hideIcon}
                                onChange={() => setAttributes({ hideIcon: !hideIcon })}
                            />

                            {/* <ZoloToggleControl
                                label={__('Number', 'zoloblocks')}
                                checked={hideCounter}
                                onChange={() => setAttributes({ hideCounter: !hideCounter })}
                            /> */}

                            <ZoloToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={hideTitle}
                                onChange={() => setAttributes({ hideTitle: !hideTitle })}
                            />
                            {hideTitle && preset !== 'style-3' && preset !== 'style-4' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Direction', 'zoloblocks')}
                                        value={contentCounterTitle}
                                        onChange={(value) =>
                                            setAttributes({
                                                contentCounterTitle: value,
                                            })
                                        }
                                        options={ZOLO_CONTENT_LAYOUT}
                                    />
                                </div>
                            )}

                            {hideTitle && preset === 'style-4' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Direction', 'zoloblocks')}
                                        value={contentCounterTitle}
                                        onChange={(value) =>
                                            setAttributes({
                                                contentCounterTitle: value,
                                            })
                                        }
                                        options={ZOLO_CONTENT_LAYOUT_4}
                                    />
                                </div>
                            )}
                            {preset !== 'style-1' && (
                                <>
                                    <ZoloCardDivider />
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={CONTENT_ALIGN}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />
                                </>
                            )}

                            {preset === 'style-1' && hideIcon && (
                                <>
                                    <ZoloCardDivider />
                                    <ResAlignmentControl
                                        label={__('Icon Alignment', 'zoloblocks')}
                                        controlName={CONTENT_V_ALIGN}
                                        requiredProps={requiredProps}
                                        alignOptions={FLEX_ALIGN_OPTIONS}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {hideCounter && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Number', 'zoloblocks')}
                                    </div>
                                    <ZoloTextControl
                                        label={__('Number', 'zoloblocks')}
                                        value={counterNumber}
                                        onChange={(counterNumber) => setAttributes({ counterNumber })}
                                        placeholder={__('1000', 'zoloblocks')}
                                    />
                                    {hideSuffix && (
                                        <ZoloTextControl
                                            label={__('Suffix', 'zoloblocks')}
                                            value={counterSuffix}
                                            onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                                        />
                                    )}
                                    {hideCounter && (
                                        <ZoloToggleControl
                                            label={__('Suffix', 'zoloblocks')}
                                            checked={hideSuffix}
                                            onChange={() => setAttributes({ hideSuffix: !hideSuffix })}
                                        />
                                    )}
                                </>
                            )}
                            {hideTitle && (
                                <>
                                    <div className="zolo-custom-heading">{__('Title', 'zoloblocks')}</div>
                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={titleText}
                                        onChange={(titleText) => setAttributes({ titleText })}
                                    />
                                    <ZoloSelectControl
                                        label={__('Tag', 'zoloblocks')}
                                        options={NORMAL_HTML_TAG}
                                        onChange={(tag) => {
                                            setAttributes({
                                                titleTag: tag,
                                            });
                                        }}
                                        value={titleTag}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} panelProps={props}>
                                <>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Type', 'zoloblocks')}
                                            value={iconType}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconType: value,
                                                })
                                            }
                                            options={ICON_BOX_OPTIONS}
                                        />
                                    </div>
                                    {iconType === 'icon' && (
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zoloblocks')}
                                            value={counterIcon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterIcon: value,
                                                })
                                            }
                                        />
                                    )}

                                    {iconType === 'image' && (
                                        <>
                                            <ZoloBaseControl label={__('Photo', 'zoloblocks')} className="zolo-flex-col-control">
                                                {iconTypeImage ? (
                                                    <ImageAvatar
                                                        imageUrl={iconTypeImage && iconTypeImage.url}
                                                        onDeleteImage={() =>
                                                            setAttributes({
                                                                iconTypeImage: null,
                                                            })
                                                        }
                                                        imageId={iconTypeImage && iconTypeImage.id}
                                                        onEditImage={(media) => {
                                                            setAttributes({
                                                                iconTypeImage: media,
                                                            });
                                                        }}
                                                    />
                                                ) : (
                                                    <MediaUpload
                                                        onSelect={(media) => {
                                                            setAttributes({
                                                                iconTypeImage: {
                                                                    id: media.id,
                                                                    url: media.url,
                                                                    alt: media.alt,
                                                                    sizes: media.sizes,
                                                                    caption: media.caption,
                                                                },
                                                            });
                                                        }}
                                                        allowedTypes={['image']}
                                                        value={iconTypeImage && iconTypeImage.id}
                                                        render={({ open }) => (
                                                            <ZoloButton className="zolo-image-upload-btn" onClick={open}>
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                >
                                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                                </svg>
                                                                {__(' Upload Photo', 'zoloblocks')}
                                                            </ZoloButton>
                                                        )}
                                                    />
                                                )}
                                            </ZoloBaseControl>
                                            <ImageSizes
                                                label={__('Resolution', 'zoloblocks')}
                                                value={imageRes}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        imageRes: value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}
                                </>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CONTAINER_BACKGROUND}
                                            noMainBGImg={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CONTAINER_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            {iconType === 'icon' && (
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconColor: value,
                                                        })
                                                    }
                                                />
                                            )}
                                            {iconType === 'icon' && (
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                            )}
                                            {iconType === 'image' && (
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICON_IMAGE_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={200}
                                                />
                                            )}
                                            <ZoloCardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICON_BACKGROUND}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ICON_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={ICON_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={ICON_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={ICON_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            {iconType === 'icon' && (
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconHoverColor: value,
                                                        })
                                                    }
                                                />
                                            )}
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICON_HOVER_BG} noMainBGImg={true} />
                                            <BoxShadowControl
                                                controlName={ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={true}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {hideCounter && (
                            <ZoloPanelBody title={__('Number', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                {preset !== 'style-4' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={textColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            textColor: value,
                                                        })
                                                    }
                                                />
                                                {hideSuffix && (
                                                    <ColorControl
                                                        label={__('Suffix Color', 'zoloblocks')}
                                                        color={suffixColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                suffixColor: value,
                                                            })
                                                        }
                                                    />
                                                )}

                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                />
                                                <TextShadowControl
                                                    controlName={COUNTER_TEXT_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                <TextStrokeControl
                                                    controlName={COUNTER_TEXT_STROKE}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                {hideSuffix && (
                                                    <>
                                                        <ResRangeControl
                                                            label={__('Space Between', 'zoloblocks')}
                                                            controlName={COUNTER_GAP}
                                                            requiredProps={requiredProps}
                                                            min={0}
                                                            max={100}
                                                            step={1}
                                                        />
                                                    </>
                                                )}
                                                <ZoloCardDivider />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={COUNTER_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                                <BoxShadowControl
                                                    controlName={NUMBER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={numberHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            numberHoverColor: value,
                                                        })
                                                    }
                                                />
                                                {hideSuffix && (
                                                    <ColorControl
                                                        label={__('Suffix Color', 'zoloblocks')}
                                                        color={suffixHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                suffixHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                )}
                                                <BoxShadowControl
                                                    controlName={NUMBER_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={true}
                                                />
                                            </>
                                        }
                                    />
                                )}

                                {preset === 'style-4' && (
                                    <>
                                        <TabPanelControl
                                            options={[
                                                { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                                { label: __('Mask', 'zoloblocks'), value: 'hover' },
                                            ]}
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={textColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                textColor: value,
                                                            })
                                                        }
                                                    />
                                                    {hideSuffix && (
                                                        <ColorControl
                                                            label={__('Suffix Color', 'zoloblocks')}
                                                            color={suffixColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    suffixColor: value,
                                                                })
                                                            }
                                                        />
                                                    )}
                                                    <TypographyDropdown
                                                        label={__('Typography', 'zoloblocks')}
                                                        typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <TextShadowControl
                                                        controlName={COUNTER_TEXT_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <TextStrokeControl
                                                        controlName={COUNTER_TEXT_STROKE}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    {hideSuffix && (
                                                        <>
                                                            <ResRangeControl
                                                                label={__('Space Between', 'zoloblocks')}
                                                                controlName={COUNTER_GAP}
                                                                requiredProps={requiredProps}
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                            />
                                                        </>
                                                    )}
                                                    <ZoloCardDivider />
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={NUMBER_BACKGROUND}
                                                        noMainBGImg={true}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Background Size', 'zoloblocks')}
                                                        controlName={NUMBER_BG_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={NUMBER_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Margin', 'zoloblocks')}
                                                        controlName={COUNTER_MARGIN}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={NUMBER_BORDER}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <BoxShadowControl
                                                        controlName={NUMBER_BOX_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={NUMBER_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <MaskControl controlName={NUMBER_BG_MASK} requiredProps={requiredProps} />
                                                </>
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {hideTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        titleTextColor: value,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <TextShadowControl
                                                controlName={TITLE_TEXT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <TextStrokeControl
                                                controlName={TITLE_TEXT_STROKE}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ZoloCardDivider />

                                            {preset === 'style-3' && (
                                                <>
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={TITLE_BACKGROUND}
                                                        noMainBGImg={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={TITLE_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Margin', 'zoloblocks')}
                                                        controlName={TITLE_MARGIN}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={TITLE_BORDER}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={TITLE_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            )}
                                            {preset !== 'style-3' && (
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={TITLE_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                            )}
                                            <BoxShadowControl
                                                controlName={TITLE_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        titleHoverColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={TITLE_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={true}
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
                            block="zolo/counter"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
