/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, BaseControl, Button } from '@wordpress/components';
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
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    CONTENT_ALIGN,
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
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { HEADING, ICON_BOX_OPTIONS, DEFAULT_ALIGNS } from '../../../src/global/constants';

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
        selectedPanel,
        selectedTab,
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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Preset', 'zolo-blocks')}
                                options={PRESETS}
                                onChange={(preset) => {
                                    setAttributes({
                                        preset,
                                    });
                                }}
                                value={preset}
                            />
                            <ToggleControl
                                label={__('Show counter icon', 'zolo-blocks')}
                                checked={hideIcon}
                                onChange={() => setAttributes({ hideIcon: !hideIcon })}
                            />
                            <ToggleControl
                                label={__('Show counter number', 'zolo-blocks')}
                                checked={hideCounter}
                                onChange={() => setAttributes({ hideCounter: !hideCounter })}
                            />
                            {hideCounter && (
                                <ToggleControl
                                    label={__('Show number suffix', 'zolo-blocks')}
                                    checked={hideSuffix}
                                    onChange={() => setAttributes({ hideSuffix: !hideSuffix })}
                                />
                            )}
                            <ToggleControl
                                label={__('Show counter title', 'zolo-blocks')}
                                checked={hideTitle}
                                onChange={() => setAttributes({ hideTitle: !hideTitle })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={CONTENT_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {hideCounter && (
                                <>
                                    <TextControl
                                        label={__('Counter Number', 'zolo-blocks')}
                                        value={counterNumber}
                                        onChange={(counterNumber) => setAttributes({ counterNumber })}
                                    />
                                    {hideSuffix && (
                                        <TextControl
                                            label={__('Number Suffix', 'zolo-blocks')}
                                            value={counterSuffix}
                                            onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                                        />
                                    )}
                                </>
                            )}
                            {hideTitle && (
                                <TextControl
                                    label={__('Counter Title', 'zolo-blocks')}
                                    value={titleText}
                                    onChange={(titleText) => setAttributes({ titleText })}
                                />
                            )}
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Icon', 'zolo-blocks')} panelProps={props}>
                                <>
                                    <IconicBtnGroup
                                        label={__('Type', 'zolo-blocks')}
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
                                            label={__('Select Icon', 'zolo-blocks')}
                                            value={counterIcon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterIcon: value,
                                                })
                                            }
                                        />
                                    )}

                                    {iconType === 'image' && (
                                        <BaseControl label={__('Photo', 'zolo-blocks')}>
                                            {iconTypeImage ? (
                                                <ImageAvatar
                                                    imageUrl={iconTypeImage && iconTypeImage.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            iconTypeImage: null,
                                                        })
                                                    }
                                                    imageId={iconTypeImage && iconTypeImage.id}
                                                    onEditImage={(url, id) => {
                                                        setAttributes({
                                                            iconTypeImage: {
                                                                url,
                                                                id,
                                                            },
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => {
                                                        setAttributes({
                                                            iconTypeImage: media,
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
                                                            {__(' Upload Photo', 'zolo-blocks')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </BaseControl>
                                    )}
                                </>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                        </ZoloPanelBody>
                        {hideIcon && (
                            <ZoloPanelBody title={__('Media', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                {iconType === 'icon' && (
                                    <ResRangeControl
                                        label={__('Icon Size', 'zolo-blocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={500}
                                        step={1}
                                    />
                                )}
                                {iconType === 'image' && (
                                    <ResRangeControl
                                        label={__('Image Size', 'zolo-blocks')}
                                        controlName={ICON_IMAGE_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={500}
                                    />
                                )}
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ICON_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <BoxShadowControl controlName={ICON_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={ICON_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {iconType === 'icon' && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={iconColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconColor: value,
                                            })
                                        }
                                    />
                                )}
                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_BACKGROUND} noMainBGImg={true} />
                            </ZoloPanelBody>
                        )}
                        {hideCounter && (
                            <ZoloPanelBody title={__('Counter', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Number Color', 'zolo-blocks')}
                                    color={textColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            textColor: value,
                                        })
                                    }
                                />
                                {hideSuffix && (
                                    <ColorControl
                                        label={__('Suffix Color', 'zolo-blocks')}
                                        color={suffixColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                suffixColor: value,
                                            })
                                        }
                                    />
                                )}
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                {hideSuffix && (
                                    <ResRangeControl
                                        label={__('Gap', 'zolo-blocks')}
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
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={COUNTER_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {hideTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={titleTextColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            titleTextColor: value,
                                        })
                                    }
                                />
                                <SelectControl
                                    label={__('Tag', 'zolo-blocks')}
                                    options={HEADING}
                                    onChange={(tag) => {
                                        setAttributes({
                                            titleTag: tag,
                                        });
                                    }}
                                    value={titleTag}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
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
