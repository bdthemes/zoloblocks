import { applyFilters } from '@wordpress/hooks';

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_SHADOW,
    ITEM_PADDING,
    AVATAR_HW_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_SHADOW,
    AVATAR_PADDING,
    AVATAR_MARGIN,
    META_SPACING,
    DATE_MARGIN,
} from './constants';

import { TEXT_TYPOGRAPHY, AUTHOR_TYPOGRAPHY, DATE_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateResCounterStyle,
    generateResRangeStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateGapStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId, textColor, authorColor, authorHoverColor, dateColor } = attributes;

    //grid style
    const {
        desktopRangeStyle: columnCountDesk,
        tabRangeStyle: columnCountTab,
        mobRangeStyle: columnCountMob,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 1,
            tabRange: 1,
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
    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_SHADOW,
    });

    //text style
    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopRangeStyle: metaSpacingDesk,
        tabRangeStyle: metaSpacingTab,
        mobRangeStyle: metaSpacingMob,
    } = generateResRangeStyle({
        controlName: META_SPACING,
        property: 'margin-bottom',
        attributes,
    });

    //avatar

    const {
        desktopRangeStyle: avatarHWSizeDesk,
        tabRangeStyle: avatarHWSizeTab,
        mobRangeStyle: avatarHWSizeMob,
    } = generateResRangeStyle({
        controlName: AVATAR_HW_SIZE,
        property: '--zolo-avatar-size',
        attributes,
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
    const { boxShadowStyle: avatarBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: AVATAR_SHADOW,
    });
    //author
    const {
        typoStylesDesktop: authorTypoDesk,
        typoStylesTab: authorTypoTab,
        typoStylesMobile: authorTypoMob,
    } = generateTypographyStyles({
        prefixConstant: AUTHOR_TYPOGRAPHY,
        attributes,
    });
    //date
    const {
        typoStylesDesktop: dateTypoDesk,
        typoStylesTab: dateTypoTab,
        typoStylesMobile: dateTypoMob,
    } = generateTypographyStyles({
        prefixConstant: DATE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: dateMarginDesk,
        dimensionStylesTab: dateMarginTab,
        dimensionStylesMobile: dateMarginMob,
    } = generateDimensionStyle({
        controlName: DATE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const desktopAllStyle = `
       .${uniqueId}.zolo-block.zolo-post-comments-wrap{
         grid-template-columns:repeat(${columnCountDesk}, 1fr);
         ${colGapDesk}
       }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-item{
        ${itemBGDesk}
        ${itemPaddingDesk}
        ${itemBorderDesk}
        ${itemBorderRadiusDesk}
        ${itemBoxShadow}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-text{
       ${textTypoDesk}
       ${textColor ? `color:${textColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta{
        ${metaSpacingDesk}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-avatar img{
       ${avatarPaddingDesk}
       ${avatarMarginDesk}
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
        ${avatarBoxShadow}
        ${avatarHWSizeDesk}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-author-name{
        ${authorTypoDesk}
        ${authorColor ? `color:${authorColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-author-name:hover{
        ${authorHoverColor ? `color:${authorHoverColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-date{
        ${dateTypoDesk}
        ${dateMarginDesk}
        ${dateColor ? `color:${dateColor};` : ''}
      }
  `;

    const tabletAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-comments-wrap{
         grid-template-columns:repeat(${columnCountTab}, 1fr);
         ${colGapTab}
       }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-item{
        ${itemBGTab}
        ${itemPaddingTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-text{
       ${textTypoTab}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta{
        ${metaSpacingTab}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-avatar img{
       ${avatarPaddingTab}
       ${avatarMarginTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}
      ${avatarHWSizeTab}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-author-name{
        ${authorTypoTab}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-date{
        ${dateTypoTab}
        ${dateMarginTab}
      }
  `;
    const mobileAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-comments-wrap{
         grid-template-columns:repeat(${columnCountMob}, 1fr);
         ${colGapMob}
       }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-item{
        ${itemBGMob}
        ${itemPaddingMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-text{
       ${textTypoMob}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta{
        ${metaSpacingMob}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-avatar img{
       ${avatarPaddingMob}
       ${avatarMarginMob}
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}
        ${avatarHWSizeMob}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-author-name{
        ${authorTypoMob}
      }
      .${uniqueId}.zolo-block.zolo-post-comments-wrap .zolo-meta .zolo-date{
        ${dateTypoMob}
        ${dateMarginMob}
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
