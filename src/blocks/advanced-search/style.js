/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    FIELD_BOX_SHADOW,
    FIELD_FOCUS_BOX_SHADOW,
    BUTTON_PADDING,
    BUTTON_SPACING,
    ICON_SIZE,
    BUTTON_SIZE,
    LABEL_BORDER,
    LABEL_BORDER_RADIUS,
    LABEL_PADDING,
    LABEL_SPACING,
    LABEL_BG,
    LABEL_HOVER_BG_COLOR,
    INPUT_BORDER,
    INPUT_BORDER_RADIUS,
    INPUT_PADDING,
    INPUT_BG,
    FOCUS_BORDER_WIDTH,
} from './constants';

import { LABEL_TYPOGRAPHY, INPUT_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        btnTextColor,
        btnTextHoverColor,
        labelTextHoverColor,
        labelBorderHoverColor,
        btnBorderHoverColor,
        labelColor,
        inputColor,
        focusColor,
        iconColor,
        iconHoverColor,
        placeholderColor,
        btnLayoutType,
        showIcon,
        showButtonText,
    } = attributes;

    // title
    const {
        typoStylesDesktop: labelDeskTypo,
        typoStylesTab: labelTabTypo,
        typoStylesMobile: labelMobTypo,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPOGRAPHY,
        attributes,
    });
    const {
        typoStylesDesktop: inputDeskTypo,
        typoStylesTab: inputTabTypo,
        typoStylesMobile: inputMobTypo,
    } = generateTypographyStyles({
        prefixConstant: INPUT_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: buttonDeskTypo,
        typoStylesTab: buttonTabTypo,
        typoStylesMobile: buttonMobTypo,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        attributes,
    });

    // generate Background
    const {
        backgroundStylesDesktop: normalDeskBGStyle,
        backgroundStylesTab: normalTabBGStyle,
        backgroundStylesMobile: normalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: labelDeskBGStyle,
        backgroundStylesTab: labelTabBGStyle,
        backgroundStylesMobile: labelMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: LABEL_BG,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: inputDeskBGStyle,
        backgroundStylesTab: inputTabBGStyle,
        backgroundStylesMobile: inputMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: INPUT_BG,
        attributes,
        noMainBGImg: false,
    });

    // hover background
    const {
        backgroundStylesDesktop: hoverDeskBGStyle,
        backgroundStylesTab: hoverTabBGStyle,
        backgroundStylesMobile: hoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_HOVER_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: labelHoverDeskBGStyle,
        backgroundStylesTab: labelHoverTabBGStyle,
        backgroundStylesMobile: labelHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: LABEL_HOVER_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    // generate border style
    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    const {
        desktopBorderStyle: labelBorderStyles,
        tabBorderStyle: labelBorderStylesTab,
        mobBorderStyle: labelBorderStylesMob,
    } = generateBorderStyle({
        controlName: LABEL_BORDER,
        attributes,
    });

    const {
        desktopBorderStyle: inputBorderStyles,
        tabBorderStyle: inputBorderStylesTab,
        mobBorderStyle: inputBorderStylesMob,
    } = generateBorderStyle({
        controlName: INPUT_BORDER,
        attributes,
    });

    // generate border radius
    const {
        dimensionStylesDesktop: borderRadiusDesktop,
        dimensionStylesTab: borderRadiusTab,
        dimensionStylesMobile: borderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: labelBorderRadiusDesktop,
        dimensionStylesTab: labelBorderRadiusTab,
        dimensionStylesMobile: labelBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: LABEL_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: inputBorderRadiusDesktop,
        dimensionStylesTab: inputBorderRadiusTab,
        dimensionStylesMobile: inputBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: INPUT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // generate icon size
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: buttonSpacing,
        tabRangeStyle: buttonSpacingTab,
        mobRangeStyle: buttonSpacingMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SPACING,
        property: 'margin-right',
        attributes,
    });
    const {
        desktopRangeStyle: labelSpacing,
        tabRangeStyle: labelSpacingTab,
        mobRangeStyle: labelSpacingMob,
    } = generateResRangeStyle({
        controlName: LABEL_SPACING,
        property: 'margin-left',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSize,
        tabRangeStyle: iconHSizeTab,
        mobRangeStyle: iconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: buttonSize,
        tabRangeStyle: buttonSizeTab,
        mobRangeStyle: buttonSizeMob,
    } = generateResRangeStyle({
        controlName: BUTTON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: focusBorderWidthDesk,
        tabRangeStyle: focusBorderWidthTab,
        mobRangeStyle: focusBorderWidthMob,
    } = generateResRangeStyle({
        controlName: FOCUS_BORDER_WIDTH,
        property: 'outline-width',
        attributes,
    });
    const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: BUTTON_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: hoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_BOX_SHADOW,
    });
    const { boxShadowStyle: fieldBoxShadowStyle } = generateBoxShadowStyles({
        controlName: FIELD_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: fieldHoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: FIELD_FOCUS_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: btnPaddingDesktop,
        dimensionStylesTab: btnPaddingTab,
        dimensionStylesMobile: btnPaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: labelPaddingDesktop,
        dimensionStylesTab: labelPaddingTab,
        dimensionStylesMobile: labelPaddingMob,
    } = generateDimensionStyle({
        controlName: LABEL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: inputPaddingDesktop,
        dimensionStylesTab: inputPaddingTab,
        dimensionStylesMobile: inputPaddingMob,
    } = generateDimensionStyle({
        controlName: INPUT_PADDING,
        styleFor: 'padding',
        attributes,
    });
    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-form-search-input .zolo-form-label{
        ${labelColor ? `color: ${labelColor};` : ''}
        ${labelDeskBGStyle}
        ${labelBorderStyles}
        ${labelBorderRadiusDesktop}
        ${labelDeskTypo}
        ${labelPaddingDesktop}
        ${labelSpacing}
      }
        .${uniqueId} .zolo-form-search-input:hover .zolo-form-label{
        ${labelBorderHoverColor ? `border-color: ${labelBorderHoverColor};` : ''}

      }
      .${uniqueId} .zolo-form-input:focus ~ .zolo-form-label,
      .${uniqueId} .zolo-form-input:not(:placeholder-shown).zolo-form-input:not(:focus) ~ .zolo-form-label
       {
        ${labelTextHoverColor ? `color: ${labelTextHoverColor};` : ''}
        ${labelHoverDeskBGStyle}

      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input{
        ${inputColor ? `color: ${inputColor};` : ''}
        ${inputDeskTypo}
        ${inputBorderStyles}
        ${inputBorderRadiusDesktop}
        ${inputDeskBGStyle}
        ${inputPaddingDesktop}
        ${fieldBoxShadowStyle}
      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input::placeholder{
        ${placeholderColor ? `color: ${placeholderColor};` : ''}

      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input:focus{
        ${focusColor ? `outline-color: ${focusColor};border:none;` : ''}
        ${focusBorderWidthDesk}
        ${fieldHoverBoxShadowStyle}

      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${borderStyles}
        ${borderRadiusDesktop}
        ${btnPaddingDesktop}
        ${normalDeskBGStyle}
        ${normalBoxShadowStyle}
        ${preset == 'zolo-search-1' ? buttonSize : ''}
        ${buttonDeskTypo}
        ${btnLayoutType == 'zolo-search-button-style-2' ? buttonSpacing : ''}
        ${showIcon && showButtonText ? 'justify-content:space-between' : ''}
      }


      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${hoverDeskBGStyle}
        ${hoverBoxShadowStyle}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${btnTextColor ? `color: ${btnTextColor};` : ''}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn svg{
        ${iconColor ? `fill: ${iconColor};` : ''}
        ${iconSize}
        ${iconHSize}
      }

      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn svg{
       ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
      }

      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${btnTextHoverColor ? `color: ${btnTextHoverColor};` : ''}
        ${btnBorderHoverColor ? `border-color: ${btnBorderHoverColor};` : ''}
      }



  	`;
    const tabletAllStyle = `
        .${uniqueId} .zolo-form-search-input .zolo-form-label{
          ${labelTabTypo}
        ${labelBorderStylesTab}
        ${labelBorderRadiusTab}
        ${labelPaddingTab}
        ${labelSpacingTab}
      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input{
        ${inputTabTypo}
        ${inputBorderStylesTab}
        ${inputBorderRadiusTab}
        ${inputPaddingTab}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${borderStylesTab}
        ${borderRadiusTab}
        ${btnPaddingTab}
        ${buttonSizeTab}
        ${buttonTabTypo}
        ${btnLayoutType == 'zolo-search-button-style-2' ? buttonSpacingTab : ''}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn svg{
        ${iconSizeTab}
        ${iconHSizeTab}
      }
    `;

    const mobileAllStyle = `
         .${uniqueId} .zolo-form-search-input .zolo-form-label{
          ${labelMobTypo}
        ${labelBorderStylesMob}
        ${labelBorderRadiusMob}
        ${labelPaddingMob}
        ${labelSpacingMob}
      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input{
        ${inputMobTypo}
        ${inputBorderStylesMob}
        ${inputBorderRadiusMob}
        ${inputPaddingMob}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${borderStylesMob}
        ${borderRadiusMob}
        ${btnPaddingMob}
        ${buttonSizeMob}
        ${buttonMobTypo}
        ${btnLayoutType == 'zolo-search-button-style-2' ? buttonSpacingMob : ''}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn svg{
        ${iconSizeMob}
        ${iconHSizeMob}
      }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedSearch.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedSearch.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedSearch.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
