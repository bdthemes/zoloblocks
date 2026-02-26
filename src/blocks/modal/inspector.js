/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ZoloSelectControl,
    ZoloTextControl,
    ZoloCardDivider,
    HeaderTabs,
    ColorControl,
    BorderControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    LinkControl,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ZoloResponsive,
    useResponsiveValue,
    ZoloRangeUnit,
    ZoloBoxControl,
    ZoloChoose,
} = window.zoloModule;

import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';
import objAttributes from './attributes';
import {
    PRESETS,
    BUTTON_BORDER,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    PT_BORDER,
    PFV_BORDER,
    PS_BORDER,
    PSE_BORDER,
    PSE_BG,
    PT_BG,
    PTH_BG,
    PFTH_BG,
    ICON_ANIMATIONS,
    MODAL_WIDTH,
    MODAL_PADDING,
    MODAL_BORDER_RADIUS,
    MODAL_CLOSE_SIZE,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        label,
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
        modalOverlayBg,
        modalContentBg,
        modalCloseColor,
        modalCloseHoverColor,
        modalCloseBg,
        modalCloseHoverBg,
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

    const [getResponsiveValue, createResponsiveValue] = useResponsiveValue(attributes);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/modal"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Button', 'zoloblocks')} panelProps={props}>
                            {iconType !== 'iconOnly' && (
                                <ZoloTextControl
                                    label={__('Text', 'zoloblocks')}
                                    onChange={(value) => setAttributes({ label: value })}
                                    value={label}
                                    placeholder={__('Label', 'zoloblocks')}
                                />
                            )}
                            <ZoloSelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.modal.presets', PRESETS)}
                                onChange={(value) => onPresetChange(value)}
                            />

                            <ZoloResponsive left='65px'>
                                <ZoloChoose
                                    label={__('Alignment', 'zoloblocks')}
                                    value={getResponsiveValue('buttonAlignment')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('buttonAlignment', value));
                                    }}
                                    options={TEXT_ALIGN_OPTIONS}
                                    isDeselectable
                                />
                            </ZoloResponsive>
                            <ZoloChoose
                                label={__('Icon', 'zoloblocks')}
                                value={iconType}
                                onChange={(value) =>
                                    setAttributes({
                                        iconType: value,
                                    })
                                }
                                options={ICON_STATUS}
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
                                                        <ZoloChoose
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
                                    'zolo.modal.animationPanel',
                                    <ZoloPanelBody
                                        title={__('Icon Animation', 'zoloblocks')}
                                        panelProps={props}
                                        isPro={true}
                                        isDisabled={true}
                                    >
                                        <ZoloSelectControl
                                            label={__('Icon Animation', 'zoloblocks')}
                                            value={iconAnimation}
                                            options={ICON_ANIMATIONS}
                                            onChange={(value) => setAttributes({ iconAnimation: value })}
                                        />
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                        <ZoloPanelBody title={__('Popup Modal', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloResponsive>
                                <ZoloRangeUnit
                                    label={__('Width', 'zoloblocks')}
                                    value={getResponsiveValue('modalWidth')}
                                    onChange={(value) => setAttributes(createResponsiveValue('modalWidth', value))}
                                    min={300}
                                    max={1200}
                                    step={10}
                                />
                            </ZoloResponsive>

                            <ZoloResponsive left='55px'>
                                <ZoloBoxControl
                                    label={__('Padding', 'zoloblocks')}
                                    value={getResponsiveValue('modalPadding')}
                                    onChange={(value) => setAttributes(createResponsiveValue('modalPadding', value))}
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>
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
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <ZoloResponsive left='45px'>
                                            <ZoloRangeUnit
                                                label={__('Width', 'zoloblocks')}
                                                value={getResponsiveValue('buttonWidth')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('buttonWidth', value));
                                                }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloResponsive left='70px'>
                                            <ZoloRangeUnit
                                                label={__('Min Height', 'zoloblocks')}
                                                value={getResponsiveValue('buttonMinHeight')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('buttonMinHeight', value));
                                                }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloResponsive left='55px'>
                                            <ZoloBoxControl
                                                label={__('Padding', 'zoloblocks')}
                                                value={getResponsiveValue('buttonPadding')}
                                                onChange={(newValue) => {
                                                    setAttributes(createResponsiveValue('buttonPadding', newValue));
                                                }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloResponsive left='48px'>
                                            <ZoloBoxControl
                                                label={__('Margin', 'zoloblocks')}
                                                value={getResponsiveValue('buttonMargin')}
                                                onChange={(newValue) => {
                                                    setAttributes(createResponsiveValue('buttonMargin', newValue));
                                                }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        {preset !== 'button-4' && preset !== 'button-6' && (
                                            <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                        )}
                                        <ZoloResponsive left='88px'>
                                            <ZoloRangeUnit
                                                label={__('Border Radius', 'zoloblocks')}
                                                value={getResponsiveValue('buttonBorderRadius')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('buttonBorderRadius', value));
                                                }}
                                            />
                                        </ZoloResponsive>
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
                                                <ZoloCardDivider />
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
                                                <ZoloCardDivider />
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
                                                    <ZoloResponsive left='45px'>
                                                        <ZoloRangeUnit
                                                            label={__('Size', 'zoloblocks')}
                                                            value={getResponsiveValue('iconSize')}
                                                            onChange={(value) => createResponsiveValue('iconSize', value)}
                                                            min={0}
                                                            max={36}
                                                            step={1}
                                                        />
                                                    </ZoloResponsive>
                                                    {iconType !== 'iconOnly' && (
                                                        <ZoloResponsive>
                                                            <ZoloRangeUnit
                                                                label={__('Gap', 'zoloblocks')}
                                                                value={getResponsiveValue('iconTextSpacing')}
                                                                onChange={(value) => createResponsiveValue('iconTextSpacing', value)}
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                            />
                                                        </ZoloResponsive>
                                                    )}
                                                </>
                                            )}
                                            <ZoloCardDivider />

                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={iconBg}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconBg: value,
                                                    })
                                                }
                                            />
                                            <ZoloResponsive left='55px'>
                                                <ZoloBoxControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    value={getResponsiveValue('iconPadding')}
                                                    onChange={(newValue) => {
                                                        setAttributes(createResponsiveValue('iconPadding', newValue));
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left='48px'>
                                                <ZoloBoxControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    value={getResponsiveValue('iconMargin')}
                                                    onChange={(newValue) => {
                                                        setAttributes(createResponsiveValue('iconMargin', newValue));
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloCardDivider />
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
                                            <ZoloResponsive left='88px'>
                                                <ZoloRangeUnit
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    value={getResponsiveValue('iconBorderRadius')}
                                                    onChange={(value) => {
                                                        setAttributes(createResponsiveValue('iconBorderRadius', value));
                                                    }}
                                                />
                                            </ZoloResponsive>
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
                                                    <ZoloResponsive>
                                                        <ZoloRangeUnit
                                                            label={__('Shadow Width', 'zoloblocks')}
                                                            value={getResponsiveValue('presetFSWidth')}
                                                            onChange={(value) => createResponsiveValue('presetFSWidth', value)}
                                                            min={1}
                                                            max={100}
                                                        />
                                                    </ZoloResponsive>
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
                                                    <ZoloCardDivider />
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
                                        <ZoloResponsive left='88px'>
                                            <ZoloRangeUnit
                                                label={__('Border Radius', 'zoloblocks')}
                                                value={getResponsiveValue('presetFVBorderRadius')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('presetFVBorderRadius', value));
                                                }}
                                            />
                                        </ZoloResponsive>
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
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PS_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloResponsive left='88px'>
                                            <ZoloRangeUnit
                                                label={__('Border Radius', 'zoloblocks')}
                                                value={getResponsiveValue('presetSBorderRadius')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('presetSBorderRadius', value));
                                                }}
                                            />
                                        </ZoloResponsive>
                                    </>
                                )}

                                {preset == 'button-8' && (
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={PSE_BG} noMainBGImg={true} />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PSE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloResponsive left='88px'>
                                            <ZoloRangeUnit
                                                label={__('Border Radius', 'zoloblocks')}
                                                value={getResponsiveValue('pseBorderRadius')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('pseBorderRadius', value));
                                                }}
                                            />
                                        </ZoloResponsive>
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

                        <ZoloPanelBody title={__('Popup Modal', 'zoloblocks')} panelProps={props} stylePanel={true}>
                            <ColorControl
                                label={__('Overlay Background', 'zoloblocks')}
                                color={modalOverlayBg}
                                onChange={(value) => setAttributes({ modalOverlayBg: value })}
                            />

                            <ColorControl
                                label={__('Content Background', 'zoloblocks')}
                                color={modalContentBg}
                                onChange={(value) => setAttributes({ modalContentBg: value })}
                            />

                            <ZoloResponsive left='88px'>
                                <ZoloRangeUnit
                                    label={__('Border Radius', 'zoloblocks')}
                                    value={getResponsiveValue('modalBorderRadius')}
                                    onChange={(value) => setAttributes(createResponsiveValue('modalBorderRadius', value))}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Close Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={modalCloseColor}
                                            onChange={(value) => setAttributes({ modalCloseColor: value })}
                                        />

                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={modalCloseBg}
                                            onChange={(value) => setAttributes({ modalCloseBg: value })}
                                        />

                                        <ZoloResponsive left='55px'>
                                            <ZoloRangeUnit
                                                label={__('Size', 'zoloblocks')}
                                                value={getResponsiveValue('modalCloseSize')}
                                                onChange={(value) => setAttributes(createResponsiveValue('modalCloseSize', value))}
                                                min={16}
                                                max={48}
                                                step={1}
                                            />
                                        </ZoloResponsive>

                                        <ZoloResponsive left='80px'>
                                            <ZoloRangeUnit
                                                label={__('Top Position', 'zoloblocks')}
                                                value={getResponsiveValue('modalCloseTop')}
                                                onChange={(value) => setAttributes(createResponsiveValue('modalCloseTop', value))}
                                                min={-200}
                                                max={200}
                                                step={1}
                                            />
                                        </ZoloResponsive>

                                        <ZoloResponsive left='85px'>
                                            <ZoloRangeUnit
                                                label={__('Right Position', 'zoloblocks')}
                                                value={getResponsiveValue('modalCloseRight')}
                                                onChange={(value) => setAttributes(createResponsiveValue('modalCloseRight', value))}
                                                min={-200}
                                                max={200}
                                                step={1}
                                            />
                                        </ZoloResponsive>
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={modalCloseHoverColor}
                                            onChange={(value) => setAttributes({ modalCloseHoverColor: value })}
                                        />

                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={modalCloseHoverBg}
                                            onChange={(value) => setAttributes({ modalCloseHoverBg: value })}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/modal"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
