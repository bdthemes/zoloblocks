import { applyFilters } from '@wordpress/hooks';

import {
    ITEM_HEIGHT,
    ITEM_TEXT_ALIGN,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_SHADOW,
    ITEM_PADDING,
    COLUMNS_GAP,
    GRID_COLUMNS,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    TEXT_SPACING,
    COUNT_BG,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    COUNT_PADDING,
    VIEW_BTN_BORDER,
    VIEW_BTN_BORDER_RADIUS,
    VIEW_BTN_SHADOW,
    VIEW_BTN_PADDING,
    THUMBNAIL_OVERLAY_BG,
    CAT_NAME_BG,
    CAT_NAME_PADDING,
    CAT_NAME_BORDER,
    CAT_NAME_SHADOW,
    CAT_NAME_BORDER_RADIUS,
    CAT_NAME_HOVER_BG,
    CAT_NAME_HOVER_SHADOW,
} from './constants';

import { NAME_TYPOGRAPHY, TEXT_TYPOGRAPHY, COUNT_TYPOGRAPHY, VIEW_BTN_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateDimensionStyle,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateResCounterStyle,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateGapStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;

    const {
        preset,
        uniqueId,
        itemHoverOpacity,
        nameColor,
        nameHoverColor,
        textColor,
        textHoverColor,
        countColor,
        countHoverColor,
        viewBtnColor,
        viewBtnHoverColor,
        viewBtnBgColor,
        viewBtnBgHoverColor,
        viewBtnIconColor,
        viewBtnIconHoverColor,
        itemBorderHoverColor,
        viewBtnHoverBorderColor,
        countHoverBColor,
        countHoverBgColor,
        catNameHoverBColor,
    } = attributes;
    const {
        desktopRangeStyle: itemHeightDesk,
        tabRangeStyle: itemHeightTab,
        mobRangeStyle: itemHeightMob,
    } = generateResRangeStyle({
        controlName: ITEM_HEIGHT,
        property: 'min-height',
        attributes,
    });
    const {
        desktopAlignStyle: itemAlignDesk,
        tabAlignStyle: itemAlignTab,
        mobAlignStyle: itemAlignMob,
    } = generateResAlignmentStyle({
        controlName: ITEM_TEXT_ALIGN,
        property: 'text-align',
        attributes,
    });
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
            deskRange: 3,
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
    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
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
    const { boxShadowStyle: itemHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_HOVER_SHADOW,
    });
    // thumbnail
    const {
        backgroundStylesDesktop: thumbnailOverlayBGDesk,
        backgroundStylesTab: thumbnailOverlayBGTab,
        backgroundStylesMobile: thumbnailOverlayBGMob,
    } = generateNormalBGControlStyles({
        controlName: THUMBNAIL_OVERLAY_BG,
        attributes,
        noMainBGImg: true,
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
    //description
    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: textSpacingDesk,
        tabRangeStyle: textSpacingTab,
        mobRangeStyle: textSpacingMob,
    } = generateResRangeStyle({
        controlName: TEXT_SPACING,
        property: 'margin-top',
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
        backgroundStylesDesktop: countBGDesk,
        backgroundStylesTab: countBGTab,
        backgroundStylesMobile: countBGMob,
    } = generateNormalBGControlStyles({
        controlName: COUNT_BG,
        attributes,
        noMainBGImg: true,
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
    const { boxShadowStyle: countBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: COUNT_SHADOW,
    });
    //view btn
    const {
        typoStylesDesktop: viewBtnTypoDesk,
        typoStylesTab: viewBtnTypoTab,
        typoStylesMobile: viewBtnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: VIEW_BTN_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: viewBtnPaddingDesk,
        dimensionStylesTab: viewBtnPaddingTab,
        dimensionStylesMobile: viewBtnPaddingMob,
    } = generateDimensionStyle({
        controlName: VIEW_BTN_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: viewBtnBorderDesk,
        tabBorderStyle: viewBtnBorderTab,
        mobBorderStyle: viewBtnBorderMob,
    } = generateBorderStyle({
        controlName: VIEW_BTN_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: viewBtnBorderRadiusDesk,
        dimensionStylesTab: viewBtnBorderRadiusTab,
        dimensionStylesMobile: viewBtnBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: VIEW_BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: viewBtnBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: VIEW_BTN_SHADOW,
    });

    //cat name

    // background
    const {
        backgroundStylesDesktop: catNameBGDesk,
        backgroundStylesTab: catNameBGTab,
        backgroundStylesMobile: catNameBGMob,
    } = generateNormalBGControlStyles({
        controlName: CAT_NAME_BG,
        attributes,
    });

    // padding
    const {
        dimensionStylesDesktop: catNamePaddingDesk,
        dimensionStylesTab: catNamePaddingTab,
        dimensionStylesMobile: catNamePaddingMob,
    } = generateDimensionStyle({
        controlName: CAT_NAME_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // border
    const {
        desktopBorderStyle: catNameBorderDesk,
        tabBorderStyle: catNameBorderTab,
        mobBorderStyle: catNameBorderMob,
    } = generateBorderStyle({
        controlName: CAT_NAME_BORDER,
        attributes,
    });

    // border radius
    const {
        dimensionStylesDesktop: catNameBorderRadiusDesk,
        dimensionStylesTab: catNameBorderRadiusTab,
        dimensionStylesMobile: catNameBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CAT_NAME_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: catNameBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CAT_NAME_SHADOW,
    });

    const {
        backgroundStylesDesktop: catNameHoverBGDesk,
        backgroundStylesTab: catNameHoverBGTab,
        backgroundStylesMobile: catNameHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: CAT_NAME_HOVER_BG,
        attributes,
    });

    const { boxShadowStyle: catNameHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CAT_NAME_HOVER_SHADOW,
    });

    const desktopAllStyle = `
        .${uniqueId}.zolo-block.zolo-post-category-wrap{
          grid-template-columns:repeat(${columnCountDesk}, 1fr);
          ${colGapDesk}
        }
        .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
          ${itemHeightDesk}
          ${itemAlignDesk}
          ${itemBGDesk}
          ${itemBorderDesk}
          ${itemBorderRadiusDesk}
          ${itemBoxShadow}
          
        }

        ${
        preset === 'style-1' || preset === 'style-4'
        
                ? `
                .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
                  ${itemPaddingDesk}
                }
              `
                : ''
        }

        ${
            preset === 'style-2'
                ? `
                .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-content,
                .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-bottom-content {
                  ${itemPaddingDesk}
                }
              `
                : ''
        }

        ${
            preset === 'style-3'
                ? `
                .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-3 .zolo-content {
                  ${itemPaddingDesk}
                }
              `
                : ''
        }

      .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-img:before{
        ${thumbnailOverlayBGDesk}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-img{
        ${itemBorderRadiusDesk}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover{
       ${itemHoverBGDesk}
       ${itemHoverBoxShadow}
        ${itemBorderHoverColor ? `border-color:${itemBorderHoverColor};` : ''}
       ${itemHoverOpacity ? `opacity:${itemHoverOpacity};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name {
        ${nameTypoDesk}
        ${nameColor ? `color:${nameColor};` : ''}
      }

      ${
          preset === 'style-3'
              ? `
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name {
                      ${catNameBGDesk}
                      ${catNamePaddingDesk}
                      ${catNameBorderDesk}
                      ${catNameBorderRadiusDesk}
                      ${catNameBoxShadow}
                  }
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-name {
                      ${catNameHoverBGDesk}
                      ${catNameHoverBoxShadow}
                      ${catNameHoverBColor ? `border-color:${catNameHoverBColor};` : ''}
                  }
              `
              : ''
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-name {
        ${nameHoverColor ? `color:${nameHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-text {
          ${textHoverColor ? `color:${textHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-count {
          ${countHoverColor ? `color:${countHoverColor};` : ''}
          ${countHoverBgColor ? `background-color:${countHoverBgColor};` : ''}
          ${countHoverBColor ? `border-color:${countHoverBColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-text{
        ${textTypoDesk}
        ${textSpacingDesk}
        ${textColor ? `color:${textColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-count{
        ${countTypoDesk}
        ${countPaddingDesk}
        ${countBGDesk}
        ${countBorderDesk}
        ${countBorderRadiusDesk}
        ${countBoxShadow}
        ${countColor ? `color:${countColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link{
        ${viewBtnTypoDesk}
        ${viewBtnPaddingDesk}
        ${viewBtnBorderDesk}
        ${viewBtnBorderRadiusDesk}
        ${viewBtnBoxShadow}
        ${viewBtnColor ? `color:${viewBtnColor};` : ''}
        ${viewBtnBgColor ? `background-color:${viewBtnBgColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link:hover{
        ${viewBtnHoverColor ? `color:${viewBtnHoverColor};` : ''}
        ${viewBtnBgHoverColor ? `background-color:${viewBtnBgHoverColor};` : ''}
        ${viewBtnHoverBorderColor ? `border-color:${viewBtnHoverBorderColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link .zolo__display-icon svg{
        ${viewBtnIconColor ? `fill:${viewBtnIconColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link:hover .zolo__display-icon svg{
        ${viewBtnIconHoverColor ? `fill:${viewBtnIconHoverColor};` : ''}
      }
  `;

    const tabletAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-category-wrap{
        grid-template-columns:repeat(${columnCountTab}, 1fr);
        ${colGapTab}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
        ${itemHeightTab}
        ${itemAlignTab}
        ${itemBGTab}
        ${itemBorderTab}
        ${itemBorderRadiusTab}
      }

      ${
          preset === 'style-1' || preset === 'style-4'
              ? `
              .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
                  ${itemPaddingTab}
              }
            `
              : ''
      }

      ${
          preset === 'style-2'
              ? `
              .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-content,
              .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-bottom-content {
                  ${itemPaddingTab}
              }
            `
              : ''
      }

      ${
          preset === 'style-3'
              ? `
                .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-3 .zolo-content {
                  ${itemPaddingTab}
                }
              `
              : ''
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-img{
        ${itemBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name{
        ${nameTypoTab}
      }

      ${
          preset === 'style-3'
              ? `
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name {
                      ${catNameBGTab}
                      ${catNamePaddingTab}
                      ${catNameBorderTab}
                      ${catNameBorderRadiusTab}
                  }
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-name {
                      ${catNameHoverBGTab}
                  }
              `
              : ''
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-text{
        ${textTypoTab}
        ${textSpacingTab}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-count{
        ${countTypoTab}
        ${countPaddingTab}
        ${countBGTab}
        ${countBorderTab}
        ${countBorderRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link{
        ${viewBtnTypoTab}
        ${viewBtnPaddingTab}
        ${viewBtnBorderTab}
        ${viewBtnBorderRadiusTab}
      }
  `;
    const mobileAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-category-wrap{
        grid-template-columns:repeat(${columnCountMob}, 1fr);
        ${colGapMob}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
        ${itemHeightMob}
        ${itemAlignMob}
        ${itemBGMob}
        ${itemBorderMob}
        ${itemBorderRadiusMob}

      }

      ${
          preset === 'style-1' || preset === 'style-4'
              ? `
              .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item{
                ${itemPaddingMob}
              }
            `
              : ''
      }

      ${
          preset === 'style-2'
              ? `
              .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-content,
              .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-bottom-content {
                ${itemPaddingMob}
              }
            `
              : ''
      }

      ${
          preset === 'style-3'
              ? `
                .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-3 .zolo-content {
                  ${itemPaddingMob}
                }
              `
              : ''
      }

       .${uniqueId}.zolo-block.zolo-post-category-wrap.zolo-category-style-2 .zolo-category-img{
        ${itemBorderRadiusMob}
       }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name{
        ${nameTypoMob}
      }

      ${
          preset === 'style-3'
              ? `
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-name {
                      ${catNameBGMob}
                      ${catNamePaddingMob}
                      ${catNameBorderMob}
                      ${catNameBorderRadiusMob}
                  }
                  .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-item:hover .zolo-category-name {
                      ${catNameHoverBGMob}
                  }
              `
              : ''
      }

      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-text {
        ${textTypoMob}
        ${textSpacingMob}
      }
       .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-count{
        ${countTypoMob}
        ${countPaddingMob}
        ${countBGMob}
        ${countBorderMob}
        ${countBorderRadiusMob}
      }
      .${uniqueId}.zolo-block.zolo-post-category-wrap .zolo-category-link{
        ${viewBtnTypoMob}
        ${viewBtnPaddingMob}
        ${viewBtnBorderMob}
        ${viewBtnBorderRadiusMob}
      }
  `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postCategory.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postCategory.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postCategory.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
