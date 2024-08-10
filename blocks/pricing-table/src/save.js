import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        preset,
        uniqueId,
        parentClasses,
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
        showFeatures,
        hideFeatureIcon,
        featureTitle,
        showFeatureDesc,
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
        ribbonPosition,
        btnsPosition,
        btnsDirection,
        zoloId,
    } = attributes;

    const blockprops = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset !== '' && preset),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const pricingPeriod = period.length !== 0 && period.split(',');

    return (
        <div
            {...blockprops}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className={`zolo-block-wrapper ${uniqueId} ${'zolo-pricing-' + styles}`}>
                <div className="zolo-item">
                    <div className="zolo-head-content">
                        <RichText.Content tagName={titleTagName} value={titleText} className="zolo-package-title" />

                        {showRibbon && ribbonTitle && <div className={`zolo-ribbon-btn ${ribbonPosition}`}>{ribbonTitle}</div>}

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

                            {pricingPeriod && pricingPeriod.length > 0 && (
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

                        {btnsPosition === 'middle' && (
                            <>
                                {(showBtn || showChatBtn) && (
                                    <div className={`zolo-link-btn ${btnsDirection}`}>
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
                                )}
                            </>
                        )}
                    </div>

                    <div className="zolo-features-info">
                        {showFeatureHeading && <RichText.Content tagName="div" value={featureTitle} className="zolo-features-title" />}

                        {showFeatureDesc && <RichText.Content tagName="div" value={featureDesc} className="zolo-features-desc" />}

                        {features.length !== 0 && showFeatures && (
                            <ul className="features">
                                {features.map((item, index) => (
                                    <li key={index}>
                                        {item.icon && hideFeatureIcon !== true && (
                                            <span className="zolo-check-icon">
                                                <DisplayZoloIcon icon={item.icon} />
                                            </span>
                                        )}
                                        <span className="zolo-list-text">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {btnsPosition === 'bottom' && (
                            <>
                                {(showBtn || showChatBtn) && (
                                    <div className={`zolo-link-btn ${btnsDirection}`}>
                                        {showBtn && (
                                            <RichText.Content
                                                tagName="a"
                                                className="zolo-buy-btn"
                                                value={buttonText}
                                                href={buttonLink && buttonLink.url ? buttonLink.url : '# '}
                                                target={buttonLink && buttonLink.openInNewTab && '_blank'}
                                                rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                                                title={buttonText}
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
                                                title={chatBtnText}
                                            />
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
