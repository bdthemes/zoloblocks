/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	BorderControl,
	BoxShadowControl,
	NormalBGControl,
	ResDimensionsControl,
	TabPanelControl,
	ImageAvatar,
	ResRangeControl,
	ColorControl,
	TypographyDropdown,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	ROWS_GAP,
	COLUMNS_GAP,
	GRID_COLUMNS,
	CONTAINER_BORDER,
	CONTAINER_HOVER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_HOVER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	IMAGE_BORDER,
	IMAGE_BORDER_RADIUS,
	IMAGE_BOX_SHADOW,
	IMAGE_BACKGROUND,
	IMAGE_HOVER_BORDER,
	IMAGE_HOVER_BORDER_RADIUS,
	IMAGE_HOVER_BOX_SHADOW,
	IMAGE_HOVER_BACKGROUND,
	IMAGE_PADDING,
	IMAGE_MARGIN,
	HEADING_BACKGROUND,
	HEADING_BORDER_RADIUS,
	HEADING_BOX_SHADOW,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const { uniqueId, advancedGallery, preset, resMode, headingColor } =
		attributes;

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
					className="zolo-parent-tab-panel"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'settings',
							title: 'Settings',
							className: 'zolo-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'zolo-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'zolo-tab advanced',
						},
					] }
				>
					{ ( tab ) => (
						<div className={ 'zolo-tab-controls' + tab.name }>
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
									<PanelBody
										title={ __( 'Content', 'zolo-blocks' ) }
										initialOpen={ true }
									>
										<BaseControl
											label={ __(
												'Photo',
												'zolo-blocks'
											) }
										>
											{ advancedGallery ? (
												<ImageAvatar
													imageUrl={
														advancedGallery &&
														advancedGallery[ 0 ].url
													}
													onDeleteImage={ () =>
														setAttributes( {
															advancedGallery: '',
														} )
													}
												/>
											) : (
												<MediaUpload
													onSelect={ ( media ) => {
														setAttributes( {
															advancedGallery:
																media,
														} );
													} }
													multiple={ true }
													gallery={ true }
													addToGallery={ true }
													allowedTypes={ [ 'image' ] }
													value={
														advancedGallery &&
														advancedGallery.map(
															( image ) =>
																image.id
														)
													}
													render={ ( { open } ) => (
														<Button
															className="zolo-image-upload-btn"
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
															{ __(
																' Upload Photo',
																'zolo-blocks'
															) }
														</Button>
													) }
												/>
											) }
										</BaseControl>
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
										initialOpen={ false }
									>
										<TabPanelControl
											normalComponents={
												<>
													<BorderControl
														label={ __(
															'Border',
															'zolo-blocks'
														) }
														controlName={
															CONTAINER_BORDER
														}
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

													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
												</>
											}
											hoverComponents={
												<>
													<BorderControl
														label={ __(
															'Border',
															'zolo-blocks'
														) }
														controlName={
															CONTAINER_HOVER_BORDER
														}
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
															CONTAINER_HOVER_BORDER_RADIUS
														}
														resRequiredProps={
															resRequiredProps
														}
														forBorderRadius={ true }
													/>
													<BoxShadowControl
														controlName={
															CONTAINER_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_HOVER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
												</>
											}
										/>
									</PanelBody>
									<PanelBody
										title={ __( 'Image', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<TabPanelControl
											normalComponents={
												<>
													<BorderControl
														label={ __(
															'Image Border',
															'zolo-blocks'
														) }
														controlName={
															IMAGE_BORDER
														}
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
															IMAGE_BORDER_RADIUS
														}
														resRequiredProps={
															resRequiredProps
														}
														forBorderRadius={ true }
													/>
													<BoxShadowControl
														controlName={
															IMAGE_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>

													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															IMAGE_BACKGROUND
														}
														noMainBGImg={ false }
													/>
												</>
											}
											hoverComponents={
												<>
													<BorderControl
														label={ __(
															'Border',
															'zolo-blocks'
														) }
														controlName={
															IMAGE_HOVER_BORDER
														}
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
															IMAGE_HOVER_BORDER_RADIUS
														}
														resRequiredProps={
															resRequiredProps
														}
														forBorderRadius={ true }
													/>
													<BoxShadowControl
														controlName={
															IMAGE_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															IMAGE_HOVER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
												</>
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ IMAGE_PADDING }
											resRequiredProps={
												resRequiredProps
											}
											forBorderRadius={ false }
										/>
										<ResDimensionsControl
											label={ __(
												'Margin',
												'zolo-blocks'
											) }
											controlName={ IMAGE_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
											forBorderRadius={ false }
										/>
									</PanelBody>
									<PanelBody
										title={ __( 'Heading', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<>
											<TypographyDropdown
												label={ __(
													'Typography',
													'zolo-blocks'
												) }
												typoPrefixConstant={
													HEADING_TYPOGRAPHY
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<NormalBGControl
												resRequiredProps={
													resRequiredProps
												}
												controlName={
													HEADING_BACKGROUND
												}
												noMainBGImg={ false }
											/>
											<ColorControl
												label={ __(
													'Color',
													'zolo-blocks'
												) }
												color={ headingColor }
												onChange={ ( value ) =>
													setAttributes( {
														headingColor: value,
													} )
												}
											/>
											<ResDimensionsControl
												label={ __(
													'Border Radius',
													'zolo-blocks'
												) }
												controlName={
													HEADING_BORDER_RADIUS
												}
												resRequiredProps={
													resRequiredProps
												}
												forBorderRadius={ true }
											/>
											<BoxShadowControl
												controlName={
													HEADING_BOX_SHADOW
												}
												resRequiredProps={
													resRequiredProps
												}
												enableTransition={ false }
											/>
										</>
									</PanelBody>
								</>
							) }

							{ tab.name === 'advanced' && (
								<>
									{ /* Advanced Controls */ }
									<PanelBody
										title={ __( 'Spacing', 'zolo-blocks' ) }
										initialOpen={ false }
									></PanelBody>
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
