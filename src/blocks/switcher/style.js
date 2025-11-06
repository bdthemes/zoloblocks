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
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: switcherHeightDesk,
        tabRangeStyle: switcherHeightTab,
        mobRangeStyle: switcherHeightMob,
    } = generateResRangeStyle({
        controlName: SWITCHER_HEIGHT,
        property: 'height',
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
        styleFor: 'border-radius',
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
        .${uniqueId} .zolo-switch-container-wrap {
            ${spaceBetweenDesk}
        }

        .${uniqueId} .zolo-switch-container {
            ${switcherWidthDesk}
            ${switcherHeightDesk}
            ${switcherMarginDesk}
            ${switcherRadiusDesk}
        }

        .${uniqueId} .zolo-package-text {
            ${switchDeskTypo}
            ${switchColor ? `color: ${switchColor};` : ''}
        }

        .${uniqueId} .zolo-package-text.zolo-active {
            ${activeSwitchColor ? `color: ${activeSwitchColor};` : ''}
        }

        .${uniqueId} .zolo-knobs,
        .${uniqueId} .zolo-layer {
            ${switcherBgDesk}
            ${switcherRadiusDesk}
        }

        .${uniqueId} .zolo-checkbox:checked ~ .zolo-knobs,
        .${uniqueId} .zolo-checkbox:checked ~ .zolo-layer {
            ${activeSwitcherBgDesk}
        }

        .${uniqueId} .zolo-knobs span {
            ${switcherKnobSizeDesk}
            ${switcherColor ? `background-color: ${switcherColor};` : ''}
        }

        .${uniqueId} .zolo-checkbox:checked ~ .zolo-knobs span {
            ${activeSwitcherColor ? `background-color: ${activeSwitcherColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-switch-container-wrap {
            ${spaceBetweenTab}
        }

        .${uniqueId} .zolo-switch-container {
            ${switcherWidthTab}
            ${switcherHeightTab}
            ${switcherMarginTab}
            ${switcherRadiusTab}
        }

        .${uniqueId} .zolo-package-text {
            ${switchTabTypo}
        }

        .${uniqueId} .zolo-knobs,
        .${uniqueId} .zolo-layer {
            ${switcherBgTab}
            ${switcherRadiusTab}
        }

        .${uniqueId} .zolo-checkbox:checked ~ .zolo-knobs,
        .${uniqueId} .zolo-checkbox:checked ~ .zolo-layer {
            ${activeSwitcherBgTab}
        }

        .${uniqueId} .zolo-knobs span {
            ${switcherKnobSizeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-switch-container-wrap {
            ${spaceBetweenMob}
        }

        .${uniqueId} .zolo-switch-container {
            ${switcherWidthMob}
            ${switcherHeightMob}
            ${switcherMarginMobile}
            ${switcherRadiusMobile}
        }

        .${uniqueId} .zolo-package-text {
            ${switchMobTypo}
        }

        .${uniqueId} .zolo-knobs,
        .${uniqueId} .zolo-layer {
            ${switcherBgMobile}
            ${switcherRadiusMobile}
        }

        .${uniqueId} .zolo-checkbox:checked ~ .zolo-knobs,
        .${uniqueId} .zolo-checkbox:checked ~ .zolo-layer {
            ${activeSwitcherBgMob}
        }

        .${uniqueId} .zolo-knobs span {
            ${switcherKnobSizeMob}
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
