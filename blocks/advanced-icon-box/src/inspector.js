/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    CardDivider,
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
    BaseControl,
    Button,
} from '@wordpress/components';
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
    IconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    LinkControl,
    NormalBGControl,
    ImageAvatar,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    TITLE_TAG,
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
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_HOVER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
} from './constants';

import { BUTTON_TYPOGRAPHY, TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, ICON_BOX_OPTIONS, FLEX_ALIGN_OPTIONS, POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        titleTag,
        resMode,
        showIcon,
        mainIcon,
        iconTypeImage,
        buttonIcon,
        iconBoxTitle,
        iconBoxDescription,
        iconAlignment,
        iconColor,
        iconHoverColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        textColor,
        textHoverColor,
        descColor,
        descHoverColor,
        iconType,
        btnColor,
        btnHoverColor,
        btnBgColor,
        btnBgHoverColor,
        buttonText,
        buttonLink,
        globalLink,
        buttonIconColor,
        buttonIconHoverColor,
        presetOneStyles,
        presetTwoStyles,
        presetThreeStyles,
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
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
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
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
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
                                <Fragment>
                                    <IconPicker
                                        value={mainIcon}
                                        onChange={(value) =>
                                            setAttributes({
                                                mainIcon: value,
                                            })
                                        }
                                    />
                                </Fragment>
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
                        </PanelBody>
                        <PanelBody title={__('Button', 'zolo-blocks')} initialOpen={false}>
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

                            <ToggleControl
                                label={__('Use as Global Link', 'zolo-blocks')}
                                checked={globalLink}
                                onChange={() =>
                                    setAttributes({
                                        globalLink: !globalLink,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Button Icon', 'zolo-blocks')} initialOpen={false}>
                            <ToggleControl
                                label={__('Show Icon', 'zolo-blocks')}
                                checked={showIcon}
                                onChange={() =>
                                    setAttributes({
                                        showIcon: !showIcon,
                                    })
                                }
                            />
                            {showIcon && (
                                <Fragment>
                                    <IconPicker
                                        value={buttonIcon}
                                        onChange={(value) =>
                                            setAttributes({
                                                buttonIcon: value,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
                            {preset == 'style-1' && (
                                <IconicBtnGroup
                                    label={__('Content Alignment', 'zolo-blocks')}
                                    value={presetOneStyles.contentPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            presetOneStyles: {
                                                ...presetOneStyles,
                                                contentPosition: value,
                                            },
                                        })
                                    }
                                    options={DEFAULT_ALIGNS}
                                />
                            )}

                            {preset == 'style-2' && (
                                <IconicBtnGroup
                                    label={__('Content Alignment', 'zolo-blocks')}
                                    value={presetTwoStyles.contentPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            presetTwoStyles: {
                                                ...presetTwoStyles,
                                                contentPosition: value,
                                            },
                                        })
                                    }
                                    options={DEFAULT_ALIGNS}
                                />
                            )}

                            {preset == 'style-3' && (
                                <IconicBtnGroup
                                    label={__('Content Alignment', 'zolo-blocks')}
                                    value={presetThreeStyles.contentPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            presetThreeStyles: {
                                                ...presetThreeStyles,
                                                contentPosition: value,
                                            },
                                        })
                                    }
                                    options={DEFAULT_ALIGNS}
                                />
                            )}

                            <NormalBGControl resRequiredProps={resRequiredProps} controlName={CONTAINER_BACKGROUND} noMainBGImg={false} />

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
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={CONTAINER_HOVER_BORDER}
                                            resRequiredProps={resRequiredProps}
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
                            <PanelBody title={__('Icon', 'zolo-blocks')} initialOpen={false}>
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

                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ICON_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ICON_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
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

                                <TabPanelControl
                                    normalComponents={
                                        <>
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
                            <PanelBody title={__('Image', 'zolo-blocks')} initialOpen={false}>
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
                        <PanelBody title={__('Heading', 'zolo-blocks')} initialOpen={false}>
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
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                            <TextShadowControl
                                controlName={TITLE_TEXT_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />

                            <TextStrokeControl
                                controlName={TITLE_TEXT_STROKE}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Description', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={DESCRIPTION_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={DESCRIPTION_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                        </PanelBody>
                        <PanelBody title={__('Button', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BUTTON_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BUTTON_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BUTTON_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BUTTON_PADDING}
                                resRequiredProps={resRequiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Background', 'zolo-blocks')}
                                            color={btnBgColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnBgColor: value,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={btnColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Background', 'zolo-blocks')}
                                            color={btnBgHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnBgHoverColor: value,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={btnHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnHoverColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_HOVER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        {showIcon && (
                            <PanelBody title={__('Button Icon', 'zolo-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={BUTTON_ICON_SIZE}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    resRequiredProps={resRequiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={buttonIconColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        buttonIconColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={buttonIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        buttonIconHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                                {preset === 'style-1' && (
                                    <IconicBtnGroup
                                        label={__('Position', 'zolo-blocks')}
                                        value={presetOneStyles.iconPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                presetOneStyles: {
                                                    ...presetOneStyles,
                                                    iconPosition: value,
                                                },
                                            })
                                        }
                                        options={POSITIONS}
                                    />
                                )}
                                {preset === 'style-2' && (
                                    <IconicBtnGroup
                                        label={__('Position', 'zolo-blocks')}
                                        value={presetTwoStyles.iconPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                presetTwoStyles: {
                                                    ...presetTwoStyles,
                                                    iconPosition: value,
                                                },
                                            })
                                        }
                                        options={POSITIONS}
                                    />
                                )}
                                {preset === 'style-3' && (
                                    <IconicBtnGroup
                                        label={__('Position', 'zolo-blocks')}
                                        value={presetThreeStyles.iconPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                presetThreeStyles: {
                                                    ...presetThreeStyles,
                                                    iconPosition: value,
                                                },
                                            })
                                        }
                                        options={POSITIONS}
                                    />
                                )}
                            </PanelBody>
                        )}
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
