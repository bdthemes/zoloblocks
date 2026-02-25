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
    generateCSS
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
    PT_BORDER,
    PT_BORDER_RADIUS,
    PTH_BORDER,
    PTH_BORDER_RADIUS,
    PF_SWIDTH,
    PFV_BORDER,
    PFV_BORDER_RADIUS,
    PS_BORDER,
    PS_BORDER_RADIUS,
    PSE_BORDER,
    PSE_BRADIUS,
    PSE_BG,
    PT_BG,
    PTH_BG,
    PFTH_BG,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

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
        presetTwoStyles,
        presetThreeStyles,
        presetFourStyles,
        presetSixStyle,
        presetSevenStyles,
        buttonTwoBorderColor,
        psStarColor,
        presetBgColor,
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
        defaultFontSize: '',
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
    // preset one
    const {
        backgroundStylesDesktop: ptBGDesk,
        backgroundStylesTab: ptBGTab,
        backgroundStylesMobile: ptBGMob,
    } = generateNormalBGControlStyles({
        controlName: PT_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: pthBGDesk,
        backgroundStylesTab: pthBGTab,
        backgroundStylesMobile: pthBGMob,
    } = generateNormalBGControlStyles({
        controlName: PTH_BG,
        attributes,
        noMainBGImg: false,
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
        backgroundStylesDesktop: pfthBGDesk,
        backgroundStylesTab: pfthBGTab,
        backgroundStylesMobile: pfthBGMob,
    } = generateNormalBGControlStyles({
        controlName: PFTH_BG,
        attributes,
        noMainBGImg: false,
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

    // preset Eight
    const {
        desktopBorderStyle: pseDeskBorder,
        tabBorderStyle: pseTabBorder,
        mobBorderStyle: pseMobBorder,
    } = generateBorderStyle({
        controlName: PSE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pseDeskBorderRadius,
        dimensionStylesTab: pseTabBorderRadius,
        dimensionStylesMobile: pseMobBorderRadius,
    } = generateDimensionStyle({
        controlName: PSE_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: pseDeskBGStyle,
        backgroundStylesTab: pseTabBGStyle,
        backgroundStylesMobile: pseMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: PSE_BG,
        attributes,
        noMainBGImg: true,
    });

    /**
     * Generate Alignment Class
     */

    const btnDeskAlign = `display: ${buttonAlignmentDesktop === 'text-align:justify;' ? 'flex' : ''};`;
    const btnTabAlign = `display: ${buttonAlignmentTab === 'text-align:justify;' ? 'flex' : ''};`;
    const btnMobAlign = `display: ${buttonAlignmentMob === 'text-align:justify;' ? 'flex' : ''};`;

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${buttonAlignmentDesktop}
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover{
			${hoverBoxShadowStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${gap}
            ${btnDeskAlign}
			${borderStyles}
			${borderRadiusDesktop}
			${paddingDesktop}
            ${normalDeskBGStyle}
            ${normalBoxShadowStyle}
            ${ generateCSS({attributes, key:'buttonWidth', getValue: (value) => `width: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'buttonMinHeight', getValue: (value) => `min-height: ${value};`, device: 'Desktop'}) }
		}

        ${
            preset === 'button-2'
                ? `
            .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
                border-color: ${buttonTwoBorderColor || ''};
            }
        `
                : ''
        }

         ${
             preset !== 'button-10' && preset !== 'button-11'
                 ? `
                       .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover{
                            ${hoverDeskBGStyle}
                        }
                `
                 : ''
         }

        ${
            preset === 'button-10'
                ? `
                    .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-10 .zolo-modal-button::after,
                    .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-10 .zolo-modal-button::before {
                        background: ${presetBgColor ? presetBgColor : ''};
                    }
                `
                : ''
        }

        ${
            preset === 'button-11'
                ? `
                    .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-11 .zolo-modal-button .zolo-circle {
                       background: ${presetBgColor ? presetBgColor : ''};
                    }
                `
                : ''
        }

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button-content {
			${btnTypoDesktop}
			color: ${textColor ? textColor : ''};
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover .zolo-modal-button-content {
			color: ${textHoverColor ? textHoverColor : ''};
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon {
			${iconBorderDesktop}
			${iconBorderRadiusDesktop}
			${iconNormalBoxShadow}
			${iconPaddingDesktop}
            background: ${iconBg ? iconBg : ''};
        }

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${iconHeight}
			${iconWidth}
        }

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button svg {
			fill: ${iconColor ? iconColor : ''};
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover .zolo__display-icon {
			${iconHoverBoxShadow}
			background: ${iconHoverBg ? iconHoverBg : ''};
			border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''};
		}


		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover svg {
			fill: ${iconHoverColor ? iconHoverColor : ''};
		}

		${
            preset === 'button-1'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-1 .zolo-modal-button:before {
				${ptBGDesk}
			}`
                : ''
        }
		${
            preset === 'button-2'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptDeskBorderRadius}
			} .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before {
				${pthBGDesk}
			}
            .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptDeskBorder}
			}
            `
                : ''
        }
		${
            preset === 'button-3'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-3 .zolo-modal-button:before{
                ${pfthBGDesk}
			}
            `
                : ''
        }
		${
            preset === 'button-4'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-4 .zolo-modal-button{
					${
                        presetFourStyles && (presetFourStyles.shadowColor || pfDeskShadowWidth)
                            ? `box-shadow: ${pfDeskShadowWidth.replace(/;/g, '')} 0px 0px ${presetFourStyles.shadowColor};`
                            : ''
                    }
				} .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-4 .zolo-modal-button:after {
					${presetFourStyles && presetFourStyles.colorOne ? `background: ${presetFourStyles.colorOne};` : ''}
					${presetFourStyles && presetFourStyles.textShadowColor ? `text-shadow: -3px -3px 0px ${presetFourStyles.textShadowColor};` : ''}
					${presetFourStyles && presetFourStyles.textColor ? `color: ${presetFourStyles.textColor};` : ''}
				}`
                : ''
        }
		${
            preset === 'button-5'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-5 .zolo-modal-button:after {
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
                            ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-6 .zolo-modal-button{
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
                            ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-7 .zolo-modal-button:after {
                            background-color: ${presetSevenStyles && presetSevenStyles.bgColor};
                            ${psDeskBorder}
                            ${psDeskBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }

       	${
            preset === 'button-8'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:after, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                    ${pseDeskBorder}
                    ${pseDeskBorderRadius}
                }
				`
                : ''
        }
        ${
            preset === 'button-8'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                ${pseDeskBGStyle}

                }
				`
                : ''
        }

        ${
            preset === 'button-9'
                ? `
                    .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-9 .zolo-star-icon {
                       fill: ${psStarColor ? psStarColor : ''};
                    }
				`
                : ''
        }
  	`;
    const tabletAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${buttonAlignmentTab}
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${gapTab}
            ${btnTabAlign}
            ${borderStylesTab}
			${borderRadiusTab}
			${paddingTab}
            ${normalTabBGStyle}
            ${ generateCSS({attributes, key:'buttonWidth', getValue: (value) => `width: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'buttonMinHeight', getValue: (value) => `min-height: ${value};`, device: 'Tablet'}) }
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover{
			${hoverTabBGStyle}
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button-content {
			${btnTypoTab}
		}


		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon {
			${iconBorderTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${iconHeightTab}
			${iconWidthTab}
		}

		${
            preset === 'button-1'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-1 .zolo-modal-button:before {
				${ptBGTab}
			}`
                : ''
        }

        ${
            preset === 'button-2'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptTabBorderRadius}
			} .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before {
				${pthBGTab}
			}
            .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptTabBorder}
			}
            `
                : ''
        }

		${
            preset === 'button-3'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-3 .zolo-modal-button:before {
				${pfthBGTab}
			}`
                : ''
        }

        ${
            preset === 'button-4'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-4 .zolo-modal-button{
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
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-5 .zolo-modal-button:after {
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
                            ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-7 .zolo-modal-button:after {
                            ${psTabBorder}
                            ${psTabBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }

     	${
            preset === 'button-8'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:after, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                   ${pseTabBorder}
                  ${pseTabBorderRadius}
                }
				`
                : ''
        }
         ${
             preset === 'button-8'
                 ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                ${pseTabBGStyle}

                }
				`
                 : ''
         }
	`;
    const mobileAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${buttonAlignmentMob}
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${gapMob}
            ${btnMobAlign}
            ${borderStylesMob}
			${borderRadiusMob}
			${normalMobBGStyle}
			${paddingMob}
            ${ generateCSS({attributes, key:'buttonWidth', getValue: (value) => `width: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'buttonMinHeight', getValue: (value) => `min-height: ${value};`, device: 'Mobile'}) }
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover{
			${hoverMobBGStyle}
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button-content {
			${btnTypoMob}
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon {
			${iconBorderMob}
			${iconBorderRadiusMob}
			${iconPaddingMob}
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${iconHeightMob}
			${iconWidthMob}
		}

		${
            preset === 'button-1'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-1 .zolo-modal-button:before {
				${ptBGMob}
			}`
                : ''
        }

        ${
            preset === 'button-2'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptMobBorderRadius}
			} .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:before {
				${pthBGMob}
			}
            .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-2 .zolo-modal-button:after {
				${ptMobBorder}
			}
            `
                : ''
        }

		${
            preset === 'button-3'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-3 .zolo-modal-button:before {
				${pfthBGMob}
			}`
                : ''
        }

        ${
            preset === 'button-4'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-4 .zolo-modal-button{
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
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-5 .zolo-modal-button:after {
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
                            ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-7 .zolo-modal-button:after {
                            ${psMobBorder}
                            ${psMobBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }

    	${
            preset === 'button-8'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:after, .wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                  ${pseMobBorder}
                     ${pseMobBorderRadius}
                }
				`
                : ''
        }
        ${
            preset === 'button-8'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-8 .zolo-modal-button:before {
                ${pseMobBGStyle}

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
                desktopAllStyle={applyFilters('zolo.modal.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.modal.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.modal.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
