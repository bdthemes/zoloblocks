/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, Popover } from '@wordpress/components';
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
	LinkControl,
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
	LINK,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

import Inspector from './inspector';
import { generateLinkControlAttributes } from '../../../src/module-export';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
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
		presetSevenStyles,
		presetEightStyles,
		presetTenStyles,
		presetElevenStyles,
		presetTwelveStyles,
	} = attributes;

	const [popoverVisible, setPopoverVisible] = useState(false);
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
	const deskAlign = `display: ${
		buttonAlignmentDesktop === 'text-align:justify;'
			? 'block'
			: 'inline-block'
	};`;

	const tabAlign = `display: ${
		buttonAlignmentTab === 'text-align:justify;' ? 'block' : 'inline-block'
	};`;

	const mobAlign = `display: ${
		buttonAlignmentMob === 'text-align:justify;' ? 'block' : 'inline-block'
	};`;

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
	let presetStyles;
	let presetHoverStyles;
	switch (preset) {
		case 'button-1':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}{
					box-shadow: #fff 4px 4px 0 0, ${
						presetOneStyles && presetOneStyles.shadowColor
					} 4px 4px 0 1px;
				}
			`;
			break;
		case 'button-2':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:before{
					background-color: ${presetTwoStyles && presetTwoStyles.bgColor};
				}`;
			presetHoverStyles = `
				.zolo-advanced-button.${uniqueId}:hover:before{
					background-color: ${presetTwoStyles && presetTwoStyles.hoverBgColor};
				}`;
			break;
		case 'button-3':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					background-color: ${presetThreeStyles && presetThreeStyles.bgColor};
				}`;
			break;
		case 'button-4':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}{
					background: linear-gradient(45deg, transparent 5%, ${
						presetFourStyles.colorTwo
					} 5%);
					box-shadow: 6px 0px 0px ${presetFourStyles.colorOne};
				}
				.zolo-advanced-button.${uniqueId}:after{
					background: linear-gradient(45deg, transparent 3%, ${
						presetFourStyles && presetFourStyles.colorOne
					} 3%, ${
				presetFourStyles && presetFourStyles.colorOne
			} 5%, ${presetFourStyles && presetFourStyles.colorTwo} 5%);
				}`;
			break;
		case 'button-5':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					border-color: ${presetFiveStyles && presetFiveStyles.borderColor};
				}`;
			break;
		case 'button-7':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					background-color: ${presetSevenStyles && presetSevenStyles.bgColor};
				}`;
			break;
		case 'button-8':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					background: ${presetEightStyles && presetEightStyles.overlayColor};
				}`;
			break;
		case 'button-10':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}{
					--color: ${
						presetTenStyles.outlineColor
							? presetTenStyles.outlineColor
							: '#373b44'
					};
				}`;
			break;
		case 'button-11':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					background-color: ${presetElevenStyles && presetElevenStyles.overlayBgColor};
				}`;
			break;
		case 'button-12':
			presetStyles = `
				.zolo-advanced-button.${uniqueId}:after{
					background-color: ${presetTwelveStyles && presetTwelveStyles.overlayBgColor};
				}`;
			break;
		default:
			presetStyles = '';
			presetHoverStyles = '';
	}
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
		${presetStyles ? presetStyles : ''}
		${presetHoverStyles ? presetHoverStyles : ''}
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
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			<style>{` ${softMinifyCssStrings(allStyle)}`}</style>
			<div {...blockProps}>
				<div
					className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}
				>
					<div className={`zolo-button ${iconPosition}`}>
						{iconType !== 'iconOnly' && (
							<RichText
								tagName="span"
								className={`zolo-button-content`}
								value={label}
								onChange={(text) =>
									setAttributes({ label: text })
								}
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
