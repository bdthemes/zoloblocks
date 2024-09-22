import {applyFilters} from '@wordpress/hooks';
import {
  //main slider image
  MAIN_IMG_BORDER,
  MAIN_IMG_BORDER_RADIUS,
  //image content
  IMG_CONTENT_BG,
  IMG_CONTENT_BORDER,
  IMG_CONTENT_BORDER_RADIUS,
  IMG_CONTENT_PADDING,
  IMG_CONTENT_MARGIN,

  TITLE_MARGIN,
  EXCERPT_MARGIN,
  META_SPACE,
  //category
  CAT_GAP,
  CAT_BORDER,
  CAT_BORDER_RADIUS,
  CAT_MARGIN,
  CAT_PADDING,

  //slider navigation
  NAV_WIDTH,
  NAV_HEIGHT,
  NAV_OFFSET_HORIZONTAL,
  NAV_OFFSET_VERTICAL,
  NAV_BORDER,
  NAV_BORDER_RADIUS,
  NAV_BG,
  NAV_HOVER_BG,
  NAV_ICON_SIZE,
  //thumbs
  THUMB_HEIGHT,
  THUMB_BORDER,
  THUMB_BORDER_RADIUS,
  LINE_HEIGHT,
  PLAY_BTN_SIZE,
  PLAY_BTN_ICON_SIZE,
  PLAY_BTN_BG,
  PLAY_BTN_BORDER,
  PLAY_BTN_BORDER_RADIUS,
  PLAY_BTN_HOVER_BG,
} from './constants';

