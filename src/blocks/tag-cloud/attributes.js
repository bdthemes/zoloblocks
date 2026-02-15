import {
  COLUMNS_GAP,
  COUNT_PADDING,
  COUNT_BORDER,
  COUNT_BORDER_RADIUS,
  COUNT_SHADOW,
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
} from "./constants";

/**
 * Internal dependencies
 */
const {
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateTypographyAttributes,
  generateGapAttributes
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
  //Global Attributes
  globalConfig: {
    type: 'object',
    default: {
      margin: {
        prefix: 'mainMargin',
      },
      padding: {
        prefix: 'mainPadding',
      },
      background: {
        prefix: 'mainBg',
      },
      border: {
        prefix: 'mainBorder',
      },
      borderRadius: {
        prefix: 'mainBorderRadius',
      },
      boxShadow: {
        prefix: 'mainBoxShadow',
      },
      responsiveControls: true,
    },
  },
  // block attributes
  preset: {
    type: 'string',
    default: 'style-1',
  },
  showCount: {
    type: 'boolean',
    default: true
  },
  skin: {
    type: 'string',
    default: 'default',
  },
  cloudShape: {
    type: 'string',
    default: 'sphere',
  },
  rotationLock: {
    type: 'string',
    default: ''
  },
  openInNewTab: {
    type: 'boolean',
    default: false,
  },
  canvasSize: {
    type: 'number',
    default: 400,
  },
  activeCursor: {
    type: 'string',
    default: 'pointer',
  },
  depth: {
    type: 'number',
    default: 80
  },
  speed: {
    type: 'number',
    default: 50
  },
  triggerOn: {
    type: 'string',
    default: 'always'
  },
  dragControl: {
    type: 'boolean',
    default: false
  },
  wheelZoom: {
    type: 'boolean',
    default: false
  },
  visibleTime: {
    type: 'number',
    default: 1
  },
  itemHoverOpacity: {
    type: 'number',
  },

  ...generateGapAttributes(COLUMNS_GAP, {
    defaultUnit: 'px',
  }),
  catQuery: {
    type: 'object',
  },
  ...generateTypographyAttributes(Object.values(typographyObjs)),
  nameColor: {
    type: 'string'
  },
  nameHoverColor: {
    type: 'string'
  },
  countColor: {
    type: 'string'
  },
  countHoverColor: {
    type: 'string'
  },
  countBgColor: {
    type: 'string'
  },
  countBgHoverColor: {
    type: 'string'
  },
  //item
  ...generateDimensionAttributes(ITEM_PADDING),
  ...generateNormalBGAttributes(ITEM_BG),
  ...generateBorderAttributies(ITEM_BORDER),
  ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
  ...generateBoxShadowAttributies(ITEM_SHADOW),
  ...generateNormalBGAttributes(ITEM_HOVER_BG),
  ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
  //count
  ...generateDimensionAttributes(COUNT_PADDING),
  ...generateBorderAttributies(COUNT_BORDER),
  ...generateDimensionAttributes(COUNT_BORDER_RADIUS),
  ...generateBoxShadowAttributies(COUNT_SHADOW),
  //animated controls
  animatedTextSize: {
    type: 'number'
  },
  animatedColor: {
    type: 'string'
  },
  animatedBackgroundColor: {
    type: 'string'
  },
  animatedTextShadowColor: {
    type: 'string',
    default: '#fff'
  },
  animatedTextShadowBlur: {
    type: 'number',
    default: 10
  },
  animatedBackgroundRadius: {
    type: 'number',
    default: 0
  },
  animatedOutlineColor: {
    type: 'string',
    default: '#ddd'
  },
  animatedOutlineThickness: {
    type: 'number',
    default: 2
  },
  animatedOutlineDash: {
    type: 'number',
    default: 0
  },
  animatedOutlineDashSpace:{
    type: 'number',
    default: 2
  },
  animatedOutlineDashSpeed: {
    type: 'number',
    default: 3
  },
  animatedIncrease: {
    type: 'number',
    default: 5
  },
  animatedBorderRadius: {
    type: 'number',
    default: 2
  },
}
export default attributes;
