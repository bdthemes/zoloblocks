import {applyFilters} from '@wordpress/hooks';

import {
  TEXT_ALIGNMENT,
  META_ALIGNMENT,
  COLUMNS_GAP,
  GRID_COLUMNS,
  //item
  CONTENT_PADDING,
  ITEM_BG,
  ITEM_BORDER,
  ITEM_BORDER_RADIUS,
  ITEM_SHADOW,
  ITEM_PADDING,
  ITEM_HOVER_BG,
  ITEM_HOVER_SHADOW,
  //avatar
  AVATAR_MASK,
  AVATAR_BORDER,
  AVATAR_BORDER_RADIUS,
  AVATAR_SHADOW,
  AVATAR_PADDING,
  AVATAR_MARGIN,
  //name
  NAME_TEXT_SHADOW,
  //role
  ROLE_SPACING,
  //desc
  DESC_SPACING,
  //post count
  COUNT_BG,
  COUNT_BORDER,
  COUNT_BORDER_RADIUS,
  COUNT_SHADOW,
  COUNT_PADDING,
  COUNT_SPACING,
  //link
  Link_ICON_SIZE,
  LINK_SPACE,
  LINK_SPACING,
  LINK_PADDING,
  LINK_BG,
  LINK_BORDER,
  LINK_BORDER_RADIUS,
  LINK_SHADOW,
  LINK_HOVER_BG,
  LINK_HOVER_BORDER_RADIUS,
} from './constants';

import {NAME_TYPOGRAPHY, COUNT_TYPOGRAPHY,ROLE_TYPOGRAPHY,DESC_TYPOGRAPHY} from './constants/typoPrefixConstant';

