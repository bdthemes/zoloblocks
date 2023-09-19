/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateBackgroundAttributes,
  generateTypographyAttributes
} = window.zoloModule;

import {
  GRID_COLUMNS,
  COLUMNS_GAP,
  THUMBNAIL_HEIGHT,
  COLUMN_PADDING,
  COLUMN_BG,
  COLUMN_BORDER,
  COLUMN_BORDER_RADIUS,
  COLUMN_SHADOW,
  THUMBNAIL_PADDING,
  THUMBNAIL_MARGIN,
  THUMBNAIL_BG,
  THUMBNAIL_BORDER,
  THUMBNAIL_BORDER_RADIUS,
  THUMBNAIL_BOX_SHADOW,
  TITLE_MARGIN,
  EXCERPT_MARGIN,
  META_MARGIN,
  CAT_GAP,
  CAT_BORDER,
  CAT_BORDER_RADIUS,
  CAT_MARGIN,
  CAT_PADDING,
  READMORE_GAP,
  READMORE_BORDER,
  READMORE_BORDER_RADIUS,
  READMORE_MARGIN,
  READMORE_PADDING,
  AVATAR_SIZE,
  AVATAR_BORDER,
  AVATAR_BORDER_RADIUS,
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_SHADOW,

} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
  //Common Attributes
  uniqueId: {
    type: 'string',
  },

  resDevice: {
    type: 'string',
    default: 'Desktop',
  },

  blockStyle: {
    type: 'object',
  },

  preset: {
    type: 'string',
    default: 'style-1',
  },

  showExcerpt: {
    type: 'boolean',
    default: false
  },

  postTaxonomies: {
    type: 'object',
    default: {}
  },

  postQuery: {
    type: 'object'
  },

  //layout
  preset: {
    type: 'string',
    default: 'style-1',
  },
  ...generateResRangeAttributies(GRID_COLUMNS, {
    defaultRange: 3,
    noUnits: true,
  }),
  ...generateResRangeAttributies(COLUMNS_GAP, {
    defaultRange: 30,
  }),
  showThumbnail: {
    type: 'boolean',
    default: true,
  },
  ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
  showTitle: {
    type: 'boolean',
    default: true,
  },
  titleTag: {
    type: 'string',
    default: 'h2',
  },
  titleWords: {
    type: 'number',
  },
  showExcerpt: {
    type: 'boolean',
    default: false,
  },
  excerptWords: {
    type: 'number',
    default: 15
  },
  excerptindicator: {
    type: 'string',
    default: '...',
  },
  showReadMore: {
    type: 'boolean',
    default: false,
  },
  readMoreBtnText: {
    type: 'string',
    default: 'Button Text',
  },
  showCategory: {
    type: 'boolean',
    default: true,
  },
  showAuthor: {
    type: 'boolean',
    default: true,
  },
  showMeta: {
    type: 'boolean',
    default: true,
  },
  showPagination: {
    type: 'boolean',
    default: false,
  },

  ...generateDimensionAttributes(COLUMN_PADDING),
  ...generateNormalBGAttributes(COLUMN_BG),
  ...generateBorderAttributies(COLUMN_BORDER),
  ...generateDimensionAttributes(COLUMN_BORDER_RADIUS),
  ...generateBoxShadowAttributies(COLUMN_SHADOW),

  ...generateDimensionAttributes(THUMBNAIL_MARGIN),
  ...generateDimensionAttributes(THUMBNAIL_PADDING),
  ...generateBorderAttributies(THUMBNAIL_BORDER),
  ...generateDimensionAttributes(THUMBNAIL_BORDER_RADIUS),
  ...generateNormalBGAttributes(THUMBNAIL_BG),
  ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),

  ...generateDimensionAttributes(TITLE_MARGIN),
  ...generateDimensionAttributes(EXCERPT_MARGIN),
  ...generateDimensionAttributes(META_MARGIN),

  ...generateResRangeAttributies(CAT_GAP),
  ...generateBorderAttributies(CAT_BORDER),
  ...generateDimensionAttributes(CAT_BORDER_RADIUS),
  ...generateDimensionAttributes(CAT_MARGIN),
  ...generateDimensionAttributes(CAT_PADDING),

  ...generateResRangeAttributies(READMORE_GAP),
  ...generateBorderAttributies(READMORE_BORDER),
  ...generateDimensionAttributes(READMORE_BORDER_RADIUS),
  ...generateDimensionAttributes(READMORE_MARGIN),
  ...generateDimensionAttributes(READMORE_PADDING),

  ...generateResRangeAttributies(AVATAR_SIZE),
  ...generateBorderAttributies(AVATAR_BORDER),
  ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),


  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //advanced tab attributes
  ...generateDimensionAttributes(WRAPPER_MARGIN),
  ...generateDimensionAttributes(WRAPPER_PADDING),
  ...generateBackgroundAttributes(WRAPPER_BG, {
    defaultBgGradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
  }),
  ...generateBorderAttributies(WRAPPER_BORDER),
  ...generateBoxShadowAttributies(WRAPPER_SHADOW),
};

export default attributes;
