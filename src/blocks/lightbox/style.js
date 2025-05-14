/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateDimensionStyle,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    POSTER_HEIGHT,
    BUTTON_ALIGN,
    POSTER_BG_COLOR,
    POSTER_BORDER,
    POSTER_BORDER_RADIUS,
    POSTER_PADDING,
    POSTER_BOX_SHADOW,
    HOVER_POSTER_BG_COLOR,
    HOVER_POSTER_BORDER_RADIUS,
    HOVER_POSTER_BOX_SHADOW,
    BUTTON_BG_COLOR,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_PADDING,
    BUTTON_BOX_SHADOW,
    HOVER_BUTTON_BG_COLOR,
    HOVER_BUTTON_BORDER_RADIUS,
    HOVER_BUTTON_BOX_SHADOW,
    CONTENT_HEIGHT,
    CONTENT_WIDTH,
    ICON_BG_COLOR,
    ICON_H_BG_COLOR,
    PLAY_BTN_ICON_SIZE,
    PLAY_BTN_PADDING,
    PLAY_BTN_MARGIN,
    PLAY_BTN_BORDER,
    PLAY_BTN_BORDER_RADIUS,
    PLAY_BTN_BOX_SHADOW,
    PLAY_BTN_H_BOX_SHADOW,
} from './constants';

