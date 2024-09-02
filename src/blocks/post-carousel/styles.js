import { applyFilters } from '@wordpress/hooks';
import {
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    CONTENT_PADDING,
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
    META_SPACE,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_OFFSET_VERTICAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    PAG_BOTTOM_SPACING,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
    META_ARROW_SPACE,
    META_BOX_WRAP_PADDING,
    CAROUSEL_CONTAINER_PADDING,
    SHADOW_RANGE,
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
    GlobalStyleHanlder,
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
        navColor,
        navHoverColor,
        navHoverBorderColor,
        metaArrowColor,
        enableShadow,
    } = attributes;

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

    // carousel start
    // Navigation
    const {
        desktopRangeStyle: navDeskWidth,
        tabRangeStyle: navTabWidth,
        mobRangeStyle: navMobWidth,
    } = generateResRangeStyle({
        controlName: NAV_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskHeight,
        tabRangeStyle: navTabHeight,
        mobRangeStyle: navMobHeight,
    } = generateResRangeStyle({
        controlName: NAV_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskOffsetLeft,
        tabRangeStyle: navTabOffsetLeft,
        mobRangeStyle: navMobOffsetLeft,
    } = generateResRangeStyle({
        controlName: NAV_OFFSET_HORIZONTAL,
        property: 'left',
        attributes,
    });
    const {
        desktopRangeStyle: navDeskOffsetRight,
        tabRangeStyle: navTabOffsetRight,
        mobRangeStyle: navMobOffsetRight,
    } = generateResRangeStyle({
        controlName: NAV_OFFSET_HORIZONTAL,
        property: 'right',
        attributes,
    });

    const {
        desktopBorderStyle: navBorderStyles,
        tabBorderStyle: navBorderStylesTab,
        mobBorderStyle: navBorderStylesMob,
    } = generateBorderStyle({
        controlName: NAV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: navBorderRadiusDesktop,
        dimensionStylesTab: navBorderRadiusTab,
        dimensionStylesMobile: navBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: navNormalBGStyle,
        backgroundStylesTab: navNormalBGStyleTab,
        backgroundStylesMobile: navNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: navHoverBGStyle,
        backgroundStylesTab: navHoverBGStyleTab,
        backgroundStylesMobile: navHoverBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    // navigation icon
    const {
        desktopRangeStyle: navDeskSize,
        tabRangeStyle: navTabSize,
        mobRangeStyle: navMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopRangeStyle: cnavDeskSize,
        tabRangeStyle: cnavTabSize,
        mobRangeStyle: cnavMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: cnavDeskHSize,
        tabRangeStyle: cnavTabHSize,
        mobRangeStyle: cnavMobHSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // Pagination
    const {
        desktopRangeStyle: pagDeskWidth,
        tabRangeStyle: pagTabWidth,
        mobRangeStyle: pagMobWidth,
    } = generateResRangeStyle({
        controlName: PAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: pagDeskHeight,
        tabRangeStyle: pagTabHeight,
        mobRangeStyle: pagMobHeight,
    } = generateResRangeStyle({
        controlName: PAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: pagBorderStyles,
        tabBorderStyle: pagBorderStylesTab,
        mobBorderStyle: pagBorderStylesMob,
    } = generateBorderStyle({
        controlName: PAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagBorderRadiusDesktop,
        dimensionStylesTab: pagBorderRadiusTab,
        dimensionStylesMobile: pagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: pagNormalBGStyle,
        backgroundStylesTab: pagNormalBGStyleTab,
        backgroundStylesMobile: pagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: PAG_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: pagSpacingDesktop,
        tabRangeStyle: pagSpacingTab,
        mobRangeStyle: pagSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_SPACING,
        property: 'gap',
        attributes,
    });

    const {
        desktopRangeStyle: pagBottomSpacingDesktop,
        tabRangeStyle: pagBottomSpacingTab,
        mobRangeStyle: pagBottomSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_BOTTOM_SPACING,
        property: 'bottom',
        attributes,
    });

    // Active Pagination
    const {
        desktopRangeStyle: apagDeskWidth,
        tabRangeStyle: apagTabWidth,
        mobRangeStyle: apagMobWidth,
    } = generateResRangeStyle({
        controlName: APAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: apagDeskHeight,
        tabRangeStyle: apagTabHeight,
        mobRangeStyle: apagMobHeight,
    } = generateResRangeStyle({
        controlName: APAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: apagBorderStyles,
        tabBorderStyle: apagBorderStylesTab,
        mobBorderStyle: apagBorderStylesMob,
    } = generateBorderStyle({
        controlName: APAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: apagBorderRadiusDesktop,
        dimensionStylesTab: apagBorderRadiusTab,
        dimensionStylesMobile: apagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: APAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: apagNormalBGStyle,
        backgroundStylesTab: apagNormalBGStyleTab,
        backgroundStylesMobile: apagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: APAG_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: contentPaddingDesk,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
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

    //carousel Container Padding
    const {
        dimensionStylesDesktop: carouselContainerPaddingDesk,
        dimensionStylesTab: carouselContainerPaddingTab,
        dimensionStylesMobile: carouselContainerPaddingMob,
    } = generateDimensionStyle({
        controlName: CAROUSEL_CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopRangeStyle: shadowRangeDesk,
        tabRangeStyle: shadowRangeTab,
        mobRangeStyle: shadowRangeMob,
    } = generateResRangeStyle({
        controlName: SHADOW_RANGE,
        property: '--review-carousel-mask-offset',
        attributes,
    });

    //carousel end
    /**
     * All Style Combination
     */
    const desktopAllStyle = `

     ${
         enableShadow
             ? `
                .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
                         mask-image: linear-gradient(
                            to right,
                            transparent,
                            black var(--review-carousel-mask-offset),
                            black calc(100% - var(--review-carousel-mask-offset)),
                            transparent);
                          ${shadowRangeDesk}
                    }
                    `
             : ''
     }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
        ${carouselContainerPaddingDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item .zolo-post-content{
        ${contentPaddingDesk}
      }
      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-dateTime, .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-secount-dateTime {
        ${metaSpaceDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item{
        background: none !important;
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item .zolo-post-image::after{
        ${columnDeskBGStyle}
      }

      ${
          preset === 'style-4'
              ? `
         .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image .wp-post-image{
          ${thumbnailHeightDesk}
          ${thumbBorderRadiusDesk}
        }

      `
              : ''
      }

    ${
        preset !== 'style-4'
            ? `
         .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image {
          ${thumbnailHeightDesk}
          ${thumbBorderRadiusDesk}
        }

      `
            : ''
    }

    ${
        preset === 'style-4'
            ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-wrap::before{
          ${metaArrowColor ? `border-top-color:${metaArrowColor};` : ''}
          ${metaArrowSpaceDesk}
        }
      `
            : ''
    }

    ${
        preset === 'style-4'
            ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-4 .zolo-post-meta-wrap {
          ${metaBoxWrapPaddingDesk}
        }

      `
            : ''
    }


      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-title a:hover,
      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item:hover .zolo-post-title a{
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image{
        ${thumbMarginDesk}

        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBoxShadow}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-dateTime{
        ${metaTypoDesk}
        ${metaMarginDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item:hover .zolo-post-dateTime{
        ${metaHColor ? `color:${metaHColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category a{
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category a:hover,
       .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item:hover .zolo-post-category a
      {
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel  .zolo-post-link-btn{
        ${readMoreMarginDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a{
        ${readMoreGapDesk}
        ${readMoreTypoDesk}
        ${readMorePaddingDesk}
        ${readMoreBorderDesk}
        ${readMoreBorderRadiusDesk}
        ${readMoreColor ? `color:${readMoreColor};` : ''}
        ${readMoreBgColor ? `background-color:${readMoreBgColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a svg{
        ${readMoreIconColor ? `color:${readMoreIconColor};` : ''}
        ${readMoreIconColor ? `fill:${readMoreIconColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a:hover svg{
        ${readMoreIconHoverColor ? `color:${readMoreIconHoverColor};` : ''}
        ${readMoreIconHoverColor ? `fill:${readMoreIconHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a:hover{
        ${readMoreHoverColor ? `color:${readMoreHoverColor};` : ''}
        ${readMoreBgHoverColor ? `background-color:${readMoreBgHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box{
        ${authorGapDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box img{
        ${avatarWidthDesk}
        ${avatarHeightDesk}
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name{
        ${nameTypoDesk}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name span{
        ${namePrefixColor ? `color:${namePrefixColor} !important;` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name a{
        ${nameColor ? `color:${nameColor} !important;` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name a:hover,
      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-3 .zolo-post-item:hover .zolo-post-author-name a{
        ${nameHoverColor ? `color:${nameHoverColor} !important;` : ''}
      }
    .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev:hover {
            border-color: ${navHoverBorderColor} !important;
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskWidth}
            ${navDeskHeight}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev{
            ${navDeskOffsetLeft}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next{
            ${navDeskOffsetRight}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:hover,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev:hover {
            ${navHoverBGStyle}
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:after, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:after {
            color: ${navColor};
            ${navDeskSize}
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev svg {
            fill: ${navColor};
            ${cnavDeskSize}
            ${cnavDeskHSize}
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:hover:after, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:hover:after, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next:hover i, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev:hover i {
            color: ${navHoverColor};
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next:hover svg, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev:hover svg {
            fill: ${navHoverColor};
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullets {
            ${pagSpacingDesktop}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination {
            ${pagBottomSpacingDesktop.replace(/;/g, ' !important;')}
        }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullets .swiper-pagination-bullet {
            ${pagDeskWidth}
            ${pagDeskHeight}
            ${pagBorderStyles}
            ${pagBorderRadiusDesktop}
            ${pagNormalBGStyle}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagDeskWidth}
            ${apagDeskHeight}
            ${apagBorderStyles}
            ${apagBorderRadiusDesktop}
            ${apagNormalBGStyle}
        }
    `;

    const tabletAllStyle = `

    ${
        enableShadow
            ? `
                .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
                    ${shadowRangeTab}
                }
            `
            : ''
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item{
      ${columnTabPadding}
      ${columnTabBGStyle}
      ${columnTabBorderStyle}
      ${columnTabBorderRadius}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
        ${carouselContainerPaddingTab}
    }

     .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item .zolo-post-content{
        ${contentPaddingTab}
      }

    ${
        preset === 'style-4'
            ? `
          .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image .wp-post-image{
            ${thumbnailHeightTab}
            ${thumbBorderRadiusTab}
          }

        `
            : ''
    }

      ${
          preset !== 'style-4'
              ? `
          .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image {
            ${thumbnailHeightTab}
            ${thumbBorderRadiusTab}
          }

        `
              : ''
      }

      ${
          preset === 'style-4'
              ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-wrap::before{
          ${metaArrowSpaceTab}
        }
      `
              : ''
      }

    ${
        preset === 'style-4'
            ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-4 .zolo-post-meta-wrap {
          ${metaBoxWrapPaddingTab}
        }

      `
            : ''
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-title{
      ${titleMarginTab}
      ${titleTypoTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-desc p{
      ${excerptMarginTab}
      ${excerptTypoTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image{
      ${thumbMarginTab}
      ${thumbBgTab}
      ${thumbBorderTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-dateTime{
      ${metaTypoTab}
      ${metaMarginTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category{
      ${catGapTab}
      ${catMarginTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category a{
      ${catTypoTab}
      ${catPaddingTab}
      ${catBorderTab}
      ${catBorderRadiusTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel  .zolo-post-link-btn{
      ${readMoreMarginTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a{
      ${readMoreGapTab}
      ${readMoreTypoTab}
      ${readMorePaddingTab}
      ${readMoreBorderTab}
      ${readMoreBorderRadiusTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box{
      ${authorGapTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box img{
      ${avatarWidthTab}
      ${avatarHeightTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}

    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name{
      ${nameTypoTab}
    }

    .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev{
            ${navTabOffsetLeft}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next{
            ${navTabOffsetRight}
        }

    .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev {
            ${navTabWidth}
            ${navTabHeight}
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:after, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:after {
            ${navTabSize}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev svg {
            ${cnavTabSize}
            ${cnavTabHSize}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
            ${pagSpacingTab}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination {
            ${pagBottomSpacingTab.replace(/;/g, ' !important;')}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }
  `;

    const mobileAllStyle = `

        ${
            enableShadow
                ? `
                .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
                    ${shadowRangeMob}
                }
            `
                : ''
        }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item{
        ${columnMobPadding}
        ${columnMobBGStyle}
        ${columnMobBorderStyle}
        ${columnMobBorderRadius}
      }


    .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .swiper{
        ${carouselContainerPaddingMob}
    }


       .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-item .zolo-post-content{
        ${contentPaddingMob}
      }

      ${
          preset === 'style-4'
              ? `
          .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image .wp-post-image{
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        `
              : ''
      }

      ${
          preset !== 'style-4'
              ? `
          .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image {
            ${thumbnailHeightMob}
            ${thumbBorderRadiusMob}
          }

        `
              : ''
      }

      ${
          preset === 'style-4'
              ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-wrap::before{
          ${metaArrowSpaceMob}
        }
      `
              : ''
      }

    ${
        preset === 'style-4'
            ? `
        .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel.zolo-post-style-4 .zolo-post-meta-wrap {
          ${metaBoxWrapPaddingMob}
        }

      `
            : ''
    }


      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-image{
        ${thumbMarginMob}
        ${thumbBgMob}
        ${thumbBorderMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-dateTime{
        ${metaTypoMob}
        ${metaMarginMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel  .zolo-post-link-btn{
        ${readMoreMarginMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-link-btn a{
        ${readMoreGapMob}
        ${readMoreTypoMob}
        ${readMorePaddingMob}
        ${readMoreBorderMob}
        ${readMoreBorderRadiusMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box{
        ${authorGapMob}
      }

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-meta-box img{
        ${avatarWidthMob}
        ${avatarHeightMob}
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}

      .${uniqueId}.wp-block-zolo-post-carousel.zolo-post-carousel .zolo-post-author-name{
        ${nameTypoMob}
      }

        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev{
            ${navMobOffsetLeft}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next,
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next{
            ${navMobOffsetRight}
        }
      .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev {
            ${navMobWidth}
            ${navMobHeight}
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-next:after, .${uniqueId}.wp-block-zolo-post-carousel .swiper-button-prev:after {
            ${navMobSize}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-post-carousel .swiper-zolo-prev svg {
            ${cnavMobSize}
            ${cnavMobHSize}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
            ${pagSpacingMob}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination {
            ${pagBottomSpacingMob.replace(/;/g, ' !important;')}
        }
        .${uniqueId}.wp-block-zolo-post-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zoloBlock.postCarousel.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zoloBlock.postCarousel.tabAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zoloBlock.postCarousel.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
