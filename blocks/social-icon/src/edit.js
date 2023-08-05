/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const {
	DisplayIcon,
	generateResRangeStyle,
	generateBorderStyle,
	handleUniqueId,
	softMinifyCssStrings,
	generateResCounterStyle,
	generateDimensionStyle,
	generateBoxShadowStyles,
	generateTypographyStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	BUTTON_BORDER,
	BTN_BORDER_RADIUS,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_PADDING,
	BUTTON_SIZE,
	ICON_TEXT_SPACING,
	BLOCK_MARGIN,
	BTN_SHADOW,
	BTN_HOVER_SHADOW,
} from './constants';

import Inspector from './inspector';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
		socialText,
		socialProfiles,
		socialBgColor,
		socialColor,
		socialBgHoverColor,
		socialTextColor,
		socialTextHoverColor,
		borderHoverColor,
	} = attributes;
	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		handleUniqueId({
			BLOCK_PREFIX,
			uniqueId,
			setAttributes,
			clientId,
		});
	}, []);

	const blockProps = useBlockProps({
		className: classnames(className, ``),
	});

	//  button general settings
	const {
		desktopRangeStyle: buttonSize,
		tabRangeStyle: buttonSizeTab,
		mobRangeStyle: buttonSizeMob,
	} = generateResRangeStyle({
		controlName: BUTTON_SIZE,
		property: 'font-size',
		attributes,
	});

	const {
		desktopBorderStyle: borderStyles,
		tabBorderStyle: borderStylesTab,
		mobBorderStyle: borderStylesMob,
	} = generateBorderStyle({
		controlName: BUTTON_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: btnRadiusDesk,
		dimensionStylesTab: btnRadiusTab,
		dimensionStylesMobile: btnRadiusMob,
	} = generateDimensionStyle({
		controlName: BTN_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const { boxShadowStyle: normalShadow } = generateBoxShadowStyles({
		attributes,
		controlName: BTN_SHADOW,
	});

	const { boxShadowStyle: hoverShadow } = generateBoxShadowStyles({
		attributes,
		controlName: BTN_HOVER_SHADOW,
	});

	const {
		typoStylesDesktop: textTypoDesk,
		typoStylesTab: textTypoTab,
		typoStylesMobile: textTypoMob,
	} = generateTypographyStyles({
		prefixConstant: TEXT_TYPOGRAPHY,
		defaultFontSize: 14,
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

	// Spacing between icon and text
	const {
		desktopRangeStyle: gapDesktop,
		tabRangeStyle: gapTablet,
		mobRangeStyle: gapMobile,
	} = generateResRangeStyle({
		controlName: ICON_TEXT_SPACING,
		property: 'gap',
		attributes,
	});

	// column count
	const {
		desktopRangeStyle: columnCountDeskstyle,
		tabRangeStyle: columnCountTabStyle,
		mobRangeStyle: columnCountMobStyle,
	} = generateResCounterStyle({
		controlName: COLUMN_COUNT,
		attributes,
		noProperty: true,
	});

	// column gap
	const {
		desktopRangeStyle: colGapDeskstyle,
		tabRangeStyle: colGapTabStyle,
		mobRangeStyle: colGapMobStyle,
	} = generateResRangeStyle({
		controlName: COLUMNS_GAP,
		property: 'column-gap',
		attributes,
	});

	// row gap
	const {
		desktopRangeStyle: rowGapDeskstyle,
		tabRangeStyle: rowGapTabStyle,
		mobRangeStyle: rowGapMobStyle,
	} = generateResRangeStyle({
		controlName: ROW_GAP,
		property: 'row-gap',
		attributes,
	});

	// block margin
	const {
		dimensionStylesDesktop: blockDeskMargin,
		dimensionStylesTab: blockTabMargin,
		dimensionStylesMobile: blockMobMargin,
	} = generateDimensionStyle({
		controlName: BLOCK_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}{
			${blockDeskMargin}
		}
		.${uniqueId}.zolo-advanced-social-share {
			${colGapDeskstyle}
			${rowGapDeskstyle}
		}
		.${uniqueId} .zolo-social-item {
			${borderStyles}
			${paddingDesktop}
			${gapDesktop}
			${btnRadiusDesk}
			${normalShadow}
		}
		.${uniqueId} .zolo-social-item:hover {
			border-color:${borderHoverColor};
			${hoverShadow}
		}
		.${uniqueId} .zolo-social-text {
			${textTypoDesk}
		}
		.${uniqueId}.zolo-advanced-social-preset-1,.zolo-advanced-social-preset-3,.zolo-advanced-social-preset-4 {
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
		}				 
		.${uniqueId} .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${buttonSize}
		}			
		${
			socialColor === 'custom'
				? `.zolo-advanced-social-share.zolo-advanced-social-preset-1.${uniqueId}.social-icon .zolo-social-item{
					color:${socialTextColor};
					background:${socialBgColor};
				}`
				: ' '
		}
		${
			socialColor === 'custom'
				? `.zolo-advanced-social-share.zolo-advanced-social-preset-1.${uniqueId}.social-icon .zolo-social-item:hover{
					color:${socialTextHoverColor};
					background:${socialBgHoverColor};
				}`
				: ' '
		}
  	`;
	const tabletAllStyle = `
		.${uniqueId}{
			${blockTabMargin}
		}
		.${uniqueId} .zolo-advanced-social-share {
			${colGapTabStyle}
			${rowGapTabStyle}
		}		
		.${uniqueId} .zolo-social-item {
			${borderStylesTab}
			${paddingTab}
			${gapTablet}
			${btnRadiusTab}
		}		
		.${uniqueId} .zolo-social-text {
			${textTypoTab}
		}			 
		.${uniqueId} .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${buttonSizeTab}
		}
		.${uniqueId}.zolo-advanced-social-preset-1,.zolo-advanced-social-preset-3,.zolo-advanced-social-preset-4 {
			grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		}			
	`;

	const mobileAllStyle = `
		.${uniqueId}{
			${blockMobMargin}
		}	
		.${uniqueId} .zolo-advanced-social-share {
			${colGapMobStyle}
			${rowGapMobStyle}
		}		
		.${uniqueId} .zolo-social-item {
			${borderStylesMob}
			${paddingMob}
			${gapMobile}
			${btnRadiusMob}
		}		
		.${uniqueId} .zolo-social-text {
			${textTypoMob}
		}			 
		.${uniqueId} .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${buttonSizeMob}
		}
		.${uniqueId}.zolo-advanced-social-preset-1,.zolo-advanced-social-preset-3,.zolo-advanced-social-preset-4 {
			grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
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
					class={`zolo-advanced-social-share zolo-advanced-social-${preset} ${uniqueId} ${BLOCK_PREFIX} `}
				>
					{socialProfiles &&
						socialProfiles.map((profile, index) => {
							let socialName = Object.keys(profile.icon)[0];
							return (
								<a
									href={profile.link && profile.link.url}
									key={index}
									target={
										profile.link &&
										profile.link.openInNewTab &&
										'_blank'
									}
									rel={
										profile.link &&
										profile.link.openInNewTab &&
										'noopener noreferrer'
									}
									className={`zolo-social-item zolo-${socialName}`}
								>
									{socialText !== 'none' && (
										<span className="zolo-social-icon">
											<DisplayIcon icon={profile.icon} />
										</span>
									)}
									{socialText !== 'iconOnly' && (
										<span className="zolo-social-text">
											{profile.text}
										</span>
									)}
								</a>
							);
						})}
				</div>
			</div>
		</>
	);
}
