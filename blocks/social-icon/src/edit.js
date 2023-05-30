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
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	BUTTON_ALIGNMENT,
	BUTTON_BORDER,
	COLUMNS_GAP,
	ROW_GAP,
	ICON_SIZE,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	ICON_TEXT_SPACING,
	BUTTON_HEIGHT,
} from './constants';

import Inspector from './inspector';

export default function Edit( props ) {
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

	// alignment
	const {
		desktopAlignStyle: buttonAlignmentDesktop,
		tabAlignStyle: buttonAlignmentTab,
		mobAlignStyle: buttonAlignmentMob,
	} = generateResAlignmentStyle( {
		controlName: BUTTON_ALIGNMENT,
		property: 'text-align',
		attributes,
	} );

	// column gap
	const {
		desktopRangeStyle: colGapDeskstyle,
		tabRangeStyle: colGapTabStyle,
		mobRangeStyle: colGapMobStyle,
	} = generateResRangeStyle( {
		controlName: COLUMNS_GAP,
		property: 'column-gap',
		attributes,
	} );

	// row gap
	const {
		desktopRangeStyle: rowGapDeskstyle,
		tabRangeStyle: rowGapTabStyle,
		mobRangeStyle: rowGapMobStyle,
	} = generateResRangeStyle( {
		controlName: ROW_GAP,
		property: 'row-gap',
		attributes,
	} );

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
	} = generateBorderStyle( {
		controlName: BUTTON_BORDER,
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

	// generate button size
	const {
		desktopRangeStyle: buttonSize,
		tabRangeStyle: buttonSizeTab,
		mobRangeStyle: buttonSizeMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_SIZE,
		property: 'font-size',
		attributes,
	} );

	// generate button height
	const {
		desktopRangeStyle: buttonHeight,
		tabRangeStyle: buttonHeightTab,
		mobRangeStyle: buttonHeightMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_HEIGHT,
		property: 'height',
		attributes,
	} );

	// generate button size
	const {
		desktopRangeStyle: buttonIconSize,
		tabRangeStyle: buttonIconSizeTab,
		mobRangeStyle: buttonIconSizeMob,
	} = generateResRangeStyle( {
		controlName: BUTTON_ICON_SIZE,
		property: 'font-size',
		attributes,
	} );

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${ uniqueId }{
			${ buttonAlignmentDesktop }
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
		.${ uniqueId } .zolo-button-icon {
			${ iconSize }
		}
		.${ uniqueId }.zolo-advanced-social-share {
			${ colGapDeskstyle }
			${ rowGapDeskstyle }
		}				 
		.${ uniqueId }.zolo-advanced-social-preset-1,.zolo-advanced-social-preset-3,.zolo-advanced-social-preset-4 {
			grid-template-columns:repeat(${ socialProfileColumns }, 1fr);
		}				 
		.${ uniqueId } .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${ buttonSize }
		}		
		.${ uniqueId } .zolo-social-icon, .zolo-social-icon .dashicon.dashicons {
			${ buttonIconSize }
		}		
		.${ uniqueId } .zolo-social-item {
			${ buttonHeight }
		}		
		${
			socialColor === 'custom'
				? `.zolo-advanced-social-share.zolo-advanced-social-preset-1.${ uniqueId }.social-icon .zolo-social-item{
					color:${ socialTextColor };
					background:${ socialBgColor };
				}`
				: ' '
		}
		${
			socialColor === 'custom'
				? `.zolo-advanced-social-share.zolo-advanced-social-preset-1.${ uniqueId }.social-icon .zolo-social-item:hover{
					color:${ socialTextHoverColor };
					background:${ socialBgHoverColor };
				}`
				: ' '
		}
		
		
  	`;
	const tabletAllStyle = `
		.${ uniqueId }{
			${ buttonAlignmentTab }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesTab }
			${ gapTab }
			${ tabAlign }
		}
		.${ uniqueId } .zolo-button-icon {
			${ iconSizeTab }
		}
		.${ uniqueId } .zolo-advanced-social-share {
			${ colGapTabStyle }
			${ rowGapTabStyle }
		}						 
		.${ uniqueId } .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${ buttonSizeTab }
		}				
		.${ uniqueId } .zolo-social-icon, .zolo-social-icon .dashicon.dashicons {
			${ buttonIconSizeTab }
		}				
		.${ uniqueId } .zolo-social-item {
			${ buttonHeightTab }
		}
	`;

	const mobileAllStyle = `
		.${ uniqueId }{
			${ buttonAlignmentMob }
		}
		.${ uniqueId } .zolo-content {
			${ borderStylesMob }
			${ gapMob }
			${ mobAlign }
		}
		.${ uniqueId } .zolo-button-icon {
			${ iconSizeMob }
		}		
		.${ uniqueId } .zolo-advanced-social-share {
			${ colGapMobStyle }
			${ rowGapMobStyle }
		}							 
		.${ uniqueId } .zolo-advanced-social-preset-4.social-icon .zolo-social-item, .zolo-advanced-social-preset-3.social-icon .zolo-social-item, .zolo-advanced-social-preset-1.social-icon .zolo-social-item {
			${ buttonSizeMob }
		}
						
		.${ uniqueId } .zolo-social-icon, .zolo-social-icon .dashicon.dashicons {
			${ buttonIconSizeMob }
		}
		.${ uniqueId } .zolo-social-item {
			${ buttonHeightMob }
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
					class={ `zolo-advanced-social-share zolo-advanced-social-${ preset } ${ uniqueId } ${ BLOCK_PREFIX } ` }
				>
					{ socialProfiles &&
						socialProfiles.map( ( profile, index ) => {
							let socialName = Object.keys( profile.icon )[ 0 ];
							return (
								<a
									href={ profile.link }
									key={ index }
									rel={
										socialProfilesLinkTarget && 'noreferer'
									}
									className={ `zolo-social-item zolo-${ socialName }` }
								>
									{ ( socialText == 'icon' ||
										socialText == 'icontext' ) && (
										<span className="zolo-social-icon">
											<DisplayIcon
												icon={ profile.icon }
											/>
										</span>
									) }
									{ socialText != 'icon' && (
										<span className="zolo-social-text">
											{ profile.text }
										</span>
									) }
								</a>
							);
						} ) }
				</div>
			</div>
		</>
	);
}
