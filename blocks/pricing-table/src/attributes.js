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
  BTN_BORDER,
  BTN_HOVER_BG,
  BTN_HOVER_BORDER,
  BTN_MARGIN,
  BTN_NORMAL_BG,
  BTN_PADDING,
  BTN_SHADOW,
  DESC_MARGIN,
  TEST_NORMAL_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_MARGIN, TITLE_PADDING,
  TITLE_TEXT_SHADOW,
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
  showDesc: {
    type: 'boolean',
    default: false,
  },
  descText: {
    type: 'string',
    default: "Basic features for up to 10 user",
  },

  //price
  pricePrefix: {
    type: 'string',
    default: "$",
  },
  price: {
    type: 'string',
    default: "49",
  },
  priceSuffix: {
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
    default: "per user,per month",
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

  //Buttons
  buttonText: {
    type: 'string',
    default: "Get Started",
  },
  buttonLink: {
    type: "string",
    default: "#",
  },
  buttonOpenNewTab: {
    type: 'boolean',
    default: true,
  },
  showChatBtn: {
    type: 'boolean',
    default: true,
  },
  chatBtnText: {
    type: 'string',
    default: "Chat To Sales",
  },
  chatBtnLink: {
    type: "string",
    default: "#",
  },
  chatBtnOpenNewTab: {
    type: 'boolean',
    default: true,
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

  //header style
  titleColor: {
    type: 'string',
    default: '',
  },
  titleBgColor: {
    type: 'string',
    default: '',
  },
  descColor: {
    type: 'string',
    default: '',
  },

  //price style

  //features style
  featureTitleColor: {
    type: 'string',
    default: '',
  },
  featureDescColor: {
    type: 'string',
    default: '',
  },
  featureColor: {
    type: 'string',
    default: '',
  },
  featureIconColor: {
    type: 'string',
    default: '',
  },
  //buttons style
  btnTextColor: {
    type: 'string',
    default: '',
  },
  btnHoverTextColor: {
    type: 'string',
    default: '',
  },
  btnBgHoverType: {
    type: 'string',
    default: 'normal',
  },

  //ribbon style
  ribbonColor: {
    type: 'string',
    default: '',
  },
  ribbonBgColor: {
    type: 'string',
    default: '',
  },

  ...generateDimensionAttributes(TITLE_MARGIN),
  ...generateDimensionAttributes(TITLE_PADDING),
  ...generateBorderAttributies(TITLE_BORDER),
  ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
  ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),

  //button style
  ...generateDimensionAttributes(BTN_MARGIN),
  ...generateDimensionAttributes(BTN_PADDING),
  ...generateNormalBGAttributes(BTN_NORMAL_BG, {
    defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
  }),
  ...generateNormalBGAttributes(BTN_HOVER_BG, {
    defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
  }),
  ...generateBorderAttributies(BTN_BORDER),
  ...generateBorderAttributies(BTN_HOVER_BORDER),
  ...generateBoxShadowAttributies(BTN_SHADOW),


  ...generateDimensionAttributes(TPT_MARGIN),
  ...generateDimensionAttributes(TPT_PADDING),
  ...generateBorderAttributies(TPT_BORDER),
  ...generateDimensionAttributes(TPT_BORDER_RADIUS),
  ...generateBoxShadowAttributies(TPT_SHADOW),
  ...generateTextShadowAttributies(TPT_TEXT_SHADOW),
  ...generateTextStrokeAttributies(TPT_TEXT_STROKE),

  ...generateDimensionAttributes(DESC_MARGIN),


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
