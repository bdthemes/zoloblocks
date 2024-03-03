import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

// Save function
const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, zoloId, btnLabel, iconPosition } = attributes;
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <form className="zolo-contact-form zolo-contact-form-style-1 zolo-field-icon-style-1">
                <InnerBlocks.Content />
                <div className="zolo-field-item zolo-field-icon zolo-field-icon-style-1">
                    <div className="zolo-submit-btn">
                        <button type="submit" className={iconPosition}>
                            {btnLabel || __('Submit Now', 'zolo-blocks')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Save;
