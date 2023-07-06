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
	NormalBGControl,
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
	CONTAINER_BOX_SHADOW,
	CONTAINER_BOX_SHADOW_HOVER,
	CONTAINER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_PADDING,
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
} from './constants';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		heading,
		resMode,
		containerBackgroundColor,
		containerBackgroundHoverColor,
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
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
													<BoxShadowControl
														controlName={
															CONTAINER_BOX_SHADOW
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
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_HOVER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
													<BoxShadowControl
														controlName={
															CONTAINER_BOX_SHADOW_HOVER
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

										<BorderControl
											label={ __(
												'Border',
												'zolo-blocks'
											) }
											controlName={ CONTAINER_BORDER }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Border Radius',
												'zolo-blocks'
											) }
											controlName={
												CONTAINER_BORDER_RADIUS
											}
											resRequiredProps={
												resRequiredProps
											}
											forBorderRadius={ true }
										/>

										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ CONTAINER_PADDING }
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
											controlName={ CONTAINER_PADDING }
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
