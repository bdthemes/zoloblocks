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

    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignDesk}
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
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-video .video-player-popup-inline-content{
            ${videoAlignTab}
        }
    `;

    const mobileAllStyle = ` 
        .${uniqueId}.wp-block-zolo-video {
            ${videoAlignMob}
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
