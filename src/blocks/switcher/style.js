/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    SPACE_BETWEEN,
    SWITCHER_HEIGHT,
    SWITCHER_WIDTH,
    SWITCHER_KNOB_SIZE,
    SWITCHER_MARGIN,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_BG,
    SWITCHER_BOX_SHADOW,
    SWITCHER_BORDER,
    ACTIVE_SWITCHER_BG,
} from './constants';

import { SWITCH_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, switchColor, activeSwitchColor, switcherColor, activeSwitcherColor } = attributes;

    const {
        desktopRangeStyle: spaceBetweenDesk,
        tabRangeStyle: spaceBetweenTab,
        mobRangeStyle: spaceBetweenMob,
    } = generateResRangeStyle({
        controlName: SPACE_BETWEEN,
        property: 'gap',
        attributes,
    });

    const {
        typoStylesDesktop: switchDeskTypo,
        typoStylesTab: switchTabTypo,
        typoStylesMobile: switchMobTypo,
    } = generateTypographyStyles({
        prefixConstant: SWITCH_TYPO,
        attributes,
    });

    const {
        desktopRangeStyle: switcherWidthDesk,
        tabRangeStyle: switcherWidthTab,
        mobRangeStyle: switcherWidthMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_WIDTH,
        property: '--zolo-switch-width',
        attributes,
    });

    const {
        desktopRangeStyle: switcherHeightDesk,
        tabRangeStyle: switcherHeightTab,
        mobRangeStyle: switcherHeightMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_HEIGHT,
        property: '--zolo-switch-height',
        attributes,
    });

    const {
        desktopRangeStyle: switcherKnobSizeDesk,
        tabRangeStyle: switcherKnobSizeTab,
        mobRangeStyle: switcherKnobSizeMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_KNOB_SIZE,
        property: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: switcherRadiusDesk,
        dimensionStylesTab: switcherRadiusTab,
        dimensionStylesMobile: switcherRadiusMobile,
    } = generateDimensionStyle({
        controlName: SWITCHER_BORDER_RADIUS,
        styleFor: '--zolo-switch-radius',
        attributes,
    });


    const { boxShadowStyle: switcherBoxShadow } = generateBoxShadowStyles({
        controlName: SWITCHER_BOX_SHADOW,
        attributes,
    });

    const {
        desktopBorderStyle: switcherBorderStyles,
        tabBorderStyle: switcherBorderStylesTab,
        mobBorderStyle: switcherBorderStylesMob,
    } = generateBorderStyle({
        controlName: SWITCHER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: switcherMarginDesk,
        dimensionStylesTab: switcherMarginTab,
        dimensionStylesMobile: switcherMarginMobile,
    } = generateDimensionStyle({
        controlName: SWITCHER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: switcherBgDesk,
        backgroundStylesTab: switcherBgTab,
        backgroundStylesMobile: switcherBgMobile,
    } = generateNormalBGControlStyles({
        controlName: SWITCHER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: activeSwitcherBgDesk,
        backgroundStylesTab: activeSwitcherBgTab,
        backgroundStylesMobile: activeSwitcherBgMob,
    } = generateNormalBGControlStyles({
        controlName: ACTIVE_SWITCHER_BG,
        attributes,
        noMainBGImg: false,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container-wrap {
            ${spaceBetweenDesk}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container {
            ${switcherWidthDesk}
            ${switcherHeightDesk}
            ${switcherMarginDesk}
            ${switcherRadiusDesk}
            ${switcherBgDesk}
            ${switcherRadiusDesk}
            ${switcherBorderStyles}
            ${switcherBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-package-text {
            ${switchDeskTypo}
            ${switchColor ? `color: ${switchColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-package-text.zolo-active {
            ${activeSwitchColor ? `color: ${activeSwitchColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-switcher-wrapper .zolo-knobs span {
           ${switcherColor ? `background-color: ${switcherColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container-wrap {
            ${spaceBetweenTab}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container {
            ${switcherWidthTab}
            ${switcherHeightTab}
            ${switcherMarginTab}
            ${switcherRadiusTab}
            ${switcherBgTab}
            ${switcherRadiusTab}
            ${switcherBorderStylesTab}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-package-text {
            ${switchTabTypo}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container-wrap {
            ${spaceBetweenMob}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-switch-container {
            ${switcherWidthMob}
            ${switcherHeightMob}
            ${switcherMarginMobile}
            ${switcherRadiusMobile}
            ${switcherBgMobile}
            ${switcherRadiusMobile}
            ${switcherBorderStylesMob}
        }

        .${uniqueId}.wp-block-zolo-switcher .zolo-package-text {
            ${switchMobTypo}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.switcher.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.switcher.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.switcher.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
