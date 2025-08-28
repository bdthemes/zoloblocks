import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, sanitizeText } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        preset,
        focusStyle,
        zoloId,
        placeholder,
        buttonType,
        buttonText,
        buttonIcon,
        showLabel,
        labelText,
        btnLayoutType,
        showIcon,
        showFieldIcon,
        showButtonText,
        showNameField,
        namePlaceholder,
        labelName,
        textSuccess,
        textSubscribed,
        textError,
        showLabels,
        provider,
        selectedWebhook,
        btnWType,
    } = attributes;
    const newsletterMsg = {
        textSuccess,
        textError,
        textSubscribed,
        provider: provider ? provider : 'mailchimp',
        selectedWebhook,
    };

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
                settings: ``,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <form
                className={`zolo-newsletter-form ${preset} ${preset === 'zolo-newsletter-4' ? btnLayoutType : ''}${preset === 'zolo-newsletter-5' ? focusStyle : ''} ${preset !== 'zolo-newsletter-4' ? btnWType : ''}`}
                data-settings={JSON.stringify(newsletterMsg)}
            >
                {showNameField && (
                    <div className="zolo-form-control" role="tablist">
                        {preset !== 'zolo-newsletter-5' && (
                            <input
                                id="zolo-newsletter-name-field"
                                type="name"
                                name="name"
                                placeholder={__(namePlaceholder, 'zoloblocks')}
                                className="zolo-form-input"
                            />
                        )}

                        {preset === 'zolo-newsletter-5' && (
                            <>
                                <div className="zolo-nl-field-icon-wrap">
                                    <input
                                        id="zolo-newsletter-name-field"
                                        type="name"
                                        name="name"
                                        placeholder={__(namePlaceholder, 'zoloblocks')}
                                        className="zolo-form-input"
                                    />
                                    <span class="zolo-focus-border">
                                        <span className="zolo-focus-inner"></span>
                                    </span>
                                    {showFieldIcon && (
                                        <span className="zolo-nl-field-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                        {showLabels && (
                            <label htmlFor={uniqueId} className="zolo-form-label">
                                {sanitizeText(labelName)}
                            </label>
                        )}
                    </div>
                )}

                <div className="zolo-form-control" role="tablist">
                    {preset !== 'zolo-newsletter-5' && (
                        <input
                            id="zolo-newsletter-email-field"
                            type="email"
                            name="email"
                            placeholder={__(placeholder, 'zoloblocks')}
                            className="zolo-form-input"
                        />
                    )}

                    {preset === 'zolo-newsletter-5' && (
                        <>
                            <div className="zolo-nl-field-icon-wrap">
                                <input
                                    id="zolo-newsletter-email-field"
                                    type="email"
                                    name="email"
                                    placeholder={__(placeholder, 'zoloblocks')}
                                    className="zolo-form-input"
                                />
                                <span class="zolo-focus-border">
                                    <span className="zolo-focus-inner"></span>
                                </span>
                                {showFieldIcon && (
                                    <span className="zolo-nl-field-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                            <path d="M3 7l9 6l9 -6" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                    {showLabels && (
                        <label htmlFor={uniqueId} className="zolo-form-label">
                            {sanitizeText(labelText)}
                        </label>
                    )}
                </div>

                <div className="zolo-form-control zolo-form-submit-btn">
                    {showButtonText || showIcon ? (
                        <button className="zolo-form-btn" type="submit">
                            {showButtonText && <RichText.Content tagName="span" className="zolo-form-btn-text" value={buttonText} />}
                            {showIcon && (
                                <span className="zolo-newsletter-icon-wrap">
                                    <DisplayZoloIcon icon={buttonIcon} />
                                </span>
                            )}
                        </button>
                    ) : null}
                </div>
            </form>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