const {
  generateResRangeStyle,
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateResAlignmentStyle,
  generateResCounterStyle,
  generateGapStyle,
  generateMaskStyles,
  generateTextShadowStyles
} = window.zoloModule;
function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    itemHoverBorderColor,
    nameColor,
    nameHoverColor,
    roleColor,
    descColor,
    countColor,
    linkColor,
    linkHoverColor
  } = attributes
  const {
    desktopAlignStyle: itemAlignDesk,
    tabAlignStyle: itemAlignTab,
    mobAlignStyle: itemAlignMob,
  } = generateResAlignmentStyle({
    controlName: TEXT_ALIGNMENT,
    property: 'text-align',
    attributes,
  });
  const {
    desktopAlignStyle: metaAlignDesk,
    tabAlignStyle: metaAlignTab,
    mobAlignStyle: metaAlignMob,
  } = generateResAlignmentStyle({
    controlName: META_ALIGNMENT,
    property: 'justify-content',
    attributes,
  });
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
    dimensionStylesDesktop: contentPaddingDesk,
    dimensionStylesTab: contentPaddingTab,
    dimensionStylesMobile: contentPaddingMob,
  } = generateDimensionStyle({
    controlName: CONTENT_PADDING,
    styleFor: 'padding',
    attributes,
  });
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
  //avatar
  const {
    desktopBorderStyle: avatarBorderDesk,
    tabBorderStyle: avatarBorderTab,
    mobBorderStyle: avatarBorderMob,
  } = generateBorderStyle({
    controlName: AVATAR_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: avatarBorderRadiusDesk,
    dimensionStylesTab: avatarBorderRadiusTab,
    dimensionStylesMobile: avatarBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: AVATAR_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: avatarBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: AVATAR_SHADOW,
  });
  const {
    dimensionStylesDesktop: avatarPaddingDesk,
    dimensionStylesTab: avatarPaddingTab,
    dimensionStylesMobile: avatarPaddingMob,
  } = generateDimensionStyle({
    controlName: AVATAR_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    dimensionStylesDesktop: avatarMarginDesk,
    dimensionStylesTab: avatarMarginTab,
    dimensionStylesMobile: avatarMarginMob,
  } = generateDimensionStyle({
    controlName: AVATAR_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const { maskStyle: maskStyles } = generateMaskStyles({
    attributes,
    controlName: AVATAR_MASK,
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
  const { textShadowStyle: nameTextShadowStyle } = generateTextShadowStyles({
    attributes,
    controlName: NAME_TEXT_SHADOW,
  });
  //role
  const {
    typoStylesDesktop:roleTypoDesk,
    typoStylesTab:roleTypoTab,
    typoStylesMobile:roleTypoMob,
  } = generateTypographyStyles({
    prefixConstant: ROLE_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: roleSpacingDesk,
    tabRangeStyle: roleSpacingTab,
    mobRangeStyle: roleSpacingMob,
  } = generateResRangeStyle({
    controlName:ROLE_SPACING ,
    property: 'padding-top',
    attributes,
  });
  //description
  const {
    typoStylesDesktop:descTypoDesk,
    typoStylesTab:descTypoTab,
    typoStylesMobile:descTypoMob,
  } = generateTypographyStyles({
    prefixConstant: DESC_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: descSpacingDesk,
    tabRangeStyle: descSpacingTab,
    mobRangeStyle: descSpacingMob,
  } = generateResRangeStyle({
    controlName:DESC_SPACING ,
    property: 'padding-top',
    attributes,
  });
  //count
  const {
    backgroundStylesDesktop: countBGDesk,
    backgroundStylesTab: countBGTab,
    backgroundStylesMobile: countBGMob,
  } = generateNormalBGControlStyles({
    controlName: COUNT_BG,
    attributes,
    noMainBGImg: true,
  });
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
  const {
    desktopRangeStyle:countSpacingDesk,
    tabRangeStyle:countSpacingTab,
    mobRangeStyle:countSpacingMob,
  } = generateResRangeStyle({
    controlName:COUNT_SPACING ,
    property: 'top',
    attributes,
  });
  const {
    desktopRangeStyle:countSpacingRightDesk,
    tabRangeStyle:countSpacingRightTab,
    mobRangeStyle:countSpacingRightMob,
  } = generateResRangeStyle({
    controlName:COUNT_SPACING ,
    property: 'right',
    attributes,
  });
  const {boxShadowStyle: countBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: COUNT_SHADOW,
  });
  //link
  const {
    backgroundStylesDesktop: linkBGDesk,
    backgroundStylesTab: linkBGTab,
    backgroundStylesMobile: linkBGMob,
  } = generateNormalBGControlStyles({
    controlName: LINK_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    dimensionStylesDesktop: linkPaddingDesk,
    dimensionStylesTab: linkPaddingTab,
    dimensionStylesMobile: linkPaddingMob,
  } = generateDimensionStyle({
    controlName: LINK_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopBorderStyle: linkBorderDesk,
    tabBorderStyle: linkBorderTab,
    mobBorderStyle: linkBorderMob,
  } = generateBorderStyle({
    controlName: LINK_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: linkBorderRadiusDesk,
    dimensionStylesTab: linkBorderRadiusTab,
    dimensionStylesMobile: linkBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: LINK_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {
    desktopRangeStyle:linkSpacingDesk,
    tabRangeStyle:linkSpacingTab,
    mobRangeStyle:linkSpacingMob,
  } = generateResRangeStyle({
    controlName:LINK_SPACING ,
    property: 'padding-top',
    attributes,
  });
  const {
    desktopRangeStyle:linkIconWidthDesk,
    tabRangeStyle:linkIconWidthTab,
    mobRangeStyle:linkIconWidthMob,
  } = generateResRangeStyle({
    controlName:Link_ICON_SIZE ,
    property: 'width',
    attributes,
  });
  const {
    desktopRangeStyle:linkIconHeightDesk,
    tabRangeStyle:linkIconHeightTab,
    mobRangeStyle:linkIconHeightMob,
  } = generateResRangeStyle({
    controlName:Link_ICON_SIZE ,
    property: 'height',
    attributes,
  });
  const {
    gapStylesDesktop: linkSpaceDesk,
    gapStylesTab: linkSpaceTab,
    gapStylesMobile: linkSpaceMob,
  } = generateGapStyle({
    controlName: LINK_SPACE,
    attributes,
  });
  const {boxShadowStyle: linkBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: LINK_SHADOW,
  });
  const {
    backgroundStylesDesktop: linkHoverBGDesk,
    backgroundStylesTab: linkHoverBGTab,
    backgroundStylesMobile: linkHoverBGMob,
  } = generateNormalBGControlStyles({
    controlName: LINK_HOVER_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    dimensionStylesDesktop: linkHoverBorderRadiusDesk,
    dimensionStylesTab: linkHoverBorderRadiusTab,
    dimensionStylesMobile: linkHoverBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: LINK_HOVER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const desktopAllStyle = `
        .${uniqueId}.zolo-block.zolo-author-wrap{
          grid-template-columns:repeat(${columnCountDesk}, 1fr);
          ${colGapDesk}
        }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-content{
          ${itemAlignDesk}
          ${contentPaddingDesk}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
          ${itemAlignDesk}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${metaAlignDesk}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item:hover{
       ${itemHoverBGDesk}
       ${itemHoverBoxShadow}
       ${itemHoverBorderColor ? `border-color:${itemHoverBorderColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
        ${avatarPaddingDesk}
        ${avatarMarginDesk}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image a img{
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
        ${avatarBoxShadow}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image,
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image::before {
         ${maskStyles}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-name{
        ${nameTextShadowStyle}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-name a{
        ${nameTypoDesk}
        ${nameColor ? `color:${nameColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-name a:hover {
        ${nameHoverColor ? `color:${nameHoverColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-role{
        ${roleTypoDesk}
        ${roleSpacingDesk}
        ${roleColor ? `color:${roleColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-description{
        ${descTypoDesk}
        ${descSpacingDesk}
        ${descColor ? `color:${descColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-post-count{
        ${countBGDesk}
        ${countTypoDesk}
        ${countPaddingDesk}
        ${countBorderDesk}
        ${countBorderRadiusDesk}
        ${countSpacingDesk}
        ${countSpacingRightDesk}
        ${countBoxShadow}
        ${countColor ? `color:${countColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${linkSpacingDesk}
        ${linkSpaceDesk}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a {
        ${linkBGDesk}
        ${linkPaddingDesk}
        ${linkBorderDesk}
        ${linkBorderRadiusDesk}
        ${linkBoxShadow}
        ${linkColor ? `color:${linkColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a svg {
        ${linkIconWidthDesk}
        ${linkIconHeightDesk}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a:hover{
        ${linkHoverBGDesk}
        ${linkHoverBorderRadiusDesk}
        ${linkHoverColor ? `color:${linkHoverColor};` : ''}
      }

  `;

  const tabletAllStyle = `
     .${uniqueId}.zolo-block.zolo-author-wrap{
          grid-template-columns:repeat(${columnCountTab}, 1fr);
          ${colGapTab}
        }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-content{
          ${itemAlignTab}
          ${contentPaddingTab}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
          ${itemAlignTab}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${metaAlignTab}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item{
        ${itemBGTab}
        ${itemPaddingTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item:hover{
       ${itemHoverBGTab}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
        ${avatarPaddingTab}
        ${avatarMarginTab}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image a img{
        ${avatarBorderTab}
        ${avatarBorderRadiusTab}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-name a{
        ${nameTypoTab}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-role{
        ${roleTypoTab}
        ${roleSpacingTab}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-description{
        ${descTypoTab}
        ${descSpacingTab}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-post-count{
        ${countBGTab}
        ${countTypoTab}
        ${countPaddingTab}
        ${countBorderTab}
        ${countBorderRadiusTab}
        ${countSpacingTab}
        ${countSpacingRightTab}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${linkSpacingTab}
        ${linkSpaceTab}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a {
        ${linkBGTab}
        ${linkPaddingTab}
        ${linkBorderTab}
        ${linkBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a svg {
        ${linkIconWidthTab}
        ${linkIconHeightTab}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a:hover{
        ${linkHoverBGTab}
        ${linkHoverBorderRadiusTab}
      }
  `;
  const mobileAllStyle = `
         .${uniqueId}.zolo-block.zolo-author-wrap{
          grid-template-columns:repeat(${columnCountMob}, 1fr);
          ${colGapMob}
        }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-content{
          ${itemAlignMob}
          ${contentPaddingMob}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
          ${itemAlignMob}
       }
       .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${metaAlignMob}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item{
        ${itemBGMob}
        ${itemPaddingMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-item:hover{
       ${itemHoverBGMob}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image{
        ${avatarPaddingMob}
        ${avatarMarginMob}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-image a img{
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-name a{
        ${nameTypoMob}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-role{
        ${roleTypoMob}
        ${roleSpacingMob}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-description{
        ${descTypoMob}
        ${descSpacingMob}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-post-count{
        ${countBGMob}
        ${countTypoMob}
        ${countPaddingMob}
        ${countBorderMob}
        ${countBorderRadiusMob}
        ${countSpacingMob}
        ${countSpacingRightMob}
      }

      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link{
        ${linkSpacingMob}
        ${linkSpaceMob}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a {
        ${linkBGMob}
        ${linkPaddingMob}
        ${linkBorderMob}
        ${linkBorderRadiusMob}
      }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a svg {
        ${linkIconWidthMob}
        ${linkIconHeightMob}
       }
      .${uniqueId}.zolo-block.zolo-author-wrap .zolo-link a:hover{
        ${linkHoverBGMob}
        ${linkHoverBorderRadiusMob}
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
