/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateBackgroundControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateResAlignmentStyle,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateTextGradientsStyles,
} = window.zoloModule;

//block constants
import {
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    SUBTITLE_MARGIN,
    SUBTITLE_PADDING,
    SUBTITE_BORDER,
    SUBTITLE_BORDER_RADIUS,
    SUBTITLE_TEXT_SHADOW,
    SUBTITLE_TEXT_STROKE,
    TITLE_ALIGN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TPT_BORDER,
    TPT_BORDER_RADIUS,
    TPT_MARGIN,
    TPT_PADDING,
    TPT_SHADOW,
    TPT_TEXT_SHADOW,
    TPT_TEXT_STROKE,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    TPH_X_OFFSET,
    TPH_Y_OFFSET,
    TEXT_GRADIENT_COLOR,
    // badge style
    SUBTITLE_BADGE_BG,
    SUBTITLE_BADGE_PADDING,
    SUBTITLE_BADGE_MARGIN,
    SUBTITE_BADGE_BORDER,
    SUBTITLE_BADGE_BORDER_RADIUS,

    // SUBTITLE ICON
    SUBTITLE_ICON_SIZE,
    SUBTITLE_ICON_BG,
    SUBTITLE_ICON_PADDING,
    SUBTITLE_ICON_MARGIN,
    SUBTITLE_ICON_BORDER,
    SUBTITLE_ICON_BORDER_RADIUS,
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY, SUBTITLE_BADGE_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes, name } = props;
    const {
        uniqueId,

        //settings
        transparentTitleRotate,
        transparentTitleHide,

        //style
        titleColor,
        titleHoverColor,
        titleBgColor,
        subTitleColor,
        subTitleBgColor,
        tptColor,
        tptBgColor,
        tptOpacity,
        separatorColor,
        presetBg,
        splitTextActive,
        subTitlePosition,
        subTitleStyles,
        subTitleBadgeColor,
        subTitleIconColor,
        separatorPosition,
    } = attributes;

    //title style generate
    const {
        desktopAlignStyle: titleDeskAlign,
        tabAlignStyle: titleTabAlign,
        mobAlignStyle: titleMobAlign,
    } = generateResAlignmentStyle({
        controlName: TITLE_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMobile,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: titlePaddingDesktop,
        dimensionStylesTab: titlePaddingTab,
        dimensionStylesMobile: titlePaddingMob,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: titleBorderRadiusDesktop,
        dimensionStylesTab: titleBorderRadiusTab,
        dimensionStylesMobile: titleBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: titleShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_SHADOW,
    });

    const {
        desktopBorderStyle: titleBorderDesktop,
        tabBorderStyle: titleBorderTab,
        mobBorderStyle: titleBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: TITLE_BORDER,
    });
    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: titleTextStrokeStyle,
        tabTextStrokeStyle: tabTitleTextStrokeStyle,
        mobTextStrokeStyle: mobTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    //separator style generate
    const {
        desktopRangeStyle: separatorWidthDesktop,
        tabRangeStyle: separatorWidthTab,
        mobRangeStyle: separatorWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorHeightDesktop,
        tabRangeStyle: separatorHeightTab,
        mobRangeStyle: separatorHeightMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_HEIGHT,
        property: 'border-width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorSpacingDesktop,
        tabRangeStyle: separatorSpacingTab,
        mobRangeStyle: separatorSpacingMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_SPACING,
        property: '--separator-spacing',
        attributes,
    });

    //subtitle style generate
    const {
        typoStylesDesktop: subTitleTypoDesktop,
        typoStylesTab: subTitleTypoTab,
        typoStylesMobile: subTitleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: SUBTITLE_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: subTitleMarginDesktop,
        dimensionStylesTab: subTitleMarginTab,
        dimensionStylesMobile: subTitleMarginMobile,
    } = generateDimensionStyle({
        controlName: SUBTITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: subTitlePaddingDesktop,
        dimensionStylesTab: subTitlePaddingTab,
        dimensionStylesMobile: subTitlePaddingMobile,
    } = generateDimensionStyle({
        controlName: SUBTITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopBorderStyle: stBorderDesktop,
        tabBorderStyle: stBorderTab,
        mobBorderStyle: stBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: SUBTITE_BORDER,
    });
    const {
        dimensionStylesDesktop: stBorderRadiusDesktop,
        dimensionStylesTab: stBorderRadiusTab,
        dimensionStylesMobile: stBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { textShadowStyle: subTitleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: SUBTITLE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: subTitleTextStrokeStyle,
        tabTextStrokeStyle: tabSubTitleTextStrokeStyle,
        mobTextStrokeStyle: mobSubTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: SUBTITLE_TEXT_STROKE,
    });

    //transparent style generate
    const {
        typoStylesDesktop: transparentTypoDesktop,
        typoStylesTab: transparentTypoTab,
        typoStylesMobile: transparentTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TRANSPARENT_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: tptMarginDesktop,
        dimensionStylesTab: tptMarginTab,
        dimensionStylesMobile: tptMarginMob,
    } = generateDimensionStyle({
        controlName: TPT_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: tptPaddingDesktop,
        dimensionStylesTab: tptPaddingTab,
        dimensionStylesMobile: tptPaddingMob,
    } = generateDimensionStyle({
        controlName: TPT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: tptBorderRadiusDesktop,
        dimensionStylesTab: tptBorderRadiusTab,
        dimensionStylesMobile: tptBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: TPT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: tptShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TPT_SHADOW,
    });

    const {
        desktopBorderStyle: tptBorderDesktop,
        tabBorderStyle: tptBorderTab,
        mobBorderStyle: tptBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: TPT_BORDER,
    });

    const { textShadowStyle: tptTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TPT_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: tptTextStrokeStyle,
        tabTextStrokeStyle: tabtptTextStrokeStyle,
        mobTextStrokeStyle: mobtptTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TPT_TEXT_STROKE,
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

    // Offset
    const {
        desktopRangeStyle: xOffsetDesk,
        tabRangeStyle: xOffsetTab,
        mobRangeStyle: xOffsetMob,
    } = generateResRangeStyle({
        controlName: TPH_X_OFFSET,
        property: '--zb-advanced-heading-pos-x',
        attributes,
    });

    const {
        desktopRangeStyle: yOffsetDesk,
        tabRangeStyle: yOffsetTab,
        mobRangeStyle: yOffsetMob,
    } = generateResRangeStyle({
        controlName: TPH_Y_OFFSET,
        property: '--zb-advanced-heading-pos-y',
        attributes,
    });

    const {
        backgroundStylesDesktop: textGradientDesktop,
        backgroundStylesTab: textGradientTab,
        backgroundStylesMobile: textGradientMobile,
    } = generateTextGradientsStyles({
        controlName: TEXT_GRADIENT_COLOR,
        attributes,
        noMainBGImg: false,
    });

    // badge style

    const {
        typoStylesDesktop: subTitleBadgeTypoDesktop,
        typoStylesTab: subTitleBadgeTypoTab,
        typoStylesMobile: subTitleBadgeTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: SUBTITLE_BADGE_TYPOGRAPHY,
        attributes,
    });

    const {
        backgroundStylesDesktop: subTitleBadgeBgDesktop,
        backgroundStylesTab: subTitleBadgeBgTab,
        backgroundStylesMobile: subTitleBadgeBgMob,
    } = generateNormalBGControlStyles({
        controlName: SUBTITLE_BADGE_BG,
        attributes,
    });

    const {
        dimensionStylesDesktop: subTitleBadgeMarginDesktop,
        dimensionStylesTab: subTitleBadgeMarginTab,
        dimensionStylesMobile: subTitleBadgeMarginMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_BADGE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: subTitleBadgePaddingDesktop,
        dimensionStylesTab: subTitleBadgePaddingTab,
        dimensionStylesMobile: subTitleBadgePaddingMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_BADGE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: subTitleBadgeBorderDesktop,
        tabBorderStyle: subTitleBadgeBorderTab,
        mobBorderStyle: subTitleBadgeBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: SUBTITE_BADGE_BORDER,
    });

    const {
        dimensionStylesDesktop: subTitleBadgeBorderRadiusDesktop,
        dimensionStylesTab: subTitleBadgeBorderRadiusTab,
        dimensionStylesMobile: subTitleBadgeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_BADGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // sub title icon
    const {
        desktopRangeStyle: subTitleIconSizeDesktop,
        tabRangeStyle: subTitleIconSizeTab,
        mobRangeStyle: subTitleIconSizeMob,
    } = generateResRangeStyle({
        controlName: SUBTITLE_ICON_SIZE,
        property: '--zolo-subtitle-icon-size',
        attributes,
    });

    const {
        backgroundStylesDesktop: subTitleIconBgDesktop,
        backgroundStylesTab: subTitleIconBgTab,
        backgroundStylesMobile: subTitleIconBgMob,
    } = generateNormalBGControlStyles({
        controlName: SUBTITLE_ICON_BG,
        attributes,
    });

    const {
        dimensionStylesDesktop: subTitleIconMarginDesktop,
        dimensionStylesTab: subTitleIconMarginTab,
        dimensionStylesMobile: subTitleIconMarginMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: subTitleIconPaddingDesktop,
        dimensionStylesTab: subTitleIconPaddingTab,
        dimensionStylesMobile: subTitleIconPaddingMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: subTitleIconBorderDesktop,
        tabBorderStyle: subTitleIconBorderTab,
        mobBorderStyle: subTitleIconBorderMob,
    } = generateBorderStyle({
        attributes,
        controlName: SUBTITLE_ICON_BORDER,
    });

    const {
        dimensionStylesDesktop: subTitleIconBorderRadiusDesktop,
        dimensionStylesTab: subTitleIconBorderRadiusTab,
        dimensionStylesMobile: subTitleIconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SUBTITLE_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    //css style
    const wrapperStylesDesktop = `
  .zolo-block-wrapper.${uniqueId}{
    ${wrapperMarginDesktop}
    ${wrapperPaddingDesktop}
    ${wrapperBackgroundStylesDesktop}
    ${wrapperBorderDesktop}
    ${wrapperShadow}
    transition:${wrapperShadowTransition};
    ${titleDeskAlign}
    ${xOffsetDesk}
    ${yOffsetDesk}
    --zb-advanced-heading-rotate: ${transparentTitleRotate}deg;
  }
  .zolo-block-wrapper.${uniqueId}:hover{
    ${wrapperHoverBackgroundStylesDesktop}
    ${wrapperHoverShadow}
  }
  .zolo-block-wrapper.${uniqueId}::before{
      ${wrapperOverlayStylesDesktop}
  }
  .zolo-block-wrapper.${uniqueId}:hover::before{
    ${wrapperHoverOverlayStylesDesktop}
  }
`;

    const wrapperStylesTab = `
  .zolo-block-wrapper.${uniqueId}{
    ${wrapperMarginTab}
    ${wrapperPaddingTab}
    ${wrapperBackgroundStylesTab}
    ${wrapperBorderTab}
    ${titleTabAlign}
    ${xOffsetTab}
    ${yOffsetTab}
  }
  .zolo-block-wrapper.${uniqueId}:hover{
    ${wrapperHoverBackgroundStylesTab}
  }
  .zolo-block-wrapper.${uniqueId}::before{
    ${wrapperOverlayStylesTab}
  }
  .zolo-block-wrapper.${uniqueId}:hover::before{
    ${wrapperHoverOverlayStylesTab}
  }
`;
    const wrapperStylesMobile = `
  .zolo-block-wrapper.${uniqueId}{
    ${wrapperMarginMobile}
    ${wrapperPaddingMobile}
    ${wrapperBackgroundStylesMobile}
    ${wrapperBorderMob}
    ${titleMobAlign}
    ${xOffsetMob}
    ${yOffsetMob}
  }
  .zolo-block-wrapper.${uniqueId}:hover{
    ${wrapperHoverBackgroundStylesMobile}
  }
  .zolo-block-wrapper.${uniqueId}::before{
    ${wrapperOverlayStylesMobile}
  }
  .zolo-block-wrapper.${uniqueId}::before:hover{
    ${wrapperHoverOverlayStylesMobile}
  }
`;

    // Title styles css in strings
    const titleStylesDesktop = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-title {
      ${titleBgColor ? `background-color: ${titleBgColor};` : ''}
      ${titleMarginDesktop}
      ${titlePaddingDesktop}
      ${titleBorderDesktop}
      ${titleBorderRadiusDesktop}
      ${titleTextShadowStyle}
      ${titleTextStrokeStyle}
      ${titleShadow}
    }

    .zolo-block-wrapper.${uniqueId} .zolo-ah-main-title {
      ${titleTypoDesktop}
      ${titleColor ? `color: ${titleColor};` : ''}
    }

      ${
          splitTextActive
              ? ` .zolo-frontend .${uniqueId} .zolo-ah-style-3 .zolo-ah-title .zolo-ah-main-title > div,
              .zolo-editor .${uniqueId} .zolo-ah-style-3 .zolo-ah-title .zolo-ah-main-title,
              .zolo-editor .${uniqueId} .zolo-ah-style-3  .zolo-ah-title .zolo-ah-main-title div{
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-position: center;
        background-size: contain;
        background-image: url(${presetBg ? presetBg.url : ''});}`
              : `
        .${uniqueId} .zolo-ah-style-3 .zolo-ah-title {
          background-image: url(${presetBg ? presetBg.url : ''});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-position: center;
          background-size: contain;
        }
        `
      }

    .zolo-block-wrapper.${uniqueId} .zolo-ah-main-title.has-link {
      ${titleColor ? `color: ${titleColor};` : ''}
    }

    .zolo-block-wrapper.${uniqueId} .zolo-ah-main-title.has-link:hover {
      ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
    }

    .zolo-block-wrapper.${uniqueId}.zolo-ah-style-6 .zolo-ah-title {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${titleColor || 'rgba(6, 6, 7, 0.919)'};
    }

    .zolo-block-wrapper.${uniqueId}.zolo-text-gradient-color .zolo-ah-title .zolo-ah-main-title,
    .zolo-block-wrapper.${uniqueId}.zolo-text-gradient-color .zolo-ah-title .zolo-ah-main-title div {
      ${textGradientDesktop}
    }

  `;

    const titleStylesTab = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-title {
    ${titleMarginTab}
    ${titlePaddingTab}
    ${titleBorderTab}
    ${titleBorderRadiusTab}
    ${tabTitleTextStrokeStyle}
  }
  .zolo-block-wrapper.${uniqueId} .zolo-ah-main-title {
    ${titleTypoTab}
  }
`;

    const titleStylesMobile = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-title {
    ${titleMarginMobile}
    ${titlePaddingMob}
    ${titleBorderMob}
    ${titleBorderRadiusMob}
    ${mobTitleTextStrokeStyle}
  }
  .zolo-block-wrapper.${uniqueId} .zolo-ah-main-title {
    ${titleTypoMobile}
  }
`;

    // separator styles css in strings
    const separatorStylesDesktop = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      border-style: none none solid;
      ${separatorColor ? `border-color: ${separatorColor};` : ''}
      ${separatorHeightDesktop}
       ${separatorWidthDesktop}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper {
      ${separatorWidthDesktop}
    }
    
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper .zolo-ah-separator {
      ${separatorSpacingDesktop}
    }
`;

    const separatorStylesTab = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightTab}
      ${separatorWidthTab}
      ${separatorWidthTab}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper {
          ${separatorWidthTab}
    }
  
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper .zolo-ah-separator {
        ${separatorSpacingTab}
    }
`;

    const separatorStylesMobile = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightMob}
      ${separatorWidthMob}
    }
     .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper {
        ${separatorWidthMob}
    }
    
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper .zolo-ah-separator {
      ${separatorSpacingMob}
    }
`;

    // Subtitle styles css in strings
    const subtitleStylesDesktop = `
      .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
        ${subTitleColor ? `color: ${subTitleColor};` : ''}
        ${subTitleTypoDesktop}
        ${subTitleTextShadowStyle}
        ${subTitleTextStrokeStyle}

      }
      ${
          subTitleStyles !== 'badge-style-1'
              ? `
                .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
                  ${subTitleBgColor ? `background-color: ${subTitleBgColor};` : ''}
                  ${subTitleMarginDesktop}
                  ${stBorderDesktop}
                  ${stBorderRadiusDesktop}
                  ${subTitlePaddingDesktop}
                }
              `
              : ''
      }

      ${
          subTitleStyles === 'badge-style-1'
              ? `
                .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle-badge-wrap {
                  ${subTitleBgColor ? `background-color: ${subTitleBgColor};` : ''}
                  ${subTitleMarginDesktop}
                  ${stBorderDesktop}
                  ${stBorderRadiusDesktop}
                  ${subTitlePaddingDesktop}
                }
              `
              : ''
      }
`;
    const subtitleStylesTab = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
      ${subTitleTypoTab}
      ${tabSubTitleTextStrokeStyle}
    }

    ${
        subTitleStyles !== 'badge-style-1'
            ? `
              .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
                     ${subTitleMarginTab}
                     ${stBorderTab}
                     ${stBorderRadiusTab}
                     ${subTitlePaddingTab}
              }
            `
            : ''
    }

    ${
        subTitleStyles === 'badge-style-1'
            ? `
                .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle-badge-wrap {
                     ${subTitleMarginTab}
                     ${stBorderTab}
                     ${stBorderRadiusTab}
                     ${subTitlePaddingTab}
                }
              `
            : ''
    }

