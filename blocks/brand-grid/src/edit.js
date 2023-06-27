/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { handleUniqueId, softMinifyCssStrings } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';

import Inspector from './inspector';

// import brand-child
import '../../brand-child';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
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
			
		}
		${ presetStyles }		
  	`;

	const tabletAllStyle = `
		.${ uniqueId }{
			
		}
		${ presetStyles }
	`;

	const mobileAllStyle = `
		.${ uniqueId }{
			
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

	/**
	 * Custom Append Button for InnerBlocks
	 */
	const childBlocks = wp.data
		.select( 'core/block-editor' )
		.getBlocks( clientId );
	const appendBlock = () => {
		const newBlock = wp.blocks.createBlock( 'zolo/brand-child', {} );
		wp.data
			.dispatch( 'core/block-editor' )
			.insertBlock( newBlock, childBlocks.length, clientId );
	};

	return (
		<>
			{ isSelected && (
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }
			<style>{ ` ${ softMinifyCssStrings( allStyle ) }` }</style>
			<div { ...blockProps }>
				<div
					className={ `zb-brand-grid-back zb-brand-style-1 ${ uniqueId } ${ preset }` }
				>
					<InnerBlocks
						allowedBlocks={ [ 'zolo/brand-child' ] }
						template={ [ [ 'zolo/brand-child', {} ] ] }
						renderAppender={ false }
					/>
					<div className="appender-btn">
						<Button
							className="components-button"
							label={ __( 'Add Brand', 'zolo-blocks' ) }
							icon="insert"
							variant="primary"
							onClick={ () => appendBlock() }
						>
							{ __( 'Add Brand', 'zolo-blocks' ) }
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
