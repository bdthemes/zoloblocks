import {
  //Image
  THUMBNAIL_HEIGHT,
  THUMBNAIL_BORDER,
  THUMBNAIL_BRADIUS,
  THUMBNAIL_BOX_SHADOW,
  //title
  TITLE_MARGIN,
  //submit btn
  BTN_PADDING,
  BTN_MARGIN,
  BTN_BORDER,
  BTN_BORDER_RADIUS
} from './constants';

/**
 * Internal dependencies
 */
const {
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateResRangeAttributies,
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
  showImage: {
    type: 'boolean',
    default: true
  },
  showTitle: {
    type: 'boolean',
    default: true
  },
  showBtn: {
    type: 'boolean',
    default: true
  },
  showCategoryBased: {
    type: 'boolean',
    default: false
  },
  selectedTaxonomy: {
    type: 'string'
  },
  previousPost: {
    type: 'string',
    default: 'Previous Post'
  },
  previousPostIcon: {
    type: 'string',
  },
  nextPost: {
    type: 'string',
    default: 'Next Post'
  },
  nextPostIcon: {
    type: 'string',
  },
  thumbnailSize: {
    type: 'string',
  },
  ...generateTypographyAttributes(Object.values(typographyObjs)),
  //thumbnail
  ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
  ...generateBorderAttributies(THUMBNAIL_BORDER),
  ...generateDimensionAttributes(THUMBNAIL_BRADIUS),
  ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),
  //title
  ...generateDimensionAttributes(TITLE_MARGIN),
  //button
  ...generateDimensionAttributes(BTN_PADDING),
  ...generateDimensionAttributes(BTN_MARGIN),
  ...generateBorderAttributies(BTN_BORDER),
  ...generateDimensionAttributes(BTN_BORDER_RADIUS),
  //title
  titleColor: {
    type: 'string'
  },
  titleHoverColor: {
    type: 'string'
  },
  //prev/next btn
  btnColor: {
    type: 'string'
  },
  btnBgColor: {
    type: 'string'
  },
  btnHoverColor: {
    type: 'string'
  },
  btnBgHoverColor: {
    type: 'string'
  }
};
export default attributes;
