/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TabPanel } from '@wordpress/components';
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
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_PADDING,
	ICON_MARGIN,
} from './constants';

import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		iconColor,
		iconHoverColor,
		iconBackgroundColor,
		iconBackgroundHoverColor,
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
