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
    const { subMenuTextColor, subMenuTextHoverColor, subMenuTextActiveColor, subMenuBorderHoverColor, subMenuBorderActiveColor, uniqueId } =
        attributes;

    // generate Background

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
     * All Style Combination
     */
    const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item {
            ${subMenuMarginDesk}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
        }

	`;
    const tabletAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item{
            ${subMenuMarginTab}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            ${subMenuHoverBGTab}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item  .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
            ${subMenuActiveBGTab}
        }
  	`;
    const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item  .zolo-navmenu-submenu-wrapper{
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item  .zolo-navmenu-submenu-wrapper .zolo-navmenu-item {
            ${subMenuMarginMob}
        }

        .zolo-block.wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a{
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item a:hover{
            ${subMenuHoverBGMob}
        }

        .wp-block-zolo-navmenu .${uniqueId}.zolo-navmenu-item .zolo-navmenu-submenu-wrapper .zolo-navmenu-item.active a{
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
