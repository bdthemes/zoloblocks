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
    BUTTON_ALIGNMENT,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    BUTTON_PADDING,
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_PADDING,
    TITLE_MARGIN,
    DESC_MARGIN,
} from './constants';

import { BUTTON_TYPOGRAPHY, TITLE_TYPO, DESC_TYPO } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        preset,
        iconColor,
        iconHoverColor,
        iconBg,
        iconHoverBg,
        iconBorderHoverColor,
        textColor,
        textHoverColor,
        borderHoverColor,
        presetOneStyles,
        presetTwoStyles,
        presetThreeStyles,
        presetFourStyles,
        presetSixStyle,
        presetSevenStyles,
        titleColor,
        descriptionColor,
    } = attributes;

    // title
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        defaultFontSize: 26,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleDeskMargin,
        dimensionStylesTab: titleTabMargin,
        dimensionStylesMobile: titleMobMargin,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // description
    const {
        typoStylesDesktop: descDeskTypo,
        typoStylesTab: descTabTypo,
        typoStylesMobile: descMobTypo,
    } = generateTypographyStyles({
        prefixConstant: DESC_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        dimensionStylesDesktop: descDeskMargin,
        dimensionStylesTab: descTabMargin,
        dimensionStylesMobile: descMobMargin,
    } = generateDimensionStyle({
        controlName: DESC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // alignment
    const {
        desktopAlignStyle: buttonAlignmentDesktop,
        tabAlignStyle: buttonAlignmentTab,
        mobAlignStyle: buttonAlignmentMob,
    } = generateResAlignmentStyle({
        controlName: BUTTON_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    /**
     * Generate Alignment Class
     */
    const deskAlign = `display: ${buttonAlignmentDesktop === 'text-align:justify;' ? 'block' : 'inline-block'};`;

    const tabAlign = `display: ${buttonAlignmentTab === 'text-align:justify;' ? 'block' : 'inline-block'};`;

    const mobAlign = `display: ${buttonAlignmentMob === 'text-align:justify;' ? 'block' : 'inline-block'};`;

    // generate Background
    const {
        backgroundStylesDesktop: normalDeskBGStyle,
        backgroundStylesTab: normalTabBGStyle,
        backgroundStylesMobile: normalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_BG,
        attributes,
        noMainBGImg: false,
    });

    // hover background
    const {
        backgroundStylesDesktop: hoverDeskBGStyle,
        backgroundStylesTab: hoverTabBGStyle,
        backgroundStylesMobile: hoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_HOVER_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });

    // generate border style
    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_BORDER,
        attributes,
    });

    // generate border radius
    const {
        dimensionStylesDesktop: borderRadiusDesktop,
        dimensionStylesTab: borderRadiusTab,
        dimensionStylesMobile: borderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // generate icon size
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: BUTTON_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: hoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_BOX_SHADOW,
    });

    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    const {
        dimensionStylesDesktop: paddingDesktop,
        dimensionStylesTab: paddingTab,
        dimensionStylesMobile: paddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * Button Icon
     */
    const {
        desktopBorderStyle: iconBorderDesktop,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    // generate border radius
    const {
        dimensionStylesDesktop: iconBorderRadiusDesktop,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // box shadow
    const { boxShadowStyle: iconNormalBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_BOX_SHADOW,
    });

    // hover box shadow
    const { boxShadowStyle: iconHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_HOVER_BOX_SHADOW,
    });

    // padding
    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMob,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .wp-block-zolo-cta.${uniqueId} {
            ${buttonAlignmentDesktop}
        }
        
        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__title {
            color: ${titleColor ? titleColor : ''};
            ${titleDeskTypo}
            ${titleDeskMargin}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__text {
            color: ${descriptionColor ? descriptionColor : ''};
            ${descDeskTypo}
            ${descDeskMargin}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button {
            ${normalDeskBGStyle}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${normalBoxShadowStyle}
        }


        .wp-block-zolo-cta.${uniqueId} .zolo-text {
            ${btnTypoDesktop}
            ${paddingDesktop}
            ${textColor ? `color: ${textColor};` : ''}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button:hover {
            ${hoverBoxShadowStyle}
			${hoverDeskBGStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button:hover .zolo-text {
            color: ${textHoverColor ? textHoverColor : ''};
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon {
            ${iconColor ? `color: ${iconColor};` : ''}
            ${iconBg ? `background-color: ${iconBg};` : ''}
            ${iconBorderDesktop}
            ${iconBorderRadiusDesktop}
            ${iconNormalBoxShadow}
            ${iconPaddingDesktop}  
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon:hover {
            ${iconHoverColor ? `color: ${iconHoverColor};` : ''}
            ${iconHoverBg ? `background-color: ${iconHoverBg};` : ''}
            border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''};
            ${iconHoverBoxShadow}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon i{
            ${iconSize}
        }

  	`;
    const tabletAllStyle = `
        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__title {
            ${titleTabTypo}
            ${titleTabMargin}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__text {
            ${descTabTypo}
            ${descTabMargin}
        }

        .wp-block-zolo-cta.${uniqueId} {
            ${buttonAlignmentTab}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button {
            ${normalTabBGStyle}
            ${borderStylesTab}
            ${borderRadiusTab}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-text {
            ${btnTypoTab}
            ${paddingTab}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button:hover {
            ${hoverTabBGStyle}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon {
            ${iconBorderTab}
            ${iconBorderRadiusTab}
            ${iconPaddingTab}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon i{
            ${iconSizeTab}
        }
    `;

    const mobileAllStyle = `
        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__title {
            ${titleMobTypo}
            ${titleMobMargin}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out__text {
            ${descMobTypo}
            ${descMobMargin}
        }

        .wp-block-zolo-cta.${uniqueId} {
            ${buttonAlignmentMob}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button {
            ${normalMobBGStyle}
            ${borderStylesMob}
            ${borderRadiusMob}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-text {
            ${btnTypoMob}
            ${paddingMob}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-button:hover {
            ${hoverMobBGStyle}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon {
            ${iconBorderMob}
            ${iconBorderRadiusMob}
            ${iconPaddingMob}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-icon i{
            ${iconSizeMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
}
