import { createRoot, DisplayZoloIcon } from '@wordpress/element';
import { QRCode } from 'react-qrcode-logo';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const qrcodeWrapper = document.querySelectorAll('.zolo-qrcode-wrapper');

    console.log(qrcodeWrapper);

    if (qrcodeWrapper.length > 0) {
        qrcodeWrapper.forEach((qrcode) => {
            const options = qrcode.dataset.options;

            const {
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
                // badge
                badgeStyle,
                showBadge,
                badgeText,
            } = JSON.parse(options);

            const root = createRoot(qrcode);

            const QRCodeWrapper = () => (
                <QRCode
                    value={qrContent}
                    ecLevel={qrCodeLevel}
                    size={qrCodeSize !== 0 ? qrCodeSize : 240}
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
