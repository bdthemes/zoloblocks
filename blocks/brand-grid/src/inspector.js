/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TabPanel,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	ColorControl,
	BorderControl,
	ResDimensionsControl,
	TabPanelControl,
	BoxShadowControl,
	ResRangeControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	TITLE_TAG,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_PADDING,
	ICON_MARGIN,
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
} from './constants';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		heading,
		resMode,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		showBrandName,
		showBrandLink,
	} = attributes;

	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};
	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'settings',
							title: 'Settings',
							className: 'eb-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'eb-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'eb-tab advanced',
						},
					] }
				>
					{ ( tab ) => (
						<div className={ 'eb-tab-controls' + tab.name }>
							{ tab.name === 'settings' && (
								<>
									<PanelBody
										title={ __( 'General', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<SelectControl
											label={ __(
												'Preset Designs',
												'zolo-blocks'
											) }
											value={ preset }
											options={ PRESETS }
											onChange={ ( value ) =>
												setAttributes( {
													preset: value,
												} )
											}
										/>
										<SelectControl
											label={ __(
												'Heading',
												'zolo-blocks'
											) }
											value={ heading }
											options={ TITLE_TAG }
											onChange={ ( value ) =>
												setAttributes( {
													heading: value,
												} )
											}
										/>
										<ToggleControl
											label={ __(
												'Show Brand Name',
												'zolo-blocks'
											) }
											checked={ showBrandName }
											onChange={ () =>
												setAttributes( {
													showBrandName:
														! showBrandName,
												} )
											}
										/>
										<ToggleControl
											label={ __(
												'Show Website Link',
												'zolo-blocks'
											) }
											checked={ showBrandLink }
											onChange={ () =>
												setAttributes( {
													showBrandLink:
														! showBrandLink,
												} )
											}
										/>
										<ResRangeControl
											label={ __(
												'Grid Columns',
												'zolo-blocks'
											) }
											controlName={ GRID_COLUMNS }
											resRequiredProps={
												resRequiredProps
											}
											max={ 4 }
											min={ 1 }
											step={ 1 }
											noUnits={ true }
										/>
										<ResRangeControl
											label={ __(
												'Columns Gap',
												'zolo-blocks'
											) }
											controlName={ COLUMNS_GAP }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResRangeControl
											label={ __(
												'Rows Gap',
												'zolo-blocks'
											) }
											controlName={ ROWS_GAP }
											resRequiredProps={
												resRequiredProps
											}
										/>
									</PanelBody>
								</>
							) }

							{ tab.name === 'design' && (
								<>
									<PanelBody
										title={ __(
											'Container',
											'zolo-blocks'
										) }
										initialOpen={ true }
									>
										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={ __(
															'Color',
															'zolo-blocks'
														) }
														color={ iconColor }
														onChange={ ( value ) =>
															setAttributes( {
																iconColor:
																	value,
															} )
														}
													/>
													<BoxShadowControl
														controlName={
															ICON_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>
												</>
											}
											hoverComponents={
												<>
													<ColorControl
														label={ __(
															'Color',
															'zolo-blocks'
														) }
														color={ iconHoverColor }
														onChange={ ( value ) =>
															setAttributes( {
																iconHoverColor:
																	value,
															} )
														}
													/>
													<BoxShadowControl
														controlName={
															ICON_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>
												</>
											}
										/>

										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={ __(
															'Background Color',
															'zolo-blocks'
														) }
														color={
															iconBackgroundColor
														}
														onChange={ ( value ) =>
															setAttributes( {
																iconBackgroundColor:
																	value,
															} )
														}
													/>
												</>
											}
											hoverComponents={
												<>
													<ColorControl
														label={ __(
															'Background Hover Color',
															'zolo-blocks'
														) }
														color={
															iconBackgroundHoverColor
														}
														onChange={ ( value ) =>
															setAttributes( {
																iconBackgroundHoverColor:
																	value,
															} )
														}
													/>
												</>
											}
										/>
										<BorderControl
											label={ __(
												'Border',
												'zolo-blocks'
											) }
											controlName={ ICON_BORDER }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Border Radius',
												'zolo-blocks'
											) }
											controlName={ ICON_BORDER_RADIUS }
											resRequiredProps={
												resRequiredProps
											}
											forBorderRadius={ true }
										/>
										<ResDimensionsControl
											label={ __(
												'Margin',
												'zolo-blocks'
											) }
											controlName={ ICON_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ ICON_PADDING }
											resRequiredProps={
												resRequiredProps
											}
										/>
									</PanelBody>
								</>
							) }

							{ tab.name === 'advanced' && (
								<>
									{ /* Advanced Controls */ }
									<PanelBody
										title={ __( 'Spacing', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ ICON_PADDING }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Margin',
												'zolo-blocks'
											) }
											controlName={ ICON_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
									</PanelBody>
								</>
							) }
						</div>
					) }
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
