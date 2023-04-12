/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
import ResAlignmentControl from '../../../src/controls/res-alignment-control';
import ResRangeControl from '../../../src/controls/res-range-control';
import ColorControl from '../../../src/controls/color-control';
import BorderControl from '../../../src/controls/border-control';
import ResDimensionsControl from '../../../src/controls/dimensions-control';
import TypographyDropdown from '../../../src/controls/typography-control';
import TabPanelControl from '../../../src/controls/tabpanel-control';

// const {
// 	BackgroundControl,
// 	BorderControl,
// 	BoxShadowControl,
// 	ColorControl,
// 	ResDimensionsControl,
// 	ResAlignmentControl,
// 	TypographyDropdown,
// } = window.zoloModule;

// import { PRESETS } from "../../../src/global/constants";
import objAttributes from './attributes';
import {
	TITLE_ALIGNMENT,
	DESC_ALIGNMENT,
	PRESETS,
	ICON_POSITIONS,
	BUTTON_POSITIONS,
	TOP_ICON_POSITIONS,
	ICON_SIZE,
	ICON_TEXT_SPACING,
	ICON_TYPOGRAPHY,
	ICON_BORDER,
	ICON_PADDING,
	ICON_MARGIN,
} from './constants';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		resDevice,
		label,
		link,
		openInNewTab,
		addNoFollow,
		showIcon,
		icon,
		iconPosition,
		topIconPosition,
		buttonPosition,
		textColor,
		textHoverColor,
		iconType,
		iconTypeImage,
		buttonLink,
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
					// onSelect={onSelect}
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
												<strong>
													{ __(
														'Icon Picker',
														'zolo-blocks'
													) }
												</strong>
												<br />
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#000000"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<circle
														cx="18"
														cy="5"
														r="3"
													></circle>
													<circle
														cx="6"
														cy="12"
														r="3"
													></circle>
													<circle
														cx="18"
														cy="19"
														r="3"
													></circle>
													<line
														x1="8.59"
														y1="13.51"
														x2="15.42"
														y2="17.49"
													></line>
													<line
														x1="15.41"
														y1="6.51"
														x2="8.59"
														y2="10.49"
													></line>
												</svg>
												<br />
												<br />
												<SelectControl
													label={ __(
														'Position',
														'zolo-blocks'
													) }
													options={
														TOP_ICON_POSITIONS
													}
													onChange={ ( position ) => {
														setAttributes( {
															topIconPosition:
																position,
														} );
													} }
													value={ topIconPosition }
												/>
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
										<CardDivider />

										<TextControl
											label={ __(
												'Button Link',
												'zolo-blocks'
											) }
											value={ buttonLink }
											onChange={ ( link ) =>
												setAttributes( {
													buttonLink: link,
												} )
											}
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
										<SelectControl
											label={ __(
												'Button Position',
												'zolo-blocks'
											) }
											options={ BUTTON_POSITIONS }
											onChange={ ( position ) => {
												setAttributes( {
													buttonPosition: position,
												} );
											} }
											value={ buttonPosition }
										/>
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
												<p>
													<strong>Icon Picker</strong>
												</p>
												<SelectControl
													label={ __(
														'Position',
														'zolo-blocks'
													) }
													options={ ICON_POSITIONS }
													onChange={ ( position ) => {
														setAttributes( {
															iconPosition:
																position,
														} );
													} }
													value={ iconPosition }
												/>
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
									</PanelBody>
								</>
							) }

							{ tab.name === 'design' && (
								<>
									<PanelBody
										title={ __( 'Text', 'zolo-blocks' ) }
										initialOpen={ true }
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