`;
    const subtitleStylesMobile = `
    .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
      ${subTitleTypoMobile}
      ${mobSubTitleTextStrokeStyle}
    }

    ${
        subTitleStyles !== 'badge-style-1'
            ? `
              .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
                ${subTitleMarginMobile}
                ${stBorderMob}
                ${stBorderRadiusMob}
                ${subTitlePaddingMobile}
              }
            `
            : ''
    }

    ${
        subTitleStyles === 'badge-style-1'
            ? `
                .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle-badge-wrap {
                  ${subTitleMarginMobile}
                  ${stBorderMob}
                  ${stBorderRadiusMob}
                  ${subTitlePaddingMobile}
                }
              `
            : ''
    }
`;

    //transparent styles css
    const transparentStylesDesktop = `
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
    ${tptColor ? `color: ${tptColor};` : ''}
    ${tptBgColor ? `background-color: ${tptBgColor};` : ''}
    ${tptOpacity ? `opacity: ${tptOpacity};` : ''}
    ${transparentTypoDesktop}
    ${tptMarginDesktop}
    ${tptPaddingDesktop}
    ${tptBorderDesktop}
    ${tptBorderRadiusDesktop}
    ${tptTextShadowStyle}
    ${tptTextStrokeStyle}
    ${tptShadow}

    display:inline-block;
    -webkit-transform: translate(var(--zb-advanced-heading-pos-x, 0), var(--zb-advanced-heading-pos-y, 0)) rotate(var(--zb-advanced-heading-rotate, 0));
    transform: translate(var(--zb-advanced-heading-pos-x, 0), var(--zb-advanced-heading-pos-y, 0)) rotate(var(--zb-advanced-heading-rotate, 0));
  }
  .zolo-block-wrapper.${uniqueId}.zolo-ah-style-2 .zolo-transparent-heading {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${tptColor || 'rgba(6, 6, 7, 0.22)'};
  }
