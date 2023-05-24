/**
 * Internal depencencies
 */
const { ResRangeControl, IconPicker } = window.zoloModule;
/**
 * WordPress depencencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	CardDivider,
	FlexItem,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import objAttributes from './attributes';
import { controls } from '@wordpress/data';
import { set } from 'lodash';
import {
	PRESETS,
	SOCIAL_TEXT,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_HEIGHT,
} from './constants';

import { useEffect } from 'react';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		socialText,
		socialProfiles,
		socialProfilesLinkTarget,
		socialStyle,
		socialProfileColumns,
	} = attributes;
	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};

	//social profile icon set
	const setProfileIcon = ( value, index ) => {
		let profile = [ ...socialProfiles ];
		profile[ index ] = {
			...profile[ index ],
			icon: { ...value },
		};
		setAttributes( { socialProfiles: [ ...profile ] } );
	};

	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'Content',
							title: 'Content',
							className: 'zolo-tab Content',
						},
						{
							name: 'Style',
							title: 'Style',
							className: 'zolo-tab Style',
						},
						{
							name: 'Advanced',
							title: 'Advanced',
							className: 'zolo-tab advanced',
						},
					] }
				>
					{ ( tab ) => (
						<div className={ 'zolo-tab--control' + tab.name }>
							{ tab.name === 'Content' && (
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
										title={ __(
											'Settings',
											'zolo-blocks'
										) }
										initialOpen={ false }
									>
										<SelectControl
											label={ __(
												'Social Icon Type',
												'zolo-blocks'
											) }
											value={ socialText }
											options={ SOCIAL_TEXT }
											onChange={ ( iconType ) =>
												setAttributes( {
													socialText: iconType,
												} )
											}
										/>

										<SelectControl
											label={ __(
												'columns',
												'zolo-blocks'
											) }
											value={ socialProfileColumns }
											options={ [
												{
													label: 'Auto',
													value: '5',
												},
												{ label: '1', value: '1' },
												{ label: '2', value: '2' },
												{ label: '3', value: '3' },
												{ label: '4', value: '4' },
												{ label: '5', value: '5' },
												{ label: '6', value: '6' },
											] }
											onChange={ ( size ) => {
												setAttributes( {
													socialProfileColumns: size,
												} );
											} }
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
											min={ 0 }
											max={ 100 }
											step={ 1 }
										/>

										<ResRangeControl
											label={ __(
												'Row Gap',
												'zolo-blocks'
											) }
											controlName={ ROW_GAP }
											resRequiredProps={
												resRequiredProps
											}
											min={ 0 }
											max={ 100 }
											step={ 1 }
										/>
									</PanelBody>
									<PanelBody
										title={ __(
											'Social Profiles',
											'zolo-blocks'
										) }
										initialOpen={ false }
									>
										<Button
											variant="primary"
											onClick={ () =>
												setAttributes( {
													socialProfiles: [
														...socialProfiles,
														{
															icon: {
																facebook: {
																	name: 'facebook',
																	source: 'dashicon',
																	type: '',
																},
															},
															link: '#',
															text: 'Facebook',
														},
													],
												} )
											}
										>
											{ __(
												'Add a Profile',
												'zolo-blocks'
											) }
										</Button>
										{ socialProfiles &&
											socialProfiles.map(
												( profile, index ) => {
													return (
														<div
															className="zolo-social-profile"
															key={ index }
														>
															<IconPicker
																value={
																	profile.icon
																}
																onChange={ (
																	value
																) =>
																	setProfileIcon(
																		value,
																		index
																	)
																}
																showHeading={
																	false
																}
															/>
															<div className="profile-text">
																<TextControl
																	value={
																		profile.text
																	}
																	onChange={ (
																		v
																	) =>
																		setAttributes(
																			{
																				socialProfiles:
																					socialProfiles.map(
																						(
																							profile,
																							i
																						) => {
																							if (
																								index ===
																								i
																							) {
																								profile.text =
																									v;
																							}
																							return profile;
																						}
																					),
																			}
																		)
																	}
																/>
															</div>
															<div className="profile-link">
																<TextControl
																	value={
																		profile.link
																	}
																	onChange={ (
																		v
																	) =>
																		setAttributes(
																			{
																				socialProfiles:
																					socialProfiles.map(
																						(
																							profile,
																							i
																						) => {
																							if (
																								index ===
																								i
																							) {
																								profile.link =
																									v;
																							}
																							return profile;
																						}
																					),
																			}
																		)
																	}
																/>
															</div>
															<Button
																className="remove-profile"
																onClick={ () =>
																	setAttributes(
																		{
																			socialProfiles:
																				socialProfiles.filter(
																					(
																						profile,
																						i
																					) =>
																						index !==
																						i
																				),
																		}
																	)
																}
															>
																<i className="fas fa-times"></i>
															</Button>
														</div>
													);
												}
											) }
										<CardDivider />
										<ToggleControl
											label={ __(
												'Open links in new tab',
												'zolo-blocks'
											) }
											checked={ socialProfilesLinkTarget }
											onChange={ () =>
												setAttributes( {
													socialProfilesLinkTarget:
														! socialProfilesLinkTarget,
												} )
											}
										/>
									</PanelBody>
								</>
							) }

							{ tab.name === 'Style' && (
								<>
									<PanelBody initialOpen={ true }>
										{ preset === 'preset-1' && (
											<SelectControl
												label={ __(
													'Style',
													'zolo-blocks'
												) }
												value={ socialStyle }
												options={ [
													{
														label: 'Default',
														value: 'default',
													},
													{
														label: 'Flat',
														value: 'Flat',
													},
													{
														label: 'Framed',
														value: 'Framed',
													},
													{
														label: 'Gradiant',
														value: 'Gradiant',
													},
													{
														label: 'Minimal',
														value: 'Minimal',
													},
													{
														label: 'Boxed Icon',
														value: 'Boxed Icon',
													},
												] }
												onChange={ ( style ) => {
													setAttributes( {
														socialStyle: style,
													} );
												} }
											/>
										) }

										<ResRangeControl
											label={ __(
												'Button Size',
												'zolo-blocks'
											) }
											controlName={ BUTTON_SIZE }
											resRequiredProps={
												resRequiredProps
											}
											min={ 0 }
											max={ 100 }
											step={ 1 }
										/>

										<ResRangeControl
											label={ __(
												'Button Icon Size',
												'zolo-blocks'
											) }
											controlName={ BUTTON_ICON_SIZE }
											resRequiredProps={
												resRequiredProps
											}
											min={ 0 }
											max={ 100 }
											step={ 1 }
										/>

										<ResRangeControl
											label={ __(
												'Button Height',
												'zolo-blocks'
											) }
											controlName={ BUTTON_HEIGHT }
											resRequiredProps={
												resRequiredProps
											}
											min={ 0 }
											max={ 100 }
											step={ 1 }
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
