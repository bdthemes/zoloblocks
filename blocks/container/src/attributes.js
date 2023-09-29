/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateResAlignmentAttributies,
} = window.zoloModule;

import {
  CONTAINER_WIDTH,
  CONTAINER_BG,
  CONTAINER_BORDER,
  CONTAINER_BORDER_RADIUS,
  CONTAINER_BOX_SHADOW,
  CONTAINER_PADDING,
  CONTAINER_MARGIN,
  ROW_GAP,
  COLUMN_GAP,
  CONTENT_WIDTH,
  MIN_HEIGHT,
  FLEX_DIRECTION,
  FLEX_WRAP,
  FLEX_JUSTIFY,
  FLEX_ALIGN,
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
  zoloStyles: {
    type: 'object',
  },
  variationStatus: {
    type: 'boolean',
    default: false,
  },
  isBlockRootParent: {
    type: 'boolean',
    default: false,
  },
  templates: {
    type: 'array',
    default: [],
  },
  containerWidthType: {
    type: 'string',
    default: 'full_width',
  },
  contentWidthType: {
    type: 'string',
    default: 'boxed',
  },
  // New Generators
  ...generateResRangeAttributies(CONTAINER_WIDTH, {
    defaultRange: 100,
    defaultUnit: '%'
  }),
  ...generateResRangeAttributies(CONTENT_WIDTH, {}),
  ...generateResRangeAttributies(MIN_HEIGHT, {}),

  // flex
  ...generateResAlignmentAttributies(FLEX_DIRECTION, {
    defaultAlign: 'row',
  }),
  ...generateResAlignmentAttributies(FLEX_ALIGN, {
    defaultAlign: 'flex-start',
  }),
  ...generateResAlignmentAttributies(FLEX_JUSTIFY, {
    defaultAlign: 'flex-start',
  }),
  ...generateResAlignmentAttributies(FLEX_WRAP, {
    defaultAlign: 'wrap',
  }),

  // container
  ...generateNormalBGAttributes(CONTAINER_BG),
  ...generateBorderAttributies(CONTAINER_BORDER),
  ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
  ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
  ...generateDimensionAttributes(CONTAINER_PADDING),
  ...generateDimensionAttributes(CONTAINER_MARGIN),

  // row & column
  ...generateResRangeAttributies(ROW_GAP, {}),
  ...generateResRangeAttributies(COLUMN_GAP, {}),
};

export default attributes;
