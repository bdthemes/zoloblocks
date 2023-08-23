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
        className: classnames(className, `zolo-block-wrapper ${uniqueId} ${'zolo-pricing-' + styles}`),
    });

    //css generate

    //header style
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: titlePaddingDesktop,
        dimensionStylesTab: titlePaddingTab,
        dimensionStylesMobile: titlePaddingMobile,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopBorderStyle: titleBorderDesktop,
        tabBorderStyle: titleBorderTab,
        mobBorderStyle: titleBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: TITLE_BORDER,
    });
    const {
        dimensionStylesDesktop: titleBorderRadiusDesktop,
        dimensionStylesTab: titleBorderRadiusTab,
        dimensionStylesMobile: titleBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    const {
        typoStylesDesktop: descTypoDesktop,
        typoStylesTab: descTypoTab,
        typoStylesMobile: descTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: DESC_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: descMarginDesktop,
        dimensionStylesTab: descMarginTab,
        dimensionStylesMobile: descMarginMobile,
    } = generateDimensionStyle({
        controlName: DESC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //price style
    const {
        typoStylesDesktop: priceTypoDesktop,
        typoStylesTab: priceTypoTab,
        typoStylesMobile: priceTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: PRICE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: priceMarginDesktop,
        dimensionStylesTab: priceMarginTab,
        dimensionStylesMobile: priceMarginMobile,
    } = generateDimensionStyle({
        controlName: PRICE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        typoStylesDesktop: orginalPriceTypoDesktop,
        typoStylesTab: orginalPriceTypoTab,
        typoStylesMobile: orginalPriceTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: ORGINAL_PRICE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: orginalPriceMarginDesktop,
        dimensionStylesTab: orginalPriceMarginTab,
        dimensionStylesMobile: orginalPriceMarginMobile,
    } = generateDimensionStyle({
        controlName: ORGINAL_PRICE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        typoStylesDesktop: periodTypoDesktop,
        typoStylesTab: periodTypoTab,
        typoStylesMobile: periodTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: PERIOD_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: periodMarginDesktop,
        dimensionStylesTab: periodMarginTab,
        dimensionStylesMobile: periodMarginMobile,
    } = generateDimensionStyle({
        controlName: PERIOD_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //feature style
    const {
        typoStylesDesktop: featureTitleTypoDesktop,
        typoStylesTab: featureTitleTypoTab,
        typoStylesMobile: featureTitleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: FEATURE_TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        typoStylesDesktop: featureDescTypoDesktop,
        typoStylesTab: featureDescTypoTab,
        typoStylesMobile: featureDescTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: FEATURE_DESC_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: featureDescMarginDesktop,
        dimensionStylesTab: featureDescMarginTab,
        dimensionStylesMobile: featureDescMarginMobile,
    } = generateDimensionStyle({
        controlName: FEATURE_DESC_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    //list
    const {
        typoStylesDesktop: featureTypoDesktop,
        typoStylesTab: featureTypoTab,
        typoStylesMobile: featureTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: FEATURE_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: featureItemGapDesktop,
        tabRangeStyle: featureItemGapTab,
        mobRangeStyle: featureItemGapMob,
    } = generateResRangeStyle({
        controlName: FEATURE_ITEM_GAP,
        property: 'gap',
        attributes,
    });
    const {
        dimensionStylesDesktop: featureMarginDesktop,
        dimensionStylesTab: featureMarginTab,
        dimensionStylesMobile: featureMarginMobile,
    } = generateDimensionStyle({
        controlName: FEATURE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: featurePaddingDesktop,
        dimensionStylesTab: featurePaddingTab,
        dimensionStylesMobile: featurePaddingMobile,
    } = generateDimensionStyle({
        controlName: FEATURE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    //icon
    const {
        dimensionStylesDesktop: featureIconDeskPadding,
        dimensionStylesTab: featureIconTabPadding,
        dimensionStylesMobile: featureIconMobPadding,
    } = generateDimensionStyle({
        controlName: FEATURE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopRangeStyle: featureIconSizeDesktop,
        tabRangeStyle: featureIconSizeTab,
        mobRangeStyle: featureIconSizeMob,
    } = generateResRangeStyle({
        controlName: FEATURE_ICON_SIZE,
        property: 'font-size',
        attributes,
    });
    const {
        desktopRangeStyle: featureIconGapDesktop,
        tabRangeStyle: featureIconGapTab,
        mobRangeStyle: featureIconGapMob,
    } = generateResRangeStyle({
        controlName: FEATURE_ICON_GAP,
        property: 'gap',
        attributes,
    });

    const {
        desktopAlignStyle: featureAlignDesktop,
        tabAlignStyle: featureAlignTab,
        mobAlignStyle: featureAlignMob,
    } = generateResAlignmentStyle({
        controlName: FEATURE_ALIGN,
        property: 'justify-content',
        attributes,
    });
    const {
        desktopAlignStyle: featureInfoAlignDesktop,
        tabAlignStyle: featureInfoAlignTab,
        mobAlignStyle: featureInfoAlignMob,
    } = generateResAlignmentStyle({
        controlName: FEATURE_ALIGN,
        property: 'text-align',
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
        dimensionStylesDesktop: btnDeskRadius,
        dimensionStylesTab: btnTabRadius,
        dimensionStylesMobile: btnMobRadius,
    } = generateDimensionStyle({
        controlName: BTN_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: BTN_TYPOGRAPHY,
        attributes,
    });
    const {
        backgroundStylesDesktop: btnBgDesktop,
        backgroundStylesTab: btnBgTab,
        backgroundStylesMobile: btnBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: BTN_NORMAL_BG,
    });
    const {
        backgroundStylesDesktop: btnHoverBgDesktop,
        backgroundStylesTab: btnHoverBgTab,
        backgroundStylesMobile: btnHoverBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: BTN_HOVER_BG,
    });
    const {
        desktopBorderStyle: btnBorderDesktop,
        tabBorderStyle: btnBorderTab,
        mobBorderStyle: btnBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: BTN_BORDER,
    });

    const { boxShadowStyle: btnShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_SHADOW,
    });

    const { boxShadowStyle: btnHoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BTN_HOVER_SHADOW,
    });

    // chat button
    const {
        dimensionStylesDesktop: chatBtnMarginDesktop,
        dimensionStylesTab: chatBtnMarginTab,
        dimensionStylesMobile: chatBtnMarginMobile,
    } = generateDimensionStyle({
        controlName: CBTN_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: chatBtnPaddingDesktop,
        dimensionStylesTab: chatBtnPaddingTab,
        dimensionStylesMobile: chatBtnPaddingMobile,
    } = generateDimensionStyle({
        controlName: CBTN_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: chatBtnDeskRadius,
        dimensionStylesTab: chatBtnTabRadius,
        dimensionStylesMobile: chatBtnMobRadius,
    } = generateDimensionStyle({
        controlName: CBTN_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        typoStylesDesktop: chatBtnTypoDesktop,
        typoStylesTab: chatBtnTypoTab,
        typoStylesMobile: chatBtnTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: CBTN_TYPOGRAPHY,
        attributes,
    });
    const {
        backgroundStylesDesktop: chatBtnBgDesktop,
        backgroundStylesTab: chatBtnBgTab,
        backgroundStylesMobile: chatBtnBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: CBTN_NORMAL_BG,
    });
    const {
        backgroundStylesDesktop: chatBtnHoverBgDesktop,
        backgroundStylesTab: chatBtnHoverBgTab,
        backgroundStylesMobile: chatBtnHoverBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: CBTN_HOVER_BG,
    });
    const {
        desktopBorderStyle: chatBtnBorderDesktop,
        tabBorderStyle: chatBtnBorderTab,
        mobBorderStyle: chatBtnBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: CBTN_BORDER,
    });

    const { boxShadowStyle: chatBtnShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CBTN_SHADOW,
    });

    const { boxShadowStyle: chatBtnHoverShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CBTN_HOVER_SHADOW,
    });

    //ribbon style
    const {
        typoStylesDesktop: ribbonTypoDesktop,
        typoStylesTab: ribbonTypoTab,
        typoStylesMobile: ribbonTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: RIBBON_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: ribbonMarginDesktop,
        dimensionStylesTab: ribbonMarginTab,
        dimensionStylesMobile: ribbonMarginMobile,
    } = generateDimensionStyle({
        controlName: RIBBON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: ribbonPaddingDesktop,
        dimensionStylesTab: ribbonPaddingTab,
        dimensionStylesMobile: ribbonPaddingMobile,
    } = generateDimensionStyle({
        controlName: RIBBON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: ribbonBorderDesktop,
        tabBorderStyle: ribbonBorderTab,
        mobBorderStyle: ribbonBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: RIBBON_BORDER,
    });

    const {
        dimensionStylesDesktop: ribbonDeskRadius,
        dimensionStylesTab: ribbonTabRadius,
        dimensionStylesMobile: ribbonMobRadius,
    } = generateDimensionStyle({
        controlName: RIBBON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: ribbonBgDesktop,
        backgroundStylesTab: ribbonBgTab,
        backgroundStylesMobile: ribbonBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: RIBBON_BG,
    });
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
        transitionStyle: wrapperShadowTransition,
    } = generateBoxShadowStyles({
        attributes,
        controlName: WRAPPER_SHADOW,
    });

    const {
        desktopBorderStyle: wrapperBorderDesktop,
        tabBorderStyle: wrapperBorderTab,
        mobBorderStyle: wrapperBorderMob,
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

    const headerStylesDesktop = `
    .${uniqueId} .zolo-package-title{
      ${titleTypoDesktop}
      ${titleMarginDesktop}
      ${titlePaddingDesktop}
      ${titleBorderDesktop}
      ${titleBorderRadiusDesktop}
      ${titleTextShadowStyle}
      ${titleColor ? `color: ${titleColor};` : ''}
      ${titleBgColor ? `background-color: ${titleBgColor};` : ''}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoDesktop}
      ${descMarginDesktop}
      ${descColor ? `color: ${descColor};` : ''}
    }
  `;
    const headerStylesTab = `
    .${uniqueId} .zolo-package-title{
      ${titleTypoTab}
      ${titleMarginTab}
      ${titlePaddingTab}
      ${titleBorderTab}
      ${titleBorderRadiusTab}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoTab}
      ${descMarginTab}
    }
  `;
    const headerStylesMob = `
    .${uniqueId} .zolo-package-title{
      ${titleTypoMobile}
      ${titleBorderMob}
      ${titleMarginMobile}
      ${titlePaddingMobile}
      ${titleBorderRadiusMob}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoMobile}
      ${descMarginMobile}
    }
  `;

    const priceStylesDesktop = `
    .${uniqueId} .zolo-price-info{
      ${priceMarginDesktop}
    }
    .${uniqueId} .zolo-price{
      ${priceTypoDesktop}
      ${priceColor ? `color: ${priceColor};` : ''}
    }
    .${uniqueId} .zolo-price .currency{
      ${prefixSize ? ` font-size: ${prefixSize}px;` : ''}
      ${prefixPosition ? ` top: ${prefixPosition}px;` : ''}
    }
    .${uniqueId} .zolo-price .fractional{
      ${suffixSize ? ` font-size: ${suffixSize}px;` : ''}
      ${suffixPosition ? ` top: ${suffixPosition}px;` : ''}
    }

    .${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoDesktop}
      ${orginalPriceColor ? `color: ${orginalPriceColor};` : ''}
      ${orginalPriceMarginDesktop}
    }
    .${uniqueId} .zolo-user-month{
      ${periodTypoDesktop}
      ${periodColor ? `color: ${periodColor};` : ''}
      ${periodMarginDesktop}
    }
  `;
    const priceStylesTab = `
    .${uniqueId} .zolo-price-info{
      ${priceMarginTab}
    }
    .${uniqueId} .zolo-price{
      ${priceTypoTab}
    }
    .${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoTab}
      ${orginalPriceMarginTab}
    }
    .${uniqueId} .zolo-user-month{
      ${periodTypoTab}
      ${periodMarginTab}
    }
  `;
    const priceStylesMob = `
    .${uniqueId} .zolo-price-info{
      ${priceMarginMobile}
    }
    .${uniqueId} .zolo-price{
      ${priceTypoMobile}
    }
    .${uniqueId} .zolo-orginal-price{
      ${orginalPriceTypoMobile}
      ${orginalPriceMarginMobile}
    }
    .${uniqueId} .zolo-user-month{
      ${periodTypoMobile}
      ${periodMarginMobile}
    }
  `;
    const featuresStylesDesktop = `
    .${uniqueId} .zolo-features-title{
      ${featureTitleTypoDesktop}
      ${featureTitleColor ? `color: ${featureTitleColor};` : ''}
    }
    .${uniqueId} .zolo-features-desc{
      ${featureDescTypoDesktop}
      ${featureDescMarginDesktop}
      ${featureDescColor ? `color: ${featureDescColor};` : ''}
    }

    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignDesktop}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapDesktop}
      ${featureMarginDesktop}
      ${featurePaddingDesktop}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconColor ? `color: ${featureIconColor};` : ''}
      ${featureIconBgColor ? `background-color: ${featureIconBgColor};` : ''}
      ${featureIconSizeDesktop}
      ${featureIconDeskPadding}
    }

    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoDesktop}
      ${featureAlignDesktop}
      ${featureIconGapDesktop}
      ${featureColor ? `color: ${featureColor};` : ''}
    }
  `;
    const featuresStylesTab = `
    .${uniqueId} .zolo-features-title{
      ${featureTitleTypoTab}
    }
   .${uniqueId} .zolo-features-desc{
      ${featureDescTypoTab}
      ${featureDescMarginTab}
    }
    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignTab}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapTab}
      ${featureMarginTab}
      ${featurePaddingTab}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconSizeTab}
      ${featureIconTabPadding}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoTab}
      ${featureAlignTab}
      ${featureIconGapTab}
    }
  `;
    const featuresStylesMobile = `
    .${uniqueId} .zolo-features-title{
        ${featureTitleTypoMobile}
    }
   .${uniqueId} .zolo-features-desc{
      ${featureDescTypoMobile}
      ${featureDescMarginMobile}
    }
    .${uniqueId} .zolo-features-info{
      ${featureInfoAlignMob}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapMob}
      ${featureMarginMobile}
      ${featurePaddingMobile}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconSizeMob}
      ${featureIconMobPadding}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoMobile}
      ${featureAlignMob}
      ${featureIconGapMob}
    }
  `;

    const buttonStylesDesktop = `
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnTextColor ? `color: ${btnTextColor};` : ''}
      ${btnMarginDesktop}
      ${btnPaddingDesktop}
      ${btnTypoDesktop}
      ${btnBgDesktop}
      ${btnBorderDesktop}
      ${btnShadow}
      ${btnDeskRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverTextColor ? `color: ${btnHoverTextColor};` : ''}
      ${btnHoverBorderColor ? `border-color: ${btnHoverBorderColor};` : ''}
      ${btnHoverBgDesktop}
      ${btnHoverShadow}
    }
    .${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnColor ? `color: ${chatBtnColor};` : ''}
      ${chatBtnMarginDesktop}
      ${chatBtnPaddingDesktop}
      ${chatBtnTypoDesktop}
      ${chatBtnBgDesktop}
      ${chatBtnBorderDesktop}
      ${chatBtnShadow}
      ${chatBtnDeskRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverColor ? `color: ${chatBtnHoverColor};` : ''}
      ${chatBtnHoverBorderColor ? `border-color: ${chatBtnHoverBorderColor};` : ''}
      ${chatBtnHoverBgDesktop}
      ${chatBtnHoverShadow}
    }
  `;

    const buttonStylesTab = `
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnMarginTab}
      ${btnPaddingTab}
      ${btnTypoTab}
      ${btnBgTab}
      ${btnBorderTab}
      ${btnTabRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverBgTab}
    }

    .${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnMarginTab}
      ${chatBtnPaddingTab}
      ${chatBtnTypoTab}
      ${chatBtnBgTab}
      ${chatBtnBorderTab}
      ${chatBtnTabRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverBgTab}
    }
  `;

    const buttonStylesMob = `
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn{
      ${btnMarginMobile}
      ${btnPaddingMobile}
      ${btnTypoMobile}
      ${btnBgMob}
      ${btnBorderMob}
      ${btnMobRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-buy-btn:hover{
      ${btnHoverBgMob}
    }

    .${uniqueId} .zolo-link-btn a.zolo-chat-btn{
      ${chatBtnMarginMobile}
      ${chatBtnPaddingMobile}
      ${chatBtnTypoMobile}
      ${chatBtnBgMob}
      ${chatBtnBorderMob}
      ${chatBtnMobRadius}
    }
    .${uniqueId} .zolo-link-btn a.zolo-chat-btn:hover{
      ${chatBtnHoverBgMob}
    }
  `;

    const ribbonStylesDesktop = `
      .${uniqueId} .zolo-ribbon-btn{
        ${ribbonColor ? `color: ${ribbonColor};` : ''}
        ${ribbonBgDesktop}
        ${ribbonPaddingDesktop}
        ${ribbonMarginDesktop}
        ${ribbonBorderDesktop}
        ${ribbonDeskRadius}
        ${ribbonTypoDesktop}
        -webkit-transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
        transform: translate(var(--zolo-ribbon-xposition, 0), var(--zolo-ribbon-yposition, 0)) rotate(var(--zolo-ribbon-rotate, 0));
      }
    `;
    const ribbonStylesTab = `
      .${uniqueId} .zolo-ribbon-btn{
        ${ribbonTypoTab}
        ${ribbonBgTab}
        ${ribbonPaddingTab}
        ${ribbonMarginTab}
        ${ribbonBorderTab}
        ${ribbonTabRadius}
      }
    `;
    const ribbonStylesMobile = `
      .${uniqueId} .zolo-ribbon-btn{
        ${ribbonTypoMobile}
        ${ribbonBgMob}
        ${ribbonPaddingMobile}
        ${ribbonMarginMobile}
        ${ribbonBorderMob}
        ${ribbonMobRadius}
      }
    `;

    const desktopAllStyle = `
		${wrapperStylesDesktop}
    ${headerStylesDesktop}
    ${priceStylesDesktop}
    ${featuresStylesDesktop}
    ${ribbonStylesDesktop}
    ${buttonStylesDesktop}

	`;

    const tabletAllStyle = `
		${wrapperStylesTab}
    ${headerStylesTab}
    ${priceStylesTab}
    ${featuresStylesTab}
    ${ribbonStylesTab}
    ${buttonStylesTab}
	`;

    const mobileAllStyle = `
		${wrapperStylesMobile}
    ${headerStylesMob}
    ${priceStylesMob}
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

    const pricingPeriod = period.length !== 0 && period.split(',');

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

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
        </>
    );
};

export default Edit;
