/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

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
        placeholder,
        buttonType,
        buttonIcon,
        buttonText,
        labelText,
        btnLayoutType,
        showButtonText,
        showIcon,
        showNameField,
        labelName,
        namePlaceholder,
        showMessage,
        textSuccess,
        textSubscribed,
        textError,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, `zolo-newsletter ${preset}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.newsletter} alt={__('Newsletter', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <form className={`zolo-newslatter-form ${preset} ${preset === 'zolo-newslatter-4' ? btnLayoutType : ''}`}>
                    {showNameField && (
                        <div className="zolo-form-control" role="tablist">
                            <input
                                id="zolo-newsletter-name-field"
                                type="name"
                                name="name"
                                placeholder={namePlaceholder}
                                className="zolo-form-input"
                            />
                            <label htmlFor={uniqueId} className="zolo-form-label">
                                {labelName}
                            </label>
                        </div>
                    )}

                    <div className="zolo-form-control" role="tablist">
                        <input
                            id="zolo-newsletter-email-field"
                            type="email"
                            name="email"
                            placeholder={placeholder}
                            className="zolo-form-input"
                        />
                        <label htmlFor={uniqueId} className="zolo-form-label">
                            {labelText}
                        </label>
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
            </div>
        </>
    );
}
