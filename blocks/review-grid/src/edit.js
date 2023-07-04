/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	BlockControls,
	InnerBlocks,
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
	handleUniqueId,
	softMinifyCssStrings,
	generateResRangeStyle,
	generateDimensionStyle,
	generateNormalBGControlStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	COLUMNS_GAP,
	GRID_COLUMNS,
	ROWS_GAP,
	REVIEW_GRID_BG,
	REVIEW_GRID_MARGIN,
	REVIEW_GRID_PADDING,
} from './constants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const { uniqueId, blockStyle } = attributes;

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
		className: classnames(className, `${uniqueId}`),
	});

	// Grid Columns
	const {
		desktopRangeStyle: deskColumns,
		tabRangeStyle: tabColumns,
		mobRangeStyle: mobColumns,
	} = generateResRangeStyle({
		controlName: GRID_COLUMNS,
		attributes,
		noProperty: true,
		noUnits: false,
		unitCustomTxt: '',
	});

	// Grid Columns Gap
	const {
		desktopRangeStyle: deskColumnsGap,
		tabRangeStyle: tabColumnsGap,
		mobRangeStyle: mobColumnsGap,
	} = generateResRangeStyle({
		controlName: COLUMNS_GAP,
		property: 'grid-column-gap',
		attributes,
	});

	// Grid Rows Gap
	const {
		desktopRangeStyle: deskRowsGap,
		tabRangeStyle: tabRowsGap,
		mobRangeStyle: mobRowsGap,
	} = generateResRangeStyle({
		controlName: ROWS_GAP,
		property: 'grid-row-gap',
		attributes,
	});

	// Container
	const {
		backgroundStylesDesktop: reviewGridDeskBGStyle,
		backgroundStylesTab: reviewGridTabBGStyle,
		backgroundStylesMobile: reviewGridMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: REVIEW_GRID_BG,
		attributes,
		noMainBGImg: false,
	});

	const {
		dimensionStylesDesktop: containerDeskMargin,
		dimensionStylesTab: containerTabMargin,
		dimensionStylesMobile: containerMobMargin,
	} = generateDimensionStyle({
		controlName: REVIEW_GRID_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	const {
		dimensionStylesDesktop: containerDeskPadding,
		dimensionStylesTab: containerTabPadding,
		dimensionStylesMobile: containerMobPadding,
	} = generateDimensionStyle({
		controlName: REVIEW_GRID_PADDING,
		styleFor: 'padding',
		attributes,
	});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridDeskBGStyle}
			${containerDeskMargin}
			${containerDeskPadding}
			grid-template-columns: repeat(${deskColumns}, 1fr);
			${deskColumnsGap}
			${deskRowsGap}
		}
	`;
	const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridTabBGStyle}
			${containerTabMargin}
			${containerTabPadding}
		}
	`;
	const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridMobBGStyle}
			${containerMobMargin}
			${containerMobPadding}
		}
	`;

	const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
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

	/**
	 * Custom Append Button for InnerBlocks
	 */
	const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
	const appendBlock = () => {
		const newBlock = wp.blocks.createBlock('zolo/review-child', {});
		wp.data
			.dispatch('core/block-editor')
			.insertBlock(newBlock, childBlocks.length, clientId);
	};

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			<style>{`
					.${uniqueId}.wp-block-zolo-review-grid {
						display: block;
					}
					.${uniqueId}.wp-block-zolo-review-grid .block-editor-block-list__layout {
						display: grid;
						grid-template-columns: repeat(${deskColumns}, 1fr);
						${deskColumnsGap}
						${deskRowsGap}
					}
					${softMinifyCssStrings(allStyle)}
				`}</style>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-toolbar__control"
						label={__('Add Review', 'zolo-blocks')}
						icon="insert"
						onClick={() => appendBlock()}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['zolo/review-child']}
					template={[['zolo/review-child', {}]]}
					renderAppender={false}
				/>
				<div className="appender-btn">
					<Button
						className="components-button"
						label={__('Add Review', 'zolo-blocks')}
						icon="insert"
						variant="primary"
						onClick={() => appendBlock()}
					>
						{__('Add Review', 'zolo-blocks')}
					</Button>
				</div>
			</div>
		</>
	);
}
