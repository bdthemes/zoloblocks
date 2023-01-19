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