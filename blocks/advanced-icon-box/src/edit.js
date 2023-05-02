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
	generateTypographyStyles,
	DisplayIcon,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	ICON_BOX_ALIGNMENT,
	TITLE_ALIGNMENT,
	TITLE_MARGIN,
	DESC_ALIGNMENT,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_SIZE,
	ICON_PADDING,
	ICON_MARGIN,
	BUTTON_ICON_SIZE,
	ICON_SPACING,
	ICON_TEXT_SPACING,
} from './constants';

import {
	SUBTITLE_TYPOGRAPHY,
	TITLE_TYPOGRAPHY,
	DESCRIPTION_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import Inspector from './inspector';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		titleTag,
		link,
		blockStyle,
		showIcon,
		mainIcon,
		buttonIcon,
		textColor,
		textHoverColor,
		descColor,
		descHoverColor,
		iconPosition,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		iconType,
		iconBoxTitle,
		iconBoxDescription,
		buttonText,
		buttonLink,
		globalLink,
		presetOneStyles,
		presetTwoStyles,
		presetThreeStyles,
	} = attributes;

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect( () => {
		handleUniqueId( {
			BLOCK_PREFIX,
			uniqueId,
			setAttributes,
			clientId,
		} );
	}, [] );

	const blockProps = useBlockProps( {
		className: classnames( className, `` ),
	} );

	// icon alignment
	const {
		desktopAlignStyle: iconAlignmentDesktop,
		tabAlignStyle: iconAlignmentTab,
		mobAlignStyle: iconAlignmentMob,
	} = generateResAlignmentStyle( {
		controlName: ICON_BOX_ALIGNMENT,
		property: 'text-align',
		attributes,
	} );

	// generate icon border radius
	const {
		dimensionStylesDesktop: iconBorderRadiusDesktop,
		dimensionStylesTab: iconBorderRadiusTab,
		dimensionStylesMobile: iconBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: ICON_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	// Generate Icon Padding
	const {
		dimensionStylesDesktop: iconPaddingDesktop,
		dimensionStylesTab: iconPaddingTab,
		dimensionStylesMobile: iconPaddingMob,
	} = generateDimensionStyle( {
		controlName: ICON_PADDING,
		styleFor: 'padding',
		attributes,
	} );

	// Generate Icon Margin
	const {
		dimensionStylesDesktop: iconMarginDesktop,
		dimensionStylesTab: iconMarginTab,
		dimensionStylesMobile: iconMarginMob,
	} = generateDimensionStyle( {
		controlName: ICON_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	//title typography
	const {
		typoStylesDesktop: titleTypoDesktop,
		typoStylesTab: titleTypoTab,
		typoStylesMobile: titleTypoMobile,
	} = generateTypographyStyles( {
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 25,
		attributes,
	} );

	// title alignment
	const {
		desktopAlignStyle: textAlignmentDesktop,
		tabAlignStyle: textAlignmentTab,
		mobAlignStyle: textAlignmentMob,
	} = generateResAlignmentStyle( {
		controlName: TITLE_ALIGNMENT,
		property: 'text-align',
		attributes,
	} );

	// Generate Title Margin
	const {
		dimensionStylesDesktop: titleMarginDesktop,
		dimensionStylesTab: titleMarginTab,
		dimensionStylesMobile: titleMarginMob,
	} = generateDimensionStyle( {
		controlName: TITLE_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	// description alignment
	const {
		desktopAlignStyle: descAlignmentDesktop,
		tabAlignStyle: descAlignmentTab,
		mobAlignStyle: descAlignmentMob,
	} = generateResAlignmentStyle( {
		controlName: DESC_ALIGNMENT,
		property: 'text-align',
		attributes,
	} );

	/**
	 * Generate Title Alignment Class
	 */
	const deskTitleAlign = `display: ${
		textAlignmentDesktop === 'text-align:left;' ? 'flex' : 'inline-flex'
	};`;

	const tabTitleAlign = `display: ${
		textAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const mobTitleAlign = `display: ${
		textAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	/**
	 * Generate Description Alignment Class
	 */

	const deskDescAlign = `display: ${
		descAlignmentDesktop === 'text-align:left;' ? 'flex' : 'inline-flex'
	};`;

	const tabDescAlign = `display: ${
		descAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const mobDescAlign = `display: ${
		descAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	/**
	 * Generate Icon Alignment Class
	 */
	const deskAlign = `display: ${
		iconAlignmentDesktop === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const tabAlign = `display: ${
		iconAlignmentTab === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	const mobAlign = `display: ${
		iconAlignmentMob === 'text-align:justify;' ? 'flex' : 'inline-flex'
	};`;

	// generate border style
	const {
		desktopBorderStyle: borderStyles,
		tabBorderStyle: borderStylesTab,
		mobBorderStyle: borderStylesMob,
	} = generateBorderStyle( {
		controlName: ICON_BORDER,
		attributes,
	} );

	// generate icon size
	const {
		desktopRangeStyle: iconSize,
		tabRangeStyle: iconSizeTab,
		mobRangeStyle: iconSizeMob,
	} = generateResRangeStyle( {
		controlName: ICON_SIZE,
		property: 'font-size',
		attributes,
	} );
	// generate icon height
	const {
		desktopRangeStyle: iconHeight,
		tabRangeStyle: iconHeightTab,
		mobRangeStyle: iconHeightMob,
	} = generateResRangeStyle( {
		controlName: ICON_SIZE,
		property: 'height',
		attributes,
	} );
	// generate icon spacing
	const {
		desktopRangeStyle: iconSpacing,
		tabRangeStyle: iconSpacingTab,
		mobRangeStyle: iconSpacingMob,
	} = generateResRangeStyle( {
		controlName: ICON_SPACING,
		property: 'margin',
		attributes,
	} );
	// Spacing between icon and text
	const {
		desktopRangeStyle: gap,
		tabRangeStyle: gapTab,
		mobRangeStyle: gapMob,
	} = generateResRangeStyle( {
		controlName: ICON_TEXT_SPACING,
		property: 'gap',
		attributes,
	} );

	// generate button icon size
	const {
		desktopRangeStyle: buttonIconSize,
		tabRangeStyle: buttonIconSizeTab,
		mobRangeStyle: buttonIconSizeMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_ICON_SIZE,
		property: 'font-size',
		attributes,
	} );

	// generate button icon height
	const {
		desktopRangeStyle: buttonIconHeight,
		tabRangeStyle: buttonIconHeightTab,
		mobRangeStyle: buttonIconHeightMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_ICON_SIZE,
		property: 'height',
		attributes,
	} );

	// generate button icon width
	const {
		desktopRangeStyle: buttonIconWidth,
		tabRangeStyle: buttonIconWidthTab,
		mobRangeStyle: buttonIconWidthMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_ICON_SIZE,
		property: 'width',
		attributes,
	} );

	/**
	 * Presets Based Styles
	 */
	let presetStyles;
	switch ( preset ) {
		case 'style-1':
			presetStyles = `
				.zolo-block-icon-wrap{
					justify-content: ${ presetOneStyles && presetOneStyles.iconPosition };
				}	
				.zolo-block-link-btn{
					justify-content: ${ presetOneStyles && presetOneStyles.buttonPosition };
				}		
				.zolo-box-button{
					flex-direction: ${ presetOneStyles && presetOneStyles.buttonIconPosition };
				}			
								
			
			`;
			break;
		case 'style-2':
			presetStyles = `
				.zolo-block-icon-wrap{
					align-items: ${ presetTwoStyles && presetTwoStyles.iconPosition };
				}					
				.zolo-block-link-btn{
					justify-content: ${ presetTwoStyles && presetTwoStyles.buttonPosition };
				}		
				.zolo-box-button{
					flex-direction: ${ presetTwoStyles && presetTwoStyles.buttonIconPosition };
				}		
			
			`;
			break;
		case 'style-3':
			presetStyles = `
				.${ uniqueId }
				.zolo-block-icon-wrap{
					align-items: ${ presetThreeStyles && presetThreeStyles.iconPosition };
				}						
				.zolo-block-link-btn{
					justify-content: ${ presetThreeStyles && presetThreeStyles.buttonPosition };
				}		
				.zolo-box-button{
					flex-direction: ${ presetThreeStyles && presetThreeStyles.buttonIconPosition };
				}				
			
			`;
			break;
		case 'style-4':
			break;
		default:
			presetStyles = '';
	}
	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${ uniqueId }{
			${ iconAlignmentDesktop }
		}
		.${ uniqueId } .zolo-block-title{
			${ textAlignmentDesktop }
			${ titleMarginDesktop ? titleMarginDesktop : '0 0 12px 0' }
			color: ${ textColor ? textColor : '' };
		}
		.${ uniqueId } .zolo-block-title:hover{
			color: ${ textHoverColor ? textHoverColor : '' };
		}
		.${ uniqueId } .zolo-block-desc{
			${ descAlignmentDesktop }
			color: ${ descColor ? descColor : '#87878a' };
		}
		.${ uniqueId } .zolo-block-desc:hover{
			color: ${ descHoverColor ? descHoverColor : '' };
		}
		.${ uniqueId } .zolo-block-icon-wrap  {			
			${ iconSize }
			${ iconHeight }
			${ iconSpacing }
			${ borderStyles }
			${ iconBorderRadiusDesktop }
			${ iconPaddingDesktop }
			${ iconMarginDesktop }
			background: ${ iconBackgroundColor ? iconBackgroundColor : '' };
			color: ${ iconColor ? iconColor : '' };			
		}
		.${ uniqueId } .zolo-block-icon-wrap span:hover{			
			background: ${ iconBackgroundHoverColor ? iconBackgroundHoverColor : '' };
			color: ${ iconHoverColor ? iconHoverColor : '' };
		}
		.${ uniqueId } .zolo-content {			
			${ gap }
			${ deskAlign }
			color: ${ textColor ? textColor : 'inherit' };
		}
		.${ uniqueId } .zolo-content:hover {
			color: ${ textHoverColor ? textHoverColor : 'inherit' };
		}
		
		.${ uniqueId } .zolo-box-button span{
			${ buttonIconSize }			
			${ buttonIconHeight }			
			${ buttonIconWidth }			
		}
		.${ uniqueId } .zolo-box-button {			
			${ gap }
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
		.${ uniqueId }{
			${ iconAlignmentTab }
		}
		.${ uniqueId } .zolo-block-title{
			${ textAlignmentTab }
			${ titleMarginTab }
		}		
		.${ uniqueId } .zolo-block-desc{
			${ descAlignmentTab }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesTab }
			${ gapTab }
			${ tabAlign }
		}
		.${ uniqueId } .zolo-block-icon-wrap span {
			${ iconSizeTab }
			${ iconHeightTab }
			${ iconSpacingTab }
			${ borderStylesTab }
			${ iconBorderRadiusTab }
			${ iconPaddingTab }
			${ iconMarginTab }
			background: ${ iconBackgroundColor ? iconBackgroundColor : '' };
			color: ${ iconColor ? iconColor : '' };	
		}
		.${ uniqueId } .zolo-box-button {
			${ gapTab }
		}
		${ presetStyles }
	`;

	const mobileAllStyle = `
		.${ uniqueId }{
			${ iconAlignmentMob }
		}
		.${ uniqueId } .zolo-block-title{
			${ textAlignmentMob }
			${ titleMarginMob }
		}		
		.${ uniqueId } .zolo-block-desc{
			${ descAlignmentMob }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesMob }
			${ gapMob }
			${ mobAlign }
		}
		.${ uniqueId } .zolo-block-icon-wrap span {
			${ iconSizeMob }
			${ iconHeightMob }
			${ iconSpacingMob }
			${ borderStylesMob }
			${ iconBorderRadiusMob }
			${ iconPaddingMob }
			${ iconMarginMob }
		}
		.${ uniqueId } .zolo-box-button {
			${ gapMob }
		}
		${ presetStyles }
  	`;

	const allStyle = `
		${ desktopAllStyle }
		@media all and (max-width: 1024px) {
			${ tabletAllStyle }
		}
		@media all and (max-width: 767px) {
			${ mobileAllStyle }
		}
	`;

	// Set All Style in "blockStyle" Attribute
	useEffect( () => {
		const styles = {
			desktop: desktopAllStyle,
			tablet: tabletAllStyle,
			mobile: mobileAllStyle,
		};
		if ( JSON.stringify( blockStyle ) != JSON.stringify( styles ) ) {
			setAttributes( { blockStyle: styles } );
		}
	}, [ attributes ] );

	return (
		<>
			{ isSelected && (
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }
			<BlockControls>
				<ToolbarGroup>
					<Dropdown
						className="my-container-class-name"
						contentClassName="my-popover-content-classname"
						popoverProps={ { placement: 'bottom-start' } }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								icon="admin-links"
								label={ __( 'Link', 'zolo-blocks' ) }
								onClick={ onToggle }
								aria-expanded={ isOpen }
							/>
						) }
						renderContent={ () => (
							<div className="zolo-dropdown-link">
								<LinkControl
									searchInputPlaceholder="Search here..."
									value={ link }
									settings={ [
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
									] }
									onChange={ ( data ) =>
										setAttributes( { link: data } )
									}
								></LinkControl>
							</div>
						) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<style>{ ` ${ softMinifyCssStrings( allStyle ) }` }</style>
			<div { ...blockProps }>
				<div
					className={ `zolo-block-advanced-icon-box ${ uniqueId } zolo-block-advanced-icon-box-${ preset }` }
				>
					<div className="zolo-block-item">
						<div className={ `zolo-block-icon-wrap` }>
							{ iconType == 'icon' && (
								<DisplayIcon icon={ mainIcon } />
							) }
						</div>

						<div className="zolo-block-body-content">
							<RichText
								className={ `zolo-block-title` }
								tagName={ titleTag }
								value={ iconBoxTitle }
								onChange={ ( text ) =>
									setAttributes( {
										iconBoxTitle: text,
									} )
								}
								placeholder={ __(
									'The Theme Setting',
									'zolo-blocks'
								) }
								allowedFormats={ [] }
							/>

							<RichText
								className={ `zolo-block-desc` }
								tagName="div"
								value={ iconBoxDescription }
								onChange={ ( text ) =>
									setAttributes( {
										iconBoxDescription: text,
									} )
								}
								placeholder={ __(
									'The Theme Setting is a website that provides users with a range of tools to customize their web experience.',
									'zolo-blocks'
								) }
								allowedFormats={ [] }
							/>

							<div className={ `zolo-block-link-btn` }>
								<a className={ `zolo-box-button` }>
									<RichText
										value={ buttonText }
										tagName="p"
										onChange={ ( text ) =>
											setAttributes( {
												buttonText: text,
											} )
										}
										placeholder={ __(
											'Read More',
											'zolo-blocks'
										) }
									/>
									{ showIcon && (
										<DisplayIcon icon={ buttonIcon } />
									) }
								</a>
							</div>
						</div>

						<div className="zolo-block-hover-icon">
							<DisplayIcon icon={ mainIcon } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
