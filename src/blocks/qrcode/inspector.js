/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ZoloSelectControl,
    ZoloTextareaControl,
    ZoloTextControl,
    ColorControl,
    SimpleRangeControl,
    BorderControl,
    ResDimensionsControl,
    HeaderTabs,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    BoxShadowControl,
    TypographyDropdown,
    ResRangeControl,
    ZoloToggleControl,
} = window.zoloModule;

import {
    QR_CODE_SIZE,
    QR_CODE_LEVEL,
    QR_CODE_BORDER,
    QR_CODE_ALIGN,
    QR_CODE_BORDER_RADIUS,
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
        qrCodeType,
        // WiFi QR Code
        qrWifiSSID,
        qrWifiPassword,
        qrWifiSecurity,
        qrWifiHidden,
        // vCard Contact QR Code
        qrVCardName,
        qrVCardPhone,
        qrVCardEmail,
        qrVCardOrg,
        qrVCardUrl,
        // SMS QR Code
        qrSMSNumber,
        qrSMSMessage,
        // Email QR Code
        qrEmailTo,
        qrEmailSubject,
        qrEmailBody,
        // Phone QR Code
        qrPhoneNumber,
        // Location QR Code
        qrLocationLat,
        qrLocationLng,
        qrLocationName,
        codeColor,
        backgroundColor,
        qrCodePadding,

        qrCodeLevel,
        qrCodeSize,
        eyeColor,
        eyeRadius,
        showBadge,
        showBadgeIcon,
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
    const hookLinks = applyFilters('zolo.blocks.controls.qrcode.pageLinks', [], props, 'zolo/qrcode');
    const hookStyles = applyFilters('zolo.blocks.controls.qrcode.styles', [], props, 'zolo/qrcode');
    const hookLogo = applyFilters('zolo.blocks.controls.qrcode.logo', [], props, 'zolo/qrcode');
    const hookLogoStyle = applyFilters('zolo.blocks.controls.qrcode.logoStyle', [], props, 'zolo/qrcode');
    return (
        <>
            <InspectorControls>
                <HeaderTabs
                    block="zolo/qrcode"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    generalTab={
                        <>
                            <ZoloPanelBody title={__('QR Code', 'zoloblocks')} panelProps={requiredProps} firstOpen={true}>
                                <ZoloSelectControl
                                    label={__('QR Code Type', 'zoloblocks')}
                                    value={qrCodeType}
                                    onChange={(value) => setAttributes({ qrCodeType: value })}
                                    options={[
                                        { label: __('URL/Text', 'zoloblocks'), value: 'url' },
                                        { label: __('WiFi', 'zoloblocks'), value: 'wifi' },
                                        { label: __('Contact (vCard)', 'zoloblocks'), value: 'vcard' },
                                        { label: __('SMS', 'zoloblocks'), value: 'sms' },
                                        { label: __('Email', 'zoloblocks'), value: 'email' },
                                        { label: __('Phone', 'zoloblocks'), value: 'phone' },
                                        { label: __('Location', 'zoloblocks'), value: 'location' },
                                    ]}
                                />
                                
                                {qrCodeType === 'url' && !qrCodeLink && (
                                    <ZoloTextareaControl
                                        className="zolo-flex-col-control"
                                        label={__('Content', 'zoloblocks')}
                                        value={qrContent}
                                        onChange={(value) =>
                                            setAttributes({
                                                qrContent: value,
                                            })
                                        }
                                    />
                                )}
                                
                                {qrCodeType === 'wifi' && (
                                    <>
                                        <ZoloTextControl
                                            label={__('WiFi Network Name (SSID)', 'zoloblocks')}
                                            value={qrWifiSSID}
                                            onChange={(value) => setAttributes({ qrWifiSSID: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('WiFi Password', 'zoloblocks')}
                                            value={qrWifiPassword}
                                            onChange={(value) => setAttributes({ qrWifiPassword: value })}
                                        />
                                        <ZoloSelectControl
                                            label={__('Security Type', 'zoloblocks')}
                                            value={qrWifiSecurity}
                                            onChange={(value) => setAttributes({ qrWifiSecurity: value })}
                                            options={[
                                                { label: __('WPA/WPA2', 'zoloblocks'), value: 'WPA' },
                                                { label: __('WEP', 'zoloblocks'), value: 'WEP' },
                                                { label: __('None', 'zoloblocks'), value: 'nopass' },
                                            ]}
                                        />
                                        <ZoloToggleControl
                                            label={__('Hidden Network', 'zoloblocks')}
                                            checked={qrWifiHidden}
                                            onChange={(value) => setAttributes({ qrWifiHidden: value })}
                                        />
                                    </>
                                )}
                                
                                {qrCodeType === 'vcard' && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Full Name', 'zoloblocks')}
                                            value={qrVCardName}
                                            onChange={(value) => setAttributes({ qrVCardName: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('Phone Number', 'zoloblocks')}
                                            value={qrVCardPhone}
                                            onChange={(value) => setAttributes({ qrVCardPhone: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('Email Address', 'zoloblocks')}
                                            value={qrVCardEmail}
                                            onChange={(value) => setAttributes({ qrVCardEmail: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('Organization', 'zoloblocks')}
                                            value={qrVCardOrg}
                                            onChange={(value) => setAttributes({ qrVCardOrg: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('Website URL', 'zoloblocks')}
                                            value={qrVCardUrl}
                                            onChange={(value) => setAttributes({ qrVCardUrl: value })}
                                        />
                                    </>
                                )}
                                
                                {qrCodeType === 'sms' && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Phone Number', 'zoloblocks')}
                                            value={qrSMSNumber}
                                            onChange={(value) => setAttributes({ qrSMSNumber: value })}
                                        />
                                        <ZoloTextareaControl
                                            label={__('Message', 'zoloblocks')}
                                            value={qrSMSMessage}
                                            onChange={(value) => setAttributes({ qrSMSMessage: value })}
                                        />
                                    </>
                                )}
                                
                                {qrCodeType === 'email' && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Email Address', 'zoloblocks')}
                                            value={qrEmailTo}
                                            onChange={(value) => setAttributes({ qrEmailTo: value })}
                                        />
                                        <ZoloTextControl
                                            label={__('Subject', 'zoloblocks')}
                                            value={qrEmailSubject}
                                            onChange={(value) => setAttributes({ qrEmailSubject: value })}
                                        />
                                        <ZoloTextareaControl
                                            label={__('Message Body', 'zoloblocks')}
                                            value={qrEmailBody}
                                            onChange={(value) => setAttributes({ qrEmailBody: value })}
                                        />
                                    </>
                                )}
                                
                                {qrCodeType === 'phone' && (
                                    <ZoloTextControl
                                        label={__('Phone Number', 'zoloblocks')}
                                        value={qrPhoneNumber}
                                        onChange={(value) => setAttributes({ qrPhoneNumber: value })}
                                    />
                                )}
                                
                                {qrCodeType === 'location' && (
                                    <>
                                        <ZoloTextControl
                                            label={__('Latitude', 'zoloblocks')}
                                            value={qrLocationLat}
                                            onChange={(value) => setAttributes({ qrLocationLat: value })}
                                            placeholder="40.7128"
                                        />
                                        <ZoloTextControl
                                            label={__('Longitude', 'zoloblocks')}
                                            value={qrLocationLng}
                                            onChange={(value) => setAttributes({ qrLocationLng: value })}
                                            placeholder="-74.0060"
                                        />
                                        <ZoloTextControl
                                            label={__('Location Name (Optional)', 'zoloblocks')}
                                            value={qrLocationName}
                                            onChange={(value) => setAttributes({ qrLocationName: value })}
                                        />
                                    </>
                                )}
                                
                                {/* hook links */}
                                {hookLinks && hookLinks.length > 0 && hookLinks}
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={QR_CODE_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={500}
                                />

                                <ZoloSelectControl
                                    label={__('Error Level', 'zoloblocks')}
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
                            {hookLogo && hookLogo.length > 0 && hookLogo}
                        </>
                    }
                    styleTab={
                        <>
                            {showBadge && (
                                <ZoloPanelBody
                                    title={__('Wrapper', 'zoloblocks')}
                                    panelProps={requiredProps}
                                    firstOpen={showBadge ? true : false}
                                >
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

                            <ZoloPanelBody
                                title={__('QR Code', 'zoloblocks')}
                                panelProps={requiredProps}
                                firstOpen={!showBadge ? true : false}
                            >
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

                                <div className="zolo-flex-col-control">
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
                                </div>

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

                                <div className="zolo-flex-col-control">
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
                                </div>
                            </ZoloPanelBody>

                            {hookLogoStyle && hookLogoStyle.length > 0 && hookLogoStyle}

                            {showBadge && (
                                <ZoloPanelBody title={__('Badge', 'zoloblocks')} panelProps={requiredProps}>
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
                            key="zolo/qr-block/advanced-options"
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
