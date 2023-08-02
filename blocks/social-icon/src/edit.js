/**
 * WordPress dependencies
 */

import {
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const {
	DisplayIcon,
	generateResAlignmentStyle,
	generateResRangeStyle,
	generateBorderStyle,
	handleUniqueId,
	softMinifyCssStrings,
	generateResCounterStyle,
	generateDimensionStyle,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	BUTTON_ALIGNMENT,
	BUTTON_BORDER,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	ICON_SIZE,
	BUTTON_PADDING,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	ICON_TEXT_SPACING,
	BUTTON_HEIGHT,
} from './constants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		link,
		blockStyle,
		textColor,
		textHoverColor,
		socialText,
		iconPosition,
		socialProfiles,
		socialProfilesLinkTarget,
		socialProfileColumns,
		socialBgColor,
		socialColor,
		socialBgHoverColor,
		socialTextColor,
		socialTextHoverColor,
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

	/**
	 * Generate Alignment Class
	 */
	const deskAlign = `display: ${
		buttonAlignmentDesktop === 'text-align:justify;'
			? 'flex'
			: 'inline-flex'
	};`;

	const tabAlign = `display: ${
		buttonAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const mobAlign = `display: ${
		buttonAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	// generate border style
	const {
		desktopBorderStyle: borderStyles,
		tabBorderStyle: borderStylesTab,
		mobBorderStyle: borderStylesMob,
	} = generateBorderStyle({
		controlName: BUTTON_BORDER,
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

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}{
			${buttonAlignmentDesktop}
		}
		.${uniqueId} .zolo-content {
			${borderStyles}
			${deskAlign}
			color: ${textColor ? textColor : 'inherit'};
		}
		.${uniqueId} .zolo-content:hover {
			color: ${textHoverColor ? textHoverColor : 'inherit'};
		}
		.${uniqueId} .zolo-button-icon {
			${iconSize}
		}
		.${uniqueId}.zolo-advanced-social-share {
			${colGapDeskstyle}
			${rowGapDeskstyle}
		}
		.${uniqueId} .zolo-social-item {
			${paddingDesktop}
			${gapDesktop}
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
			${buttonAlignmentTab}
		}
		.${uniqueId} .zolo-content {
			${borderStylesTab}
			${tabAlign}
		}
		.${uniqueId} .zolo-button-icon {
			${iconSizeTab}
		}
		.${uniqueId} .zolo-advanced-social-share {
			${colGapTabStyle}
			${rowGapTabStyle}
		}		
		.${uniqueId} .zolo-social-item {
			${paddingTab}
			${gapTablet}
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
			${buttonAlignmentMob}
		}
		.${uniqueId} .zolo-content {
			${borderStylesMob}
			${mobAlign}
		}
		.${uniqueId} .zolo-button-icon {
			${iconSizeMob}
		}		
		.${uniqueId} .zolo-advanced-social-share {
			${colGapMobStyle}
			${rowGapMobStyle}
		}		
		.${uniqueId} .zolo-social-item {
			${paddingMob}
			${gapMobile}
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
