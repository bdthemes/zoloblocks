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
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateMaskStyles,
} = window.zoloModule;

import {
    BUTTON_ALIGNMENT,
    BUTTON_WIDTH,
    BUTTON_ONE_BG,
    BUTTON_ONE_BORDER,
    BUTTON_ONE_BORDER_RADIUS,
    BUTTON_ONE_MARGIN,
    BUTTON_ONE_PADDING,
    BUTTON_ONE_SHADOW,
    BUTTON_ONE_ALIGN,
    BUTTON_ONE_BG_HOVER,
    BUTTON_ONE_BORDER_HOVER,
    BUTTON_ONE_SHADOW_HOVER,
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    BUTTON_TWO_BG_HOVER,
    BUTTON_TWO_BORDER_HOVER,
    BUTTON_TWO_SHADOW_HOVER,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_BORDER_RADIUS,
    MIDDLE_TEXT_BG_HOVER,
    MIDDLE_TEXT_BORDER_HOVER,
    MIDDLE_TEXT_SHADOW_HOVER,
} from './constants';

import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, buttonOneColor, buttonOneColorHover, buttonTwoColor, buttonTwoColorHover, middleTextColor, middleTextColorHover } =
        attributes;

    const {
        desktopAlignStyle: buttonDeskAlign,
        tabAlignStyle: buttonTabAlign,
        mobAlignStyle: buttonMobAlign,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopRangeStyle: buttonWidthDesktop,
        tabRangeStyle: buttonWidthTab,
        mobRangeStyle: buttonWidthMob,
    } = generateResRangeStyle({
        controlName: BUTTON_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        backgroundStylesDesktop: buttonOneBGDesktop,
        backgroundStylesTab: buttonOneBGTab,
        backgroundStylesMobile: buttonOneBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_ONE_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: buttonOneBorderDesktop,
        tabBorderStyle: buttonOneBorderTab,
        mobBorderStyle: buttonOneBorderMob,
    } = generateBorderStyle({
        controlName: BUTTON_ONE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOneBorderRadiusDesktop,
        dimensionStylesTab: buttonOneBorderRadiusTab,
        dimensionStylesMobile: buttonOneBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOneMarginDesktop,
        dimensionStylesTab: buttonOneMarginTab,
        dimensionStylesMobile: buttonOneMarginMob,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOnePaddingDesktop,
        dimensionStylesTab: buttonOnePaddingTab,
        dimensionStylesMobile: buttonOnePaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: buttonOneShadowDesktop,
        boxShadowStyleTab: buttonOneShadowTab,
        boxShadowStyleMobile: buttonOneShadowMob,
    } = generateBoxShadowStyles({
        controlName: BUTTON_ONE_SHADOW,
        attributes,
    });

    const {
        desktopAlignStyle: buttonOneAlignDesktop,
        tabAlignStyle: buttonOneAlignTab,
        mobAlignStyle: buttonOneAlignMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ONE_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        typoStylesDesktop: buttonOneTypoDesktop,
        typoStylesTab: buttonOneTypoTab,
        typoStylesMobile: buttonOneTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_ONE_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        backgroundStylesDesktop: buttonOneHoverBGDesktop,
        backgroundStylesTab: buttonOneHoverBGTab,
        backgroundStylesMobile: buttonOneHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_ONE_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: buttonOneBorderHoverDesktop,
        tabBorderStyle: buttonOneBorderHoverTab,
        mobBorderStyle: buttonOneBorderHoverMob,
    } = generateBorderStyle({
        controlName: BUTTON_ONE_BORDER_HOVER,
        attributes,
    });

    const {
        boxShadowStyle: buttonOneShadowHoverDesktop,
        boxShadowStyleTab: buttonOneShadowHoverTab,
        boxShadowStyleMobile: buttonOneShadowHoverMob,
    } = generateBoxShadowStyles({
        controlName: BUTTON_ONE_SHADOW_HOVER,
        attributes,
    });

    // Button Two Styles

    const {
        backgroundStylesDesktop: buttonTwoBGDesktop,
        backgroundStylesTab: buttonTwoBGTab,
        backgroundStylesMobile: buttonTwoBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_TWO_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: buttonTwoBorderDesktop,
        tabBorderStyle: buttonTwoBorderTab,
        mobBorderStyle: buttonTwoBorderMob,
    } = generateBorderStyle({
        controlName: BUTTON_TWO_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoBorderRadiusDesktop,
        dimensionStylesTab: buttonTwoBorderRadiusTab,
        dimensionStylesMobile: buttonTwoBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoMarginDesktop,
        dimensionStylesTab: buttonTwoMarginTab,
        dimensionStylesMobile: buttonTwoMarginMob,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoPaddingDesktop,
        dimensionStylesTab: buttonTwoPaddingTab,
        dimensionStylesMobile: buttonTwoPaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: buttonTwoShadowDesktop,
        boxShadowStyleTab: buttonTwoShadowTab,
        boxShadowStyleMobile: buttonTwoShadowMob,
    } = generateBoxShadowStyles({
        controlName: BUTTON_TWO_SHADOW,
        attributes,
    });

    const {
        desktopAlignStyle: buttonTwoAlignDesktop,
        tabAlignStyle: buttonTwoAlignTab,
        mobAlignStyle: buttonTwoAlignMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_TWO_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        typoStylesDesktop: buttonTwoTypoDesktop,
        typoStylesTab: buttonTwoTypoTab,
        typoStylesMobile: buttonTwoTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TWO_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        backgroundStylesDesktop: buttonTwoHoverBGDesktop,
        backgroundStylesTab: buttonTwoHoverBGTab,
        backgroundStylesMobile: buttonTwoHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_TWO_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: buttonTwoBorderHoverDesktop,
        tabBorderStyle: buttonTwoBorderHoverTab,
        mobBorderStyle: buttonTwoBorderHoverMob,
    } = generateBorderStyle({
        controlName: BUTTON_TWO_BORDER_HOVER,
        attributes,
    });

    const {
        boxShadowStyle: buttonTwoShadowHoverDesktop,
        boxShadowStyleTab: buttonTwoShadowHoverTab,
        boxShadowStyleMobile: buttonTwoShadowHoverMob,
    } = generateBoxShadowStyles({
        controlName: BUTTON_TWO_SHADOW_HOVER,
        attributes,
    });

    // Middle Text Styles
    const {
        backgroundStylesDesktop: middleTextBGDesktop,
        backgroundStylesTab: middleTextBGTab,
        backgroundStylesMobile: middleTextBGMob,
    } = generateNormalBGControlStyles({
        controlName: MIDDLE_TEXT_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: middleTextBorderDesktop,
        tabBorderStyle: middleTextBorderTab,
        mobBorderStyle: middleTextBorderMob,
    } = generateBorderStyle({
        controlName: MIDDLE_TEXT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: middleTextBorderRadiusDesktop,
        dimensionStylesTab: middleTextBorderRadiusTab,
        dimensionStylesMobile: middleTextBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: middleTextMarginDesktop,
        dimensionStylesTab: middleTextMarginTab,
        dimensionStylesMobile: middleTextMarginMob,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: middleTextPaddingDesktop,
        dimensionStylesTab: middleTextPaddingTab,
        dimensionStylesMobile: middleTextPaddingMob,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: middleTextShadowDesktop,
        boxShadowStyleTab: middleTextShadowTab,
        boxShadowStyleMobile: middleTextShadowMob,
    } = generateBoxShadowStyles({
        controlName: MIDDLE_TEXT_SHADOW,
        attributes,
    });

    const {
        typoStylesDesktop: middleTextTypoDesktop,
        typoStylesTab: middleTextTypoTab,
        typoStylesMobile: middleTextTypoMob,
    } = generateTypographyStyles({
        prefixConstant: MIDDLE_TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        backgroundStylesDesktop: middleTextHoverBGDesktop,
        backgroundStylesTab: middleTextHoverBGTab,
        backgroundStylesMobile: middleTextHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: MIDDLE_TEXT_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: middleTextBorderHoverDesktop,
        tabBorderStyle: middleTextBorderHoverTab,
        mobBorderStyle: middleTextBorderHoverMob,
    } = generateBorderStyle({
        controlName: MIDDLE_TEXT_BORDER_HOVER,
        attributes,
    });

    const {
        boxShadowStyle: middleTextShadowHoverDesktop,
        boxShadowStyleTab: middleTextShadowHoverTab,
        boxShadowStyleMobile: middleTextShadowHoverMob,
    } = generateBoxShadowStyles({
        controlName: MIDDLE_TEXT_SHADOW_HOVER,
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .wp-block-zolo-dual-button.${uniqueId} {
            ${buttonDeskAlign}
        }
        
        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-group {
            ${buttonDeskAlign}
            ${buttonWidthDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first {
            ${buttonOneBGDesktop}
            ${buttonOneBorderDesktop}
            ${buttonOneBorderRadiusDesktop}
            ${buttonOneMarginDesktop}
            ${buttonOnePaddingDesktop}
            ${buttonOneShadowDesktop}
            ${buttonOneAlignDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first:hover {
           ${buttonOneHoverBGDesktop};
           ${buttonOneBorderHoverDesktop};
           ${buttonOneShadowHoverDesktop};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first .zolo-btn-label {
            ${buttonOneTypoDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second {
            ${buttonTwoBGDesktop}
            ${buttonTwoBorderDesktop}
            ${buttonTwoBorderRadiusDesktop}
            ${buttonTwoMarginDesktop}
            ${buttonTwoPaddingDesktop}
            ${buttonTwoShadowDesktop}
            ${buttonTwoAlignDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second:hover {
           ${buttonTwoHoverBGDesktop};
           ${buttonTwoBorderHoverDesktop};
           ${buttonTwoShadowHoverDesktop};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second .zolo-btn-label {
            ${buttonTwoTypoDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator {
            ${middleTextBGDesktop}
            ${middleTextMarginDesktop}
            ${middleTextPaddingDesktop}
            ${middleTextShadowDesktop}
            ${middleTextBorderDesktop}
            ${middleTextBorderRadiusDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator:hover {
            color: ${middleTextColorHover ? middleTextColorHover : ''};
            ${middleTextHoverBGDesktop};
            ${middleTextBorderHoverDesktop};
            ${middleTextShadowHoverDesktop};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator .zolo-btn-separator-text {
            ${middleTextTypoDesktop}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator span{
            color: ${middleTextColor ? middleTextColor : ''};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first span{
            color: ${buttonOneColor ? buttonOneColor : ''};
            ${buttonOneTypoDesktop}
        }
        
        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first:hover span{
            color: ${buttonOneColorHover ? buttonOneColorHover : ''};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second span{
            color: ${buttonTwoColor ? buttonTwoColor : ''};
            ${buttonTwoTypoDesktop}
        }
        
        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second:hover span{
            color: ${buttonTwoColorHover ? buttonTwoColorHover : ''};
        }
    `;

    const tabletAllStyle = `
        .wp-block-zolo-dual-button.${uniqueId} {
            ${buttonTabAlign}
        }
        
        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-group { 
            ${buttonWidthTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first {
            ${buttonOneBGTab}
            ${buttonOneBorderTab}
            ${buttonOneBorderRadiusTab}
            ${buttonOneMarginTab}
            ${buttonOnePaddingTab}
            ${buttonOneShadowTab}
            ${buttonOneAlignTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first:hover {
           ${buttonOneHoverBGTab};
           ${buttonOneBorderHoverTab};
           ${buttonOneShadowHoverTab};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first .zolo-btn-label {
            ${buttonOneTypoTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second {
            ${buttonTwoBGTab}
            ${buttonTwoBorderTab}
            ${buttonTwoBorderRadiusTab}
            ${buttonTwoMarginTab}
            ${buttonTwoPaddingTab}
            ${buttonTwoShadowTab}
            ${buttonTwoAlignTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second:hover {
           ${buttonTwoHoverBGTab};
           ${buttonTwoBorderHoverTab};
           ${buttonTwoShadowHoverTab};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second .zolo-btn-label {
            ${buttonTwoTypoTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator {
            ${middleTextBGTab}
            ${middleTextMarginTab}
            ${middleTextPaddingTab}
            ${middleTextShadowTab}
            ${middleTextBorderTab}
            ${middleTextBorderRadiusTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator:hover {
            color: ${middleTextColorHover ? middleTextColorHover : ''};
            ${middleTextHoverBGTab};
            ${middleTextBorderHoverTab};
            ${middleTextShadowHoverTab};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator .zolo-btn-separator-text {
            ${middleTextTypoTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first span{
            color: ${buttonOneColor ? buttonOneColor : ''};
            ${buttonOneTypoTab}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator span{
            color: ${middleTextColor ? middleTextColor : ''};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second span{
            color: ${buttonTwoColor ? buttonTwoColor : ''};
            ${buttonTwoTypoTab}
        }

    `;

    const mobileAllStyle = `
        .wp-block-zolo-dual-button.${uniqueId} {
            ${buttonMobAlign}
        }
        
        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-group {
            ${buttonWidthMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first {
            ${buttonOneBGMob}
            ${buttonOneBorderMob}
            ${buttonOneBorderRadiusMob}
            ${buttonOneMarginMob}
            ${buttonOnePaddingMob}
            ${buttonOneShadowMob}
            ${buttonOneAlignMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first:hover {
           ${buttonOneHoverBGMob};
           ${buttonOneBorderHoverMob};
           ${buttonOneShadowHoverMob};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first .zolo-btn-label {
            ${buttonOneTypoMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second {
            ${buttonTwoBGMob}
            ${buttonTwoBorderMob}
            ${buttonTwoBorderRadiusMob}
            ${buttonTwoMarginMob}
            ${buttonTwoPaddingMob}
            ${buttonTwoShadowMob}
            ${buttonTwoAlignMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second:hover {
           ${buttonTwoHoverBGMob};
           ${buttonTwoBorderHoverMob};
           ${buttonTwoShadowHoverMob};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second .zolo-btn-label {
            ${buttonTwoTypoMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator {
            ${middleTextBGMob}
            ${middleTextMarginMob}
            ${middleTextPaddingMob}
            ${middleTextShadowMob}
            ${middleTextBorderMob}
            ${middleTextBorderRadiusMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator:hover {
            color: ${middleTextColorHover ? middleTextColorHover : ''};
            ${middleTextHoverBGMob};
            ${middleTextBorderHoverMob};
            ${middleTextShadowHoverMob};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator .zolo-btn-separator-text {
            ${middleTextTypoMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first span{
            color: ${buttonOneColor ? buttonOneColor : ''};
            ${buttonOneTypoMob}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator span{
            color: ${middleTextColor ? middleTextColor : ''};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second span{
            color: ${buttonTwoColor ? buttonTwoColor : ''};
            ${buttonTwoTypoMob}
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
