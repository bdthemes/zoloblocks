/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    IconPicker,
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
} = window.zoloModule;

import { HEADING, TEXT_ALIGN_OPTIONS, ICON_STATUS } from '../../../src/global/constants';

import objAttributes from './attributes';
import {
    ICON_POSITIONS,
    BUTTON_ALIGNMENT,
    PRESETS,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_PADDING,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_PADDING,
    PO_SWIDTH,
    PT_BORDER,
    PT_BORDER_RADIUS,
    PTH_BORDER,
    PTH_BORDER_RADIUS,
    PF_SWIDTH,
    PFV_BORDER,
    PFV_BORDER_RADIUS,
    PS_BORDER,
    PS_BORDER_RADIUS,
    TITLE_MARGIN,
    DESC_MARGIN,
    FLEX_GAP,
} from './constants';

import { TITLE_TYPO, DESC_TYPO, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        titleColor,
        description,
        descriptionColor,
        label,
        link,
        iconType,
        icon,
        iconPosition,
        iconColor,
        iconHoverColor,
        iconBg,
        iconHoverBg,
        iconBorderHoverColor,
        textColor,
        textHoverColor,
        borderHoverColor,
        preset,
        reversePosition,
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
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
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
                                label={__('Show title', 'zolo-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />
                            <ToggleControl
                                label={__('Show description', 'zolo-blocks')}
                                checked={showDescription}
                                onChange={() => setAttributes({ showDescription: !showDescription })}
                            />
                            <ToggleControl
                                label={__('Show button', 'zolo-blocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            {showTitle && (
                                <>
                                    <TextControl
                                        label={__('Title', 'zolo-blocks')}
                                        onChange={(value) => setAttributes({ title: value })}
                                        value={title}
                                        placeholder={__('title..', 'zolo-blocks')}
                                    />
                                    <SelectControl
                                        label={__('Title Tag', 'zolo-blocks')}
                                        value={titleTag}
                                        options={HEADING}
                                        onChange={(value) => {
                                            setAttributes({ titleTag: value });
                                        }}
                                    />
                                </>
                            )}
                            {showDescription && (
                                <TextareaControl
                                    label={__('Description', 'zolo-blocks')}
                                    value={description}
                                    onChange={(value) => setAttributes({ description: value })}
                                    placeholder={__('description..', 'zolo-blocks')}
                                />
                            )}

                            {iconType !== 'iconOnly' && (
                                <TextControl
                                    label={__('Button Label', 'zolo-blocks')}
                                    onChange={(value) => setAttributes({ label: value })}
                                    value={label}
                                    placeholder={__('label..', 'zolo-blocks')}
                                />
                            )}
                            <LinkControl
                                label={__('URL', 'zolo-blocks')}
                                value={link}
                                onChange={(value) => setAttributes({ link: value })}
                            />
                            <IconicBtnGroup
                                label={__('Icon Status', 'zolo-blocks')}
                                value={iconType}
                                onChange={(value) =>
                                    setAttributes({
                                        iconType: value,
                                    })
                                }
                                options={ICON_STATUS}
                            />
                            {iconType !== 'none' && (
                                <Fragment>
                                    <IconPicker
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
                                        showHeading={true}
                                        disableDashicon={true}
                                    />

                                    {iconType !== 'iconOnly' && (
                                        <IconicBtnGroup
                                            label={__('Position', 'zolo-blocks')}
                                            value={iconPosition}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconPosition: value,
                                                })
                                            }
                                            options={ICON_POSITIONS}
                                        />
                                    )}
                                </Fragment>
                            )}
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        {preset !== '' && (
                            <PanelBody title={__('Preset', 'zolo-blocks')} initialOpen={false}>
                                <ToggleControl
                                    label={__('Reserve item position', 'zolo-blocks')}
                                    checked={reversePosition}
                                    onChange={() =>
                                        setAttributes({
                                            reversePosition: !reversePosition,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zolo-blocks')}
                                    controlName={FLEX_GAP}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </PanelBody>
                        )}
                        {showTitle && (
                            <>
                                <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}>
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={titleColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                titleColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={TITLE_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={TITLE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </PanelBody>
                            </>
                        )}
                        {showDescription && (
                            <>
                                <PanelBody title={__('Description', 'zolo-blocks')} initialOpen={false}>
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={descriptionColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                descriptionColor: value,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zolo-blocks')}
                                        typoPrefixConstant={DESC_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={DESC_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </PanelBody>
                            </>
                        )}
                        <PanelBody title={__('Button', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={BUTTON_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BUTTON_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BUTTON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Text Color', 'zolo-blocks')}
                                            color={textColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textColor: value,
                                                })
                                            }
                                        />

                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />

                                        {preset !== 'button-4' && preset !== 'button-6' && (
                                            <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Text Color', 'zolo-blocks')}
                                            color={textHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={BUTTON_HOVER_BG_COLOR}
                                            noMainBGImg={false}
                                        />

                                        <ColorControl
                                            label={__('Border Color', 'zolo-blocks')}
                                            color={borderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderHoverColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
                        </PanelBody>
                        {iconType !== 'none' && (
                            <PanelBody title={__('Icon', 'zolo-blocks')} initialOpen={false}>
                                {iconType !== 'none' && (
                                    <Fragment>
                                        <ResRangeControl
                                            label={__('Icon Size', 'zolo-blocks')}
                                            controlName={ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </Fragment>
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
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ICON_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
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
                                                color={iconBg}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBg: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zolo-blocks')}
                                                controlName={ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
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
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={iconBorderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBorderHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={iconHoverBg}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconHoverBg: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl controlName={ICON_HOVER_BOX_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </PanelBody>
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
