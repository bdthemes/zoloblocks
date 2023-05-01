//internal dependencies controls
const {
  generateBackgroundAttributes,
  generateBorderAttributies,
  generateBoxShadowAttributies,
  generateDimensionAttributes,
  generateTypographyAttributes,
  generateResRangeAttributies,
  generateResAlignmentAttributies,
  generateTextShadowAttributies,
  generateTextStrokeAttributies,
  generateNormalBGAttributes
} = window.zoloModule;

//block constants
import {
  SEPARATOR_HEIGHT, SEPARATOR_SPACING, SEPARATOR_WIDTH, SUBTITLE_MARGIN,
  SUBTITLE_TEXT_SHADOW,
  SUBTITLE_TEXT_STROKE,
  TEST_NORMAL_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_MARGIN, TITLE_PADDING,
  TITLE_SHADOW,
  TITLE_TEXT_SHADOW,
  TITLE_TEXT_STROKE,
  TPT_ALIGNMENT,
  TPT_BORDER,
  TPT_BORDER_RADIUS,
  TPT_MARGIN,
  TPT_PADDING,
  TPT_SHADOW,
  TPT_TEXT_SHADOW,
  TPT_TEXT_STROKE,
  WRAPPER_BG, WRAPPER_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_SHADOW
} from './constants';
import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {
  //Common Attributes
  uniqueId: {
    type: "string",
  },

  blockStyle: {
    type: "object"
  },

  //layout
  styles: {
    type: 'string',
    default: "style-1",
  },

  //header
  titleText: {
    type: 'string',
    default: "Service Name",
  },
  titleTagName: {
    type: "string",
    default: "h3",
  },

  subTitleText: {
    type: 'string',
    default: "Service sub title",
  },

  //price
  currencySymbol: {
    type: 'string',
    default: "dollar",
  },
  customSymbol: {
    type: 'string',
    default: "",
  },
  price: {
    type: 'string',
    default: "49.99",
  },
  currencyFormat: {
    type: 'string',
    default: "",
  },
  sale: {
    type: 'boolean',
    default: false,
  },
  orginalPrice: {
    type: 'string',
    default: "79",
  },
  period: {
    type: 'string',
    default: "Monthly",
  },

  //features
  showFeatureHeading: {
    type: 'boolean',
    default: true,
  },
  featureTitle: {
    type: 'string',
    default: "FEATURES",
  },
  featureDesc: {
    type: 'string',
    default: "Everything in our free plan",
  },
  features: {
    type: "array",
    default: [
      {
        text: "List Item #1",
        mediaType: "icon",
        image: {
          url: "",
          id: "",
        },
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        iconColor: '',
        iconHoverColor: '',
      },
      {
        text: "List Item #2",
        mediaType: "icon",
        image: {
          url: "",
          id: "",
        },
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        iconColor: '',
        iconHoverColor: '',
      },
      {
        text: "List Item #3",
        mediaType: "icon",
        image: {
          url: "",
          id: "",
        },
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        iconColor: '',
        iconHoverColor: '',
      },
      {
        text: "List Item #4",
        mediaType: "icon",
        image: {
          url: "",
          id: "",
        },
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        iconColor: '',
        iconHoverColor: '',
      },
      {
        text: "List Item #5",
        mediaType: "icon",
        image: {
          url: "",
          id: "",
        },
        icon: {
          "fa-check": {
            "name": "check",
            "source": "fontawesome",
            "type": "fas"
          }
        },
        iconColor: '',
        iconHoverColor: '',
      }
    ]
  },

  //footer
  buttonText: {
    type: 'string',
    default: "Select Plan",
  },
  buttonLink: {
    type: "string",
    default: "#",
  },

  //ribbon
  showRibbon: {
    type: 'boolean',
    default: true,
  },
  ribbonTitle: {
    type: "string",
    default: "Popular",
  },
  ribbonXPosition: {
    type: 'number',
    default: 0,
  },
  ribbonYPosition: {
    type: 'number',
    default: 0,
  },
  ribbonRotate: {
    type: 'number',
    default: 0,
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

  subTitleColor: {
    type: 'string',
    default: '',
  },
  tptColor: {
    type: 'string',
    default: '',
  },
  tptBgColor: {
    type: 'string',
    default: '',
  },
  tptOpacity: {
    type: 'number',
    default: 0.14,
  },

  separatorColor: {
    type: 'string',
    default: '',
  },
  ...generateResRangeAttributies(SEPARATOR_WIDTH, {
    defaultRange: 70
  }),
  ...generateResRangeAttributies(SEPARATOR_HEIGHT, {
    defaultRange: 3
  }),
  ...generateResRangeAttributies(SEPARATOR_SPACING),

  ...generateDimensionAttributes(TITLE_MARGIN),
  ...generateDimensionAttributes(TITLE_PADDING),
  ...generateBorderAttributies(TITLE_BORDER),
  ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
  ...generateBoxShadowAttributies(TITLE_SHADOW),
  ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
  ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),

  ...generateDimensionAttributes(TPT_MARGIN),
  ...generateDimensionAttributes(TPT_PADDING),
  ...generateBorderAttributies(TPT_BORDER),
  ...generateDimensionAttributes(TPT_BORDER_RADIUS),
  ...generateBoxShadowAttributies(TPT_SHADOW),
  ...generateTextShadowAttributies(TPT_TEXT_SHADOW),
  ...generateTextStrokeAttributies(TPT_TEXT_STROKE),

  ...generateDimensionAttributes(SUBTITLE_MARGIN),
  ...generateTextShadowAttributies(SUBTITLE_TEXT_SHADOW),
  ...generateTextStrokeAttributies(SUBTITLE_TEXT_STROKE),
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //advance tab attributes
  ...generateDimensionAttributes(WRAPPER_MARGIN),
  ...generateDimensionAttributes(WRAPPER_PADDING),
  ...generateBackgroundAttributes(WRAPPER_BG, {
    defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
  }),
  ...generateBorderAttributies(WRAPPER_BORDER),
  ...generateBoxShadowAttributies(WRAPPER_SHADOW),

  ...generateNormalBGAttributes(TEST_NORMAL_BG, {
    defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
  })

}
export default attributes;
