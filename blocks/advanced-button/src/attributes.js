import { generateDimensionAttributes } from "../../../src/helpers/dimension-helper";
import { generateResAlignmentAttributies } from "../../../src/helpers/res-alignment-helper";
import { generateResRangeAttributies } from "../../../src/helpers/res-range-helper";
import { BUTTON_ALIGNMENT, BUTTON_MARGIN, BUTTON_PADDING,BUTTON_BRADIUS,BUTTON_WIDTH } from "./constants";

const attributes = {
  //Common Attributes
  uniqueId: {
    type: "string",
  },
  resDevice: {
    type: "string",
    default: "Desktop",
  },

  //range attributes
  ...generateResRangeAttributies(BUTTON_WIDTH, {
    defaultRange: 100,
    defaultUnit: "%",
  }),
  //alignment attributes
  ...generateResAlignmentAttributies(BUTTON_ALIGNMENT, {
    defaultAlign: "left",
  }),

  buttonColor: {
    type: "string",
    default: "red",
  },

  buttonBGColor: {
    type: "string",
    default: "green",
  },

  ...generateDimensionAttributes(BUTTON_MARGIN, {
    top: 10,
    right: 15,
    bottom: 20,
    left: 25,
    isLinked: true,
  }),

  ...generateDimensionAttributes(BUTTON_PADDING, {
    top: 10,
    right: 15,
    bottom: 20,
    left: 25,
    isLinked: true,
  }),

  ...generateDimensionAttributes(BUTTON_BRADIUS, {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    isLinked: true,
  }),

  // buttonSizeRange: {
  //   type: "number",
  //   default: 101,
  // },
  // TABbuttonSizeRange: {
  //   type: "number",
  //   default: 60,
  // },
  // MOBbuttonSizeRange: {
  //   type: "number",
  //   default: 40,
  // },

  // buttonSizeUnit: {
  //   type: "string",
  //   default: "%",
  // },
  // TABbuttonSizeUnit: {
  //   type: "string",
  //   default: "px",
  // },
  // MOBbuttonSizeUnit: {
  //   type: "string",
  //   default: "em",
  // },

  //Block specific Attributes
  preset: {
    type: "string",
    default: "button-1",
  },
  bgColor: {
    type: "string",
    default: "#000000",
  },
  textColor: {
    type: "string",
    default: "#ffffff",
  },
};

export default attributes;
