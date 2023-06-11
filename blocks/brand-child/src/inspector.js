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
	CONTENT_ALIGNMENT,
	TITLE_MARGIN,
	DESCRIPTION_MARGIN,
	PRESETS,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	ICON_PADDING,
	ICON_MARGIN,
} from './constants';

import {
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
		brandAnchorText,
		brandDetailPageLink,
		showBrandName,
		showWebsiteLink,
		link,
		resMode,
		textColor,
		descColor,
		descHoverColor,
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
										{ showBrandName && (
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
										) }

										{ showWebsiteLink && (
											<>
												<TextControl
													label={ __(
														'Anchor Text',
														'zolo-blocks'
													) }
													onChange={ ( name ) =>
														setAttributes( {
															brandAnchorText:
																name,
														} )
													}
													value={ brandAnchorText }
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
											</>
										) }
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
													value: 'left',
												},
												{
													label: 'Center',
													value: 'center',
												},
												{
													label: 'Right',
													value: 'right',
												},
												{
													label: 'Justify',
													value: 'justify',
												},
											] }
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
