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
	Dropdown,
	Panel,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
	NormalBGControl,
	BoxShadowControl,
	ImageAvatar,
	IconPicker,
	TabPanelControl,
	GradientControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	CONTAINER_BG,
	HEADER_AREA_BORDER_RADIUS,
	HEADER_AREA_PADDING,
	HEADER_BADGE_BORDER,
	BADGE_BG,
	BADGE_BORDER_RADIUS,
	CONTENT_BORDER_RADIUS,
	CONTENT_BG,
	CONTENT_BORDER,
	CONTENT_PADDING,
	CONTENT_MARGIN,
	PHOTO_SIZE,
	PHOTO_BORDER,
	PHOTO_BORDER_RADIUS,
	NAME_MARGIN,
	USERNAME_MARGIN,
	EMAIL_MARGIN,
	BIO_MARGIN,
	ICONS_BG,
	ICONS_HOVER_BG,
	ICONS_SIZE,
	ICONS_SPACING,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_MARGIN,
	STATUS_MARGIN,
	FBTN_BG,
	FBTN_BORDER,
	FBTN_BOX_SHADOW,
	FBTN_BORDER_RADIUS,
	FBTN_PADDING,
	FBTN_MARGIN,
	FBTN_HOVER_BG,
	FBTN_HOVER_BOX_SHADOW,
} from './constants';

