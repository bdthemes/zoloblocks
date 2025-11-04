/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    PRICE_CART,
    PRICE_CART_ALIGN,
    CARD_BG,
    CARD_MARGIN,
    CARD_PADDING,
    CARD_BORDER,
    CARD_SHADOW,
    CARD_RADIUS,
    BUTTON_BG,
    BUTTON_PADDING,
    BUTTON_BORDER,
    BUTTON_SHADOW,
    BUTTON_RADIUS,
    HOVER_BUTTON_BG,
    HOVER_BUTTON_SHADOW,
    RIBBON_BG,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_SHADOW,
    RIBBON_RADIUS,
    SWITCHER_WIDTH,
    SWITCHER_HEIGHT,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_BORDER,
    SWITCHER_BG,
    SWITCHER_SHADOW,

    ACTIVE_SWITCHER_BG,
} from './constants';

import {
    PRIMARY_TOOGLE_TYPO,
    PRIMARY_BEFORE_TYPO,
    PRIMARY_PREFIX_TYPO,
    PRIMARY_PRICE_TYPO,
    PRIMARY_SUFFIX_TYPO,
    PRIMARY_DES_TYPO,
    PRIMARY_ORIGINAL_PRICE_TYPO,
    PRIMARY_FOOTER_TYPO,
    SECONDARY_TOOGLE_TYPO,
    SECONDARY_BEFORE_TYPO,
    SECONDARY_PREFIX_TYPO,
    SECONDARY_PRICE_TYPO,
    SECONDARY_SUFFIX_TYPO,
    SECONDARY_DES_TYPO,
    SECONDARY_FOOTER_TYPO,
    BUTTON_TYPO,
    RIBBON_TYPO,

} from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        preset,
        primaryToggleTextColor,
        primaryBeforeTitleColor,
        primaryPrefixColor,
        primaryPriceColor,
        primarySuffixColor,
        primaryDescriptionColor,
        primaryOriginalPriceColor,
        primaryFooterTextColor,
        secondaryToggleTextColor,
        secondaryBeforeTitleColor,
        secondaryPrefixColor,
        secondaryPriceColor,
        secondarySuffixColor,
        secondaryDescriptionColor,
        secondaryFooterTextColor,
        buttonColor,
        hoverButtonColor,
        ribbonColor,
        switchColor,
        activeSwitchColor,
    } = attributes;

    const {
        desktopAlignStyle: alignDesktop,
        tabAlignStyle: alignTab,
        mobAlignStyle: alignMob,
    } = generateResAlignmentStyle({
        controlName: PRICE_CART_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        backgroundStylesDesktop: cardBgDesktop,
        backgroundStylesTab: cardBgTab,
        backgroundStylesMobile: cardBgMob,
    } = generateNormalBGControlStyles({
        controlName: CARD_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: cardMarginDesk,
        dimensionStylesTab: cardMarginTab,
        dimensionStylesMobile: cardMarginMob,
    } = generateDimensionStyle({
        controlName: CARD_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: cardPaddingDesk,
        dimensionStylesTab: cardPaddingTab,
        dimensionStylesMobile: cardPaddingMob,
    } = generateDimensionStyle({
        controlName: CARD_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: cardBorderDesktop,
        tabBorderStyle: cardBorderTab,
        mobBorderStyle: cardBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: CARD_BORDER,
    });

    const { boxShadowStyle: cardShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CARD_SHADOW,
    });

    const {
        dimensionStylesDesktop: cardRadiusDesk,
        dimensionStylesTab: cardRadiusTab,
        dimensionStylesMobile: cardRadiusMob,
    } = generateDimensionStyle({
        controlName: CARD_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: primaryToggleTypoDesk,
        typoStylesTab: primaryToggleTypoTab,
        typoStylesMobile: primaryToggleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_TOOGLE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryBeforeTypoDesk,
        typoStylesTab: primaryBeforeTypoTab,
        typoStylesMobile: primaryBeforeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_BEFORE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryPrefixTypoDesk,
        typoStylesTab: primaryPrefixTypoTab,
        typoStylesMobile: primaryPrefixTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_PREFIX_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryPriceTypoDesk,
        typoStylesTab: primaryPriceTypoTab,
        typoStylesMobile: primaryPriceTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_PRICE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primarySuffixTypoDesk,
        typoStylesTab: primarySuffixTypoTab,
        typoStylesMobile: primarySuffixTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_SUFFIX_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryDesTypoDesk,
        typoStylesTab: primaryDesTypoTab,
        typoStylesMobile: primaryDesTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_DES_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryOriginalPriceTypoDesk,
        typoStylesTab: primaryOriginalPriceTypoTab,
        typoStylesMobile: primaryOriginalPriceTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_ORIGINAL_PRICE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: primaryFooterTypoDesk,
        typoStylesTab: primaryFooterTypoTab,
        typoStylesMobile: primaryFooterTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PRIMARY_FOOTER_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryToggleTypoDesk,
        typoStylesTab: secondaryToggleTypoTab,
        typoStylesMobile: secondaryToggleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_TOOGLE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryBeforeTypoDesk,
        typoStylesTab: secondaryBeforeTypoTab,
        typoStylesMobile: secondaryBeforeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_BEFORE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryPrefixTypoDesk,
        typoStylesTab: secondaryPrefixTypoTab,
        typoStylesMobile: secondaryPrefixTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_PREFIX_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryPriceTypoDesk,
        typoStylesTab: secondaryPriceTypoTab,
        typoStylesMobile: secondaryPriceTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_PRICE_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondarySuffixTypoDesk,
        typoStylesTab: secondarySuffixTypoTab,
        typoStylesMobile: secondarySuffixTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_SUFFIX_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryDesTypoDesk,
        typoStylesTab: secondaryDesTypoTab,
        typoStylesMobile: secondaryDesTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_DES_TYPO,
        attributes,
    });

    const {
        typoStylesDesktop: secondaryFooterTypoDesk,
        typoStylesTab: secondaryFooterTypoTab,
        typoStylesMobile: secondaryFooterTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SECONDARY_FOOTER_TYPO,
        attributes,
    });

    const {
        backgroundStylesDesktop: buttonBgDesk,
        backgroundStylesTab: buttonBgTab,
        backgroundStylesMobile: buttonBgMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: buttonPaddingDesk,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMobile: buttonPaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: buttonBorderDesk,
        tabBorderStyle: buttonBorderTab,
        mobBorderStyle: buttonBorderMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    const { boxShadowStyle: buttonShadow } = generateBoxShadowStyles({
        controlName: BUTTON_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonRadiusDesk,
        dimensionStylesTab: buttonRadiusTab,
        dimensionStylesMobile: buttonRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: buttonTypoDesk,
        typoStylesTab: buttonTypoTab,
        typoStylesMobile: buttonTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPO,
        attributes,
    });

    const {
        backgroundStylesDesktop: hoverButtonBgDesk,
        backgroundStylesTab: hoverButtonBgTab,
        backgroundStylesMobile: hoverButtonBgMob,
    } = generateNormalBGControlStyles({
        controlName: HOVER_BUTTON_BG,
        attributes,
        noMainBGImg: false,
    });

    const { boxShadowStyle: hoverButtonShadow } = generateBoxShadowStyles({
        controlName: HOVER_BUTTON_SHADOW,
        attributes,
    });

    const {
        desktopRangeStyle: switchWidthDesk,
        tabRangeStyle: switchWidthTab,
        mobRangeStyle: switchWidthMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_WIDTH,
        property: '--zolo-price-card-switch-width',
        attributes,
    });

    const {
        desktopRangeStyle: switchHeightDesk,
        tabRangeStyle: switchHeightTab,
        mobRangeStyle: switchHeightMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_HEIGHT,
        property: '--zolo-price-card-switch-height',
        attributes,
    });

    const {
        boxShadowStyle: switchShadow,
    } = generateBoxShadowStyles({
        controlName: SWITCHER_SHADOW,
        attributes,
    });

    const { desktopBorderStyle: switchBorderDesk,
        tabBorderStyle: switchBorderTab,
        mobBorderStyle: switchBorderMob,
    } = generateBorderStyle({
        controlName: SWITCHER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: switchRadiusDesk,
        dimensionStylesTab: switchRadiusTab,
        dimensionStylesMobile: switchRadiusMob,
    } = generateDimensionStyle({
        controlName: SWITCHER_BORDER_RADIUS,
        styleFor: '--zolo-price-switch-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: switchBgDesk,
        backgroundStylesTab: switchBgTab,
        backgroundStylesMobile: switchBgMob,
    } = generateNormalBGControlStyles({
        controlName: SWITCHER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: activeSwitchBgDesk,
        backgroundStylesTab: activeSwitchBgTab,
        backgroundStylesMobile: activeSwitchBgMob,
    } = generateNormalBGControlStyles({
        controlName: ACTIVE_SWITCHER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        typoStylesDesktop: ribbonTypoDesk,
        typoStylesTab: ribbonTypoTab,
        typoStylesMobile: ribbonTypoMob,
    } = generateTypographyStyles({
        prefixConstant: RIBBON_TYPO,
        attributes,
    });

    const {
        backgroundStylesDesktop: ribbonBgDesk,
        backgroundStylesTab: ribbonBgTab,
        backgroundStylesMobile: ribbonBgMob,
    } = generateNormalBGControlStyles({
        controlName: RIBBON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: ribbonPaddingDesk,
        dimensionStylesTab: ribbonPaddingTab,
        dimensionStylesMobile: ribbonPaddingMob,
    } = generateDimensionStyle({
        controlName: RIBBON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: ribbonBorderDesk,
        tabBorderStyle: ribbonBorderTab,
        mobBorderStyle: ribbonBorderMob,
    } = generateBorderStyle({
        controlName: RIBBON_BORDER,
        attributes,
    });

    const { boxShadowStyle: ribbonShadow } = generateBoxShadowStyles({
        controlName: RIBBON_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: ribbonRadiusDesk,
        dimensionStylesTab: ribbonRadiusTab,
        dimensionStylesMobile: ribbonRadiusMob,
    } = generateDimensionStyle({
        controlName: RIBBON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-pricing-card {
            ${cardBgDesktop}
            ${cardMarginDesk}
            ${cardPaddingDesk}
            ${cardBorderDesktop}
            ${cardRadiusDesk}
            ${cardShadow}
        }
        .${uniqueId} .zolo-pricing-card .zolo-toggle-label {
            ${primaryToggleTypoDesk}
            color: ${primaryToggleTextColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-starting {
            ${primaryBeforeTypoDesk}
            color: ${primaryBeforeTitleColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-original {
            ${primaryOriginalPriceTypoDesk}
            color: ${primaryOriginalPriceColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-price .zolo-prefix {
            ${primaryPrefixTypoDesk}
            color: ${primaryPrefixColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-value {
            ${primaryPriceTypoDesk}
            color: ${primaryPriceColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-period {
            ${primarySuffixTypoDesk}
            color: ${primarySuffixColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-subtext {
            ${primaryDesTypoDesk}
            color: ${primaryDescriptionColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-note {
            ${primaryFooterTypoDesk}
            color: ${primaryFooterTextColor};
        }
        .${uniqueId} .zolo-pricing-card .zolo-button {
            ${buttonTypoDesk}
            color: ${buttonColor};
            ${buttonBgDesk}
            ${buttonPaddingDesk}
            ${buttonBorderDesk}
            ${buttonShadow}
            ${buttonRadiusDesk}
        }
        .${uniqueId} .zolo-pricing-card .zolo-button:hover {
            color: ${hoverButtonColor};
            ${hoverButtonBgDesk}
            ${hoverButtonShadow}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-toggle-label {
            ${secondaryToggleTypoDesk}
            color: ${secondaryToggleTextColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-starting {
            ${secondaryBeforeTypoDesk}
            color: ${secondaryBeforeTitleColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price .zolo-prefix,
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price small:first-of-type {
            ${secondaryPrefixTypoDesk}
            color: ${secondaryPrefixColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-value {
            ${secondaryPriceTypoDesk}
            color: ${secondaryPriceColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-period {
            ${secondarySuffixTypoDesk}
            color: ${secondarySuffixColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-subtext {
            ${secondaryDesTypoDesk}
            color: ${secondaryDescriptionColor};
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-note {
            ${secondaryFooterTypoDesk}
            color: ${secondaryFooterTextColor};
        }
        .${uniqueId} .zolo-ribbon {
            ${ribbonBgDesk}
            ${ribbonPaddingDesk}
            ${ribbonBorderDesk}
            ${ribbonShadow}
            ${ribbonRadiusDesk}
        }
        .${uniqueId} .zolo-ribbon .zolo-ribbon-text {
            ${ribbonTypoDesk}
            color: ${ribbonColor};
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] {
            ${switchWidthDesk ? switchWidthDesk.replace(';', ' !important;') : ''}
            ${switchHeightDesk ? switchHeightDesk.replace(';', ' !important;') : ''}
            ${switchRadiusDesk ? switchRadiusDesk.replace(/;/g, ' !important;') : ''}
            ${switchBgDesk}
            ${switchBorderDesk}
            ${switchShadow}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] .zolo-knob {
            ${switchColor ? `background: ${switchColor} !important;` : ''}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on {
            ${activeSwitchBgDesk}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on .zolo-knob {
            ${activeSwitchColor ? `background: ${activeSwitchColor} !important;` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-pricing-card {
            ${cardBgTab}
            ${cardMarginTab}
            ${cardPaddingTab}
            ${cardBorderTab}
            ${cardRadiusTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-toggle-label {
            ${primaryToggleTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-starting {
            ${primaryBeforeTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-original {
            ${primaryOriginalPriceTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price .zolo-prefix {
            ${primaryPrefixTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-value {
            ${primaryPriceTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-period {
            ${primarySuffixTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-subtext {
            ${primaryDesTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-note {
            ${primaryFooterTypoTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-button {
            ${buttonTypoTab}
            ${buttonBgTab}
            ${buttonPaddingTab}
            ${buttonBorderTab}
            ${buttonRadiusTab}
        }
        .${uniqueId} .zolo-pricing-card .zolo-button:hover {
            ${hoverButtonBgTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-toggle-label {
            ${secondaryToggleTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-starting {
            ${secondaryBeforeTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price .zolo-prefix,
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price small:first-of-type {
            ${secondaryPrefixTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-value {
            ${secondaryPriceTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-period {
            ${secondarySuffixTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-subtext {
            ${secondaryDesTypoTab}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-note {
            ${secondaryFooterTypoTab}
        }
        .${uniqueId} .zolo-ribbon {
            ${ribbonBgTab}
            ${ribbonPaddingTab}
            ${ribbonBorderTab}
            ${ribbonRadiusTab}
        }
        .${uniqueId} .zolo-ribbon .zolo-ribbon-text {
            ${ribbonTypoTab}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] {
            ${switchWidthTab ? switchWidthTab.replace(';', ' !important;') : ''}
            ${switchHeightTab ? switchHeightTab.replace(';', ' !important;') : ''}
            ${switchRadiusTab ? switchRadiusTab.replace(/;/g, ' !important;') : ''}
            ${switchBgTab}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] .zolo-knob {
            ${switchColor ? `background: ${switchColor} !important;` : ''}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on {
            ${activeSwitchBgTab}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on .zolo-knob {
            ${activeSwitchColor ? `background: ${activeSwitchColor} !important;` : ''}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-pricing-card {
            ${cardBgMob}
            ${cardMarginMob}
            ${cardPaddingMob}
            ${cardBorderMob}
            ${cardRadiusMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-toggle-label {
            ${primaryToggleTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-starting {
            ${primaryBeforeTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-original {
            ${primaryOriginalPriceTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price .zolo-prefix {
            ${primaryPrefixTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-value {
            ${primaryPriceTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-price-period {
            ${primarySuffixTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-subtext {
            ${primaryDesTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-note {
            ${primaryFooterTypoMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-button {
            ${buttonTypoMob}
            ${buttonBgMob}
            ${buttonPaddingMob}
            ${buttonBorderMob}
            ${buttonRadiusMob}
        }
        .${uniqueId} .zolo-pricing-card .zolo-button:hover {
            ${hoverButtonBgMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-toggle-label {
            ${secondaryToggleTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-starting {
            ${secondaryBeforeTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price .zolo-prefix,
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price small:first-of-type {
            ${secondaryPrefixTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-value {
            ${secondaryPriceTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-price-period {
            ${secondarySuffixTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-subtext {
            ${secondaryDesTypoMob}
        }
        .${uniqueId} .zolo-pricing-card.secondary-active .zolo-note {
            ${secondaryFooterTypoMob}
        }
        .${uniqueId} .zolo-ribbon {
            ${ribbonBgMob}
            ${ribbonPaddingMob}
            ${ribbonBorderMob}
            ${ribbonRadiusMob}
        }
        .${uniqueId} .zolo-ribbon .zolo-ribbon-text {
            ${ribbonTypoMob}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] {
            ${switchWidthMob ? switchWidthMob.replace(';', ' !important;') : ''}
            ${switchHeightMob ? switchHeightMob.replace(';', ' !important;') : ''}
            ${switchRadiusMob ? switchRadiusMob.replace(/;/g, ' !important;') : ''}
            ${switchBgMob}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"] .zolo-knob {
            ${switchColor ? `background: ${switchColor} !important;` : ''}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on {
            ${activeSwitchBgMob}
        }
        .${uniqueId} .zolo-switch[class*="zolo-switch"].on .zolo-knob {
            ${activeSwitchColor ? `background: ${activeSwitchColor} !important;` : ''}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.dualButton.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.dualButton.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.dualButton.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
