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
	TEAM_GRID_BG,
	COLUMNS_GAP,
	GRID_COLUMNS,
	ROWS_GAP,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
} from './constants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const { uniqueId, blockStyle, containerBg } = attributes;

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

	const {
		backgroundStylesDesktop: normalDeskBGStyle,
		backgroundStylesTab: normalTabBGStyle,
		backgroundStylesMobile: normalMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: TEAM_GRID_BG,
		attributes,
		noMainBGImg: false,
	});

	// Grid Columns
	const {
		desktopRangeStyle: deskColumns,
		tabRangeStyle: tabColumns,
		mobRangeStyle: mobColumns,
	} = generateResRangeStyle({
		controlName: GRID_COLUMNS,
		property: 'grid-template-columns',
		attributes,
	});

	// Grid Columns Gap
	const {
		desktopRangeStyle: deskColumnsGap,
		tabRangeStyle: tabColumnsGap,
		mobRangeStyle: mobColumnsGap,
	} = generateResRangeStyle({
		controlName: COLUMNS_GAP,
		property: 'column-gap',
		attributes,
	});

	// Grid Rows Gap
	const {
		desktopRangeStyle: deskRowsGap,
		tabRangeStyle: tabRowsGap,
		mobRangeStyle: mobRowsGap,
	} = generateResRangeStyle({
		controlName: ROWS_GAP,
		property: 'row-gap',
		attributes,
	});

	// Container Margin
	const {
		dimensionStylesDesktop: containerDeskMargin,
		dimensionStylesTab: containerTabMargin,
		dimensionStylesMobile: containerMobMargin,
	} = generateDimensionStyle({
		controlName: CONTAINER_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Container Padding
	const {
		dimensionStylesDesktop: containerDeskPadding,
		dimensionStylesTab: containerTabPadding,
		dimensionStylesMobile: containerMobPadding,
	} = generateDimensionStyle({
		controlName: CONTAINER_PADDING,
		styleFor: 'padding',
		attributes,
	});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-team-grid {
			${normalDeskBGStyle}
			${containerDeskMargin}
			${containerDeskPadding}
		}
	`;
	const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-team-grid {
			${normalTabBGStyle}
			${containerTabMargin}
			${containerTabPadding}
		}
	`;
	const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-team-grid {
			${normalMobBGStyle}
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
		const newBlock = wp.blocks.createBlock('zolo/team-member', {});
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
			<style>{`${softMinifyCssStrings(allStyle)}`}</style>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-toolbar__control"
						label={__('Add Team Member', 'zolo-blocks')}
						icon="insert"
						onClick={() => appendBlock()}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['zolo/team-member']}
					template={[['zolo/team-member', {}]]}
					renderAppender={false}
				/>
				<div className="appender-btn">
					<Button
						className="components-button"
						label={__('Add Team Member', 'zolo-blocks')}
						icon="insert"
						variant="primary"
						onClick={() => appendBlock()}
					>
						{__('Add Team Member', 'zolo-blocks')}
					</Button>
				</div>
			</div>
		</>
	);
}
