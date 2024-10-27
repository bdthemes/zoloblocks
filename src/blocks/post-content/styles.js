import {applyFilters} from '@wordpress/hooks';
import {
  CONTENT_ALIGN,
  CONTENT_PADDING,
  CONTENT_MARGIN,
  CONTENT_BG,
  CONTENT_BORDER,
  CONTENT_BORDER_RADIUS,
  CONTENT_SHADOW,
  CONTENT_HOVER_BG,
  CONTENT_HOVER_BORDER,
  CONTENT_HOVER_BRADIUS,
  CONTENT_HOVER_SHADOW,
  CONTENT_TEXT_SHADOW,
  CONTENT_TEXT_STROKE,
} from './constants';

import {CONTENT_TYPOGRAPHY} from './constants/typoPrefixConstant';

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
} = window.zoloModule;

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {uniqueId, inheritThemeLayout, contentColor, contentHoverColor} = attributes;

  const {
    desktopAlignStyle: contentAlignDesk,
    tabAlignStyle: contentAlignTab,
    mobAlignStyle: contentAlignMob,
  } = generateResAlignmentStyle({
    controlName: CONTENT_ALIGN,
    property: 'text-align',
    attributes,
  });

  const {
    typoStylesDesktop: contentTypoDesk,
    typoStylesTab: contentTypoTab,
    typoStylesMobile: contentTypoMob,
  } = generateTypographyStyles({
    prefixConstant: CONTENT_TYPOGRAPHY,
    attributes,
  });

  const {textShadowStyle: contentTextShadowStyle} = generateTextShadowStyles({
    attributes,
    controlName: CONTENT_TEXT_SHADOW,
  });

  const {
    desktopTextStrokeStyle: contentTextStrokeStyle,
    tabTextStrokeStyle: tabTitleTextStrokeStyle,
    mobTextStrokeStyle: mobTitleTextStrokeStyle,
  } = generateTextStrokeStyles({
    attributes,
    controlName: CONTENT_TEXT_STROKE,
  });

  const {
    dimensionStylesDesktop: contentPaddingDesk,
    dimensionStylesTab: contentPaddingTab,
    dimensionStylesMobile: contentPaddingMob,
  } = generateDimensionStyle({
    controlName: CONTENT_PADDING,
    styleFor: 'padding',
    attributes,
  });

  const {
    backgroundStylesDesktop: contentBGDesk,
    backgroundStylesTab: contentBGTab,
    backgroundStylesMobile: contentBGMob,
  } = generateNormalBGControlStyles({
    controlName: CONTENT_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: contentBorderDesk,
    tabBorderStyle: contentBorderTab,
    mobBorderStyle: contentBorderMob,
  } = generateBorderStyle({
    controlName: CONTENT_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: contentBorderRadiusDesk,
    dimensionStylesTab: contentBorderRadiusTab,
    dimensionStylesMobile: contentBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: CONTENT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: contentBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: CONTENT_SHADOW,
  });

  const {
    backgroundStylesDesktop: contentHoverBGDesk,
    backgroundStylesTab: contentHoverBGTab,
    backgroundStylesMobile: contentHoverBGMob,
  } = generateNormalBGControlStyles({
    controlName: CONTENT_HOVER_BG,
    attributes,
    noMainBGImg: true,
  });
  const {
    desktopBorderStyle: contentHoverBorderDesk,
    tabBorderStyle: contentHoverBorderTab,
    mobBorderStyle: contentHoverBorderMob,
  } = generateBorderStyle({
    controlName: CONTENT_HOVER_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: contentHoverBRadiusDesk,
    dimensionStylesTab: contentHoverBRadiusTab,
    dimensionStylesMobile: contentHoverBRadiusMob,
  } = generateDimensionStyle({
    controlName: CONTENT_HOVER_BRADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: contentHoverBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: CONTENT_HOVER_SHADOW,
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
          ${contentAlignDesk}
        }

        ${inheritThemeLayout ? `
          .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto;
            margin-right: auto;
          }
        ` : ''}

        .${uniqueId}.wp-block-zolo-post-content.zolo-block > * {
            ${contentPaddingDesk}
            ${contentBGDesk}
            ${contentBorderDesk}
            ${contentBorderRadiusDesk}
            ${contentBoxShadow}
            ${contentTypoDesk}
            ${contentColor ? `color:${contentColor};` : ''}
            ${contentTextShadowStyle}
            ${contentTextStrokeStyle}
        }
        .${uniqueId}.wp-block-zolo-post-content.zolo-block:hover > *{
            ${contentHoverBGDesk}
            ${contentHoverBorderDesk}
            ${contentHoverBRadiusDesk}
            ${contentHoverBoxShadow}
            ${contentHoverColor ? `color:${contentHoverColor};` : ''}
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
        desktopAllStyle={applyFilters('zolo.postContent.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.postContent.tabAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.postContent.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
