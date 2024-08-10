import {
  GRID_COLUMNS,
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
  generateResCounterAttributies,
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
    default: 'grid',
  },

  showAvatar: {
    type: 'boolean',
    default: true
  },
  showName: {
    type: 'boolean',
    default: true
  },
  showRole: {
    type: 'boolean',
    default: true
  },
  showDescription: {
    type: 'boolean',
    default: true
  },
  shoePostCount: {
    type: 'boolean',
    default: true
  },
  showSocialLink: {
    type: 'boolean',
    default: true
  },
  itemHoverOpacity: {
    type: 'number',
  },
  ...generateResCounterAttributies(GRID_COLUMNS, {
    deskRange: 3,
    tabRange: 2,
    mobRange: 1,
  }),
  ...generateGapAttributes(COLUMNS_GAP, {
    defaultUnit: 'px',
  }),
  authorQuery: {
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
  singleBG: {
    type: 'boolean',
    default: false
  },
  multipleBG: {
    type: 'string',
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
}
export default attributes;
