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
export default function generateStyle({ attributes, setAttributes, clientId }) {

  const {
    uniqueId,
    blockStyle,
    isBlockRootParent,
    containerWidthType,
    contentWidthType
  } = attributes;

  // content boxed width
  const {
    desktopRangeStyle: contentDeskWidth,
    tabRangeStyle: contentTabWidth,
    mobRangeStyle: contentMobWidth,
  } = generateResRangeStyle({
    controlName: CONTENT_WIDTH,
    property: 'max-width',
    attributes,
  });

  // custom container
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

  //spacing style
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
    desktopAlignStyle: flexDirectionDesk,
    tabAlignStyle: flexDirectionTab,
    mobAlignStyle: flexDirectionMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_DIRECTION,
    property: 'flex-direction',
    attributes,
  });

  const {
    desktopAlignStyle: flexWrapDesk,
    tabAlignStyle: flexWrapTab,
    mobAlignStyle: flexWrapMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_WRAP,
    property: 'flex-wrap',
    attributes,
  });

  const {
    desktopAlignStyle: flexJustifyDesk,
    tabAlignStyle: flexJustifyTab,
    mobAlignStyle: flexJustifyMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_JUSTIFY,
    property: 'justify-content',
    attributes,
  });

  const {
    desktopAlignStyle: flexAlignDesk,
    tabAlignStyle: flexAlignTab,
    mobAlignStyle: flexAlignMob,
  } = generateResAlignmentStyle({
    controlName: FLEX_ALIGN,
    property: 'align-items',
    attributes,
  });


  /**
   * All Style Combination
   */

  let editorFlexSelector = '.wp-block-zolo-container > .zolo-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
  let flexSelector = '.wp-block-zolo-container.zolo-root-container.alignfull > .zolo-container-inner-blocks-wrap';

  if (!isBlockRootParent || 'alignfull' !== containerWidthType || 'alignwide' !== contentWidthType) {
    editorFlexSelector = '.wp-block-zolo-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
    flexSelector = '.wp-block-zolo-container.frontend';
  }

  const desktopAllStyle = softMinifyCssStrings(`

    .${uniqueId}.block-editor-block-list__block.wp-block-zolo-container > .zolo-container-inner-blocks-wrap,
    .wp-block-zolo-container.zolo-root-container.alignfull.${uniqueId} > .zolo-container-inner-blocks-wrap{
      ${contentDeskWidth}
    }

    ${'custom_width' === containerWidthType ? `
      #block-${clientId}.block-editor-block-list__block{
        ${containerDeskWidth}
      }`: ''}


    .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
    .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}{
      ${containerDeskWidth}
			width: 100%;
    }

    .${uniqueId}.wp-block,
    .wp-block-zolo-container.frontend.${uniqueId}{
     ${containerDeskPadding}
     ${containerDeskMinHeight}
     ${containerDeskMargin}
    }

     .${uniqueId + editorFlexSelector},
     .${uniqueId + flexSelector}{
      ${rowDeskGap}
      ${columnDeskGap}
      ${flexDirectionDesk}
      ${flexWrapDesk}
      ${flexJustifyDesk}
      ${flexAlignDesk}
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
