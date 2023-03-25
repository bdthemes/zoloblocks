/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';
import { handleUniqueId } from '../../../src/helpers/helper';
import { generateResAlignmentStyle } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeStyle } from '../../../src/helpers/res-range-helper';
import { BLOCK_PREFIX, BUTTON_ALIGNMENT, BUTTON_WIDTH } from './constants';
import { generateBackgroundControlStyles } from '../../../src/helpers/backgroundHelpers';
import { generateBorderStyle } from '../../../src/helpers/border-helper';
import { BUTTON_BG, BUTTON_BORDER } from './constants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const { uniqueId, preset, label, link, bgColor, textColor, blockStyle } = attributes;

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

	const {
		desktopRangeStyle: buttonWidthDesktop,
		tabRangeStyle: buttonWidthTab,
		mobRangeStyle: buttonWithMob,
	} = generateResRangeStyle({
		controlName: BUTTON_WIDTH,
		property: 'width',
		attributes,
	});

	const {
		desktopAlignStyle: buttonAlignmentDesktop,
		tabAlignStyle: buttonAlignmentTab,
		mobAlignStyle: buttonAlignmentMob,
	} = generateResAlignmentStyle({
		controlName: BUTTON_ALIGNMENT,
		property: 'text-align',
		attributes,
	});

	// generate background style
	const bgStyles = generateBackgroundControlStyles({
		controlName: BUTTON_BG,
		attributes,
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

	const desktopAllStyle = `
    .${uniqueId}{
      ${buttonWidthDesktop}
      ${buttonAlignmentDesktop}
    }
    .${uniqueId} .zolo-button {
      background-color: ${bgColor};
      color: ${textColor};
	  ${borderStyles}
    }
  `;
	const tabletAllStyle = `
    .${uniqueId}{
      ${buttonWidthTab}
      ${buttonAlignmentTab}
    }
	.${uniqueId} .zolo-button {
		${borderStylesTab}
	}
  `;
	const mobileAllStyle = `
  	.${uniqueId}{
      ${buttonWithMob}
      ${buttonAlignmentMob}
    }
	.${uniqueId} .zolo-button {
		${borderStylesMob}
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

	console.log(link);

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
						popoverProps={ { placement: 'bottom-start' } }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								icon="admin-links"
								label={ __( 'Link', 'zolo-blocks' )}
								onClick={ onToggle }
								aria-expanded={ isOpen }
							/>
						) }
						renderContent={ () => (
							<div className="zolo-dropdown-link">
								<LinkControl
									searchInputPlaceholder="Search here..."
									value={ link }
									settings={[
										{
											id: 'opensInNewTab',
											title: __( 'Open in new tab', 'zolo-blocks')
										},
										{
											id: 'addNoFollow',
											title: __( 'Add nofollow to link', 'zolo-blocks')
										}
									]}
									onChange={ ( data ) => setAttributes( { link: data } ) }
								>
								</LinkControl>
							</div>
						) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				<style>
					{`
				${desktopAllStyle}

				@media all and (max-width: 1024px) {	
					/* tabcssStart */			
					${tabletAllStyle}
					/* tabcssEnd */			
				}
					
				@media all and (max-width: 767px) {
					/* mobcssStart */			
					${mobileAllStyle}
					/* mobcssEnd */
				}	
			`}
				</style>
				<div
					className={`zolo-block-wrapper zolo-advanced-button ${uniqueId}`}
				>
					<div
						className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
						data-id={uniqueId}
					>
						<div className={`zolo-content`}>
							<RichText
								className='zolo-button'
								value={ label }
							  	onChange={ ( text ) => setAttributes( { label: text } ) }
								placeholder={ __( 'Button Text', 'zolo-blocks' ) }
								allowedFormats={ [] }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
