const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateNormalBGAttributes,
} = window.zoloModule;

import {
  //item
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
  //icon
  ICON_BG,
  ICON_BORDER,
  ICON_BORDER_RADIUS,
  ICON_PADDING,
  ICON_SIZE,
  ICON_SPACING,
  ICON_H_SPACING,
  ICON_HOVER_BG,
  COUNTER_SPACING,
} from './constants';

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
  socialName: {
    type: 'string',
    default: ''
  },
  socialIcon: {
    type: 'string',
    default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
  },
  socialLink: {
    type: 'object',
    default: {
      url: '#',
      openInNewTab: false,
    }
  },
  socialCounter: {
    type: 'string',
    default: '450'
  },
  socialMeta: {
    type: 'string',
    default: 'Likes'
  },

  // item
  ...generateNormalBGAttributes(ITEM_BG),
  ...generateBorderAttributies(ITEM_BORDER),
  ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
  ...generateDimensionAttributes(ITEM_PADDING),
  ...generateBoxShadowAttributies(ITEM_SHADOW),
  ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
  ...generateNormalBGAttributes(ITEM_HOVER_BG),
  //icon
  ...generateNormalBGAttributes(ICON_BG),
  ...generateBorderAttributies(ICON_BORDER),
  ...generateDimensionAttributes(ICON_BORDER_RADIUS),
  ...generateDimensionAttributes(ICON_PADDING),
  ...generateNormalBGAttributes(ICON_HOVER_BG),
  ...generateResRangeAttributies(ICON_SIZE),
  ...generateResRangeAttributies(ICON_SPACING),
  ...generateResRangeAttributies(ICON_H_SPACING),

  //counter
  ...generateResRangeAttributies(COUNTER_SPACING),
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //Block specific Attributes
  preset: {
    type: 'string',
    default: 'style-1',
  },

  itemHoverBorderColor: {
    type: 'string',
  },
  iconColor: {
    type: 'string',
  },
  iconHoverColor: {
    type: 'string',
  },
  iconHoverBorderColor: {
    type: 'string',
  },
  counterColor: {
    type: 'string',
  },
  counterHoverColor: {
    type: 'string',
  },
  metaColor: {
    type: 'string',
  },
  metaHoverColor: {
    type: 'string',
  },
};

export default attributes;
