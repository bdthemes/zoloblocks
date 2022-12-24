import { generateResRangeAttributies } from "../../../src/helpers/res-range-helper";

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
  ...generateResRangeAttributies("buttonSize", {
    defaultRange: 20,
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
