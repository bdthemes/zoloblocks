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
    DROPDOWN_WIDTH_OFFSET,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;

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
        property: 'width',
        attributes,
    });

    // DROPDOWN_WIDTH_OFFSET

    const {
        desktopRangeStyle: dropdownOffsetDesk,
        tabRangeStyle: dropdownOffsetTab,
        mobRangeStyle: dropdownOffsetMob,
    } = generateResRangeStyle({
        controlName: DROPDOWN_WIDTH_OFFSET,
        property: 'left',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .${uniqueId}.wp-block-zolo-megamenu {
            ${dropdownWrapBGDesk}
            ${dropdownWrapBorderDesk}
            ${dropdownWrapBorderRadiusDesk}
            ${dropdownWrapPaddingDesk}
            ${dropdownWrapMarginDesk}
            ${dropdownWrapBoxShadowStyle}
            ${dropdownSizeDesk}
            ${dropdownOffsetDesk}
        }

	`;
    const tabletAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .${uniqueId}.wp-block-zolo-megamenu  {
            ${dropdownWrapBGTab}
            ${dropdownWrapBorderTab}
            ${dropdownWrapBorderRadiusTab}
            ${dropdownWrapPaddingTab}
            ${dropdownWrapMarginTab}
            ${dropdownSizeTab}
            ${dropdownOffsetTab}
        }


  	`;
    const mobileAllStyle = `

        .zolo-block.wp-block-zolo-navmenu .zolo-navmenu-submenu-wrapper .${uniqueId}.wp-block-zolo-megamenu  {
            ${dropdownWrapBGMob}
            ${dropdownWrapBorderMob}
            ${dropdownWrapBorderRadiusMob}
            ${dropdownWrapPaddingMob}
            ${dropdownWrapMarginMob}
            ${dropdownSizeMob}
            ${dropdownOffsetMob}
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
