/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateNormalBGAttributes,
  generateTypographyAttributes,
  generateResAlignmentAttributies,
  generateGapAttributes,
  generateTextShadowAttributies
} = window.zoloModule;

import {
  //timeline
  LINE_WIDTH,
  NUMBER_BG,
  NUMBER_HOVER_BG,
  NUMBER_BORDER_RADIUS,
  START_END_BG,
  START_END_BORDER_RADIUS,
  //items
  ITEM_GAP,
  ITEM_OFFSET,
  ITEM_PADDING,
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_SHADOW,
  //thumbnail
  THUMBNAIL_BORDER,
  THUMBNAIL_BORDER_RADIUS,
  THUMBNAIL_SPACING,
  //title
  TITLE_SPACING,
  TITLE_TEXT_SHADOW,
  //excerpt
  EXCERPT_MARGIN,
  DATE_SPACING,
  //pagination
  PAG_BORDER,
  PAG_BORDER_RADIUS,
  PAG_MARGIN,
  PAG_ALIGN,
  PAG_PADDING,
  META_SPACE,

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
  preset: {
    type: 'string',
    default: 'style-1',
  },
  showStartEnd: {
    type: 'boolean',
    default: true,
  },
  showExcerpt: {
    type: 'boolean',
    default: true,
  },
  showThumbnail: {
    type: 'boolean',
    default: true,
  },
  showTitle: {
    type: 'boolean',
    default: true,
  },
  showCategory: {
    type: 'boolean',
    default: true,
  },
  showMeta: {
    type: 'boolean',
    default: true,
  },
  metaSeparator:{
    type: 'string',
    default: '|',
  },
  showPagination: {
    type: 'boolean',
    default: false,
  },
  showReadingTime: {
    type: 'boolean',
    default: false,
  },
  showComment:{
    type:'boolean',
    default:true,
  },
  showDate: {
    type: 'boolean',
    default: true
  },
  postQuery: {
    type: 'object',
  },
  //timeline
  ...generateResRangeAttributies(LINE_WIDTH),
  ...generateNormalBGAttributes(NUMBER_BG),
  ...generateNormalBGAttributes(NUMBER_HOVER_BG),
  ...generateDimensionAttributes(NUMBER_BORDER_RADIUS),
  ...generateNormalBGAttributes(START_END_BG),
  ...generateDimensionAttributes(START_END_BORDER_RADIUS),
//items
  ...generateGapAttributes(ITEM_GAP, {
    defaultUnit: 'px',
  }),
  ...generateResRangeAttributies(ITEM_OFFSET),
  ...generateDimensionAttributes(ITEM_PADDING),
  ...generateNormalBGAttributes(ITEM_BG),
  ...generateBorderAttributies(ITEM_BORDER),
  ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
  ...generateBoxShadowAttributies(ITEM_SHADOW),
//thumbnail
  ...generateBorderAttributies(THUMBNAIL_BORDER),
  ...generateDimensionAttributes(THUMBNAIL_BORDER_RADIUS),
  ...generateResRangeAttributies(THUMBNAIL_SPACING),
//title
  ...generateResRangeAttributies(TITLE_SPACING),
  ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
  //excerpt
  ...generateDimensionAttributes(EXCERPT_MARGIN),
  ...generateResRangeAttributies(DATE_SPACING),
  // pagination
  ...generateBorderAttributies(PAG_BORDER),
  ...generateDimensionAttributes(PAG_BORDER_RADIUS),
  ...generateDimensionAttributes(PAG_MARGIN),
  ...generateDimensionAttributes(PAG_PADDING),
  ...generateResAlignmentAttributies(PAG_ALIGN),

  // meta
  ...generateResRangeAttributies(META_SPACE),

  ...generateTypographyAttributes(Object.values(typographyObjs)),

  //timeline
  lineColor: {
    type: 'string',
  },
  lineStyle: {
    type: 'string',
    default: 'dashed'
  },
  numberColor: {
    type: 'string',
  },
  numberHoverColor: {
    type: 'string',
  },
  numberHoverBColor: {
    type: 'string',
  },
  startEndColor: {
    type: 'string',
  },
  //title
  titleColor: {
    type: 'string',
  },
  titleHoverColor: {
    type: 'string',
  },
  titleTag: {
    type: 'string',
    default: 'h2',
  },
  titleWords: {
    type: 'number',
  },
  //excerpts
  excerptWords: {
    type: 'number',
    default: 15,
  },
  excerptindicator: {
    type: 'string',
    default: '...',
  },
  excerptColor: {
    type: 'string',
  },
  dateColor: {
    type: 'string',
  },
  metaColor: {
    type: 'string',
  },

  // pagination
  pagColor: {
    type: 'string',
  },
  pagBgColor: {
    type: 'string',
  },
  apagColor: {
    type: 'string',
  },
  apagBgColor: {
    type: 'string',
  },
  pagSeparatorColor: {
    type: 'string',
  },
};

export default attributes;
