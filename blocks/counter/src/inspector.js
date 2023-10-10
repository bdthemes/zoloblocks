/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ICON_BOX_OPTIONS } from '../../../src/global/constants';
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
    TabPanelControl,
    IconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    //OLD CONSTANTS
    TITLE_TAG,
    COUNTER_MARGIN,
    COUNTER_GAP,
    COUNTER_TEXT_SHADOW,
    COUNTER_TEXT_STROKE,
    PRESETS,
    ICON_SIZE,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { COUNTER_CONTENT_ALIGNS, FLEX_ALIGN_OPTIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        hideIcon,
        hideTitle,
        hideCounter,
        counterNumber,
        counterSuffix,
        titleText,
        iconType,
        counterIcon,
        iconTypeImage,

        // old settings
        titleTag,
        resMode,
        iconAlignment,
        iconColor,
        iconBorderHoverColor,
        iconHoverColor,
        iconBackgroundColor,
        containerBorderHoverColor,
        iconBackgroundHoverColor,
        textColor,
        textHoverColor,
    } = attributes;
    const resRequiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Hide Icon', 'zolo-blocks')}
                                checked={hideIcon}
                                onChange={() => setAttributes({ hideIcon: !hideIcon })}
                            />
                            <ToggleControl
                                label={__('Hide Counter', 'zolo-blocks')}
                                checked={hideCounter}
                                onChange={() => setAttributes({ hideCounter: !hideCounter })}
                            />
                            <ToggleControl
                                label={__('Hide Title', 'zolo-blocks')}
                                checked={hideTitle}
                                onChange={() => setAttributes({ hideTitle: !hideTitle })}
                            />
                        </PanelBody>
                        <PanelBody title={__('Counter', 'zolo-blocks')} initialOpen={false}>
                            {hideCounter && (
                                <>
                                    <TextControl
                                        label={__('Counter Number', 'zolo-blocks')}
                                        value={counterNumber}
                                        onChange={(counterNumber) => setAttributes({ counterNumber })}
                                    />
                                    <TextControl
                                        label={__('Counter Suffix', 'zolo-blocks')}
                                        value={counterSuffix}
                                        onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                                    />
                                </>
                            )}
                            {hideTitle && (
                                <TextControl
                                    label={__('Counter Title', 'zolo-blocks')}
                                    value={titleText}
                                    onChange={(titleText) => setAttributes({ titleText })}
                                />
                            )}
                        </PanelBody>
                        {hideIcon && (
                            <PanelBody title={__('Icon', 'zolo-blocks')} initialOpen={false}>
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
                                    {iconType == 'icon' && (
                                        <IconPicker
                                            value={counterIcon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterIcon: value,
                                                })
                                            }
                                        />
                                    )}

                                    {iconType == 'image' && (
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
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            <NormalBGControl resRequiredProps={resRequiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />
                            <IconicBtnGroup
                                label={__('Icon Alignment', 'zolo-blocks')}
                                value={iconAlignment}
                                onChange={(value) =>
                                    setAttributes({
                                        iconAlignment: value,
                                    })
                                }
                                options={COUNTER_CONTENT_ALIGNS}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTAINER_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={CONTAINER_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Border Hover Color', 'zolo-blocks')}
                                            color={containerBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    containerBorderHoverColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_HOVER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </PanelBody>

                        {iconType == 'icon' && (
                            <PanelBody title={__('Media', 'zolo-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={ICON_SIZE}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                {(preset == 'style-2' || preset == 'style-3') && (
                                    <IconicBtnGroup
                                        label={__('Icon Alignment', 'zolo-blocks')}
                                        value={iconAlignment}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconAlignment: value,
                                            })
                                        }
                                        options={FLEX_ALIGN_OPTIONS}
                                    />
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={ICON_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ICON_PADDING}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={ICON_BORDER}
                                                resRequiredProps={resRequiredProps}
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={iconBackgroundColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBackgroundColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_BOX_SHADOW}
                                                resRequiredProps={resRequiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Border Hover Color', 'zolo-blocks')}
                                                color={iconBorderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBorderHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={iconBackgroundHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBackgroundHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_HOVER_BOX_SHADOW}
                                                resRequiredProps={resRequiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                        {iconType == 'image' && (
                            <PanelBody title={__('Media', 'zolo-blocks')} initialOpen={false}>
                                <>
                                    <ResRangeControl
                                        label={__('Image Size', 'zolo-blocks')}
                                        controlName={ICON_IMAGE_SIZE}
                                        resRequiredProps={resRequiredProps}
                                    />
                                    {(preset == 'style-2' || preset == 'style-3') && (
                                        <IconicBtnGroup
                                            label={__('Image Alignment', 'zolo-blocks')}
                                            value={iconAlignment}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconAlignment: value,
                                                })
                                            }
                                            options={FLEX_ALIGN_OPTIONS}
                                        />
                                    )}
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={IMAGE_BORDER}
                                        resRequiredProps={resRequiredProps}
                                    />
                                    <ResRangeControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={ICON_IMAGE_BORDER_RADIUS}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </>
                            </PanelBody>
                        )}
                        <PanelBody title={__('Counter', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={COUNTER_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResRangeControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={COUNTER_GAP}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <TextShadowControl
                                controlName={COUNTER_TEXT_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                            <TextStrokeControl
                                controlName={COUNTER_TEXT_STROKE}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Title Tag', 'zolo-blocks')}
                                options={TITLE_TAG}
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
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={COUNTER_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                            <TextShadowControl
                                controlName={COUNTER_TEXT_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                            <TextStrokeControl
                                controlName={COUNTER_TEXT_STROKE}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={textHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={false}>
                            <p>Extra Options</p>
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
