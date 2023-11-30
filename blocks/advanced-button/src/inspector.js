/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
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
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
} = window.zoloModule;

import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';

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
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

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
        presetOneStyles,
        presetTwoStyles,
        presetThreeStyles,
        presetFourStyles,
        presetSixStyle,
        presetSevenStyles,
        selectedPanel,
        selectedStylePanel,
        selectedExtraPanel,
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
                                label={__('Styles', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <ResAlignmentControl
                                label={__('Button Alignment', 'zolo-blocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {iconType !== 'iconOnly' && (
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
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
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zolo-blocks')}
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
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
                                            <ResRangeControl
                                                label={__('Gap', 'zolo-blocks')}
                                                controlName={ICON_TEXT_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        </Fragment>
                                    )}
                                </Fragment>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Button', 'zolo-blocks')} panelProps={props} firstOpen={true} stylePanel={true}>
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
                        </ZoloPanelBody>
                        {iconType !== 'none' && (
                            <ZoloPanelBody title={__('Icon', 'zolo-blocks')} panelProps={props} stylePanel={true}>
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
                            </ZoloPanelBody>
                        )}
                        {preset !== '' && (
                            <ZoloPanelBody title={__('Preset Style', 'zolo-blocks')} panelProps={props} stylePanel={true}>
                                {preset === 'button-1' && (
                                    <Fragment>
                                        <ResRangeControl
                                            label={__('Shadow Width', 'zolo-blocks')}
                                            controlName={PO_SWIDTH}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={100}
                                        />
                                        <ColorControl
                                            label={__('Shadow Color', 'zolo-blocks')}
                                            color={presetOneStyles && presetOneStyles.shadowColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    presetOneStyles: {
                                                        ...presetOneStyles,
                                                        shadowColor: value,
                                                    },
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-2' && (
                                    <Fragment>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={PT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={PT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <TabPanelControl
                                            normalComponents={
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Overlay Color', 'zolo-blocks')}
                                                        color={presetTwoStyles && presetTwoStyles.bgColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetTwoStyles: {
                                                                    ...presetTwoStyles,
                                                                    bgColor: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </Fragment>
                                            }
                                            hoverComponents={
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Overlay Color', 'zolo-blocks')}
                                                        color={presetTwoStyles && presetTwoStyles.hoverBgColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                presetTwoStyles: {
                                                                    ...presetTwoStyles,
                                                                    hoverBgColor: value,
                                                                },
                                                            })
                                                        }
                                                    />
                                                </Fragment>
                                            }
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-3' && (
                                    <Fragment>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={PTH_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={PTH_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <TabPanelControl
                                            normalComponents={
                                                <ColorControl
                                                    label={__('Overlay Color', 'zolo-blocks')}
                                                    color={presetThreeStyles && presetThreeStyles.bgColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            presetThreeStyles: {
                                                                ...presetThreeStyles,
                                                                bgColor: value,
                                                            },
                                                        })
                                                    }
                                                />
                                            }
                                            hoverComponents={
                                                <ColorControl
                                                    label={__('Overlay Color', 'zolo-blocks')}
                                                    color={presetThreeStyles && presetThreeStyles.hoverBgColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            presetThreeStyles: {
                                                                ...presetThreeStyles,
                                                                hoverBgColor: value,
                                                            },
                                                        })
                                                    }
                                                />
                                            }
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-4' && (
                                    <Fragment>
                                        <ResRangeControl
                                            label={__('Shadow Width', 'zolo-blocks')}
                                            controlName={PF_SWIDTH}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={100}
                                        />
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Shadow Color', 'zolo-blocks')}
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
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Overlay Background', 'zolo-blocks')}
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
                                                    <ColorControl
                                                        label={__('Text Color', 'zolo-blocks')}
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
                                                        label={__('Text Shadow Color', 'zolo-blocks')}
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
                                                </>
                                            }
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-5' && (
                                    <Fragment>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={PFV_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={PFV_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-6' && (
                                    <Fragment>
                                        <ColorControl
                                            label={__('Shadow Color', 'zolo-blocks')}
                                            color={presetSixStyle && presetSixStyle}
                                            onChange={(value) =>
                                                setAttributes({
                                                    presetSixStyle: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {preset === 'button-7' && (
                                    <Fragment>
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={PS_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={PS_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ColorControl
                                            label={__('Shadow Background', 'zolo-blocks')}
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
                                    </Fragment>
                                )}
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
