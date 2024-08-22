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
} from './constants';

import { BUTTON_TYPOGRAPHY, BUTTON_SUB_TYPOGRAPHY } from './constants/typoPrefixConstants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,

        // setting
        titleColor,
        hoverTitleColor,
        titleSubColor,
        hoverTitleSubColor,
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
        desktopAlignStyle: buttonAlignDesk,
        tabAlignStyle: buttonAlignTab,
        mobAlignStyle: buttonAlignMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGN,
        property: 'text-align',
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
        prefixContant: BUTTON_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: buttonSubTypoDesk,
        typoStylesTab: buttonSubTypoTab,
        typoStylesMobile: buttonSubTypoMob,
    } = generateTypographyStyles({
        prefixContant: BUTTON_SUB_TYPOGRAPHY,
        attributes,
    });

    // style

    const desktopAllStyle = `
        .${uniqueId} .zolo-poster-img {
            ${posterHeightDesk}
        }
        .${uniqueId} .zolo-lightbox-poster {
            ${buttonAlignDesk}
        }
        .${uniqueId} .zolo-lightbox-btn-2 {
            ${posterBgColorDesk}
            
        }
        .${uniqueId} .zolo-lightbox-poster button {
            ${posterBorderDesk}
            ${posterBorderRadiusDesk}
            ${posterPaddingDesk}
            ${posterBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-2:hover {
            ${hoverPosterBgColorDesk}
        }
        .${uniqueId} .zolo-lightbox-poster button:hover {
            ${hoverPosterBoxShadow}
        }

        .${uniqueId} .zolo-lightbox-btn {
            ${buttonAlignDesk}
        }
        .${uniqueId} .zolo-lightbox-btn-1 {
            ${buttonBgColorDesk}
            ${buttonBorderDesk}
            ${buttonBorderRadiusDesk}
            ${buttonPaddingDesk}
            ${buttonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover {
            ${hoverButtonBgColorDesk}
            ${hoverButtonBorderRadiusDesk}
            ${hoverButtonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1 .zolo-btn-text {
            ${titleColor ? `color: ${titleColor};` : ''}
            ${buttonTypoDesk}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover .zolo-btn-text {
            ${hoverTitleColor ? `color: ${hoverTitleColor};` : ''}
        }
            
        .${uniqueId} .zolo-btn-text small {
            ${buttonSubTypoDesk}
        }
        .${uniqueId} .zolo-lightbox-btn-1 small {
            ${titleSubColor ? `color: ${titleSubColor};` : ''}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover small {
            ${hoverTitleSubColor ? `color: ${hoverTitleSubColor};` : ''}
        }  
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-poster-img {
            ${posterHeightTab}
        }
        .${uniqueId} .zolo-lightbox-poster {
            ${buttonAlignTab}
        }
        .${uniqueId} .zolo-lightbox-btn-2 {
            ${posterBgColorTab}
            
        }
        .${uniqueId} .zolo-lightbox-poster button {
            ${posterBorderTab}
            ${posterBorderRadiusTab}
            ${posterPaddingTab}
            ${posterBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-2:hover {
            ${hoverPosterBgColorTab}
        }
        .${uniqueId} .zolo-lightbox-poster button:hover {
            ${hoverPosterBoxShadow}
        }

        .${uniqueId} .zolo-lightbox-btn {
            ${buttonAlignTab}
        }
        .${uniqueId} .zolo-lightbox-btn-1 {
            ${buttonBgColorTab}
            ${buttonBorderTab}
            ${buttonBorderRadiusTab}
            ${buttonPaddingTab}
            ${buttonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover {
            ${hoverButtonBgColorTab}
            ${hoverButtonBorderRadiusTab}
            ${hoverButtonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1 .zolo-btn-text {
            ${titleColor ? `color: ${titleColor};` : ''}
            ${buttonTypoTab}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover .zolo-btn-text {
            ${hoverTitleColor ? `color: ${hoverTitleColor};` : ''}
        }
            
        .${uniqueId} .zolo-btn-text small {
            ${buttonSubTypoTab}
        }
        .${uniqueId} .zolo-lightbox-btn-1 small {
            ${titleSubColor ? `color: ${titleSubColor};` : ''}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover small {
            ${hoverTitleSubColor ? `color: ${hoverTitleSubColor};` : ''}
        }
    
    `;
    const mobileAllStyle = `
        .${uniqueId} .zolo-poster-img {
            ${posterHeightMob}
        }
        .${uniqueId} .zolo-lightbox-poster {
            ${buttonAlignMob}
        }
        .${uniqueId} .zolo-lightbox-btn-2 {
            ${posterBgColorMob}
            
        }
        .${uniqueId} .zolo-lightbox-poster button {
            ${posterBorderMob}
            ${posterBorderRadiusMob}}
            ${posterPaddingMob}}
            ${posterBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-2:hover {
            ${hoverPosterBgColorMob}
        }
        .${uniqueId} .zolo-lightbox-poster button:hover {
            ${hoverPosterBoxShadow}
        }

        .${uniqueId} .zolo-lightbox-btn {
            ${buttonAlignDesk}
        }
        .${uniqueId} .zolo-lightbox-btn-1 {
            ${buttonBgColorMob}
            ${buttonBorderMob}
            ${buttonBorderRadiusMob}
            ${buttonPaddingMob}
            ${buttonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover {
            ${hoverButtonBgColorMob}
            ${hoverButtonBorderRadiusMob}
            ${hoverButtonBoxShadow}
        }
        .${uniqueId} .zolo-lightbox-btn-1 .zolo-btn-text {
            ${titleColor ? `color: ${titleColor};` : ''}
            ${buttonTypoMob}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover .zolo-btn-text {
            ${hoverTitleColor ? `color: ${hoverTitleColor};` : ''}
        }
            
        .${uniqueId} .zolo-btn-text small {
            ${buttonSubTypoMob}
        }
        .${uniqueId} .zolo-lightbox-btn-1 small {
            ${titleSubColor ? `color: ${titleSubColor};` : ''}
        }
        .${uniqueId} .zolo-lightbox-btn-1:hover small {
            ${hoverTitleSubColor ? `color: ${hoverTitleSubColor};` : ''}
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
