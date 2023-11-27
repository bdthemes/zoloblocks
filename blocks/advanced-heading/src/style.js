/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

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
} = window.zoloModule;

//block constants
import {
    SEPARATOR_ALIGN,
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
    TPT_ALIGNMENT,
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
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

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
        desktopAlignStyle: separatorDeskAlign,
        tabAlignStyle: separatorTabAlign,
        mobAlignStyle: separatorMobAlign,
    } = generateResAlignmentStyle({
        controlName: SEPARATOR_ALIGN,
        property: 'justify-content',
        attributes,
    });

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
        property: 'margin-top',
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
        desktopAlignStyle: tptAlignmentDesktop,
        tabAlignStyle: tptAlignmentTab,
        mobAlignStyle: tptAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: TPT_ALIGNMENT,
        property: 'text-align',
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
      ${titleColor ? `color: ${titleColor};` : ''}
      ${titleBgColor ? `background-color: ${titleBgColor};` : ''}
      ${titleTypoDesktop}
      ${titleMarginDesktop}
      ${titlePaddingDesktop}
      ${titleBorderDesktop}
      ${titleBorderRadiusDesktop}
      ${titleTextShadowStyle}
      ${titleTextStrokeStyle}
      ${titleShadow}
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

  `;

    const titleStylesTab = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-title {
    ${titleTypoTab}
    ${titleMarginTab}
    ${titlePaddingTab}
    ${titleBorderTab}
    ${titleBorderRadiusTab}
    ${tabTitleTextStrokeStyle}
  }
`;

    const titleStylesMobile = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-title {
    ${titleTypoMobile}
    ${titleMarginMobile}
    ${titlePaddingMob}
    ${titleBorderMob}
    ${titleBorderRadiusMob}
    ${mobTitleTextStrokeStyle}
  }
`;

    // separator styles css in strings
    const separatorStylesDesktop = `
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper{
      ${separatorDeskAlign}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      border-style: none none solid;
      ${separatorColor ? `border-color: ${separatorColor};` : ''}
      ${separatorHeightDesktop}
      ${separatorWidthDesktop}
      ${separatorSpacingDesktop}
    }
`;

    const separatorStylesTab = `
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper{
      ${separatorTabAlign}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightTab}
      ${separatorWidthTab}
      ${separatorSpacingTab}
    }
`;

    const separatorStylesMobile = `
    .zolo-block-wrapper.${uniqueId} .zolo-separator-wrapper{
      ${separatorMobAlign}
    }
    .zolo-block-wrapper.${uniqueId} .zolo-ah-separator {
      ${separatorHeightMob}
      ${separatorWidthMob}
      ${separatorSpacingMob}
    }
`;

    // Subtitle styles css in strings
    const subtitleStylesDesktop = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
    ${subTitleColor ? `color: ${subTitleColor};` : ''}
    ${subTitleBgColor ? `background-color: ${subTitleBgColor};` : ''}
    ${subTitleTypoDesktop}
    ${subTitleMarginDesktop}
    ${subTitleTextShadowStyle}
    ${subTitleTextStrokeStyle}
    ${stBorderDesktop}
    ${stBorderRadiusDesktop}
    ${subTitlePaddingDesktop}
  }
`;
    const subtitleStylesTab = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
    ${subTitleTypoTab}
    ${subTitleMarginTab}
    ${tabSubTitleTextStrokeStyle}
    ${stBorderTab}
    ${stBorderRadiusTab}
    ${subTitlePaddingTab}
  }
`;
    const subtitleStylesMobile = `
  .zolo-block-wrapper.${uniqueId} .zolo-ah-subtitle {
    ${subTitleTypoMobile}
    ${subTitleMarginMobile}
    ${mobSubTitleTextStrokeStyle}
    ${stBorderMob}
    ${stBorderRadiusMob}
    ${subTitlePaddingMobile}
  }
`;

    //transparent styles css
    const transparentStylesDesktop = `
  .zolo-block-wrapper.${uniqueId} .zolo-transparent-heading-wrap{
    ${tptAlignmentDesktop}
  }
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
    ${tptAlignmentTab}
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
    ${tptAlignmentMob}
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

    const desktopAllStyle = `
      ${wrapperStylesDesktop}
      ${titleStylesDesktop}
      ${subtitleStylesDesktop}
      ${transparentStylesDesktop}
      ${separatorStylesDesktop}
    `;

    const tabletAllStyle = `
      ${wrapperStylesTab}
      ${titleStylesTab}
      ${subtitleStylesTab}
      ${transparentStylesTab}
      ${separatorStylesTab}
    `;

    const mobileAllStyle = `
      ${wrapperStylesMobile}
      ${titleStylesMobile}
      ${subtitleStylesMobile}
      ${transparentStylesMobile}
      ${separatorStylesMobile}
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
}
