/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	MediaUpload,
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
	generateDimensionStyle,
	generateTypographyStyles,
	generateTextShadowStyles,
	generateTextStrokeStyles,
	generateBoxShadowStyles,
	generateNormalBGControlStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	CONTENT_ALIGNMENT,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	LINK_MARGIN,
	LINK_TEXT_SHADOW,
	LINK_TEXT_STROKE,
	BRAND_PHOTO_BORDER_RADIUS,
	BRAND_PHOTO_BOX_SHADOW,
	BRAND_PHOTO_BG,
	BRAND_PHOTO_PADDING,
	BRAND_PHOTO_MARGIN,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTAINER_BACKGROUND,
} from './constants';

import {
	TITLE_TYPOGRAPHY,
	LINK_TYPOGRAPHY,
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
		textColor,
		linkColor,
		linkHoverColor,
		blockStyle,
		iconTypeImage,
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

	// Content Align
	const {
		desktopAlignStyle: brandContentDeskAlignStyle,
		tabAlignStyle: brandContentTabAlignStyle,
		mobAlignStyle: brandContentMobAlignStyle,
	} = generateResAlignmentStyle( {
		controlName: CONTENT_ALIGNMENT,
		property: 'align-items',
		attributes,
	} );

	// Container Border Radius
	const {
		dimensionStylesDesktop: containerDeskBorderRadius,
		dimensionStylesTab: containerTabBorderRadius,
		dimensionStylesMobile: containerMobBorderRadius,
	} = generateDimensionStyle( {
		controlName: CONTAINER_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	// Container Box Shadow

	const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: CONTAINER_BOX_SHADOW,
	} );

	// Container Background

	const {
		backgroundStylesDesktop: containerDeskBGStyle,
		backgroundStylesTab: containerTabBGStyle,
		backgroundStylesMobile: containerMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: CONTAINER_BACKGROUND,
		attributes,
		noMainBGImg: false,
	} );

	const {
		backgroundStylesDesktop: brandPhotoDeskBGStyle,
		backgroundStylesTab: brandPhotoTabBGStyle,
		backgroundStylesMobile: brandPhotoMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: BRAND_PHOTO_BG,
		attributes,
		noMainBGImg: false,
	} );

	// Photo Border Radius
	const {
		dimensionStylesDesktop: brandPhotoBorderRadiusDesk,
		dimensionStylesTab: brandPhotoBorderRadiusTab,
		dimensionStylesMobile: brandPhotoBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: BRAND_PHOTO_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	// Photo Box Shadow

	const { boxShadowStyle: brandPhotoBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: BRAND_PHOTO_BOX_SHADOW,
	} );

	// Brand Photo Padding
	const {
		dimensionStylesDesktop: brandPhotoPaddingDesk,
		dimensionStylesTab: brandPhotoPaddingTab,
		dimensionStylesMobile: brandPhotoPaddingMob,
	} = generateDimensionStyle( {
		controlName: BRAND_PHOTO_PADDING,
		styleFor: 'padding',
		attributes,
	} );

	// Brand Photo Margin
	const {
		dimensionStylesDesktop: brandPhotoMaringDesk,
		dimensionStylesTab: brandPhotoMarginTab,
		dimensionStylesMobile: brandPhotoMarginMob,
	} = generateDimensionStyle( {
		controlName: BRAND_PHOTO_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	// Title Typography
	const {
		typoStylesDesktop: titleTypoDesk,
		typoStylesTab: titleTypoTab,
		typoStylesMobile: titleTypoMob,
	} = generateTypographyStyles( {
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 48,
		attributes,
	} );

	// Link Typography
	const {
		typoStylesDesktop: linkTypoDesk,
		typoStylesTab: linkTypoTab,
		typoStylesMobile: linkTypoMob,
	} = generateTypographyStyles( {
		prefixConstant: LINK_TYPOGRAPHY,
		defaultFontSize: 16,
		attributes,
	} );

	// Title Margin
	const {
		dimensionStylesDesktop: titleMarginDesk,
		dimensionStylesTab: titleMarginTab,
		dimensionStylesMobile: titleMarginMob,
	} = generateDimensionStyle( {
		controlName: TITLE_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	// Link Margin
	const {
		dimensionStylesDesktop: linkMarginDesk,
		dimensionStylesTab: linkMarginTab,
		dimensionStylesMobile: linkMarginMob,
	} = generateDimensionStyle( {
		controlName: LINK_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	// Title Text Shadow
	const { textShadowStyle: titleTextShadow } = generateTextShadowStyles( {
		attributes,
		controlName: TITLE_TEXT_SHADOW,
	} );

	// Title Text Stroke
	const {
		desktopTextStrokeStyle: titleTextStrokeDesk,
		tabTextStrokeStyle: titleTextStrokeTab,
		mobTextStrokeStyle: titleTextStrokeMob,
	} = generateTextStrokeStyles( {
		attributes,
		controlName: TITLE_TEXT_STROKE,
	} );

	// Link Text Shadow
	const { textShadowStyle: linkTextShadow } = generateTextShadowStyles( {
		attributes,
		controlName: LINK_TEXT_SHADOW,
	} );

	// Link Text Stroke
	const {
		desktopTextStrokeStyle: linkTextStrokeDesk,
		tabTextStrokeStyle: linkTextStrokeTab,
		mobTextStrokeStyle: linkTextStrokeMob,
	} = generateTextStrokeStyles( {
		attributes,
		controlName: LINK_TEXT_STROKE,
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
		.${ uniqueId } .zb-brand-style-1 .zb-brand-content, .zb-brand-style-2 .zb-brand-content{
			${ brandContentDeskAlignStyle }
		}
		.${ uniqueId } .zb-brand-item{
			${ containerDeskBorderRadius }
			${ containerBoxShadow }
			${ containerDeskBGStyle }
		}
		.${ uniqueId } .zb-brand-image{
			${ brandPhotoPaddingDesk }	
		}	
		.${ uniqueId } .zb-brand-image img{
			${ brandPhotoBorderRadiusDesk }
			${ brandPhotoBoxShadow }
			${ brandPhotoDeskBGStyle }			
			${ brandPhotoMaringDesk }		
		}
		
		.${ uniqueId } .zb-brand-title{
			${ titleTypoDesk }
			${ titleMarginDesk }
			${ titleTextShadow }
			${ titleTextStrokeDesk }
			color:${ textColor };
		}
		.${ uniqueId } .zb-brand-link{
			${ linkTypoDesk }
			${ linkMarginDesk }
			${ linkTextShadow }
			${ linkTextStrokeDesk }
			color:${ linkColor };
		}
		.${ uniqueId } .zb-brand-link:hover{
			color:${ linkHoverColor };
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
	.${ uniqueId } .zb-brand-style-1 .zb-brand-content, .zb-brand-style-2 .zb-brand-content{
		${ brandContentTabAlignStyle }
	}
	.${ uniqueId } .zb-brand-item{
		${ containerTabBorderRadius }
		${ containerTabBGStyle }
	}
	.${ uniqueId } .zb-brand-image{
		${ brandPhotoPaddingTab }
	}
	.${ uniqueId } .zb-brand-image img{
		${ brandPhotoBorderRadiusTab }
		${ brandPhotoTabBGStyle }		
		${ brandPhotoMarginTab }		
	}
	.${ uniqueId } .zb-brand-title{
		${ titleTypoTab }
		${ titleMarginTab }
		${ titleTextStrokeTab }
	}
	.${ uniqueId } .zb-brand-link{
		${ linkTypoTab }
		${ linkMarginTab }
		${ linkTextStrokeTab }
	}
		${ presetStyles }
	`;

	const mobileAllStyle = `		
	.${ uniqueId } .zb-brand-style-1 .zb-brand-content, .zb-brand-style-2 .zb-brand-content{
		${ brandContentMobAlignStyle }
	}
	.${ uniqueId } .zb-brand-item{
		${ containerMobBorderRadius }
		${ containerMobBGStyle }
	}
	.${ uniqueId } .zb-brand-image{
		${ brandPhotoPaddingMob }
	}
	.${ uniqueId } .zb-brand-image img{
		${ brandPhotoBorderRadiusMob }
		${ brandPhotoMobBGStyle }		
		${ brandPhotoMarginMob }	
	}
	.${ uniqueId } .zb-brand-title{
		${ titleTypoMob }
		${ titleMarginMob }
		${ titleTextStrokeMob }
	}		
	.${ uniqueId } .zb-brand-link{
		${ linkTypoMob }
		${ linkMarginMob }
		${ linkTextStrokeMob }
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
										onChange={ ( bName ) =>
											setAttributes( {
												brandName: bName,
											} )
										}
										placeholder={ __(
											'Brand Name...',
											'zolo-blocks'
										) }
									/>
								) }

								{ showWebsiteLink && (
									<a
										className="zb-brand-link-editor"
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
												className="zb-brand-link"
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
