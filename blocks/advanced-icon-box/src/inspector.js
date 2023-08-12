/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
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
	HeaderTabs,
	IconicBtnGroup,
	LinkControl,
	NormalBGControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	TITLE_TAG,
	TITLE_MARGIN,
	DESCRIPTION_MARGIN,
	PRESETS,
	ICON_SIZE,
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
	CONTAINER_BACKGROUND,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
} from './constants';

import {
	BUTTON_TYPOGRAPHY,
	TITLE_TYPOGRAPHY,
	DESCRIPTION_TYPOGRAPHY,
} from './constants/typoPrefixConstant';
import {
	DEFAULT_ALIGNS,
	ICON_BOX_OPTIONS,
	FLEX_ALIGN_OPTIONS,
	POSITIONS,
} from '../../../src/global/constants';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		preset,
		titleTag,
		resMode,
		showIcon,
		mainIcon,
		buttonIcon,
		iconAlignment,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		textColor,
		textHoverColor,
		descColor,
		descHoverColor,
		iconType,
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
			<HeaderTabs
				generalTab={
					<>
						<PanelBody
							title={ __( 'General', 'zolo-blocks' ) }
							initialOpen={ true }
						>
							<SelectControl
								label={ __( 'Preset Designs', 'zolo-blocks' ) }
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
							<IconicBtnGroup
								label={ __( 'Type', 'zolo-blocks' ) }
								value={ iconType }
								onChange={ ( value ) =>
									setAttributes( {
										iconType: value,
									} )
								}
								options={ ICON_BOX_OPTIONS }
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

									<ResRangeControl
										label={ __(
											'Icon Size',
											'zolo-blocks'
										) }
										controlName={ ICON_SIZE }
										resRequiredProps={ resRequiredProps }
										min={ 0 }
										max={ 100 }
										step={ 1 }
									/>
								</Fragment>
							) }

							{ iconType == 'image' && (
								<Fragment>
									<p>Image Settings</p>
								</Fragment>
							) }

							<CardDivider />
							<SelectControl
								label={ __( 'Title Tag', 'zolo-blocks' ) }
								options={ TITLE_TAG }
								onChange={ ( tag ) => {
									setAttributes( {
										titleTag: tag,
									} );
								} }
								value={ titleTag }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Button', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							<LinkControl
								label={ __( 'Button URL', 'zolo-blocks' ) }
								value={ buttonLink }
								onChange={ ( value ) =>
									setAttributes( {
										buttonLink: value,
									} )
								}
							/>

							<ToggleControl
								label={ __( 'Show Icon', 'zolo-blocks' ) }
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

									<ResRangeControl
										label={ __(
											'Icon Size',
											'zolo-blocks'
										) }
										controlName={ BUTTON_ICON_SIZE }
										resRequiredProps={ resRequiredProps }
										min={ 0 }
										max={ 100 }
										step={ 1 }
									/>
									<ResRangeControl
										label={ __( 'Gap', 'zolo-blocks' ) }
										controlName={ ICON_TEXT_SPACING }
										resRequiredProps={ resRequiredProps }
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
				}
				styleTab={
					<>
						<PanelBody
							title={ __( 'General', 'zolo-blocks' ) }
							initialOpen={ true }
						>
							{ preset == 'style-1' && (
								<IconicBtnGroup
									label={ __(
										'Content Alignment',
										'zolo-blocks'
									) }
									value={ presetOneStyles.contentPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetOneStyles: {
												...presetOneStyles,
												contentPosition: value,
											},
										} )
									}
									options={ DEFAULT_ALIGNS }
								/>
							) }

							{ preset == 'style-2' && (
								<IconicBtnGroup
									label={ __(
										'Content Alignment',
										'zolo-blocks'
									) }
									value={ presetTwoStyles.contentPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetTwoStyles: {
												...presetTwoStyles,
												contentPosition: value,
											},
										} )
									}
									options={ DEFAULT_ALIGNS }
								/>
							) }

							{ preset == 'style-3' && (
								<IconicBtnGroup
									label={ __(
										'Content Alignment',
										'zolo-blocks'
									) }
									value={ presetThreeStyles.contentPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetThreeStyles: {
												...presetThreeStyles,
												contentPosition: value,
											},
										} )
									}
									options={ DEFAULT_ALIGNS }
								/>
							) }

							<NormalBGControl
								resRequiredProps={ resRequiredProps }
								controlName={ CONTAINER_BACKGROUND }
								noMainBGImg={ false }
							/>
							<ResDimensionsControl
								label={ __( 'Margin', 'zolo-blocks' ) }
								controlName={ CONTAINER_MARGIN }
								resRequiredProps={ resRequiredProps }
							/>
							<ResDimensionsControl
								label={ __( 'Padding', 'zolo-blocks' ) }
								controlName={ CONTAINER_PADDING }
								resRequiredProps={ resRequiredProps }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Icon', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							{ ( preset == 'style-2' ||
								preset == 'style-3' ) && (
								<IconicBtnGroup
									label={ __(
										'Icon Alignment',
										'zolo-blocks'
									) }
									value={ iconAlignment }
									onChange={ ( value ) =>
										setAttributes( {
											iconAlignment: value,
										} )
									}
									options={ FLEX_ALIGN_OPTIONS }
								/>
							) }
							<TabPanelControl
								normalComponents={
									<>
										<ColorControl
											label={ __(
												'Background',
												'zolo-blocks'
											) }
											color={ iconBackgroundColor }
											onChange={ ( value ) =>
												setAttributes( {
													iconBackgroundColor: value,
												} )
											}
										/>
										<ColorControl
											label={ __(
												'Color',
												'zolo-blocks'
											) }
											color={ iconColor }
											onChange={ ( value ) =>
												setAttributes( {
													iconColor: value,
												} )
											}
										/>
										<BoxShadowControl
											controlName={ ICON_BOX_SHADOW }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>
									</>
								}
								hoverComponents={
									<>
										<ColorControl
											label={ __(
												'Background',
												'zolo-blocks'
											) }
											color={ iconBackgroundHoverColor }
											onChange={ ( value ) =>
												setAttributes( {
													iconBackgroundHoverColor:
														value,
												} )
											}
										/>
										<ColorControl
											label={ __(
												'Color',
												'zolo-blocks'
											) }
											color={ iconHoverColor }
											onChange={ ( value ) =>
												setAttributes( {
													iconHoverColor: value,
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
											enableTransition={ false }
										/>
									</>
								}
							/>
							<CardDivider />
							<BorderControl
								label={ __( 'Border', 'zolo-blocks' ) }
								controlName={ ICON_BORDER }
								resRequiredProps={ resRequiredProps }
							/>
							<ResDimensionsControl
								label={ __( 'Border Radius', 'zolo-blocks' ) }
								controlName={ ICON_BORDER_RADIUS }
								resRequiredProps={ resRequiredProps }
								forBorderRadius={ true }
							/>
							<ResDimensionsControl
								label={ __( 'Margin', 'zolo-blocks' ) }
								controlName={ ICON_MARGIN }
								resRequiredProps={ resRequiredProps }
							/>
							<ResDimensionsControl
								label={ __( 'Padding', 'zolo-blocks' ) }
								controlName={ ICON_PADDING }
								resRequiredProps={ resRequiredProps }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Heading', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							<TypographyDropdown
								label={ __( 'Typography', 'zolo-blocks' ) }
								typoPrefixConstant={ TITLE_TYPOGRAPHY }
								resRequiredProps={ resRequiredProps }
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
													textColor: value,
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
													textHoverColor: value,
												} )
											}
										/>
									</>
								}
							/>
							<CardDivider />
							<ResDimensionsControl
								label={ __( 'Margin', 'zolo-blocks' ) }
								controlName={ TITLE_MARGIN }
								resRequiredProps={ resRequiredProps }
							/>
							<TextShadowControl
								controlName={ TITLE_TEXT_SHADOW }
								resRequiredProps={ resRequiredProps }
								enableTransition={ false }
							/>

							<TextStrokeControl
								controlName={ TITLE_TEXT_STROKE }
								resRequiredProps={ resRequiredProps }
								enableTransition={ false }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Description', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							<TypographyDropdown
								label={ __( 'Typography', 'zolo-blocks' ) }
								typoPrefixConstant={ DESCRIPTION_TYPOGRAPHY }
								resRequiredProps={ resRequiredProps }
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
													descColor: value,
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
													descHoverColor: value,
												} )
											}
										/>
									</>
								}
							/>
							<ResDimensionsControl
								label={ __( 'Margin', 'zolo-blocks' ) }
								controlName={ DESCRIPTION_MARGIN }
								resRequiredProps={ resRequiredProps }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Button', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							<TypographyDropdown
								label={ __( 'Typography', 'zolo-blocks' ) }
								typoPrefixConstant={ BUTTON_TYPOGRAPHY }
								resRequiredProps={ resRequiredProps }
							/>
							{ preset === 'style-1' && (
								<IconicBtnGroup
									label={ __( 'Position', 'zolo-blocks' ) }
									value={ presetOneStyles.iconPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetOneStyles: {
												...presetOneStyles,
												iconPosition: value,
											},
										} )
									}
									options={ POSITIONS }
								/>
							) }
							{ preset === 'style-2' && (
								<IconicBtnGroup
									label={ __( 'Position', 'zolo-blocks' ) }
									value={ presetTwoStyles.iconPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetTwoStyles: {
												...presetTwoStyles,
												iconPosition: value,
											},
										} )
									}
									options={ POSITIONS }
								/>
							) }
							{ preset === 'style-3' && (
								<IconicBtnGroup
									label={ __( 'Position', 'zolo-blocks' ) }
									value={ presetThreeStyles.iconPosition }
									onChange={ ( value ) =>
										setAttributes( {
											presetThreeStyles: {
												...presetThreeStyles,
												iconPosition: value,
											},
										} )
									}
									options={ POSITIONS }
								/>
							) }
							<TabPanelControl
								normalComponents={
									<>
										<ColorControl
											label={ __(
												'Background',
												'zolo-blocks'
											) }
											color={ btnBgColor }
											onChange={ ( value ) =>
												setAttributes( {
													btnBgColor: value,
												} )
											}
										/>
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
											controlName={ BUTTON_BOX_SHADOW }
											resRequiredProps={
												resRequiredProps
											}
											enableTransition={ false }
										/>
									</>
								}
								hoverComponents={
									<>
										<ColorControl
											label={ __(
												'Background',
												'zolo-blocks'
											) }
											color={ btnBgHoverColor }
											onChange={ ( value ) =>
												setAttributes( {
													btnBgHoverColor: value,
												} )
											}
										/>
										<ColorControl
											label={ __(
												'Color',
												'zolo-blocks'
											) }
											color={ btnHoverColor }
											onChange={ ( value ) =>
												setAttributes( {
													btnHoverColor: value,
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
											enableTransition={ false }
										/>
									</>
								}
							/>
							<CardDivider />
							<BorderControl
								label={ __( 'Border', 'zolo-blocks' ) }
								controlName={ BUTTON_BORDER }
								resRequiredProps={ resRequiredProps }
							/>
							<ResDimensionsControl
								label={ __( 'Border Radius', 'zolo-blocks' ) }
								controlName={ BUTTON_BORDER_RADIUS }
								resRequiredProps={ resRequiredProps }
								forBorderRadius={ true }
							/>
							<ResDimensionsControl
								label={ __( 'Margin', 'zolo-blocks' ) }
								controlName={ BUTTON_MARGIN }
								resRequiredProps={ resRequiredProps }
							/>
							<ResDimensionsControl
								label={ __( 'Padding', 'zolo-blocks' ) }
								controlName={ BUTTON_PADDING }
								resRequiredProps={ resRequiredProps }
							/>
						</PanelBody>
					</>
				}
				advancedTab={
					<>
						<PanelBody
							title={ __( 'General', 'zolo-blocks' ) }
							initialOpen={ false }
						>
							<p>Extra Options</p>
						</PanelBody>
					</>
				}
			/>
		</InspectorControls>
	);
}

export default Inspector;
