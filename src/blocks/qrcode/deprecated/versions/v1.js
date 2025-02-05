const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
// attributes.js
import attributes from '../../attributes';

const v1 = {
    attributes: {
        ...attributes,
        qrCodeSize: {
            type: 'number',
            default: 240,
        },
    },
    save(props) {
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
            // badge
            badgeStyle,
            showBadge,
            showBadgeIcon,
            badgeText,
            badgeIcon,
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

            // badge
            badgeStyle,
            showBadge,
            showBadgeIcon,
            badgeText,
            badgeIcon,
        };

        const blocksProps = useBlockProps.save({
            id: uniqueId,
            className: classnames(uniqueId, classArrayToStr(parentClasses), { [badgeStyle]: showBadge }),
        });

        // filter hooks for render
        const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
        const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

        return (
            <>
                <div {...blocksProps}>
                    {renderHookBefore && renderHookBefore}
                    {badgeStyle == 'zolo-badge-style-1' && (
                        <div className="zolo-qrcode-wrapper" data-options={JSON.stringify(options)}></div>
                    )}
                    {badgeStyle != 'zolo-badge-style-1' && (
                        <div className="zolo-qrcode-badge-wrapper">
                            <div className="zolo-qrcode-wrapper" data-options={JSON.stringify(options)}></div>
                            {showBadge && (
                                <span className="zolo-qrcode-badge">
                                    <span className="zolo-qrcode-badge-text">{badgeText}</span>
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
    },
};

export default v1;
