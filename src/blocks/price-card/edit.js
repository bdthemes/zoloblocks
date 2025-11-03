/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon, sanitizeText, sanitizeUrl } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        toggleStyle,
        ribbonToggle,
        ribbonText,
        primaryTitle,
        secondaryTitle,
        // Primary
        primaryPriceTitle,
        primaryPrefix,
        primaryPrice,
        primarySuffix,
        primaryShowOriginalPrice,
        primaryOriginalPrice,
        primaryDescription,
        // Secondary
        secondaryPriceTitle,
        secondaryPrefix,
        secondaryPrice,
        secondarySuffix,
        secondaryShowOriginalPrice,
        secondaryOriginalPrice,
        secondaryDescription,
        // Common Button
        buttonText,
        buttonLink,
        // Button Toggle
        buttonToggle,
        primaryButtonText,
        primaryButtonLink,
        secondaryButtonText,
        secondaryButtonLink,
        primaryFooterText,
        secondaryFooterText,
    } = attributes;

    // Toggle state (false = primary, true = secondary)
    const [isSecondary, setIsSecondary] = useState(false);

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // Get current content based on toggle state
    const currentContent = isSecondary
        ? {
            priceTitle: secondaryPriceTitle,
            prefix: secondaryPrefix,
            price: secondaryPrice,
            suffix: secondarySuffix,
            showOriginalPrice: secondaryShowOriginalPrice,
            originalPrice: secondaryOriginalPrice,
            description: secondaryDescription,
            footerText: secondaryFooterText,
            buttonText: buttonToggle ? secondaryButtonText : buttonText,
            buttonLink: buttonToggle ? secondaryButtonLink : buttonLink,
        }
        : {
            priceTitle: primaryPriceTitle,
            prefix: primaryPrefix,
            price: primaryPrice,
            suffix: primarySuffix,
            showOriginalPrice: primaryShowOriginalPrice,
            originalPrice: primaryOriginalPrice,
            description: primaryDescription,
            footerText: primaryFooterText,
            buttonText: buttonToggle ? primaryButtonText : buttonText,
            buttonLink: buttonToggle ? primaryButtonLink : buttonLink,
        };

    // Toggle handler
    const handleToggle = () => {
        setIsSecondary(!isSecondary);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={`zolo-pricing-card ${isSecondary ? 'secondary-active' : ''}`}>
                    {ribbonToggle && ribbonText && (
                        <div className="zolo-ribbon">
                            <span className="zolo-ribbon-text">{sanitizeText(ribbonText)}</span>
                        </div>
                    )}
                    <div className="zolo-pricing-inner">
                        <div className="zolo-toggle-wrap">
                            <div className={`zolo-toggle-label ${!isSecondary ? 'zolo-toggle-active' : ''}`}>{sanitizeText(primaryTitle)}</div>
                            <button
                                className={`zolo-switch zolo-switch-${toggleStyle} ${isSecondary ? 'on' : ''}`}
                                onClick={handleToggle}
                                type="button"
                            >
                                <span className="zolo-knob" />
                            </button>
                            <div className={`zolo-toggle-label ${isSecondary ? 'zolo-toggle-active' : ''}`}>{sanitizeText(secondaryTitle)}</div>
                        </div>
                        <div className="zolo-starting">{sanitizeText(currentContent.priceTitle)}</div>
                        <div className="zolo-price-wrap">
                            {currentContent.showOriginalPrice && currentContent.originalPrice && (
                                <small className="zolo-price-original">
                                    {currentContent.prefix}
                                    {currentContent.originalPrice}
                                </small>
                            )}
                            <div className='zolo-discount-price'>
                                {currentContent.prefix && <small className="zolo-prefix">{currentContent.prefix}</small>}
                                <span className="zolo-price-value">{currentContent.price}</span>
                            </div>

                            {currentContent.suffix && <small className="zolo-price-period">{currentContent.suffix}</small>}
                        </div>
                        <div className="zolo-subtext">{sanitizeText(currentContent.description)}</div>
                        <a
                            className="zolo-cta zolo-button"
                            href={currentContent.buttonLink?.url || '#'}
                            target={currentContent.buttonLink?.newTab ? '_blank' : '_self'}
                            rel={currentContent.buttonLink?.newTab ? 'noopener noreferrer' : ''}
                        >
                            {sanitizeText(currentContent.buttonText)}
                        </a>
                        <div className="zolo-note">{sanitizeText(currentContent.footerText)}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
