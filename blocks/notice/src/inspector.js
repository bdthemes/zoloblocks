/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, TextareaControl, BaseControl, Button, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

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
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    LinkControl,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
    RangeResetControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    TITLE_MARGIN,
    DESCRIPTION_MARGIN,
    PRESETS,
    ICON_SIZE,
    BUTTON_ICON_SIZE,
    ICON_TEXT_SPACING,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    BUTTON_BG_COLOR,
    BUTTON_BG_HOVER_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
    CONTENT_ALIGNMENT,
    ITEM_BG,
    ITEM_HOVER_BG,
    ITEM_BORDER,
    ITEM_BRADIUS,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BOX_SHADOW,
    ITEM_HBOX_SHADOW,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_RADIUS,
    RIBBON_BG,
    RIBBON_POSITIONS,
    PRESETS_ALIGNMENT,
    ICON_WRAPPER_BG_COLOR,
    ANIMATION_TYPES,
    ANIMATION_POSITIONS_ONE,
    ANIMATION_POSITIONS_TWO,
    //Animation
    ICON_ANIMATION_BG,
    ICON_ANIMATION_SIZE,
    ICON_ANIMATION_RADIUS,
    ICON_ANIMATION_THICKNESS,
} from './constants';

import { BUTTON_TYPOGRAPHY, TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, RIBBON_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, ICON_BOX_OPTIONS, FLEX_ALIGN_OPTIONS, POSITIONS, HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        itemHBorderColor,
        titleTag,
        resMode,
        showButtonIcon,
        showButtonText,
        mainIcon,
        showMainIcon,
        iconTypeImage,
        buttonIcon,
        iconBoxTitle,
        iconBoxDescription,
        iconAlignment,
        iconColor,
        iconBorderHoverColor,
        iconHoverColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        textColor,
        textHoverColor,
        descColor,
        descHoverColor,
        showHeading,
        showDesc,
        showButton,
        iconType,
        imageRes,
        iconBoxDirection,
        // animation
        animationType,
        animationPositionOne,
        animationPositionTwo,
        //notice
        dismissible,
        showAfterDismiss,
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
                block="zolo/advanced-icon-box"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Layouts', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.advancedIconBox.presets', PRESETS)}
                                onChange={(value) => {
                                    setAttributes({
                                        preset: value,
                                    });

                                    if (value === 'style-3') {
                                        setAttributes({
                                            iconType: 'image',
                                        });
                                    }
                                }}
                            />
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-2' && (
                                    <IconicBtnGroup
                                        label={__('Layout Direction', 'zoloblocks')}
                                        value={iconBoxDirection}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconBoxDirection: value,
                                            })
                                        }
                                        options={PRESETS_ALIGNMENT}
                                    />
                                )
                            }

                            <ToggleControl
                                label={__('Dismisible', 'zoloblocks')}
                                checked={dismissible}
                                onChange={() => setAttributes({ dismissible: !dismissible })}
                            />
                            <ToggleControl
                                label={__('Show After Dismiss', 'zoloblocks')}
                                checked={showAfterDismiss}
                                onChange={() => setAttributes({ showAfterDismiss: !showAfterDismiss })}
                            />
                            <ResAlignmentControl
                                label={__('Content Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        {preset !== 'style-3' && (
                            <>
                                {applyFilters(
                                    'zolo.advancedIconBox.animation',
                                    <ZoloPanelBody title={__('Animation', 'zoloblocks')} panelProps={props} isPro={true} isDisabled={true}>
                                        <SelectControl
                                            label={__('Type', 'zoloblocks')}
                                            value={animationType}
                                            options={ANIMATION_TYPES}
                                            onChange={(value) => {
                                                setAttributes({
                                                    animationType: value,
                                                });

                                                if (value === 'style-1') {
                                                    setAttributes({
                                                        animationPositionOne: 'top-right',
                                                    });
                                                } else if (value === 'style-2') {
                                                    setAttributes({
                                                        animationPositionTwo: 'left',
                                                    });
                                                }
                                            }}
                                        />
                                        {animationType === 'style-1' && (
                                            <SelectControl
                                                label={__('Position', 'zoloblocks')}
                                                value={animationPositionOne}
                                                options={ANIMATION_POSITIONS_ONE}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        animationPositionOne: value,
                                                    })
                                                }
                                            />
                                        )}

                                        {animationType === 'style-2' && (
                                            <SelectControl
                                                label={__('Position', 'zoloblocks')}
                                                value={animationPositionTwo}
                                                options={ANIMATION_POSITIONS_TWO}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        animationPositionTwo: value,
                                                    })
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            <>
                                <IconicBtnGroup
                                    label={__('Icon Type', 'zoloblocks')}
                                    value={iconType}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconType: value,
                                        })
                                    }
                                    options={ICON_BOX_OPTIONS}
                                />
                                {iconType === 'icon' && (
                                    <Fragment>
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zoloblocks')}
                                            value={mainIcon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    mainIcon: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}

                                {iconType === 'image' && (
                                    <>
                                        <BaseControl label={__('Image', 'zoloblocks')}>
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

                            <SelectControl
                                label={__('Title Tag', 'zoloblocks')}
                                options={HEADING}
                                onChange={(tag) => {
                                    setAttributes({
                                        titleTag: tag,
                                    });
                                }}
                                value={titleTag}
                            />

                            <TextControl
                                label={__('Title', 'zoloblocks')}
                                onChange={(title) =>
                                    setAttributes({
                                        iconBoxTitle: title,
                                    })
                                }
                                value={iconBoxTitle}
                                placeholder={__('Title Goes Here..', 'zoloblocks')}
                            />
                            <TextareaControl
                                label={__('Description', 'zoloblocks')}
                                value={iconBoxDescription}
                                onChange={(desc) =>
                                    setAttributes({
                                        iconBoxDescription: desc,
                                    })
                                }
                                placeholder={__('Description goes here..', 'zoloblocks')}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} panelProps={props} stylePanel={true} firstOpen={true}>
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={ITEM_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Color', 'zoloblocks')}
                                        color={itemHBorderColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                itemHBorderColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                                        <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={false} />
                                        <BoxShadowControl
                                            controlName={ITEM_HBOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody
                            title={iconType === 'image' ? __('Image', 'zoloblocks') : __('Icon', 'zoloblocks')}
                            panelProps={props}
                            stylePanel={true}
                        >
                            {preset === 'style-3' && (
                                <NormalBGControl requiredProps={requiredProps} controlName={ICON_WRAPPER_BG_COLOR} noMainBGImg={true} />
                            )}
                            {iconType === 'image' && (
                                <>
                                    <ResRangeControl
                                        label={__('Image Size', 'zoloblocks')}
                                        controlName={ICON_IMAGE_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={500}
                                    />
                                    {preset == 'style-2' && (
                                        <IconicBtnGroup
                                            label={__('Image Alignment', 'zoloblocks')}
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
                                        label={__('Border', 'zoloblocks')}
                                        controlName={IMAGE_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={ICON_IMAGE_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            )}
                            {iconType == 'icon' && (
                                <>
                                    <ResRangeControl
                                        label={__('Icon Size', 'zoloblocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    {preset == 'style-2' && (
                                        <IconicBtnGroup
                                            label={__('Icon Alignment', 'zoloblocks')}
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
                                        label={__('Border', 'zoloblocks')}
                                        controlName={ICON_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={iconBorderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBorderHoverColor: value,
                                                    })
                                                }
                                            />
                                        }
                                    />
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
                                </>
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={ICON_MARGIN}
                                requiredProps={requiredProps}
                            />
                            {iconType == 'icon' && (
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={iconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={iconBackgroundColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBackgroundColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={iconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={iconBackgroundHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBackgroundHoverColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props} stylePanel={true}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TITLE_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />

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
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Description', 'zoloblocks')} panelProps={props} stylePanel={true}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={DESCRIPTION_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={DESCRIPTION_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={descColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    descColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={descHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    descHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {preset !== 'style-3' && (
                            <>
                                {applyFilters(
                                    'zolo.advancedIconBox.animationStyle',
                                    <ZoloPanelBody
                                        title={__('Animation', 'zoloblocks')}
                                        panelProps={props}
                                        stylePanel={true}
                                        isPro={true}
                                        isDisabled={true}
                                    >
                                        {animationType === 'style-1' && (
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={ICON_ANIMATION_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                        )}

                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_ANIMATION_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_ANIMATION_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        {animationType === 'style-2' && (
                                            <ResRangeControl
                                                label={__('Thickness', 'zoloblocks')}
                                                controlName={ICON_ANIMATION_THICKNESS}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/notice"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
