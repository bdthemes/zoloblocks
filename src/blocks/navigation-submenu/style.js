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

import { D_SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId, subMenuTextColor, subMenuTextHoverColor, subMenuTextActiveColor, subMenuBorderHoverColor, subMenuBorderActiveColor } =
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

    // Generate Typography
    const {
        typoStylesDesktop: subMenuTypoDesktop,
        typoStylesTab: subMenuTypoTab,
        typoStylesMobile: subMenuTypoMob,
    } = generateTypographyStyles({
        prefixConstant: D_SUB_MENU_TYPOGRAPHY,
        defaultFontSize: '',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu {
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginDesk}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            color: ${subMenuTextColor ? subMenuTextColor : ''};
            ${subMenuTypoDesktop}
            ${subMenuBGDesk}
            ${subMenuBorderDesk}
            ${subMenuBorderRadiusDesk}
            ${subMenuPaddingDesk}
            ${subMenuBoxShadowStyle}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
             color: ${subMenuTextHoverColor ? subMenuTextHoverColor : ''};
            ${subMenuHoverBGDesk}
            border-color: ${subMenuBorderHoverColor ? subMenuBorderHoverColor : ''};
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link {
            color: ${subMenuTextActiveColor ? subMenuTextActiveColor : ''};
            ${subMenuActiveBGDesk}
            border-color: ${subMenuBorderActiveColor ? subMenuBorderActiveColor : ''};
        }

	`;
    const tabletAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu  {
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            ${subMenuTypoTab}
            ${subMenuBGTab}
            ${subMenuBorderTab}
            ${subMenuBorderRadiusTab}
            ${subMenuPaddingTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
            ${subMenuHoverBGTab}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link  {
            ${subMenuActiveBGTab}
        }

  	`;
    const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu  {
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item {
            ${subMenuMarginMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link {
            ${subMenuTypoMob}
            ${subMenuBGMob}
            ${subMenuBorderMob}
            ${subMenuBorderRadiusMob}
            ${subMenuPaddingMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-link:hover {
            ${subMenuHoverBGMob}
        }

        .zolo-block.wp-block-zolo-navigation .zolo-navigation-submenu-wrapper .${uniqueId}.wp-block-zolo-navigation-submenu .zolo-navigation-item.current-item .zolo-navigation-link {
            ${subMenuActiveBGMob}
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
