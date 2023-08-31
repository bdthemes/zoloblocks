import { useEffect } from '@wordpress/element';
import {
  GRID_COLUMNS,
  COLUMNS_GAP,
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
  WRAPPER_MARGIN,
  WRAPPER_PADDING,
  WRAPPER_BG,
  WRAPPER_BORDER,
  WRAPPER_SHADOW,
} from './constants';
import { TITLE_TYPOGRAPHY, EXCERPT_TYPOGRAPHY } from './constants/typoPrefixConstant';
const {
  generateDimensionStyle,
  generateResRangeStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateBackgroundControlStyles,
  generateTypographyStyles,
  generateResCounterStyle
} = window.zoloModule;

function styles({ attributes, setAttributes }) {
  const {
    uniqueId,
    blockStyle,
    titleColor,
    titleHoverColor,
    excerptColor
  } = attributes;


  const {
    desktopRangeStyle: columnCountDesk,
    tabRangeStyle: columnCountTab,
    mobRangeStyle: columnCountMob,
  } = generateResCounterStyle({
    controlName: GRID_COLUMNS,
    attributes,
    noProperty: true,
  });

  const {
    desktopRangeStyle: colGapDesk,
    tabRangeStyle: colGapTab,
    mobRangeStyle: colGapMob,
  } = generateResRangeStyle({
    controlName: COLUMNS_GAP,
    property: 'grid-gap',
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
    defaultFontSize: 22,
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


  //wrapper style generate
  const {
    dimensionStylesDesktop: wrapperMarginDesktop,
    dimensionStylesTab: wrapperMarginTab,
    dimensionStylesMobile: wrapperMarginMobile,
  } = generateDimensionStyle({
    controlName: WRAPPER_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const {
    dimensionStylesDesktop: wrapperPaddingDesktop,
    dimensionStylesTab: wrapperPaddingTab,
    dimensionStylesMobile: wrapperPaddingMobile,
  } = generateDimensionStyle({
    controlName: WRAPPER_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
    backgroundStylesTab: wrapperBackgroundStylesTab,
    hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
    backgroundStylesMobile: wrapperBackgroundStylesMobile,
    hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
    overlayStylesDesktop: wrapperOverlayStylesDesktop,
    hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
    overlayStylesTab: wrapperOverlayStylesTab,
    hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
    overlayStylesMobile: wrapperOverlayStylesMobile,
    hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
  } = generateBackgroundControlStyles({
    attributes,
    controlName: WRAPPER_BG,
  });

  const {
    boxShadowStyle: wrapperShadow,
    hoverBoxShadowstyle: wrapperHoverShadow,
    transitionStyle: wrapperShadowTransition,
  } = generateBoxShadowStyles({
    attributes,
    controlName: WRAPPER_SHADOW,
  });

  const {
    desktopBorderStyle: wrapperBorderDesktop,
    tabBorderStyle: wrapperBorderTab,
    mobBorderStyle: wrapperBorderMob,
  } = generateBorderStyle({
    attributes,
    controlName: WRAPPER_BORDER,
  });


  /**
   * All Style Combination
   */
  const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${wrapperMarginDesktop}
        ${wrapperPaddingDesktop}
        ${wrapperBackgroundStylesDesktop}
        ${wrapperBorderDesktop}
        ${wrapperShadow}
      }
     .${uniqueId}.wp-block-zolo-post-grid:hover{
        ${wrapperHoverBackgroundStylesDesktop}
        ${wrapperHoverShadow}
      }
     .${uniqueId}.wp-block-zolo-post-grid::before{
          ${wrapperOverlayStylesDesktop}
      }
     .${uniqueId}.wp-block-zolo-post-grid:hover::before{
        ${wrapperHoverOverlayStylesDesktop}
      }

      .${uniqueId}.wp-block-zolo-post-grid.zolo-post-wrap{
        grid-template-columns:repeat(${columnCountDesk}, 1fr);
        ${colGapDesk}
      }
      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-item{
        ${columnDeskPadding}
        ${columnDeskBGStyle}
        ${columnDeskBorderStyle}
        ${columnDeskBorderRadius}
        ${columnBoxShadow}
      }

      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }
      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-title a:hover{
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-grid .zolo-post-image{
        ${thumbMarginDesk}
        ${thumbPaddingDesk}
        ${thumbBgDesk}
        ${thumbBorderDesk}
        ${thumbBorderRadiusDesk}
        ${thumbBoxShadow}
      }

    `;

  const tabletAllStyle = `

    `;

  const mobileAllStyle = `


    `;


  // Set All Style in "blockStyle" Attribute
  useEffect(() => {
    const styles = {
      desktop: desktopAllStyle,
      tablet: tabletAllStyle,
      mobile: mobileAllStyle,
    };
    if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
      setAttributes({ blockStyle: styles });
    }
  }, [attributes]);

  const allStyle = `
      ${desktopAllStyle}
      @media all and (max-width: 1024px) {
        ${tabletAllStyle}
      }
      @media all and (max-width: 767px) {
        ${mobileAllStyle}
      }
    `;

  return allStyle;
}

export default styles;
