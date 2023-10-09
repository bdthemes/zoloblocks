//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import './style.scss';

//block constants
import {
    BLOCK_PREFIX,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_HOVER_BG,
    BTN_MARGIN,
    BTN_NORMAL_BG,
    BTN_PADDING,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    CBTN_BORDER,
    CBTN_RADIUS,
    CBTN_HOVER_BG,
    CBTN_MARGIN,
    CBTN_NORMAL_BG,
    CBTN_PADDING,
    CBTN_SHADOW,
    CBTN_HOVER_SHADOW,
    DESC_MARGIN,
    FEATURE_ALIGN,
    FEATURE_DESC_MARGIN,
    FEATURE_ICON_GAP,
    FEATURE_ICON_SIZE,
    FEATURE_ITEM_GAP,
    FEATURE_MARGIN,
    FEATURE_PADDING,
    FEATURE_ICON_PADDING,
    ORGINAL_PRICE_MARGIN,
    PERIOD_MARGIN,
    PRICE_MARGIN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_TEXT_SHADOW,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_BORDER_RADIUS,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_RADIUS,
    RIBBON_BG,
} from './constants';
import {
    BTN_TYPOGRAPHY,
    CBTN_TYPOGRAPHY,
    DESC_TYPOGRAPHY,
    FEATURE_DESC_TYPOGRAPHY,
    FEATURE_TITLE_TYPOGRAPHY,
    FEATURE_TYPOGRAPHY,
    ORGINAL_PRICE_TYPOGRAPHY,
    PERIOD_TYPOGRAPHY,
    PRICE_TYPOGRAPHY,
    RIBBON_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    DynamicTag,
    generateResAlignmentStyle,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    DisplayIcon,
    generateNormalBGControlStyles,
    classArrayToStr,
} = window.zoloModule;

// import style
import Style from './style';

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        zoloStyles,
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

        btnTextColor,
        btnHoverTextColor,
        btnHoverBorderColor,
        chatBtnColor,
        chatBtnHoverColor,
        chatBtnHoverBorderColor,

        //ribbon
        showRibbon,
        ribbonTitle,
        ribbonXPosition,
        ribbonYPosition,
        ribbonRotate,
        //style
        titleColor,
        titleBgColor,
        descColor,
        priceColor,
        prefixSize,
        suffixSize,
        prefixPosition,
        suffixPosition,
        orginalPriceColor,
        periodColor,
        featureTitleColor,
        featureDescColor,
        featureColor,
        featureIconColor,
        featureIconBgColor,
        ribbonBgColor,
        ribbonColor,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(className, classArrayToStr(parentClasses)),
    });

    const pricingPeriod = period.length !== 0 && period.split(',');

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

                            <div className="zolo-link-btn">
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
            </div>
        </>
    );
};

export default Edit;
