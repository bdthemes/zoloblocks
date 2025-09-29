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
    BUTTON_ONE_ICON_POSITIONS,
    BUTTON_ONE_BG,
    BUTTON_ONE_BORDER,
    BUTTON_ONE_BORDER_RADIUS,
    BUTTON_ONE_MARGIN,
    BUTTON_ONE_PADDING,
    BUTTON_ONE_SHADOW,
    BUTTON_ONE_ALIGN,
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_BORDER_RADIUS,
} from './constants';

import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, buttonOneColor, buttonTwoColor, middleTextColor } = attributes;

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
        mobRangeStyle: buttonWidthMo,
    } = generateResRangeStyle({
        controlName: BUTTON_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOneBorderRadiusDesktop,
        dimensionStylesTab: buttonOneBorderRadiusTab,
        dimensionStylesMobile: buttonOneBorderRadiusMo,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoBorderRadiusDesktop,
        dimensionStylesTab: buttonTwoBorderRadiusTab,
        dimensionStylesMobile: buttonTwoBorderRadiusMo,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOneMarginDesktop,
        dimensionStylesTab: buttonOneMarginTab,
        dimensionStylesMobile: buttonOneMarginMo,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoMarginDesktop,
        dimensionStylesTab: buttonTwoMarginTab,
        dimensionStylesMobile: buttonTwoMarginMo,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonOnePaddingDesktop,
        dimensionStylesTab: buttonOnePaddingTab,
        dimensionStylesMobile: buttonOnePaddingMo,
    } = generateDimensionStyle({
        controlName: BUTTON_ONE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: buttonOneShadowDesktop,
        boxShadowStyleTab: buttonOneShadowTab,
        boxShadowStyleMobile: buttonOneShadowMo,
    } = generateBoxShadowStyles({
        controlName: BUTTON_ONE_SHADOW,
        attributes,
    });

    const {
        boxShadowStyle: buttonTwoShadowDesktop,
        boxShadowStyleTab: buttonTwoShadowTab,
        boxShadowStyleMobile: buttonTwoShadowMo,
    } = generateBoxShadowStyles({
        controlName: BUTTON_TWO_SHADOW,
        attributes,
    });

    const {
        desktopAlignStyle: buttonOneAlignDesktop,
        tabAlignStyle: buttonOneAlignTab,
        mobAlignStyle: buttonOneAlignMo,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ONE_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: buttonTwoAlignDesktop,
        tabAlignStyle: buttonTwoAlignTab,
        mobAlignStyle: buttonTwoAlignMo,
    } = generateResAlignmentStyle({
        controlName: BUTTON_TWO_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonTwoPaddingDesktop,
        dimensionStylesTab: buttonTwoPaddingTab,
        dimensionStylesMobile: buttonTwoPaddingMo,
    } = generateDimensionStyle({
        controlName: BUTTON_TWO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Button One Background Styles
    const {
        backgroundStylesDesktop: buttonOneBGDesktop,
        backgroundStylesTab: buttonOneBGTab,
        backgroundStylesMobile: buttonOneBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_ONE_BG,
        attributes,
        noMainBGImg: false,
    });

    // Button Two Background Styles
    const {
        backgroundStylesDesktop: buttonTwoBGDesktop,
        backgroundStylesTab: buttonTwoBGTab,
        backgroundStylesMobile: buttonTwoBGMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_TWO_BG,
        attributes,
        noMainBGImg: false,
    });

    // Button One Border Styles
    const {
        desktopBorderStyle: buttonOneBorderDesktop,
        tabBorderStyle: buttonOneBorderTab,
        mobBorderStyle: buttonOneBorderMo,
    } = generateBorderStyle({
        controlName: BUTTON_ONE_BORDER,
        attributes,
    });

    // Button Two Border Styles
    const {
        desktopBorderStyle: buttonTwoBorderDesktop,
        tabBorderStyle: buttonTwoBorderTab,
        mobBorderStyle: buttonTwoBorderMo,
    } = generateBorderStyle({
        controlName: BUTTON_TWO_BORDER,
        attributes,
    });

    // Button One Typography Styles
    const {
        typoStylesDesktop: buttonOneTypoDesktop,
        typoStylesTab: buttonOneTypoTab,
        typoStylesMobile: buttonOneTypoMo,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_ONE_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Button Two Typography Styles
    const {
        typoStylesDesktop: buttonTwoTypoDesktop,
        typoStylesTab: buttonTwoTypoTab,
        typoStylesMobile: buttonTwoTypoMo,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TWO_TYPO,
        defaultFontSize: '',
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
        dimensionStylesDesktop: middleTextMarginDesktop,
        dimensionStylesTab: middleTextMarginTab,
        dimensionStylesMobile: middleTextMarginMo,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: middleTextPaddingDesktop,
        dimensionStylesTab: middleTextPaddingTab,
        dimensionStylesMobile: middleTextPaddingMo,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: middleTextShadowDesktop,
        boxShadowStyleTab: middleTextShadowTab,
        boxShadowStyleMobile: middleTextShadowMo,
    } = generateBoxShadowStyles({
        controlName: MIDDLE_TEXT_SHADOW,
        attributes,
    });

    const {
        desktopBorderStyle: middleTextBorderDesktop,
        tabBorderStyle: middleTextBorderTab,
        mobBorderStyle: middleTextBorderMo,
    } = generateBorderStyle({
        controlName: MIDDLE_TEXT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: middleTextBorderRadiusDesktop,
        dimensionStylesTab: middleTextBorderRadiusTab,
        dimensionStylesMobile: middleTextBorderRadiusMo,
    } = generateDimensionStyle({
        controlName: MIDDLE_TEXT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: middleTextTypoDesktop,
        typoStylesTab: middleTextTypoTab,
        typoStylesMobile: middleTextTypoMo,
    } = generateTypographyStyles({
        prefixConstant: 'middleTextTypo',
        defaultFontSize: '',
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

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second span{
            color: ${buttonTwoColor ? buttonTwoColor : ''};
            ${buttonTwoTypoDesktop}
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
            ${buttonWidthMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first {
            ${buttonOneBGMob}
            ${buttonOneBorderMo}
            ${buttonOneBorderRadiusMo}
            ${buttonOneMarginMo}
            ${buttonOnePaddingMo}
            ${buttonOneShadowMo}
            ${buttonOneAlignMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first .zolo-btn-label {
            ${buttonOneTypoMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second {
            ${buttonTwoBGMob}
            ${buttonTwoBorderMo}
            ${buttonTwoBorderRadiusMo}
            ${buttonTwoMarginMo}
            ${buttonTwoPaddingMo}
            ${buttonTwoShadowMo}
            ${buttonTwoAlignMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second .zolo-btn-label {
            ${buttonTwoTypoMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator {
            ${middleTextBGMob}
            ${middleTextMarginMo}
            ${middleTextPaddingMo}
            ${middleTextShadowMo}
            ${middleTextBorderMo}
            ${middleTextBorderRadiusMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator .zolo-btn-separator-text {
            ${middleTextTypoMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-first span{
            color: ${buttonOneColor ? buttonOneColor : ''};
            ${buttonOneTypoMo}
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-separator span{
            color: ${middleTextColor ? middleTextColor : ''};
        }

        .wp-block-zolo-dual-button.${uniqueId} .zolo-btn-second span{
            color: ${buttonTwoColor ? buttonTwoColor : ''};
            ${buttonTwoTypoMo}
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