import {
  TITLE_TYPOGRAPHY,
  EXCERPT_TYPOGRAPHY,
  META_TYPOGRAPHY,
  CAT_TYPOGRAPHY,
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

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
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
    navColor,
    navHoverColor,
    navHoverBorderColor,
    //thumbs
    lineColor,
    playBtnIconColor,
    playBtnIconHoverColor,
  } = attributes;

  //main slider image
  const {
    desktopBorderStyle: mainImgBorderDesk,
    tabBorderStyle: mainImgBorderTab,
    mobBorderStyle: mainImgBorderMob,
  } = generateBorderStyle({
    controlName: MAIN_IMG_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: mainImgBorderRadiusDesk,
    dimensionStylesTab: mainImgBorderRadiusTab,
    dimensionStylesMobile: mainImgBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: MAIN_IMG_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const {
    backgroundStylesDesktop: imgContentBGDesk,
    backgroundStylesTab: imgContentBGTab,
    backgroundStylesMobile: imgContentBGMob,
  } = generateNormalBGControlStyles({
    controlName: IMG_CONTENT_BG,
    attributes,
    noMainBGImg: true,
  });

  const {
    desktopBorderStyle: imgContentBorderDesk,
    tabBorderStyle: imgContentBorderTab,
    mobBorderStyle: imgContentBorderMob,
  } = generateBorderStyle({
    controlName: IMG_CONTENT_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: imgContentBorderRadiusDesk,
    dimensionStylesTab: imgContentBorderRadiusTab,
    dimensionStylesMobile: imgContentBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: IMG_CONTENT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const {
    dimensionStylesDesktop: imgContentPaddingDesk,
    dimensionStylesTab: imgContentPaddingTab,
    dimensionStylesMobile: imgContentPaddingMob,
  } = generateDimensionStyle({
    controlName: IMG_CONTENT_PADDING,
    styleFor: 'padding',
    attributes,
  });

  const {
    dimensionStylesDesktop: imgContentMarginDesk,
    dimensionStylesTab: imgContentMarginTab,
    dimensionStylesMobile: imgContentMarginMob,
  } = generateDimensionStyle({
    controlName: IMG_CONTENT_MARGIN,
    styleFor: 'margin',
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
    desktopRangeStyle: metaSpaceDesk,
    tabRangeStyle: metaSpaceTab,
    mobRangeStyle: metaSpaceMob,
  } = generateResRangeStyle({
    controlName: META_SPACE,
    property: 'gap',
    attributes,
  });
  //category
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
    desktopBorderStyle: navBorderDesk,
    tabBorderStyle: navBorderTab,
    mobBorderStyle: navBorderMob,
  } = generateBorderStyle({
    controlName: NAV_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: navBorderRadiusDesk,
    dimensionStylesTab: navBorderRadiusTab,
    dimensionStylesMobile: navBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: NAV_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const {
    backgroundStylesDesktop: navNormalBGDesk,
    backgroundStylesTab: navNormalBGTab,
    backgroundStylesMobile: navNormalBGMob,
  } = generateNormalBGControlStyles({
    controlName: NAV_BG,
    attributes,
    noMainBGImg: true,
  });

  const {
    backgroundStylesDesktop: navHoverBGDesk,
    backgroundStylesTab: navHoverBGTab,
    backgroundStylesMobile: navHoverBGMob,
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

  //thumbs style
  const {
    desktopRangeStyle: thumbHeightDesk,
    tabRangeStyle: thumbHeightTab,
    mobRangeStyle: thumbHeightMob,
  } = generateResRangeStyle({
    controlName: THUMB_HEIGHT,
    property: 'height',
    attributes,
  });
  const {
    desktopBorderStyle: thumbBorderDesk,
    tabBorderStyle: thumbBorderTab,
    mobBorderStyle: thumbBorderMob,
  } = generateBorderStyle({
    controlName: THUMB_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: thumbBorderRadiusDesk,
    dimensionStylesTab: thumbBorderRadiusTab,
    dimensionStylesMobile: thumbBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: THUMB_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {
    desktopRangeStyle: lineHeightDesk,
    tabRangeStyle: lineHeightTab,
    mobRangeStyle: lineHeightMob,
  } = generateResRangeStyle({
    controlName: LINE_HEIGHT,
    property: 'height',
    attributes,
  });

  const {
    dimensionStylesDesktop: playBtnSizeDesk,
    dimensionStylesTab: playBtnSizeTab,
    dimensionStylesMobile: playBtnSizeMob,
  } = generateDimensionStyle({
    controlName: PLAY_BTN_SIZE,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopRangeStyle: playBtnISizeDesk,
    tabRangeStyle: playBtnISizeTab,
    mobRangeStyle: playBtnISizeMob,
  } = generateResRangeStyle({
    controlName: PLAY_BTN_ICON_SIZE,
    property: 'width',
    attributes,
  });
  const {
    desktopRangeStyle: playBtnIHSizeDesk,
    tabRangeStyle: playBtnIHSizeTab,
    mobRangeStyle: playBtnIHSizeMob,
  } = generateResRangeStyle({
    controlName: PLAY_BTN_ICON_SIZE,
    property: 'height',
    attributes,
  });
  const {
    backgroundStylesDesktop: playBtnBGDesk,
    backgroundStylesTab: playBtnBGTab,
    backgroundStylesMobile: playBtnBGMob,
  } = generateNormalBGControlStyles({
    controlName: PLAY_BTN_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: playBtnBorderDesk,
    tabBorderStyle: playBtnBorderTab,
    mobBorderStyle: playBtnBorderMob,
  } = generateBorderStyle({
    controlName: PLAY_BTN_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: playBtnBorderRadiusDesk,
    dimensionStylesTab: playBtnBorderRadiusTab,
    dimensionStylesMobile: playBtnBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: PLAY_BTN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const {
    backgroundStylesDesktop: playBtnHoverBGDesk,
    backgroundStylesTab: playBtnHoverBGTab,
    backgroundStylesMobile: playBtnHoverBGMob,
  } = generateNormalBGControlStyles({
    controlName: PLAY_BTN_HOVER_BG,
    attributes,
    noMainBGImg: true,
  });


  /**
   * All Style Combination
   */
  const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-main-slider .zolo-post-image-wrap{
        ${mainImgBorderDesk}
        ${mainImgBorderRadiusDesk}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-content{
        ${imgContentBGDesk}
        ${imgContentBorderDesk}
        ${imgContentBorderRadiusDesk}
        ${imgContentPaddingDesk}
        ${imgContentMarginDesk}
      }

     .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-title{
        ${titleMarginDesk}
        ${titleTypoDesk}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-title a{
        ${titleColor ? `color:${titleColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-title a:hover{
        ${titleHoverColor ? `color:${titleHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-desc p{
        ${excerptMarginDesk}
        ${excerptTypoDesk}
        ${excerptColor ? `color:${excerptColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-meta{
        ${metaTypoDesk}
        ${metaSpaceDesk}
        ${metaColor ? `color:${metaColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-meta .zolo-post-author-name:hover{
        ${metaHColor ? `color:${metaHColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category{
        ${catGapDesk}
        ${catMarginDesk}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category a{
        ${catTypoDesk}
        ${catPaddingDesk}
        ${catBorderDesk}
        ${catBorderRadiusDesk}
        ${catColor ? `color:${catColor};` : ''}
        ${catBgColor ? `background-color:${catBgColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category a:hover{
        ${catHoverColor ? `color:${catHoverColor};` : ''}
        ${catBgHoverColor ? `background-color:${catBgHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover {
         ${navHoverBorderColor ? `border-color: ${navHoverBorderColor} !important;` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev {
          ${navBorderDesk}
          ${navBorderRadiusDesk}
          ${navNormalBGDesk}
          ${navDeskWidth}
          ${navDeskHeight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev{
          ${navDeskOffsetLeft}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next{
          ${navDeskOffsetRight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover {
          ${navHoverBGDesk}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:after,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:after {
          ${navColor ? `color: ${navColor};` : ''}
          ${navDeskSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next svg,
       .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev svg {
          ${navColor ? `fill: ${navColor};` : ''}
          ${cnavDeskSize}
          ${cnavDeskHSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:hover:after,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:hover:after,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover i,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover i {
          ${navHoverColor ? `color: ${navHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover svg,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover svg {
        ${navHoverColor ? `fill: ${navHoverColor};` : ''}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap{
        ${thumbHeightDesk}
        ${thumbBorderDesk}
        ${thumbBorderRadiusDesk}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-item:before{
        ${lineHeightDesk}
        ${lineColor ? `background-color:${lineColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a{
        ${playBtnSizeDesk}
        ${playBtnBGDesk}
        ${playBtnBorderDesk}
        ${playBtnBorderRadiusDesk}
        ${playBtnIconColor ? `color:${playBtnIconColor}` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a svg{
        ${playBtnISizeDesk}
        ${playBtnIHSizeDesk}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a:hover{
        ${playBtnHoverBGDesk}
        ${playBtnIconHoverColor ? `color:${playBtnIconHoverColor}` : ''}
      }
    `;

  const tabletAllStyle = `
    .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-main-slider .zolo-post-image-wrap{
        ${mainImgBorderTab}
        ${mainImgBorderRadiusTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-content{
        ${imgContentBGTab}
        ${imgContentBorderTab}
        ${imgContentBorderRadiusTab}
        ${imgContentPaddingTab}
        ${imgContentMarginTab}
      }

     .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-title{
        ${titleMarginTab}
        ${titleTypoTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-desc p{
        ${excerptMarginTab}
        ${excerptTypoTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-meta{
        ${metaTypoTab}
        ${metaSpaceTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category{
        ${catGapTab}
        ${catMarginTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category a{
        ${catTypoTab}
        ${catPaddingTab}
        ${catBorderTab}
        ${catBorderRadiusTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev {
          ${navBorderTab}
          ${navBorderRadiusTab}
          ${navNormalBGTab}
          ${navTabWidth}
          ${navTabHeight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev{
          ${navTabOffsetLeft}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next{
          ${navTabOffsetRight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover {
          ${navHoverBGTab}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:after,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:after {
          ${navTabSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next svg,
       .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev svg {
          ${cnavTabSize}
          ${cnavTabHSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap{
        ${thumbHeightTab}
        ${thumbBorderTab}
        ${thumbBorderRadiusTab}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-item:before{
        ${lineHeightTab}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a{
        ${playBtnSizeTab}
        ${playBtnBGTab}
        ${playBtnBorderTab}
        ${playBtnBorderRadiusTab}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a svg{
        ${playBtnISizeTab}
        ${playBtnIHSizeTab}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a:hover{
        ${playBtnHoverBGTab}
      }
  `;

  const mobileAllStyle = `
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-main-slider .zolo-post-image-wrap{
        ${mainImgBorderMob}
        ${mainImgBorderRadiusMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-content{
        ${imgContentBGMob}
        ${imgContentBorderMob}
        ${imgContentBorderRadiusMob}
        ${imgContentPaddingMob}
        ${imgContentMarginMob}
      }

     .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-title{
        ${titleMarginMob}
        ${titleTypoMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-desc p{
        ${excerptMarginMob}
        ${excerptTypoMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-meta{
        ${metaTypoMob}
        ${metaSpaceMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category{
        ${catGapMob}
        ${catMarginMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-post-category a{
        ${catTypoMob}
        ${catPaddingMob}
        ${catBorderMob}
        ${catBorderRadiusMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev {
          ${navBorderMob}
          ${navBorderRadiusMob}
          ${navNormalBGMob}
          ${navMobWidth}
          ${navMobHeight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev{
          ${navMobOffsetLeft}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next{
          ${navMobOffsetRight}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next:hover,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev:hover {
          ${navHoverBGMob}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-next:after,
      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-button-prev:after {
          ${navMobSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-next svg,
       .${uniqueId}.wp-block-zolo-post-video-slider .swiper-zolo-prev svg {
          ${cnavMobSize}
          ${cnavMobHSize}
      }

      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap{
        ${thumbHeightMob}
        ${thumbBorderMob}
        ${thumbBorderRadiusMob}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-item:before{
        ${lineHeightMob}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a{
        ${playBtnSizeMob}
        ${playBtnBGMob}
        ${playBtnBorderMob}
        ${playBtnBorderRadiusMob}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a svg{
        ${playBtnISizeMob}
        ${playBtnIHSizeMob}
      }
      .${uniqueId}.wp-block-zolo-post-video-slider.zolo-block .zolo-thumbs-slider .zolo-post-image-wrap .zolo-video-button a:hover{
        ${playBtnHoverBGMob}
      }

    `;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zoloBlock.postVideoSlider.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zoloBlock.postVideoSlider.tabAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zoloBlock.postVideoSlider.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
