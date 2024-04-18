/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

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
  BUTTON_PADDING,
  ICON_SIZE,

  LABEL_BORDER,
  LABEL_BORDER_RADIUS,
  LABEL_BG,
  
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  INPUT_PADDING,
  INPUT_BG,

} from "./constants";

import {
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
    iconColor,
    iconHoverColor,
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




  const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
    controlName: BUTTON_BOX_SHADOW,
    attributes,
  });


  const { boxShadowStyle: hoverBoxShadowStyle } = generateBoxShadowStyles({
    attributes,
    controlName: BUTTON_HOVER_BOX_SHADOW,
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
    dimensionStylesDesktop: inputPaddingDesktop,
    dimensionStylesTab: inputPaddingTab,
    dimensionStylesMobile: inputPaddingMob,
  } = generateDimensionStyle({
    controlName: INPUT_PADDING,
    styleFor: "padding",
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
      .${uniqueId} .zolo-form-submit-btn .zolo-form-btn svg{
        ${iconColor ? `fill: ${iconColor};` : ""}
        ${iconSize}
        ${iconHSize}
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
