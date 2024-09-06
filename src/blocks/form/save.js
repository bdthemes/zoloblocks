import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

// Save function
const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, formId, parentClasses, preset, zoloId, btnLabel, iconPosition, messagePosition, reCaptcha } = attributes;
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            {messagePosition === 'form_top' && (
                <div className={`zolo-form-msg ${messagePosition}`}>
                    <div className="zolo-form-msg-content">
                        <div className="zolo-msg-icon">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                        <p className="zolo-msg-desc"></p>
                    </div>

                    <button className="zolo-msg-close">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M6 18 18 6m0 12L6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <form
                className="zolo-contact-form zolo-contact-form-style-1 zolo-field-icon-style-1 form"
                data-form-id={formId}
                data-recaptcha={reCaptcha ? 'true' : 'false'}
            >
                <InnerBlocks.Content />
                {reCaptcha && <input type="hidden" name="g-recaptcha-response" className="zolo-g-recaptcha-response" />}
                <div className="zolo-field-item zolo-field-icon zolo-field-icon-style-1">
                    <div className="zolo-submit-btn">
                        <button
                            type="submit"
                            className={classnames(iconPosition, reCaptcha ? 'g-recaptcha' : '')}
                            {...(reCaptcha && {
                                'data-callback': 'zoloFormSubmit',
                                'data-action': 'submit',
                            })}
                        >
                            {btnLabel || __('Submit Now', 'zoloblocks')}
                        </button>
                    </div>
                </div>
            </form>
            {messagePosition === 'form_bottom' && (
                <div className={`zolo-form-msg ${messagePosition}`}>
                    <div className="zolo-form-msg-content">
                        <div className="zolo-msg-icon">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                        <p className="zolo-msg-desc"></p>
                    </div>

                    <button className="zolo-msg-close">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M6 18 18 6m0 12L6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
