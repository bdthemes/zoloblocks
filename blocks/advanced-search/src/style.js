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
  BUTTON_S_BORDER,
  BUTTON_S_BORDER_RADIUS,
  BUTTON_S_PADDING,
  BUTTON_S_BG,
  BUTTON_S_BOX_SHADOW,
  BUTTON_HOVER_S_BG_COLOR,
  BUTTON_HOVER_S_BOX_SHADOW,
} from "./constants";

import {
  BUTTON_TYPOGRAPHY,
  BUTTON_S_TYPOGRAPHY,
  TITLE_TYPO,
  DESC_TYPO,
} from "./constants/typoPrefixConstant";
import { applyFilters } from "@wordpress/hooks";

export default function Style({ props }) {
  const { attributes, setAttributes } = props;
  const {
    uniqueId,
    textColor,
    textHoverColor,
    borderHoverColor,
    titleColor,
    descriptionColor,
    SborderHoverColor,
    StextColor,
    SHoverColor,
  } = attributes;

  // title
  const {
    typoStylesDesktop: titleDeskTypo,
    typoStylesTab: titleTabTypo,
    typoStylesMobile: titleMobTypo,
  } = generateTypographyStyles({
    prefixConstant: TITLE_TYPO,
    attributes,
  });

  const {
    dimensionStylesDesktop: titleDeskMargin,
    dimensionStylesTab: titleTabMargin,
    dimensionStylesMobile: titleMobMargin,
  } = generateDimensionStyle({
    controlName: TITLE_MARGIN,
    styleFor: "margin",
    attributes,
  });

  // description
  const {
    typoStylesDesktop: descDeskTypo,
    typoStylesTab: descTabTypo,
    typoStylesMobile: descMobTypo,
  } = generateTypographyStyles({
    prefixConstant: DESC_TYPO,
    defaultFontSize: "",
    attributes,
  });

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
    backgroundStylesDesktop: SnormalDeskBGStyle,
    backgroundStylesTab: SnormalTabBGStyle,
    backgroundStylesMobile: SnormalMobBGStyle,
  } = generateNormalBGControlStyles({
    controlName: BUTTON_S_BG,
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
    desktopBorderStyle: SborderStyles,
    tabBorderStyle: SborderStylesTab,
    mobBorderStyle: SborderStylesMob,
  } = generateBorderStyle({
    controlName: BUTTON_S_BORDER,
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
    dimensionStylesDesktop: SborderRadiusDesktop,
    dimensionStylesTab: SborderRadiusTab,
    dimensionStylesMobile: SborderRadiusMob,
  } = generateDimensionStyle({
    controlName: BUTTON_S_BORDER_RADIUS,
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
    typoStylesDesktop: SbtnTypoDesktop,
    typoStylesTab: SbtnTypoTab,
    typoStylesMobile: SbtnTypoMob,
  } = generateTypographyStyles({
    prefixConstant: BUTTON_S_TYPOGRAPHY,
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
    controlName: BUTTON_S_PADDING,
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
        .wp-block-zolo-advanced-search.${uniqueId} {

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
