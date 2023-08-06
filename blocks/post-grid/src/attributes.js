/**
 * Internal dependencies
 */
const {
  generateResAlignmentAttributies,
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateNormalBGAttributes
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
  CONTAINER_MARGIN,
  CONTAINER_PADDING,
} from './constants';

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

  showPagination: {
    type: 'boolean',
    default: false
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
  thumbnailSize: {
    type: 'boolean',
  },
  ...generateResRangeAttributies(THUMBNAIL_HEIGHT, {
    defaultRange: 200,
  }),
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
    default: true,
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
    default: true,
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
  ...generateDimensionAttributes(COLUMN_PADDING),
  ...generateNormalBGAttributes(COLUMN_BG),
  ...generateBorderAttributies(COLUMN_BORDER),
  ...generateDimensionAttributes(COLUMN_BORDER_RADIUS),
  ...generateBoxShadowAttributies(COLUMN_SHADOW),

  ...generateDimensionAttributes(CONTAINER_MARGIN),
  ...generateDimensionAttributes(CONTAINER_PADDING),

};

export default attributes;
