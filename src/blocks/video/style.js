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
    GlobalStyleHanlder,
    generateTypographyStyles,
} = window.zoloModule;

import {
    VIDEO_ALIGN,
    POPUP_BUTTON_ALIGNMENT,
    POPUP_BTN_ICON_SIZE,
    POPUP_BTN_BG_COLOR,
    POPUP_BTN_PADDING,
    POPUP_BTN_MARGIN,
    POPUP_BTN_BORDER_RADIUS,
    POPUP_BTN_BORDER,
    POPUP_BTN_BOX_SHADOW,
    POPUP_BTN_H_BG_COLOR,
    POPUP_BTN_H_BOX_SHADOW,
    POPUP_IMAGE_BORDER,
    POPUP_IMAGE_BORDER_RADIUS,
    POPUP_IMAGE_PADDING,
    POPUP_IMAGE_BG_COLOR,
    INLINE_VIDEO_CONTANER_WIDTH,
    INLINE_VIDEO_CONTANER_HEIGHT,
} from './constants';

import { POPUP_BTN_LABEL_TYPOGRAPHY, POPUP_BTN_SUB_LABEL_TYPOGRAPHY } from './constants/typoPrefixConstants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        popupIconColor,
        popupIconHColor,
        popupBtnBorderHColor,
        popupLabelColor,
        popupLabelHColor,
        popupSubLabelColor,
        popupSubLabelHColor,
        popupImageOpacity,
        // setting
    } = attributes;

    // style

    const {
        desktopAlignStyle: videoAlignDesk,
        tabAlignStyle: videoAlignTab,
        mobAlignStyle: videoAlignMob,
    } = generateResAlignmentStyle({
        controlName: VIDEO_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        desktopAlignStyle: popupButtonAlignDesk,
        tabAlignStyle: popupButtonAlignTab,
        mobAlignStyle: popupButtonAlignMob,
    } = generateResAlignmentStyle({
        controlName: POPUP_BUTTON_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // popup button

    const {
        backgroundStylesDesktop: popupBtnBgColorDesk,
        backgroundStylesTab: popupBtnBgColorTab,
        backgroundStylesMob: popupBtnBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: POPUP_BTN_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        backgroundStylesDesktop: popupBtnBgHColorDesk,
        backgroundStylesTab: popupBtnBgHColorTab,
        backgroundStylesMob: popupBtnBgHColorMob,
    } = generateNormalBGControlStyles({
        controlName: POPUP_BTN_H_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        desktopRangeStyle: popupBtnIconSizeDesk,
        tabRangeStyle: popupBtnIconSizeTab,
        mobRangeStyle: popupBtnIconSizeMob,
    } = generateResRangeStyle({
        controlName: POPUP_BTN_ICON_SIZE,
        property: '--popup-play-button-icon-size',
        attributes,
    });

    const {
        dimensionStylesDesktop: popupBtnPaddingDesk,
        dimensionStylesTab: popupBtnPaddingTab,
        dimensionStylesMob: popupBtnPaddingMob,
    } = generateDimensionStyle({
        controlName: POPUP_BTN_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: popupBtnMarginDesk,
        dimensionStylesTab: popupBtnMarginTab,
        dimensionStylesMob: popupBtnMarginMob,
    } = generateDimensionStyle({
        controlName: POPUP_BTN_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: popupBtnBorderDesk,
        tabBorderStyle: popupBtnBorderTab,
        mobBorderStyle: popupBtnBorderMob,
    } = generateBorderStyle({
        controlName: POPUP_BTN_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: popupBtnBorderRadiusDesk,
        dimensionStylesTab: popupBtnBorderRadiusTab,
        dimensionStylesMob: popupBtnBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: POPUP_BTN_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: popupBtnBoxShadow } = generateBoxShadowStyles({
        controlName: POPUP_BTN_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: popupBtnHBoxShadow } = generateBoxShadowStyles({
        controlName: POPUP_BTN_H_BOX_SHADOW,
        attributes,
    });

    // popup label typography

    const {
        typoStylesDesktop: popupLabelTypoDesk,
        typoStylesTab: popupLabelTypoTab,
        typoStylesMobile: popupLabelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: POPUP_BTN_LABEL_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: popupSubLabelTypoDesk,
        typoStylesTab: popupSubLabelTypoTab,
        typoStylesMobile: popupSubLabelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: POPUP_BTN_SUB_LABEL_TYPOGRAPHY,
        attributes,
    });

    // popup image

    const {
        desktopBorderStyle: popupImageBorderDesk,
        tabBorderStyle: popupImageBorderTab,
        mobBorderStyle: popupImageBorderMob,
    } = generateBorderStyle({
        controlName: POPUP_IMAGE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: popupImageBorderRadiusDesk,
        dimensionStylesTab: popupImageBorderRadiusTab,
        dimensionStylesMob: popupImageBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: POPUP_IMAGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: popupImagePaddingDesk,
        dimensionStylesTab: popupImagePaddingTab,
        dimensionStylesMob: popupImagePaddingMob,
    } = generateDimensionStyle({
        controlName: POPUP_IMAGE_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: popupImageBgColorDesk,
        backgroundStylesTab: popupImageBgColorTab,
        backgroundStylesMob: popupImageBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: POPUP_IMAGE_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    // inline video
    const {
        desktopRangeStyle: inlineVideoContainerWidthDesk,
        tabRangeStyle: inlineVideoContainerWidthTab,
        mobRangeStyle: inlineVideoContainerWidthMob,
    } = generateResRangeStyle({
        controlName: INLINE_VIDEO_CONTANER_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: inlineVideoContainerHeightDesk,
        tabRangeStyle: inlineVideoContainerHeightTab,
        mobRangeStyle: inlineVideoContainerHeightMob,
    } = generateResRangeStyle({
        controlName: INLINE_VIDEO_CONTANER_HEIGHT,
        property: 'height',
        attributes,
    });

    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignDesk}
        }

        .${uniqueId}.wp-block-zolo-video .zolo-video-container{
            ${inlineVideoContainerWidthDesk}
            ${inlineVideoContainerHeightDesk}
        }
        
        .${uniqueId}.wp-block-zolo-video {
            ${popupButtonAlignDesk}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon {
            ${popupIconColor ? `color: ${popupIconColor};` : ''}
            ${popupBtnBgColorDesk}
            ${popupBtnPaddingDesk}
            ${popupBtnMarginDesk}
            ${popupBtnBorderDesk}
            ${popupBtnBorderRadiusDesk}
            ${popupBtnBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon svg{
            ${popupBtnIconSizeDesk}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap:hover .popup-button-icon {
            ${popupIconHColor ? `color: ${popupIconHColor};` : ''}
            ${popupBtnBgHColorDesk}
            ${popupBtnBorderHColor ? `border-color: ${popupBtnBorderHColor};` : ''}
            ${popupBtnHBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-label {
            ${popupLabelColor ? `color: ${popupLabelColor};` : ''}
            ${popupLabelTypoDesk}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap:hover .popup-button-label {
            ${popupLabelHColor ? `color: ${popupLabelHColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-sub-label {
            ${popupSubLabelColor ? `color: ${popupSubLabelColor};` : ''}
            ${popupSubLabelTypoDesk}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap:hover .popup-button-sub-label {
            ${popupSubLabelHColor ? `color: ${popupSubLabelHColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button {
            ${popupImageBorderDesk}
            ${popupImagePaddingDesk}
            ${popupImageBorderRadiusDesk}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button:before {
             ${popupImageBgColorDesk}
             ${popupImageOpacity ? `opacity: ${popupImageOpacity};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignTab}
        }

        .${uniqueId}.wp-block-zolo-video .zolo-video-container{
            ${inlineVideoContainerWidthTab}
            ${inlineVideoContainerHeightTab}
        }
        
        .${uniqueId}.wp-block-zolo-video {
            ${popupButtonAlignTab}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon {
            ${popupIconColor ? `color: ${popupIconColor};` : ''}
            ${popupBtnBgColorTab}
            ${popupBtnPaddingTab}
            ${popupBtnMarginTab}
            ${popupBtnBorderTab}
            ${popupBtnBorderRadiusTab}
            ${popupBtnBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon svg{
            ${popupBtnIconSizeTab}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap:hover .popup-button-icon {
            ${popupBtnBgHColorTab}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-label {
            ${popupLabelTypoTab}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-sub-label {
            ${popupSubLabelTypoTab}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button {
            ${popupImageBorderTab}
            ${popupImagePaddingTab}
            ${popupImageBorderRadiusTab}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button:before {
             ${popupImageBgColorTab}
        }
    `;

    const mobileAllStyle = ` 
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignMob}
        }

        .${uniqueId}.wp-block-zolo-video .zolo-video-container{
            ${inlineVideoContainerWidthMob}
            ${inlineVideoContainerHeightMob}
        }
        
        .${uniqueId}.wp-block-zolo-video {
            ${popupButtonAlignMob}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon {
            ${popupIconColor ? `color: ${popupIconColor};` : ''}
            ${popupBtnBgColorMob}
            ${popupBtnPaddingMob}
            ${popupBtnMarginMob}
            ${popupBtnBorderMob}
            ${popupBtnBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-icon svg{
            ${popupBtnIconSizeMob}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap:hover .popup-button-icon {
            ${popupBtnBgHColorMob}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-label {
            ${popupLabelTypoMob}
        }

        .${uniqueId}.wp-block-zolo-video .popup-button-wrap .popup-button-sub-label {
            ${popupSubLabelTypoMob}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button {
            ${popupImageBorderMob}
            ${popupImagePaddingMob}
            ${popupImageBorderRadiusMob}
        }

        .${uniqueId}.wp-block-zolo-video .image .popup-trigger-button:before {
             ${popupImageBgColorMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.video.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.video.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.video.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
