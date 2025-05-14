/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { applyFilters } from '@wordpress/hooks';

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
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
} = window.zoloModule;

import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';
import { TextControl } from '../../components/Core';
import objAttributes from './attributes';
import {
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
    PT_BORDER,
    PT_BORDER_RADIUS,
    PF_SWIDTH,
    PFV_BORDER,
    PFV_BORDER_RADIUS,
    PS_BORDER,
    PS_BORDER_RADIUS,
    PSE_BORDER,
    PSE_BRADIUS,
    PSE_BG,
    PT_BG,
    PTH_BG,
    PFTH_BG,
    ICON_ANIMATIONS,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { CardDivider } from '@wordpress/components';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
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
        presetFourStyles,
        presetSixStyle,
        presetSevenStyles,
        iconAnimation,
        buttonTwoBorderColor,
        psStarColor,
        presetBgColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    // on presets change comment
    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
    };

    // preset options
    const presetOptions = applyFilters('zolo.advancedButton.presets', PRESETS);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/advanced-button"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.advancedButton.presets', PRESETS)}
                                onChange={(value) => onPresetChange(value)}
                            />

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {iconType !== 'iconOnly' && (
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    onChange={(value) => setAttributes({ label: value })}
                                    value={label}
                                    placeholder={__('Label', 'zoloblocks')}
                                />
                            )}
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Icon', 'zoloblocks')}
                                    value={iconType}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconType: value,
                                        })
                                    }
                                    options={ICON_STATUS}
                                />
                            </div>
                            <LinkControl
                                label={__('URL', 'zoloblocks')}
                                value={link}
                                onChange={(value) => setAttributes({ link: value })}
                            />
                            {iconType !== 'none' && (
                                <>
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zoloblocks')}
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
                                    />
                                    {iconType !== 'iconOnly' && (
                                        <>
                                            {(iconAnimation === '' ||
                                                iconAnimation === null ||
                                                iconAnimation === undefined ||
                                                iconAnimation === 'undefined' ||
                                                (iconAnimation !== '' &&
                                                    iconAnimation !== null &&
                                                    iconAnimation !== undefined &&
                                                    iconAnimation !== 'undefined' &&
                                                    (preset === 'button-1' || preset === 'button-3'))) && (
                                                <>
                                                    <IconicBtnGroup
                                                        label={__('Icon Position', 'zoloblocks')}
                                                        value={iconPosition}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconPosition: value,
                                                            })
                                                        }
                                                        options={ICON_POSITIONS}
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                        {iconType === 'iconText' && preset !== 'button-1' && preset !== 'button-3' && (
                            <>
                                {applyFilters(
                                    'zolo.advancedButton.animationPanel',
                                    <ZoloPanelBody
                                        title={__('Icon Animation', 'zoloblocks')}
                                        panelProps={props}
                                        isPro={true}
                                        isDisabled={true}
                                    >
                                        <SelectControl
                                            label={__('Icon Animation', 'zoloblocks')}
                                            value={iconAnimation}
                                            options={ICON_ANIMATIONS}
                                            onChange={(value) => setAttributes({ iconAnimation: value })}
                                        />
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Button', 'zoloblocks')} panelProps={props} firstOpen={true} stylePanel={true}>
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
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        {preset !== 'button-4' && preset !== 'button-6' && (
                                            <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                        )}
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BUTTON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
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
                                        {preset !== 'button-1' && preset !== 'button-10' && preset !== 'button-11' && (
                                            <>
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BUTTON_HOVER_BG_COLOR}
                                                    noMainBGImg={false}
                                                />
                                                <CardDivider />
                                            </>
                                        )}
                                        {(preset === 'button-10' || preset === 'button-11') && (
                                            <>
                                                <ColorControl
                                                    label={__('Background', 'zoloblocks')}
                                                    color={presetBgColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            presetBgColor: value,
                                                        })
                                                    }
                                                />
                                                <CardDivider />
                                            </>
                                        )}

                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
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
                        </ZoloPanelBody>
                        {iconType !== 'none' && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} panelProps={props} stylePanel={true}>
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
                                            {iconType !== 'none' && (
                                                <>
                                                    <ResRangeControl
                                                        label={__('Size', 'zoloblocks')}
                                                        controlName={ICON_SIZE}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={36}
                                                        step={1}
                                                    />
                                                    {iconType !== 'iconOnly' && (
                                                        <ResRangeControl
                                                            label={__('Gap', 'zoloblocks')}
                                                            controlName={ICON_TEXT_SPACING}
                                                            requiredProps={requiredProps}
                                                            min={0}
                                                            max={100}
                                                            step={1}
                                                        />
                                                    )}
                                                </>
                                            )}
                                            <CardDivider />

                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={iconBg}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBg: value,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={ICON_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
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
                                            <BoxShadowControl
                                                label={__('Box Shadow', 'zoloblocks')}
                                                controlName={ICON_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                nBg
                                                controlName={ICON_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
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
                            </ZoloPanelBody>
                        )}
                        {preset !== '' && preset !== 'button-2' && preset !== 'button-10' && preset !== 'button-11' && (
                            <ZoloPanelBody title={__('Preset Style', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                {preset === 'button-1' && (
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={PT_BG} noMainBGImg={true} />
                                    </>
                                )}
                                {preset === 'button-3' && (
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={PFTH_BG} noMainBGImg={true} />
                                    </>
                                )}
                                {preset === 'button-4' && (
                                    <>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Shadow Color', 'zoloblocks')}
                                                        color={presetFourStyles && presetFourStyles.shadowColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetFourStyles: {
                                                                    ...presetFourStyles,
                                                                    shadowColor: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <ResRangeControl
                                                        label={__('Shadow Width', 'zoloblocks')}
                                                        controlName={PF_SWIDTH}
                                                        requiredProps={requiredProps}
                                                        min={1}
                                                        max={100}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Text Color', 'zoloblocks')}
                                                        color={presetFourStyles && presetFourStyles.textColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetFourStyles: {
                                                                    ...presetFourStyles,
                                                                    textColor: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__('Text Shadow Color', 'zoloblocks')}
                                                        color={presetFourStyles && presetFourStyles.textShadowColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetFourStyles: {
                                                                    ...presetFourStyles,
                                                                    textShadowColor: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                    <CardDivider />
                                                    <ColorControl
                                                        label={__('Overlay Background', 'zoloblocks')}
                                                        color={presetFourStyles && presetFourStyles.colorOne}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetFourStyles: {
                                                                    ...presetFourStyles,
                                                                    colorOne: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </>
                                            }
                                        />
                                    </>
                                )}
                                {preset === 'button-5' && (
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PFV_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={PFV_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                )}
                                {preset === 'button-6' && (
                                    <>
                                        <ColorControl
                                            label={__('Shadow Color', 'zoloblocks')}
                                            color={presetSixStyle && presetSixStyle}
                                            onChange={(value) =>
                                                setAttributes({
                                                    presetSixStyle: value,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {preset === 'button-7' && (
                                    <>
                                        <ColorControl
                                            label={__('Shadow Background', 'zoloblocks')}
                                            color={presetSevenStyles && presetSevenStyles.bgColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    presetSevenStyles: {
                                                        ...presetSevenStyles,
                                                        bgColor: value,
                                                    },
                                                })
                                            }
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PS_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={PS_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                )}

                                {preset == 'button-8' && (
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={PSE_BG} noMainBGImg={true} />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PSE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={PSE_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                )}

                                {preset == 'button-9' && (
                                    <>
                                        <ColorControl
                                            label={__('Star Color', 'zoloblocks')}
                                            color={psStarColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    psStarColor: value,
                                                })
                                            }
                                        />
                                    </>
                                )}
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
                            block="zolo/advanced-button"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
