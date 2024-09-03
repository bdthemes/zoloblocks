import { applyFilters } from '@wordpress/hooks';

import {
    //timeline
    LINE_WIDTH,
    NUMBER_BG,
    NUMBER_HOVER_BG,
    NUMBER_BORDER_RADIUS,
    START_END_BG,
    START_END_BORDER_RADIUS,
    //items
    ITEM_GAP,
    ITEM_OFFSET,
    ITEM_PADDING,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_SHADOW,
    //thumbnail
    THUMBNAIL_BORDER,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_SPACING,
    //title
    TITLE_SPACING,
    TITLE_TEXT_SHADOW,
    //excerpt
    EXCERPT_MARGIN,
    DATE_SPACING,
    //pagination
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_MARGIN,
    PAG_ALIGN,
    PAG_PADDING,
    META_SPACE,
    NUMBER_BG_SIZE,
    START_END_BG_SIZE,
} from './constants';

import {
    NUMBER_TYPOGRAPHY,
    START_END_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
    EXCERPT_TYPOGRAPHY,
    DATE_TYPOGRAPHY,
    META_TYPOGRAPHY,
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
    generateResAlignmentStyle,
    generateGapStyle,
    generateTextShadowStyles,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        //timeline
        lineStyle,
        lineColor,
        numberColor,
        numberHoverColor,
        numberHoverBColor,
        startEndColor,
        //title
        titleColor,
        titleHoverColor,
        excerptColor,
        dateColor,
        metaColor,
        categoryHoverColor,
        //pagination
        pagColor,
        pagBgColor,
        apagColor,
        apagBgColor,
        pagSeparatorColor,
    } = attributes;
    //timeline
    const {
        desktopRangeStyle: lineWidthDesk,
        tabRangeStyle: lineWidthTab,
        mobRangeStyle: lineWidthMob,
    } = generateResRangeStyle({
        controlName: LINE_WIDTH,
        noProperty: true,
        attributes,
    });
    const {
        typoStylesDesktop: numberTypoDesk,
        typoStylesTab: numberTypoTab,
        typoStylesMobile: numberTypoMob,
    } = generateTypographyStyles({
        prefixConstant: NUMBER_TYPOGRAPHY,
        attributes,
    });
    const {
        backgroundStylesDesktop: numberBGDesk,
        backgroundStylesTab: numberBGTab,
        backgroundStylesMobile: numberBGMob,
    } = generateNormalBGControlStyles({
        controlName: NUMBER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        backgroundStylesDesktop: numberHoverBGDesk,
        backgroundStylesTab: numberHoverBGTab,
        backgroundStylesMobile: numberHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: NUMBER_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: numberBRadiusDesk,
        dimensionStylesTab: numberBRadiusTab,
        dimensionStylesMobile: numberBRadiusMob,
    } = generateDimensionStyle({
        controlName: NUMBER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        typoStylesDesktop: startEndTypoDesk,
        typoStylesTab: startEndTypoTab,
        typoStylesMobile: startEndTypoMob,
    } = generateTypographyStyles({
        prefixConstant: START_END_TYPOGRAPHY,
        attributes,
    });
    const {
        backgroundStylesDesktop: startEndBGDesk,
        backgroundStylesTab: startEndBGTab,
        backgroundStylesMobile: startEndBGMob,
    } = generateNormalBGControlStyles({
        controlName: START_END_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: startEndBRadiusDesk,
        dimensionStylesTab: startEndBRadiusTab,
        dimensionStylesMobile: startEndBRadiusMob,
    } = generateDimensionStyle({
        controlName: START_END_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    //Items
    const {
        gapStylesDesktop: itemGapDesk,
        gapStylesTab: itemGapTab,
        gapStylesMobile: itemGapMob,
    } = generateGapStyle({
        controlName: ITEM_GAP,
        attributes,
    });
    const {
        desktopRangeStyle: itemOffsetDesk,
        tabRangeStyle: itemOffsetTab,
        mobRangeStyle: itemOffsetMob,
    } = generateResRangeStyle({
        controlName: ITEM_OFFSET,
        property: 'margin-top',
        attributes,
    });
    const {
        desktopRangeStyle: itemOffsetBottomDesk,
        tabRangeStyle: itemOffsetBottomTab,
        mobRangeStyle: itemOffsetBottomMob,
    } = generateResRangeStyle({
        controlName: ITEM_OFFSET,
        property: 'margin-bottom',
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
        dimensionStylesDesktop: itemBRadiusDesk,
        dimensionStylesTab: itemBRadiusTab,
        dimensionStylesMobile: itemBRadiusMob,
    } = generateDimensionStyle({
        controlName: ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_SHADOW,
    });

    //thumbnail
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
    const {
        desktopRangeStyle: thumbSpacingDesk,
        tabRangeStyle: thumbSpacingTab,
        mobRangeStyle: thumbSpacingMob,
    } = generateResRangeStyle({
        controlName: THUMBNAIL_SPACING,
        property: 'margin-bottom',
        attributes,
    });

    //title
    const {
        desktopRangeStyle: titleSpacingDesk,
        tabRangeStyle: titleSpacingTab,
        mobRangeStyle: titleSpacingMob,
    } = generateResRangeStyle({
        controlName: TITLE_SPACING,
        property: 'margin-bottom',
        attributes,
    });
    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });
    const { textShadowStyle: titleTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });
    //excerpt
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
        desktopRangeStyle: dateSpaceDesk,
        tabRangeStyle: dateSpaceTab,
        mobRangeStyle: dateSpaceMob,
    } = generateResRangeStyle({
        controlName: DATE_SPACING,
        property: 'margin-bottom',
        attributes,
    });

    // meta
    const {
        typoStylesDesktop: metaTypoDesk,
        typoStylesTab: metaTypoTab,
        typoStylesMobile: metaTypoMob,
    } = generateTypographyStyles({
        prefixConstant: META_TYPOGRAPHY,
        attributes,
    });
    const {
        desktopRangeStyle: metaGapDesk,
        tabRangeStyle: metaGapTab,
        mobRangeStyle: metaGapMob,
    } = generateResRangeStyle({
        controlName: META_SPACE,
        property: 'gap',
        attributes,
    });
    const {
        desktopRangeStyle: metaSpaceLeftDesk,
        tabRangeStyle: metaSpaceLeftTab,
        mobRangeStyle: metaSpaceLeftMob,
    } = generateResRangeStyle({
        controlName: META_SPACE,
        property: 'margin-left',
        attributes,
    });
    const {
        desktopRangeStyle: metaSpaceRightDesk,
        tabRangeStyle: metaSpaceRightTab,
        mobRangeStyle: metaSpaceRightMob,
    } = generateResRangeStyle({
        controlName: META_SPACE,
        property: 'margin-right',
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

    const {
        desktopRangeStyle: numberBGSizeDesk,
        tabRangeStyle: numberBGSizeTab,
        mobRangeStyle: numberBGSizeMob,
    } = generateResRangeStyle({
        controlName: NUMBER_BG_SIZE,
        property: '--zolo-post-timeline-counter-height-width',
        attributes,
    });

    const {
        desktopRangeStyle: startEndBGSizeDesk,
        tabRangeStyle: startEndBGSizeTab,
        mobRangeStyle: startEndBGSizeMob,
    } = generateResRangeStyle({
        controlName: START_END_BG_SIZE,
        property: '--zolo-post-timeline-start-end-height-width',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap{
        ${lineStyle ? `--zolo-post-timeline-line-style:${lineStyle};` : ''}
        ${lineColor ? `--zolo-post-timeline-line-color:${lineColor};` : ''}
        ${lineWidthDesk ? `--zolo-post-timeline-line-width:${lineWidthDesk};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-counter::before{
        ${numberTypoDesk}
        ${numberBGDesk}
        ${numberBRadiusDesk}
        ${numberColor ? `color:${numberColor};` : ''}
      }

      .${uniqueId}.zolo-block.zolo-post-timeline-wrap {
        ${numberBGSizeDesk}
        ${startEndBGSizeDesk}
      }

      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content-wrap:hover .zolo-counter::before{
        ${numberHoverBGDesk}
        ${numberHoverColor ? `color:${numberHoverColor};` : ''}
        ${numberHoverBColor ? `border-color:${numberHoverBColor};` : ''}
      }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-start-end-wrap .zolo-se-text{
          ${startEndTypoDesk}
          ${startEndBGDesk}
          ${startEndBRadiusDesk}
          ${startEndColor ? `color:${startEndColor};` : ''}
       }

       ${
           preset === 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-item:not(:first-child){
            ${itemOffsetDesk}
            ${itemOffsetBottomDesk}
          }
       `
               : ''
       }

       ${
           preset !== 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid{
            ${itemGapDesk}
          }
       `
               : ''
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content{
          ${itemPaddingDesk}
          ${itemBGDesk}
          ${itemBorderDesk}
          ${itemBRadiusDesk}
          ${itemBoxShadow}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image{
          ${thumbSpacingDesk}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image a img{
          ${thumbBorderDesk}
          ${thumbBorderRadiusDesk}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-title{
        ${titleSpacingDesk}
        ${titleTypoDesk}
        ${titleTextShadow}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-title a:hover{
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-desc p{
         ${excerptTypoDesk}
         ${excerptMarginDesk}
         ${excerptColor ? `color:${excerptColor};` : ''}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-date{
          ${dateTypoDesk}
          ${dateSpaceDesk}
          ${dateColor ? `color:${dateColor};` : ''}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta{
          ${metaTypoDesk}
          ${metaColor ? `color:${metaColor};` : ''}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta > div:before{
          ${metaSpaceLeftDesk}
          ${metaSpaceRightDesk}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta a{
          ${metaColor ? `color:${metaColor};` : ''}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-category{
          ${metaGapDesk}
        }

      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-category a:hover{
        ${categoryHoverColor ? `color:${categoryHoverColor};` : ''}
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
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap{
        ${lineWidthTab ? `--zolo-post-timeline-line-width:${lineWidthTab};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-counter::before{
        ${numberTypoTab}
        ${numberBGTab}
        ${numberBRadiusTab}
      }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content-wrap:hover .zolo-counter::before{
        ${numberHoverBGTab}
      }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-start-end-wrap .zolo-se-text{
          ${startEndTypoTab}
          ${startEndBGTab}
          ${startEndBRadiusTab}
       }

      .${uniqueId}.zolo-block.zolo-post-timeline-wrap {
        ${numberBGSizeTab}
        ${startEndBGSizeTab}
      }

       ${
           preset === 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-item:not(:first-child){
            ${itemOffsetTab}
            ${itemOffsetBottomTab}
          }
       `
               : ''
       }

       ${
           preset !== 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid{
            ${itemGapTab}
          }
       `
               : ''
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content{
          ${itemPaddingTab}
          ${itemBGTab}
          ${itemBorderTab}
          ${itemBRadiusTab}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image{
          ${thumbSpacingTab}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image a img{
          ${thumbBorderTab}
          ${thumbBorderRadiusTab}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-title{
        ${titleSpacingTab}
        ${titleTypoTab}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-desc p{
         ${excerptTypoTab}
         ${excerptMarginTab}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-date{
          ${dateTypoTab}
          ${dateSpaceTab}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta{
          ${metaTypoTab}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta > div:before{
          ${metaSpaceLeftTab}
          ${metaSpaceRightTab}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-category{
          ${metaGapTab}
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
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap{
        ${lineWidthMob ? `--zolo-post-timeline-line-width:${lineWidthMob};` : ''}
      }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-counter::before{
        ${numberTypoMob}
        ${numberBGMob}
        ${numberBRadiusMob}
      }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content-wrap:hover .zolo-counter::before{
        ${numberHoverBGMob}
      }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-start-end-wrap .zolo-se-text{
          ${startEndTypoMob}
          ${startEndBGMob}
          ${startEndBRadiusMob}
       }
      .${uniqueId}.zolo-block.zolo-post-timeline-wrap {
        ${numberBGSizeMob}
        ${startEndBGSizeMob}}
      }

       ${
           preset === 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-item:not(:first-child){
            ${itemOffsetMob}
            ${itemOffsetBottomMob}
          }
       `
               : ''
       }

       ${
           preset !== 'style-3'
               ? `
          .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid{
            ${itemGapMob}
          }
       `
               : ''
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-content{
          ${itemPaddingMob}
          ${itemBGMob}
          ${itemBorderMob}
          ${itemBRadiusMob}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image{
          ${thumbSpacingMob}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-image a img{
          ${thumbBorderMob}
          ${thumbBorderRadiusMob}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-title{
        ${titleSpacingMob}
        ${titleTypoMob}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-desc p{
         ${excerptTypoMob}
         ${excerptMarginMob}
       }
       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-date{
          ${dateTypoMob}
          ${dateSpaceMob}
       }

       .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta{
          ${metaTypoMob}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-meta > div:before{
          ${metaSpaceLeftMob}
          ${metaSpaceRightMob}
        }
        .${uniqueId}.zolo-block.zolo-post-timeline-wrap .zolo-post-timeline-grid .zolo-post-category{
          ${metaGapMob}
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
                desktopAllStyle={applyFilters('zolo.postTimeline.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.postTimeline.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.postTimeline.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
