/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    generateResAlignmentStyle,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    generateTypographyStyles,
    DisplayIcon,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    BUTTON_ALIGNMENT,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    BUTTON_PADDING,
    BUTTON_MARGIN,
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

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        label,
        blockStyle,
        iconType,
        icon,
        iconPosition,
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
        presetFiveStyles,
        presetSixStyle,
        presetSevenStyles,
        presetEightStyles,
        presetTenStyles,
        presetElevenStyles,
        presetTwelveStyles,
    } = attributes;

    // unique ID
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
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

    // Generate Margin
    const {
        dimensionStylesDesktop: marginDesktop,
        dimensionStylesTab: marginTab,
        dimensionStylesMobile: marginMob,
    } = generateDimensionStyle({
        controlName: BUTTON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    /**
     * Button Icon
     */
    // generate border style
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
		.zolo-advanced-button.${uniqueId}{
			${normalDeskBGStyle}
			${borderStyles}
			${borderRadiusDesktop}
			${normalBoxShadowStyle}
			${paddingDesktop}
			${marginDesktop}
			${deskAlign}
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverBoxShadowStyle}
			${hoverDeskBGStyle}
			border-color: ${borderHoverColor ? borderHoverColor : ''};
		}
		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gap}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoDesktop}
			color: ${textColor ? textColor : ''};
		}
		.zolo-advanced-button.${uniqueId}:hover .zolo-button-content {
			color: ${textHoverColor ? textHoverColor : ''};
		}
		.zolo-advanced-button.${uniqueId} .zolo-button i, .zolo-advanced-button.${uniqueId} .zolo-button span.dashicon {
			${iconSize}
			${iconHeight}
			${iconWidth}
			${iconBorderDesktop}
			${iconBorderRadiusDesktop}
			${iconNormalBoxShadow}
			${iconPaddingDesktop}
			color: ${iconColor ? iconColor : ''};
			background: ${iconBg ? iconBg : ''};
		}
		.zolo-advanced-button.${uniqueId}:hover .zolo-button i, .zolo-advanced-button.${uniqueId}:hover .zolo-button span.dashicon {
			${iconHoverBoxShadow}
			color: ${iconHoverColor ? iconHoverColor : ''};
			background: ${iconHoverBg ? iconHoverBg : ''};
			border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''};
		}
		${
            preset === 'button-1'
                ? `.zolo-advanced-button.${uniqueId}.button-1 {
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poDeskShadowWidth}
			}`
                : ''
        }
		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2:before {
				background-color: ${presetTwoStyles && presetTwoStyles.bgColor};
				${ptDeskBorder}
				${ptDeskBorderRadius}
			} .zolo-advanced-button.${uniqueId}.button-2:hover:before {
				background-color: ${presetTwoStyles && presetTwoStyles.hoverBgColor};
			}`
                : ''
        }
		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3:after {
					background-color: ${presetThreeStyles && presetThreeStyles.bgColor};
				${pthDeskBorder}
				${pthDeskBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-4'
                ? `.zolo-advanced-button.${uniqueId}.button-4 {
					${
                        presetFourStyles && (presetFourStyles.shadowColor || pfDeskShadowWidth)
                            ? `box-shadow: ${pfDeskShadowWidth.replace(/;/g, '')} 0px 0px ${presetFourStyles.shadowColor};`
                            : ''
                    }
				} .zolo-advanced-button.${uniqueId}.button-4:after {
					${presetFourStyles && presetFourStyles.colorOne ? `background: ${presetFourStyles.colorOne};` : ''}
					${presetFourStyles && presetFourStyles.textShadowColor ? `text-shadow: -3px -3px 0px ${presetFourStyles.textShadowColor};` : ''}
					${presetFourStyles && presetFourStyles.textColor ? `color: ${presetFourStyles.textColor};` : ''}
				}`
                : ''
        }
		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5:after {
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
                            ? `.zolo-advanced-button.${uniqueId}.button-6 {
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
                        presetSixStyle
                            ? `.zolo-advanced-button.${uniqueId}.button-7:after {
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
		.zolo-advanced-button.${uniqueId}{
			${borderStylesTab}
			${borderRadiusTab}
			${normalTabBGStyle}
			${paddingTab}
			${marginTab}
			${tabAlign}
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverTabBGStyle}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gapTab}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoTab}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button-icon {
			${iconSizeTab}
			${iconHeightTab}
			${iconWidthTab}
			${iconBorderTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}
		${
            preset === 'button-1'
                ? `.zolo-advanced-button.${uniqueId}.button-1 {
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poTabShadowWidth}
			}`
                : ''
        }
		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2:before {
				${ptTabBorder}
				${ptTabBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3:after {
				${pthTabBorder}
				${pthTabBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5:after {
				${pfvTabBorder}
				${pfvTabBorderRadius}
			}`
                : ''
        }
        ${
            preset === 'button-7'
                ? `
					${
                        presetSixStyle
                            ? `.zolo-advanced-button.${uniqueId}.button-7:after {
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
		.zolo-advanced-button.${uniqueId}{
			${borderStylesMob}
			${borderRadiusMob}
			${normalMobBGStyle}
			${paddingMob}
			${marginMob}
			${mobAlign}
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverMobBGStyle}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gapMob}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoMob}
		}
		.zolo-advanced-button.${uniqueId} .zolo-button-icon {
			${iconSizeMob}
			${iconHeightMob}
			${iconWidthMob}
			${iconBorderMob}
			${iconBorderRadiusMob}
			${iconPaddingMob}
		}
		${
            preset === 'button-1'
                ? `.zolo-advanced-button.${uniqueId}.button-1 {
				box-shadow: #fff 4px 4px 0 0, ${presetOneStyles && presetOneStyles.shadowColor} 4px 4px 0 ${poMobShadowWidth}
			}`
                : ''
        }
		${
            preset === 'button-2'
                ? `.zolo-advanced-button.${uniqueId}.button-2:before {
				${ptMobBorder}
				${ptMobBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-3'
                ? `.zolo-advanced-button.${uniqueId}.button-3:after {
				${pthMobBorder}
				${pthMobBorderRadius}
			}`
                : ''
        }
		${
            preset === 'button-5'
                ? `.zolo-advanced-button.${uniqueId}.button-5:after {
				${pfvMobBorder}
				${pfvMobBorderRadius}
			}`
                : ''
        }
        ${
            preset === 'button-7'
                ? `
					${
                        presetSixStyle
                            ? `.zolo-advanced-button.${uniqueId}.button-7:after {
                            ${psMobBorder}
                            ${psMobBorderRadius}
					}`
                            : ''
                    }
				`
                : ''
        }
  	`;

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{` ${softMinifyCssStrings(allStyle)}`}</style>
            <div {...blockProps}>
                <div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}>
                    <div className={`zolo-button ${iconPosition}`}>
                        {iconType !== 'iconOnly' && (
                            <RichText
                                tagName="span"
                                className={`zolo-button-content`}
                                value={label}
                                onChange={(text) => setAttributes({ label: text })}
                                placeholder={__('Button Text', 'zolo-blocks')}
                                allowedFormats={[]}
                            />
                        )}
                        {iconType !== 'none' && <DisplayIcon icon={icon} />}
                    </div>
                </div>
            </div>
        </>
    );
}
