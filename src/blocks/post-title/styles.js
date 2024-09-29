import {applyFilters} from '@wordpress/hooks';
import {
  TITLE_ALIGN,
  TITLE_PADDING,
  TITLE_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_SHADOW,
  TITLE_HOVER_BG,
  TITLE_HOVER_BORDER,
  TITLE_HOVER_BRADIUS,
  TITLE_HOVER_SHADOW,
} from './constants';

import {
  TITLE_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

const {
  generateDimensionStyle,
  generateNormalBGControlStyles,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder,
  generateResAlignmentStyle,
} = window.zoloModule;

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    titleColor,
    titleHoverColor
  } = attributes;

  const {
    desktopAlignStyle: titleAlignDesk,
    tabAlignStyle: titleAlignTab,
    mobAlignStyle: titleAlignMob,
  } = generateResAlignmentStyle({
    controlName: TITLE_ALIGN,
    property: 'text-align',
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
    dimensionStylesDesktop: titlePaddingDesk,
    dimensionStylesTab: titlePaddingTab,
    dimensionStylesMobile: titlePaddingMob,
  } = generateDimensionStyle({
    controlName: TITLE_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    backgroundStylesDesktop: titleBGDesk,
    backgroundStylesTab: titleBGTab,
    backgroundStylesMobile: titleBGMob,
  } = generateNormalBGControlStyles({
    controlName: TITLE_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: titleBorderDesk,
    tabBorderStyle: titleBorderTab,
    mobBorderStyle: titleBorderMob,
  } = generateBorderStyle({
    controlName: TITLE_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: titleBorderRadiusDesk,
    dimensionStylesTab: titleBorderRadiusTab,
    dimensionStylesMobile: titleBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: TITLE_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: titleBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: TITLE_SHADOW,
  });

  const {
    backgroundStylesDesktop: titleHoverBGDesk,
    backgroundStylesTab: titleHoverBGTab,
    backgroundStylesMobile: titleHoverBGMob,
  } = generateNormalBGControlStyles({
    controlName: TITLE_HOVER_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: titleHoverBorderDesk,
    tabBorderStyle: titleHoverBorderTab,
    mobBorderStyle: titleHoverBorderMob,
  } = generateBorderStyle({
    controlName: TITLE_HOVER_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: titleHoverBRadiusDesk,
    dimensionStylesTab: titleHoverBRadiusTab,
    dimensionStylesMobile: titleHoverBRadiusMob,
  } = generateDimensionStyle({
    controlName: TITLE_HOVER_BRADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: titleHoverBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: TITLE_HOVER_SHADOW,
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
      .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleAlignDesk}
        ${titlePaddingDesk}
        ${titleBGDesk}
        ${titleBorderDesk}
        ${titleBorderRadiusDesk}
        ${titleBoxShadow}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block a,
      .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleTypoDesk}
        ${titleColor ? `color:${titleColor};` : ''}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block:hover{
        ${titleHoverBGDesk}
        ${titleHoverBorderDesk}
        ${titleHoverBRadiusDesk}
        ${titleHoverBoxShadow}
       }
       .${uniqueId}.wp-block-zolo-post-title.zolo-block:hover a,
       .${uniqueId}.wp-block-zolo-post-title.zolo-block:hover{
          ${titleHoverColor ? `color:${titleHoverColor};` : ''}
       }
    `;

  const tabletAllStyle = `
      .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleAlignTab}
        ${titlePaddingTab}
        ${titleBGTab}
        ${titleBorderTab}
        ${titleBorderRadiusTab}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block a,
      .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleTypoTab}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block:hover{
        ${titleHoverBGTab}
        ${titleHoverBorderTab}
        ${titleHoverBRadiusTab}
       }
    `;

  const mobileAllStyle = `
     .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleAlignMob}
        ${titlePaddingMob}
        ${titleBGMob}
        ${titleBorderMob}
        ${titleBorderRadiusMob}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block a,
      .${uniqueId}.wp-block-zolo-post-title.zolo-block{
        ${titleTypoMob}
      }
      .${uniqueId}.wp-block-zolo-post-title.zolo-block:hover{
        ${titleHoverBGMob}
        ${titleHoverBorderMob}
        ${titleHoverBRadiusMob}
       }
  `;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zolo.postTitle.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.postTitle.tabAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.postTitle.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
