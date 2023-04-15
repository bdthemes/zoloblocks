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
	ICON_BOX_ALIGNMENT,
	TITLE_ALIGNMENT,
	DESC_ALIGNMENT,
	ICON_BORDER,
	ICON_SIZE,
	ICON_TEXT_SPACING,
} from './constants';

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
		textColor,
		textHoverColor,
		descColor,
		descHoverColor,
		iconPosition,
		iconColor,
		iconHoverColor,
		topIconPosition,
		buttonPosition,
		iconType,
		iconBoxTitle,
		iconBoxDescription,
		buttonText,
		buttonLink,
		globalLink,
		presetOneStyles,
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
		property: 'width',
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

	/**
	 * Presets Based Styles
	 */
	let presetStyles;
	switch ( preset ) {
		case 'style-1':
			presetStyles = `
				.${ uniqueId }
				.zolo-block-icon-wrap{
					justify-content: ${ presetOneStyles && presetOneStyles.iconPosition };
				}				
			
			`;
			break;
		case 'style-2':
			break;
		case 'style-3':
			presetStyles = `
				.${ uniqueId }
				.zolo-block-icon-wrap{
					justify-content: ${ presetThreeStyles && presetThreeStyles.iconPosition };
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
		.${ uniqueId } .zolo-block-icon-wrap svg{
			fill: ${ iconColor ? iconColor : '' };
		}
		.${ uniqueId } .zolo-block-icon-wrap svg:hover{
			fill: ${ iconHoverColor ? iconHoverColor : '' };
		}
		.${ uniqueId } .zolo-content {
			${ borderStyles }
			${ gap }
			${ deskAlign }
			color: ${ textColor ? textColor : 'inherit' };
		}
		.${ uniqueId } .zolo-content:hover {
			color: ${ textHoverColor ? textHoverColor : 'inherit' };
		}
		.${ uniqueId } .zolo-icon-icon {
			${ iconSize }
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
		.${ uniqueId }{
			${ iconAlignmentTab }
		}
		.${ uniqueId } .zolo-block-title{
			${ textAlignmentTab }
		}		
		.${ uniqueId } .zolo-block-desc{
			${ descAlignmentTab }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesTab }
			${ gapTab }
			${ tabAlign }
		}
		.${ uniqueId } .zolo-icon-icon {
			${ iconSizeTab }
		}
	`;

	const mobileAllStyle = `
		.${ uniqueId }{
			${ iconAlignmentMob }
		}
		.${ uniqueId } .zolo-block-title{
			${ textAlignmentMob }
		}		
		.${ uniqueId } .zolo-block-desc{
			${ descAlignmentMob }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesMob }
			${ gapMob }
			${ mobAlign }
		}
		.${ uniqueId } .zolo-icon-icon {
			${ iconSizeMob }
		}
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
					className={ `zolo-block-advanced-icon-box ${ uniqueId } zolo-block-advanced-icon-box-style-1 ${ preset }` }
				>
					{ /* { globalLink == true && (
						<a href="#">
					) } */ }

					<div className="zolo-block-item">
						<div className={ `zolo-block-icon-wrap` }>
							{ iconType == 'icon' && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									className="bi bi-gear"
									viewBox="0 0 16 16"
								>
									<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
									<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
								</svg>
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

							<div
								className={ `zolo-block-link-btn ${ buttonPosition }` }
							>
								<a
									className={ `zolo-box-button ${ iconPosition }` }
									href={ buttonLink }
								>
									<RichText
										value={ buttonText }
										onChange={ ( text ) =>
											setAttributes( {
												buttonText: text,
											} )
										}
										placeholder={ __(
											'Read More',
											'zolo-blocks'
										) }
										allowedFormats={ [] }
									/>
									{ showIcon && (
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
									) }
								</a>
							</div>
						</div>

						<div className="zolo-block-hover-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-gear"
								viewBox="0 0 16 16"
							>
								<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
								<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
							</svg>
						</div>
					</div>
					{ /* { globalLink == true && (</a>)
					} */ }
				</div>
			</div>
		</>
	);
}
