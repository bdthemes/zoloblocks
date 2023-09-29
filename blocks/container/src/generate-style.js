import { useEffect } from '@wordpress/element';
/**
 * Internal depencencies
 */
const {
  softMinifyCssStrings,
  generateBorderStyle,
  generateDimensionStyle,
  generateResRangeStyle,
  generateBoxShadowStyles,
  generateNormalBGControlStyles,
  generateResAlignmentStyle,
} = window.zoloModule;

import {
  CONTENT_WIDTH,
  MIN_HEIGHT,
  CONTAINER_WIDTH,
  FLEX_DIRECTION,
  FLEX_WRAP,
  FLEX_JUSTIFY,
  FLEX_ALIGN,
  CONTAINER_BG,
  CONTAINER_BORDER,
  CONTAINER_BORDER_RADIUS,
  CONTAINER_BOX_SHADOW,
  CONTAINER_PADDING,
  CONTAINER_MARGIN,
  ROW_GAP,
  COLUMN_GAP,
} from './constants';
export default function generateStyle({ attributes, setAttributes }) {

  const {
    uniqueId,
    blockStyle
  } = attributes;

  // content
  const {
    desktopRangeStyle: contentDeskWidth,
    tabRangeStyle: contentTabWidth,
    mobRangeStyle: contentMobWidth,
  } = generateResRangeStyle({
    controlName: CONTENT_WIDTH,
    property: 'max-width',
    attributes,
  });

  // container
  const {
    desktopRangeStyle: containerDeskWidth,
    tabRangeStyle: containerTabWidth,
    mobRangeStyle: containerMobWidth,
  } = generateResRangeStyle({
    controlName: CONTAINER_WIDTH,
    property: 'max-width',
    attributes,
  });

  const {
    desktopRangeStyle: containerDeskMinHeight,
    tabRangeStyle: containerTabMinHeight,
    mobRangeStyle: containerMobMinHeight,
  } = generateResRangeStyle({
    controlName: MIN_HEIGHT,
    property: 'min-height',
    attributes,
  });

  const {
    desktopBorderStyle: containerDeskBorderStyle,
    tabBorderStyle: containerTabBorderStyle,
    mobBorderStyle: containerMobBorderStyle,
  } = generateBorderStyle({
    controlName: CONTAINER_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: containerDeskBorderRadius,
    dimensionStylesTab: containerTabBorderRadius,
    dimensionStylesMobile: containerMobBorderRadius,
  } = generateDimensionStyle({
    controlName: CONTAINER_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
    attributes,
    controlName: CONTAINER_BOX_SHADOW,
  });

  const {
    backgroundStylesDesktop: containerDeskBGStyle,
    backgroundStylesTab: containerTabBGStyle,
    backgroundStylesMobile: containerMobBGStyle,
  } = generateNormalBGControlStyles({
    controlName: CONTAINER_BG,
    attributes,
    noMainBGImg: false,
  });

  const {
    dimensionStylesDesktop: containerDeskPadding,
    dimensionStylesTab: containerTabPadding,
    dimensionStylesMobile: containerMobPadding,
  } = generateDimensionStyle({
    controlName: CONTAINER_PADDING,
    styleFor: 'padding',
    attributes,
  });

  const {
    dimensionStylesDesktop: containerDeskMargin,
    dimensionStylesTab: containerTabMargin,
    dimensionStylesMobile: containerMobMargin,
  } = generateDimensionStyle({
    controlName: CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes,
  });

  // row and column
  const {
    desktopRangeStyle: rowDeskGap,
    tabRangeStyle: rowTabGap,
    mobRangeStyle: rowMobGap,
  } = generateResRangeStyle({
    controlName: ROW_GAP,
    property: 'row-gap',
    attributes,
  });

  const {
    desktopRangeStyle: columnDeskGap,
    tabRangeStyle: columnTabGap,
    mobRangeStyle: columnMobGap,
  } = generateResRangeStyle({
    controlName: COLUMN_GAP,
    property: 'column-gap',
    attributes,
  });

  // flex properties
  const {
    desktopAlignmentStyle: flexDirectionDesk,
    tabAlignmentStyle: flexDirectionTab,
    mobAlignmentStyle: flexDirectionMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_DIRECTION,
    attributes,
    property: 'flex-direction',
  });

  const {
    desktopAlignmentStyle: flexWrapDesk,
    tabAlignmentStyle: flexWrapTab,
    mobAlignmentStyle: flexWrapMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_WRAP,
    attributes,
    property: 'flex-wrap',
  });

  const {
    desktopAlignmentStyle: flexJustifyDesk,
    tabAlignmentStyle: flexJustifyTab,
    mobAlignmentStyle: flexJustifyMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_JUSTIFY,
    attributes,
    property: 'justify-content',
  });

  const {
    desktopAlignmentStyle: flexAlignDesk,
    tabAlignmentStyle: flexAlignTab,
    mobAlignmentStyle: flexAlignMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_ALIGN,
    attributes,
    property: 'align-items',
  });


  /**
   * All Style Combination
   */
  const desktopAllStyle = softMinifyCssStrings(`
    .zolo-blocks-container .block-editor-block-list__layout {
        display: flex;
    }
  `);

  const tabletAllStyle = softMinifyCssStrings(`
    .${uniqueId}.zolo-blocks-container{
      color:red;
    }
  `);

  const mobileAllStyle = softMinifyCssStrings(`
    .${uniqueId}.zolo-blocks-container{
      color:red;
    }
  `);

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
  `
  return allStyle;
}
