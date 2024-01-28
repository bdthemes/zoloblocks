/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, TextareaControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

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
} from './constants';

import { BUTTON_TYPOGRAPHY, TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, ICON_BOX_OPTIONS, FLEX_ALIGN_OPTIONS, POSITIONS, HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        itemHBorderColor,
        titleTag,
        resMode,
        showButtonIcon,
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
        btnColor,
        btnHoverColor,
        btnHoverBorderColor,
        buttonText,
        buttonLink,
        globalLink,
        iconPosition,
        imageRes,
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
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Icon', 'zolo-blocks')}
                                checked={showMainIcon}
                                onChange={() =>
                                    setAttributes({
                                        showMainIcon: !showMainIcon,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Heading', 'zolo-blocks')}
                                checked={showHeading}
                                onChange={() =>
                                    setAttributes({
                                        showHeading: !showHeading,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Description', 'zolo-blocks')}
                                checked={showDesc}
                                onChange={() =>
                                    setAttributes({
                                        showDesc: !showDesc,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Button', 'zolo-blocks')}
                                checked={showButton}
                                onChange={() =>
                                    setAttributes({
                                        showButton: !showButton,
                                    })
                                }
                            />
                            {showButton && (
                                <>
                                    <ToggleControl
                                        label={__('Show Button Icon', 'zolo-blocks')}
                                        checked={showButtonIcon}
                                        onChange={() =>
                                            setAttributes({
                                                showButtonIcon: !showButtonIcon,
                                            })
                                        }
                                    />
                                    <ToggleControl
                                        label={__('Use Link as Global', 'zolo-blocks')}
                                        checked={globalLink}
                                        onChange={() =>
                                            setAttributes({
                                                globalLink: !globalLink,
                                            })
                                        }
                                    />
                                </>
                            )}

                            <ResAlignmentControl
                                label={__('Content Alignment', 'zolo-blocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {showMainIcon && (
                                <>
                                    <IconicBtnGroup
                                        label={__('Icon Type', 'zolo-blocks')}
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
                                                label={__('Select Icon', 'zolo-blocks')}
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
                                            <BaseControl label={__('Image', 'zolo-blocks')}>
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
                                                                {__(' Upload Photo', 'zolo-blocks')}
                                                            </Button>
                                                        )}
                                                    />
                                                )}
                                            </BaseControl>
                                            <ImageSizes
                                                label={__('Image Resolution', 'zolo-blocks')}
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
                            )}

                            <TextControl
                                label={__('Title', 'zolo-blocks')}
                                onChange={(title) =>
                                    setAttributes({
                                        iconBoxTitle: title,
                                    })
                                }
                                value={iconBoxTitle}
                                placeholder={__('Title Goes Here..', 'zolo-blocks')}
                            />
                            <TextareaControl
                                label={__('Description', 'zolo-blocks')}
                                value={iconBoxDescription}
                                onChange={(desc) =>
                                    setAttributes({
                                        iconBoxDescription: desc,
                                    })
                                }
                                placeholder={__('Description goes here..', 'zolo-blocks')}
                            />

                            {showButton && (
                                <>
                                    <TextControl
                                        label={__('Button Text', 'zolo-blocks')}
                                        onChange={(btnText) =>
                                            setAttributes({
                                                buttonText: btnText,
                                            })
                                        }
                                        value={buttonText}
                                        placeholder={__('Read More', 'zolo-blocks')}
                                    />
                                    <LinkControl
                                        label={__('Button URL', 'zolo-blocks')}
                                        value={buttonLink}
                                        onChange={(value) =>
                                            setAttributes({
                                                buttonLink: value,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {showButton && showButtonIcon && (
                            <ZoloPanelBody title={__('Button Icon', 'zolo-blocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zolo-blocks')}
                                    value={buttonIcon}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonIcon: value,
                                        })
                                    }
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zolo-blocks')}
                                    value={iconPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconPosition: value,
                                        })
                                    }
                                    options={POSITIONS}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} panelProps={props} stylePanel={true} firstOpen={true}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={ITEM_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Color', 'zolo-blocks')}
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
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ITEM_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Icon', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                            {iconType === 'image' && (
                                <>
                                    <ResRangeControl
                                        label={__('Image Size', 'zolo-blocks')}
                                        controlName={ICON_IMAGE_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={500}
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
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={ICON_IMAGE_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            )}
                            {iconType == 'icon' && (
                                <>
                                    <ResRangeControl
                                        label={__('Icon Size', 'zolo-blocks')}
                                        controlName={ICON_SIZE}
                                        requiredProps={requiredProps}
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
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={ICON_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
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
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={ICON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={ICON_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={ICON_MARGIN}
                                requiredProps={requiredProps}
                            />
                            {iconType == 'icon' && (
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconColor: value,
                                                    })
                                                }
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
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconHoverColor: value,
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
                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                            <SelectControl
                                label={__('Title Tag', 'zolo-blocks')}
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
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />

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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Description', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={DESCRIPTION_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={DESCRIPTION_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
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
                                            label={__('Color', 'zolo-blocks')}
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
                        {showButton && (
                            <>
                                <ZoloPanelBody title={__('Button', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={BUTTON_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={btnHoverBorderColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnHoverBorderColor: value,
                                                    })
                                                }
                                            />
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={BUTTON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={BUTTON_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={BUTTON_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={btnColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            btnColor: value,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BUTTON_BG_COLOR}
                                                    noMainBGImg={true}
                                                />
                                                <BoxShadowControl
                                                    controlName={BUTTON_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={btnHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            btnHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BUTTON_BG_HOVER_COLOR}
                                                    noMainBGImg={true}
                                                />

                                                <BoxShadowControl
                                                    controlName={BUTTON_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showButton && showButtonIcon && (
                            <ZoloPanelBody title={__('Button Icon', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={BUTTON_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
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
