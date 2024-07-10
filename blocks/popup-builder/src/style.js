import { useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { generateBorderStyle, generateNormalBGControlStyles, generateResRangeStyle, generateDimensionStyle, GlobalStyleHanlder } =
    window.zoloModule;

import {
    PB_WIDTH,
    PB_OVERLAY_BG,
    PB_BORDER,
    PB_BRADIUS,
    PB_BG,
    PB_PADDING,
    PB_MARGIN,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BRADIUS,
    CLOSE_ICON_BG,
    CLOSE_ICON_HOVER_BG,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,

} from './constants';

const Style = ({ props }) => {
    const { clientId, attributes, setAttributes } = props;

    const { uniqueId, closeBtnSize, closeBtnPosition, closeBtnColors, closeBtnId, borderHoverColor, } = attributes;

    // popup box width
    const {
        desktopRangeStyle: pbWidthDesk,
        tabRangeStyle: pbWidthTab,
        mobRangeStyle: pbWidthMob,
    } = generateResRangeStyle({
        controlName: PB_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        backgroundStylesDesktop: overlayBGDesk,
        backgroundStylesTab: overlayBGTab,
        backgroundStylesMobile: overlayBGMob,
    } = generateNormalBGControlStyles({
        controlName: PB_OVERLAY_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: pbBgDesk,
        backgroundStylesTab: pbBgTab,
        backgroundStylesMobile: pbBgMob,
    } = generateNormalBGControlStyles({
        controlName: PB_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: PB_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: borderRadiusDesktop,
        dimensionStylesTab: borderRadiusTab,
        dimensionStylesMobile: borderRadiusMob,
    } = generateDimensionStyle({
        controlName: PB_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: paddingDesktop,
        dimensionStylesTab: paddingTab,
        dimensionStylesMobile: paddingMob,
    } = generateDimensionStyle({
        controlName: PB_PADDING,
        styleFor: 'padding',
        attributes,
    });
    
    const {
        dimensionStylesDesktop: marginDesktop,
        dimensionStylesTab: marginTab,
        dimensionStylesMobile: marginMob,
    } = generateDimensionStyle({
        controlName: PB_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    

    // close icon styles
    const {
        desktopBorderStyle: closeIconBorderDesk,
        tabBorderStyle: closeIconBorderTab,
        mobBorderStyle: closeIconBorderMob,
    } = generateBorderStyle({
        controlName: CLOSE_ICON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconBradiusDesk,
        dimensionStylesTab: closeIconBradiusTab,
        dimensionStylesMobile: closeIconBradiusMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: closeIconBgDesk,
        backgroundStylesTab: closeIconBgTab,
        backgroundStylesMobile: closeIconBgMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_BG,
        attributes,
    });

    const {
        backgroundStylesDesktop: closeIconHoverBgDesk,
        backgroundStylesTab: closeIconHoverBgTab,
        backgroundStylesMobile: closeIconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_HOVER_BG,
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconPaddingDesk,
        dimensionStylesTab: closeIconPaddingTab,
        dimensionStylesMobile: closeIconPaddingMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: closeIconMarginDesk,
        dimensionStylesTab: closeIconMarginTab,
        dimensionStylesMobile: closeIconMarginMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-popup-builder.zolo-popup-overlay {
            ${overlayBGDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner.popup_box {
            ${pbWidthDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner {
            ${pbBgDesk}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${paddingDesktop}
            ${marginDesktop}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn svg{
            ${closeBtnSize ? `width: ${closeBtnSize}px;` : ''}
            ${closeBtnSize ? `height: ${closeBtnSize}px;` : ''}
            ${closeBtnColors && closeBtnColors?.normal ? `fill: ${closeBtnColors.normal};` : ''} 
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover svg {
            ${closeBtnColors && closeBtnColors?.hover ? `fill: ${closeBtnColors.hover};` : ''} 
        }

        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn {
            ${closeIconBorderDesk}
            ${closeIconBradiusDesk}
            ${closeIconBgDesk}
            ${closeIconPaddingDesk}
            ${closeIconMarginDesk}
        }

        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover {
            ${closeIconHoverBgDesk}
            border-color: ${borderHoverColor ? borderHoverColor : ''};
        }
    `;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.container.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.container.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.container.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
