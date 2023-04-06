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
import {
	handleUniqueId,
	softMinifyCssStrings,
} from '../../../src/helpers/helper';
import { generateResAlignmentStyle } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeStyle } from '../../../src/helpers/res-range-helper';
import { generateBorderStyle } from '../../../src/helpers/border-helper';
import { generateDimensionStyle } from '../../../src/helpers/dimension-helper';
import { generateBackgroundControlStyles } from '../../../src/helpers/backgroundHelpers';
import { generateBoxShadowStyles } from '../../../src/helpers/boxshadow-helper';
import { generateTypographyStyles } from '../../../src/helpers/typoHelpers';

import {
	BLOCK_PREFIX,
	BUTTON_ALIGNMENT,
	BUTTON_BORDER,
	BUTTON_BORDER_RADIUS,
	BUTTON_BG,
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
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		label,
		link,
		blockStyle,
		showIcon,
		iconPosition,
		iconColor,
		iconHoverColor,
		iconBg,
		iconHoverBg,
		iconBorderHoverColor,
		textColor,
		textHoverColor,
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
		backgroundStylesDesktop,
		hoverBackgroundStylesDesktop,
		backgroundStylesTab,
		hoverBackgroundStylesTab,
		backgroundStylesMobile,
		hoverBackgroundStylesMobile,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: BUTTON_BG,
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
		attributes,
		controlName: BUTTON_BOX_SHADOW,
	});

	// Generate Hover Box Shadow
	const {
		boxShadowStyle: hoverBoxShadowStyle,
		transitionStyle: buttonTransitionStyle,
	} = generateBoxShadowStyles({
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
	const {
		boxShadowStyle: iconHoverBoxShadow,
		transitionStyle: iconTransitionStyle,
	} = generateBoxShadowStyles({
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
		.wp-block-zolo-advanced-button {
			${buttonAlignmentDesktop}
		}
		.zolo-advanced-button.${uniqueId}{
			${backgroundStylesDesktop}
			${borderStyles}
			${borderRadiusDesktop}
			${normalBoxShadowStyle}
			${paddingDesktop}
			${marginDesktop}
			${deskAlign}
			transition: ${buttonTransitionStyle};
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverBoxShadowStyle}
			${hoverBackgroundStylesDesktop}
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

		.zolo-advanced-button.${uniqueId} .zolo-button-icon {
			${iconSize}
			${iconBorderDesktop}
			${iconBorderRadiusDesktop}
			${iconNormalBoxShadow}
			${iconPaddingDesktop}
			transition: ${iconTransitionStyle};
			fill: ${iconColor ? iconColor : ''};
			background: ${iconBg ? iconBg : ''};
		}
		.zolo-advanced-button.${uniqueId}:hover .zolo-button-icon{
			${iconHoverBoxShadow}
			fill: ${iconHoverColor ? iconHoverColor : ''};
			background: ${iconHoverBg ? iconHoverBg : ''};
			border-color: ${iconBorderHoverColor ? iconBorderHoverColor : ''};
		}

  	`;
	const tabletAllStyle = `
		.wp-block-zolo-advanced-button {
			${buttonAlignmentTab}
		}
		.zolo-advanced-button.${uniqueId}{
			${borderStylesTab}
			${borderRadiusTab}
			${backgroundStylesTab}
			${paddingTab}
			${marginTab}
			${tabAlign}
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverBackgroundStylesTab}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gapTab}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoTab}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-icon {
			${iconSizeTab}
			${iconBorderTab}
			${iconBorderRadiusTab}
			${iconPaddingTab}
		}
	`;

	const mobileAllStyle = `
		.wp-block-zolo-advanced-button {
			${buttonAlignmentMob}
		}
		.zolo-advanced-button.${uniqueId}{
			${borderStylesMob}
			${borderRadiusMob}
			${backgroundStylesMobile}
			${paddingMob}
			${marginMob}
			${mobAlign}
		}
		.zolo-advanced-button.${uniqueId}:hover{
			${hoverBackgroundStylesMobile}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button {
			${gapMob}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-content {
			${btnTypoMob}
		}

		.zolo-advanced-button.${uniqueId} .zolo-button-icon {
			${iconSizeMob}
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
			<BlockControls>
				<ToolbarGroup>
					<Dropdown
						className="my-container-class-name"
						contentClassName="my-popover-content-classname"
						popoverProps={{ placement: 'bottom-start' }}
						renderToggle={({ isOpen, onToggle }) => (
							<ToolbarButton
								icon="admin-links"
								label={__('Link', 'zolo-blocks')}
								onClick={onToggle}
								aria-expanded={isOpen}
							/>
						)}
						renderContent={() => (
							<div className="zolo-dropdown-link">
								<LinkControl
									searchInputPlaceholder="Search here..."
									value={link}
									settings={[
										{
											id: 'opensInNewTab',
											title: __(
												'Open in new tab',
												'zolo-blocks'
											),
										},
										{
											id: 'addNoFollow',
											title: __(
												'Add nofollow to link',
												'zolo-blocks'
											),
										},
									]}
									onChange={(data) =>
										setAttributes({ link: data })
									}
								></LinkControl>
							</div>
						)}
					/>
				</ToolbarGroup>
			</BlockControls>
			<style>{` ${softMinifyCssStrings(allStyle)}`}</style>
			<div {...blockProps}>
				<div
					className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}
				>
					<div className={`zolo-button ${iconPosition}`}>
						<RichText
							tagName="span"
							className={`zolo-button-content`}
							value={label}
							onChange={(text) => setAttributes({ label: text })}
							placeholder={__('Button Text', 'zolo-blocks')}
							allowedFormats={[]}
						/>
						{showIcon && (
							<svg
								clipRule="evenodd"
								fillRule="evenodd"
								strokeLinejoin="round"
								strokeMiterlimit="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="zolo-button-icon"
							>
								<path
									d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
									fill-rule="nonzero"
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
