/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses} = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),

    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Star Rating Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <form
                    className="zolo-newsletter zolo-newsletter-style-1 zolo-field-icon-style-1 form"
                >
                    <div className="wp-block-zolo-email form-group">
                        <div className="zolo-field-item">
                            <div className="zolo-label-wrapper">
                                <label className="zolo-label">Email</label>
                                <span className="zolo-required">*</span>
                            </div>
                            <div className="zolo-field-input-item">
                                <input
                                    type="email"
                                    name="email"
                                    required=""
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="zolo-field-item zolo-field-icon zolo-field-icon-style-1">
                        <div className="zolo-submit-btn">
                            <button type="submit" className="right">
                                Submit Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
