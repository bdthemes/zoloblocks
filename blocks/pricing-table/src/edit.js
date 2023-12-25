//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import './style.scss';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

// import style
import Style from './style';

const Edit = (props) => {
    const { attributes, setAttributes, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        //layout
        styles,
        //header
        titleText,
        titleTagName,
        showDesc,
        descText,
        //price
        orginalPrice,
        pricePrefix,
        priceSuffix,
        price,
        sale,
        period,
        //features
        showFeatureHeading,
        showFeatureDesc,
        featureTitle,
        featureDesc,
        features,

        //buttons
        showBtn,
        showChatBtn,
        buttonText,
        chatBtnText,

        //ribbon
        showRibbon,
        ribbonTitle,
        ribbonPosition,

        // extra
        btnsPosition,
        btnsDirection,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const pricingPeriod = period.length !== 0 && period.split(',');

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.pricingTable} alt={__('Pricing Table Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                <div className={`zolo-block-wrapper ${uniqueId} ${'zolo-pricing-' + styles}`}>
                    <div className="zolo-item">
                        <div className="zolo-head-content">
                            <RichText
                                tagName={titleTagName}
                                className="zolo-package-title"
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                                placeholder={__('Add service name', 'zolo-blocks')}
                                allowedFormats={['bold', 'italic', 'strikethrough']}
                            />

                            {showRibbon && ribbonTitle && (
                                <div className={`zolo-ribbon-btn ${ribbonPosition}`}>
                                    <RichText tagName="span" value={ribbonTitle} onChange={(v) => setAttributes({ ribbonTitle: v })} />
                                </div>
                            )}

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

                            {showDesc && (
                                <RichText
                                    tagName="div"
                                    className="zolo-package-desc"
                                    value={descText}
                                    onChange={(descText) => setAttributes({ descText })}
                                    placeholder={__('Add description', 'zolo-blocks')}
                                    allowedFormats={['bold', 'italic', 'strikethrough']}
                                />
                            )}
                            {btnsPosition === 'middle' && (
                                <>
                                    {(showBtn || showChatBtn) && (
                                        <div className={`zolo-link-btn ${btnsDirection}`}>
                                            {showBtn && (
                                                <RichText
                                                    tagName="a"
                                                    className="zolo-buy-btn"
                                                    value={buttonText}
                                                    onChange={(text) => setAttributes({ buttonText: text })}
                                                    placeholder={__('Button Text', 'zolo-blocks')}
                                                    allowedFormats={[]}
                                                />
                                            )}
                                            {showChatBtn && (
                                                <RichText
                                                    tagName="a"
                                                    className="zolo-chat-btn"
                                                    value={chatBtnText}
                                                    onChange={(text) => setAttributes({ chatBtnText: text })}
                                                    placeholder={__('Button Text', 'zolo-blocks')}
                                                    allowedFormats={[]}
                                                />
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="zolo-features-info">
                            {showFeatureHeading && (
                                <RichText
                                    tagName="div"
                                    className="zolo-features-title"
                                    value={featureTitle}
                                    onChange={(featureTitle) => setAttributes({ featureTitle })}
                                    placeholder={__('Add feature title', 'zolo-blocks')}
                                    allowedFormats={['bold', 'italic', 'strikethrough']}
                                />
                            )}
                            {showFeatureDesc && (
                                <RichText
                                    tagName="div"
                                    className="zolo-features-desc"
                                    value={featureDesc}
                                    onChange={(featureDesc) => setAttributes({ featureDesc })}
                                    placeholder={__('Add feature description', 'zolo-blocks')}
                                    allowedFormats={['bold', 'italic', 'strikethrough']}
                                />
                            )}

                            {features.length !== 0 && (
                                <ul className="features">
                                    {features.map((item, index) => (
                                        <li key={index}>
                                            {item.icon && (
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
                                                <RichText
                                                    tagName="a"
                                                    className="zolo-buy-btn"
                                                    value={buttonText}
                                                    onChange={(text) => setAttributes({ buttonText: text })}
                                                    placeholder={__('Button Text', 'zolo-blocks')}
                                                    allowedFormats={[]}
                                                />
                                            )}
                                            {showChatBtn && (
                                                <RichText
                                                    tagName="a"
                                                    className="zolo-chat-btn"
                                                    value={chatBtnText}
                                                    onChange={(text) => setAttributes({ chatBtnText: text })}
                                                    placeholder={__('Button Text', 'zolo-blocks')}
                                                    allowedFormats={[]}
                                                />
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
