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
    MSG_BORDER,
    MSG_BORDER_RADIUS,
    MSG_PADDING,
    MSG_MARGIN,
    SUCCESS_MSG_BG,
    ERROR_MSG_BG,
    SUBSCRIBED_MSG_BG,
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
    LABEL_BOTTOM_SPACING,
    LABEL_BG,
    LABEL_HOVER_BG_COLOR,
    INPUT_BORDER,
    INPUT_BORDER_RADIUS,
    INPUT_PADDING,
    INPUT_BG,
    FOCUS_BORDER_WIDTH,
} from './constants';

import { LABEL_TYPOGRAPHY, INPUT_TYPOGRAPHY, BUTTON_TYPOGRAPHY, MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstant';
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
        successTextColor,
        errorTextColor,
        subscribedTextColor,
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
    const {
        typoStylesDesktop: msgDeskTypo,
        typoStylesTab: msgTabTypo,
        typoStylesMobile: msgMobTypo,
    } = generateTypographyStyles({
        prefixConstant: MESSAGE_TYPOGRAPHY,
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
        backgroundStylesDesktop: successMsgDeskBGStyle,
        backgroundStylesTab: successMsgTabBGStyle,
        backgroundStylesMobile: successMsgMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: SUCCESS_MSG_BG,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: errorMsgDeskBGStyle,
        backgroundStylesTab: errorMsgTabBGStyle,
        backgroundStylesMobile: errorMsgMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ERROR_MSG_BG,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: warningMsgDeskBGStyle,
        backgroundStylesTab: warningMsgTabBGStyle,
        backgroundStylesMobile: warningMsgMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: SUBSCRIBED_MSG_BG,
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
        desktopBorderStyle: msgBorderStylesDesk,
        tabBorderStyle: msgBorderStylesTab,
        mobBorderStyle: msgBorderStylesMob,
    } = generateBorderStyle({
        controlName: MSG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: msgBorderRadiusDesktop,
        dimensionStylesTab: msgBorderRadiusTab,
        dimensionStylesMobile: msgBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: MSG_BORDER_RADIUS,
        styleFor: 'border-radius',
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
        desktopRangeStyle: labelBottomSpacing,
        tabRangeStyle: labelBottomSpacingTab,
        mobRangeStyle: labelBottomSpacingMob,
    } = generateResRangeStyle({
        controlName: LABEL_BOTTOM_SPACING,
        property: 'margin-bottom',
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
        dimensionStylesDesktop: msgPaddingDesktop,
        dimensionStylesTab: msgPaddingTab,
        dimensionStylesMobile: msgPaddingMob,
    } = generateDimensionStyle({
        controlName: MSG_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: msgMarginDesktop,
        dimensionStylesTab: msgMarginTab,
        dimensionStylesMobile: msgMarginMob,
    } = generateDimensionStyle({
        controlName: MSG_MARGIN,
        styleFor: 'margin',
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
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
        ${labelBottomSpacing}
        ${labelSpacing}
        ${labelDeskTypo}
        ${labelColor ? `color: ${labelColor};` : ''}

      }
        ${
            preset !== 'zolo-newsletter-1'
                ? `
       .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
        ${labelDeskBGStyle}
        ${labelBorderStyles}
        ${labelBorderRadiusDesktop}
        ${labelPaddingDesktop}
      }`
                : ``
        }
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter:hover .zolo-form-label{
        ${labelBorderHoverColor ? `border-color: ${labelBorderHoverColor};` : ''}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input:focus + .zolo-form-label {
        ${labelTextHoverColor ? `color: ${labelTextHoverColor};` : ''}
        ${labelHoverDeskBGStyle}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputColor ? `color: ${inputColor};` : ''}
        ${inputDeskTypo}
        ${inputBorderStyles}
        ${inputBorderRadiusDesktop}
        ${inputDeskBGStyle}
        ${inputPaddingDesktop}
        ${fieldBoxShadowStyle}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input::placeholder{
        ${placeholderColor ? `color: ${placeholderColor};` : ''}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input:focus{
        ${focusColor ? `outline-color: ${focusColor};` : ''}
        ${focusBorderWidthDesk}
        ${fieldHoverBoxShadowStyle}

      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStyles}
        ${borderRadiusDesktop}
        ${btnPaddingDesktop}
        ${normalDeskBGStyle}
        ${normalBoxShadowStyle}
        ${preset == 'zolo-newsletter-1' ? buttonSize : ''}
        ${buttonDeskTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacing : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgDeskTypo}
        ${msgBorderStylesDesk}
        ${msgBorderRadiusDesktop}
        ${msgPaddingDesktop}
        ${msgMarginDesktop}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-success{
        ${successMsgDeskBGStyle}
        ${successTextColor ? `color: ${successTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-warning{
        ${warningMsgDeskBGStyle}
        ${subscribedTextColor ? `color: ${subscribedTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text.status-error{
        ${errorMsgDeskBGStyle}
        ${errorTextColor ? `color: ${errorTextColor};` : ''}
      }


      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${hoverDeskBGStyle}
        ${hoverBoxShadowStyle}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${btnTextColor ? `color: ${btnTextColor};` : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconColor ? `fill: ${iconColor};` : ''}
        ${iconSize}
        ${iconHSize}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn:hover svg{
       ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn:hover {
        ${btnTextHoverColor ? `color: ${btnTextHoverColor};` : ''}
        ${btnBorderHoverColor ? `border-color: ${btnBorderHoverColor};` : ''}
      }

  	`;
    const tabletAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
          ${labelTabTypo}
        ${labelBorderStylesTab}
        ${labelBorderRadiusTab}
        ${labelPaddingTab}
        ${labelSpacingTab}
        ${labelBottomSpacingTab}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputTabTypo}
        ${inputBorderStylesTab}
        ${inputBorderRadiusTab}
        ${inputPaddingTab}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStylesTab}
        ${borderRadiusTab}
        ${btnPaddingTab}
        ${buttonSizeTab}
        ${buttonTabTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacingTab : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconSizeTab}
        ${iconHSizeTab}
      }

      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgTabTypo}
        ${msgBorderStylesTab}
        ${msgBorderRadiusTab}
        ${msgPaddingTab}
        ${msgMarginTab}
      }
    `;

    const mobileAllStyle = `
         .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-label{
          ${labelMobTypo}
        ${labelBorderStylesMob}
        ${labelBorderRadiusMob}
        ${labelPaddingMob}
        ${labelSpacingMob}
        ${labelBottomSpacingMob}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-input{
        ${inputMobTypo}
        ${inputBorderStylesMob}
        ${inputBorderRadiusMob}
        ${inputPaddingMob}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn{
        ${borderStylesMob}
        ${borderRadiusMob}
        ${btnPaddingMob}
        ${buttonSizeMob}
        ${buttonMobTypo}
        ${btnLayoutType == 'zolo-newsletter-button-style-2' ? buttonSpacingMob : ''}
      }
      .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-form-btn svg{
        ${iconSizeMob}
        ${iconHSizeMob}
      }
        .${uniqueId}.zolo-block.wp-block-zolo-newsletter .zolo-newsletter-info-text{
        ${msgMobTypo}
        ${msgBorderStylesMob}
        ${msgBorderRadiusMob}
        ${msgPaddingMob}
        ${msgMarginMob}
      }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedNewsletter.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedNewsletter.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedNewsletter.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
