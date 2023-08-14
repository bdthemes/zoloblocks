import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        styles,
        titleText,
        titleTagName,
        showDesc,
        descText,
        orginalPrice,
        pricePrefix,
        priceSuffix,
        price,
        sale,
        period,
        showFeatureHeading,
        featureTitle,
        featureDesc,
        features,
        showBtn,
        buttonText,
        buttonLink,
        showChatBtn,
        chatBtnLink,
        chatBtnText,
        showRibbon,
        ribbonTitle,
    } = attributes;

    const blockprops = useBlockProps.save({
        className: `zolo-block-wrapper ${uniqueId} ${'zolo-pricing-' + styles}`,
    });

    const pricingPeriod = period.length !== 0 && period.split(',');
    return (
        <div {...blockprops}>
            <div className="zolo-item">
                <div className="zolo-head-content">
                    <RichText.Content tagName={titleTagName} value={titleText} className="zolo-package-title" />

                    {showRibbon && ribbonTitle && <div className="zolo-ribbon-btn">{ribbonTitle}</div>}

                    <div className="zolo-price-info">
                        {orginalPrice && sale && (
                            <span className="zolo-orginal-price">
                                {pricePrefix && <span className="currency">{pricePrefix}</span>}
                                <span className="price">{orginalPrice}</span>
                            </span>
                        )}

                        {price && (
                            <span className="zolo-price">
                                {pricePrefix && <span className="currency">{pricePrefix}</span>}
                                <span className="price">{price}</span>
                                {priceSuffix && <span className="fractional">{priceSuffix}</span>}
                            </span>
                        )}

                        {pricingPeriod.length !== 0 && (
                            <div className="zolo-user-month">
                                {pricingPeriod.map((name, index) => (
                                    <span className={`zolo-period text-${index}`} key={index}>
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {showDesc && <RichText.Content tagName="div" className="zolo-package-desc" value={descText} />}

                    <div className="zolo-link-btn">
                        {showBtn && (
                            <RichText.Content
                                tagName="a"
                                className="zolo-buy-btn"
                                value={buttonText}
                                href={buttonLink && buttonLink.url ? buttonLink.url : '# '}
                                target={buttonLink && buttonLink.openInNewTab && '_blank'}
                                rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                            />
                        )}
                        {showChatBtn && (
                            <RichText.Content
                                tagName="a"
                                className="zolo-chat-btn"
                                value={chatBtnText}
                                href={chatBtnLink && chatBtnLink.url ? chatBtnLink.url : '# '}
                                target={chatBtnLink && chatBtnLink.openInNewTab && '_blank'}
                                rel={chatBtnLink && chatBtnLink.openInNewTab && 'noopener noreferrer'}
                            />
                        )}
                    </div>
                </div>

                <div className="zolo-features-info">
                    {showFeatureHeading && (
                        <>
                            <RichText.Content tagName="div" value={featureTitle} className="zolo-features-title" />
                            <RichText.Content tagName="div" value={featureDesc} className="zolo-features-desc" />
                        </>
                    )}

                    {features.length !== 0 && (
                        <ul className="features">
                            {features.map((item, index) => (
                                <li key={index}>
                                    {item.icon && (
                                        <span className="zolo-check-icon">
                                            <DisplayIcon icon={item.icon} />
                                        </span>
                                    )}
                                    <span className="zolo-list-text">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Save;
