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
    default:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1e1feb"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path></svg>',
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
    default: "SUBSCRIBE",
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
