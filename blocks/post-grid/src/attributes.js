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
} = window.zoloModule;

import {
  CONTAINER_MARGIN,
  CONTAINER_PADDING
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

  ...generateDimensionAttributes(CONTAINER_MARGIN),
  ...generateDimensionAttributes(CONTAINER_PADDING),
  preset: {
    type: 'string',
    default: 'style-1',
  },

};

export default attributes;
