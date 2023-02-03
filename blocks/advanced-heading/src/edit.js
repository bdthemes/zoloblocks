//WordPress dependencies
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

//external dependencies
import classnames from 'classnames';

//internal dependencies
import { handleUniqueId, softMinifyCssStrings } from '../../../src/helpers/helper';
import Inspector from './inspector';

//block constants
import { BLOCK_PREFIX, HEADING_ALIGNMENT, HEADING_BG, HEADING_BORDER, HEADING_PADDING, HEADING_SHADOW, HEADING_WIDTH } from './constants';
import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

//generate style
import { generateBackgroundControlStyles } from '../../../src/helpers/backgroundHelpers';
import { generateBorderStyle } from '../../../src/helpers/border-helper';
import { generateBoxShadowStyles } from '../../../src/helpers/boxshadow-helper';
import { generateDimensionStyle } from '../../../src/helpers/dimension-helper';
import { generateResAlignmentStyle } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeStyle } from '../../../src/helpers/res-range-helper';
import { generateTypographyStyles } from '../../../src/helpers/typoHelpers';

const Edit = (props) => {

	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		uniqueId,
		resDevice,
		blockStyle,
		headingColor
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

	//block wrapper class
	const blockProps = useBlockProps({
		className: classnames(className, ``),
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

	const {
		desktopBorderStyle: headingBorderDesktop,
		tabBorderStyle: headingBorderTab,
		mobBorderStyle: headingBorderMob
	} = generateBorderStyle({
		attributes,
		controlName: HEADING_BORDER,
	});

	const {
		boxShadowStyle: headingShadow,
		hoverBoxShadowstyle: headingHoverShadow,
		transitionStyle: headingShadowTransition
	} = generateBoxShadowStyles({
		attributes,
		controlName: HEADING_SHADOW,
	});

	const desktopAllStyle = `
		.${uniqueId}{
			${headingWidthDesktop}
			${headingAlignmentDesktop}
			color:${headingColor};
			${headingPaddingDesktop}
			${headingBackgroundStylesDesktop}
			${headingBorderDesktop}
			${headingShadow}
			transition:${headingShadowTransition};
		}
		.${uniqueId}:hover{
			${headingHoverBackgroundStylesDesktop}
			${headingHoverShadow}
		}
		.${uniqueId}::before{
			${headingOverlayStylesDesktop}
		}
		.${uniqueId}::before:hover{
			${headingHoverOverlayStylesDesktop}
		}
		.${uniqueId} h3{
			${titleTypoDesktop}
		}
	`;

	const tabletAllStyle = `
		.${uniqueId}{
			${headingWidthTab}
			${headingAlignmentTab}
			${headingPaddingTab}
			${headingBackgroundStylesTab}
			${headingBorderTab}
		}
		.${uniqueId}:hover{
			${headingHoverBackgroundStylesTab}
		}
		.${uniqueId}::before{
			${headingOverlayStylesTab}
		}
		.${uniqueId}::before:hover{
			${headingHoverOverlayStylesTab}
		}
		.${uniqueId} h3{
			${titleTypoTab}
		}
	`;

	const mobileAllStyle = `
		.${uniqueId}{
			${headingWithMob}
			${headingAlignmentMob}
			${headingPaddingMobile}
			${headingBackgroundStylesMobile}
			${headingBorderMob}
		}
		.${uniqueId}:hover{
			${headingHoverBackgroundStylesMobile}
		}
		.${uniqueId}::before{
			${headingOverlayStylesMobile}
		}
		.${uniqueId}::before:hover{
			${headingHoverOverlayStylesMobile}
		}
		.${uniqueId} h3{
			${titleTypoMob}
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
				<div className={`zolo-block-wrapper zolo-advanced-heading ${uniqueId}`}>
					<h3>Advance Heading From Edit</h3>
				</div>
			</div>
		</>
	)
}

export default Edit;