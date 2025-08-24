/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import './style.scss';

import { QRCode } from 'react-qrcode-logo';
import Style from './style';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    const {
        uniqueId,
        parentClasses,
        preview,
        // settings
        qrContent,
        qrCodeSize,
        qrCodeLevel,
        qrCodeStyle,
        codeColor,
        backgroundColor,
        qrCodePadding,
        logoQr,
        logoHeight,
        logoWidth,
        logoOpacity,
        logoPaddingStyle,
        logoPadding,
        logoQrBehind,
        eyeColor,
        eyeRadius,

        // QR Code Types
        qrCodeType,
        qrWifiSSID,
        qrWifiPassword,
        qrWifiSecurity,
        qrWifiHidden,
        qrVCardName,
        qrVCardPhone,
        qrVCardEmail,
        qrVCardOrg,
        qrVCardUrl,
        qrSMSNumber,
        qrSMSMessage,
        qrEmailTo,
        qrEmailSubject,
        qrEmailBody,
        qrPhoneNumber,
        qrLocationLat,
        qrLocationLng,
        qrLocationName,

        // badge
        badgeStyle,
        showBadge,
        showBadgeIcon,
        badgeText,
        badgeIcon,
    } = attributes;

    // Generate QR content based on type
    const generateQRContent = () => {
        switch (qrCodeType) {
            case 'wifi':
                if (!qrWifiSSID) return 'WiFi Network';
                const security = qrWifiSecurity === 'nopass' ? '' : qrWifiSecurity;
                const hidden = qrWifiHidden ? 'true' : 'false';
                return `WIFI:T:${security};S:${qrWifiSSID};P:${qrWifiPassword};H:${hidden};;`;
            
            case 'vcard':
                if (!qrVCardName) return 'Contact Card';
                let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
                vcard += `FN:${qrVCardName}\n`;
                if (qrVCardPhone) vcard += `TEL:${qrVCardPhone}\n`;
                if (qrVCardEmail) vcard += `EMAIL:${qrVCardEmail}\n`;
                if (qrVCardOrg) vcard += `ORG:${qrVCardOrg}\n`;
                if (qrVCardUrl) vcard += `URL:${qrVCardUrl}\n`;
                vcard += 'END:VCARD';
                return vcard;
            
            case 'sms':
                if (!qrSMSNumber) return 'SMS Message';
                return `sms:${qrSMSNumber}${qrSMSMessage ? `?body=${encodeURIComponent(qrSMSMessage)}` : ''}`;
            
            case 'email':
                if (!qrEmailTo) return 'Email';
                let emailUrl = `mailto:${qrEmailTo}`;
                const params = [];
                if (qrEmailSubject) params.push(`subject=${encodeURIComponent(qrEmailSubject)}`);
                if (qrEmailBody) params.push(`body=${encodeURIComponent(qrEmailBody)}`);
                if (params.length > 0) emailUrl += `?${params.join('&')}`;
                return emailUrl;
            
            case 'phone':
                return qrPhoneNumber ? `tel:${qrPhoneNumber}` : 'Phone Number';
            
            case 'location':
                if (!qrLocationLat || !qrLocationLng) return 'Location';
                return `geo:${qrLocationLat},${qrLocationLng}${qrLocationName ? `?q=${encodeURIComponent(qrLocationName)}` : ''}`;
            
            default:
                return qrContent || 'https://zoloblocks.com';
        }
    };

    const finalQRContent = generateQRContent();

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), { [badgeStyle]: showBadge }),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.qrcode} alt={__('QR Code Preview', 'zoloblocks')} />;
    }

    const QRCodeWrapper = () => (
        <QRCode
            value={finalQRContent}
            ecLevel={qrCodeLevel}
            size="1200"
            qrStyle={qrCodeStyle}
            fgColor={codeColor !== '' ? codeColor : '#000'}
            bgColor={backgroundColor !== '' ? backgroundColor : '#fff'}
            logoImage={logoQr?.url}
            logoWidth={logoWidth}
            logoHeight={logoHeight}
            logoOpacity={logoOpacity}
            quietZone={qrCodePadding !== '' ? qrCodePadding : 10}
            logoPadding={logoPadding}
            logoPaddingStyle={logoPaddingStyle}
            removeQrCodeBehindLogo={logoQrBehind}
            eyeColor={eyeColor}
            eyeRadius={eyeRadius}
        />
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                {renderHookBefore && renderHookBefore}
                {badgeStyle == 'zolo-badge-style-1' && (
                    <div className={`zolo-qrcode-wrapper`}>
                        <QRCodeWrapper />
                        {showBadge && (
                            <span className="zolo-qrcode-badge">
                                <RichText
                                    tagName="span"
                                    className="zolo-qrcode-badge-text"
                                    value={badgeText}
                                    onChange={(v) => setAttributes({ badgeText: v })}
                                />
                            </span>
                        )}
                    </div>
                )}

                {badgeStyle != 'zolo-badge-style-1' && (
                    <div className="zolo-qrcode-badge-wrapper">
                        <div className={`zolo-qrcode-wrapper`}>
                            <QRCodeWrapper />
                        </div>
                        {showBadge && (
                            <span className="zolo-qrcode-badge">
                                <RichText
                                    tagName="span"
                                    className="zolo-qrcode-badge-text"
                                    value={badgeText}
                                    onChange={(v) => setAttributes({ badgeText: v })}
                                />
                                {showBadgeIcon && (
                                    <span className="zolo-qrcode-badge-icon">
                                        <DisplayZoloIcon icon={badgeIcon} />
                                    </span>
                                )}
                            </span>
                        )}
                    </div>
                )}

                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
