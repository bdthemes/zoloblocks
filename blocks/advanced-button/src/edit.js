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

import {
	BLOCK_PREFIX,
	BUTTON_ALIGNMENT,
	BUTTON_BORDER,
	BUTTON_BORDER_RADIUS,
	ICON_SIZE,
	ICON_TEXT_SPACING,
	BUTTON_BG,
} from './constants';

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
			? 'flex'
			: 'inline-flex'
	};`;

	const tabAlign = `display: ${
		buttonAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const mobAlign = `display: ${
		buttonAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'
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

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}{
			${buttonAlignmentDesktop}
			${backgroundStylesDesktop}
			${borderStyles}
			${borderRadiusDesktop}
		}
		.${uniqueId}:hover{
			${hoverBackgroundStylesDesktop}
		}
		.${uniqueId} .zolo-content {
			${gap}
			${deskAlign}
			color: ${textColor ? textColor : 'inherit'};
		}
		.${uniqueId} .zolo-content:hover {
			color: ${textHoverColor ? textHoverColor : 'inherit'};
			border-color: ${borderHoverColor ? borderHoverColor : 'inherit'};
		}
		.${uniqueId} .zolo-content:hover .zolo-button-icon{
			fill: ${iconHoverColor ? iconHoverColor : 'inherit'};
		}
		.${uniqueId} .zolo-button-icon {
			${iconSize}
			fill: ${iconColor ? iconColor : 'inherit'};
		}
  	`;
	const tabletAllStyle = `
		.${uniqueId}{
			${buttonAlignmentTab}
			${borderStylesTab}
			${borderRadiusTab}
			${backgroundStylesTab}
		}
		.${uniqueId}:hover{
			${hoverBackgroundStylesTab}
		}
		.${uniqueId} .zolo-content {
			${gapTab}
			${tabAlign}
		}
		.${uniqueId} .zolo-button-icon {
			${iconSizeTab}
		}
	`;

	const mobileAllStyle = `
		.${uniqueId}{
			${buttonAlignmentMob}
			${borderStylesMob}
			${borderRadiusMob}
			${backgroundStylesMobile}
		}
		.${uniqueId}:hover{
			${hoverBackgroundStylesMobile}
		}
		.${uniqueId} .zolo-content {
			${gapMob}
			${mobAlign}
		}
		.${uniqueId} .zolo-button-icon {
			${iconSizeMob}
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
					className={`zolo-block-wrapper zolo-advanced-button ${uniqueId}`}
				>
					<div
						className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
						data-id={uniqueId}
					>
						<div className={`zolo-content ${iconPosition}`}>
							<RichText
								className={`zolo-button`}
								value={label}
								onChange={(text) =>
									setAttributes({ label: text })
								}
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
			</div>
		</>
	);
}
