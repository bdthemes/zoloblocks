import { useEffect } from '@wordpress/element';
import {
  CONTAINER_MARGIN,
  CONTAINER_PADDING
} from './constants';

const {
  generateDimensionStyle,
} = window.zoloModule;

function styles({ attributes, setAttributes }) {
  const {
    uniqueId,
    blockStyle,
    containerBg
  } = attributes;

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
        background-color: ${containerBg};
        ${containerDeskMargin}
        ${containerDeskPadding}
      }
    `;
  const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${containerTabMargin}
        ${containerTabPadding}
      }
    `;
  const mobileAllStyle = `
      .${uniqueId}.wp-block-zolo-post-grid {
        ${containerMobMargin}
        ${containerMobPadding}
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
