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
    PO_SWIDTH,
    PT_BORDER,
    PT_BORDER_RADIUS,
    PTH_BORDER,
    PTH_BORDER_RADIUS,
    PF_SWIDTH,
    PFV_BORDER,
    PFV_BORDER_RADIUS,
    PS_BORDER,
    PS_BORDER_RADIUS,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

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
    } = attributes;

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

    const btnDeskAlign = `display: ${buttonAlignmentDesktop === 'text-align:justify;' ? 'flex' : 'inline-flex'};`;
    const btnTabAlign = `display: ${buttonAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'};`;
    const btnMobAlign = `display: ${buttonAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'};`;

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
        desktopRangeStyle: iconHeight,
        tabRangeStyle: iconHeightTab,
        mobRangeStyle: iconHeightMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: iconWidth,
        tabRangeStyle: iconWidthTab,
        mobRangeStyle: iconWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    // Spacing between icon and text
    const {
        desktopRangeStyle: gap,
        tabRangeStyle: gapTab,
        mobRangeStyle: gapMob,
    } = generateResRangeStyle({
        controlName: ICON_TEXT_SPACING,
        property: 'gap',
        attributes,
    });

    // Generate Box Shadow
    const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: BUTTON_BOX_SHADOW,
        attributes,
    });

    // Generate Hover Box Shadow
    const { boxShadowStyle: hoverBoxShadowStyle } = generateBoxShadowStyles({
        attributes,
        controlName: BUTTON_HOVER_BOX_SHADOW,
    });

    // Generate Typography
    const {
        typoStylesDesktop: btnTypoDesktop,
        typoStylesTab: btnTypoTab,
        typoStylesMobile: btnTypoMob,
    } = generateTypographyStyles({
        prefixConstant: BUTTON_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    // Generate Padding
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
     * Presets Based Styles
     */
    const {
        desktopRangeStyle: poDeskShadowWidth,
        tabRangeStyle: poTabShadowWidth,
        mobRangeStyle: poMobShadowWidth,
    } = generateResRangeStyle({
        controlName: PO_SWIDTH,
        attributes,
        noProperty: true,
    });

    // preset two
    const {
        desktopBorderStyle: ptDeskBorder,
        tabBorderStyle: ptTabBorder,
        mobBorderStyle: ptMobBorder,
    } = generateBorderStyle({
        controlName: PT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: ptDeskBorderRadius,
        dimensionStylesTab: ptTabBorderRadius,
        dimensionStylesMobile: ptMobBorderRadius,
    } = generateDimensionStyle({
        controlName: PT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // preset three
    const {
        desktopBorderStyle: pthDeskBorder,
        tabBorderStyle: pthTabBorder,
        mobBorderStyle: pthMobBorder,
    } = generateBorderStyle({
        controlName: PTH_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pthDeskBorderRadius,
        dimensionStylesTab: pthTabBorderRadius,
        dimensionStylesMobile: pthMobBorderRadius,
    } = generateDimensionStyle({
        controlName: PTH_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // preset four
    const {
        desktopRangeStyle: pfDeskShadowWidth,
        tabRangeStyle: pfTabShadowWidth,
        mobRangeStyle: pfMobShadowWidth,
    } = generateResRangeStyle({
        controlName: PF_SWIDTH,
        attributes,
        noProperty: true,
    });

    // preset five
    const {
        desktopBorderStyle: pfvDeskBorder,
        tabBorderStyle: pfvTabBorder,
        mobBorderStyle: pfvMobBorder,
    } = generateBorderStyle({
        controlName: PFV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pfvDeskBorderRadius,
        dimensionStylesTab: pfvTabBorderRadius,
        dimensionStylesMobile: pfvMobBorderRadius,
    } = generateDimensionStyle({
        controlName: PFV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // preset seven
    const {
        desktopBorderStyle: psDeskBorder,
        tabBorderStyle: psTabBorder,
        mobBorderStyle: psMobBorder,
    } = generateBorderStyle({
        controlName: PS_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: psDeskBorderRadius,
        dimensionStylesTab: psTabBorderRadius,
        dimensionStylesMobile: psMobBorderRadius,
    } = generateDimensionStyle({
        controlName: PS_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.wp-block-zolo-advanced-button.${uniqueId} {
			${buttonAlignmentDesktop}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button:hover{
			${hoverBoxShadowStyle}
			${hoverDeskBGStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
		}

		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gap}
            ${btnDeskAlign}
            ${normalDeskBGStyle}
			${borderStyles}
			${borderRadiusDesktop}
			${normalBoxShadowStyle}
			${paddingDesktop}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoDesktop}
			color: ${textColor ? textColor : ''};
		}

		.zolo-advanced-button.${uniqueId} .zolo-button:hover .zolo-button-content {
			color: ${textHoverColor ? textHoverColor : ''};
		}

        .zolo-advanced-button.${uniqueId} .zolo-button .zolo__display-icon {
			${iconHeight}
			${iconWidth}
			${iconBorderDesktop}
			${iconBorderRadiusDesktop}
			${iconNormalBoxShadow}
			${iconPaddingDesktop}
            background: ${iconBg ? iconBg : ''};
        }

		.zolo-advanced-button.${uniqueId} .zolo-button svg {
			fill: ${iconColor ? iconColor : ''};
		}

		.zolo-advanced-button.${uniqueId} .zolo-button:hover .zolo__display-icon {
			${iconHoverBoxShadow}
			background: ${iconHoverBg ? iconHoverBg : ''};
			border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''};
		}


		.zolo-advanced-button.${uniqueId} .zolo-button:hover svg {
			fill: ${iconHoverColor ? iconHoverColor : ''};
		}

		${
            preset === 'button-1' && presetOneStyles.shadowColor
                ? `.zolo-advanced-button.${uniqueId}.button-1 .zolo-button {
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poDeskShadowWidth}
			}`
                : ''
        }
		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2 .zolo-button:before {
				background-color: ${presetTwoStyles && presetTwoStyles.bgColor};
				${ptDeskBorder}
				${ptDeskBorderRadius}
			} .zolo-advanced-button.${uniqueId}.button-2 .zolo-button:hover:before {
				background-color: ${presetTwoStyles && presetTwoStyles.hoverBgColor};
			}`
                : ''
        }
		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3 .zolo-button:after {
					background-color: ${presetThreeStyles && presetThreeStyles.bgColor};
				${pthDeskBorder}
				${pthDeskBorderRadius}
			}
            .zolo-advanced-button.${uniqueId}.button-3 .zolo-button:hover:after {
                background-color: ${presetThreeStyles && presetThreeStyles.hoverBgColor};
            }
            `
                : ''
        }
		${
            preset === 'button-4'
                ? `.zolo-advanced-button.${uniqueId}.button-4 .zolo-button{
					${
                        presetFourStyles && (presetFourStyles.shadowColor || pfDeskShadowWidth)
                            ? `box-shadow: ${pfDeskShadowWidth.replace(/;/g, '')} 0px 0px ${presetFourStyles.shadowColor};`
                            : ''
                    }
				} .zolo-advanced-button.${uniqueId}.button-4 .zolo-button:after {
					${presetFourStyles && presetFourStyles.colorOne ? `background: ${presetFourStyles.colorOne};` : ''}
					${presetFourStyles && presetFourStyles.textShadowColor ? `text-shadow: -3px -3px 0px ${presetFourStyles.textShadowColor};` : ''}
					${presetFourStyles && presetFourStyles.textColor ? `color: ${presetFourStyles.textColor};` : ''}
				}`
                : ''
        }
		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5 .zolo-button:after {
				${pfvDeskBorder}
				${pfvDeskBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-6'
                ? `
					${
                        presetSixStyle
                            ? `.zolo-advanced-button.${uniqueId}.button-6 .zolo-button{
								box-shadow: ${presetSixStyle} 15px 28px 25px -18px;
					}`
                            : ''
                    }
				`
                : ''
        }
		${
            preset === 'button-7'
                ? `
					${
                        presetSevenStyles
                            ? `.zolo-advanced-button.${uniqueId}.button-7 .zolo-button:after {
                            background-color: ${presetSevenStyles && presetSevenStyles.bgColor};
                            ${psDeskBorder}
                            ${psDeskBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }
  	`;
    const tabletAllStyle = `
		.wp-block-zolo-advanced-button.${uniqueId} {
			${buttonAlignmentTab}
		}

        .zolo-advanced-button.${uniqueId} .zolo-button {
			${gapTab}
            ${btnTabAlign}
            ${borderStylesTab}
			${borderRadiusTab}
			${normalTabBGStyle}
			${paddingTab}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button:hover{
			${hoverTabBGStyle}
		}

        .zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoTab}
		}


		.zolo-advanced-button.${uniqueId} .zolo-button svg {
			${iconHeightTab}
			${iconWidthTab}
			${iconBorderTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}

		${
            preset === 'button-1'
                ? `.zolo-advanced-button.${uniqueId}.button-1 .zolo-button{
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poTabShadowWidth}
			}`
                : ''
        }

		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2 .zolo-button:before{
				${ptTabBorder}
				${ptTabBorderRadius}
			}`
                : ''
        }

		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3 .zolo-button:after {
				${pthTabBorder}
				${pthTabBorderRadius}
			}`
                : ''
        }

        ${
            preset === 'button-4'
                ? `.zolo-advanced-button.${uniqueId}.button-4 .zolo-button{
					${
                        presetFourStyles && (presetFourStyles.shadowColor || pfTabShadowWidth)
                            ? `box-shadow: ${pfTabShadowWidth.replace(/;/g, '')} 0px 0px ${presetFourStyles.shadowColor};`
                            : ''
                    }
				}`
                : ''
        }
        
		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5 .zolo-button:after {
				${pfvTabBorder}
				${pfvTabBorderRadius}
			}`
                : ''
        }
        
        ${
            preset === 'button-7'
                ? `
					${
                        presetSevenStyles
                            ? `.zolo-advanced-button.${uniqueId}.button-7 .zolo-button:after {
                            ${psTabBorder}
                            ${psTabBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }
	`;

    const mobileAllStyle = `
		.wp-block-zolo-advanced-button.${uniqueId} {
			${buttonAlignmentMob}
		}

        .zolo-advanced-button.${uniqueId} .zolo-button {
			${gapMob}
            ${btnMobAlign}
            ${borderStylesMob}
			${borderRadiusMob}
			${normalMobBGStyle}
			${paddingMob}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button:hover{
			${hoverMobBGStyle}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoMob}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button svg {
			${iconHeightMob}
			${iconWidthMob}
			${iconBorderMob}
			${iconBorderRadiusMob}
			${iconPaddingMob}
		}

		${
            preset === 'button-1'
                ? `.zolo-advanced-button.${uniqueId}.button-1 .zolo-button{
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poMobShadowWidth}
			}`
                : ''
        }

		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2 .zolo-button:before {
				${ptMobBorder}
				${ptMobBorderRadius}
			}`
                : ''
        }

		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3 .zolo-button:after {
				${pthMobBorder}
				${pthMobBorderRadius}
			}`
                : ''
        }

        ${
            preset === 'button-4'
                ? `.zolo-advanced-button.${uniqueId}.button-4 .zolo-button{
					${
                        presetFourStyles && (presetFourStyles.shadowColor || pfMobShadowWidth)
                            ? `box-shadow: ${pfMobShadowWidth.replace(/;/g, '')} 0px 0px ${presetFourStyles.shadowColor};`
                            : ''
                    }
				}`
                : ''
        }

		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5 .zolo-button:after {
				${pfvMobBorder}
				${pfvMobBorderRadius}
			}`
                : ''
        }

        ${
            preset === 'button-7'
                ? `
					${
                        presetSevenStyles
                            ? `.zolo-advanced-button.${uniqueId}.button-7 .zolo-button:after {
                            ${psMobBorder}
                            ${psMobBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
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
