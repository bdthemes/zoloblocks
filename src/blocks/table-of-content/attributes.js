import {__} from '@wordpress/i18n';

/**
 * Internal dependencies
 */
const {
  generateTextShadowAttributies,
  generateTextStrokeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateTypographyAttributes,
  generateResAlignmentAttributies,
  generateResRangeAttributies,
} = window.zoloModule;

import {
  //box
  BOX_PADDING,
  BOX_SEPARATOR_WIDTH,
  BOX_MIN_HEIGHT,
  BOX_MAX_WIDTH,
  BOX_BORDER,
  BOX_BORDER_RADIUS,
  BOX_SHADOW,
  //header
  HEADER_BG,
  HEADER_ICON_SIZE
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

  // block attributes
  showHeading: {
    type: 'boolean',
    default: true
  },
  showCollapsible: {
    type: 'boolean',
    default: false
  },
  isCollapsed: {
    type: 'boolean',
    default: true
  },
  showSticky: {
    type: 'boolean',
    default: false
  },
  stickyPosition: {
    type: 'string',
    default: 'left'
  },
  headingText: {
    type: 'string',
    default: 'Table of Contents'
  },
  headers: {
    type: "array",
    default: [],
  },
  headingTags: {
    type: 'array',
    default: [
      {label: __('H1', 'zoloblocks'), value: 'h1'},
      {label: __('H2', 'zoloblocks'), value: 'h2'},
      {label: __('H3', 'zoloblocks'), value: 'h3'},
      {label: __('H4', 'zoloblocks'), value: 'h4'},
      {label: __('H5', 'zoloblocks'), value: 'h5'},
      {label: __('H6', 'zoloblocks'), value: 'h6'},
    ]
  },
  allowedHeading: {
    type: "object",
    default: {
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      h6: true,
    },
  },
  listStyle: {
    type: 'string',
    default: 'ol'
  },
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //box
  ...generateDimensionAttributes(BOX_PADDING),
  ...generateResRangeAttributies(BOX_SEPARATOR_WIDTH),
  ...generateResRangeAttributies(BOX_MIN_HEIGHT),
  ...generateResRangeAttributies(BOX_MAX_WIDTH),
  ...generateBorderAttributies(BOX_BORDER),
  ...generateDimensionAttributes(BOX_BORDER_RADIUS),
  ...generateBoxShadowAttributies(BOX_SHADOW),
  //header

  ...generateNormalBGAttributes(HEADER_BG),
  ...generateResRangeAttributies(HEADER_ICON_SIZE),
  boxBgColor: {
    type: 'string'
  },
  boxSeparatorColor: {
    type: 'string'
  },
  headerColor: {
    type: 'string'
  },
  headerIconColor: {
    type: 'string'
  },
};

export default attributes;
