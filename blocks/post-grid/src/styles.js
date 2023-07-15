import { useEffect } from '@wordpress/element';
import {
  GRID_COLUMNS,
  COLUMNS_GAP,
  CONTAINER_MARGIN,
  CONTAINER_PADDING
} from './constants';

const {
  generateDimensionStyle,
  generateResRangeStyle
} = window.zoloModule;

function styles({ attributes, setAttributes }) {
  const {
    uniqueId,
    blockStyle,
  } = attributes;

  const {
    desktopRangeStyle: deskColumns,
    tabRangeStyle: tabColumns,
    mobRangeStyle: mobColumns,
  } = generateResRangeStyle({
    controlName: GRID_COLUMNS,
    property: 'grid-template-columns',
    attributes,
    noProperty: true,
    noUnits: false,
    unitCustomTxt: '',
  });

  const {
    desktopRangeStyle: deskColumnsGap,
    tabRangeStyle: tabColumnsGap,
    mobRangeStyle: mobColumnsGap,
  } = generateResRangeStyle({
    controlName: COLUMNS_GAP,
    property: 'grid-gap',
    attributes,
  });

  // Container Margin
  const {
    dimensionStylesDesktop: containerDeskMargin,
    dimensionStylesTab: containerTabMargin,
    dimensionStylesMobile: containerMobMargin,
  } = generateDimensionStyle({
    controlName: CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes,
  });

  // Container Padding
  const {
    dimensionStylesDesktop: containerDeskPadding,
    dimensionStylesTab: containerTabPadding,
    dimensionStylesMobile: containerMobPadding,
  } = generateDimensionStyle({
    controlName: CONTAINER_PADDING,
    styleFor: 'padding',
    attributes,
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${containerDeskMargin}
        ${containerDeskPadding}
      }
      .${uniqueId}.wp-block-zolo-post-grid.zolo-post-wrap{
        ${deskColumns}
        ${deskColumnsGap}
      }
    `;
  const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${containerTabMargin}
        ${containerTabPadding}
      }
      .${uniqueId}.wp-block-zolo-post-grid.zolo-post-wrap{
        ${tabColumns}
        ${tabColumnsGap}
      }
    `;
  const mobileAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${containerMobMargin}
        ${containerMobPadding}
      }
      .${uniqueId}.wp-block-zolo-post-grid.zolo-post-wrap{
        ${mobColumns}
        ${mobColumnsGap}
      }
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
