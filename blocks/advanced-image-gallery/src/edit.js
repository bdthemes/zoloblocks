/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	BlockControls,
	MediaUpload,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import {
	ToolbarButton,
	ToolbarGroup,
	Dropdown,
	Button,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
	handleUniqueId,
	softMinifyCssStrings,
	generateNormalBGControlStyles,
	generateBorderStyle,
	generateResCounterStyle,
	generateResRangeStyle,
	generateDimensionStyle,
	generateBoxShadowStyles,
	generateTypographyStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BORDER,
	CONTAINER_HOVER_BORDER,
	IMAGE_BORDER,
	IMAGE_HOVER_BORDER,
	CONTAINER_HOVER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	IMAGE_BORDER_RADIUS,
	IMAGE_BOX_SHADOW,
	IMAGE_BACKGROUND,
	IMAGE_HOVER_BORDER_RADIUS,
	IMAGE_HOVER_BOX_SHADOW,
	IMAGE_HOVER_BACKGROUND,
	IMAGE_PADDING,
	IMAGE_MARGIN,
	HEADING_BORDER,
	HEADING_BACKGROUND,
	HEADING_BORDER_RADIUS,
	HEADING_BOX_SHADOW,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

import Inspector from './inspector';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
		advancedGallery,
		headingColor,
		presetOneStyles,
		presetTwoStyles,
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

	// block props
	const blockProps = useBlockProps( {
		className: classnames( className, `` ),
	} );

	// column count
	const {
		desktopRangeStyle: columnCountDeskstyle,
		tabRangeStyle: columnCountTabStyle,
		mobRangeStyle: columnCountMobStyle,
	} = generateResCounterStyle( {
		controlName: COLUMN_COUNT,
		attributes,
		noProperty: true,
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

	// Container Styles
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
		backgroundStylesDesktop: containerHoverDeskBGStyle,
		backgroundStylesTab: containerHoverTabBGStyle,
		backgroundStylesMobile: containerHoverMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: CONTAINER_HOVER_BACKGROUND,
		attributes,
		noMainBGImg: false,
	} );

	const {
		desktopBorderStyle: containerBorderDesk,
		tabBorderStyle: containerBorderTab,
		mobBorderStyle: containerBorderMob,
	} = generateBorderStyle( {
		controlName: CONTAINER_BORDER,
		attributes,
	} );

	const {
		desktopBorderStyle: containerHoverBorderDesk,
		tabBorderStyle: containerHoverBorderTab,
		mobBorderStyle: containerHoverBorderMob,
	} = generateBorderStyle( {
		controlName: CONTAINER_HOVER_BORDER,
		attributes,
	} );

	const {
		dimensionStylesDesktop: containerBorderRadiusDesk,
		dimensionStylesTab: containerBorderRadiusTab,
		dimensionStylesMobile: containerBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: CONTAINER_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	const {
		dimensionStylesDesktop: containerHoverBorderRadiusDesk,
		dimensionStylesTab: containerHoverBorderRadiusTab,
		dimensionStylesMobile: containerHoverBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: CONTAINER_HOVER_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: CONTAINER_BOX_SHADOW,
	} );

	const { boxShadowStyle: containerBoxShadowHover } = generateBoxShadowStyles(
		{
			attributes,
			controlName: CONTAINER_HOVER_BOX_SHADOW,
		}
	);

	// Image

	const {
		desktopBorderStyle: imageBorderDesk,
		tabBorderStyle: imageBorderTab,
		mobBorderStyle: imageBorderMob,
	} = generateBorderStyle( {
		controlName: IMAGE_BORDER,
		attributes,
	} );

	const {
		desktopBorderStyle: imageHoverBorderDesk,
		tabBorderStyle: imageHoverBorderTab,
		mobBorderStyle: imageHoverBorderMob,
	} = generateBorderStyle( {
		controlName: IMAGE_HOVER_BORDER,
		attributes,
	} );

	const {
		backgroundStylesDesktop: imageDeskBGStyle,
		backgroundStylesTab: imageTabBGStyle,
		backgroundStylesMobile: imageMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: IMAGE_BACKGROUND,
		attributes,
		noMainBGImg: false,
	} );

	const {
		backgroundStylesDesktop: imageHoverDeskBGStyle,
		backgroundStylesTab: imageHoverTabBGStyle,
		backgroundStylesMobile: imageHoverMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: IMAGE_HOVER_BACKGROUND,
		attributes,
		noMainBGImg: false,
	} );

	const {
		dimensionStylesDesktop: imageBorderRadiusDesk,
		dimensionStylesTab: imageBorderRadiusTab,
		dimensionStylesMobile: imageBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: IMAGE_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	const {
		dimensionStylesDesktop: imageHoverBorderRadiusDesk,
		dimensionStylesTab: imageHoverBorderRadiusTab,
		dimensionStylesMobile: imageHoverBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: IMAGE_HOVER_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	const {
		dimensionStylesDesktop: imagePaddingDesk,
		dimensionStylesTab: imagePaddingTab,
		dimensionStylesMobile: imagePaddingMob,
	} = generateDimensionStyle( {
		controlName: IMAGE_PADDING,
		styleFor: 'padding',
		attributes,
	} );

	const {
		dimensionStylesDesktop: imageMarginDesk,
		dimensionStylesTab: imageMarginTab,
		dimensionStylesMobile: imageMarginMob,
	} = generateDimensionStyle( {
		controlName: IMAGE_MARGIN,
		styleFor: 'margin',
		attributes,
	} );

	const { boxShadowStyle: imageBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: IMAGE_BOX_SHADOW,
	} );

	const { boxShadowStyle: imageHoverBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: IMAGE_HOVER_BOX_SHADOW,
	} );

	// Heading

	const {
		desktopBorderStyle: headingBorderDesk,
		tabBorderStyle: headingBorderTab,
		mobBorderStyle: headingBorderMob,
	} = generateBorderStyle( {
		controlName: HEADING_BORDER,
		attributes,
	} );

	const {
		backgroundStylesDesktop: headingDeskBGStyle,
		backgroundStylesTab: headingTabBGStyle,
		backgroundStylesMobile: headingMobBGStyle,
	} = generateNormalBGControlStyles( {
		controlName: HEADING_BACKGROUND,
		attributes,
		noMainBGImg: false,
	} );

	const {
		dimensionStylesDesktop: headingBorderRadiusDesk,
		dimensionStylesTab: headingBorderRadiusTab,
		dimensionStylesMobile: headingBorderRadiusMob,
	} = generateDimensionStyle( {
		controlName: HEADING_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	} );

	const {
		typoStylesDesktop: headingTypoDesk,
		typoStylesTab: headingTypoTab,
		typoStylesMobile: headingTypoMob,
	} = generateTypographyStyles( {
		prefixConstant: HEADING_TYPOGRAPHY,
		attributes,
	} );

	const { boxShadowStyle: headingBoxShadow } = generateBoxShadowStyles( {
		attributes,
		controlName: HEADING_BOX_SHADOW,
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
			`;
			break;
		case 'style-2':
			presetStyles = `
				.zolo-block-icon-wrap{
					align-items: ${ presetTwoStyles && presetTwoStyles.iconPosition };
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
		.${ uniqueId }.zolo-img-gallery-${ preset } {
			${ containerDeskBGStyle }
			${ containerBorderDesk }
			${ containerBorderRadiusDesk }
			${ containerBoxShadow }
			overflow:hidden;
		}	
		.${ uniqueId }.zolo-img-gallery-${ preset }:hover {
			${ containerHoverDeskBGStyle }
			${ containerHoverBorderDesk }
			${ containerHoverBorderRadiusDesk }
			${ containerBoxShadowHover }
		}
		.${ uniqueId }.zolo-img-gallery-${ preset }.zolo-image-gallery {
			grid-template-columns:repeat(${ columnCountDeskstyle }, 1fr);
			${ colGapDeskstyle }
			${ rowGapDeskstyle }
		}
		.${ uniqueId } .zolo-image-wrap {
			${ imageDeskBGStyle }
			${ imageBorderDesk }
			${ imageBorderRadiusDesk }
			${ imageBoxShadow }
			${ imageMarginDesk }
			${ imagePaddingDesk }
		}		
		.${ uniqueId } .zolo-image-wrap:hover {
			${ imageHoverDeskBGStyle }
			${ imageHoverBorderDesk }
			${ imageHoverBorderRadiusDesk }
			${ imageHoverBoxShadow }
		}		
		.${ uniqueId } .zolo-title {
			color: ${ headingColor ? headingColor : '' };
			${ headingDeskBGStyle }
			${ headingBorderDesk }
			${ headingBorderRadiusDesk }
			${ headingBoxShadow }
			${ headingTypoDesk }			
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
	.${ uniqueId }.zolo-img-gallery-${ preset } {
		${ containerTabBGStyle }
		${ containerBorderTab }
		${ containerBorderRadiusTab }
	}		
	.${ uniqueId }.zolo-img-gallery-${ preset }:hover {
		${ containerHoverTabBGStyle }
		${ containerHoverBorderTab }
		${ containerHoverBorderRadiusTab }
	}
	.${ uniqueId }.zolo-img-gallery-${ preset }.zolo-image-gallery {
		grid-template-columns:repeat(${ columnCountTabStyle }, 1fr);
		${ colGapTabStyle }
		${ rowGapTabStyle }
	}
	.${ uniqueId } .zolo-image-wrap {
		${ imageTabBGStyle }
		${ imageBorderTab }
		${ imageBorderRadiusTab }
		${ imageMarginTab }
		${ imagePaddingTab }
	}
	.${ uniqueId } .zolo-image-wrap:hover {
		${ imageHoverTabBGStyle }
		${ imageHoverBorderTab }
		${ imageHoverBorderRadiusTab }
	}			
	.${ uniqueId } .zolo-title {
		${ headingTabBGStyle }
		${ headingBorderTab }
		${ headingBorderRadiusTab }
		${ headingTypoTab }
	}
	${ presetStyles }
	`;

	const mobileAllStyle = `		
	.${ uniqueId }.zolo-img-gallery-${ preset }{
		${ containerMobBGStyle }
		${ containerBorderMob }
		${ containerBorderRadiusMob }
	}		
	.${ uniqueId }.zolo-img-gallery-${ preset }:hover {
		${ containerHoverMobBGStyle }
		${ containerHoverBorderMob }
		${ containerHoverBorderRadiusMob }
	}
	.${ uniqueId }.zolo-img-gallery-${ preset }.zolo-image-gallery {
		grid-template-columns:repeat(${ columnCountMobStyle }, 1fr);
		${ colGapMobStyle }
		${ rowGapMobStyle }
	}
	.${ uniqueId } .zolo-image-wrap {
		${ imageMobBGStyle }
		${ imageBorderMob }
		${ imageBorderRadiusMob }
		${ imageMarginMob }
		${ imagePaddingMob }
	}
	.${ uniqueId } .zolo-image-wrap:hover {
		${ imageHoverMobBGStyle }
		${ imageHoverBorderMob }
		${ imageHoverBorderRadiusMob }
	}			
	.${ uniqueId } .zolo-title {
		${ headingMobBGStyle }
		${ headingBorderMob }
		${ headingBorderRadiusMob }
		${ headingTypoMob }
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
				{ advancedGallery && (
					<Fragment>
						<ToolbarGroup>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										advancedGallery: media,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								multiple={ true }
								gallery={ true }
								value={ advancedGallery.map(
									( image ) => image.id
								) }
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
										advancedGallery: null,
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
					className={ `${
						advancedGallery
							? 'zolo-image-gallery'
							: 'zolo-single-image'
					} ${ uniqueId } zolo-img-gallery-${ preset }` }
				>
					{  }
					{ advancedGallery ? (
						advancedGallery &&
						advancedGallery.map( ( image, index ) => {
							return (
								<div className="zolo-item" key={ index }>
									<div className="zolo-image-wrap">
										<img src={ image.url } alt="" />
									</div>
									<a href="#" className="zolo-icon-wrap">
										<span className="zolo-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-plus-lg"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
												></path>
											</svg>
										</span>
										<span className="zolo-icon-text">
											zoom
										</span>
									</a>
									<div className="zolo-title">
										{ image.caption }
									</div>
								</div>
							);
						} )
					) : (
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									advancedGallery: media,
								} );
							} }
							multiple={ true }
							gallery={ true }
							addToGallery={ true }
							allowedTypes={ [ 'image' ] }
							value={
								advancedGallery &&
								advancedGallery.map( ( image ) => image.id )
							}
							render={ ( { open } ) => (
								<Button
									className="media-upload"
									onClick={ open }
								>
									<svg
										width="24"
										height="24"
										xmlns="http://www.w3.org/2000/svg"
										fillRule="evenodd"
										clipRule="evenodd"
									>
										<path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
									</svg>
									{ __( ' Upload Photo', 'zolo-blocks' ) }
								</Button>
							) }
						/>
					) }
				</div>
			</div>
		</>
	);
}
