import { generateResAlignmentAttributies } from "../../../src/helpers/res-alignment-helper";
import { generateResRangeAttributies } from "../../../src/helpers/res-range-helper";
import { BUTTON_ALIGNMENT, BUTTON_WIDTH } from "./constants";
const attributes = {
  //Common Attributes
  uniqueId: {
    type: "string",
  },
  resDevice: {
    type: "string",
    default: "Desktop",
  },
  blockStyle: {
    type: "object"
  },

  //range attributes
  ...generateResRangeAttributies(BUTTON_WIDTH, {
    defaultRange: 200,
  }),
  //alignment attributes
  ...generateResAlignmentAttributies(BUTTON_ALIGNMENT, {
    defaultAlign: "left",
  }),

  //Block specific Attributes
  preset: {
    type: "string",
    default: "button-1",
  },
  bgColor: {
    type: "string",
    default: "#3799FF",
  },
  textColor: {
    type: "string",
    default: "#ffffff",
  },
};

export default attributes;
