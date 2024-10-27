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
  inheritThemeLayout: {
    type: 'boolean',
    default: false,
  },
  contentColor: {
    type: 'string',
  },
  contentHoverColor: {
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
};

export default attributes;
