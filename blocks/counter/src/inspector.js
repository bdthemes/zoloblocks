/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
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
    ICON_SIZE,
    ICON_BACKGROUND,
    ICON_BOX_SHADOW,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    ICON_IMAGE_SIZE,
    PRESETS_ALIGNMENT,
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
        counterSuffix,
        titleText,
        iconType,
        counterIcon,
        iconTypeImage,
        titleTextColor,
        titleTag,
        resMode,
        iconColor,
        textColor,
        suffixColor,
        imageRes,
        counterDirection,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
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
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                options={applyFilters('zolo.counter.preset', PRESETS)}
                                onChange={(preset) => {
                                    setAttributes({
                                        preset,
                                    });
                                }}
                                value={preset}
                            />
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-1' && (
                                    <IconicBtnGroup
                                        label={__('Layout Direction', 'zoloblocks')}
                                        value={counterDirection}
                                        onChange={(value) =>
                                            setAttributes({
                                                counterDirection: value,
                                            })
                                        }
                                        options={PRESETS_ALIGNMENT}
                                    />
                                )
                            }
                            <ToggleControl
                                label={__('Show counter icon', 'zoloblocks')}
                                checked={hideIcon}
                                onChange={() => setAttributes({ hideIcon: !hideIcon })}
                            />
                            <ToggleControl
                                label={__('Show counter number', 'zoloblocks')}
                                checked={hideCounter}
                                onChange={() => setAttributes({ hideCounter: !hideCounter })}
                            />
                            {hideCounter && (
                                <ToggleControl
                                    label={__('Show number suffix', 'zoloblocks')}
                                    checked={hideSuffix}
                                    onChange={() => setAttributes({ hideSuffix: !hideSuffix })}
                                />
                            )}
                            <ToggleControl
                                label={__('Show counter title', 'zoloblocks')}
                                checked={hideTitle}
                                onChange={() => setAttributes({ hideTitle: !hideTitle })}
                            />
                            {preset === '' && (
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={CONTENT_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            )}
                            {preset === 'style-1' && (
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={CONTENT_V_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_ALIGN_OPTIONS}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {hideCounter && (
                                <>
                                    <TextControl
                                        label={__('Counter Number', 'zoloblocks')}
                                        value={counterNumber}
                                        onChange={(counterNumber) => setAttributes({ counterNumber })}
                                    />
                                    {hideSuffix && (
                                        <TextControl
                                            label={__('Number Suffix', 'zoloblocks')}
                                            value={counterSuffix}
                                            onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                                        />
                                    )}
                                </>
                            )}
                            {hideTitle && (
                                <TextControl
                                    label={__('Counter Title', 'zoloblocks')}
                                    value={titleText}
                                    onChange={(titleText) => setAttributes({ titleText })}
                                />
                            )}
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} panelProps={props}>
                                <>
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
                                            <BaseControl label={__('Photo', 'zoloblocks')}>
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
                                                            <Button className="zolo-image-upload-btn" onClick={open}>
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
                                                            </Button>
                                                        )}
                                                    />
                                                )}
                                            </BaseControl>
                                            <ImageSizes
                                                label={__('Image Resolution', 'zoloblocks')}
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
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                        label={__('Icon Size', 'zoloblocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                )}
                                {iconType === 'image' && (
                                    <ResRangeControl
                                        label={__('Image Size', 'zoloblocks')}
                                        controlName={ICON_IMAGE_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={200}
                                    />
                                )}
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={ICON_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
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
                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_BACKGROUND} noMainBGImg={true} />
                                <BoxShadowControl controlName={ICON_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            </ZoloPanelBody>
                        )}
                        {hideCounter && (
                            <ZoloPanelBody title={__('Counter', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Number Color', 'zoloblocks')}
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
                                    max={72}
                                />
                                {hideSuffix && (
                                    <ResRangeControl
                                        label={__('Gap', 'zoloblocks')}
                                        controlName={COUNTER_GAP}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                )}

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
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={COUNTER_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {hideTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <SelectControl
                                    label={__('Tag', 'zoloblocks')}
                                    options={NORMAL_HTML_TAG}
                                    onChange={(tag) => {
                                        setAttributes({
                                            titleTag: tag,
                                        });
                                    }}
                                    value={titleTag}
                                />
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
                                    max={72}
                                />
                                <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TITLE_MARGIN}
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
                            block="zolo/counter"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
