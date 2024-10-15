import { applyFilters } from '@wordpress/hooks';
import {
    CONTENT_ALIGN,
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    THUMBNAIL_PADDING,
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
    COUNT_SIZE,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_MARGIN,
    PAG_PADDING,
    PAG_ALIGN,
    FTHUMB_HEIGHT,
    FCONTENT_PADDING,
    FCONTAINER_PADDING,
    FCONTAINER_BG,
    FCONTAINER_OVERLAY,
    FCONTAINER_BORDER,
    FCONTAINER_BORDER_RADIUS,
    FCONTAINER_SHADOW,
    META_SPACE,
} from './constants';

import {
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    META_TYPOGRAPHY,
    CAT_TYPOGRAPHY,
    COUNT_TYPOGRAPHY,
    PAG_TYPOGRAPHY,
    FTITLE_TYPOGRAPHY,
    FEXCERPT_TYPOGRAPHY,
    FMETA_TYPOGRAPHY,
    FCAT_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

const {
    generateDimensionStyle,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        catBgColor,
        catColor,
        catBgHoverColor,
        catHoverColor,
        countColor,
        countBGColor,
        countHoverColor,
        countHoverBGColor,
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
        authorPrefixColor,
        authorColor,
        authorHoverColor,

        // featured post
        preset,
        contentDirection,
        ftitleColor,
        ftitleHoverColor,
        fexcerptColor,
        fmetaColor,
        fcatBgColor,
        fcatColor,
        fcatBgHoverColor,
        fcatHoverColor,
        fauthorPrefixColor,
        fauthorColor,
        fauthorHoverColor,
        fcountColor,
        fcountBGColor,
    } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    // content align
    const {
        desktopAlignStyle: contetnAlignDesk,
        tabAlignStyle: contetnAlignTab,
        mobAlignStyle: contetnAlignMob,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGN,
        property: 'text-align',
        attributes,
    });

    // Featured Post
    const {
        desktopRangeStyle: fthumbHeightDesk,
        tabRangeStyle: fthumbHeightTab,
        mobRangeStyle: fthumbHeightMob,
    } = generateResRangeStyle({
        controlName: FTHUMB_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        typoStylesDesktop: ftitleTypoDesk,
        typoStylesTab: ftitleTypoTab,
        typoStylesMobile: ftitleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FTITLE_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: fexcerptTypoDesk,
        typoStylesTab: fexcerptTypoTab,
        typoStylesMobile: fexcerptTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FEXCERPT_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: fmetaTypoDesk,
        typoStylesTab: fmetaTypoTab,
        typoStylesMobile: fmetaTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FMETA_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: fcatTypoDesk,
        typoStylesTab: fcatTypoTab,
        typoStylesMobile: fcatTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FCAT_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: fcontentDeskPadding,
        dimensionStylesTab: fcontentTabPadding,
        dimensionStylesMobile: fcontentMobPadding,
    } = generateDimensionStyle({
        controlName: FCONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: fcontainerDeskPadding,
        dimensionStylesTab: fcontainerTabPadding,
        dimensionStylesMobile: fcontainerMobPadding,
    } = generateDimensionStyle({
        controlName: FCONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: fcontainerDeskBGStyle,
        backgroundStylesTab: fcontainerTabBGStyle,
        backgroundStylesMobile: fcontainerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: FCONTAINER_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: fcontainerDeskOverlayStyle,
        backgroundStylesTab: fcontainerTabOverlayStyle,
        backgroundStylesMobile: fcontainerMobOverlayStyle,
    } = generateNormalBGControlStyles({
        controlName: FCONTAINER_OVERLAY,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: fcontainerDeskBorderStyle,
        tabBorderStyle: fcontainerTabBorderStyle,
        mobBorderStyle: fcontainerMobBorderStyle,
    } = generateBorderStyle({
        controlName: FCONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: fcontainerDeskBorderRadius,
        dimensionStylesTab: fcontainerTabBorderRadius,
        dimensionStylesMobile: fcontainerMobBorderRadius,
    } = generateDimensionStyle({
        controlName: FCONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: fcontainerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: FCONTAINER_SHADOW,
    });

    // column gap
    const {
        desktopRangeStyle: colGapDesk,
        tabRangeStyle: colGapTab,
        mobRangeStyle: colGapMob,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-gap',
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
        dimensionStylesDesktop: thumbPaddingDesk,
        dimensionStylesTab: thumbPaddingTab,
        dimensionStylesMobile: thumbPaddingMob,
    } = generateDimensionStyle({
        controlName: THUMBNAIL_PADDING,
        styleFor: 'padding',
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
        desktopRangeStyle: countWidthDesk,
        tabRangeStyle: countWidthTab,
        mobRangeStyle: countWidthMob,
    } = generateResRangeStyle({
        controlName: COUNT_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: countMinWidthDesk,
        tabRangeStyle: countMinWidthTab,
        mobRangeStyle: countMinWidthMob,
    } = generateResRangeStyle({
        controlName: COUNT_SIZE,
        property: 'min-width',
        attributes,
    });

    const {
        desktopRangeStyle: countHeightDesk,
        tabRangeStyle: countHeightTab,
        mobRangeStyle: countHeightMob,
    } = generateResRangeStyle({
        controlName: COUNT_SIZE,
        property: 'height',
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
        typoStylesDesktop: countTypoDesk,
        typoStylesTab: countTypoTab,
        typoStylesMobile: countTypoMob,
    } = generateTypographyStyles({
        prefixConstant: COUNT_TYPOGRAPHY,
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.zolo-post-featured-list-wrap{
        ${colGapDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }
      .${uniqueId}.zolo-post-featured-list-wrap.zolo-post-style-1 .zolo-post-item,.${uniqueId}.zolo-post-featured-list-wrap.zolo-post-style-3 .zolo-post-content{
            ${contentDirection && `flex-direction: ${contentDirection}`}
      }
      

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post {
        ${fcontainerDeskPadding}
        ${fcontainerDeskBGStyle}
        ${fcontainerDeskBorderStyle}
        ${fcontainerDeskBorderRadius}
        ${fcontainerBoxShadow}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image::before{
        ${fcontainerDeskOverlayStyle}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-meta {
        ${metaSpaceDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-content{
        ${contetnAlignDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-content{
        ${fcontentDeskPadding}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image{
        ${fthumbHeightDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-title {
        ${ftitleTypoDesk}
        ${ftitleColor ? `color:${ftitleColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-title a{
        ${ftitleColor ? `color:${ftitleColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-title:hover a {
        ${ftitleHoverColor ? `color:${ftitleHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-desc p{
        ${fexcerptTypoDesk}
        ${fexcerptColor ? `color:${fexcerptColor};` : ''}
      }
      
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name {
        ${fmetaTypoDesk}
        ${fmetaColor ? `color:${fmetaColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name span {
        ${fauthorPrefixColor ? `color:${fauthorPrefixColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name a {
        ${fauthorColor ? `color:${fauthorColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name a:hover {
        ${fauthorHoverColor ? `color:${fauthorHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-count-number:before {
        ${fcountColor ? `color:${fcountColor};` : ''}
        ${fcountBGColor ? `background-color:${fcountBGColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-category a {
        ${fcatTypoDesk}
        ${fcatColor ? `color:${fcatColor};` : ''}
        ${fcatBgColor ? `background-color:${fcatBgColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-category a:hover {
        ${fcatHoverColor ? `color:${fcatHoverColor};` : ''}
        ${fcatBgHoverColor ? `background-color:${fcatBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
        ${thumbnailHeightDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-title a:hover {
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
        ${thumbMarginDesk}
        ${thumbPaddingDesk}
        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBorderRadiusDesk}
        ${thumbBoxShadow}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-category a {
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }


      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-category a:hover{
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number:before {
        ${countWidthDesk}
        ${countHeightDesk}
        ${countMinWidthDesk}
        ${countBorderDesk}
        ${countBorderRadiusDesk}
        ${countBGColor ? `background-color:${countBGColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number::before{
        ${countTypoDesk}
        ${countColor ? `color:${countColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number:hover::before{
        ${countHoverColor ? `color:${countHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number:hover:before{
        ${countHoverBGColor ? `background-color:${countHoverBGColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta {
        ${metaMarginDesk}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-author-name{
        ${metaTypoDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta .zolo-post-author-name span{
        ${authorPrefixColor ? `color:${authorPrefixColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta .zolo-post-author-name a{
        ${authorColor ? `color:${authorColor};` : ''}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta .zolo-post-author-name a:hover{
        ${authorHoverColor ? `color:${authorHoverColor};` : ''}
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

      ${
          active
              ? `
                    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image .wp-post-image {
                        filter:
                            blur(${blur}px)
                            brightness(${brightness}%)
                            contrast(${contrast}%)
                            saturate(${saturate}%)
                            hue-rotate(${hueRotate}deg)
                    }
             `
              : ''
      }

    `;

    const tabletAllStyle = `
    .${uniqueId}.zolo-post-featured-list-wrap{
      ${colGapTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-content{
      ${contetnAlignTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-content{
      ${fcontentTabPadding}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image{
      ${fthumbHeightTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-title {
      ${ftitleTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-desc p{
      ${fexcerptTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image::before{
      ${fcontainerTabOverlayStyle}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-meta {
      ${metaSpaceTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta,
    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name {
      ${fmetaTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-category a {
      ${fcatTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item{
      ${columnTabPadding}
      ${columnTabBGStyle}
      ${columnTabBorderStyle}
      ${columnTabBorderRadius}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post {
      ${fcontainerTabPadding}
      ${fcontainerTabBGStyle}
      ${fcontainerTabBorderStyle}
      ${fcontainerTabBorderRadius}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
      ${thumbnailHeightTab}
    }


    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-title{
      ${titleMarginTab}
      ${titleTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-desc p{
      ${excerptMarginTab}
      ${excerptTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
      ${thumbMarginTab}
      ${thumbPaddingTab}
      ${thumbBgTab}
      ${thumbBorderTab}
      ${thumbBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta {
      ${metaMarginTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta,
    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-author-name{
      ${metaTypoTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-category{
      ${catGapTab}
      ${catMarginTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-category a{
      ${catTypoTab}
      ${catPaddingTab}
      ${catBorderTab}
      ${catBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number:before {
      ${countWidthTab}
      ${countHeightTab}
      ${countMinWidthTab}
      ${countBorderTab}
      ${countBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta-content{
      ${countTypoTab}
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
  `;

    const mobileAllStyle = `
      .${uniqueId}.zolo-post-featured-list-wrap{
        ${colGapMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-content{
        ${contetnAlignMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-content{
        ${fcontentMobPadding}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image{
        ${fthumbHeightMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-title {
        ${ftitleTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-desc p{
        ${fexcerptTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-image::before{
        ${fcontainerMobOverlayStyle}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-meta {
        ${metaSpaceMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-author-name,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .zolo-post-date,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-meta .meta-separator {
        ${fmetaTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post .zolo-post-category a {
        ${fcatTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item{
        ${columnMobPadding}
        ${columnMobBGStyle}
        ${columnMobBorderStyle}
        ${columnMobBorderRadius}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item.featured-post {
        ${fcontainerMobPadding}
        ${fcontainerMobBGStyle}
        ${fcontainerMobBorderStyle}
        ${fcontainerMobBorderRadius}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
        ${thumbnailHeightMob}
      }


      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-image{
        ${thumbMarginMob}
        ${thumbPaddingMob}
        ${thumbBgMob}
        ${thumbBorderMob}
        ${thumbBorderRadiusMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta {
        ${metaMarginMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta,
      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-author-name{
        ${metaTypoMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-item .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-count-number:before{
        ${countWidthMob}
        ${countHeightMob}
        ${countMinWidthMob}
        ${countBorderMob}
        ${countBorderRadiusMob}

      .${uniqueId}.zolo-post-featured-list-wrap .zolo-post-meta-content{
        ${countTypoMob}
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
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.postList.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postList.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postList.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
