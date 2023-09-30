/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, TextareaControl, BaseControl, Button } from '@wordpress/components';
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

import { BUTTON_TYPOGRAPHY, TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, ICON_BOX_OPTIONS, FLEX_ALIGN_OPTIONS, POSITIONS } from '../../../src/global/constants';

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

        // old settings
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
        containerBorderHoverColor,
        iconBackgroundHoverColor,
        textColor,
        textHoverColor,
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
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
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
                            <TextControl
                                label={__('Counter Title', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
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
                        <PanelBody title={__('Alignment', 'zolo-blocks')} initialOpen={false}>
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
                        <PanelBody title={__('Call To Action', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
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
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BUTTON_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={BUTTON_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                        <NormalBGControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={BUTTON_BG_COLOR}
                                            noMainBGImg={true}
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
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Button Hover Border Color', 'zolo-blocks')}
                                            color={btnHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnHoverBorderColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_HOVER_BOX_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            enableTransition={false}
                                        />
                                        <NormalBGControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={BUTTON_BG_HOVER_COLOR}
                                            noMainBGImg={true}
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
                                    </>
                                }
                            />
                        </PanelBody>
                        {showButtonIcon && (
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
