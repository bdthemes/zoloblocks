/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateNormalBGAttributes,
    generateResCounterAttributies,
    generateGapAttributes,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    GRID_GAP,
    CONTENT_BG,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    PHOTO_SIZE,
    TEAM_PHOTO_BORDER,
    TEAM_PHOTO_BORDER_RADIUS,
    TEAM_PHOTO_BOX_SHADOW,
    TEAM_PHOTO_MARGIN,
    TEAM_PHOTO_PADDING,
    TEAM_NAME_MARGIN,
    TEAM_DESIGNATION_MARGIN,
    TEAM_SHORT_BIO_MARGIN,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    TEAM_MEMBER_CONTAINER_PADDING,
    TEAM_MEMBER_CONTAINER_MARGIN,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    ITEM_OVERLAY,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

const attributes = {
  // global Attributes
  globalConfig: {
    type: "object",
    default: {
      margin: {
        prefix: "mainMargin",
      },
      padding: {
        prefix: "mainPadding",
      },
      background: {
        prefix: "mainBg",
      },
      border: {
        prefix: "mainBorder",
      },
      borderRadius: {
        prefix: "mainBorderRadius",
      },
      boxShadow: {
        prefix: "mainBoxShadow",
      },
      responsiveControls: true,
    },
  },
  // block attributes
  preset: {
    type: "string",
    default: "style-1",
  },
  addDetailPageLink: {
    type: "boolean",
    default: true,
  },
  showDesignation: {
    type: "boolean",
    default: true,
  },
  showShortBio: {
    type: "boolean",
    default: true,
  },
  showSocialProfiles: {
    type: "boolean",
    default: true,
  },
  ...generateResCounterAttributies(GRID_COLUMNS, {
    noUnits: true,
    defaults: {
      deskRange: 3,
      tabRange: 2,
      mobRange: 1,
    },
  }),
  ...generateGapAttributes(GRID_GAP, {
    defaultRange: 30,
    defaultUnit: "px",
  }),
  // item
  ...generateNormalBGAttributes(ITEM_BG),
  ...generateBorderAttributies(ITEM_BORDER),
  ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
  ...generateDimensionAttributes(ITEM_PADDING),
  ...generateDimensionAttributes(ITEM_MARGIN),
  ...generateBoxShadowAttributies(ITEM_BOX_SHADOW),
  ...generateNormalBGAttributes(ITEM_OVERLAY),

  // global settings for child blocks
  ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_PADDING),
  ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_MARGIN),
  ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
  ...generateNormalBGAttributes(CONTENT_BG),
  ...generateBorderAttributies(CONTENT_BORDER),
  ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
  ...generateDimensionAttributes(CONTENT_PADDING),
  ...generateDimensionAttributes(CONTENT_MARGIN),
  ...generateBoxShadowAttributies(CONTENT_BOX_SHADOW),
  ...generateNormalBGAttributes(PHOTO_BG),
  ...generateResRangeAttributies(PHOTO_SIZE),
  ...generateBorderAttributies(TEAM_PHOTO_BORDER),
  ...generateDimensionAttributes(TEAM_PHOTO_BORDER_RADIUS),
  ...generateDimensionAttributes(TEAM_PHOTO_MARGIN),
  ...generateDimensionAttributes(TEAM_PHOTO_PADDING),
  ...generateBoxShadowAttributies(TEAM_PHOTO_BOX_SHADOW),
  ...generateDimensionAttributes(TEAM_DESIGNATION_MARGIN),
  ...generateDimensionAttributes(TEAM_NAME_MARGIN),

  ...generateDimensionAttributes(ICONS_CONTAINER_PADDING),
  ...generateDimensionAttributes(ICONS_CONTAINER_MARGIN),
  ...generateNormalBGAttributes(ICONS_BG),
  ...generateNormalBGAttributes(ICONS_HOVER_BG),
  ...generateBorderAttributies(ICONS_BORDER),
  ...generateDimensionAttributes(ICONS_BORDER_RADIUS),
  ...generateDimensionAttributes(ICONS_PADDING),
  ...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
  ...generateResRangeAttributies(ICONS_SIZE, {}),
  ...generateResRangeAttributies(ICONS_SPACING, {}),
  ...generateBoxShadowAttributies(ICONS_BOX_SHADOW),
  ...generateBoxShadowAttributies(ICONS_HOVER_BOX_SHADOW),

  ...generateNormalBGAttributes(DETAIL_PAGE_LINK_BG),
  ...generateNormalBGAttributes(DETAIL_PAGE_LINK_HOVER_BG),
  ...generateResRangeAttributies(DPL_ICON_SIZE, {}),
  ...generateBorderAttributies(DPL_BORDER),
  ...generateDimensionAttributes(DPL_BORDER_RADIUS),
  ...generateDimensionAttributes(DPL_PADDING),
  ...generateDimensionAttributes(DPL_MARGIN),
  // typography
  ...generateTypographyAttributes(Object.values(typographyObjs)),
  nameColor: {
    type: "string",
  },
  nameLinkColor: {
    type: "string",
  },
  nameHoverColor: {
    type: "string",
  },
  designationColor: {
    type: "string",
  },
  shortBioColor: {
    type: "string",
  },
  // social icons
  separatorColor: {
    type: "string",
  },
  iconColor: {
    type: "string",
  },
  iconHoverColor: {
    type: "string",
  },
  iconHoverBorderColor: {
    type: "string",
  },
  detailPageIconColor: {
    type: "string",
  },
  detailPageIconHoverColor: {
    type: "string",
  },
};

export default attributes;