`;

    const transparentStylesTab = `
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
    ${transparentTitleHide === 'tab-mob' && `display:none`}
  }
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
    ${transparentTypoTab}
    ${tptMarginTab}
    ${tptPaddingTab}
    ${tptBorderTab}
    ${tptBorderRadiusTab}
    ${tptTextShadowStyle}
    ${tabtptTextStrokeStyle}
  }
`;

    const transparentStylesMobile = `
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
    ${(transparentTitleHide === 'tab-mob' || transparentTitleHide === 'mob') && `display:none`}
  }
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading {
    ${transparentTypoMobile}
    ${tptMarginMob}
    ${tptPaddingMob}
    ${tptBorderMob}
    ${tptBorderRadiusMob}
    ${mobtptTextStrokeStyle}
  }
`;

    const subtitleBadgeStylesDesktop = `
      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo-badge-text {
          ${subTitleBadgeColor ? `color: ${subTitleBadgeColor};` : ''}
          ${subTitleBadgeTypoDesktop}
          ${subTitleBadgeBgDesktop}
          ${subTitleBadgeMarginDesktop}
          ${subTitleBadgePaddingDesktop}
          ${subTitleBadgeBorderDesktop}
          ${subTitleBadgeBorderRadiusDesktop}
      }

      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon svg {
          ${subTitleIconSizeDesktop}
          ${subTitleIconColor ? `fill: ${subTitleIconColor};` : ''}
      }

      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon {
          ${subTitleIconBgDesktop}
          ${subTitleIconMarginDesktop}
          ${subTitleIconPaddingDesktop}
          ${subTitleIconBorderDesktop}
          ${subTitleIconBorderRadiusDesktop}
      }

