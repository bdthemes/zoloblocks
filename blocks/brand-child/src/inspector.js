/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
	MediaUploadCheck,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
	BaseControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
	ResAlignmentControl,
	ResRangeControl,
	ColorControl,
	BorderControl,
	ResDimensionsControl,
	TextShadowControl,
	TextStrokeControl,
	TypographyDropdown,
	TabPanelControl,
	IconPicker,
	BoxShadowControl,
	ImageAvatar,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	TITLE_MARGIN,
	DESCRIPTION_MARGIN,
	PRESETS,
	ICON_POSITIONS,
	BUTTON_POSITIONS,
	BUTTON_ICON_SIZE,
	ICON_TEXT_SPACING,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	BUTTON_BOX_SHADOW,
	BUTTON_HOVER_BOX_SHADOW,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_PADDING,
	ICON_MARGIN,
	BUTTON_BORDER,
	BUTTON_BORDER_RADIUS,
	BUTTON_MARGIN,
	BUTTON_PADDING,
} from './constants';

import {
	BUTTON_TYPOGRAPHY,
	TITLE_TYPOGRAPHY,
	DESCRIPTION_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		brandPhoto,
		brandName,
		brandDetailPageLink,
		link,
		resMode,
		showIcon,
		buttonIcon,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		textColor,
		textHoverColor,
		descColor,
		descHoverColor,
		iconType,
		iconTypeImage,
		btnColor,
		btnHoverColor,
		btnBgColor,
		btnBgHoverColor,
		buttonLink,
		globalLink,
		presetOneStyles,
		presetTwoStyles,
		presetThreeStyles,
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
										initialOpen={ true }
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
												'Name',
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

										<BaseControl
											label={ __(
												'Brand Details Link',
												'zolo-blocks'
											) }
										>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ brandDetailPageLink }
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
									</PanelBody>
								</>
							) }

							{ tab.name === 'design' && (
								<>
									<PanelBody
										title={ __( 'Icon', 'zolo-blocks' ) }
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
										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={ __(
															'Color',
															'zolo-blocks'
														) }
														color={ textColor }
														onChange={ ( value ) =>
															setAttributes( {
																textColor:
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
														color={ textHoverColor }
														onChange={ ( value ) =>
															setAttributes( {
																textHoverColor:
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
										title={ __(
											'Description',
											'zolo-blocks'
										) }
										initialOpen={ false }
									>
										<TypographyDropdown
											label={ __(
												'Typography',
												'zolo-blocks'
											) }
											typoPrefixConstant={
												DESCRIPTION_TYPOGRAPHY
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
														color={ descColor }
														onChange={ ( value ) =>
															setAttributes( {
																descColor:
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
														color={ descHoverColor }
														onChange={ ( value ) =>
															setAttributes( {
																descHoverColor:
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
											controlName={ DESCRIPTION_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
									</PanelBody>
									<PanelBody
										title={ __( 'Button', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<TypographyDropdown
											label={ __(
												'Typography',
												'zolo-blocks'
											) }
											typoPrefixConstant={
												BUTTON_TYPOGRAPHY
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
														color={ btnColor }
														onChange={ ( value ) =>
															setAttributes( {
																btnColor: value,
															} )
														}
													/>
													<BoxShadowControl
														controlName={
															BUTTON_BOX_SHADOW
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
														color={ btnHoverColor }
														onChange={ ( value ) =>
															setAttributes( {
																btnHoverColor:
																	value,
															} )
														}
													/>
													<BoxShadowControl
														controlName={
															BUTTON_HOVER_BOX_SHADOW
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
														color={ btnBgColor }
														onChange={ ( value ) =>
															setAttributes( {
																btnBgColor:
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
															btnBgHoverColor
														}
														onChange={ ( value ) =>
															setAttributes( {
																btnBgHoverColor:
																	value,
															} )
														}
													/>
												</>
											}
										/>
										<BorderControl
											label={ __(
												'Button Border',
												'zolo-blocks'
											) }
											controlName={ BUTTON_BORDER }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Border Radius',
												'zolo-blocks'
											) }
											controlName={ BUTTON_BORDER_RADIUS }
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
											controlName={ BUTTON_MARGIN }
											resRequiredProps={
												resRequiredProps
											}
										/>
										<ResDimensionsControl
											label={ __(
												'Padding',
												'zolo-blocks'
											) }
											controlName={ BUTTON_PADDING }
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
