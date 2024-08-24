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

} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';
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
            ${itemBGDesk}
            ${itemBorderDesk}
            ${itemBorderRadiusDesk}
            ${itemPaddingDesk}
            ${itemBoxShadowStyle}
        }

         .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item a:hover{
            ${itemHoverBGDesk}
            color: ${navItemTextHoverColor ? navItemTextHoverColor : ''};
        }
        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu .zolo-navmenu-item.active a{
            ${itemActiveBGDesk}
            color: ${navItemTextActiveColor ? navItemTextActiveColor : ''};
        }

        .${uniqueId}.wp-block-zolo-navmenu .zolo-navmenu-menu {
            ${btnDeskAlign}
        }
	`;
    const tabletAllStyle = `
		
  	`;
    const mobileAllStyle = `
		
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
