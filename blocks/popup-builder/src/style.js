import { useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { generateBorderStyle, generateNormalBGControlStyles, generateResRangeStyle, generateDimensionStyle, GlobalStyleHanlder } =
    window.zoloModule;

import {
    CB_TOP_OFFSET,
    CB_LEFT_OFFSET,
    CB_RIGHT_OFFSET,
    PB_WIDTH,
    PB_OVERLAY_BG,
    PB_BORDER,
    PB_BRADIUS,
    PB_BG,
    PB_PADDING,
} from './constants';

const Style = ({ props }) => {
    const { clientId, attributes, setAttributes } = props;

    const { uniqueId, closeBtnSize, closeBtnPosition, closeBtnColors, closeBtnId } = attributes;

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

    // close btn offset
    const {
        desktopRangeStyle: cbTopOffsetDesk,
        tabRangeStyle: cbTopOffsetTab,
        mobRangeStyle: cbTopOffsetMob,
    } = generateResRangeStyle({
        controlName: CB_TOP_OFFSET,
        property: 'top',
        attributes,
    });

    const {
        desktopRangeStyle: cbRightOffsetDesk,
        tabRangeStyle: cbRightOffsetTab,
        mobRangeStyle: cbRightOffsetMob,
    } = generateResRangeStyle({
        controlName: CB_RIGHT_OFFSET,
        property: 'right',
        attributes,
    });

    const {
        desktopRangeStyle: cbLeftOffsetDesk,
        tabRangeStyle: cbLeftOffsetTab,
        mobRangeStyle: cbLeftOffsetMob,
    } = generateResRangeStyle({
        controlName: CB_LEFT_OFFSET,
        property: 'left',
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
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn {
            ${cbTopOffsetDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn svg{
            ${closeBtnSize ? `width: ${closeBtnSize}px;` : ''}
            ${closeBtnColors && closeBtnColors?.normal ? `fill: ${closeBtnColors.normal};` : ''} 
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn:hover svg {
            ${closeBtnColors && closeBtnColors?.hover ? `fill: ${closeBtnColors.hover};` : ''} 
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn.cbp_top_right {
            ${cbRightOffsetDesk}
        }
        .${uniqueId}.wp-block-zolo-popup-builder .zolo-popup-inner .zolo-popup-close-btn.cbp_top_left {
            ${cbLeftOffsetDesk}
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
