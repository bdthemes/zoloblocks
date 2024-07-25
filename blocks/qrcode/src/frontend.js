import { createRoot } from '@wordpress/element';
import { QRCode } from 'react-qrcode-logo';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const qrcodeWrapper = document.querySelectorAll('.zolo-qrcode-wrapper');

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
            } = JSON.parse(options);

            const root = createRoot(qrcode);

            root.render(
                <QRCode
                    value={qrContent}
                    ecLevel={qrCodeLevel}
                    size={qrCodeSize !== 0 ? qrCodeSize : 100}
                    qrStyle={qrCodeStyle}
                    fgColor={codeColor !== '' ? codeColor : '#000'}
                    bgColor={backgroundColor}
                    logoImage={logoQr?.url}
                    logoWidth={logoWidth}
                    logoHeight={logoHeight}
                    logoOpacity={logoOpacity}
                    quietZone={qrCodePadding}
                    logoPadding={logoPadding}
                    logoPaddingStyle={logoPaddingStyle}
                    removeQrCodeBehindLogo={logoQrBehind}
                    eyeColor={eyeColor}
                    eyeRadius={eyeRadius}
                />
            );
        });
    }
});
