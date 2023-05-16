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
  BTN_HOVER_BG,
  BTN_HOVER_BORDER,
  BTN_MARGIN,
  BTN_NORMAL_BG,
  BTN_PADDING,
  BTN_SHADOW,
  FEATURE_ALIGN,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_SHADOW
} from './constants';
import { BTN_TYPOGRAPHY, RIBBON_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
  handleUniqueId,
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
} = window.zoloModule;

const Edit = (props) => {

  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    uniqueId,
    blockStyle,
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
    featureTitle,
    featureDesc,
    features,

    //buttons
    buttonText,
    showChatBtn,
    chatBtnText,

    //ribbon
    showRibbon,
    ribbonTitle,
    ribbonXPosition,
    ribbonYPosition,
    ribbonRotate,
    //style

    btnTextColor,
    btnHoverTextColor,

    ribbonBgColor,
    ribbonColor,



  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  useEffect(() => {
    handleUniqueId({
      BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId,
    });
  }, []);

  //block wrapper class
  const blockProps = useBlockProps({
    className: classnames(
      className,
      `zolo-block-wrapper ${uniqueId} ${'zolo-pricing-' + styles}`
    ),
  });

  //css generate

  //header style

  //price style

  //feature style
  const {
    desktopAlignStyle: featureAlignDesktop,
    tabAlignStyle: featureAlignTab,
    mobAlignStyle: featureAlignMob,
  } = generateResAlignmentStyle({
    controlName: FEATURE_ALIGN,
    property: "justify-content",
    attributes,
  });
  const {
    desktopAlignStyle: featureInfoAlignDesktop,
    tabAlignStyle: featureInfoAlignTab,
    mobAlignStyle: featureInfoAlignMob,
  } = generateResAlignmentStyle({
    controlName: FEATURE_ALIGN,
    property: "text-align",
    attributes,
  });
  //button style
  const {
    dimensionStylesDesktop: btnMarginDesktop,
    dimensionStylesTab: btnMarginTab,
    dimensionStylesMobile: btnMarginMobile,
  } = generateDimensionStyle({
    controlName: BTN_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const {
    dimensionStylesDesktop: btnPaddingDesktop,
    dimensionStylesTab: btnPaddingTab,
    dimensionStylesMobile: btnPaddingMobile,
  } = generateDimensionStyle({
    controlName: BTN_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    typoStylesDesktop: btnTypoDesktop,
    typoStylesTab: btnTypoTab,
    typoStylesMobile: btnTypoMobile,
  } = generateTypographyStyles({
    prefixConstant: BTN_TYPOGRAPHY,
    attributes,
  })
  const {
    backgroundStylesDesktop: btnBgDesktop,
    backgroundStylesTab: btnBgTab,
    backgroundStylesMobile: btnBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: BTN_NORMAL_BG,
  });
  const {
    backgroundStylesDesktop: btnHoverBgDesktop,
    backgroundStylesTab: btnHoverBgTab,
    backgroundStylesMobile: btnHoverBgMob
  } = generateNormalBGControlStyles({
    attributes,
    controlName: BTN_HOVER_BG,
  });
  const {
    desktopBorderStyle: btnBorderDesktop,
    tabBorderStyle: btnBorderTab,
    mobBorderStyle: btnBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: BTN_BORDER,
  });
  const {
    desktopBorderStyle: btnHoverBorderDesktop,
    tabBorderStyle: btnHoverBorderTab,
    mobBorderStyle: btnHoverBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: BTN_HOVER_BORDER,
  });

  const {
    boxShadowStyle: btnShadow,
  } = generateBoxShadowStyles({
    attributes,
    controlName: BTN_SHADOW,
  });

  //ribbon style
  const {
    typoStylesDesktop: ribbonTypoDesktop,
    typoStylesTab: ribbonTypoTab,
    typoStylesMobile: ribbonTypoMobile,
  } = generateTypographyStyles({
    prefixConstant: RIBBON_TYPOGRAPHY,
    attributes,
  })

  //wrapper style
  const {
    dimensionStylesDesktop: wrapperMarginDesktop,
    dimensionStylesTab: wrapperMarginTab,
    dimensionStylesMobile: wrapperMarginMobile,
  } = generateDimensionStyle({
    controlName: WRAPPER_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const {
    dimensionStylesDesktop: wrapperPaddingDesktop,
    dimensionStylesTab: wrapperPaddingTab,
    dimensionStylesMobile: wrapperPaddingMobile,
  } = generateDimensionStyle({
    controlName: WRAPPER_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
    backgroundStylesTab: wrapperBackgroundStylesTab,
    hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
    backgroundStylesMobile: wrapperBackgroundStylesMobile,
    hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
    overlayStylesDesktop: wrapperOverlayStylesDesktop,
    hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
    overlayStylesTab: wrapperOverlayStylesTab,
    hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
    overlayStylesMobile: wrapperOverlayStylesMobile,
    hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
  } = generateBackgroundControlStyles({
    attributes,
    controlName: WRAPPER_BG,
  });

  const {
    boxShadowStyle: wrapperShadow,
    hoverBoxShadowstyle: wrapperHoverShadow,
    transitionStyle: wrapperShadowTransition
  } = generateBoxShadowStyles({
    attributes,
    controlName: WRAPPER_SHADOW,
  });

  const {
    desktopBorderStyle: wrapperBorderDesktop,
    tabBorderStyle: wrapperBorderTab,
    mobBorderStyle: wrapperBorderMob
  } = generateBorderStyle({
    attributes,
    controlName: WRAPPER_BORDER,
  });

  //css style
  const wrapperStylesDesktop = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBorderDesktop}
			${wrapperShadow}
			transition:${wrapperShadowTransition};
      --zolo-ribbon-xposition: ${ribbonXPosition}px;
      --zolo-ribbon-yposition: ${ribbonYPosition}px;
      --zolo-ribbon-rotate: ${ribbonRotate}deg;
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperHoverShadow}
		}
		.zolo-block-wrapper.${uniqueId}::before{
				${wrapperOverlayStylesDesktop}
		}
		.zolo-block-wrapper.${uniqueId}:hover::before{
			${wrapperHoverOverlayStylesDesktop}
		}
	`;
  const wrapperStylesTab = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBackgroundStylesTab}
			${wrapperBorderTab}
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesTab}
		}
		.zolo-block-wrapper.${uniqueId}::before{
			${wrapperOverlayStylesTab}
		}
		.zolo-block-wrapper.${uniqueId}:hover::before{
			${wrapperHoverOverlayStylesTab}
		}
	`;
  const wrapperStylesMobile = `
		.zolo-block-wrapper.${uniqueId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBorderMob}
		}
		.zolo-block-wrapper.${uniqueId}:hover{
			${wrapperHoverBackgroundStylesMobile}
		}
		.zolo-block-wrapper.${uniqueId}::before{
			${wrapperOverlayStylesMobile}
		}
		.zolo-block-wrapper.${uniqueId}::before:hover{
			${wrapperHoverOverlayStylesMobile}
		}
	`;

  const featuresStylesDesktop = `
    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignDesktop}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureAlignDesktop}
    }
  `;
  const featuresStylesTab = `
    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignTab}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureAlignTab}
    }
  `;
  const featuresStylesMobile = `
    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignMob}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureAlignMob}
    }
  `;

  const buttonStylesDesktop = `
    .${uniqueId} .zolo-link-btn a{
      ${btnTextColor ? `color: ${btnTextColor};` : ''}
      ${btnMarginDesktop}
      ${btnPaddingDesktop}
      ${btnTypoDesktop}
      ${btnBgDesktop}
      ${btnBorderDesktop}
      ${btnShadow}
    }
    .${uniqueId} .zolo-link-btn a:hover{
      ${btnHoverTextColor ? `color: ${btnHoverTextColor};` : ''}
      ${btnHoverBgDesktop}
      ${btnHoverBorderDesktop}
    }
  `;

  const buttonStylesTab = `
    .${uniqueId} .zolo-link-btn a{
      ${btnMarginTab}
      ${btnPaddingTab}
      ${btnTypoTab}
      ${btnBgTab}
      ${btnBorderTab}
    }
    .${uniqueId} .zolo-link-btn a:hover{
      ${btnHoverBgTab}
      ${btnHoverBorderTab}
    }
  `;

  const buttonStylesMob = `
    .${uniqueId} .zolo-link-btn a{
      ${btnMarginMobile}
      ${btnPaddingMobile}
      ${btnTypoMobile}
      ${btnBgMob}
      ${btnBorderMob}
    }
    .${uniqueId} .zolo-link-btn a:hover{
      ${btnHoverBgMob}
      ${btnHoverBorderMob}
    }
  `;

  const ribbonStylesDesktop = `
  .${uniqueId} .zolo-ribbon-btn{
    ${ribbonColor ? `color: ${ribbonColor};` : ''}
    ${ribbonBgColor ? `background-color: ${ribbonBgColor};` : ''}
    ${ribbonTypoDesktop}
    -webkit-transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
    transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
  }
`;
  const ribbonStylesTab = `
  .${uniqueId} .zolo-ribbon-btn{
   ${ribbonTypoTab}
  }
`;
  const ribbonStylesMobile = `
  .${uniqueId} .zolo-ribbon-btn{
    ${ribbonTypoMobile}
  }
`;

  const desktopAllStyle = `
		${wrapperStylesDesktop}
    ${featuresStylesDesktop}
    ${ribbonStylesDesktop}
    ${buttonStylesDesktop}
	`;

  const tabletAllStyle = `
		${wrapperStylesTab}
    ${featuresStylesTab}
    ${ribbonStylesTab}
    ${buttonStylesTab}
	`;

  const mobileAllStyle = `
		${wrapperStylesMobile}
    ${featuresStylesMobile}
    ${ribbonStylesMobile}
    ${buttonStylesMob}
	`;

  const allStyle = `
  ${desktopAllStyle}
  @media all and (max-width: 1024px) {
    ${tabletAllStyle}
  }
  @media all and (max-width: 767px) {
    ${mobileAllStyle}
  }
`;

  // Set All Style in "blockStyle" Attribute
  useEffect(() => {
    const styles = {
      desktop: desktopAllStyle,
      tablet: tabletAllStyle,
      mobile: mobileAllStyle,
    };
    if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
      setAttributes({ blockStyle: styles });
    }
  }, [attributes]);


  const pricingPeriod = period.length !== 0 && period.split(",");

  return (
    <>
      {isSelected && (
        <Inspector
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}

      <style>{` ${softMinifyCssStrings(allStyle)}`}</style>

      <div {...blockProps}>
        <div className="zolo-item">
          <div className="zolo-head-content">

            <RichText
              tagName={titleTagName}
              className="zolo-package-title"
              value={titleText}
              onChange={(titleText) => setAttributes({ titleText })}
              placeholder={__('Add service name', 'zolo-blocks')}
              allowedFormats={["bold", "italic", "strikethrough"]}
            />

            {(showRibbon && ribbonTitle) && (
              <div className="zolo-ribbon-btn">{ribbonTitle}</div>
            )}

            <div className="zolo-price-info">
              {(orginalPrice && sale) && (
                <span className="zolo-orginal-price">
                  {pricePrefix && <span className="currency">{pricePrefix}</span>}
                  <span className='price'>{orginalPrice}</span>
                </span>
              )}

              {price && (
                <span className="zolo-price">
                  {pricePrefix && <span className="currency">{pricePrefix}</span>}
                  <span className='price'>{price}</span>
                  {priceSuffix && <span className="fractional">{priceSuffix}</span>}
                </span>
              )}

              {pricingPeriod.length !== 0 && (
                <div className="zolo-user-month">
                  {pricingPeriod.map((name, index) => (
                    <span className={`zolo-period text-${index}`} key={index}>{name}</span>
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
                allowedFormats={["bold", "italic", "strikethrough"]}
              />
            )}

            <div className="zolo-link-btn">
              <RichText
                tagName="a"
                className="zolo-buy-btn"
                value={buttonText}
                onChange={(text) => setAttributes({ buttonText: text })}
                placeholder={__('Button Text', 'zolo-blocks')}
                allowedFormats={[]}
              />
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
              <>
                <RichText
                  tagName="div"
                  className="zolo-features-title"
                  value={featureTitle}
                  onChange={(featureTitle) => setAttributes({ featureTitle })}
                  placeholder={__('Add feature title', 'zolo-blocks')}
                  allowedFormats={["bold", "italic", "strikethrough"]}
                />
                <RichText
                  tagName="div"
                  className="zolo-features-desc"
                  value={featureDesc}
                  onChange={(featureDesc) => setAttributes({ featureDesc })}
                  placeholder={__('Add feature description', 'zolo-blocks')}
                  allowedFormats={["bold", "italic", "strikethrough"]}
                />
              </>
            )}

            {features.length !== 0 && (
              <ul className="features">
                {features.map((item, index) => (
                  <li key={index}>
                    {item.icon && <span className="zolo-check-icon"><DisplayIcon icon={item.icon} /></span>}
                    <span className="zolo-list-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit;
