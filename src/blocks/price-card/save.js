import { useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon, sanitizeText, sanitizeUrl } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
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
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div
                className="zolo-pricing-card"
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
                        <p className="zolo-price">
                            {primaryShowOriginalPrice && primaryOriginalPrice && (
                                <small className="zolo-price-original zolo-original-value">
                                    {sanitizeText(primaryPrefix)}
                                    {sanitizeText(primaryOriginalPrice)}
                                </small>
                            )}
                            {primaryPrefix && <small className="zolo-prefix">{sanitizeText(primaryPrefix)}</small>}
                            <span className="zolo-price-value">{sanitizeText(primaryPrice)}</span>
                            {primarySuffix && <small className="zolo-price-period zolo-suffix">{sanitizeText(primarySuffix)}</small>}
                        </p>
                    </div>
                    <div className="zolo-subtext zolo-description">{sanitizeText(primaryDescription)}</div>
                    <a
                        className="zolo-cta zolo-button"
                        href={buttonLink?.url || '#'}
                        target={buttonLink?.newTab ? '_blank' : '_self'}
                        rel={buttonLink?.newTab ? 'noopener noreferrer' : ''}
                    >
                        {sanitizeText(buttonText)}
                    </a>
                    <div className="zolo-note">{sanitizeText(primaryFooterText)}</div>
                </div>
            </div>
        </div>
    );
};

export default Save;
