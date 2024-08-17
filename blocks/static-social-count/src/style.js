/**
 * WordPress dependencies
 */
import {applyFilters} from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
  generateResRangeStyle,
  generateBorderStyle,
  generateResCounterStyle,
  generateDimensionStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  generateGapStyle,
  GlobalStyleHanlder,
  generateNormalBGControlStyles,
} = window.zoloModule;

import {
  GRID_COLUMNS,
  COLUMNS_GAP,
  //item
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_PADDING,
  ITEM_SHADOW,
  ITEM_HOVER_BG,
  //icon
  ICON_BG,
  ICON_BORDER,
  ICON_BORDER_RADIUS,
  ICON_PADDING,
  ICON_SIZE,
  ICON_SPACING,
  ICON_HOVER_BG,
  COUNTER_SPACING
} from './constants';

import {COUNTER_TYPOGRAPHY, META_TYPOGRAPHY} from './constants/typoPrefixConstant';

const Style = ({props}) => {
  const {attributes, setAttributes} = props;
  const {
    preset,
    uniqueId,
    iconColor,
    iconHoverColor,
    counterColor,
    metaColor
  } = attributes;
  const {
    desktopRangeStyle: columnCountDesk,
    tabRangeStyle: columnCountTab,
    mobRangeStyle: columnCountMob,
  } = generateResCounterStyle({
    controlName: GRID_COLUMNS,
    attributes,
    noProperty: true,
    defaults: {
      deskRange: 4,
      tabRange: 2,
      mobRange: 1,
    },
  });
  const {
    gapStylesDesktop: colGapDesk,
    gapStylesTab: colGapTab,
    gapStylesMobile: colGapMob,
  } = generateGapStyle({
    controlName: COLUMNS_GAP,
    attributes,
  });
//item style
  const {
    dimensionStylesDesktop: itemPaddingDesk,
    dimensionStylesTab: itemPaddingTab,
    dimensionStylesMobile: itemPaddingMob,
  } = generateDimensionStyle({
    controlName: ITEM_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    backgroundStylesDesktop: itemBGDesk,
    backgroundStylesTab: itemBGTab,
    backgroundStylesMobile: itemBGMob,
  } = generateNormalBGControlStyles({
    controlName: ITEM_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: itemBorderDesk,
    tabBorderStyle: itemBorderTab,
    mobBorderStyle: itemBorderMob,
  } = generateBorderStyle({
    controlName: ITEM_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: itemBorderRadiusDesk,
    dimensionStylesTab: itemBorderRadiusTab,
    dimensionStylesMobile: itemBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: ITEM_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: itemBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: ITEM_SHADOW,
  });
  const {
    backgroundStylesDesktop: itemHoverBGDesk,
    backgroundStylesTab: itemHoverBGTab,
    backgroundStylesMobile: itemHoverBGMob,
  } = generateNormalBGControlStyles({
    controlName: ITEM_HOVER_BG,
    attributes,
    noMainBGImg: true,
  });
//icon
  const {
    dimensionStylesDesktop: iconPaddingDesk,
    dimensionStylesTab: iconPaddingTab,
    dimensionStylesMobile: iconPaddingMob,
  } = generateDimensionStyle({
    controlName: ICON_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    backgroundStylesDesktop: iconBGDesk,
    backgroundStylesTab: iconBGTab,
    backgroundStylesMobile: iconBGMob,
  } = generateNormalBGControlStyles({
    controlName: ICON_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: iconBorderDesk,
    tabBorderStyle: iconBorderTab,
    mobBorderStyle: iconBorderMob,
  } = generateBorderStyle({
    controlName: ICON_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: iconBorderRadiusDesk,
    dimensionStylesTab: iconBorderRadiusTab,
    dimensionStylesMobile: iconBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: ICON_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {
    desktopRangeStyle: iconSizeDesk,
    tabRangeStyle: iconSizeTab,
    mobRangeStyle: iconSizeMob,
  } = generateResRangeStyle({
    controlName: ICON_SIZE,
    property: 'width',
    attributes,
  });
  const {
    desktopRangeStyle: iconSizeHeightDesk,
    tabRangeStyle: iconSizeHeightTab,
    mobRangeStyle: iconSizeHeightMob,
  } = generateResRangeStyle({
    controlName: ICON_SIZE,
    property: 'height',
    attributes,
  });

  const {
    desktopRangeStyle: iconSpacingDesk,
    tabRangeStyle: iconSpacingTab,
    mobRangeStyle: iconSpacingMob,
  } = generateResRangeStyle({
    controlName: ICON_SPACING,
    property: 'margin-bottom',
    attributes,
  });

//counter
  const {
    typoStylesDesktop:counterTypoDesk,
    typoStylesTab:counterTypoTab,
    typoStylesMobile:counterTypoMob,
  } = generateTypographyStyles({
    prefixConstant: COUNTER_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: counterSpacingDesk,
    tabRangeStyle: counterSpacingTab,
    mobRangeStyle: counterSpacingMob,
  } = generateResRangeStyle({
    controlName: COUNTER_SPACING,
    property: 'margin-bottom',
    attributes,
  });
  //meta
  const {
    typoStylesDesktop:metaTypoDesk,
    typoStylesTab:metaTypoTab,
    typoStylesMobile:metaTypoMob,
  } = generateTypographyStyles({
    prefixConstant: META_TYPOGRAPHY,
    attributes,
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
		 .${uniqueId}.zolo-block.zolo-static-social-count-wrap{
          grid-template-columns:repeat(${columnCountDesk}, 1fr);
          ${colGapDesk}
     }

     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }
     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-item:hover{
      ${itemHoverBGDesk}
     }
     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-item:hover .zolo-icon .zolo__display-icon svg{
      ${iconHoverColor ? `fill:${iconHoverColor};` : ''}
     }
     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-icon{
      ${iconBGDesk}
      ${iconBorderDesk}
      ${iconBorderRadiusDesk}
      ${iconPaddingDesk}
      ${iconSpacingDesk}
     }
     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-icon .zolo__display-icon svg{
       ${iconSizeDesk}
       ${iconSizeHeightDesk}
       ${iconColor ? `fill:${iconColor};` : ''}
     }
      .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-count{
        ${counterTypoDesk}
        ${counterSpacingDesk}
        ${counterColor ? `color:${counterColor};` : ''}
      }
     .${uniqueId}.zolo-block.zolo-static-social-count-wrap .zolo-meta span{
      ${metaTypoDesk}
      ${metaColor ? `color:${metaColor};` : ''}
     }
  	`;
  const tabletAllStyle = `

	`;

  const mobileAllStyle = `

  	`;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zolo.staticSocialCount.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.staticSocialCount.tabletAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.staticSocialCount.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
};
export default Style;
