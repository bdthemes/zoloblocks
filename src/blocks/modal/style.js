/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateBorderStyle,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateCSS,
    getBoxControlValue,
} = window.zoloModule;

import {
    BUTTON_BORDER,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    PT_BORDER,
    PTH_BORDER,
    PFV_BORDER,
    PS_BORDER,
    PSE_BORDER,
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
        modalOverlayBg,
        modalContentBg,
        modalCloseColor,
        modalCloseHoverColor,
        modalCloseBg,
        modalCloseHoverBg,
    } = attributes;

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

    // preset five
    const {
        desktopBorderStyle: pfvDeskBorder,
        tabBorderStyle: pfvTabBorder,
        mobBorderStyle: pfvMobBorder,
    } = generateBorderStyle({
        controlName: PFV_BORDER,
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
        backgroundStylesDesktop: pseDeskBGStyle,
        backgroundStylesTab: pseTabBGStyle,
        backgroundStylesMobile: pseMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: PSE_BG,
        attributes,
        noMainBGImg: true,
    });



    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${ generateCSS({attributes, key:'buttonAlignment', getValue: (value) => `text-align: ${value};`, device: 'Desktop'}) }
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button:hover{
			${hoverBoxShadowStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${ generateCSS({attributes, key:'iconTextSpacing', getValue: (value) => `gap: ${value};`, device: 'Desktop'}) }
			${borderStyles}
            ${normalDeskBGStyle}
            ${normalBoxShadowStyle}
            ${ generateCSS({attributes, key:'buttonBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'buttonPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'buttonMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Desktop'}) }
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
			${iconNormalBoxShadow}
            ${ generateCSS({attributes, key:'iconBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'iconPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'iconMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Desktop'}) }
            background: ${iconBg ? iconBg : ''};
        }

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `height: ${value};`, device: 'Desktop'}) }
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `width: ${value};`, device: 'Desktop'}) }
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
				${ generateCSS({attributes, key:'presetTRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
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
					${ generateCSS({attributes, key:'presetFSWidth', getValue: (value) => presetFourStyles && presetFourStyles.shadowColor && value ? `box-shadow: ${value} 0px 0px ${presetFourStyles.shadowColor};` : '', device: 'Desktop'}) }
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
				${ generateCSS({attributes, key:'presetFVBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
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
                            ${ generateCSS({attributes, key:'presetSBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
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
                    ${ generateCSS({attributes, key:'pseBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
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

        /* Popup Modal Styles */
        .zolo-modal-overlay.${uniqueId} {
            ${modalOverlayBg ? `background-color: ${modalOverlayBg};` : ''}
        }

        .zolo-modal-content.${uniqueId} {
            ${modalContentBg ? `background-color: ${modalContentBg};` : ''}
            overflow: visible;
            ${ generateCSS({attributes, key:'modalWidth', getValue: (value) => `max-width: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'modalPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'modalBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close {
            ${modalCloseColor ? `color: ${modalCloseColor};` : ''}
            ${modalCloseBg ? `background-color: ${modalCloseBg};` : ''}
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'modalCloseTop', getValue: (value) => `top: ${value};`, device: 'Desktop'}) }
            ${ generateCSS({attributes, key:'modalCloseRight', getValue: (value) => `right: ${value};`, device: 'Desktop'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close svg {
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Desktop'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close:hover {
            ${modalCloseHoverColor ? `color: ${modalCloseHoverColor};` : ''}
            ${modalCloseHoverBg ? `background-color: ${modalCloseHoverBg};` : ''}
        }
  	`;
    const tabletAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${ generateCSS({attributes, key:'buttonAlignment', getValue: (value) => `text-align: ${value};`, device: 'Tablet'}) }
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${ generateCSS({attributes, key:'iconTextSpacing', getValue: (value) => `gap: ${value};`, device: 'Tablet'}) }
            ${borderStylesTab}
            ${normalTabBGStyle}
            ${ generateCSS({attributes, key:'buttonBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'buttonPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'buttonMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Tablet'}) }
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
            ${ generateCSS({attributes, key:'iconBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'iconPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'iconMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Tablet'}) }
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `height: ${value};`, device: 'Tablet'}) }
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `width: ${value};`, device: 'Tablet'}) }
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
				${ generateCSS({attributes, key:'presetTRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
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
					${ generateCSS({attributes, key:'presetFSWidth', getValue: (value) => presetFourStyles && presetFourStyles.shadowColor && value ? `box-shadow: ${value} 0px 0px ${presetFourStyles.shadowColor};` : '', device: 'Tablet'}) }
				}`
                : ''
        }

		${
            preset === 'button-5'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-5 .zolo-modal-button:after {
				${pfvTabBorder}
				${ generateCSS({attributes, key:'presetFVBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
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
                            ${ generateCSS({attributes, key:'presetSBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
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
                  ${ generateCSS({attributes, key:'pseBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
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

        /* Popup Modal Styles - Tablet */
        .zolo-modal-content.${uniqueId} {
            ${ generateCSS({attributes, key:'modalWidth', getValue: (value) => `max-width: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'modalPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'modalBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close {
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'modalCloseTop', getValue: (value) => `top: ${value};`, device: 'Tablet'}) }
            ${ generateCSS({attributes, key:'modalCloseRight', getValue: (value) => `right: ${value};`, device: 'Tablet'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close svg {
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Tablet'}) }
        }
	`;
    const mobileAllStyle = `
		.wp-block-zolo-modal.${uniqueId} {
			${ generateCSS({attributes, key:'buttonAlignment', getValue: (value) => `text-align: ${value};`, device: 'Mobile'}) }
		}

        .wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button {
			${ generateCSS({attributes, key:'iconTextSpacing', getValue: (value) => `gap: ${value};`, device: 'Mobile'}) }
            ${borderStylesMob}
			${normalMobBGStyle}
            ${ generateCSS({attributes, key:'buttonBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'buttonPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'buttonMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Mobile'}) }
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
            ${ generateCSS({attributes, key:'iconBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'iconPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'iconMargin', getValue: (value) => getBoxControlValue(value, 'margin'), device: 'Mobile'}) }
		}

		.wp-block-zolo-modal .zolo-modal.${uniqueId} .zolo-modal-button .zolo__display-icon svg {
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `height: ${value};`, device: 'Mobile'}) }
			${ generateCSS({attributes, key:'iconSize', getValue: (value) => `width: ${value};`, device: 'Mobile'}) }
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
				${ generateCSS({attributes, key:'presetTRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
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
					${ generateCSS({attributes, key:'presetFSWidth', getValue: (value) => presetFourStyles && presetFourStyles.shadowColor && value ? `box-shadow: ${value} 0px 0px ${presetFourStyles.shadowColor};` : '', device: 'Mobile'}) }
				}`
                : ''
        }

		${
            preset === 'button-5'
                ? `.wp-block-zolo-modal .zolo-modal.${uniqueId}.button-5 .zolo-modal-button:after {
				${pfvMobBorder}
				${ generateCSS({attributes, key:'presetFVBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
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
                            ${ generateCSS({attributes, key:'presetSBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
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
                     ${ generateCSS({attributes, key:'pseBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
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

        /* Popup Modal Styles - Mobile */
        .zolo-modal-content.${uniqueId} {
            ${ generateCSS({attributes, key:'modalWidth', getValue: (value) => `max-width: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'modalPadding', getValue: (value) => getBoxControlValue(value, 'padding'), device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'modalBorderRadius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close {
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'modalCloseTop', getValue: (value) => `top: ${value};`, device: 'Mobile'}) }
            ${ generateCSS({attributes, key:'modalCloseRight', getValue: (value) => `right: ${value};`, device: 'Mobile'}) }
        }

        .zolo-modal-content.${uniqueId} .zolo-modal-close svg {
            ${ generateCSS({attributes, key:'modalCloseSize', getValue: (value) => `width: ${value}; height: ${value};`, device: 'Mobile'}) }
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
