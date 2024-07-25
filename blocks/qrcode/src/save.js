import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const {
        uniqueId,
        parentClasses,

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

    const options = {
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
    };

    const blocksProps = useBlockProps.save({
        id: uniqueId,
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            <div {...blocksProps}>
                <div className="zolo-qrcode-wrapper" data-options={JSON.stringify(options)}></div>
            </div>
        </>
    );
}
