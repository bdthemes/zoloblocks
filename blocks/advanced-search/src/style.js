/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
const {
  generateResAlignmentStyle,
  generateResRangeStyle,
  generateBorderStyle,
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
} = window.zoloModule;

import {
  BUTTON_ALIGNMENT,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  BUTTON_PADDING,
  ICON_SIZE,
  TITLE_MARGIN,
  DESC_MARGIN,
  FLEX_GAP,
  ICON_TEXT_SPACING,
  ICON_S_SIZE,
  ICON_TEXT_S_SPACING,
  LABEL_BORDER,
  LABEL_BORDER_RADIUS,
  LABEL_PADDING,
  LABEL_BG,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  INPUT_PADDING,
  INPUT_BG,

  BUTTON_S_BOX_SHADOW,
  BUTTON_HOVER_S_BG_COLOR,
  BUTTON_HOVER_S_BOX_SHADOW,
} from "./constants";

import {
  BUTTON_TYPOGRAPHY,
  LABEL_TYPOGRAPHY,
  INPUT_TYPOGRAPHY,
} from "./constants/typoPrefixConstant";
import { applyFilters } from "@wordpress/hooks";

export default function Style({ props }) {
  const { attributes, setAttributes } = props;
  const {
    uniqueId,
    btnTextColor,
    btnTextHoverColor,
    labelBorderHoverColor,
    labelColor,
    inputColor,
    placeholderColor,
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


  // description


  const {
    dimensionStylesDesktop: descDeskMargin,
    dimensionStylesTab: descTabMargin,
    dimensionStylesMobile: descMobMargin,
  } = generateDimensionStyle({
    controlName: DESC_MARGIN,
    styleFor: "margin",
    attributes,
  });

  // alignment
  const {
    desktopAlignStyle: buttonAlignmentDesktop,
    tabAlignStyle: buttonAlignmentTab,
    mobAlignStyle: buttonAlignmentMob,
  } = generateResAlignmentStyle({
    controlName: BUTTON_ALIGNMENT,
    property: "text-align",
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
    backgroundStylesDesktop: ShoverDeskBGStyle,
    backgroundStylesTab: ShoverTabBGStyle,
    backgroundStylesMobile: ShoverMobBGStyle,
  } = generateNormalBGControlStyles({
    controlName: BUTTON_HOVER_S_BG_COLOR,
    attributes,
    noMainBGImg: false,
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
    desktopBorderStyle:labelBorderStyles,
    tabBorderStyle:labelBorderStylesTab,
    mobBorderStyle:labelBorderStylesMob,
  } = generateBorderStyle({
    controlName: LABEL_BORDER,
    attributes,
  });

  const {
    desktopBorderStyle:inputBorderStyles,
    tabBorderStyle:inputBorderStylesTab,
    mobBorderStyle:inputBorderStylesMob,
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
    styleFor: "border-radius",
    attributes,
  });
  const {
    dimensionStylesDesktop: labelBorderRadiusDesktop,
    dimensionStylesTab: labelBorderRadiusTab,
    dimensionStylesMobile: labelBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: LABEL_BORDER_RADIUS,
    styleFor: "border-radius",
    attributes,
  });
  const {
    dimensionStylesDesktop: inputBorderRadiusDesktop,
    dimensionStylesTab: inputBorderRadiusTab,
    dimensionStylesMobile: inputBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: INPUT_BORDER_RADIUS,
    styleFor: "border-radius",
    attributes,
  });

  // generate icon size
  const {
    desktopRangeStyle: iconSize,
    tabRangeStyle: iconSizeTab,
    mobRangeStyle: iconSizeMob,
  } = generateResRangeStyle({
    controlName: ICON_SIZE,
    property: "width",
    attributes,
  });

  const {
    desktopRangeStyle: iconHSize,
    tabRangeStyle: iconHSizeTab,
    mobRangeStyle: iconHSizeMob,
  } = generateResRangeStyle({
    controlName: ICON_SIZE,
    property: "height",
    attributes,
  });
  //Secondary Button
  const {
    desktopRangeStyle: SiconSize,
    tabRangeStyle: SiconSizeTab,
    mobRangeStyle: SiconSizeMob,
  } = generateResRangeStyle({
    controlName: ICON_S_SIZE,
    property: "width",
    attributes,
  });

  const {
    desktopRangeStyle: SiconHSize,
    tabRangeStyle: SiconHSizeTab,
    mobRangeStyle: SiconHSizeMob,
  } = generateResRangeStyle({
    controlName: ICON_S_SIZE,
    property: "height",
    attributes,
  });

  const {
    desktopRangeStyle: iconGap,
    tabRangeStyle: iconGapTab,
    mobRangeStyle: iconGapMob,
  } = generateResRangeStyle({
    controlName: ICON_TEXT_SPACING,
    property: "gap",
    attributes,
  });
  const {
    desktopRangeStyle: SiconGap,
    tabRangeStyle: SiconGapTab,
    mobRangeStyle: SiconGapMob,
  } = generateResRangeStyle({
    controlName: ICON_TEXT_S_SPACING,
    property: "gap",
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


  const {
    typoStylesDesktop: btnTypoDesktop,
    typoStylesTab: btnTypoTab,
    typoStylesMobile: btnTypoMob,
  } = generateTypographyStyles({
    prefixConstant: BUTTON_TYPOGRAPHY,
    attributes,
  });


  const {
    dimensionStylesDesktop: paddingDesktop,
    dimensionStylesTab: paddingTab,
    dimensionStylesMobile: paddingMob,
  } = generateDimensionStyle({
    controlName: BUTTON_PADDING,
    styleFor: "padding",
    attributes,
  });
  const {
    dimensionStylesDesktop: SpaddingDesktop,
    dimensionStylesTab: SpaddingTab,
    dimensionStylesMobile: SpaddingMob,
  } = generateDimensionStyle({
    controlName: LABEL_PADDING,
    styleFor: "padding",
    attributes,
  });

  const {
    dimensionStylesDesktop: inputPaddingDesktop,
    dimensionStylesTab: inputPaddingTab,
    dimensionStylesMobile: inputPaddingMob,
  } = generateDimensionStyle({
    controlName: INPUT_PADDING,
    styleFor: "padding",
    attributes,
  });

  // flex item
  const {
    desktopRangeStyle: flexGap,
    tabRangeStyle: flexGapTab,
    mobRangeStyle: flexGapMob,
  } = generateResRangeStyle({
    controlName: FLEX_GAP,
    property: "gap",
    attributes,
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId} .zolo-form-search-input .zolo-form-label{
        ${labelColor ? `color: ${labelColor};` : ""}
        ${labelDeskBGStyle}
        ${labelBorderStyles}
        ${labelBorderRadiusDesktop}
        ${labelDeskTypo}
      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input{
        ${inputColor ? `color: ${inputColor};` : ""}
        ${inputDeskTypo}
        ${inputBorderStyles}
        ${inputBorderRadiusDesktop}
        ${inputDeskBGStyle}
        ${inputPaddingDesktop}
      }
      .${uniqueId} .zolo-form-wrap .zolo-form-search-input .zolo-form-input::placeholder{
        ${placeholderColor ? `color: ${placeholderColor};` : ""}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${borderStyles}
        ${borderRadiusDesktop}
        ${paddingDesktop}
        ${normalDeskBGStyle}
        ${normalBoxShadowStyle}
      }


      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${hoverDeskBGStyle}
        ${hoverBoxShadowStyle}
      }
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn{
        ${btnTextColor ? `color: ${btnTextColor};` : ""}
      }
      .${uniqueId} .zolo-form-submit-btn:hover .zolo-form-btn{
        ${btnTextHoverColor ? `color: ${btnTextHoverColor};` : ""}
      }



  	`;
  const tabletAllStyle = `
        .wp-block-zolo-advanced-search.${uniqueId} .zolo-call-out__title {

        }

    `;

  const mobileAllStyle = `
        .wp-block-zolo-advanced-search.${uniqueId} .zolo-call-out__title {

        }
    `;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters(
          "zolo.advancedSearch.desktopAllStyle",
          desktopAllStyle,
          props,
        )}
        tabAllStyle={applyFilters(
          "zolo.advancedSearch.tabletAllStyle",
          tabletAllStyle,
          props,
        )}
        mobileAllStyle={applyFilters(
          "zolo.advancedSearch.mobileAllStyle",
          mobileAllStyle,
          props,
        )}
      />
    </>
  );
}
