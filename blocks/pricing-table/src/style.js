//WordPress dependencies
import { __ } from '@wordpress/i18n';
import './style.scss';

//block constants
import {
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
    ALIGNENT,
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
    TITLE_TEXT_PADDING,
    TITLE_BG,
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
    SEPARATOR_WIDTH,
    BTNS_MARGIN,
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
    generateBackgroundControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateResAlignmentStyle,
    generateTextShadowStyles,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        btnTextColor,
        btnHoverTextColor,
        btnHoverBorderColor,
        chatBtnColor,
        chatBtnHoverColor,
        chatBtnHoverBorderColor,

        //ribbon
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
        ribbonColor,
        separatorColor,
    } = attributes;
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
        dimensionStylesDesktop: titleTextPaddingDesk,
        dimensionStylesTab: titleTextPaddingTab,
        dimensionStylesMobile: titleTextPaddingMob,
    } = generateDimensionStyle({
        controlName: TITLE_TEXT_PADDING,
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
        backgroundStylesDesktop: titleTextBgDesktop,
        backgroundStylesTab: titleTextBgTab,
        backgroundStylesMobile: titleTextBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: TITLE_BG,
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
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: featureIconHSizeDesktop,
        tabRangeStyle: featureIconHSizeTab,
        mobRangeStyle: featureIconHSizeMob,
    } = generateResRangeStyle({
        controlName: FEATURE_ICON_SIZE,
        property: 'height',
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

    // content alignment
    const {
        desktopAlignStyle: alignDesktop,
        tabAlignStyle: alignTab,
        mobAlignStyle: alignMob,
    } = generateResAlignmentStyle({
        controlName: ALIGNENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: featureInfoAlignDesktop,
        tabAlignStyle: featureInfoAlignTab,
        mobAlignStyle: featureInfoAlignMob,
    } = generateResAlignmentStyle({
        controlName: ALIGNENT,
        property: 'text-align',
        attributes,
    });

    // buttons
    const {
        dimensionStylesDesktop: btnsMarginDesktop,
        dimensionStylesTab: btnsMarginTab,
        dimensionStylesMobile: btnsMarginMobile,
    } = generateDimensionStyle({
        controlName: BTNS_MARGIN,
        styleFor: 'margin',
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
        backgroundStylesDesktop: wrapperBgDesktop,
        backgroundStylesTab: wrapperBgTab,
        backgroundStylesMobile: wrapperBgMob,
    } = generateNormalBGControlStyles({
        attributes,
        controlName: WRAPPER_BG,
    });

    const { boxShadowStyle: wrapperShadow } = generateBoxShadowStyles({
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

    const {
        dimensionStylesDesktop: wrapperDeskRadius,
        dimensionStylesTab: wrapperTabRadius,
        dimensionStylesMobile: wrapperMobRadius,
    } = generateDimensionStyle({
        controlName: WRAPPER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // separator
    const {
        desktopRangeStyle: separatorWidthDesktop,
        tabRangeStyle: separatorWidthTab,
        mobRangeStyle: separatorWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_WIDTH,
        property: 'border-top-width',
        attributes,
    });

    //css style
    const wrapperStylesDesktop = `
		.wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBgDesktop}
			${wrapperBorderDesktop}
			${wrapperShadow}
      ${wrapperDeskRadius}
      --zolo-ribbon-xposition: ${ribbonXPosition}px;
      --zolo-ribbon-yposition: ${ribbonYPosition}px;
      ${ribbonRotate != '' && typeof ribbonRotate == 'number' ? `--zolo-ribbon-rotate: ${ribbonRotate}deg;` : ''}
		}
    .wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId} .zolo-features-info {
      ${separatorWidthDesktop}
      border-top-style: solid;
      border-top-color: ${separatorColor};
    }
	`;
    const wrapperStylesTab = `
		.wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBgTab}
			${wrapperBorderTab}
            ${wrapperTabRadius}
		}
    .wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId} .zolo-features-info {
      ${separatorWidthTab}
    }
	`;
    const wrapperStylesMobile = `
		.wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBgMob}
			${wrapperBorderMob}
            ${wrapperMobRadius}
		}
    .wp-block-zolo-pricing-table .zolo-block-wrapper.${uniqueId} .zolo-features-info {
      ${separatorWidthMob}
    }
	`;

    const headerStylesDesktop = `
    .${uniqueId} .zolo-head-content{
      ${titlePaddingDesktop}
    }
    .${uniqueId} .zolo-package-title{
      ${titleTypoDesktop}
      ${titleMarginDesktop}
      ${titleBorderDesktop}
      ${titleBorderRadiusDesktop}
      ${titleTextShadowStyle}
      ${titleColor ? `color: ${titleColor};` : ''}
      ${titleTextBgDesktop}
      ${titleTextPaddingDesk}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoDesktop}
      ${descMarginDesktop}
      ${descColor ? `color: ${descColor};` : ''}
    }
  `;
    const headerStylesTab = `
    .${uniqueId} .zolo-head-content{
      ${titlePaddingTab}
    }
    .${uniqueId} .zolo-package-title{
      ${titleTypoTab}
      ${titleMarginTab}
      ${titleBorderTab}
      ${titleBorderRadiusTab}
      ${titleTextBgTab}
      ${titleTextPaddingTab}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoTab}
      ${descMarginTab}
    }
  `;
    const headerStylesMob = `
    .${uniqueId} .zolo-head-content{
      ${titlePaddingMobile}
    }
    .${uniqueId} .zolo-package-title{
      ${titleTypoMobile}
      ${titleBorderMob}
      ${titleMarginMobile}
      ${titleBorderRadiusMob}
      ${titleTextBgMob}
      ${titleTextPaddingMob}
    }
    .${uniqueId} .zolo-package-desc{
      ${descTypoMobile}
      ${descMarginMobile}
    }
  `;

    const priceStylesDesktop = `
    .${uniqueId} .zolo-price-info{
      ${priceMarginDesktop}
      ${alignDesktop}
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
      ${alignTab}
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
      ${alignMob}
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

    .${uniqueId} .zolo-features-info, .${uniqueId} .zolo-head-content{
      ${featureInfoAlignDesktop}
    }
    .${uniqueId} .zolo-features-info{
      ${featurePaddingDesktop}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapDesktop}
      ${featureMarginDesktop}
    }

    .${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconBgColor ? `background-color: ${featureIconBgColor};` : ''}
      ${featureIconDeskPadding}
    }

    .${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconColor ? `fill: ${featureIconColor};` : ''}
      ${featureIconSizeDesktop}
      ${featureIconHSizeDesktop}
    }

    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoDesktop}
      ${alignDesktop}
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
    .${uniqueId} .zolo-features-info, .${uniqueId} .zolo-head-content{
      ${featureInfoAlignTab}
    }
    .${uniqueId} .zolo-features-info {
      ${featurePaddingTab}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapTab}
      ${featureMarginTab}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon{

      ${featureIconTabPadding}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconSizeTab}
      ${featureIconHSizeTab}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoTab}
      ${alignTab}
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
    .${uniqueId} .zolo-features-info, .${uniqueId} .zolo-head-content{
      ${featureInfoAlignMob}
    }
    .${uniqueId} .zolo-features-info {
      ${featurePaddingMobile}
    }
    .${uniqueId} .zolo-features-info .features{
      ${featureItemGapMob}
      ${featureMarginMobile}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon{
      ${featureIconMobPadding}
    }
    .${uniqueId} .zolo-features-info .zolo-check-icon svg{
      ${featureIconSizeMob}
      ${featureIconHSizeMob}
    }
    .${uniqueId} .zolo-features-info .features li{
      ${featureTypoMobile}
      ${alignMob}
      ${featureIconGapMob}
    }
  `;

    const buttonStylesDesktop = `
    .${uniqueId} .zolo-link-btn{
      ${btnsMarginDesktop}
    }
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
    .${uniqueId} .zolo-link-btn{
      ${btnsMarginTab}
    }
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
    .${uniqueId} .zolo-link-btn{
      ${btnsMarginMobile}
    }
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

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
