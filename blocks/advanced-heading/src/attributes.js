//internal dependencies controls
const {
  generateBackgroundAttributes,
  generateBorderAttributies,
  generateBoxShadowAttributies,
  generateDimensionAttributes,
  generateTypographyAttributes,
  generateResRangeAttributies,
  generateResAlignmentAttributies
} = window.zoloModule;

//block constants
import { SEPARATOR_HEIGHT, SEPARATOR_WIDTH, SUBTITLE_MARGIN, TITLE_MARGIN, TPT_ALIGNMENT, WRAPPER_BG, WRAPPER_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_SHADOW } from './constants';
import * as typographyObjs from "./constants/typoPrefixConstant";

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
  ...generateResRangeAttributies(SEPARATOR_WIDTH, {
    defaultRange: 70
  }),
  ...generateResRangeAttributies(SEPARATOR_HEIGHT, {
    defaultRange: 3
  }),

  //settings tab
  styles: {
    type: 'string',
    default: "style-0",
  },
  titleText: {
    type: 'string',
    default: "I am Advanced Heading",
  },
  titleLink: {
    type: "string",
    default: "",
  },
  titleTagName: {
    type: "string",
    default: "h2",
  },
  showSubTitle: {
    type: 'boolean',
    default: false,
  },
  subTitleText: {
    type: 'string',
    default: "Sub Heading Here",
  },
  subTitlePosition: {
    type: 'string',
    default: 'top'
  },
  showSeparator: {
    type: 'boolean',
    default: false,
  },
  separatorPosition: {
    type: 'string',
    default: 'bottom'
  },
  align: {
    type: "string",
    default: "left",
  },
  showTransparentTitle: {
    type: 'boolean',
    default: false,
  },
  transparentTitleText: {
    type: "string",
    default: "Advanced Heading",
  },
  transparentTitleXOffset: {
    type: 'number',
    default: '',
  },
  transparentTitleYOffset: {
    type: 'number',
    default: '',
  },
  transparentTitleRotate: {
    type: 'number',
    default: '',
  },
  transparentTitleHide: {
    type: "string",
    default: "",
  },
  transparentTitleRotateOrigin: {
    type: "string",
    default: "top-left",
  },

  ...generateResAlignmentAttributies(TPT_ALIGNMENT),

  //design tab attributes
  titleColor: {
    type: 'string',
    default: '',
  },
  titleBgColor: {
    type: 'string',
    default: '',
  },
  titleBorderColor: {
    type: 'string',
    default: '',
  },
  subTitleColor: {
    type: 'string',
    default: '',
  },
  tpColor: {
    type: 'string',
    default: '',
  },
  separatorColor: {
    type: 'string',
    default: '',
  },

  ...generateDimensionAttributes(TITLE_MARGIN),
  ...generateDimensionAttributes(SUBTITLE_MARGIN),
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //advance tab attributes
  ...generateDimensionAttributes(WRAPPER_MARGIN),
  ...generateDimensionAttributes(WRAPPER_PADDING),
  ...generateBackgroundAttributes(WRAPPER_BG, {
    defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
  }),
  ...generateBorderAttributies(WRAPPER_BORDER),
  ...generateBoxShadowAttributies(WRAPPER_SHADOW),

}
export default attributes;
