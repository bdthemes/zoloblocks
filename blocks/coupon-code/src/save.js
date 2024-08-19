import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const {
        uniqueId,
        parentClasses,

        // settings
        couponText,
        couponIcon,
        couponCode,
        link,
        couponPlaceHolder,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div className="zolo-coupon-code-wrap">
                <div className="zolo-coupon-code-final">
                    <span className="zolo-coupon-code-text">{couponCode}</span>
                </div>
                <div className="zolo-coupon-msg-text">
                    <DisplayZoloIcon icon={couponIcon} />
                    {couponText}
                </div>
            </div>
        </div>
    );
}
