import { createRoot } from 'react-dom/client';
import { QRCode } from 'react-qrcode-logo';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const qrcodeWrapper = document.querySelectorAll('.zolo-qrcode-wrapper');
    if (qrcodeWrapper.length > 0) {
        qrcodeWrapper.forEach((qrcode) => {
            const options = qrcode.dataset.options;

            const {
                qrContent,
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
                badgeText,
            } = JSON.parse(options);

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

            const root = createRoot(qrcode);

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

            root.render(
                <>
                    <QRCodeWrapper />
                    {showBadge && badgeStyle == 'zolo-badge-style-1' && (
                        <span className="zolo-qrcode-badge">
                            <span className="zolo-qrcode-badge-text">{badgeText}</span>
                        </span>
                    )}
                </>
            );
        });
    }
});
