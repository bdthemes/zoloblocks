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
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    ICON_BG,
    ICON_BG_HOVER,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_SHADOW_HOVER,
    ICON_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPO, TEXT_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        circleSize,
        circleIconSize,
        circleIconAreaSize,
        iconColor,
        iconColorHover,
        titleColor,
        titleColorHover,
        textColor,
        textColorHover,
    } = attributes;

    const {
        backgroundStylesDesktop: contentBgDesk,
        backgroundStylesTab: contentBgTab,
        backgroundStylesMobile: contentBgMob,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: contentPaddingDesktop,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: contentBorderDesk,
        tabBorderStyle: contentBorderTab,
        mobBorderStyle: contentBorderMob,
    } = generateBorderStyle({
        controlName: CONTENT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: contentBorderRadiusDesktop,
        dimensionStylesTab: contentBorderRadiusTab,
        dimensionStylesMobile: contentBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTENT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconBgDesk,
        backgroundStylesTab: iconBgTab,
        backgroundStylesMobile: iconBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: iconBgHoverDesk,
        backgroundStylesTab: iconBgHoverTab,
        backgroundStylesMobile: iconBgHoverMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: iconBorderDesk,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        controlName: ICON_SHADOW,
        attributes,
    });

    const { boxShadowStyle: iconBoxShadowHover } = generateBoxShadowStyles({
        controlName: ICON_SHADOW_HOVER,
        attributes,
    });

    const {
        dimensionStylesDesktop: iconBorderRadiusDesktop,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        typoStylesDesktop: textTypoDesktop,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Calculate dynamic sizes based on circleSize attribute
    const iconRadius = circleSize * 5; // 250px at default (50)
    const contentDisplaySize = circleSize * 6; // 300px at default (50)
    const iconButtonSize = circleIconAreaSize || 60; // Icon button area size
    const iconFontSize = circleIconSize || 24; // Icon size inside button

    const desktopAllStyle = `
        .wp-block-zolo-circle-info.${uniqueId} .zolo-circle-info {
            &::before {
                width: ${circleSize * 10}px;
                height: ${circleSize * 10}px;
            }
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display {
            width: ${contentDisplaySize}px;
            height: ${contentDisplaySize}px;
            ${contentBgDesk}
            ${contentPaddingDesktop}
            ${contentBorderDesk}
            ${contentBorderRadiusDesktop}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display h3 {
            ${titleTypoDesktop}
            ${titleColor ? `color: ${titleColor};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display:hover h3 {
            ${titleColorHover ? `color: ${titleColorHover};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display p {
            ${textTypoDesktop}
            ${textColor ? `color: ${textColor};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display:hover p {
            ${textColorHover ? `color: ${textColorHover};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li {
            transform: rotate(var(--angle, 0deg)) translate(${iconRadius}px) rotate(calc(-1 * var(--angle, 0deg)));
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button {
            width: ${iconButtonSize}px;
            height: ${iconButtonSize}px;
            margin: -${iconButtonSize / 2}px 0 0 -${iconButtonSize / 2}px;
            ${iconBgDesk}
            ${iconBorderDesk}
            ${iconBoxShadow}
            ${iconBorderRadiusDesktop}
            ${iconColor ? `color: ${iconColor};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button:hover {
            ${iconBgHoverDesk}
            ${iconBoxShadowHover}
            ${iconColorHover ? `color: ${iconColorHover};` : ''}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button i,
        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button svg {
            font-size: ${iconFontSize}px;
            width: ${iconFontSize}px;
            height: ${iconFontSize}px;
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo__display-icon {
            width: ${iconFontSize}px;
        }
    `;

    const tabletAllStyle = `
        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display {
            ${contentBgTab}
            ${contentPaddingTab}
            ${contentBorderTab}
            ${contentBorderRadiusTab}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display h3 {
            ${titleTypoTab}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display p {
            ${textTypoTab}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button {
            ${iconBgTab}
            ${iconBorderTab}
            ${iconBorderRadiusTab}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button:hover {
            ${iconBgHoverTab}
        }
    `;

    const mobileAllStyle = `
        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display {
            ${contentBgMob}
            ${contentPaddingMob}
            ${contentBorderMob}
            ${contentBorderRadiusMob}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display h3 {
            ${titleTypoMob}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-content-display p {
            ${textTypoMob}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button {
            ${iconBgMob}
            ${iconBorderMob}
            ${iconBorderRadiusMob}
        }

        .wp-block-zolo-circle-info.${uniqueId} .zolo-feature-icons li button:hover {
            ${iconBgHoverMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.circleInfo.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.circleInfo.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.circleInfo.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