`;

    const subtitleBadgeStylesTab = `
        .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo-badge-text {
          ${subTitleBadgeTypoTab}
          ${subTitleBadgeBgTab}
          ${subTitleBadgeMarginTab}
          ${subTitleBadgePaddingTab}
          ${subTitleBadgeBorderTab}
          ${subTitleBadgeBorderRadiusTab}
        }

      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon svg {
          ${subTitleIconSizeTab}
      }

      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon {
          ${subTitleIconBgTab}
          ${subTitleIconMarginTab}
          ${subTitleIconPaddingTab}
          ${subTitleIconBorderTab}
          ${subTitleIconBorderRadiusTab}
      }
`;

    const subtitleBadgeStylesMobile = `
      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo-badge-text {
        ${subTitleBadgeTypoMobile}
        ${subTitleBadgeBgMob}
        ${subTitleBadgeMarginMob}
        ${subTitleBadgePaddingMob}
        ${subTitleBadgeBorderMob}
        ${subTitleBadgeBorderRadiusMob}
      }

      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon svg {
          ${subTitleIconSizeMob}
      }
      
      .zolo-block-wrapper.${uniqueId}.badge-style-1 .zolo-ah-subtitle-badge-wrap .zolo__display-icon {
        ${subTitleIconBgMob}
        ${subTitleIconMarginMob}
        ${subTitleIconPaddingMob}
        ${subTitleIconBorderMob}
        ${subTitleIconBorderRadiusMob}
    }
`;

    const desktopAllStyle = `
      ${wrapperStylesDesktop}
      ${titleStylesDesktop}
      ${subtitleStylesDesktop}
      ${transparentStylesDesktop}
      ${separatorStylesDesktop}
      ${subtitleBadgeStylesDesktop}
    `;

    const tabletAllStyle = `
      ${wrapperStylesTab}
      ${titleStylesTab}
      ${subtitleStylesTab}
      ${transparentStylesTab}
      ${separatorStylesTab}
      ${subtitleBadgeStylesTab}
    `;

    const mobileAllStyle = `
      ${wrapperStylesMobile}
      ${titleStylesMobile}
      ${subtitleStylesMobile}
      ${transparentStylesMobile}
      ${separatorStylesMobile}
      ${subtitleBadgeStylesMobile}
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedHeading.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedHeading.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedHeading.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
