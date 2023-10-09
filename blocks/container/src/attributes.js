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
  blockStyle: {
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
    default: 'alignfull',
  },
  contentWidthType: {
    type: 'string',
    default: 'alignwide',
  },
  // New Generators
  ...generateResRangeAttributies(CONTAINER_WIDTH, {
    defaultRange: 100,
    defaultUnit: '%'
  }),
  ...generateResRangeAttributies(CONTENT_WIDTH, {
    defaultRange: 1200,
    defaultUnit: 'px'
  }),
  ...generateResRangeAttributies(MIN_HEIGHT, {}),

  // flex
  ...generateResAlignmentAttributies(FLEX_DIRECTION, {
    defaultAlign: 'row',
  }),
  ...generateResAlignmentAttributies(FLEX_ALIGN, {
    defaultAlign: 'center',
  }),
  ...generateResAlignmentAttributies(FLEX_JUSTIFY, {
    defaultAlign: 'center',
  }),
  ...generateResAlignmentAttributies(FLEX_WRAP, {
    defaultAlign: 'nowrap',
  }),

  // container
  ...generateNormalBGAttributes(CONTAINER_BG),
  ...generateBorderAttributies(CONTAINER_BORDER),
  ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
  ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
  ...generateDimensionAttributes(CONTAINER_PADDING, {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }),
  ...generateDimensionAttributes(CONTAINER_MARGIN),

  // row & column
  ...generateResRangeAttributies(ROW_GAP, {
    defaultRange: 20,
    defaultUnit: 'px'
  }),
  ...generateResRangeAttributies(COLUMN_GAP, {
    defaultRange: 20,
    defaultUnit: 'px'
  }),
};

export default attributes;
