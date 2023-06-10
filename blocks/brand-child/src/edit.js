/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	MediaUpload,
	MediaPlaceholder,
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
	generateBoxShadowStyles,
	generateTextShadowStyles,
	generateTextStrokeStyles,
	DisplayIcon,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	CONTENT_ALIGNMENT,
	ICON_BOX_ALIGNMENT,
	TITLE_ALIGNMENT,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	DESCRIPTION_MARGIN,
	DESC_ALIGNMENT,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_SIZE,
	ICON_PADDING,
	ICON_MARGIN,
	BUTTON_ICON_SIZE,
	BUTTON_BORDER,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	BUTTON_BOX_SHADOW,
	BUTTON_HOVER_BOX_SHADOW,
	ICON_SPACING,
	ICON_TEXT_SPACING,
	BUTTON_BORDER_RADIUS,
	BUTTON_MARGIN,
	BUTTON_PADDING,
} from './constants';

import {
	TITLE_TYPOGRAPHY,
	DESCRIPTION_TYPOGRAPHY,
	BUTTON_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import Inspector from './inspector';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		brandPhoto,
		brandName,
		brandDetailPageLink,
		brandAnchorText,
		showBrandName,
		showWebsiteLink,
		link,
		blockStyle,
		textColor,
		textHoverColor,
		descColor,
		descHoverColor,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		iconTypeImage,
		btnColor,
		btnHoverColor,
		btnBgColor,
		btnBgHoverColor,
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

	// content align
	const {
		desktopAlignStyle: brandContentDeskAlignStyle,
		tabAlignStyle: brandContentTabAlignStyle,
		mobAlignStyle: brandContentMobAlignStyle,
	} = generateResAlignmentStyle( {
		controlName: CONTENT_ALIGNMENT,
		property: 'align-items',
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

	// Generate Icon Box Shadow
	const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: ICON_BOX_SHADOW,
	} );

	// Generate Icon Hover Box Shadow
	const { boxShadowStyle: iconHoverBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: ICON_HOVER_BOX_SHADOW,
	} );

	// Generate Button Box Shadow
	const { boxShadowStyle: buttonBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: BUTTON_BOX_SHADOW,
	} );

	// Generate Icon Hover Box Shadow
	const { boxShadowStyle: buttonHoverBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: BUTTON_HOVER_BOX_SHADOW,
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
	// Generate Button Padding
	const {
		dimensionStylesDesktop: buttonPaddingDesktop,
		dimensionStylesTab: buttonPaddingTab,
		dimensionStylesMobile: buttonPaddingMob,
	} = generateDimensionStyle( {
		controlName: BUTTON_PADDING,
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

	// Generate Button Margin
	const {
		dimensionStylesDesktop: buttonMarginDesktop,
		dimensionStylesTab: buttonMarginTab,
		dimensionStylesMobile: buttonMarginMob,
	} = generateDimensionStyle( {
		controlName: BUTTON_MARGIN,
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

	// Generate Title Text Shadow
	const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles(
		{
			attributes,
			controlName: TITLE_TEXT_SHADOW,
		}
	);

	// Generate Title Text Stroke
	const {
		desktopTextStrokeStyle: titleTextStrokeStyle,
		tabTextStrokeStyle: tabTitleTextStrokeStyle,
		mobTextStrokeStyle: mobTitleTextStrokeStyle,
	} = generateTextStrokeStyles( {
		attributes,
		controlName: TITLE_TEXT_STROKE,
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

	// descrtiption typography
	const {
		typoStylesDesktop: descTypoDesktop,
		typoStylesTab: descTypoTab,
		typoStylesMobile: descTypoMobile,
	} = generateTypographyStyles( {
		prefixConstant: DESCRIPTION_TYPOGRAPHY,
		defaultFontSize: 16,
		attributes,
	} );

	// button typography
	const {
		typoStylesDesktop: btnTypoDesktop,
		typoStylesTab: btnTypoTab,
		typoStylesMobile: btnTypoMobile,
	} = generateTypographyStyles( {
		prefixConstant: BUTTON_TYPOGRAPHY,
		defaultFontSize: 14,
		attributes,
	} );

	// Generate Title Margin
	const {
		dimensionStylesDesktop: descMarginDesktop,
		dimensionStylesTab: descMarginTab,
		dimensionStylesMobile: descMarginMob,
	} = generateDimensionStyle( {
		controlName: DESCRIPTION_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	/**
	 * Generate Title Alignment className
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
	 * Generate Description Alignment className
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
	 * Generate Icon Alignment className
	 */

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

	// generate button style
	const {
		desktopBorderStyle: buttonBorderStyles,
		tabBorderStyle: buttonBorderStylesTab,
		mobBorderStyle: buttonBorderStylesMob,
	} = generateBorderStyle( {
		controlName: BUTTON_BORDER,
		attributes,
	} );

	// generate button border radius
	const {
		dimensionStylesDesktop: buttonBorderRadiusDesktop,
		dimensionStylesTab: buttonBorderRadiusTab,
		dimensionStylesMobile: buttonBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: BUTTON_BORDER_RADIUS,
		styleFor: 'border-radius',
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
		.${ uniqueId } .wp-block-zolo-brand-child .zb-brand-style-1 .zb-brand-content, .wp-block-zolo-brand-child .zb-brand-style-2 .zb-brand-content{
			${ brandContentDeskAlignStyle }
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
		
		.${ uniqueId } .zolo-block-title{
			${ titleTypoTab }
			${ tabTitleTextStrokeStyle }
			${ textAlignmentTab }
			${ titleMarginTab }
		}	
		${ presetStyles }
	`;

	const mobileAllStyle = `
		
		.${ uniqueId } .zolo-block-title{
			${ titleTypoMobile }
			${ mobTitleTextStrokeStyle }
			${ textAlignmentMob }
			${ titleMarginMob }
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
						className="my-container-className-name"
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
									] }
									onChange={ ( data ) =>
										setAttributes( { link: data } )
									}
								></LinkControl>
							</div>
						) }
					/>
				</ToolbarGroup>
				{ iconTypeImage && (
					<Fragment>
						<ToolbarGroup>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										iconTypeImage: media,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								value={ iconTypeImage && iconTypeImage.id }
								render={ ( { open } ) => (
									<ToolbarButton
										className="components-toolbar__control"
										label={ __(
											'Replace Photo',
											'zolo-blocks'
										) }
										icon="update"
										onClick={ open }
									/>
								) }
							/>
							<ToolbarButton
								className="components-toolbar__control"
								label={ __( 'Remove Photo', 'zolo-blocks' ) }
								icon="trash"
								onClick={ () => {
									setAttributes( {
										iconTypeImage: null,
									} );
								} }
							/>
						</ToolbarGroup>
					</Fragment>
				) }
			</BlockControls>
			<style>{ ` ${ softMinifyCssStrings( allStyle ) }` }</style>
			<div { ...blockProps }>
				<div
					className={ `zb-brand-grid-wrap zb-brand-${ preset } ${ uniqueId }` }
				>
					<div className="zb-brand-item">
						<div className="zb-brand-image">
							{ brandPhoto && (
								<img
									src={ brandPhoto.url }
									alt={ brandPhoto.alt || 'Reviewer' }
									className="zolo-img"
								/>
							) }
						</div>
						<div className="zb-brand-content">
							<div className="zb-brand-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-plus"
									viewBox="0 0 16 16"
								>
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
							</div>
							<div className="zb-brand-inner-content">
								{ showBrandName && (
									<RichText
										className="zb-brand-title"
										value={ brandName }
										onChange={ ( name ) =>
											setAttributes( { brandName: name } )
										}
										placeholder={ __(
											'Brand Name...',
											'zolo-blocks'
										) }
									/>
								) }

								{ showWebsiteLink && (
									<a
										className="zb-brand-link"
										href={
											brandDetailPageLink &&
											brandDetailPageLink.url
										}
										rel={
											brandDetailPageLink &&
											brandDetailPageLink.opensInNewTab &&
											'noreferer'
										}
										target={
											brandDetailPageLink &&
											brandDetailPageLink.opensInNewTab &&
											'_blank'
										}
									>
										{
											<RichText
												value={ brandAnchorText }
												onChange={ ( name ) =>
													setAttributes( {
														brandAnchorText: name,
													} )
												}
												placeholder={ __(
													'www.zalando.com',
													'zolo-blocks'
												) }
											/>
										}
									</a>
								) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
