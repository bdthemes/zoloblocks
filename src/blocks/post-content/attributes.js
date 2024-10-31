import {__} from "@wordpress/i18n";

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
  generateResRangeAttributies
} = window.zoloModule;

import {
  CONTENT_ALIGN,
  CONTENT_PADDING,
  CONTENT_BG,
  CONTENT_BORDER,
  CONTENT_BORDER_RADIUS,
  CONTENT_SHADOW,
  CONTENT_HOVER_BG,
  CONTENT_HOVER_BORDER,
  CONTENT_HOVER_BRADIUS,
  CONTENT_HOVER_SHADOW,
  CONTENT_TEXT_SHADOW,
  CONTENT_TEXT_STROKE,
  //image
  THUMBNAIL_WIDTH,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_BORDER,
  THUMBNAIL_BRADIUS,
  THUMBNAIL_BOX_SHADOW,
  THUMBNAIL_HOVER_SHADOW,
  //heading
  HEADING_TEXT_SHADOW,
  HEADING_TEXT_STROKE
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';
import {TITLE_TEXT_SHADOW, TITLE_TEXT_STROKE} from "@/blocks/advanced-heading/constants";

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
  styleTags: {
    type: 'array',
    default: [
      {id: 1, type: 'image'},
      {
        id: 2, type: 'heading', hTags: [
          {label: __('H1', 'zoloblocks'), value: 'h1'},
          {label: __('H2', 'zoloblocks'), value: 'h2'},
          {label: __('H3', 'zoloblocks'), value: 'h3'},
          {label: __('H4', 'zoloblocks'), value: 'h4'},
          {label: __('H5', 'zoloblocks'), value: 'h5'},
          {label: __('H6', 'zoloblocks'), value: 'h6'},
        ]
      },
    ]
  },
  inheritThemeLayout: {
    type: 'boolean',
    default: false,
  },
  headingTags: {
    type: 'array',
    default: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ]
  },
  contentColor: {
    type: 'string',
  },
  contentHoverColor: {
    type: 'string',
  },
  thumbnailBorderHColor: {
    type: 'string',
  },
  headingHoverColor: {
    type: 'string',
  },
  headingColor: {
    type: 'string',
  },
  linkHoverColor: {
    type: 'string',
  },
  linkColor: {
    type: 'string',
  },
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  ...generateResAlignmentAttributies(CONTENT_ALIGN),
  ...generateDimensionAttributes(CONTENT_PADDING),
  ...generateNormalBGAttributes(CONTENT_BG),
  ...generateBorderAttributies(CONTENT_BORDER),
  ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
  ...generateBoxShadowAttributies(CONTENT_SHADOW),
  ...generateNormalBGAttributes(CONTENT_HOVER_BG),
  ...generateBorderAttributies(CONTENT_HOVER_BORDER),
  ...generateDimensionAttributes(CONTENT_HOVER_BRADIUS),
  ...generateBoxShadowAttributies(CONTENT_HOVER_SHADOW),
  ...generateTextShadowAttributies(CONTENT_TEXT_SHADOW),
  ...generateTextStrokeAttributies(CONTENT_TEXT_STROKE),
  //image
  ...generateResRangeAttributies(THUMBNAIL_WIDTH),
  ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
  ...generateBorderAttributies(THUMBNAIL_BORDER),
  ...generateDimensionAttributes(THUMBNAIL_BRADIUS),
  ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),
  ...generateBoxShadowAttributies(THUMBNAIL_HOVER_SHADOW),
  //heading
  ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
  ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),
};

export default attributes;
