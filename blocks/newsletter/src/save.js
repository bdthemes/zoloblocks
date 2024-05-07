import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {/* <input
                type="email"
                id="zolo-newsletter-field"
                className={`zolo-newsletter-field`}
                placeholder={__('Enter your email address', 'zoloblocks')}
                aria-label="Input Field"
            />
            <button type="submit" id="zolo-newsletter-action" className={`zolo-newsletter-action`} aria-label="Submit Buton">
                <span className="zolo-newsletter-button-icon">SUBMIT</span>
            </button> */}

            <form className="zolo-newsletter zolo-newsletter-style-1 zolo-field-icon-style-1 form">
                <div className="wp-block-zolo-email form-group">
                    <div className="zolo-field-item">
                        <div className="zolo-label-wrapper">
                            <label className="zolo-label">Email</label>
                            <span className="zolo-required">*</span>
                        </div>
                        <div className="zolo-field-input-item">
                            <input class="zolo-newsletter-field" type="email" name="email" required="" placeholder="Enter your email" />
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
    );
};

export default Save;
