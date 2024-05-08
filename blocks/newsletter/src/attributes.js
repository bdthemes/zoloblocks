/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
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
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  INPUT_PADDING,
  INPUT_BG,
  LABEL_HOVER_BG_COLOR,
  FOCUS_BORDER_WIDTH,
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
  ...generateBorderAttributies(BUTTON_BORDER),
  ...generateBorderAttributies(LABEL_BORDER),
  // typography
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  // title
  // description

  ...generateDimensionAttributes(LABEL_BORDER_RADIUS),
  ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
  ...generateNormalBGAttributes(BUTTON_BG),
  ...generateNormalBGAttributes(LABEL_BG),
  ...generateNormalBGAttributes(LABEL_HOVER_BG_COLOR),
  ...generateNormalBGAttributes(INPUT_BG),

  ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
  ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
  ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
  ...generateBoxShadowAttributies(FIELD_BOX_SHADOW),
  ...generateBoxShadowAttributies(FIELD_FOCUS_BOX_SHADOW),
  ...generateDimensionAttributes(BUTTON_PADDING),
  ...generateDimensionAttributes(LABEL_PADDING),
  ...generateDimensionAttributes(INPUT_PADDING),

  // button icon generator
  ...generateResRangeAttributies(ICON_SIZE),
  ...generateResRangeAttributies(BUTTON_SIZE),
  ...generateResRangeAttributies(BUTTON_SPACING),
  ...generateResRangeAttributies(LABEL_SPACING),
  ...generateResRangeAttributies(FOCUS_BORDER_WIDTH),

  // presets

  ...generateBorderAttributies(INPUT_BORDER),
  ...generateDimensionAttributes(INPUT_BORDER_RADIUS),

  //Block specific Attributes
  preset: {
    type: "string",
    default: "zolo-newslatter-1",
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
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>',
  },
  showButtonText: {
    type: "boolean",
    default: true,
  },
  showIcon: {
    type: "boolean",
    default: true,
  },
  buttonText: {
    type: "string",
    default: "Search",
  },
  showLabel: {
    type: "boolean",
    default: false,
  },
  labelText: {
    type: "string",
    default: "Search",
  },
  labelColor: {
    type: "string",
    default: "",
  },
  labelTextHoverColor: {
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
  inputColor: {
    type: "string",
    default: "",
  },
  focusColor: {
    type: "string",
    default: "",
  },
  iconColor: {
    type: "string",
    default: "",
  },
  iconHoverColor: {
    type: "string",
    default: "",
  },
  placeholderColor: {
    type: "string",
    default: "",
  },
  btnLayoutType: {
    type: "string",
    default: "zolo-search-button-style-1",
  },
  labelBorderHoverColor: {
    type: "string",
    default: "",
  },
  btnBorderHoverColor: {
    type: "string",
    default: "",
  },
};

export default attributes;
