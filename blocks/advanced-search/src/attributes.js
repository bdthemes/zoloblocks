/**
 * Internal dependencies
 */
const {
  generateResAlignmentAttributies,
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
} = window.zoloModule;

import {
  BUTTON_ALIGNMENT,
  BUTTON_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  BUTTON_PADDING,
  ICON_SIZE,
  PO_SWIDTH,
  PT_BORDER,
  PT_BORDER_RADIUS,
  PTH_BORDER,
  PTH_BORDER_RADIUS,
  PF_SWIDTH,
  PFV_BORDER,
  PFV_BORDER_RADIUS,
  PS_BORDER,
  PS_BORDER_RADIUS,
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
  BUTTON_S_BOX_SHADOW,
  BUTTON_HOVER_S_BG_COLOR,
  BUTTON_HOVER_S_BOX_SHADOW,
} from "./constants";

import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {
  globalConfig: {
    type: "object",
    default: {
      margin: {
        prefix: "advBtnMargin",
      },
      padding: {
        prefix: "advBtnPadding",
      },
      background: {
        prefix: "advBtnBg",
      },
      border: {
        prefix: "mainBorder",
      },
      borderRadius: {
        prefix: "mainBorderRadius",
      },
      boxShadow: {
        prefix: "mainBoxShadow",
      },
      responsiveControls: true,
    },
  },
  // Button Generators
  ...generateResAlignmentAttributies(BUTTON_ALIGNMENT),
  ...generateBorderAttributies(BUTTON_BORDER),
  ...generateBorderAttributies(LABEL_BORDER),
  ...generateResRangeAttributies(ICON_TEXT_SPACING),
  ...generateResRangeAttributies(ICON_TEXT_S_SPACING),
  // typography
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  // title
  ...generateDimensionAttributes(TITLE_MARGIN),
  // description
  ...generateDimensionAttributes(DESC_MARGIN),

  ...generateDimensionAttributes(LABEL_BORDER_RADIUS),
  ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
  ...generateNormalBGAttributes(BUTTON_BG),
  ...generateNormalBGAttributes(LABEL_BG),
  ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
  ...generateNormalBGAttributes(BUTTON_HOVER_S_BG_COLOR),
  ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
  ...generateBoxShadowAttributies(BUTTON_S_BOX_SHADOW),
  ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
  ...generateBoxShadowAttributies(BUTTON_HOVER_S_BOX_SHADOW),
  ...generateDimensionAttributes(BUTTON_PADDING),
  ...generateDimensionAttributes(LABEL_PADDING),

  // button icon generator
  ...generateResRangeAttributies(ICON_SIZE),
  ...generateResRangeAttributies(ICON_S_SIZE),

  // presets
  ...generateResRangeAttributies(PO_SWIDTH),

  ...generateBorderAttributies(PT_BORDER),
  ...generateDimensionAttributes(PT_BORDER_RADIUS),

  ...generateBorderAttributies(PTH_BORDER),
  ...generateDimensionAttributes(PTH_BORDER_RADIUS),

  ...generateResRangeAttributies(PF_SWIDTH),

  ...generateBorderAttributies(PFV_BORDER),
  ...generateDimensionAttributes(PFV_BORDER_RADIUS),

  ...generateBorderAttributies(PS_BORDER),
  ...generateDimensionAttributes(PS_BORDER_RADIUS),

  ...generateResRangeAttributies(FLEX_GAP),

  //Block specific Attributes
  preset: {
    type: "string",
    default: "zolo-search-1",
  },
  placeholder: {
    type: "string",
    default: "Type & Hit Enter",
  },
  buttonType: {
    type: "string",
    default: "text",
  },
  buttonIcon: {
    type: "string",
    default:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2H10v-2z'/></svg>",
  },
  buttonText: {
    type: "string",
    default: "Search",
  },
  showLabel: {
    type: "boolean",
    default: true,
  },
  labelColor: {
    type: "string",
    default: "",
  },
  btnTextColor: {
    type: "string",
    default: "",
  },
  btnTextHoverColor: {
    type: "string",
    default: "",
  },
};

export default attributes;