import {
	BADGE_TYPO,
	BIO_TYPO,
	EMAIL_TYPO,
	LABEL_TYPO,
	NUMBER_TYPO,
	PROFILE_NAME,
	PROFILE_USERNAME,
	BTN_TYPO,
} from './constants/typoPrefixConstants';
import { Fragment } from 'react';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resMode,
		preset,
		showBadge,
		badgeText,
		showPhoto,
		photo,
		showName,
		name,
		showUsername,
		username,
		showEmail,
		email,
		showBio,
		bio,
		showStatus,
		statusItems,
		showFollowButton,
		followButtonText,
		followButtonLink,
		showSocialProfiles,
		socialProfiles,
		socialProfilesLinkTarget,
		headerAreaBG,
		badgeColor,
		nameColor,
		usernameColor,
		emailColor,
		bioColor,
		labelColor,
		numberColor,
		btnColor,
		btnHoverColor,
		btnHoverBorderColor,
		iconColor,
		iconHoverColor,
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
					showSocialProfiles: true,
				});
				break;
			case 'style-1':
				setAttributes({
					showSocialProfiles: true,
				});
				break;
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
												'Show Badge',
												'zolo-blocks'
											)}
											checked={showBadge}
											onChange={() =>
												setAttributes({
													showBadge: !showBadge,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Photo',
												'zolo-blocks'
											)}
											checked={showPhoto}
											onChange={() =>
												setAttributes({
													showPhoto: !showPhoto,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Name',
												'zolo-blocks'
											)}
											checked={showName}
											onChange={() =>
												setAttributes({
													showName: !showName,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Username',
												'zolo-blocks'
											)}
											checked={showUsername}
											onChange={() =>
												setAttributes({
													showUsername: !showUsername,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Email',
												'zolo-blocks'
											)}
											checked={showEmail}
											onChange={() =>
												setAttributes({
													showEmail: !showEmail,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Bio',
												'zolo-blocks'
											)}
											checked={showBio}
											onChange={() =>
												setAttributes({
													showBio: !showBio,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Follow Button',
												'zolo-blocks'
											)}
											checked={showFollowButton}
											onChange={() =>
												setAttributes({
													showFollowButton:
														!showFollowButton,
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
										{showBadge && (
											<TextControl
												label={__(
													'Badge Text',
													'zolo-blocks'
												)}
												value={badgeText}
												onChange={(text) =>
													setAttributes({
														badgeText: text,
													})
												}
												placeholder={__(
													'Enter Badge Text',
													'zolo-blocks'
												)}
											/>
										)}
										{showPhoto && (
											<BaseControl
												label={__(
													'Photo',
													'zolo-blocks'
												)}
											>
												{photo ? (
													<ImageAvatar
														imageUrl={
															photo && photo.url
														}
														onDeleteImage={() =>
															setAttributes({
																photo: null,
															})
														}
													/>
												) : (
													<MediaUpload
														onSelect={(media) => {
															setAttributes({
																photo: media,
															});
														}}
														allowedTypes={['image']}
														value={
															photo && photo.id
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
										)}
										{showName && (
											<TextControl
												label={__(
													'Name',
													'zolo-blocks'
												)}
												onChange={(value) =>
													setAttributes({
														name: value,
													})
												}
												value={name}
												placeholder={__(
													'Name..',
													'zolo-blocks'
												)}
											/>
										)}
										{showUsername && (
											<TextControl
												label={__(
													'Username',
													'zolo-blocks'
												)}
												onChange={(value) =>
													setAttributes({
														username: value,
													})
												}
												value={username}
												placeholder={__(
													'Username..',
													'zolo-blocks'
												)}
											/>
										)}
										{showEmail && (
											<TextControl
												label={__(
													'Email',
													'zolo-blocks'
												)}
												onChange={(value) =>
													setAttributes({
														email: value,
													})
												}
												value={email}
												placeholder={__(
													'Email..',
													'zolo-blocks'
												)}
											/>
										)}
										{showBio && (
											<TextareaControl
												label={__('Bio', 'zolo-blocks')}
												value={bio}
												onChange={(value) =>
													setAttributes({
														bio: value,
													})
												}
												placeholder={__(
													'Bio..',
													'zolo-blocks'
												)}
											/>
										)}
										{showStatus && (
											<div className="status-list">
												<BaseControl
													id="profile-card-status"
													label={__(
														'Status',
														'zolo-blocks'
													)}
												/>
												{statusItems &&
													statusItems.map(
														(item, index) => {
															return (
																<div
																	className="single-item"
																	key={index}
																>
																	<TextControl
																		label={
																			__(
																				'Counter Number #',
																				'zolo-blocks'
																			) +
																			(index +
																				1)
																		}
																		value={
																			item &&
																			item.number
																		}
																		onChange={(
																			value
																		) => {
																			let newStatusItems =
																				[
																					...statusItems,
																				];
																			newStatusItems[
																				index
																			].number =
																				value;
																			setAttributes(
																				{
																					statusItems:
																						newStatusItems,
																				}
																			);
																		}}
																		placeholder={__(
																			'Counter Number..',
																			'zolo-blocks'
																		)}
																	/>
																	<TextControl
																		label={
																			__(
																				'Counter Label #',
																				'zolo-blocks'
																			) +
																			(index +
																				1)
																		}
																		value={
																			item &&
																			item.label
																		}
																		onChange={(
																			value
																		) => {
																			let newStatusItems =
																				[
																					...statusItems,
																				];
																			newStatusItems[
																				index
																			].label =
																				value;
																			setAttributes(
																				{
																					statusItems:
																						newStatusItems,
																				}
																			);
																		}}
																		placeholder={__(
																			'Counter Label..',
																			'zolo-blocks'
																		)}
																	/>
																</div>
															);
														}
													)}
											</div>
										)}
										{showFollowButton && (
											<Fragment>
												<TextControl
													label={__(
														'Follow Button Text',
														'zolo-blocks'
													)}
													onChange={(v) =>
														setAttributes({
															followButtonText: v,
														})
													}
													value={followButtonText}
													placeholder={__(
														'Button Text..',
														'zolo-blocks'
													)}
												/>
												<BaseControl
													label={__(
														'Follow Button Link',
														'zolo-blocks'
													)}
												>
													<LinkControl
														searchInputPlaceholder="Search here..."
														value={followButtonLink}
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
																followButtonLink:
																	data,
															})
														}
													/>
												</BaseControl>
											</Fragment>
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
										title={__('Header Area', 'zolo-blocks')}
										initialOpen={false}
									>
										<GradientControl
											label={__(
												'Background',
												'zolo-blocks'
											)}
											value={headerAreaBG}
											onChange={(value) =>
												setAttributes({
													headerAreaBG: value,
												})
											}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={
												HEADER_AREA_BORDER_RADIUS
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<ResRangeControl
											label={__('Padding', 'zolo-blocks')}
											controlName={HEADER_AREA_PADDING}
											resRequiredProps={resRequiredProps}
											min={0}
											max={250}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Header Badge',
											'zolo-blocks'
										)}
										initialOpen={false}
									>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={BADGE_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={HEADER_BADGE_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={BADGE_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={badgeColor}
											onChange={(color) =>
												setAttributes({
													badgeColor: color,
												})
											}
										/>
										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={BADGE_BG}
											noMainBGImg={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Content Area',
											'zolo-blocks'
										)}
										initialOpen={false}
									>
										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={CONTENT_BG}
											noMainBGImg={false}
										/>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={CONTENT_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={CONTENT_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={CONTENT_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={CONTENT_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__('Photo', 'zolo-blocks')}
										initialOpen={false}
									>
										<ResRangeControl
											label={__('Size', 'zolo-blocks')}
											controlName={PHOTO_SIZE}
											resRequiredProps={resRequiredProps}
										/>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={PHOTO_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={PHOTO_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
									</PanelBody>
									<PanelBody
										title={__('Name', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={nameColor}
											onChange={(color) =>
												setAttributes({
													nameColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={PROFILE_NAME}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={NAME_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__('Username', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={usernameColor}
											onChange={(color) =>
												setAttributes({
													usernameColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={
												PROFILE_USERNAME
											}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={USERNAME_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__('Email', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={emailColor}
											onChange={(color) =>
												setAttributes({
													emailColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={EMAIL_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={EMAIL_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__('Bio', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'zolo-blocks')}
											color={bioColor}
											onChange={(color) =>
												setAttributes({
													bioColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={BIO_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={BIO_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__('Status', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Number Color',
												'zolo-blocks'
											)}
											color={numberColor}
											onChange={(color) =>
												setAttributes({
													numberColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Number Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={NUMBER_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<CardDivider />
										<ColorControl
											label={__(
												'Label Color',
												'zolo-blocks'
											)}
											color={labelColor}
											onChange={(color) =>
												setAttributes({
													labelColor: color,
												})
											}
										/>
										<TypographyDropdown
											label={__(
												'Label Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={LABEL_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<CardDivider />
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={STATUS_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Follow Button',
											'zolo-blocks'
										)}
										initialOpen={false}
									>
										<TypographyDropdown
											label={__(
												'Typography',
												'zolo-blocks'
											)}
											typoPrefixConstant={BTN_TYPO}
											resRequiredProps={resRequiredProps}
										/>
										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={__(
															'Color',
															'zolo-blocks'
														)}
														color={btnColor}
														onChange={(color) =>
															setAttributes({
																btnColor: color,
															})
														}
													/>
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={FBTN_BG}
														noMainBGImg={false}
													/>
													<BorderControl
														label={__(
															'Border',
															'zolo-blocks'
														)}
														controlName={
															FBTN_BORDER
														}
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
															FBTN_BORDER_RADIUS
														}
														resRequiredProps={
															resRequiredProps
														}
														forBorderRadius={true}
													/>
													<BoxShadowControl
														controlName={
															FBTN_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={false}
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
														color={btnHoverColor}
														onChange={(color) =>
															setAttributes({
																btnHoverColor:
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
															btnHoverBorderColor
														}
														onChange={(color) =>
															setAttributes({
																btnHoverBorderColor:
																	color,
															})
														}
													/>
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															FBTN_HOVER_BG
														}
														noMainBGImg={false}
													/>
													<BoxShadowControl
														controlName={
															FBTN_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={false}
													/>
												</>
											}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={FBTN_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={FBTN_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
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
											<ResDimensionsControl
												label={__(
													'Margin',
													'zolo-blocks'
												)}
												controlName={ICONS_MARGIN}
												resRequiredProps={
													resRequiredProps
												}
											/>
											<TabPanelControl
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
														<NormalBGControl
															resRequiredProps={
																resRequiredProps
															}
															controlName={
																ICONS_BG
															}
															noMainBGImg={true}
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

														<NormalBGControl
															resRequiredProps={
																resRequiredProps
															}
															controlName={
																ICONS_HOVER_BG
															}
															noMainBGImg={true}
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
													</>
												}
											/>
										</PanelBody>
									)}
								</>
							)}

							{tab.name === 'advanced' && (
								<>
									{/* <PanelBody
										title={__('Spacing', 'zolo-blocks')}
										initialOpen={false}
									>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={
												TEAM_MEMBER_CONTAINER_PADDING
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={
												TEAM_MEMBER_CONTAINER_MARGIN
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody> */}
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
