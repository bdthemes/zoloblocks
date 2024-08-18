import {applyFilters} from '@wordpress/hooks';

import {
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_SHADOW,
  ITEM_PADDING,
  COLUMNS_GAP,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
  COUNT_BORDER,
  COUNT_BORDER_RADIUS,
  COUNT_SHADOW,
  COUNT_PADDING,
} from './constants';

import {NAME_TYPOGRAPHY, COUNT_TYPOGRAPHY} from './constants/typoPrefixConstant';

const {
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateGapStyle,
} = window.zoloModule;

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    itemHoverOpacity,
    nameColor,
    nameHoverColor,
    countColor,
    countHoverColor,
    countBgColor,
    countBgHoverColor,
  } = attributes

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
  const {boxShadowStyle: itemHoverBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: ITEM_HOVER_SHADOW,
  });
  //name style
  const {
    typoStylesDesktop: nameTypoDesk,
    typoStylesTab: nameTypoTab,
    typoStylesMobile: nameTypoMob,
  } = generateTypographyStyles({
    prefixConstant: NAME_TYPOGRAPHY,
    attributes,
  });
  //count
  const {
    typoStylesDesktop: countTypoDesk,
    typoStylesTab: countTypoTab,
    typoStylesMobile: countTypoMob,
  } = generateTypographyStyles({
    prefixConstant: COUNT_TYPOGRAPHY,
    attributes,
  });
  const {
    dimensionStylesDesktop: countPaddingDesk,
    dimensionStylesTab: countPaddingTab,
    dimensionStylesMobile: countPaddingMob,
  } = generateDimensionStyle({
    controlName: COUNT_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopBorderStyle: countBorderDesk,
    tabBorderStyle: countBorderTab,
    mobBorderStyle: countBorderMob,
  } = generateBorderStyle({
    controlName: COUNT_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: countBorderRadiusDesk,
    dimensionStylesTab: countBorderRadiusTab,
    dimensionStylesMobile: countBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: COUNT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: countBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: COUNT_SHADOW,
  });
  const desktopAllStyle = `
        .${uniqueId}.zolo-block.zolo-tag-cloud-wrap{
          ${colGapDesk}
        }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item:hover{
       ${itemHoverBGDesk}
       ${itemHoverBoxShadow}
       ${itemHoverOpacity ? `opacity:${itemHoverOpacity};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item:hover .zolo-name {
        ${nameHoverColor ? `color:${nameHoverColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item:hover .zolo-count{
        ${countHoverColor ? `color:${countHoverColor};` : ''}
        ${countBgHoverColor ? `background-color:${countBgHoverColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-name{
        ${nameTypoDesk}
        ${nameColor ? `color:${nameColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-count{
        ${countTypoDesk}
        ${countPaddingDesk}
        ${countBorderDesk}
        ${countBorderRadiusDesk}
        ${countBoxShadow}
        ${countColor ? `color:${countColor};` : ''}
        ${countBgColor ? `background-color:${countBgColor};` : ''}
      }


  `;

  const tabletAllStyle = `
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap{
        ${colGapTab}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item{
        ${itemBGTab}
        ${itemPaddingTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-name{
        ${nameTypoTab}
      }

      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-count{
        ${countTypoTab}
        ${countPaddingTab}
        ${countBorderTab}
        ${countBorderRadiusTab}
      }

  `;
  const mobileAllStyle = `
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap{
        ${colGapMob}
      }
      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-item{
        ${itemBGMob}
        ${itemPaddingMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-name{
        ${nameTypoMob}
      }

       .${uniqueId}.zolo-block.zolo-tag-cloud-wrap .zolo-count{
        ${countTypoMob}
        ${countPaddingMob}
        ${countBorderMob}
        ${countBorderRadiusMob}
      }
  `;
  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zolo.tagCloud.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.tagCloud.tabletAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.tagCloud.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
