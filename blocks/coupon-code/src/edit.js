/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';
import './style.scss';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

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

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
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
        </>
    );
}
