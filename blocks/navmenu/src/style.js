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
    DROPDOWN_WRAP_BG,
    DROPDOWN_WRAP_BORDER,
    DROPDOWN_WRAP_BORDER_RADIUS,
    DROPDOWN_WRAP_PADDING,
    DROPDOWN_WRAP_MARGIN,
    DROPDOWN_WRAP_BOX_SHADOW,
    DROPDOWN_WIDTH,
    SUB_MENU_BG,
    SUB_MENU_BORDER,
    SUB_MENU_BORDER_RADIUS,
    SUB_MENU_PADDING,
    SUB_MENU_MARGIN,
    SUB_MENU_BOX_SHADOW,
    SUB_MENU_HOVER_BG,
    SUB_MENU_ACTIVE_BG,
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

        subMenuTextColor,
        subMenuTextHoverColor,
        subMenuTextActiveColor,
        subMenuBorderHoverColor,
        subMenuBorderActiveColor,
        uniqueId,
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

    // DROPDOWN_WRAP_BG

    const {
        backgroundStylesDesktop: dropdownWrapBGDesk,
        backgroundStylesTab: dropdownWrapBGTab,
        backgroundStylesMobile: dropdownWrapBGMob,
    } = generateNormalBGControlStyles({
        controlName: DROPDOWN_WRAP_BG,
        attributes,
        noMainBGImg: false,
    });

    // DROPDOWN_WRAP_BORDER

    const {
        desktopBorderStyle: dropdownWrapBorderDesk,
        tabBorderStyle: dropdownWrapBorderTab,
        mobBorderStyle: dropdownWrapBorderMob,
    } = generateBorderStyle({
        controlName: DROPDOWN_WRAP_BORDER,
        attributes,
    });

    // DROPDOWN_WRAP_BORDER_RADIUS
    const {
        dimensionStylesDesktop: dropdownWrapBorderRadiusDesk,
        dimensionStylesTab: dropdownWrapBorderRadiusTab,
        dimensionStylesMobile: dropdownWrapBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: DROPDOWN_WRAP_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // DROPDOWN_WRAP_PADDING

    const {
        dimensionStylesDesktop: dropdownWrapPaddingDesk,
        dimensionStylesTab: dropdownWrapPaddingTab,
        dimensionStylesMobile: dropdownWrapPaddingMob,
    } = generateDimensionStyle({
        controlName: DROPDOWN_WRAP_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // DROPDOWN_WRAP_MARGIN

    const {
        dimensionStylesDesktop: dropdownWrapMarginDesk,
        dimensionStylesTab: dropdownWrapMarginTab,
        dimensionStylesMobile: dropdownWrapMarginMob,
    } = generateDimensionStyle({
        controlName: DROPDOWN_WRAP_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // DROPDOWN_WRAP_BOX_SHADOW

    const { boxShadowStyle: dropdownWrapBoxShadowStyle } = generateBoxShadowStyles({
        controlName: DROPDOWN_WRAP_BOX_SHADOW,
        attributes,
    });

    // DROPDOWN_WIDTH

    const {
        desktopRangeStyle: dropdownSizeDesk,
        tabRangeStyle: dropdownSizeTab,
        mobRangeStyle: dropdownSizeMob,
    } = generateResRangeStyle({
        controlName: DROPDOWN_WIDTH,
        property: 'min-width',
        attributes,
    });

    // Generate Typography
    const {
        typoStylesDesktop: subMenuTypoDesktop,
        typoStylesTab: subMenuTypoTab,
        typoStylesMobile: subMenuTypoMob,
    } = generateTypographyStyles({
        prefixConstant: SUB_MENU_TYPOGRAPHY,
        defaultFontSize: '',
        attributes,
    });

    // SUB_MENU_BG

    const {
        backgroundStylesDesktop: subMenuBGDesk,
        backgroundStylesTab: subMenuBGTab,
        backgroundStylesMobile: subMenuBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_BG,
        attributes,
        noMainBGImg: false,
    });

    // SUB_MENU_BORDER

    const {
        desktopBorderStyle: subMenuBorderDesk,
        tabBorderStyle: subMenuBorderTab,
        mobBorderStyle: subMenuBorderMob,
    } = generateBorderStyle({
        controlName: SUB_MENU_BORDER,
        attributes,
    });

    // SUB_MENU_BORDER_RADIUS
    const {
        dimensionStylesDesktop: subMenuBorderRadiusDesk,
        dimensionStylesTab: subMenuBorderRadiusTab,
        dimensionStylesMobile: subMenuBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // SUB_MENU_PADDING

    const {
        dimensionStylesDesktop: subMenuPaddingDesk,
        dimensionStylesTab: subMenuPaddingTab,
        dimensionStylesMobile: subMenuPaddingMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // SUB_MENU_MARGIN

    const {
        dimensionStylesDesktop: subMenuMarginDesk,
        dimensionStylesTab: subMenuMarginTab,
        dimensionStylesMobile: subMenuMarginMob,
    } = generateDimensionStyle({
        controlName: SUB_MENU_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // SUB_MENU_BOX_SHADOW

    const { boxShadowStyle: subMenuBoxShadowStyle } = generateBoxShadowStyles({
        controlName: SUB_MENU_BOX_SHADOW,
        attributes,
    });

    // SUB_MENU_HOVER_BG
    const {
        backgroundStylesDesktop: subMenuHoverBGDesk,
        backgroundStylesTab: subMenuHoverBGTab,
        backgroundStylesMobile: subMenuHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    // SUB_MENU_ACTIVE_BG

    const {
        backgroundStylesDesktop: subMenuActiveBGDesk,
        backgroundStylesTab: subMenuActiveBGTab,
        backgroundStylesMobile: subMenuActiveBGMob,
    } = generateNormalBGControlStyles({
        controlName: SUB_MENU_ACTIVE_BG,
        attributes,
        noMainBGImg: false,
    });

    /**
     * Generate Alignment Class
     */

    const btnDeskAlign = `display: ${buttonAlignmentDesktop === 'text-align:justify;' ? 'flex' : ''};`;
    const btnTabAlign = `display: ${buttonAlignmentTab === 'text-align:justify;' ? 'flex' : ''};`;
    const btnMobAlign = `display: ${buttonAlignmentMob === 'text-align:justify;' ? 'flex' : ''};`;
    // console.log('btnDeskAlign', btnDeskAlign);

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
			${buttonAlignmentDesktop}
		}

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${wrapBGDesk}
            ${wrapBorderDesk}
            ${wrapBorderRadiusDesk}
            ${wrapPaddingDesk}
            ${wrapBoxShadowStyle}
        }

         .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a{
            color: ${navItemTextColor ? navItemTextColor : ''};
            ${menuTypoDesktop}
            ${itemBGDesk}
            ${itemBorderDesk}
            ${itemBorderRadiusDesk}
            ${itemPaddingDesk}
            ${itemBoxShadowStyle}
        }

         .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a:hover{
            ${itemHoverBGDesk}
            color: ${navItemTextHoverColor ? navItemTextHoverColor : ''};
            border-color: ${navItemBorderHoverColor ? navItemBorderHoverColor : ''};
        }
        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item.active a{
            ${itemActiveBGDesk}
            color: ${navItemTextActiveColor ? navItemTextActiveColor : ''};
            border-color: ${navItemBorderActiveColor ? navItemBorderActiveColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${btnDeskAlign}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-item .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item {
            ${subMenuMarginDesk}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
        }

	`;
    const tabletAllStyle = `

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${wrapBGTab}
            ${wrapBorderTab}
            ${wrapBorderRadiusTab}
            ${wrapPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a{
            ${menuTypoTab}
            ${itemBGTab}
            ${itemBorderTab}
            ${itemBorderRadiusTab}
            ${itemPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a:hover{
            ${itemHoverBGTab}
        }
        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item.active a{
            ${itemActiveBGTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${btnTabAlign}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-item .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item{
            ${subMenuMarginTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            ${subMenuHoverBGTab}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
            ${subMenuActiveBGTab}
        }
  	`;
    const mobileAllStyle = `

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${wrapBGMob}
            ${wrapBorderMob}
            ${wrapBorderRadiusMob}
            ${wrapPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a{
            ${menuTypoMob}
            ${itemBGMob}
            ${itemBorderMob}
            ${itemBorderRadiusMob}
            ${itemPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a:hover{
            ${itemHoverBGMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item.active a{
            ${itemActiveBGMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${btnMobAlign}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-item .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item {
            ${subMenuMarginMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            ${subMenuHoverBGMob}
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
            ${subMenuActiveBGMob}
        }
  	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.navmenu.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.navmenu.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.navmenu.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
