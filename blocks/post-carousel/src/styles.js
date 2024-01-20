import {
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
    META_SPACE,
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
        readMoreBgColor,
        readMoreColor,
        readMoreBgHoverColor,
        readMoreHoverColor,
        namePrefixColor,
        nameColor,
        nameHoverColor,
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.zolo-post-grid-wrap{
        ${colGapDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-dateTime, .${uniqueId}.zolo-post-grid-wrap .zolo-post-secount-dateTime {
        ${metaSpaceDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item{
        background: none !important;
      }

      .${uniqueId}.zolo-post-grid-wrap.zolo-post-style-3 .zolo-post-item .zolo-post-image::after{
        ${columnDeskBGStyle}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
        ${thumbnailHeightDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-title a:hover{
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginDesk}

        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBorderRadiusDesk}
        ${thumbBoxShadow}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoDesk}
        ${metaMarginDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-category a:hover{
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapDesk}
        ${readMoreTypoDesk}
        ${readMorePaddingDesk}
        ${readMoreBorderDesk}
        ${readMoreBorderRadiusDesk}
        ${readMoreColor ? `color:${readMoreColor};` : ''}
        ${readMoreBgColor ? `background-color:${readMoreBgColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-link-btn a:hover{
        ${readMoreHoverColor ? `color:${readMoreHoverColor};` : ''}
        ${readMoreBgHoverColor ? `background-color:${readMoreBgHoverColor};` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthDesk}
        ${avatarHeightDesk}
        ${avatarBorderDesk}
        ${avatarBorderRadiusDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoDesk}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name span{
        ${namePrefixColor ? `color:${namePrefixColor} !important;` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name a{
        ${nameColor ? `color:${nameColor} !important;` : ''}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name a:hover{
        ${nameHoverColor ? `color:${nameHoverColor} !important;` : ''}
      }

    `;

    const tabletAllStyle = `
    .${uniqueId}.zolo-post-grid-wrap{
      ${colGapTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-item{
      ${columnTabPadding}
      ${columnTabBGStyle}
      ${columnTabBorderStyle}
      ${columnTabBorderRadius}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
      ${thumbnailHeightTab}
    }


    .${uniqueId}.zolo-post-grid-wrap .zolo-post-title{
      ${titleMarginTab}
      ${titleTypoTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-desc p{
      ${excerptMarginTab}
      ${excerptTypoTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
      ${thumbMarginTab}
      ${thumbBgTab}
      ${thumbBorderTab}
      ${thumbBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-dateTime{
      ${metaTypoTab}
      ${metaMarginTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-category{
      ${catGapTab}
      ${catMarginTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-category a{
      ${catTypoTab}
      ${catPaddingTab}
      ${catBorderTab}
      ${catBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-grid-wrap  .zolo-post-link-btn{
      ${readMoreMarginTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-link-btn a{
      ${readMoreGapTab}
      ${readMoreTypoTab}
      ${readMorePaddingTab}
      ${readMoreBorderTab}
      ${readMoreBorderRadiusTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box{
      ${authorGapTab}
    }

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box img{
      ${avatarWidthTab}
      ${avatarHeightTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}

    .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name{
      ${nameTypoTab}
    }
  `;

    const mobileAllStyle = `
      .${uniqueId}.zolo-post-grid-wrap{
        ${colGapMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-item{
        ${columnMobPadding}
        ${columnMobBGStyle}
        ${columnMobBorderStyle}
        ${columnMobBorderRadius}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
        ${thumbnailHeightMob}
      }


      .${uniqueId}.zolo-post-grid-wrap .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-image{
        ${thumbMarginMob}
        ${thumbBgMob}
        ${thumbBorderMob}
        ${thumbBorderRadiusMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-dateTime{
        ${metaTypoMob}
        ${metaMarginMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.zolo-post-grid-wrap  .zolo-post-link-btn{
        ${readMoreMarginMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-link-btn a{
        ${readMoreGapMob}
        ${readMoreTypoMob}
        ${readMorePaddingMob}
        ${readMoreBorderMob}
        ${readMoreBorderRadiusMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box{
        ${authorGapMob}
      }

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-meta-box img{
        ${avatarWidthMob}
        ${avatarHeightMob}
        ${avatarBorderMob}
        ${avatarBorderRadiusMob}

      .${uniqueId}.zolo-post-grid-wrap .zolo-post-author-name{
        ${nameTypoMob}
      }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
}

export default Style;
