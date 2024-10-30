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
  TITLE_ALIGN,
  TITLE_PADDING,
  TITLE_MARGIN,
  TITLE_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_SHADOW,
  TITLE_HOVER_BG,
  TITLE_HOVER_BORDER,
  TITLE_HOVER_BRADIUS,
  TITLE_HOVER_SHADOW,
  TITLE_TEXT_SHADOW,
  TITLE_TEXT_STROKE,
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
  tableOfContent: {
    type: 'string',
    default: ''
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
  listStyle:{
    type:'string',
    default:'ol'
  },
  ...generateTypographyAttributes(Object.values(typographyObjs)),

  ...generateResAlignmentAttributies(TITLE_ALIGN),
  ...generateDimensionAttributes(TITLE_PADDING),
  ...generateDimensionAttributes(TITLE_MARGIN),
  ...generateNormalBGAttributes(TITLE_BG),
  ...generateBorderAttributies(TITLE_BORDER),
  ...generateDimensionAttributes(TITLE_BORDER_RADIUS),
  ...generateBoxShadowAttributies(TITLE_SHADOW),
  ...generateNormalBGAttributes(TITLE_HOVER_BG),
  ...generateBorderAttributies(TITLE_HOVER_BORDER),
  ...generateDimensionAttributes(TITLE_HOVER_BRADIUS),
  ...generateBoxShadowAttributies(TITLE_HOVER_SHADOW),
  ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
  ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),
};

export default attributes;
