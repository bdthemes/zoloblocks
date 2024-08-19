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
    generateDimensionStyle,
    generateTypographyStyles,
    generateTextShadowStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    PRESETS,
    COUPON_REV_PADDING,
    COUPON_REV_WIDTH,
    COUPON_SPACE,
    COUPON_ALIGN,
    COUPON_MESS_ALIGN,
    COUPON_MESS_BORDER,
    COUPON_BORDER_RADIUS,
    TOP_COUPON_BG,
    TOP_COUPON_SHADOW,
    BOTTOM_COUPON_BG,
    BOTTOM_BORDER_COLOR,
    BOTTOM_COUPON_SHADOW,
    COUPON_CODE_ALIGN,
    COUPON_CODE_BORDER,
    COUPON_CODE_BORDER_RADIUS,
    CODE_TOP_COUPON_BG,
    CODE_TOP_COUPON_SHADOW,
    CODE_BOTTOM_COUPON_BG,
} from './constants';

import { COUPON_MESS_TYPO, COUPON_CODE_TYPO } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const {
        uniqueId,

        // settings
        couponNormalColor,
        couponHoverColor,
        codeTopNormalColor,
        codeBottomHoverColor,
    } = attributes;

    const {
        dimensionStylesDesktop: couponRevPaddingDektop,
        dimensionStylesTab: couponRevPaddingTab,
        dimensionStylesMobile: couponRevPaddingMob,
    } = generateDimensionStyle({
        controlName: COUPON_REV_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopRangeStyle: couponRevWidthDektop,
        tabRangeStyle: couponRevWidthTab,
        mobRangeStyle: couponRevWidthMob,
    } = generateResRangeStyle({
        controlName: COUPON_REV_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: couponSpaceDesk,
        tabRangeStyle: couponSpaceTab,
        mobRangeStyle: couponSpaceMob,
    } = generateResRangeStyle({
        controlName: COUPON_SPACE,
        property: 'gap',
        attributes,
    });

    const {
        desktopAlignStyle: couponAlignDesk,
        tabAlignStyle: couponAlignTab,
        mobAlignStyle: couponAlignMob,
    } = generateResAlignmentStyle({
        controlName: COUPON_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: couponMessAlignDesk,
        tabAlignStyle: couponMessAlignTab,
        mobAlignStyle: couponMessAlignMob,
    } = generateResAlignmentStyle({
        controlName: COUPON_MESS_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopBorderStyle: couponMessBorderDesk,
        tabBorderStyle: couponMessBorderTab,
        mobBorderStyle: couponMessBorderMob,
    } = generateBorderStyle({
        controlName: COUPON_MESS_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: couponBorderRadiusDesk,
        dimensionStylesTab: couponBorderRadiusTab,
        dimensionStylesMobile: couponBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: COUPON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: couponMessTypoDesk,
        typoStylesTab: couponMessTypoTab,
        typoStylesMobile: couponMessTypoMob,
    } = generateTypographyStyles({
        prefixConstant: COUPON_MESS_TYPO,
        attributes,
    });

    const {
        backgroundStylesDesktop: topNormalDeskBGStyle,
        backgroundStylesTab: topNormalTabBGStyle,
        backgroundStylesMobile: topNormalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: TOP_COUPON_BG,
        noMainBGImg: false,
        attributes,
    });

    const { 
        textShadowStyle: topTextShadowStyle 
    } = generateTextShadowStyles({
        controlName: TOP_COUPON_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: bottomNormalDeskBGStyle,
        backgroundStylesTab: bottomNormalTabBGStyle,
        backgroundStylesMobile: bottomNormalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BOTTOM_COUPON_BG,
        noMainBGImg: false,
        attributes,
    });

    const {
        desktopBorderStyle: bottomBorderDesk,
        tabBorderStyle: bottomBorderTab,
        mobBorderStyle: bottomBorderMob,
    } = generateBorderStyle({
        controlName: BOTTOM_BORDER_COLOR,
        attributes,
    });

    const { 
        textShadowStyle: bottomTextShadowStyle 
    } = generateTextShadowStyles({
        controlName: BOTTOM_COUPON_SHADOW,
        attributes,
    });

    const {
        desktopAlignStyle: couponCodeAlignDesk,
        tabAlignStyle: couponCodeAlignTab,
        mobAlignStyle: couponCodeAlignMob,
    } = generateResAlignmentStyle({
        controlName: COUPON_CODE_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopBorderStyle: couponCodeBorderDesk,
        tabBorderStyle: couponCodeBorderTab,
        mobBorderStyle: couponCodeBorderMob,
    } = generateBorderStyle({
        controlName: COUPON_CODE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: couponCodeBorderRadiusDesk,
        dimensionStylesTab: couponCodeBorderRadiusTab,
        dimensionStylesMobile: couponCodeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: COUPON_CODE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: couponCodeTypoDesk,
        typoStylesTab: couponCodeTypoTab,
        typoStylesMobile: couponCodeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: COUPON_CODE_TYPO,
        attributes,
    });

    const {
        backgroundStylesDesktop: codeTopNormalDesk,
        backgroundStylesTab: codeTopNormalTab,
        backgroundStylesMobile: codeTopNormalMob,
    } = generateNormalBGControlStyles({
        controlName: CODE_TOP_COUPON_BG,
        noMainBGImg: false,
        attributes,
    });

    const { 
        textShadowStyle: codeTopTextShadow 
    } = generateTextShadowStyles({
        controlName: CODE_TOP_COUPON_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: codeBottomNormalDesk,
        backgroundStylesTab: codeBottomNormalTab,
        backgroundStylesMobile: codeBottomNormalMob,
    } = generateNormalBGControlStyles({
        controlName: CODE_BOTTOM_COUPON_BG,
        noMainBGImg: false,
        attributes,
    });

    const desktopAllStyle = `
        .${uniqueId} .zolo-coupon-code-wrap {
            ${couponSpaceDesk}
            ${couponAlignDesk}
        }

        .${uniqueId} .zolo-coupon-code-final {
            ${couponRevPaddingDektop}
            ${couponRevWidthDektop}
            ${couponCodeAlignDesk}
            ${couponCodeBorderDesk}
            ${couponCodeBorderRadiusDesk}
            ${codeTopNormalColor ? `color: ${codeTopNormalColor};` : ''}
            ${codeTopNormalDesk}
            ${codeTopTextShadow}
        }

        .${uniqueId} .zolo-coupon-code-final:hover {
            ${codeBottomHoverColor ? `color: ${codeBottomHoverColor};` : ''}
            ${codeBottomNormalDesk}
        }

        .${uniqueId} .zolo-coupon-code-text {
            ${couponCodeTypoDesk}
        }

        .${uniqueId} .zolo-coupon-msg-text {
            ${couponRevPaddingDektop}
            ${couponRevWidthDektop}
            ${couponMessAlignDesk}
            ${couponMessBorderDesk}
            ${couponBorderRadiusDesk}
            ${couponMessTypoDesk}
            ${couponNormalColor ? `color: ${couponNormalColor};` : ''};
            ${topNormalDeskBGStyle}
            ${topTextShadowStyle}
            
        } 
        .${uniqueId} .zolo-coupon-msg-text:hover {
            ${couponHoverColor ? `color: ${couponHoverColor};` : ''};
            ${bottomNormalDeskBGStyle}
            ${bottomTextShadowStyle}
            ${bottomBorderDesk}
        }
    `;

    const tabletAllStyle = `
            .${uniqueId} .zolo-coupon-code-wrap {
            ${couponSpaceTab}
            ${couponAlignTab}
        }

        .${uniqueId} .zolo-coupon-code-final {
            ${couponRevPaddingTab}
            ${couponRevWidthTab}
            ${couponCodeAlignTab}
            ${couponCodeBorderTab}
            ${couponCodeBorderRadiusTab}
            ${codeTopNormalColor ? `color: ${codeTopNormalColor};` : ''}
            ${codeTopNormalTab}
            ${codeTopTextShadow}
        }

        .${uniqueId} .zolo-coupon-code-final:hover {
            ${codeBottomHoverColor ? `color: ${codeBottomHoverColor};` : ''}
            ${codeBottomNormalTab
        }

        .${uniqueId} .zolo-coupon-code-text {
            ${couponCodeTypoTab}
        }

        .${uniqueId} .zolo-coupon-msg-text {
            ${couponRevPaddingTab}
            ${couponRevWidthTab}
            ${couponMessAlignTab}
            ${couponMessBorderTab}
            ${couponBorderRadiusTab}
            ${couponMessTypoTab}
            ${couponNormalColor ? `color: ${couponNormalColor};` : ''};
            ${topNormalTabBGStyle}
            ${topTextShadowStyle}
            
        } 
        .${uniqueId} .zolo-coupon-msg-text:hover {
            ${couponHoverColor ? `color: ${couponHoverColor};` : ''};
            ${bottomNormalTabBGStyle}
            ${bottomTextShadowStyle}
            ${bottomBorderTab}
        }
    `;

    const mobileAllStyle = `
            .${uniqueId} .zolo-coupon-code-wrap {
            ${couponSpaceMob}
            ${couponAlignMob}
        }

        .${uniqueId} .zolo-coupon-code-final {
            ${couponRevPaddingMob}
            ${couponRevWidthMob}
            ${couponCodeAlignMob}
            ${couponCodeBorderMob}
            ${couponCodeBorderRadiusMob}
            ${codeTopNormalColor ? `color: ${codeTopNormalColor};` : ''}
            ${codeTopNormalMob}
            ${codeTopTextShadow}
        }

        .${uniqueId} .zolo-coupon-code-final:hover {
            ${codeBottomHoverColor ? `color: ${codeBottomHoverColor};` : ''}
            ${codeBottomNormalMob}
        }

        .${uniqueId} .zolo-coupon-code-text {
            ${couponCodeTypoMob}
        }

        .${uniqueId} .zolo-coupon-msg-text {
            ${couponRevPaddingMob}
            ${couponRevWidthMob}
            ${couponMessAlignMob}
            ${couponMessBorderMob}
            ${couponBorderRadiusMob}
            ${couponMessTypoMob}
            ${couponNormalColor ? `color: ${couponNormalColor};` : ''};
            ${topNormalMobBGStyle}
            ${topTextShadowStyle}
        } 
        .${uniqueId} .zolo-coupon-msg-text:hover {
            ${couponHoverColor ? `color: ${couponHoverColor};` : ''};
            ${bottomNormalMobBGStyle}
            ${bottomTextShadowStyle}
            ${bottomBorderMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.couponBlock.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.couponBlock.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.couponBlock.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
