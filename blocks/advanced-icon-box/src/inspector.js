/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
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
	TypographyDropdown,
	TabPanelControl,
	IconPicker,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	TITLE_ALIGNMENT,
	TITLE_TAG,
	DESC_ALIGNMENT,
	PRESETS,
	ICON_POSITIONS,
	BUTTON_POSITIONS,
	TOP_ICON_POSITIONS,
	SIDE_ICON_POSITIONS,
	ICON_SIZE,
	BUTTON_ICON_SIZE,
	ICON_TEXT_SPACING,
	ICON_SPACING,
	ICON_TYPOGRAPHY,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_PADDING,
	ICON_MARGIN,
} from './constants';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		titleTag,
		resMode,
		showIcon,
		mainIcon,
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
										<SelectControl
											label={ __(
												'Select Icon Type',
												'zolo-blocks'
											) }
											value={ iconType }
											options={ [
												{
													label: 'Icon',
													value: 'icon',
												},
												{
													label: 'Image',
													value: 'image',
												},
											] }
											onChange={ ( value ) =>
												setAttributes( {
													iconType: value,
												} )
											}
										/>

										{ iconType == 'icon' && (
											<Fragment>
												<IconPicker
													value={ mainIcon }
													onChange={ ( value ) =>
														setAttributes( {
															mainIcon: value,
														} )
													}
												/>
												{ preset !== '' &&
													preset == 'style-1' && (
														<SelectControl
															label={ __(
																'Position',
																'zolo-blocks'
															) }
															options={
																TOP_ICON_POSITIONS
															}
															onChange={ (
																value
															) =>
																setAttributes( {
																	presetOneStyles:
																		{
																			...presetOneStyles,
																			iconPosition:
																				value,
																		},
																} )
															}
															value={
																presetOneStyles.iconPosition
															}
														/>
													) }
												{ preset == 'style-2' && (
													<SelectControl
														label={ __(
															'Position',
															'zolo-blocks'
														) }
														options={
															SIDE_ICON_POSITIONS
														}
														onChange={ ( value ) =>
															setAttributes( {
																presetTwoStyles:
																	{
																		...presetTwoStyles,
																		iconPosition:
																			value,
																	},
															} )
														}
														value={
															presetTwoStyles.iconPosition
														}
													/>
												) }
												{ preset == 'style-3' && (
													<SelectControl
														label={ __(
															'Position',
															'zolo-blocks'
														) }
														options={
															SIDE_ICON_POSITIONS
														}
														onChange={ ( value ) =>
															setAttributes( {
																presetThreeStyles:
																	{
																		...presetThreeStyles,
																		iconPosition:
																			value,
																	},
															} )
														}
														value={
															presetThreeStyles.iconPosition
														}
													/>
												) }

												<br />

												<ResRangeControl
													label={ __(
														'Icon Size',
														'zolo-blocks'
													) }
													controlName={ ICON_SIZE }
													resRequiredProps={
														resRequiredProps
													}
													min={ 0 }
													max={ 100 }
													step={ 1 }
												/>
												<ResRangeControl
													label={ __(
														'Gap',
														'zolo-blocks'
													) }
													controlName={ ICON_SPACING }
													resRequiredProps={
														resRequiredProps
													}
													min={ 0 }
													max={ 100 }
													step={ 1 }
												/>
											</Fragment>
										) }

										{ iconType == 'image' &&
											( iconTypeImage ? (
												<img
													src={ iconTypeImage.url }
													alt={
														iconTypeImage.alt
															? iconTypeImage.alt
															: 'image alt text'
													}
												/>
											) : (
												<MediaUploadCheck>
													<MediaUpload
														onSelect={ ( media ) =>
															setAttributes( {
																iconTypeImage:
																	media,
															} )
														}
														allowedTypes={ [
															'image',
														] }
														value={
															iconTypeImage &&
															iconTypeImage.id
														}
														render={ ( {
															open,
														} ) => (
															<Button
																onClick={ open }
																icon="upload"
																variant="secondary"
															>
																{ __(
																	'Add Image',
																	'zolo-blocks'
																) }
															</Button>
														) }
													/>
												</MediaUploadCheck>
											) ) }

										<CardDivider />
										<SelectControl
											label={ __(
												'Title Tag',
												'zolo-blocks'
											) }
											options={ TITLE_TAG }
											onChange={ ( tag ) => {
												setAttributes( {
													titleTag: tag,
												} );
											} }
											value={ titleTag }
										/>
										<ResAlignmentControl
											label={ __(
												'Title Alignment',
												'zolo-blocks'
											) }
											controlName={ TITLE_ALIGNMENT }
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
										<br />
										<ResAlignmentControl
											label={ __(
												'Description Alignment',
												'zolo-blocks'
											) }
											controlName={ DESC_ALIGNMENT }
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
										title={ __( 'Button', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<TextControl
											label={ __(
												'Button URL',
												'zolo-blocks'
											) }
											value={ buttonLink }
											onChange={ ( link ) =>
												setAttributes( {
													buttonLink: link,
												} )
											}
										/>
										{ preset === 'style-1' && (
											<SelectControl
												label={ __(
													'Button Position',
													'zolo-blocks'
												) }
												options={ BUTTON_POSITIONS }
												onChange={ ( value ) =>
													setAttributes( {
														presetOneStyles: {
															...presetOneStyles,
															buttonPosition:
																value,
														},
													} )
												}
												value={
													presetOneStyles.buttonPosition
												}
											/>
										) }
										{ preset === 'style-2' && (
											<SelectControl
												label={ __(
													'Button Position',
													'zolo-blocks'
												) }
												options={ BUTTON_POSITIONS }
												onChange={ ( value ) =>
													setAttributes( {
														presetTwoStyles: {
															...presetTwoStyles,
															buttonPosition:
																value,
														},
													} )
												}
												value={
													presetTwoStyles.buttonPosition
												}
											/>
										) }
										{ preset === 'style-3' && (
											<SelectControl
												label={ __(
													'Button Position',
													'zolo-blocks'
												) }
												options={ BUTTON_POSITIONS }
												onChange={ ( value ) =>
													setAttributes( {
														presetThreeStyles: {
															...presetThreeStyles,
															buttonPosition:
																value,
														},
													} )
												}
												value={
													presetThreeStyles.buttonPosition
												}
											/>
										) }
										<ToggleControl
											label={ __(
												'Enable Icon',
												'zolo-blocks'
											) }
											checked={ showIcon }
											onChange={ () =>
												setAttributes( {
													showIcon: ! showIcon,
												} )
											}
										/>
										{ showIcon && (
											<Fragment>
												<IconPicker
													value={ buttonIcon }
													onChange={ ( value ) =>
														setAttributes( {
															buttonIcon: value,
														} )
													}
												/>
												{ preset === 'style-1' && (
													<SelectControl
														label={ __(
															'Position',
															'zolo-blocks'
														) }
														options={
															ICON_POSITIONS
														}
														onChange={ (
															position
														) => {
															setAttributes( {
																presetOneStyles:
																	{
																		...presetOneStyles,
																		buttonIconPosition:
																			position,
																	},
															} );
														} }
														value={
															presetOneStyles.buttonIconPosition
														}
													/>
												) }
												{ preset === 'style-2' && (
													<SelectControl
														label={ __(
															'Position',
															'zolo-blocks'
														) }
														options={
															ICON_POSITIONS
														}
														onChange={ (
															position
														) => {
															setAttributes( {
																presetTwoStyles:
																	{
																		...presetTwoStyles,
																		buttonIconPosition:
																			position,
																	},
															} );
														} }
														value={
															presetTwoStyles.buttonIconPosition
														}
													/>
												) }
												{ preset === 'style-3' && (
													<SelectControl
														label={ __(
															'Position',
															'zolo-blocks'
														) }
														options={
															ICON_POSITIONS
														}
														onChange={ (
															position
														) => {
															setAttributes( {
																presetThreeStyles:
																	{
																		...presetThreeStyles,
																		buttonIconPosition:
																			position,
																	},
															} );
														} }
														value={
															presetThreeStyles.buttonIconPosition
														}
													/>
												) }
												<ResRangeControl
													label={ __(
														'Icon Size',
														'zolo-blocks'
													) }
													controlName={
														BUTTON_ICON_SIZE
													}
													resRequiredProps={
														resRequiredProps
													}
													min={ 0 }
													max={ 100 }
													step={ 1 }
												/>
												<ResRangeControl
													label={ __(
														'Gap',
														'zolo-blocks'
													) }
													controlName={
														ICON_TEXT_SPACING
													}
													resRequiredProps={
														resRequiredProps
													}
													min={ 0 }
													max={ 100 }
													step={ 1 }
												/>
											</Fragment>
										) }
										<ToggleControl
											label={ __(
												'Use as Global Link',
												'zolo-blocks'
											) }
											checked={ globalLink }
											onChange={ () =>
												setAttributes( {
													globalLink: ! globalLink,
												} )
											}
										/>
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
												'Icon Border',
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
									<PanelBody
										title={ __( 'Text', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<TypographyDropdown
											label={ __(
												'Typography',
												'zolo-blocks'
											) }
											typoPrefixConstant={
												ICON_TYPOGRAPHY
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
												ICON_TYPOGRAPHY
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
									</PanelBody>
									<PanelBody
										title={ __( 'Border', 'zolo-blocks' ) }
										initialOpen={ false }
									>
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
