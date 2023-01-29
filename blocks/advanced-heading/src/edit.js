//WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

//external dependencies
import classnames from 'classnames';

//internal dependencies
import { handleUniqueId, softMinifyCssStrings } from '../../../src/helpers/helper';
import Inspector from './inspector';

//block constants
import { BLOCK_PREFIX, HEADING_ALIGNMENT, HEADING_BG, HEADING_PADDING, HEADING_WIDTH } from './constants';
import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

//generate style
import { generateBackgroundControlStyles } from '../../../src/helpers/backgroundHelpers';
import { generateDimensionStyle } from '../../../src/helpers/dimension-helper';
import { generateResAlignmentStyle } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeStyle } from '../../../src/helpers/res-range-helper';
import { generateTypographyStyles } from '../../../src/helpers/typoHelpers';

const Edit = (props) => {

	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const { blockId, headingColor } = attributes;

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		handleUniqueId({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			clientId,
		});
	}, []);

	//block wrapper class
	const blockProps = useBlockProps({
		className: classnames(className, `zolo-block-wrapper zolo-${blockId}`),
	});

	//css generate
	const {
		desktopRangeStyle: headingWidthDesktop,
		tabRangeStyle: headingWidthTab,
		mobRangeStyle: headingWithMob,
	} = generateResRangeStyle({
		controlName: HEADING_WIDTH,
		property: 'width',
		attributes,
	});

	const {
		desktopAlignStyle: headingAlignmentDesktop,
		tabAlignStyle: headingAlignmentTab,
		mobAlignStyle: headingAlignmentMob,
	} = generateResAlignmentStyle({
		controlName: HEADING_ALIGNMENT,
		property: 'text-align',
		attributes,
	});

	const {
		dimensionStylesDesktop: headingPaddingDesktop,
		dimensionStylesTab: headingPaddingTab,
		dimensionStylesMobile: headingPaddingMobile,
	} = generateDimensionStyle({
		controlName: HEADING_PADDING,
		styleFor: 'padding',
		attributes,
	});

	//title typography
	const {
		typoStylesDesktop: titleTypoDesktop,
		typoStylesTab: titleTypoTab,
		typoStylesMobile: titleTypoMob,
	} = generateTypographyStyles({
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 22,
		attributes,
	})

	//Generate Background
	const {
		backgroundStylesDesktop: headingBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: headingHoverBackgroundStylesDesktop,
		backgroundStylesTab: headingBackgroundStylesTab,
		hoverBackgroundStylesTab: headingHoverBackgroundStylesTab,
		backgroundStylesMobile: headingBackgroundStylesMobile,
		hoverBackgroundStylesMobile: headingHoverBackgroundStylesMobile,
		overlayStylesDesktop: headingOverlayStylesDesktop,
		hoverOverlayStylesDesktop: headingHoverOverlayStylesDesktop,
		overlayStylesTab: headingOverlayStylesTab,
		hoverOverlayStylesTab: headingHoverOverlayStylesTab,
		overlayStylesMobile: headingOverlayStylesMobile,
		hoverOverlayStylesMobile: headingHoverOverlayStylesMobile,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: HEADING_BG,
	});

	const desktopAllStyle = `
		.zolo-${blockId}{
			${headingWidthDesktop}
			${headingAlignmentDesktop}
			color:${headingColor};
			${headingPaddingDesktop}
			${headingBackgroundStylesDesktop}
		}
		.zolo-${blockId}:hover{
			${headingHoverBackgroundStylesDesktop}
		}
		.zolo-${blockId}::before{
			${headingOverlayStylesDesktop}
		}
		.zolo-${blockId}::before:hover{
			${headingHoverOverlayStylesDesktop}
		}
		.zolo-${blockId} h3{
			${titleTypoDesktop}
		}
	`;

	const tabletAllStyle = `
		.zolo-${blockId}{
			${headingWidthTab}
			${headingAlignmentTab}
			${headingPaddingTab}
			${headingBackgroundStylesTab}
		}
		.zolo-${blockId}:hover{
			${headingHoverBackgroundStylesTab}
		}
		.zolo-${blockId}::before{
			${headingOverlayStylesTab}
		}
		.zolo-${blockId}::before:hover{
			${headingHoverOverlayStylesTab}
		}
		.zolo-${blockId} h3{
			${titleTypoTab}
		}
	`;

	const mobileAllStyle = `
		.zolo-${blockId}{
			${headingWithMob}
			${headingAlignmentMob}
			${headingPaddingMobile}
			${headingBackgroundStylesMobile}
		}
		.zolo-${blockId}:hover{
			${headingHoverBackgroundStylesMobile}
		}
		.zolo-${blockId}::before{
			${headingOverlayStylesMobile}
		}
		.zolo-${blockId}::before:hover{
			${headingHoverOverlayStylesMobile}
		}
		.zolo-${blockId} h3{
			${titleTypoMob}
		}
	`;

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			<div {...blockProps}>

				<style>
					{`
						/* desktopcssStart */	
						${softMinifyCssStrings(desktopAllStyle)}
						/* desktopcssEnd */	

						@media all and (max-width: 1024px) {	
							/* tabcssStart */			
							${softMinifyCssStrings(tabletAllStyle)}
							/* tabcssEnd */			
						}
						
						@media all and (max-width: 767px) {
							/* mobcssStart */			
							${softMinifyCssStrings(mobileAllStyle)}
							/* mobcssEnd */
						}			
					`}
				</style>

				<h3>Advance Heading From Edit</h3>
			</div>
		</>
	)
}

export default Edit;