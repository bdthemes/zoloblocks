/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	TextareaControl,
	ToggleControl,
	BaseControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { NORMAL_HOVER } from '../../../src/global/constants';

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
	BackgroundControl,
	TabPanelControl,
	BoxShadowControl,
	ImageAvatar,
	IconPicker,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	CONTENT_ALIGNMENT,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_NAME_MARGIN,
	TEAM_DESIGNATION_MARGIN,
	TEAM_SHORT_BIO_MARGIN,
	ICONS_SIZE,
	ICONS_SPACING,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_BOX_SHADOW,
	ICONS_HOVER_BOX_SHADOW,
} from './constants';

import {
	TEAM_MEMBER_NAME_TYPOGRAPHY,
	TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
	TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		resMode,
		preset,
		memberPhoto,
		memberName,
		showDesignation,
		memberDesignation,
		enableMemberDetailsPage,
		memberDetailPageLink,
		showSocialProfiles,
		socialProfiles,
		showShortBio,
		memberShortBio,
		socialProfilesLinkTarget,
		photoBgColor,
		nameColor,
		designationColor,
		shortBioColor,
		iconColor,
		iconHoverColor,
		iconBgColor,
		iconHoverBgColor,
		iconHoverBorderColor,
	} = attributes;

	const resRequiredProps = {
		resMode,
		setAttributes,
		attributes,
		objAttributes,
	};

	/**
	 * Preset
	 */
	const changePremade = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'default':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					enableMemberDetailsPage: true,
					showDesignation: true,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'left',
				});
				break;
			case 'style-1':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					enableMemberDetailsPage: false,
					showDesignation: false,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'center',
				});
			default:
				return false;
		}
	};

	const setProfileIcon = (value, index) => {
		let profile = [...socialProfiles];
		profile[index] = {
			...profile[index],
			icon: { ...value },
		};
		setAttributes({ socialProfiles: [...profile] });
	};

	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="zolo-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'settings',
							title: __('Settings', 'zolo-blocks'),
							className: 'zolo-tab settings',
						},
						{
							name: 'design',
							title: __('Design', 'zolo-blocks'),
							className: 'zolo-tab design',
						},
						{
							name: 'advanced',
							title: __('Advanced', 'zolo-blocks'),
							className: 'zolo-tab advanced',
						},
					]}
				>
					{(tab) => (
						<div className={'zolo-tab-controls' + tab.name}>
							{tab.name === 'settings' && (
								<>
									<PanelBody
										title={__('General', 'zolo-blocks')}
										initialOpen={false}
									>
										<SelectControl
											label={__(
												'Preset Designs',
												'zolo-blocks'
											)}
											value={preset}
											options={PRESETS}
											onChange={(selected) =>
												changePremade(selected)
											}
										/>
										<ToggleControl
											label={__(
												'Show Details Page Link',
												'zolo-blocks'
											)}
											checked={enableMemberDetailsPage}
											onChange={() =>
												setAttributes({
													enableMemberDetailsPage:
														!enableMemberDetailsPage,
												})
											}
										/>
										{preset !== 'style-1' && (
											<ToggleControl
												label={__(
													'Show Short Bio',
													'zolo-blocks'
												)}
												checked={showShortBio}
												onChange={() =>
													setAttributes({
														showShortBio:
															!showShortBio,
													})
												}
											/>
										)}
										<ToggleControl
											label={__(
												'Show Designation',
												'zolo-blocks'
											)}
											checked={showDesignation}
											onChange={() =>
												setAttributes({
													showDesignation:
														!showDesignation,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Social Profiles',
												'zolo-blocks'
											)}
											checked={showSocialProfiles}
											onChange={() =>
												setAttributes({
													showSocialProfiles:
														!showSocialProfiles,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__('Content', 'zolo-blocks')}
										initialOpen={false}
									>
										<BaseControl
											label={__('Photo', 'zolo-blocks')}
										>
											{memberPhoto ? (
												<ImageAvatar
													imageUrl={
														memberPhoto &&
														memberPhoto.url
													}
													onDeleteImage={() =>
														setAttributes({
															memberPhoto: null,
														})
													}
												/>
											) : (
												<MediaUpload
													onSelect={(media) => {
														setAttributes({
															memberPhoto: media,
														});
													}}
													allowedTypes={['image']}
													value={
														memberPhoto &&
														memberPhoto.id
													}
													render={({ open }) => (
														<Button
															className="zolo-image-upload-btn"
															onClick={open}
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
															{__(
																' Upload Photo',
																'zolo-blocks'
															)}
														</Button>
													)}
												/>
											)}
										</BaseControl>
										<TextControl
											label={__('Name', 'zolo-blocks')}
											onChange={(name) =>
												setAttributes({
													memberName: name,
												})
											}
											value={memberName}
											placeholder={__(
												'Name..',
												'zolo-blocks'
											)}
										/>
										{showDesignation && (
											<TextControl
												label={__(
													'Designation',
													'zolo-blocks'
												)}
												onChange={(d) =>
													setAttributes({
														memberDesignation: d,
													})
												}
												value={memberDesignation}
												placeholder={__(
													'Designation..',
													'zolo-blocks'
												)}
											/>
										)}
										{showShortBio && (
											<TextareaControl
												label={__(
													'Short Bio',
													'zolo-blocks'
												)}
												value={memberShortBio}
												onChange={(bio) =>
													setAttributes({
														memberShortBio: bio,
													})
												}
												placeholder={__(
													'Short Bio..',
													'zolo-blocks'
												)}
											/>
										)}
										{enableMemberDetailsPage && (
											<BaseControl
												label={__(
													'Details Page Link',
													'zolo-blocks'
												)}
											>
												<LinkControl
													searchInputPlaceholder="Search here..."
													value={memberDetailPageLink}
													settings={[
														{
															id: 'opensInNewTab',
															title: __(
																'Open in new tab',
																'zolo-blocks'
															),
														},
													]}
													onChange={(data) =>
														setAttributes({
															memberDetailPageLink:
																data,
														})
													}
												/>
											</BaseControl>
										)}
									</PanelBody>
									{showSocialProfiles && (
										<PanelBody
											title={__(
												'Social Profiles',
												'zolo-blocks'
											)}
											initialOpen={false}
										>
											<Button
												variant="primary"
												onClick={() =>
													setAttributes({
														socialProfiles: [
															...socialProfiles,
															{
																icon: '',
																link: '#',
															},
														],
													})
												}
											>
												{__(
													'Add a Profile',
													'zolo-blocks'
												)}
											</Button>
											{socialProfiles &&
												socialProfiles.map(
													(profile, index) => {
														return (
															<div
																className="zolo-social-profile"
																key={index}
															>
																<IconPicker
																	value={
																		profile.icon
																	}
																	onChange={(
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
																<div className="profile-link">
																	<TextControl
																		value={
																			profile.link
																		}
																		onChange={(
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
																	onClick={() =>
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
												)}
											<CardDivider />
											<ToggleControl
												label={__(
													'Open links in new tab',
													'zolo-blocks'
												)}
												checked={
													socialProfilesLinkTarget
												}
												onChange={() =>
													setAttributes({
														socialProfilesLinkTarget:
															!socialProfilesLinkTarget,
													})
												}
											/>
										</PanelBody>
									)}
								</>
							)}

							{tab.name === 'design' && (
								<>
									<PanelBody
										title={__('General', 'zolo-blocks')}
										initialOpen={true}
									>
										<ResAlignmentControl
											label={__(
												'Content Alignmet',
												'zolo-blocks'
											)}
											controlName={CONTENT_ALIGNMENT}
											resRequiredProps={resRequiredProps}
											alignOptions={[
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
											]}
										/>
									</PanelBody>
									<PanelBody
										title={__('Photo', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Background Color',
												'zolo-blocks'
											)}
											color={photoBgColor}
											onChange={(color) =>
												setAttributes({
													photoBgColor: color,
												})
											}
										/>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={TEAM_PHOTO_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={
												TEAM_PHOTO_BORDER_RADIUS
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={TEAM_PHOTO_BOX_SHADOW}
											resRequiredProps={resRequiredProps}
											enableTransition={false}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={TEAM_PHOTO_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={TEAM_PHOTO_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
									</PanelBody>
									<PanelBody
										title={__('Name', 'zolo-blocks')}
										initialOpen={false}
									>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={
												TEAM_MEMBER_NAME_TYPOGRAPHY
											}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={nameColor}
											onChange={(color) =>
												setAttributes({
													nameColor: color,
												})
											}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={TEAM_NAME_MARGIN}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
									{showDesignation && (
										<PanelBody
											title={__(
												'Designation',
												'zolo-blocks'
											)}
											initialOpen={false}
										>
											<TypographyDropdown
												label={__(
													'Typography',
													'zolo-blocks'
												)}
												typoPrefixConstant={
													TEAM_MEMBER_DESIGNATION_TYPOGRAPHY
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<ColorControl
												label={__(
													'Color',
													'zolo-blocks'
												)}
												color={designationColor}
												onChange={(color) =>
													setAttributes({
														designationColor: color,
													})
												}
											/>
											<ResDimensionsControl
												label={__(
													'Margin',
													'zolo-blocks'
												)}
												controlName={
													TEAM_DESIGNATION_MARGIN
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
										</PanelBody>
									)}
									{showShortBio && (
										<PanelBody
											title={__(
												'Short Bio',
												'zolo-blocks'
											)}
											initialOpen={false}
										>
											<TypographyDropdown
												label={__(
													'Typography',
													'zolo-blocks'
												)}
												typoPrefixConstant={
													TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<ColorControl
												label={__(
													'Color',
													'zolo-blocks'
												)}
												color={shortBioColor}
												onChange={(color) =>
													setAttributes({
														shortBioColor: color,
													})
												}
											/>
											<ResDimensionsControl
												label={__(
													'Margin',
													'zolo-blocks'
												)}
												controlName={
													TEAM_SHORT_BIO_MARGIN
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
										</PanelBody>
									)}
									{showSocialProfiles && (
										<PanelBody
											title={__(
												'Social Profiles',
												'zolo-blocks'
											)}
											initialOpen={false}
										>
											<ResRangeControl
												label={__(
													'Icon Size',
													'zolo-blocks'
												)}
												controlName={ICONS_SIZE}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<ResRangeControl
												label={__(
													'Icon Spacing',
													'zolo-blocks'
												)}
												controlName={ICONS_SPACING}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<BorderControl
												label={__(
													'Border',
													'zolo-blocks'
												)}
												controlName={ICONS_BORDER}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<ResDimensionsControl
												label={__(
													'Border Radius',
													'zolo-blocks'
												)}
												controlName={
													ICONS_BORDER_RADIUS
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<ResDimensionsControl
												label={__(
													'Padding',
													'zolo-blocks'
												)}
												controlName={ICONS_PADDING}
												resRequiredProps={
													resRequiredProps
												}
											/>

											<TabPanel
												className="zolo-tab-panel"
												activeClass="active-tab"
												tabs={NORMAL_HOVER.map(
													({ value, label }) => ({
														name: value,
														title: label,
														className: `zolo-tab ${value}`,
													})
												)}
											>
												{(tab) => {
													if ('normal' === tab.name) {
														return (
															<>
																<ColorControl
																	label={__(
																		'Color',
																		'zolo-blocks'
																	)}
																	color={
																		iconColor
																	}
																	onChange={(
																		color
																	) =>
																		setAttributes(
																			{
																				iconColor:
																					color,
																			}
																		)
																	}
																/>
																<ColorControl
																	label={__(
																		'Background',
																		'zolo-blocks'
																	)}
																	color={
																		iconBgColor
																	}
																	onChange={(
																		color
																	) =>
																		setAttributes(
																			{
																				iconBgColor:
																					color,
																			}
																		)
																	}
																/>
																<BoxShadowControl
																	controlName={
																		ICONS_BOX_SHADOW
																	}
																	resRequiredProps={
																		resRequiredProps
																	}
																	enableTransition={
																		false
																	}
																/>
															</>
														);
													} else {
														return (
															<>
																<ColorControl
																	label={__(
																		'Color',
																		'zolo-blocks'
																	)}
																	color={
																		iconHoverColor
																	}
																	onChange={(
																		color
																	) =>
																		setAttributes(
																			{
																				iconHoverColor:
																					color,
																			}
																		)
																	}
																/>

																<ColorControl
																	label={__(
																		'Background',
																		'zolo-blocks'
																	)}
																	color={
																		iconHoverBgColor
																	}
																	onChange={(
																		color
																	) =>
																		setAttributes(
																			{
																				iconHoverBgColor:
																					color,
																			}
																		)
																	}
																/>
																<ColorControl
																	label={__(
																		'Border Color',
																		'zolo-blocks'
																	)}
																	color={
																		iconHoverBorderColor
																	}
																	onChange={(
																		color
																	) =>
																		setAttributes(
																			{
																				iconHoverBorderColor:
																					color,
																			}
																		)
																	}
																/>
																<BoxShadowControl
																	controlName={
																		ICONS_HOVER_BOX_SHADOW
																	}
																	resRequiredProps={
																		resRequiredProps
																	}
																	enableTransition={
																		false
																	}
																/>
															</>
														);
													}
												}}
											</TabPanel>

											{/* <TabPanelControl
												normalComponents={
													<>
														<ColorControl
															label={__(
																'Color',
																'zolo-blocks'
															)}
															color={iconColor}
															onChange={(color) =>
																setAttributes({
																	iconColor:
																		color,
																})
															}
														/>
														<ColorControl
															label={__(
																'Background',
																'zolo-blocks'
															)}
															color={iconBgColor}
															onChange={(color) =>
																setAttributes({
																	iconBgColor:
																		color,
																})
															}
														/>
														<BoxShadowControl
															controlName={
																ICONS_BOX_SHADOW
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
															label={__(
																'Color',
																'zolo-blocks'
															)}
															color={
																iconHoverColor
															}
															onChange={(color) =>
																setAttributes({
																	iconHoverColor:
																		color,
																})
															}
														/>

														<ColorControl
															label={__(
																'Background',
																'zolo-blocks'
															)}
															color={
																iconHoverBgColor
															}
															onChange={(color) =>
																setAttributes({
																	iconHoverBgColor:
																		color,
																})
															}
														/>
														<ColorControl
															label={__(
																'Border Color',
																'zolo-blocks'
															)}
															color={
																iconHoverBorderColor
															}
															onChange={(color) =>
																setAttributes({
																	iconHoverBorderColor:
																		color,
																})
															}
														/>
														<BoxShadowControl
															controlName={
																ICONS_HOVER_BOX_SHADOW
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
											/> */}
										</PanelBody>
									)}
								</>
							)}

							{tab.name === 'advanced' && <>advanced</>}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
