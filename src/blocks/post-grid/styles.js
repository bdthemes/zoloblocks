import { applyFilters } from '@wordpress/hooks';

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BG,
    THUMBNAIL_BORDER,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_MARGIN,
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    READMORE_GAP,
    READMORE_BORDER,
    READMORE_BORDER_RADIUS,
    READMORE_MARGIN,
    READMORE_PADDING,
    AVATAR_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_GAP,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_MARGIN,
    PAG_PADDING,
    PAG_ALIGN,
    META_SPACE,
    META_ARROW_SPACE,
    CONTENT_PADDING,
    META_BOX_WRAP_PADDING,
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    READMORE_TYPOGRAPHY,
    NAME_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

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
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        metaHColor,
        metaArrowColor,
        catBgColor,
        catColor,
        catBgHoverColor,
        catHoverColor,
        readMoreBgColor,
        readMoreColor,
        readMoreIconColor,
        readMoreBgHoverColor,
        readMoreHoverColor,
        readMoreIconHoverColor,
        namePrefixColor,
        nameColor,
        nameHoverColor,
        namePrefixHoverColor,
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
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

    const {
        desktopRangeStyle: thumbnailHeightDesk,
        tabRangeStyle: thumbnailHeightTab,
        mobRangeStyle: thumbnailHeightMob,
    } = generateResRangeStyle({
        controlName: THUMBNAIL_HEIGHT,
        property: 'height',
        attributes,
    });

    //column
    const {
        dimensionStylesDesktop: columnDeskPadding,
        dimensionStylesTab: columnTabPadding,
        dimensionStylesMobile: columnMobPadding,
    } = generateDimensionStyle({
        controlName: COLUMN_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: columnDeskBGStyle,
        backgroundStylesTab: columnTabBGStyle,
        backgroundStylesMobile: columnMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: COLUMN_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: columnDeskBorderStyle,
        tabBorderStyle: columnTabBorderStyle,
        mobBorderStyle: columnMobBorderStyle,
    } = generateBorderStyle({
        controlName: COLUMN_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: columnDeskBorderRadius,
        dimensionStylesTab: columnTabBorderRadius,
        dimensionStylesMobile: columnMobBorderRadius,
    } = generateDimensionStyle({
        controlName: COLUMN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: columnBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: COLUMN_SHADOW,
    });

    const {
        dimensionStylesDesktop: thumbMarginDesk,
        dimensionStylesTab: thumbMarginTab,
        dimensionStylesMobile: thumbMarginMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: thumbBgDesk,
        backgroundStylesTab: thumbBgTab,
        backgroundStylesMobile: thumbBgMob,
    } = generateNormalBGControlStyles({
        controlName: THUMBNAIL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: thumbBorderDesk,
        tabBorderStyle: thumbBorderTab,
        mobBorderStyle: thumbBorderMob,
    } = generateBorderStyle({
        controlName: THUMBNAIL_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: thumbBorderRadiusDesk,
        dimensionStylesTab: thumbBorderRadiusTab,
        dimensionStylesMobile: thumbBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: thumbBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: THUMBNAIL_BOX_SHADOW,
    });

    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: titleMarginDesk,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        typoStylesDesktop: excerptTypoDesk,
        typoStylesTab: excerptTypoTab,
        typoStylesMobile: excerptTypoMob,
    } = generateTypographyStyles({
        prefixConstant: EXCERPT_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: excerptMarginDesk,
        dimensionStylesTab: excerptMarginTab,
        dimensionStylesMobile: excerptMarginMob,
    } = generateDimensionStyle({
        controlName: EXCERPT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: metaTypoDesk,
        typoStylesTab: metaTypoTab,
        typoStylesMobile: metaTypoMob,
    } = generateTypographyStyles({
        prefixConstant: META_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: metaMarginDesk,
        dimensionStylesTab: metaMarginTab,
        dimensionStylesMobile: metaMarginMob,
    } = generateDimensionStyle({
        controlName: META_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: catTypoDesk,
        typoStylesTab: catTypoTab,
        typoStylesMobile: catTypoMob,
    } = generateTypographyStyles({
        prefixConstant: CAT_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: catGapDesk,
        tabRangeStyle: catGapTab,
        mobRangeStyle: catGapMob,
    } = generateResRangeStyle({
        controlName: CAT_GAP,
        property: 'gap',
        attributes,
    });
    const {
        desktopBorderStyle: catBorderDesk,
        tabBorderStyle: catBorderTab,
        mobBorderStyle: catBorderMob,
    } = generateBorderStyle({
        controlName: CAT_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: catBorderRadiusDesk,
        dimensionStylesTab: catBorderRadiusTab,
        dimensionStylesMobile: catBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CAT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: catMarginDesk,
        dimensionStylesTab: catMarginTab,
        dimensionStylesMobile: catMarginMob,
    } = generateDimensionStyle({
        controlName: CAT_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: catPaddingDesk,
        dimensionStylesTab: catPaddingTab,
        dimensionStylesMobile: catPaddingMob,
    } = generateDimensionStyle({
        controlName: CAT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        typoStylesDesktop: readMoreTypoDesk,
        typoStylesTab: readMoreTypoTab,
        typoStylesMobile: readMoreTypoMob,
    } = generateTypographyStyles({
        prefixConstant: READMORE_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopRangeStyle: readMoreGapDesk,
        tabRangeStyle: readMoreGapTab,
        mobRangeStyle: readMoreGapMob,
    } = generateResRangeStyle({
        controlName: READMORE_GAP,
        property: 'gap',
        attributes,
    });

    const {
        desktopBorderStyle: readMoreBorderDesk,
        tabBorderStyle: readMoreBorderTab,
        mobBorderStyle: readMoreBorderMob,
    } = generateBorderStyle({
        controlName: READMORE_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: readMoreBorderRadiusDesk,
        dimensionStylesTab: readMoreBorderRadiusTab,
        dimensionStylesMobile: readMoreBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: READMORE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: readMoreMarginDesk,
        dimensionStylesTab: readMoreMarginTab,
        dimensionStylesMobile: readMoreMarginMob,
    } = generateDimensionStyle({
        controlName: READMORE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: readMorePaddingDesk,
        dimensionStylesTab: readMorePaddingTab,
        dimensionStylesMobile: readMorePaddingMob,
    } = generateDimensionStyle({
        controlName: READMORE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopRangeStyle: avatarWidthDesk,
        tabRangeStyle: avatarWidthTab,
        mobRangeStyle: avatarWidthMob,
    } = generateResRangeStyle({
        controlName: AVATAR_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: avatarHeightDesk,
        tabRangeStyle: avatarHeightTab,
        mobRangeStyle: avatarHeightMob,
    } = generateResRangeStyle({
        controlName: AVATAR_SIZE,
        property: 'height',
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

    const {
        desktopRangeStyle: authorGapDesk,
        tabRangeStyle: authorGapTab,
        mobRangeStyle: authorGapMob,
    } = generateResRangeStyle({
        controlName: AVATAR_GAP,
        property: 'gap',
        attributes,
    });

    const {
        typoStylesDesktop: nameTypoDesk,
        typoStylesTab: nameTypoTab,
        typoStylesMobile: nameTypoMob,
    } = generateTypographyStyles({
        prefixConstant: NAME_TYPOGRAPHY,
        attributes,
    });

    // Pagination
    const {
        desktopBorderStyle: pagBorderDesk,
        tabBorderStyle: pagBorderTab,
        mobBorderStyle: pagBorderMob,
    } = generateBorderStyle({
        controlName: PAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagBorderRadiusDesk,
        dimensionStylesTab: pagBorderRadiusTab,
        dimensionStylesMobile: pagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: pagTypoDesk,
        typoStylesTab: pagTypoTab,
        typoStylesMobile: pagTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PAG_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopAlignStyle: pagAlignDesk,
        tabAlignStyle: pagAlignTab,
        mobAlignStyle: pagAlignMob,
    } = generateResAlignmentStyle({
        controlName: PAG_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        dimensionStylesDesktop: pagPaddingDesk,
        dimensionStylesTab: pagPaddingTab,
        dimensionStylesMobile: pagPaddingMob,
    } = generateDimensionStyle({
        controlName: PAG_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: pagMarginDesk,
        dimensionStylesTab: pagMarginTab,
        dimensionStylesMobile: pagMarginMob,
    } = generateDimensionStyle({
        controlName: PAG_MARGIN,
        styleFor: 'padding',
        attributes,
    });

    // post meta space
    const {
        desktopRangeStyle: metaSpaceDesk,
        tabRangeStyle: metaSpaceTab,
        mobRangeStyle: metaSpaceMob,
    } = generateResRangeStyle({
        controlName: META_SPACE,
        property: 'gap',
        attributes,
    });


    // post meta arrow space
        const {
          desktopRangeStyle: metaArrowSpaceDesk,
          tabRangeStyle: metaArrowSpaceTab,
          mobRangeStyle: metaArrowSpaceMob,
      } = generateResRangeStyle({
          controlName: META_ARROW_SPACE,
          property: 'left',
          attributes,
      });


    // post content wrapper

    const {
        dimensionStylesDesktop: contentPaddingDesk,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // post meta content wrapper

    const {
      dimensionStylesDesktop: metaBoxWrapPaddingDesk,
      dimensionStylesTab: metaBoxWrapPaddingTab,
      dimensionStylesMobile: metaBoxWrapPaddingMob,
  } = generateDimensionStyle({
      controlName: META_BOX_WRAP_PADDING,
      styleFor: 'padding',
      attributes,
  });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
        grid-template-columns:repeat(${columnCountDesk}, 1fr);
        ${colGapDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
        ${contentPaddingDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
        ${metaSpaceDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item{
        background: none !important;
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item .zolo-post-image::after{
        ${columnDeskBGStyle}
      }

      ${
          preset === 'style-5'
              ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
            ${thumbnailHeightDesk}
            ${thumbBorderRadiusDesk}
          }

        `
              : ''
      }

      ${
          preset !== 'style-5'
              ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
            ${thumbnailHeightDesk}
            ${thumbBorderRadiusDesk}
          }

        `
              : ''
      }

      ${
          preset === 'style-5'
              ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
            ${metaArrowColor ? `border-top-color:${metaArrowColor};` : ''}
            ${metaArrowSpaceDesk}
          }
        `
              : ''
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-title a
      {
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginDesk}
        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBoxShadow}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoDesk}
        ${metaMarginDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-dateTime{
        ${metaHColor ? `color:${metaHColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-category a
      {
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapDesk}
        ${readMoreTypoDesk}
        ${readMorePaddingDesk}
        ${readMoreBorderDesk}
        ${readMoreBorderRadiusDesk}
        ${readMoreColor ? `color:${readMoreColor};` : ''}
        ${readMoreBgColor ? `background-color:${readMoreBgColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a svg{
        ${readMoreIconColor ? `fill:${readMoreIconColor};` : ''}
        ${readMoreIconColor ? `color:${readMoreIconColor};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a:hover svg{
        ${readMoreIconHoverColor ? `fill:${readMoreIconHoverColor};` : ''}
        ${readMoreIconHoverColor ? `color:${readMoreIconHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a:hover{
        ${readMoreHoverColor ? `color:${readMoreHoverColor};` : ''}
        ${readMoreBgHoverColor ? `background-color:${readMoreBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthDesk}
        ${avatarHeightDesk}
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name span{
        ${namePrefixColor ? `color:${namePrefixColor} !important;` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name a{
        ${nameColor ? `color:${nameColor} !important;` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name a:hover,
      .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-author-name a{
        ${nameHoverColor ? `color:${nameHoverColor} !important;` : ''}
      }

      ${
          preset === 'style-3'
              ? `
           .${uniqueId}.zolo-block.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item:hover .zolo-post-author-name span{
              ${namePrefixHoverColor ? `color:${namePrefixHoverColor} !important;` : ''}
            }

        `
          : ''
      }



      ${
          preset === 'style-5'
              ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
            ${metaBoxWrapPaddingDesk}
          }

        `
              : ''
      }

      .${uniqueId}.zolo-pagination-wrap {
        ${pagAlignDesk}
        ${pagMarginDesk}
      }

      .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
        ${pagBorderDesk}
        ${pagBorderRadiusDesk}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers {
        ${pagTypoDesk}
        ${pagPaddingDesk}
        ${pagColor ? `color:${pagColor};` : ''}
        ${pagBgColor ? `background-color:${pagBgColor};` : ''}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers + .page-numbers {
        border-left: 1px solid ${pagSeparatorColor ? pagSeparatorColor : '#d9d9d9'};
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers.current {
        ${apagColor ? `color:${apagColor};` : ''}
        ${apagBgColor ? `background-color:${apagBgColor};` : ''}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers:hover {
        ${apagColor ? `color:${apagColor};` : ''}
        ${apagBgColor ? `background-color:${apagBgColor};` : ''}
      }

    `;

    const tabletAllStyle = `
    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
      grid-template-columns:repeat(${columnCountTab}, 1fr);
      ${colGapTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
      ${columnTabPadding}
      ${columnTabBGStyle}
      ${columnTabBorderStyle}
      ${columnTabBorderRadius}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
      ${contentPaddingTab}
    }

    ${
      preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
          ${thumbnailHeightTab}
          ${thumbBorderRadiusTab}
        }

      ` : ''
    }

    ${
      preset !== 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
          ${thumbnailHeightTab}
          ${thumbBorderRadiusTab}
        }

      ` : ''
    }

    ${
      preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
          ${metaArrowSpaceTab}
        }
      ` : ''
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
      ${titleMarginTab}
      ${titleTypoTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
      ${excerptMarginTab}
      ${excerptTypoTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
      ${thumbMarginTab}
      ${thumbBgTab}
      ${thumbBorderTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
      ${metaTypoTab}
      ${metaMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
      ${catGapTab}
      ${catMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
      ${catTypoTab}
      ${catPaddingTab}
      ${catBorderTab}
      ${catBorderRadiusTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
      ${readMoreMarginTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
      ${readMoreGapTab}
      ${readMoreTypoTab}
      ${readMorePaddingTab}
      ${readMoreBorderTab}
      ${readMoreBorderRadiusTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
      ${authorGapTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
      ${avatarWidthTab}
      ${avatarHeightTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
      ${nameTypoTab}
    }

    ${
      preset === 'style-5' ? `
        .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
          ${metaBoxWrapPaddingTab}
        }

      ` : ''
    }

    .${uniqueId}.zolo-pagination-wrap {
      ${pagAlignTab}
      ${pagMarginTab}
    }

    .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
      ${pagBorderTab}
      ${pagBorderRadiusTab}
    }

    .${uniqueId}.zolo-pagination-wrap .page-numbers {
      ${pagTypoTab}
      ${pagPaddingTab}
    }

    .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
      ${metaSpaceTab}
    }
  `;

    const mobileAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-content-wrap{
        grid-template-columns:repeat(${columnCountMob}, 1fr);
        ${colGapMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item{
        ${columnMobPadding}
        ${columnMobBGStyle}
        ${columnMobBorderStyle}
        ${columnMobBorderRadius}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-item .zolo-post-content{
        ${contentPaddingMob}
      }

      ${
        preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image .wp-post-image{
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        ` : ''
      }

      ${
        preset !== 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image {
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        ` : ''
      }

      ${
        preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap::before{
            ${metaArrowSpaceMob}
          }
        ` : ''
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginMob}
        ${thumbBgMob}
        ${thumbBorderMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoMob}
        ${metaMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapMob}
        ${readMoreTypoMob}
        ${readMorePaddingMob}
        ${readMoreBorderMob}
        ${readMoreBorderRadiusMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthMob}
        ${avatarHeightMob}
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoMob}
      }

      ${
        preset === 'style-5' ? `
          .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-meta-wrap {
            ${metaBoxWrapPaddingMob}
          }

        ` : ''
      }

      .${uniqueId}.zolo-pagination-wrap {
        ${pagAlignMob}
        ${pagMarginMob}
      }

      .${uniqueId}.zolo-pagination-wrap .zolo-pagination-nav{
        ${pagBorderMob}
        ${pagBorderRadiusMob}
      }

      .${uniqueId}.zolo-pagination-wrap .page-numbers {
        ${pagTypoMob}
        ${pagPaddingMob}
      }

      .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-block.zolo-post-grid-wrap .zolo-post-secount-dateTime {
        ${metaSpaceMob}
      }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postGrid.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postGrid.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postGrid.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
