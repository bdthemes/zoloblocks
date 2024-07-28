/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';
import { QRCode } from 'react-qrcode-logo';
import './style';

const { classArrayToStr } = window.zoloModule;

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
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.qrcode} alt={__('QR Code Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div className="zolo-qrcode-wrapper">
                    <QRCode
                        value={qrContent}
                        ecLevel={qrCodeLevel}
                        size={qrCodeSize !== 0 ? qrCodeSize : 240}
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
                </div>
            </div>
        </>
    );
}