import { BUTTON_TYPOGRAPHY, BUTTON_SUB_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,

        // setting
        titleColor,
        hoverTitleColor,
        titleSubColor,
        hoverTitleSubColor,
        iconColor,
        iconHColor,
        playBtnBorderHColor,
        lightboxType,
    } = attributes;

    const {
        desktopRangeStyle: posterHeightDesk,
        tabRangeStyle: posterHeightTab,
        mobRangeStyle: posterHeightMob,
    } = generateResRangeStyle({
        controlName: POSTER_HEIGHT,
        property: 'height',
        attributes,
    });
    const {
        desktopRangeStyle: contentImgWidthDesk,
        tabRangeStyle: contentImgWidthTab,
        mobRangeStyle: contentImgWidthMob,
    } = generateResRangeStyle({
        controlName: CONTENT_HEIGHT,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: contentWidthDesk,
        tabRangeStyle: contentWidthTab,
        mobRangeStyle: contentWidthMob,
    } = generateResRangeStyle({
        controlName: CONTENT_WIDTH,
        property: 'max-width',
        attributes,
    });

    const {
        desktopAlignStyle: buttonAlignDesk,
        tabAlignStyle: buttonAlignTab,
        mobAlignStyle: buttonAlignMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        desktopAlignStyle: buttonAlignFDesk,
        tabAlignStyle: buttonAlignFTab,
        mobAlignStyle: buttonAlignFMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        backgroundStylesDesktop: posterBgColorDesk,
        backgroundStylesTab: posterBgColorTab,
        backgroundStylesMob: posterBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: POSTER_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });
    const {
        backgroundStylesDesktop: iconBgColorDesk,
        backgroundStylesTab: iconBgColorTab,
        backgroundStylesMob: iconBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });
    const {
        backgroundStylesDesktop: iconHBgColorDesk,
        backgroundStylesTab: iconHBgColorTab,
        backgroundStylesMob: iconHBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_H_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        desktopBorderStyle: posterBorderDesk,
        tabBorderStyle: posterBorderTab,
        mobBorderStyle: posterBorderMob,
    } = generateBorderStyle({
        controlName: POSTER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: posterBorderRadiusDesk,
        dimensionStylesTab: posterBorderRadiusTab,
        dimensionStylesMobile: posterBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: POSTER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: posterPaddingDesk,
        dimensionStylesTab: posterPaddingTab,
        dimensionStylesMobile: posterPaddingMob,
    } = generateDimensionStyle({
        controlName: POSTER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: posterBoxShadow } = generateBoxShadowStyles({
        controlName: POSTER_BOX_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: hoverPosterBgColorDesk,
        backgroundStylesTab: hoverPosterBgColorTab,
        backgroundStylesMobile: hoverPosterBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: HOVER_POSTER_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        dimensionStylesDesktop: hoverPosterBorderRadiusDesk,
        dimensionStylesTab: hoverPosterBorderRadiusTab,
        dimensionStylesMob: hoverPosterBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HOVER_POSTER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: hoverPosterBoxShadow } = generateBoxShadowStyles({
        controlName: HOVER_POSTER_BOX_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: buttonBgColorDesk,
        backgroundStylesTab: buttonBgColorTab,
        backgroundStylesMob: buttonBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        desktopBorderStyle: buttonBorderDesk,
        tabBorderStyle: buttonBorderTab,
        mobBorderStyle: buttonBorderMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonBorderRadiusDesk,
        dimensionStylesTab: buttonBorderRadiusTab,
        dimensionStylesMob: buttonBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonPaddingDesk,
        dimensionStylesTab: buttonPaddingTab,
        dimensionStylesMob: buttonPaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: buttonBoxShadow } = generateBoxShadowStyles({
        controlName: BUTTON_BOX_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: hoverButtonBgColorDesk,
        backgroundStylesTab: hoverButtonBgColorTab,
        backgroundStylesMob: hoverButtonBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: HOVER_BUTTON_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        dimensionStylesDesktop: hoverButtonBorderRadiusDesk,
        dimensionStylesTab: hoverButtonBorderRadiusTab,
        dimensionStylesMob: hoverButtonBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HOVER_BUTTON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: hoverButtonBoxShadow } = generateBoxShadowStyles({
        controlName: HOVER_BUTTON_BOX_SHADOW,
        attributes,
    });

    const {
        typoStylesDesktop: buttonTypoDesk,
        typoStylesTab: buttonTypoTab,
        typoStylesMobile: buttonTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: buttonSubTypoDesk,
        typoStylesTab: buttonSubTypoTab,
        typoStylesMobile: buttonSubTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_SUB_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopRangeStyle: playBtnIconSizeDesk,
        tabRangeStyle: playBtnIconSizeTab,
        mobRangeStyle: playBtnIconSizeMob,
    } = generateResRangeStyle({
        controlName: PLAY_BTN_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: playBtnIconHDesk,
        tabRangeStyle: playBtnIconHTab,
        mobRangeStyle: playBtnIconHMob,
    } = generateResRangeStyle({
        controlName: PLAY_BTN_ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: playBtnPaddingDesk,
        dimensionStylesTab: playBtnPaddingTab,
        dimensionStylesMob: playBtnPaddingMob,
    } = generateDimensionStyle({
        controlName: PLAY_BTN_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: playBtnMarginDesk,
        dimensionStylesTab: playBtnMarginTab,
        dimensionStylesMob: playBtnMarginMob,
    } = generateDimensionStyle({
        controlName: PLAY_BTN_MARGIN,
        styleFor: 'margin',
        attributes,
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
        dimensionStylesMob: playBtnBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PLAY_BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: playBtnBoxShadow } = generateBoxShadowStyles({
        controlName: PLAY_BTN_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: playBtnHBoxShadow } = generateBoxShadowStyles({
        controlName: PLAY_BTN_H_BOX_SHADOW,
        attributes,
    });

    // style

    const desktopAllStyle = `
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorDesk}
            ${buttonBgColorDesk}
            ${buttonBorderDesk}
            ${buttonBorderRadiusDesk}
            ${buttonPaddingDesk}
            ${buttonBoxShadow}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorDesk}
             ${hoverButtonBgColorDesk}
            ${hoverButtonBorderRadiusDesk}
            ${hoverButtonBoxShadow}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorDesk}
            ${iconColor ? `border-color: ${iconColor};` : ''}
            ${playBtnPaddingDesk}
            ${playBtnMarginDesk}
            ${playBtnBorderDesk}
            ${playBtnBorderRadiusDesk}
            ${playBtnBoxShadow}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${iconColor ? `fill: ${iconColor} !important;` : ''}
             ${playBtnIconSizeDesk}
             ${playBtnIconHDesk}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorDesk}
        }

      .${uniqueId} .zolo-play-btn:hover .zolo-btn-icon {
            ${playBtnBorderHColor ? `border-color: ${playBtnBorderHColor};` : ''}
            ${playBtnHBoxShadow}
        }

       .${uniqueId} .zolo-play-btn .zolo-btn-icon:hover svg {
            ${iconHColor ? `fill: ${iconHColor} !important;` : ''}
        }

       ${
           lightboxType === 'poster'
               ? `
                       .${uniqueId} .zolo-play-btn .zolo-btn-icon:hover svg {
                            ${iconHColor ? `fill: ${iconHColor} !important;` : ''}
                        }
                `
               : ''
       }

        ${
            lightboxType === 'button'
                ? `
                       .${uniqueId} .zolo-play-btn:hover .zolo-btn-icon svg {
                            ${iconHColor ? `fill: ${iconHColor} !important;` : ''}
                        }
                `
                : ''
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${titleColor ? `color: ${titleColor};` : ''}
            ${buttonTypoDesk}
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover .zolo-btn-text {
            ${hoverTitleColor ? `color: ${hoverTitleColor};` : ''}
        }

        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoDesk}
            ${titleSubColor ? `color: ${titleSubColor};` : ''}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover small {
            ${hoverTitleSubColor ? `color: ${hoverTitleSubColor};` : ''}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFDesk}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignDesk}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightDesk}
          ${posterBorderDesk}
        ${posterBorderRadiusDesk}
      }

        .${uniqueId}.zolo-content-iframe {
            ${contentWidthDesk}
        }

       .zolo-lightbox-content .${uniqueId}.zolo-lightbox-image {
            ${contentImgWidthDesk}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorTab}
            ${buttonBgColorTab}
            ${buttonBorderTab}
            ${buttonBorderRadiusTab}
            ${buttonPaddingTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorTab}
             ${hoverButtonBgColorTab}
            ${hoverButtonBorderRadiusTab}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorTab}
            ${playBtnPaddingTab}
            ${playBtnMarginTab}
            ${playBtnBorderTab}
            ${playBtnBorderRadiusTab}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${playBtnIconSizeTab}
             ${playBtnIconHTab}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${buttonTypoTab}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoTab}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFTab}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignTab}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightTab}
          ${posterBorderTab}
        ${posterBorderRadiusTab}
      }
       .${uniqueId}.zolo-content-iframe {
            ${contentWidthTab}
        }

        .zolo-lightbox-content .${uniqueId}.zolo-lightbox-image {
            ${contentImgWidthTab}
        }

    `;
    const mobileAllStyle = `
.${uniqueId}.zolo-lightbox-button .zolo-play-btn{
            ${posterBgColorMob}
            ${buttonBgColorMob}
            ${buttonBorderMob}
            ${buttonBorderRadiusMob}
            ${buttonPaddingMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn:hover{
            ${hoverPosterBgColorMob}
             ${hoverButtonBgColorMob}
            ${hoverButtonBorderRadiusMob}
        }
         .${uniqueId} .zolo-play-btn .zolo-btn-icon{
            ${iconBgColorMob}
            ${playBtnPaddingMob}
            ${playBtnMarginMob}
            ${playBtnBorderMob}
            ${playBtnBorderRadiusMob}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon svg{
             ${playBtnIconSizeMob}
             ${playBtnIconHMob}
        }
        .${uniqueId} .zolo-play-btn .zolo-btn-icon:before{
            ${iconHBgColorMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn .zolo-btn-text {
            ${buttonTypoMob}
        }
        .${uniqueId}.zolo-lightbox-button .zolo-play-btn small {
            ${buttonSubTypoMob}
        }

       .${uniqueId}.zolo-lightbox-button .zolo-lightbox-btn{
           ${buttonAlignFMob}
      }
       .${uniqueId}.zolo-lightbox-button{
           ${buttonAlignMob}
      }
      .${uniqueId}.zolo-lightbox-poster .zolo-poster-img {
          ${posterHeightMob}
          ${posterBorderMob}
        ${posterBorderRadiusMob}
      }
        
       .${uniqueId}.zolo-content-iframe {
            ${contentWidthMob}
        }

        .zolo-lightbox-content .${uniqueId}.zolo-lightbox-image {
            ${contentImgWidthMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.lightBox.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.lightBox.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.lightBox.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
