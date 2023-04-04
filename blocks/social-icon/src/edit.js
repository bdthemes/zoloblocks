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

import {
	BLOCK_PREFIX,
	BUTTON_ALIGNMENT,
	BUTTON_TEXT_COLOR,
	BUTTON_BG_COLOR,
	BUTTON_HOVER_BG_COLOR,
	BUTTON_BORDER,
	ICON_SIZE,
	ICON_TEXT_SPACING,
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
		textColor,
		textHoverColor,
		iconPosition,
        socialText
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
		}
		.${uniqueId} .zolo-content {
			${borderStyles}
			${gap}
			${deskAlign}
			color: ${textColor ? textColor : 'inherit'};
		}
		.${uniqueId} .zolo-content:hover {
			color: ${textHoverColor ? textHoverColor : 'inherit'};
		}
		.${uniqueId} .zolo-button-icon {
			${iconSize}
		}
  	`;
	const tabletAllStyle = `
		.${uniqueId}{
			${buttonAlignmentTab}
		}
		.${uniqueId} .zolo-content {
			${borderStylesTab}
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
		}
		.${uniqueId} .zolo-content {
			${borderStylesMob}
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
					className={`zolo-block-wrapper zolo-social-media ${uniqueId}`}
				>
					<div
						className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
						data-id={uniqueId}
					>
						<div className={`zolo-content ${iconPosition}`}>

                             <RichText
								className={`zolo-social-text`}
								value={label}
								onChange={(text) =>
									setAttributes({ label: text })
								}
								placeholder={__('Social Text', 'zolo-blocks')}
								allowedFormats={[]}
							 />
                        
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
