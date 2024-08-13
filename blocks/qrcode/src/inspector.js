/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextareaControl, BaseControl, Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ColorControl,
    SimpleRangeControl,
    BorderControl,
    ResDimensionsControl,
    HeaderTabs,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloIconPicker,
    BoxShadowControl,
    TypographyDropdown,
    ResRangeControl,
} = window.zoloModule;

import {
    QR_CODE_LEVEL,
    QR_CODE_STYLE,
    QR_CODE_BORDER,
    QR_CODE_ALIGN,
    QR_CODE_BORDER_RADIUS,
    QR_LOGO_PADDING_STYLE,
    BADGE_STYLE,
    WRAP_QR_CODE_BORDER,
    WRAP_QR_CODE_BORDER_RADIUS,
    WRAP_QR_CODE_PADDING,
    WRAP_QR_CODE_BOX_SHADOW,
    BADGE_QR_CODE_BORDER,
    BADGE_QR_CODE_BORDER_RADIUS,
    BADGE_QR_CODE_PADDING,
    BADGE_QR_CODE_MARGIN,
    BADGE_QR_CODE_BOX_SHADOW,
    BADGE_ICON_SIZE,
    // BADGE_TYPOGRAPHY
} from './constants/index';

import { BADGE_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Inspector(props) {
    const { attributes, setAttributes, block } = props;

    const {
        resMode,
        badgeStyle,
        // settings
        qrContent,
        qrCodeLink,
        qrCodeStyle,
        logoQr,
        logoQrBehind,
        codeColor,
        backgroundColor,
        qrCodePadding,

        qrCodeLevel,
        qrCodeSize,
        logoWidth,
        logoOpacity,
        logoPaddingStyle,
        logoPadding,
        eyeColor,
        eyeRadius,
        showBadge,
        showBadgeIcon,
        badgeText,
        badgeIcon,

        wrapBackgroundColor,
        badgeTextColor,
        badgeBackgroundColor,
        badgeBackgroundArrowColor,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };
    const hookLinks = applyFilters('zolo.blocks.controls.qrcode.pageLinks', [], props);
    const hookStyles = applyFilters('zolo.blocks.controls.qrcode.styles', [], props);
    const hookLogo = applyFilters('zolo.blocks.controls.qrcode.logo', [], props);
    const hookLogoStyle = applyFilters('zolo.blocks.controls.qrcode.logoStyle', [], props);

    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/qrcode"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('QR Code', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                {!qrCodeLink && (
                                    <TextareaControl
                                        label={__('Content', 'zoloblocks')}
                                        value={qrContent}
                                        onChange={(value) =>
                                            setAttributes({
                                                qrContent: value,
                                            })
                                        }
                                    />
                                )}
                                {/* hook links */}
                                {hookLinks && hookLinks.length > 0 && hookLinks}
                                <SimpleRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    value={qrCodeSize}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodeSize: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            qrCodeSize: 0,
                                        })
                                    }
                                    max={500}
                                    noUnits={true}
                                />

                                <SelectControl
                                    label={__('Error Correction Level', 'zoloblocks')}
                                    value={qrCodeLevel}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodeLevel: value,
                                        })
                                    }
                                    options={QR_CODE_LEVEL}
                                />

                                {/* hook styles */}
                                {hookStyles && hookStyles.length > 0 && hookStyles}

                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={QR_CODE_ALIGN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>

                            {/* Panel pro  */}
                            <ZoloPanelBody title={__('Badge', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Badge', 'zoloblocks')}
                                    checked={showBadge}
                                    onChange={(value) =>
                                        setAttributes({
                                            showBadge: value,
                                        })
                                    }
                                />

                                {showBadge && (badgeStyle === 'zolo-badge-style-2' || badgeStyle === 'zolo-badge-style-3') && (
                                    <ToggleControl
                                        label={__('Show Badge Icon', 'zoloblocks')}
                                        checked={showBadgeIcon}
                                        onChange={(value) =>
                                            setAttributes({
                                                showBadgeIcon: value,
                                            })
                                        }
                                    />
                                )}

                                {showBadge && (
                                    <SelectControl
                                        label={__('Badge Style', 'zoloblocks')}
                                        value={badgeStyle}
                                        options={applyFilters('zolo.qrcode.badgeStyle', BADGE_STYLE)}
                                        onChange={(value) => {
                                            setAttributes({
                                                badgeStyle: value,
                                            });
                                        }}
                                    />
                                )}
                                {showBadge && (
                                    <TextControl
                                        label={__('Title', 'zoloblocks')}
                                        value={badgeText}
                                        onChange={(badgeText) => setAttributes({ badgeText })}
                                    />
                                )}
                                {showBadge && showBadgeIcon && badgeStyle !== 'zolo-badge-style-1' && (
                                    <ZoloIconPicker
                                        label={__('Selected Icon', 'zoloblocks')}
                                        value={badgeIcon}
                                        onChange={(value) =>
                                            setAttributes({
                                                badgeIcon: value,
                                            })
                                        }
                                    />
                                )}
                            </ZoloPanelBody>

                            {/* hook logo  */}
                            {hookLogo && hookLogo.length > 0 && hookLogo}
                        </>
                    }
                    styleTab={
                        <>
                            {/* Panel pro  */}
                            {showBadge && (
                                <ZoloPanelBody title={__('Wrapper', 'zoloblocks')} panelProps={props} firstOpen={showBadge ? true : false}>
                                    <BorderControl
                                        label={__('Border Type', 'zoloblocks')}
                                        controlName={WRAP_QR_CODE_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={WRAP_QR_CODE_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={WRAP_QR_CODE_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <ColorControl
                                        label={__('Background Color', 'zoloblocks')}
                                        color={wrapBackgroundColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                wrapBackgroundColor: value,
                                            })
                                        }
                                    />

                                    <BoxShadowControl controlName={WRAP_QR_CODE_BOX_SHADOW} requiredProps={requiredProps} />
                                </ZoloPanelBody>
                            )}

                            <ZoloPanelBody title={__('QR Code', 'zoloblocks')} panelProps={props} firstOpen={!showBadge ? true : false}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={codeColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            codeColor: value,
                                        })
                                    }
                                />

                                <ColorControl
                                    label={__('Eye Color', 'zoloblocks')}
                                    color={eyeColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            eyeColor: value,
                                        })
                                    }
                                />

                                <SimpleRangeControl
                                    label={__('Eye Radius', 'zoloblocks')}
                                    value={eyeRadius}
                                    onChange={(value) =>
                                        setAttributes({
                                            eyeRadius: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            eyeRadius: '',
                                        })
                                    }
                                    min={0}
                                    max={100}
                                    noUnits={true}
                                />

                                <ColorControl
                                    label={__('Background Type', 'zoloblocks')}
                                    color={backgroundColor}
                                    onChange={(value) =>
                                        setAttributes({
                                            backgroundColor: value,
                                        })
                                    }
                                />

                                <BorderControl
                                    label={__('Border Type', 'zoloblocks')}
                                    controlName={QR_CODE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={QR_CODE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <SimpleRangeControl
                                    label={__('Padding', 'zoloblocks')}
                                    value={qrCodePadding}
                                    onChange={(value) =>
                                        setAttributes({
                                            qrCodePadding: value,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            qrCodePadding: '',
                                        })
                                    }
                                    min={1}
                                    max={300}
                                    noUnits={true}
                                />
                            </ZoloPanelBody>

                            {/* hooks logo style  */}
                            {hookLogoStyle && hookLogoStyle.length > 0 && hookLogoStyle}

                            {/* Panel pro  */}
                            {showBadge && (
                                <ZoloPanelBody title={__('Badge', 'zoloblocks')} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={badgeTextColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                badgeTextColor: value,
                                            })
                                        }
                                    />

                                    <TypographyDropdown
                                        label={__('Title Typography', 'zoloblocks')}
                                        typoPrefixConstant={BADGE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />

                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={BADGE_QR_CODE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />

                                    {badgeStyle !== 'zolo-badge-style-1' && (
                                        <>
                                            <BorderControl
                                                label={__('Border Type', 'zoloblocks')}
                                                controlName={BADGE_QR_CODE_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={BADGE_QR_CODE_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={BADGE_QR_CODE_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />

                                            {showBadgeIcon && (
                                                <ResRangeControl
                                                    label={__('Icon Size', 'zoloblocks')}
                                                    controlName={BADGE_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={50}
                                                    step={1}
                                                />
                                            )}
                                            <ColorControl
                                                label={__('Background Color', 'zoloblocks')}
                                                color={badgeBackgroundColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        badgeBackgroundColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Arrow Color', 'zoloblocks')}
                                                color={badgeBackgroundArrowColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        badgeBackgroundArrowColor: value,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl controlName={BADGE_QR_CODE_BOX_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    )}
                                </ZoloPanelBody>
                            )}
                        </>
                    }
                    advancedTab={
                        <AdvancedOptions
                            block="zolo/qr-block"
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                        />
                    }
                />
            </InspectorControls>
        </>
    );
}
