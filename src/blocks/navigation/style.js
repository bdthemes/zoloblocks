/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    NAV_MENU_ALIGNMENT,
    NAV_MENU_WRAP_BG,
    NAV_MENU_WRAP_BORDER,
    NAV_MENU_WRAP_BORDER_RADIUS,
    NAV_MENU_WRAP_PADDING,
    NAV_MENU_WRAP_BOX_SHADOW,
    NAV_MENU_ITEM_BG,
    NAV_MENU_ITEM_BORDER,
    NAV_MENU_ITEM_BORDER_RADIUS,
    NAV_MENU_ITEM_PADDING,
    NAV_MENU_ITEM_BOX_SHADOW,
    NAV_MENU_ITEM_HOVER_BG,
    NAV_MENU_ITEM_ACTIVE_BG,
    NAV_MENU_ITEM_GAP,
    MB_LOGO_WIDTH,
    MB_LOGO_HEIGHT,
    MB_LOGO_MARGIN,
    MB_LOGO_PADDING,
    HUMBURGER_MENU_ICON_SIZE,
    HUMBURGER_MENU_BG,
    HUMBURGER_MENU_BORDER,
    HUMBURGER_MENU_BORDER_RADIUS,
    HUMBURGER_MENU_PADDING,
    HUMBURGER_MENU_MARGIN,
    HUMBURGER_MENU_BOX_SHADOW,
    HUMBURGER_MENU_HOVER_BG,
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
    MOBILE_MENU_WIDTH,
    MOBILE_MENU_WRAP_BG,
    MOBILE_MENU_WRAP_BORDER,
    MOBILE_MENU_WRAP_BORDER_RADIUS,
    MOBILE_MENU_WRAP_PADDING,
    MOBILE_MENU_WRAP_BOX_SHADOW,
    SUB_MENU_INDICATOR_SIZE,
    SUB_MENU_INDICATOR_BG,
    SUB_MENU_INDICATOR_PADDING,
    SUB_MENU_INDICATOR_MARGIN,
    SUB_MENU_INDICATOR_BORDER,
    SUB_MENU_INDICATOR_BORDER_RADIUS,
    SUB_MENU_INDICATOR_BOX_SHADOW,
    SUB_MENU_INDICATOR_HOVER_BG,
    SUB_MENU_INDICATOR_ACTIVE_BG,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        navItemTextColor,
        navItemTextHoverColor,
        navItemTextActiveColor,
        navItemBorderHoverColor,
        navItemBorderActiveColor,
        uniqueId,
        humburgerMenuColor,
        humburgerMenuHoverColor,
        humburgerMenuBorderHoverColor,
        closeIconColor,
        closeIconHoverColor,
        closeIconBorderHoverColor,

        // indicator
        subMenuIconColor,
        subMenuIconHoverColor,
        subMenuIconHoverBorderColor,
        subMenuIconActiveColor,
        subMenuIconActiveBorderColor,
    } = attributes;

    // alignment
    const {
        desktopAlignStyle: buttonAlignmentDesktop,
        tabAlignStyle: buttonAlignmentTab,
        mobAlignStyle: buttonAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: NAV_MENU_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: humburgerAlignmentDesktop,
        tabAlignStyle: humburgerAlignmentTab,
        mobAlignStyle: humburgerAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: NAV_MENU_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // generate Background

    // NAV_MENU_WRAP_BG

    const {
        backgroundStylesDesktop: wrapBGDesk,
        backgroundStylesTab: wrapBGTab,
        backgroundStylesMobile: wrapBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_MENU_WRAP_BG,
        attributes,
        noMainBGImg: false,
    });

    // NAV_MENU_WRAP_BORDER

    const {
        desktopBorderStyle: wrapBorderDesk,
        tabBorderStyle: wrapBorderTab,
        mobBorderStyle: wrapBorderMob,
    } = generateBorderStyle({
        controlName: NAV_MENU_WRAP_BORDER,
        attributes,
    });

    // NAV_MENU_WRAP_BORDER_RADIUS
    const {
        dimensionStylesDesktop: wrapBorderRadiusDesk,
        dimensionStylesTab: wrapBorderRadiusTab,
        dimensionStylesMobile: wrapBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_MENU_WRAP_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // NAV_MENU_WRAP_PADDING

    const {
        dimensionStylesDesktop: wrapPaddingDesk,
        dimensionStylesTab: wrapPaddingTab,
        dimensionStylesMobile: wrapPaddingMob,
    } = generateDimensionStyle({
        controlName: NAV_MENU_WRAP_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // NAV_MENU_WRAP_BOX_SHADOW

    const { boxShadowStyle: wrapBoxShadowStyle } = generateBoxShadowStyles({
        controlName: NAV_MENU_WRAP_BOX_SHADOW,
        attributes,
    });

    // Generate Typography
    const {
        typoStylesDesktop: menuTypoDesktop,
        typoStylesTab: menuTypoTab,
        typoStylesMobile: menuTypoMob,
    } = generateTypographyStyles({
        prefixConstant: MENU_TYPOGRAPHY,
        defaultFontSize: '',
        attributes,
    });

    // NAV_MENU_ITEM_BG

    const {
        backgroundStylesDesktop: itemBGDesk,
        backgroundStylesTab: itemBGTab,
        backgroundStylesMobile: itemBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_MENU_ITEM_BG,
        attributes,
        noMainBGImg: false,
    });

    // NAV_MENU_ITEM_BORDER

    const {
        desktopBorderStyle: itemBorderDesk,
        tabBorderStyle: itemBorderTab,
        mobBorderStyle: itemBorderMob,
    } = generateBorderStyle({
        controlName: NAV_MENU_ITEM_BORDER,
        attributes,
    });

    // NAV_MENU_ITEM_BORDER_RADIUS
    const {
        dimensionStylesDesktop: itemBorderRadiusDesk,
        dimensionStylesTab: itemBorderRadiusTab,
        dimensionStylesMobile: itemBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_MENU_ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // NAV_MENU_ITEM_PADDING

    const {
        dimensionStylesDesktop: itemPaddingDesk,
        dimensionStylesTab: itemPaddingTab,
        dimensionStylesMobile: itemPaddingMob,
    } = generateDimensionStyle({
        controlName: NAV_MENU_ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // NAV_MENU_ITEM_BOX_SHADOW

    const { boxShadowStyle: itemBoxShadowStyle } = generateBoxShadowStyles({
        controlName: NAV_MENU_ITEM_BOX_SHADOW,
        attributes,
    });

    // NAV_MENU_ITEM_HOVER_BG
    const {
        backgroundStylesDesktop: itemHoverBGDesk,
        backgroundStylesTab: itemHoverBGTab,
        backgroundStylesMobile: itemHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_MENU_ITEM_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    // NAV_MENU_ITEM_ACTIVE_BG
    const {
        backgroundStylesDesktop: itemActiveBGDesk,
        backgroundStylesTab: itemActiveBGTab,
        backgroundStylesMobile: itemActiveBGMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_MENU_ITEM_ACTIVE_BG,
        attributes,
        noMainBGImg: false,
    });

    // NAV_MENU_ITEM_GAP
    const {
        desktopRangeStyle: menuItemGapDesk,
        tabRangeStyle: menuItemGapTab,
        mobRangeStyle: menuItemGapMob,
    } = generateResRangeStyle({
        controlName: NAV_MENU_ITEM_GAP,
        property: 'gap',
        attributes,
    });

    // MOBILE LOGO
    const {
        desktopRangeStyle: mbLogoWidthDesk,
        tabRangeStyle: mbLogoWidthTab,
        mobRangeStyle: mbLogoWidthMob,
    } = generateResRangeStyle({
        controlName: MB_LOGO_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: mbLogoHeightDesk,
        tabRangeStyle: mbLogoHeightTab,
        mobRangeStyle: mbLogoHeightMob,
    } = generateResRangeStyle({
        controlName: MB_LOGO_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: mbLogoMarginDesk,
        dimensionStylesTab: mbLogoMarginTab,
        dimensionStylesMobile: mbLogoMarginMob,
    } = generateDimensionStyle({
        controlName: MB_LOGO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: mbLogoPaddingDesk,
        dimensionStylesTab: mbLogoPaddingTab,
        dimensionStylesMobile: mbLogoPaddingMob,
    } = generateDimensionStyle({
        controlName: MB_LOGO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // HUMBURGER_MENU_ICON_SIZE
    const {
        desktopRangeStyle: humburgerMenuIconSizeDesk,
        tabRangeStyle: humburgerMenuIconSizeTab,
        mobRangeStyle: humburgerMenuIconSizeMob,
    } = generateResRangeStyle({
        controlName: HUMBURGER_MENU_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // HUMBURGER_MENU_BG

    const {
        backgroundStylesDesktop: humburgerMenuBGDesk,
        backgroundStylesTab: humburgerMenuBGTab,
        backgroundStylesMobile: humburgerMenuBGMob,
    } = generateNormalBGControlStyles({
        controlName: HUMBURGER_MENU_BG,
        attributes,
        noMainBGImg: false,
    });

    // HUMBURGER_MENU_BORDER

    const {
        desktopBorderStyle: humburgerMenuBorderDesk,
        tabBorderStyle: humburgerMenuBorderTab,
        mobBorderStyle: humburgerMenuBorderMob,
    } = generateBorderStyle({
        controlName: HUMBURGER_MENU_BORDER,
        attributes,
    });

    // HUMBURGER_MENU_BORDER_RADIUS

    const {
        dimensionStylesDesktop: humburgerMenuBorderRadiusDesk,
        dimensionStylesTab: humburgerMenuBorderRadiusTab,
        dimensionStylesMobile: humburgerMenuBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HUMBURGER_MENU_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // HUMBURGER_MENU_PADDING

    const {
        dimensionStylesDesktop: humburgerMenuPaddingDesk,
        dimensionStylesTab: humburgerMenuPaddingTab,
        dimensionStylesMobile: humburgerMenuPaddingMob,
    } = generateDimensionStyle({
        controlName: HUMBURGER_MENU_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // HUMBURGER_MENU_MARGIN

    const {
        dimensionStylesDesktop: humburgerMenuMarginDesk,
        dimensionStylesTab: humburgerMenuMarginTab,
        dimensionStylesMobile: humburgerMenuMarginMob,
    } = generateDimensionStyle({
        controlName: HUMBURGER_MENU_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // HUMBURGER_MENU_BOX_SHADOW

    const { boxShadowStyle: humburgerMenuBoxShadowStyle } = generateBoxShadowStyles({
        controlName: HUMBURGER_MENU_BOX_SHADOW,
        attributes,
    });

    // HUMBURGER_MENU_HOVER_BG

    const {
        backgroundStylesDesktop: humburgerMenuHoverBGDesk,
        backgroundStylesTab: humburgerMenuHoverBGTab,
        backgroundStylesMobile: humburgerMenuHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: HUMBURGER_MENU_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    // CLOSE_ICON_SIZE

    const {
        desktopRangeStyle: closeIconSizeDesk,
        tabRangeStyle: closeIconSizeTab,
        mobRangeStyle: closeIconSizeMob,
    } = generateResRangeStyle({
        controlName: CLOSE_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // CLOSE_ICON_BG

    const {
        backgroundStylesDesktop: closeIconBGDesk,
        backgroundStylesTab: closeIconBGTab,
        backgroundStylesMobile: closeIconBGMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    // CLOSE_ICON_BORDER

    const {
        desktopBorderStyle: closeIconBorderDesk,
        tabBorderStyle: closeIconBorderTab,
        mobBorderStyle: closeIconBorderMob,
    } = generateBorderStyle({
        controlName: CLOSE_ICON_BORDER,
        attributes,
    });

    // CLOSE_ICON_BORDER_RADIUS

    const {
        dimensionStylesDesktop: closeIconBorderRadiusDesk,
        dimensionStylesTab: closeIconBorderRadiusTab,
        dimensionStylesMobile: closeIconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // CLOSE_ICON_PADDING

    const {
        dimensionStylesDesktop: closeIconPaddingDesk,
        dimensionStylesTab: closeIconPaddingTab,
        dimensionStylesMobile: closeIconPaddingMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // CLOSE_ICON_MARGIN

    const {
        dimensionStylesDesktop: closeIconMarginDesk,
        dimensionStylesTab: closeIconMarginTab,
        dimensionStylesMobile: closeIconMarginMob,
    } = generateDimensionStyle({
        controlName: CLOSE_ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // CLOSE_ICON_BOX_SHADOW

    const { boxShadowStyle: closeIconBoxShadowStyle } = generateBoxShadowStyles({
        controlName: CLOSE_ICON_BOX_SHADOW,
        attributes,
    });

    // CLOSE_ICON_HOVER_BG

    const {
        backgroundStylesDesktop: closeIconHoverBGDesk,
        backgroundStylesTab: closeIconHoverBGTab,
        backgroundStylesMobile: closeIconHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: CLOSE_ICON_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    // MOBILE_MENU_WIDTH

    const {
        desktopRangeStyle: mobileMenuWidthDesk,
        tabRangeStyle: mobileMenuWidthTab,
        mobRangeStyle: mobileMenuWidthMob,
    } = generateResRangeStyle({
        controlName: MOBILE_MENU_WIDTH,
        property: 'max-width',
        attributes,
    });

    // MOBILE_MENU_WRAP_BG

    const {
        backgroundStylesDesktop: mobileMenuWrapBGDesk,
        backgroundStylesTab: mobileMenuWrapBGTab,
        backgroundStylesMobile: mobileMenuWrapBGMob,
    } = generateNormalBGControlStyles({
        controlName: MOBILE_MENU_WRAP_BG,
        attributes,
        noMainBGImg: false,
    });

    // MOBILE_MENU_WRAP_BORDER

    const {
        desktopBorderStyle: mobileMenuWrapBorderDesk,
        tabBorderStyle: mobileMenuWrapBorderTab,
        mobBorderStyle: mobileMenuWrapBorderMob,
    } = generateBorderStyle({
        controlName: MOBILE_MENU_WRAP_BORDER,
        attributes,
    });

    // MOBILE_MENU_WRAP_BORDER_RADIUS

    const {
        dimensionStylesDesktop: mobileMenuWrapBorderRadiusDesk,
        dimensionStylesTab: mobileMenuWrapBorderRadiusTab,
        dimensionStylesMobile: mobileMenuWrapBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: MOBILE_MENU_WRAP_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // MOBILE_MENU_WRAP_PADDING

    const {
        dimensionStylesDesktop: mobileMenuWrapPaddingDesk,
        dimensionStylesTab: mobileMenuWrapPaddingTab,
        dimensionStylesMobile: mobileMenuWrapPaddingMob,
    } = generateDimensionStyle({
        controlName: MOBILE_MENU_WRAP_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // MOBILE_MENU_WRAP_BOX_SHADOW

    const { boxShadowStyle: mobileMenuWrapBoxShadowStyle } = generateBoxShadowStyles({
        controlName: MOBILE_MENU_WRAP_BOX_SHADOW,
        attributes,
    });

    // Indicator
    const {
        desktopRangeStyle: subMenuIndicatorSizeDesk,
        tabRangeStyle: subMenuIndicatorSizeTab,
        mobRangeStyle: subMenuIndicatorSizeMob,
    } = generateResRangeStyle({
        controlName: SUB_MENU_INDICATOR_SIZE,
        property: '--zolo-submenu-arrow-size',
        attributes,
    });

    const {
        backgroundStylesDesktop: subMenuIndicatorBGDesk,
        backgroundStylesTab: subMenuIndicatorBGTab,
        backgroundStylesMobile: subMenuIndicatorBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_INDICATOR_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: subMenuIndicatorPaddingDesk,
        dimensionStylesTab: subMenuIndicatorPaddingTab,
        dimensionStylesMobile: subMenuIndicatorPaddingMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_INDICATOR_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: subMenuIndicatorMarginDesk,
        dimensionStylesTab: subMenuIndicatorMarginTab,
        dimensionStylesMobile: subMenuIndicatorMarginMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_INDICATOR_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: subMenuIndicatorBorderDesk,
        tabBorderStyle: subMenuIndicatorBorderTab,
        mobBorderStyle: subMenuIndicatorBorderMob,
    } = generateBorderStyle({
        controlName: SUB_MENU_INDICATOR_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: subMenuIndicatorBorderRadiusDesk,
        dimensionStylesTab: subMenuIndicatorBorderRadiusTab,
        dimensionStylesMobile: subMenuIndicatorBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_INDICATOR_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: subMenuIndicatorBoxShadowStyle } = generateBoxShadowStyles({
        controlName: SUB_MENU_INDICATOR_BOX_SHADOW,
        attributes,
    });

    const {
        backgroundStylesDesktop: subMenuIndicatorHoverBGDesk,
        backgroundStylesTab: subMenuIndicatorHoverBGTab,
        backgroundStylesMobile: subMenuIndicatorHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_INDICATOR_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: subMenuIndicatorActiveBGDesk,
        backgroundStylesTab: subMenuIndicatorActiveBGTab,
        backgroundStylesMobile: subMenuIndicatorActiveBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_INDICATOR_ACTIVE_BG,
        attributes,
        noMainBGImg: false,
    });

    /**
     * Generate Alignment Class
     */

    const btnDeskAlign = `
    display: ${buttonAlignmentDesktop === 'text-align:justify;' ? 'flex' : ''};
    text-align: ${humburgerAlignmentDesktop === 'text-align:left' ? 'left' : ''};
  `;

    const btnTabAlign = `
    display: ${buttonAlignmentTab === 'text-align:justify;' ? 'flex' : ''};
    text-align: ${humburgerAlignmentTab === 'text-align:center' ? 'center' : ''};
  `;

    const btnMobAlign = `
    display: ${buttonAlignmentMob === 'text-align:justify;' ? 'flex' : ''};
    text-align: ${humburgerAlignmentMob === 'text-align:right' ? 'right' : ''};
  `;

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-navigation,
		.${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
			${buttonAlignmentDesktop}
            ${humburgerAlignmentDesktop}
		}

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper {
            ${wrapBGDesk}
            ${wrapBorderDesk}
            ${wrapBorderRadiusDesk}
            ${wrapPaddingDesk}
            ${wrapBoxShadowStyle}
        }

         .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu{
            ${menuItemGapDesk}
        }

         .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link {
            color: ${navItemTextColor ? navItemTextColor : ''};
            ${menuTypoDesktop}
            ${itemBGDesk}
            ${itemBorderDesk}
            ${itemBorderRadiusDesk}
            ${itemPaddingDesk}
            ${itemBoxShadowStyle}
        }

         .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link:hover{
            ${itemHoverBGDesk}
            color: ${navItemTextHoverColor ? navItemTextHoverColor : ''};
            border-color: ${navItemBorderHoverColor ? navItemBorderHoverColor : ''};
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item.current-item a{
            ${itemActiveBGDesk}
            color: ${navItemTextActiveColor ? navItemTextActiveColor : ''};
            border-color: ${navItemBorderActiveColor ? navItemBorderActiveColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
            ${btnDeskAlign}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-logo img{
            ${mbLogoWidthDesk}
            ${mbLogoMarginDesk}
            ${mbLogoPaddingDesk}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-hamburger{
            color: ${humburgerMenuColor ? humburgerMenuColor : ''};
            ${humburgerMenuIconSizeDesk}
            ${humburgerMenuBGDesk}
            ${humburgerMenuBorderDesk}
            ${humburgerMenuBorderRadiusDesk}
            ${humburgerMenuPaddingDesk}
            ${humburgerMenuMarginDesk}
            ${humburgerMenuBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-hamburger:hover{
            color: ${humburgerMenuHoverColor ? humburgerMenuHoverColor : ''};
            ${humburgerMenuHoverBGDesk}
            border-color: ${humburgerMenuBorderHoverColor ? humburgerMenuBorderHoverColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-close{
            color: ${closeIconColor ? closeIconColor : ''};
            ${closeIconSizeDesk}
            ${closeIconBGDesk}
            ${closeIconBorderDesk}
            ${closeIconBorderRadiusDesk}
            ${closeIconPaddingDesk}
            ${closeIconMarginDesk}
            ${closeIconBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-close:hover{
            ${closeIconHoverBGDesk}
            color: ${closeIconHoverColor ? closeIconHoverColor : ''};
            border-color: ${closeIconBorderHoverColor ? closeIconBorderHoverColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.zolo-navigation-open {
            ${mobileMenuWidthDesk}
            ${mobileMenuWrapBGDesk}
            ${mobileMenuWrapBorderDesk}
            ${mobileMenuWrapBorderRadiusDesk}
            ${mobileMenuWrapPaddingDesk}
            ${mobileMenuWrapBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGDesk}
            ${subMenuIndicatorPaddingDesk}
            ${subMenuIndicatorMarginDesk}
            ${subMenuIndicatorBorderDesk}
            ${subMenuIndicatorBorderRadiusDesk}
            ${subMenuIndicatorBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGDesk}
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGDesk}
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow svg{
           ${subMenuIndicatorSizeDesk};
            fill: ${subMenuIconColor ? subMenuIconColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow svg{
            fill: ${subMenuIconHoverColor ? subMenuIconHoverColor : ''};
            border-color: ${subMenuIconHoverBorderColor ? subMenuIconHoverBorderColor : ''};
            ${subMenuIndicatorHoverBGDesk}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper .zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow svg{
            fill: ${subMenuIconActiveColor ? subMenuIconActiveColor : ''};
            border-color: ${subMenuIconActiveBorderColor ? subMenuIconActiveBorderColor : ''};
            ${subMenuIndicatorActiveBGDesk}
        }

	`;
    const tabletAllStyle = `

    	.${uniqueId}.wp-block-zolo-navigation,
		.${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
			${buttonAlignmentTab}
            ${humburgerAlignmentTab}
		}

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper {
            ${wrapBGTab}
            ${wrapBorderTab}
            ${wrapBorderRadiusTab}
            ${wrapPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu{
            ${menuItemGapTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link{
            ${menuTypoTab}
            ${itemBGTab}
            ${itemBorderTab}
            ${itemBorderRadiusTab}
            ${itemPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link:hover{
            ${itemHoverBGTab}
        }
        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item.current-item a{
            ${itemActiveBGTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
            ${btnTabAlign}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-logo img{
            ${mbLogoWidthTab}
            ${mbLogoMarginTab}
            ${mbLogoPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-hamburger{
            ${humburgerMenuIconSizeTab}
            ${humburgerMenuBGTab}
            ${humburgerMenuBorderTab}
            ${humburgerMenuBorderRadiusTab}
            ${humburgerMenuPaddingTab}
            ${humburgerMenuMarginTab}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-close{
            ${closeIconSizeTab}
            ${closeIconBGTab}
            ${closeIconBorderTab}
            ${closeIconBorderRadiusTab}
            ${closeIconPaddingTab}
            ${closeIconMarginTab}
            ${closeIconBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.zolo-navigation-open {
            ${mobileMenuWidthTab}
            ${mobileMenuWrapBGTab}
            ${mobileMenuWrapBorderTab}
            ${mobileMenuWrapBorderRadiusTab}
            ${mobileMenuWrapPaddingTab}
        }

  	`;
    const mobileAllStyle = `

        .${uniqueId}.wp-block-zolo-navigation,
		.${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
			${buttonAlignmentMob}
            ${humburgerAlignmentMob}
		}

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper {
            ${wrapBGMob}
            ${wrapBorderMob}
            ${wrapBorderRadiusMob}
            ${wrapPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu{
            ${menuItemGapMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link{
            ${menuTypoMob}
            ${itemBGMob}
            ${itemBorderMob}
            ${itemBorderRadiusMob}
            ${itemPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item .zolo-navigation-link:hover{
            ${itemHoverBGMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu .zolo-navigation-item.current-item a{
            ${itemActiveBGMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-menu {
            ${btnMobAlign}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-logo img{
            ${mbLogoWidthMob}
            ${mbLogoMarginMob}
            ${mbLogoPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-hamburger{
            ${humburgerMenuIconSizeMob}
            ${humburgerMenuBGMob}
            ${humburgerMenuBorderMob}
            ${humburgerMenuBorderRadiusMob}
            ${humburgerMenuPaddingMob}
            ${humburgerMenuMarginMob}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.is-menu-active .zolo-navigation-sidebar-top .zolo-navigation-sidebar-close{
            ${closeIconSizeMob}
            ${closeIconBGMob}
            ${closeIconBorderMob}
            ${closeIconBorderRadiusMob}
            ${closeIconPaddingMob}
            ${closeIconMarginMob}
            ${closeIconBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navigation .zolo-navigation-wrapper.zolo-navigation-open {
            ${mobileMenuWidthMob}
            ${mobileMenuWrapBGMob}
            ${mobileMenuWrapBorderMob}
            ${mobileMenuWrapBorderRadiusMob}
            ${mobileMenuWrapPaddingMob}
        }
  	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.navigation.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.navigation.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.navigation.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
