/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        preset,
        focusStyle,
        placeholder,
        buttonType,
        buttonIcon,
        buttonText,
        labelText,
        btnLayoutType,
        showButtonText,
        showIcon,
        showFieldIcon,
        showNameField,
        labelName,
        namePlaceholder,
        showMessage,
        textSuccess,
        textSubscribed,
        textError,
        showLabels,
        btnWType,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.newsletter} alt={__('Newsletter Block Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <form
                    className={`zolo-newsletter-form ${preset} ${preset === 'zolo-newsletter-4' ? btnLayoutType : ''}${preset === 'zolo-newsletter-5' ? focusStyle : ''} ${preset !== 'zolo-newsletter-4' ? btnWType : ''}`}
                >
                    {showNameField && (
                        <div className="zolo-form-control" role="tablist">
                            {preset !== 'zolo-newsletter-5' && (
                                <input
                                    id="zolo-newsletter-name-field"
                                    type="name"
                                    name="name"
                                    placeholder={namePlaceholder}
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
                                            placeholder={namePlaceholder}
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
                                    {labelName}
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
                                placeholder={placeholder}
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
                                        placeholder={placeholder}
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
                                {labelText}
                            </label>
                        )}
                    </div>

                    <div className="zolo-form-control zolo-form-submit-btn">
                        {showIcon || showButtonText ? (
                            <button type="submit" className="zolo-form-btn">
                                {showButtonText && (
                                    <RichText
                                        tagName="span"
                                        placeholder={__('Email', 'zolo-newsletter')}
                                        value={buttonText}
                                        onChange={(value) => setAttributes({ buttonText: value })}
                                        className="zolo-form-btn-text"
                                        multiline={false}
                                        allowedFormats={['core/bold', 'core/italic', 'core/strikethrough']}
                                    />
                                )}
                                {showIcon && (
                                    <span className="zolo-newsletter-icon-wrap">
                                        <DisplayZoloIcon icon={buttonIcon} />
                                    </span>
                                )}
                            </button>
                        ) : null}
                    </div>
                </form>
                {showMessage && (
                    <div className="zolo-newsletter-message">
                        <span class="zolo-newsletter-info-text status-success">{textSuccess}</span>
                        <span class="zolo-newsletter-info-text status-warning">{textSubscribed}</span>
                        <span class="zolo-newsletter-info-text status-error">{textError}</span>
                    </div>
                )}
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
