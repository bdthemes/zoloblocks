import {applyFilters} from '@wordpress/hooks';
import {
  //box
  BOX_PADDING,
  BOX_SEPARATOR_WIDTH,
  BOX_MIN_HEIGHT,
  BOX_MAX_WIDTH,
  BOX_BORDER,
  BOX_BORDER_RADIUS,
  BOX_SHADOW,
  //header
  HEADER_BG,
  HEADER_ICON_SIZE,
  //list
  LIST_MARKER_SIZE
} from './constants';

import {HEADER_TYPOGRAPHY, LIST_TYPOGRAPHY} from './constants/typoPrefixConstant';

const {
  generateTextShadowStyles,
  generateTextStrokeStyles,
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateResAlignmentStyle,
  generateResRangeStyle,
} = window.zoloModule;

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    //box
    boxBgColor,
    boxSeparatorColor,
    //header
    headerColor,
    headerIconColor,
    //list
    listColor,
    listHoverColor,
    listActiveColor,
    listMarkerColor
  } = attributes;

  //box
  const {
    dimensionStylesDesktop: boxPaddingDesk,
    dimensionStylesTab: boxPaddingTab,
    dimensionStylesMobile: boxPaddingMob,
  } = generateDimensionStyle({
    controlName: BOX_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopRangeStyle: boxSWidthDesk,
    tabRangeStyle: boxSWidthTab,
    mobRangeStyle: boxSWidthMob,
  } = generateResRangeStyle({
    controlName: BOX_SEPARATOR_WIDTH,
    property: 'border-top-width',
    attributes,
  });
  const {
    desktopRangeStyle: boxMaxWidthDesk,
    tabRangeStyle: boxMaxWidthTab,
    mobRangeStyle: boxMaxWidthMob,
  } = generateResRangeStyle({
    controlName: BOX_MAX_WIDTH,
    property: 'max-width',
    attributes,
  });
  const {
    desktopRangeStyle: boxMinHeightDesk,
    tabRangeStyle: boxMinHeightTab,
    mobRangeStyle: boxMinHeightMob,
  } = generateResRangeStyle({
    controlName: BOX_MIN_HEIGHT,
    property: 'min-height',
    attributes,
  });
  const {
    desktopBorderStyle: boxBorderDesk,
    tabBorderStyle: boxBorderTab,
    mobBorderStyle: boxBorderMob,
  } = generateBorderStyle({
    controlName: BOX_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: boxBorderRadiusDesk,
    dimensionStylesTab: boxBorderRadiusTab,
    dimensionStylesMobile: boxBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: BOX_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: boxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: BOX_SHADOW,
  });


  //header
  const {
    typoStylesDesktop: headerTypoDesk,
    typoStylesTab: headerTypoTab,
    typoStylesMobile: headerTypoMob,
  } = generateTypographyStyles({
    prefixConstant: HEADER_TYPOGRAPHY,
    attributes,
  });
  const {
    backgroundStylesDesktop: headerBGDesk,
    backgroundStylesTab: headerBGTab,
    backgroundStylesMobile: headerBGMob,
  } = generateNormalBGControlStyles({
    controlName: HEADER_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopRangeStyle: headerIconSizeDesk,
    tabRangeStyle: headerIconSizeTab,
    mobRangeStyle: headerIconSizeMob,
  } = generateResRangeStyle({
    controlName: HEADER_ICON_SIZE,
    property: 'font-size',
    attributes,
  });
  //list
  const {
    typoStylesDesktop: listTypoDesk,
    typoStylesTab: listTypoTab,
    typoStylesMobile: listTypoMob,
  } = generateTypographyStyles({
    prefixConstant: LIST_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: listMarkerSizeDesk,
    tabRangeStyle: listMarkerSizeTab,
    mobRangeStyle: listMarkerSizeMob,
  } = generateResRangeStyle({
    controlName: LIST_MARKER_SIZE,
    property: 'font-size',
    attributes,
  });


  /**
   * All Style Combination
   */
  const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block{
      ${boxMaxWidthDesk}
      ${boxMinHeightDesk}
      ${boxBorderDesk}
      ${boxBorderRadiusDesk}
      ${boxShadow}
      ${boxBgColor ? `background-color:${boxBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-heading,
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content{
     ${boxPaddingDesk}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content{
      ${boxSWidthDesk}
      ${boxSeparatorColor ? `border-top-color:${boxSeparatorColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading{
      ${headerBGDesk}
      ${headerTypoDesk}
      ${headerColor ? `color:${headerColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content .zolo-toc-heading svg{
      ${headerIconSizeDesk}
      ${headerIconColor ? `fill:${headerIconColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a{
     ${listTypoDesk}
     ${listColor ? `color:${listColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list a:hover{
      ${listHoverColor ? `color:${listHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content .zolo-toc-list li.active> a{
     ${listActiveColor ? `color:${listActiveColor};` : ''}
    }
   .${uniqueId}.wp-block-zolo-table-of-content.zolo-block .zolo-toc-content ol li::before{
     ${listMarkerColor ? `color:${listMarkerColor};` : ''}
     ${listMarkerSizeDesk}
   }
  `;

  const tabletAllStyle = `

    `;

  const mobileAllStyle = `

  `;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zolo.tableOfContent.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.tableOfContent.tabAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.tableOfContent.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
