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
import { HEADING_ALIGNMENT, SEPARATOR_HEIGHT, SEPARATOR_WIDTH, SUBTITLE_MARGIN, TITLE_MARGIN, WRAPPER_BG, WRAPPER_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_SHADOW } from './constants';
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

  //alignment attributes
  ...generateResAlignmentAttributies(HEADING_ALIGNMENT, {
    defaultAlign: 'left',
  }),

  //settings tab
  styles: {
    type: 'string',
    default: "style-0",
  },
  titleText: {
    type: 'string',
    default: "Zolo Block Advanced Heading",
  },
  subTitleText: {
    type: 'string',
    default: "Zolo Block Sub Title",
  },
  titleTagName: {
    type: "string",
    default: "h2",
  },
  subTitleTagName: {
    type: "string",
    default: "h4",
  },
  transparentTitleText: {
    type: 'string',
    default: "Advanced Heading",
  },
  showSubTitle: {
    type: 'boolean',
    default: false,
  },
  showSeparator: {
    type: 'boolean',
    default: false,
  },
  showTransparentTitle: {
    type: 'boolean',
    default: false,
  },
  subTitlePosition: {
    type: 'string',
    default: 'top'
  },
  separatorPosition: {
    type: 'string',
    default: 'bottom'
  },
  separaTorAlign: {
    type: 'string',
    default: 'left'
  },
  align: {
    type: "string",
    default: "left",
  },

  //design tab attributes
  titleColor: {
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
