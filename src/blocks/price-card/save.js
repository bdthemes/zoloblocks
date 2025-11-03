import { useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon, sanitizeText, sanitizeUrl } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        preset,
        toggleStyle,
        ribbonToggle,
        ribbonText,
        primaryTitle,
        secondaryTitle,
        primaryPriceTitle,
        primaryPrefix,
        primaryPrice,
        primarySuffix,
        primaryShowOriginalPrice,
        primaryOriginalPrice,
        primaryDescription,
        secondaryPriceTitle,
        secondaryPrefix,
        secondaryPrice,
        secondarySuffix,
        secondaryShowOriginalPrice,
        secondaryOriginalPrice,
        secondaryDescription,
        primaryFooterText,
        secondaryFooterText,
        // Common Button
        buttonText,
        buttonLink,
        // Button Toggle Mode
        buttonToggle,
        primaryButtonText,
        primaryButtonLink,
        secondaryButtonText,
        secondaryButtonLink,
        buttonSize,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div
                className={`zolo-pricing-card zolo-pricing-card-${preset}`}
                data-toggle-style={toggleStyle}
                data-primary-price-title={primaryPriceTitle}
                data-primary-prefix={primaryPrefix}
                data-primary-price={primaryPrice}
                data-primary-suffix={primarySuffix}
                data-primary-show-original={primaryShowOriginalPrice}
                data-primary-original-price={primaryOriginalPrice}
                data-primary-description={primaryDescription}
                data-primary-footer-text={primaryFooterText}
                data-secondary-price-title={secondaryPriceTitle}
                data-secondary-prefix={secondaryPrefix}
                data-secondary-price={secondaryPrice}
                data-secondary-suffix={secondarySuffix}
                data-secondary-show-original={secondaryShowOriginalPrice}
                data-secondary-original-price={secondaryOriginalPrice}
                data-secondary-description={secondaryDescription}
                data-secondary-footer-text={secondaryFooterText}
                data-button-toggle={buttonToggle}
                data-button-text={buttonText}
                data-button-url={buttonLink?.url}
                data-button-new-tab={buttonLink?.newTab}
                data-primary-button-text={primaryButtonText}
                data-primary-button-url={primaryButtonLink?.url}
                data-primary-button-new-tab={primaryButtonLink?.newTab}
                data-secondary-button-text={secondaryButtonText}
                data-secondary-button-url={secondaryButtonLink?.url}
                data-secondary-button-new-tab={secondaryButtonLink?.newTab}
            >
                {ribbonToggle && ribbonText && (
                    <div className="zolo-ribbon">
                        <span className="zolo-ribbon-text">{sanitizeText(ribbonText)}</span>
                    </div>
                )}
                <div className="zolo-pricing-inner">
                    <div className="zolo-toggle-wrap">
                        <div className="zolo-toggle-label zolo-toggle-active">{sanitizeText(primaryTitle)}</div>
                        <button className={`zolo-switch zolo-switch-${toggleStyle}`}>
                            <span className="zolo-knob" />
                        </button>
                        <div className="zolo-toggle-label">{secondaryTitle}</div>
                    </div>
                    <div className="zolo-starting zolo-price-title">{primaryPriceTitle}</div>
                    <div className="zolo-price-wrap">
                        {primaryShowOriginalPrice && primaryOriginalPrice && (
                            <small className="zolo-price-original zolo-original-value">
                                {sanitizeText(primaryPrefix)}
                                {sanitizeText(primaryOriginalPrice)}
                            </small>
                        )}
                        <div className='zolo-discount-price'>
                            {primaryPrefix && <small className="zolo-prefix">{sanitizeText(primaryPrefix)}</small>}
                            <span className="zolo-price-value">{sanitizeText(primaryPrice)}</span>
                        </div>
                        {primarySuffix && <small className="zolo-price-period zolo-suffix">{sanitizeText(primarySuffix)}</small>}
                    </div>
                    <div className="zolo-subtext zolo-description">{sanitizeText(primaryDescription)}</div>
                    <a
                        className={`zolo-cta zolo-button zolo-button-${buttonSize}`}
                        href={buttonToggle ? (primaryButtonLink?.url || '#') : (buttonLink?.url || '#')}
                        target={buttonToggle ? (primaryButtonLink?.newTab ? '_blank' : '_self') : (buttonLink?.newTab ? '_blank' : '_self')}
                        rel={buttonToggle ? (primaryButtonLink?.newTab ? 'noopener noreferrer' : '') : (buttonLink?.newTab ? 'noopener noreferrer' : '')}
                    >
                        {sanitizeText(buttonToggle ? primaryButtonText : buttonText)}
                    </a>
                    <div className="zolo-note">{sanitizeText(primaryFooterText)}</div>
                </div>
            </div>
        </div>
    );
};

export default Save;
