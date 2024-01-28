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
    TITLE_MARGIN,
    DESC_MARGIN,
    FLEX_GAP,
    ICON_TEXT_SPACING,
    ICON_S_SIZE,
    ICON_TEXT_S_SPACING,
    BUTTON_S_BORDER,
    BUTTON_S_BORDER_RADIUS,
    BUTTON_S_PADDING,
    BUTTON_S_BG,
    BUTTON_S_BOX_SHADOW,
    BUTTON_HOVER_S_BG_COLOR,
    BUTTON_HOVER_S_BOX_SHADOW,
} from './constants';

import { BUTTON_TYPOGRAPHY, BUTTON_S_TYPOGRAPHY, TITLE_TYPO, DESC_TYPO } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        textColor,
        textHoverColor,
        borderHoverColor,
        titleColor,
        descriptionColor,
        SborderHoverColor,
        StextColor,
        SHoverColor,
    } = attributes;

    // title
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
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

    const {
        backgroundStylesDesktop: SnormalDeskBGStyle,
        backgroundStylesTab: SnormalTabBGStyle,
        backgroundStylesMobile: SnormalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_S_BG,
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

    const {
        backgroundStylesDesktop: ShoverDeskBGStyle,
        backgroundStylesTab: ShoverTabBGStyle,
        backgroundStylesMobile: ShoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BUTTON_HOVER_S_BG_COLOR,
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

    const {
        desktopBorderStyle: SborderStyles,
        tabBorderStyle: SborderStylesTab,
        mobBorderStyle: SborderStylesMob,
    } = generateBorderStyle({
        controlName: BUTTON_S_BORDER,
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
    const {
        dimensionStylesDesktop: SborderRadiusDesktop,
        dimensionStylesTab: SborderRadiusTab,
        dimensionStylesMobile: SborderRadiusMob,
    } = generateDimensionStyle({
        controlName: BUTTON_S_BORDER_RADIUS,
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
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSize,
        tabRangeStyle: iconHSizeTab,
        mobRangeStyle: iconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });
    //Secondary Button
    const {
        desktopRangeStyle: SiconSize,
        tabRangeStyle: SiconSizeTab,
        mobRangeStyle: SiconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_S_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: SiconHSize,
        tabRangeStyle: SiconHSizeTab,
        mobRangeStyle: SiconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_S_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: iconGap,
        tabRangeStyle: iconGapTab,
        mobRangeStyle: iconGapMob,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_SPACING,
        property: 'gap',
        attributes,
    });
    const {
        desktopRangeStyle: SiconGap,
        tabRangeStyle: SiconGapTab,
        mobRangeStyle: SiconGapMob,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_S_SPACING,
        property: 'gap',
        attributes,
    });

    const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: BUTTON_BOX_SHADOW,
        attributes,
    });
    const { boxShadowStyle: SnormalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: BUTTON_S_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: hoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_BOX_SHADOW,
    });

    const { boxShadowStyle: ShoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_S_BOX_SHADOW,
    });

    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        attributes,
    });

    const {
        typoStylesDesktop: SbtnTypoDesktop,
        typoStylesTab: SbtnTypoTab,
        typoStylesMobile: SbtnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_S_TYPOGRAPHY,
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
    const {
        dimensionStylesDesktop: SpaddingDesktop,
        dimensionStylesTab: SpaddingTab,
        dimensionStylesMobile: SpaddingMob,
    } = generateDimensionStyle({
        controlName: BUTTON_S_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // flex item
    const {
        desktopRangeStyle: flexGap,
        tabRangeStyle: flexGapTab,
        mobRangeStyle: flexGapMob,
    } = generateResRangeStyle({
        controlName: FLEX_GAP,
        property: 'gap',
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

        .wp-block-zolo-cta.${uniqueId} .primary{
            ${normalDeskBGStyle}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${normalBoxShadowStyle}
            ${btnTypoDesktop}
            ${paddingDesktop}
            ${iconGap}
            ${textColor ? `color: ${textColor};` : ''}
        }

         .wp-block-zolo-cta.${uniqueId} .secondary {
            ${SnormalDeskBGStyle}
            ${SborderStyles}
            ${SborderRadiusDesktop}
            ${SnormalBoxShadowStyle}
            ${SbtnTypoDesktop}
            ${SpaddingDesktop}
            ${SiconGap}
            ${StextColor ? `color: ${StextColor};` : ''}
        }

        .wp-block-zolo-cta.${uniqueId} .primary:hover {
            ${hoverBoxShadowStyle}
			${hoverDeskBGStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
            color: ${textHoverColor ? textHoverColor : ''};
        }
          .wp-block-zolo-cta.${uniqueId} .secondary:hover {
            ${ShoverBoxShadowStyle}
			${ShoverDeskBGStyle}
			border-color: ${SborderHoverColor ? SborderHoverColor : ''};
            color: ${SHoverColor ? SHoverColor : ''};
        }

        .wp-block-zolo-cta.${uniqueId} .primary-icon svg{
           ${iconSize}
           ${iconHSize}
           ${textColor ? `fill: ${textColor};` : ''}
        }
        .wp-block-zolo-cta.${uniqueId} .secondary-icon svg{
            ${SiconSize}
            ${SiconHSize}
            ${StextColor ? `fill: ${StextColor};` : ''}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out.style-1 {
            ${flexGap}
        }

        .wp-block-zolo-cta.${uniqueId} .primary:hover .primary-icon svg{
            ${textHoverColor ? `fill: ${textHoverColor};` : ''}
        }
        .wp-block-zolo-cta.${uniqueId} .secondary:hover .secondary-icon svg{
            ${SHoverColor ? `fill: ${SHoverColor};` : ''}
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

        .wp-block-zolo-cta.${uniqueId} .primary {
            ${normalTabBGStyle}
            ${borderStylesTab}
            ${borderRadiusTab}
            ${btnTypoTab}
            ${paddingTab}
            ${iconGapTab}
        }

        .wp-block-zolo-cta.${uniqueId} .secondary{
            ${SnormalTabBGStyle}
            ${SborderStylesTab}
            ${SborderRadiusTab}
            ${SbtnTypoTab}
            ${SpaddingTab}
            ${SiconGapTab}
        }

        .wp-block-zolo-cta.${uniqueId} .primary:hover {
            ${hoverTabBGStyle}
        }
          .wp-block-zolo-cta.${uniqueId} .secondary:hover {
            ${ShoverTabBGStyle}
        }

        .wp-block-zolo-cta.${uniqueId} .primary-icon svg{
            ${iconSizeTab}
            ${iconHSizeTab}
        }
        .wp-block-zolo-cta.${uniqueId} .secondary-icon svg{
            ${SiconSizeTab}
            ${SiconHSizeTab}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out.style-1 {
            ${flexGapTab}
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

        .wp-block-zolo-cta.${uniqueId} .primary {
            ${normalMobBGStyle}
            ${borderStylesMob}
            ${borderRadiusMob}
            ${btnTypoMob}
            ${paddingMob}
            ${iconGapMob}
        }
        .wp-block-zolo-cta.${uniqueId} .secondary{
            ${SnormalMobBGStyle}
            ${SborderStylesMob}
            ${SborderRadiusMob}
            ${SbtnTypoMob}
            ${SpaddingMob}
            ${SiconGapMob}
        }

        .wp-block-zolo-cta.${uniqueId} .primary:hover {
            ${hoverMobBGStyle}
        }
         .wp-block-zolo-cta.${uniqueId} .secondary:hover {
            ${ShoverMobBGStyle}
        }

        .wp-block-zolo-cta.${uniqueId} .primary-icon svg{
            ${iconSizeMob}
            ${iconHSizeMob}
        }
        .wp-block-zolo-cta.${uniqueId} .secondary-icon svg{
            ${SiconSizeMob}
            ${SiconHSizeMob}
        }

        .wp-block-zolo-cta.${uniqueId} .zolo-call-out.style-1 {
            ${flexGapMob}
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
