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
        subMenuTextColor,
        subMenuTextHoverColor,
        subMenuTextActiveColor,
        subMenuBorderHoverColor,
        subMenuBorderActiveColor,
        uniqueId,
        subMenuIconColor,
        subMenuIconHoverColor,
        subMenuIconHoverBorderColor,
        subMenuIconActiveColor,
        subMenuIconActiveBorderColor,
    } = attributes;

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
     * All Style Combination
     */
    const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item {
            ${subMenuMarginDesk}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
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

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item{
            ${subMenuMarginTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            ${subMenuHoverBGTab}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item  .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            ${subMenuActiveBGTab}
        }

         .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGTab}
            ${subMenuIndicatorPaddingTab}
            ${subMenuIndicatorMarginTab}
            ${subMenuIndicatorBorderTab}
            ${subMenuIndicatorBorderRadiusTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGTab}
        }
        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGTab}
        }

  	`;
    const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-navigation-submenu,
        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .wp-block-zolo-megamenu {
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item  .zolo-navigation-submenu-wrapper .zolo-navigation-item {
            ${subMenuMarginMob}
        }

        .zolo-block.wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a{
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item a:hover{
            ${subMenuHoverBGMob}
        }

        .wp-block-zolo-navigation .${uniqueId}.zolo-navigation-item .zolo-navigation-submenu-wrapper .zolo-navigation-item.active a{
            ${subMenuActiveBGMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link .zolo-submenu-arrow {
            ${subMenuIndicatorBGMob}
            ${subMenuIndicatorPaddingMob}
            ${subMenuIndicatorMarginMob}
            ${subMenuIndicatorBorderMob}
            ${subMenuIndicatorBorderRadiusMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link:hover .zolo-submenu-arrow {
            ${subMenuIndicatorHoverBGMob}
        }
        .zolo-block.wp-block-zolo-navigation .zolo-navigation-wrapper .${uniqueId}.zolo-navigation-item .zolo-navigation-link.active .zolo-submenu-arrow {
            ${subMenuIndicatorActiveBGMob}
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
