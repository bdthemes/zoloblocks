/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	TextControl,
	BaseControl,
	Button,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	ResAlignmentControl,
	BorderControl,
	BoxShadowControl,
	NormalBGControl,
	ColorControl,
	ResDimensionsControl,
	TextShadowControl,
	TextStrokeControl,
	TypographyDropdown,
	TabPanelControl,
	ImageAvatar,
	ResRangeControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	CONTENT_ALIGNMENT,
	PRESETS,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	LINK_TEXT_SHADOW,
	LINK_TEXT_STROKE,
	LINK_MARGIN,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	CONTAINER_HOVER_BORDER,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BORDER,
	BRAND_PHOTO_BORDER,
	BRAND_PHOTO_BORDER_RADIUS,
	BRAND_PHOTO_BOX_SHADOW,
	BRAND_PHOTO_BG,
	BRAND_PHOTO_PADDING,
	BRAND_PHOTO_MARGIN,
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	IMAGE_HEIGHT,
	IMAGE_WIDTH,
} from './constants';

import {
	TITLE_TYPOGRAPHY,
	LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		brandPhoto,
		brandName,
		brandLabel,
		brandDetailPageLink,
		showBrandName,
		showWebsiteLink,
		resMode,
		textColor,
		linkColor,
		linkHoverColor,
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
											checked={ showWebsiteLink }
											onChange={ () =>
												setAttributes( {
													showWebsiteLink:
														! showWebsiteLink,
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
										initialOpen={ false }
									>
										<BaseControl
											label={ __(
												'Photo',
												'zolo-blocks'
											) }
										>
											{ brandPhoto ? (
												<ImageAvatar
													imageUrl={
														brandPhoto &&
														brandPhoto.url
													}
													onDeleteImage={ () =>
														setAttributes( {
															brandPhoto: null,
														} )
													}
												/>
											) : (
												<MediaUpload
													onSelect={ ( media ) => {
														setAttributes( {
															brandPhoto: media,
														} );
													} }
													allowedTypes={ [ 'image' ] }
													value={
														brandPhoto &&
														brandPhoto.id
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

										<TextControl
											label={ __(
												'Brand Name',
												'zolo-blocks'
											) }
											onChange={ ( name ) =>
												setAttributes( {
													brandName: name,
												} )
											}
											value={ brandName }
											placeholder={ __(
												'Name..',
												'zolo-blocks'
											) }
										/>

										<>
											<TextControl
												label={ __(
													'Label',
													'zolo-blocks'
												) }
												onChange={ ( name ) =>
													setAttributes( {
														brandLabel: name,
													} )
												}
												value={ brandLabel }
												placeholder={ __(
													'Name..',
													'zolo-blocks'
												) }
											/>
											<BaseControl
												label={ __(
													'Brand Details Link',
													'zolo-blocks'
												) }
											>
												<LinkControl
													searchInputPlaceholder="Search here..."
													value={
														brandDetailPageLink
													}
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
														setAttributes( {
															brandDetailPageLink:
																data,
														} )
													}
												/>
											</BaseControl>
											<BaseControl
												label={ __(
													'Image Size',
													'zolo-blocks'
												) }
											>
												<ResRangeControl
													label={ __(
														'Image Height',
														'zolo-blocks'
													) }
													controlName={ IMAGE_HEIGHT }
													resRequiredProps={
														resRequiredProps
													}
												/>
												<ResRangeControl
													label={ __(
														'Image Width',
														'zolo-blocks'
													) }
													controlName={ IMAGE_WIDTH }
													resRequiredProps={
														resRequiredProps
													}
												/>
											</BaseControl>
										</>
									</PanelBody>
								</>
							) }

							{ tab.name === 'design' && (
								<>
									<PanelBody
										title={ __( 'General', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<ResAlignmentControl
											label={ __(
												'Content Alignmet',
												'zolo-blocks'
											) }
											controlName={ CONTENT_ALIGNMENT }
											resRequiredProps={
												resRequiredProps
											}
											alignOptions={ [
												{
													label: 'Left',
													value: 'flex-start',
												},
												{
													label: 'Center',
													value: 'center',
												},
												{
													label: 'Right',
													value: 'flex-end',
												},
											] }
										/>
									</PanelBody>
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
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_HOVER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
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
												</>
											}
										/>
									</PanelBody>

									<PanelBody
										title={ __( 'Photo', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<BorderControl
											label={ __(
												'Border',
												'zolo-blocks'
											) }
											controlName={ BRAND_PHOTO_BORDER }
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
												BRAND_PHOTO_BORDER_RADIUS
											}
											resRequiredProps={
												resRequiredProps
											}
											forBorderRadius={ true }
										/>
										<BoxShadowControl
											controlName={
												BRAND_PHOTO_BOX_SHADOW
											}
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>
										<NormalBGControl
											resRequiredProps={
												resRequiredProps
											}
											controlName={ BRAND_PHOTO_BG }
											noMainBGImg={ false }
										/>
										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ BRAND_PHOTO_PADDING }
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
											controlName={ BRAND_PHOTO_MARGIN }
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
										<TypographyDropdown
											label={ __(
												'Typography',
												'zolo-blocks'
											) }
											typoPrefixConstant={
												TITLE_TYPOGRAPHY
											}
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ColorControl
											label={ __(
												'Color',
												'zolo-blocks'
											) }
											color={ textColor }
											onChange={ ( value ) =>
												setAttributes( {
													textColor: value,
												} )
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Margin',
												'zolo-blocks'
											) }
											controlName={ TITLE_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<TextShadowControl
											controlName={ TITLE_TEXT_SHADOW }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>

										<TextStrokeControl
											controlName={ TITLE_TEXT_STROKE }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>
									</PanelBody>
									<PanelBody
										title={ __( 'Link', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<TypographyDropdown
											label={ __(
												'Typography',
												'zolo-blocks'
											) }
											typoPrefixConstant={
												LINK_TYPOGRAPHY
											}
											resRequiredProps={
												resRequiredProps
											}
										/>

										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={ __(
															'Color',
															'zolo-blocks'
														) }
														color={ linkColor }
														onChange={ ( value ) =>
															setAttributes( {
																linkColor:
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
															'Color',
															'zolo-blocks'
														) }
														color={ linkHoverColor }
														onChange={ ( value ) =>
															setAttributes( {
																linkHoverColor:
																	value,
															} )
														}
													/>
												</>
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Margin',
												'zolo-blocks'
											) }
											controlName={ LINK_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<TextShadowControl
											controlName={ LINK_TEXT_SHADOW }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>
										<TextStrokeControl
											controlName={ LINK_TEXT_STROKE }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
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
