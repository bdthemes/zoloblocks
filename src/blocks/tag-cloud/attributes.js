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

  itemHoverOpacity:{
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
}
export default attributes;
