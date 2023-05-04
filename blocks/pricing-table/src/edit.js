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
  FEATURE_ALIGN,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_SHADOW
} from './constants';

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
    descText,
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
  //ribbon style


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

  const ribbonStylesDesktop = `
  .${uniqueId} .zolo-ribbon-btn{
    -webkit-transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
    transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
  }
`;
  const ribbonStylesTab = `
  .${uniqueId} .zolo-ribbon-btn{

  }
`;
  const ribbonStylesMobile = `
  .${uniqueId} .zolo-ribbon-btn{

  }
`;


  const desktopAllStyle = `
		${wrapperStylesDesktop}
    ${featuresStylesDesktop}
    ${ribbonStylesDesktop}
	`;

  const tabletAllStyle = `
		${wrapperStylesTab}
    ${featuresStylesTab}
	`;

  const mobileAllStyle = `
		${wrapperStylesMobile}
    ${featuresStylesMobile}
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


  const FeaturesList = ({ features }) => {
    if (features.length !== 0) {
      return (
        <ul className="features">
          {features.map((item, index) => (
            <li key={index}>
              {item.icon && <span className="zolo-check-icon"><DisplayIcon icon={item.icon} /></span>}
              <span className="zolo-list-text">{item.text}</span>
            </li>
          ))}
        </ul>
      )
    }
  }


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
              <div className="zolo-price">$20</div>
              <div className="zolo-user-month">
                <span className="zolo-user-text">per user</span>
                <span className="zolo-time-text">per month</span>
              </div>
            </div>

            <RichText
              tagName="div"
              className="zolo-package-desc"
              value={descText}
              onChange={(descText) => setAttributes({ descText })}
              placeholder={__('Add description', 'zolo-blocks')}
              allowedFormats={["bold", "italic", "strikethrough"]}
            />

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
