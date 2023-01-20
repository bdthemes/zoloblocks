import { hasVal } from "./helper";

// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
  const typoAttrs = prefixArray.reduce((total, current) => {
    const result = {
      [`${current}ZRPFontFamily`]: {
        type: "string",
      },
      [`${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px",
      },
      [`${current}ZRPFontSize`]: {
        type: "number",
      },
      [`${current}ZRPFontWeight`]: {
        type: "string",
      },
      [`${current}ZRPFontStyle`]: {
        type: "string",
      },
      [`${current}ZRPTextTransform`]: {
        type: "string",
      },
      [`${current}ZRPTextDecoration`]: {
        type: "string",
      },
      [`${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px",
      },
      [`${current}ZRPLetterSpacing`]: {
        type: "number",
      },
      [`${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em",
      },
      [`${current}ZRPLineHeight`]: {
        type: "number",
      },

      [`TAB${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px",
      },
      [`TAB${current}ZRPFontSize`]: {
        type: "number",
      },
      [`TAB${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px",
      },
      [`TAB${current}ZRPLetterSpacing`]: {
        type: "number",
      },
      [`TAB${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em",
      },
      [`TAB${current}ZRPLineHeight`]: {
        type: "number",
      },

      [`MOB${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px",
      },
      [`MOB${current}ZRPFontSize`]: {
        type: "number",
      },
      [`MOB${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px",
      },
      [`MOB${current}ZRPLetterSpacing`]: {
        type: "number",
      },
      [`MOB${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em",
      },
      [`MOB${current}ZRPLineHeight`]: {
        type: "number",
      },
    };
    return {
      ...total,
      ...result,
    };
  }, {});
  return typoAttrs;
};

// function to generate typography styles for an element based on it's prefix
export const generateTypographyStyles = ({
  prefixConstant,
  defaultFontSize,
  attributes,
}) => {
  const {
    [`${prefixConstant}ZRPFontFamily`]: fontFamily,
    [`${prefixConstant}ZRPFontWeight`]: fontWeight,
    [`${prefixConstant}ZRPFontStyle`]: fontStyle,
    [`${prefixConstant}ZRPTextTransform`]: textTransform,
    [`${prefixConstant}ZRPTextDecoration`]: textDecoration,
    [`${prefixConstant}ZRPFontSize`]: fontSize = defaultFontSize,
    [`${prefixConstant}ZRPSizeUnit`]: sizeUnit,
    [`${prefixConstant}ZRPLetterSpacing`]: letterSpacing,
    [`${prefixConstant}ZRPLetterSpacingUnit`]: letterSpacingUnit,
    [`${prefixConstant}ZRPLineHeight`]: lineHeight,
    [`${prefixConstant}ZRPLineHeightUnit`]: lineHeightUnit,

    [`TAB${prefixConstant}ZRPSizeUnit`]: TABsizeUnit,
    [`TAB${prefixConstant}ZRPLetterSpacingUnit`]: TABletterSpacingUnit,
    [`TAB${prefixConstant}ZRPLineHeightUnit`]: TABlineHeightUnit,
    [`TAB${prefixConstant}ZRPFontSize`]: TABfontSize,
    [`TAB${prefixConstant}ZRPLetterSpacing`]: TABletterSpacing,
    [`TAB${prefixConstant}ZRPLineHeight`]: TABlineHeight,

    [`MOB${prefixConstant}ZRPSizeUnit`]: MOBsizeUnit,
    [`MOB${prefixConstant}ZRPLetterSpacingUnit`]: MOBletterSpacingUnit,
    [`MOB${prefixConstant}ZRPLineHeightUnit`]: MOBlineHeightUnit,
    [`MOB${prefixConstant}ZRPFontSize`]: MOBfontSize,
    [`MOB${prefixConstant}ZRPLetterSpacing`]: MOBletterSpacing,
    [`MOB${prefixConstant}ZRPLineHeight`]: MOBlineHeight,
  } = attributes;

  const typoStylesDesktop = `
		${fontFamily ? `font-family: ${fontFamily};` : " "}
		${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
		${hasVal(lineHeight)? `line-height: ${lineHeight}${lineHeightUnit};`: " "}
		${fontWeight ? `font-weight: ${fontWeight};` : " "}
		${fontStyle ? `font-style: ${fontStyle};` : " "}
		${textDecoration ? `text-decoration: ${textDecoration};` : " "}
		${textTransform ? `text-transform: ${textTransform};` : " "}
		${hasVal(letterSpacing)? `letter-spacing: ${letterSpacing}${letterSpacingUnit};`: " "}
	`;

  const typoStylesTab = `
		${ hasVal(TABfontSize)? `font-size: ${TABfontSize}${TABsizeUnit};`: " "}
		${ hasVal(TABlineHeight)? `line-height: ${TABlineHeight}${TABlineHeightUnit};`: " " }
		${ hasVal(TABletterSpacing)? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`: " "}
	`;

  const typoStylesMobile = `
		${hasVal(MOBfontSize)? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " " }
		${hasVal(MOBlineHeight) ? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};` : " " }
		${hasVal(MOBletterSpacing) ? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};` : " "}
	`;

  return {
    typoStylesDesktop,
    typoStylesTab,
    typoStylesMobile,
  };
};