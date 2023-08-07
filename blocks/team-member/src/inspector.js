/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	BaseControl,
	Button,
	RangeControl,
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
	NormalBGControl,
	BoxShadowControl,
	ImageAvatar,
	IconPicker,
	TabPanelControl,
	HeaderTabs,
	LinkControl,
	SortableItem,
	SortableControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	CONTAINER_BG,
	CONTENT_BG,
	CONTENT_ALIGNMENT,
	CONTENT_PADDING,
	CONTENT_MARGIN,
	CONTENT_BORDER,
	CONTENT_BORDER_RADIUS,
	CONTENT_BOX_SHADOW,
	PHOTO_BG,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_NAME_MARGIN,
	TEAM_DESIGNATION_MARGIN,
	TEAM_SHORT_BIO_MARGIN,
	ICONS_BG,
	ICONS_HOVER_BG,
	ICONS_SIZE,
	ICONS_SPACING,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_BOX_SHADOW,
	ICONS_HOVER_BOX_SHADOW,
	DETAIL_PAGE_LINK_BG,
	DETAIL_PAGE_LINK_HOVER_BG,
	DPL_HEIGHT,
	DPL_WIDTH,
	DPL_BORDER,
	DPL_BORDER_RADIUS,
	DPL_PADDING,
	DPL_MARGIN,
	DPL_ICON_SIZE,
	TEAM_MEMBER_CONTAINER_PADDING,
	TEAM_MEMBER_CONTAINER_MARGIN,
} from './constants';

import {
	TEAM_MEMBER_NAME_TYPOGRAPHY,
	TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
	TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';
import { add } from 'lodash';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resMode,
		preset,
		blurBgColor,
		blurBgOpacity,
		memberPhoto,
		memberName,
		showDesignation,
		memberDesignation,
		addDetailPageLink,
		showDetailPageIcon,
		memberDetailPageLink,
		showSocialProfiles,
		socialProfiles,
		showShortBio,
		memberShortBio,
		nameColor,
		nameLinkColor,
		nameHoverColor,
		designationColor,
		shortBioColor,
		separatorColor,
		iconColor,
		iconHoverColor,
		iconHoverBorderColor,
		detailPageIconColor,
		detailPageIconHoverColor,
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
					showDetailPageIcon: true,
					showDesignation: true,
					addDetailPageLink: true,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'left',
				});
				break;
			case 'style-1':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					showDetailPageIcon: false,
					showDesignation: false,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'center',
				});
				break;
			case 'style-2':
				setAttributes({
					showShortBio: true,
					showSocialProfiles: true,
					showDetailPageIcon: false,
					showDesignation: true,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'left',
				});
				break;
			case 'style-3':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					showDetailPageIcon: true,
					showDesignation: true,
					[`${CONTENT_ALIGNMENT}ZRPAlign`]: 'left',
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

	console.log(socialProfiles);

	return (
		<InspectorControls key="controls">
			<HeaderTabs
				generalTab={
					<>
						<PanelBody
							title={__('General', 'zolo-blocks')}
							initialOpen={true}
						>
							<SelectControl
								label={__('Preset Designs', 'zolo-blocks')}
								value={preset}
								options={PRESETS}
								onChange={(selected) => changePremade(selected)}
							/>
							<ToggleControl
								label={__(
									'Add Detail Page Link',
									'zolo-blocks'
								)}
								checked={addDetailPageLink}
								onChange={() =>
									setAttributes({
										addDetailPageLink: !addDetailPageLink,
									})
								}
							/>
							{addDetailPageLink && (
								<ToggleControl
									label={__(
										'Show Detail Page Link Icon',
										'zolo-blocks'
									)}
									checked={showDetailPageIcon}
									onChange={() =>
										setAttributes({
											showDetailPageIcon:
												!showDetailPageIcon,
										})
									}
								/>
							)}

							{preset !== 'style-1' && preset !== 'style-3' && (
								<ToggleControl
									label={__('Show Short Bio', 'zolo-blocks')}
									checked={showShortBio}
									onChange={() =>
										setAttributes({
											showShortBio: !showShortBio,
										})
									}
								/>
							)}
							<ToggleControl
								label={__('Show Designation', 'zolo-blocks')}
								checked={showDesignation}
								onChange={() =>
									setAttributes({
										showDesignation: !showDesignation,
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
										showSocialProfiles: !showSocialProfiles,
									})
								}
							/>
						</PanelBody>
						<PanelBody
							title={__('Content', 'zolo-blocks')}
							initialOpen={false}
						>
							<BaseControl label={__('Photo', 'zolo-blocks')}>
								{memberPhoto ? (
									<ImageAvatar
										imageUrl={
											memberPhoto && memberPhoto.url
										}
										onDeleteImage={() =>
											setAttributes({
												memberPhoto: null,
											})
										}
										imageId={memberPhoto && memberPhoto.id}
										onEditImage={(url, id) => {
											setAttributes({
												memberPhoto: {
													url,
													id,
												},
											});
										}}
									/>
								) : (
									<MediaUpload
										onSelect={(media) => {
											setAttributes({
												memberPhoto: media,
											});
										}}
										allowedTypes={['image']}
										value={memberPhoto && memberPhoto.id}
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
								placeholder={__('Name..', 'zolo-blocks')}
							/>
							{showDesignation && (
								<TextControl
									label={__('Designation', 'zolo-blocks')}
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
							{showShortBio &&
								preset !== 'style-1' &&
								preset !== 'style-3' && (
									<TextareaControl
										label={__('Short Bio', 'zolo-blocks')}
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
							{addDetailPageLink && (
								<LinkControl
									label={__(
										'Detail Page Link',
										'zolo-blocks'
									)}
									value={memberDetailPageLink}
									onChange={(link) =>
										setAttributes({
											memberDetailPageLink: link,
										})
									}
								/>
							)}
						</PanelBody>
						{showSocialProfiles && (
							<PanelBody
								title={__('Social Profiles', 'zolo-blocks')}
								initialOpen={false}
							>
								<div className="zb-repeater-flex">
									<div className="repeater-label">
										{__('Add a Profile', 'zolo-blocks')}
									</div>
									<Button
										onClick={() =>
											setAttributes({
												socialProfiles: [
													...socialProfiles,
													{
														id:
															socialProfiles.length +
															1,
														title: 'Facebook',
														icon: {
															facebook: {
																name: 'facebook',
																source: 'dashicon',
																type: '',
															},
														},
														link: {
															url: '#',
															openInNewTab: false,
														},
													},
												],
											})
										}
									>
										<svg
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 8V16"
												stroke="#4D4D4D"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
											<path
												d="M16 12H8"
												stroke="#4D4D4D"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
										</svg>
									</Button>
								</div>
								<SortableControl
									defaultItems={socialProfiles}
									attributeName="socialProfiles"
									setAttributes={setAttributes}
								>
									{socialProfiles &&
										socialProfiles.map((profile, index) => {
											return (
												<div
													className="dnd-container"
													key={index}
												>
													<Button
														className="dnd-trash"
														icon="trash"
														onClick={() => {
															const newItems = [
																...socialProfiles,
															];
															newItems.splice(
																index,
																1
															);
															setAttributes({
																socialProfiles:
																	newItems,
															});
														}}
													/>

													<SortableItem
														key={profile.id}
														id={profile.id}
													>
														<PanelBody
															title={
																profile.title ||
																'Title'
															}
															initialOpen={false}
														>
															<TextControl
																label={__(
																	'Title',
																	'zolo-blocks'
																)}
																value={
																	profile.title
																}
																onChange={(
																	value
																) => {
																	const newItems =
																		[
																			...socialProfiles,
																		];
																	newItems[
																		index
																	].title =
																		value;
																	setAttributes(
																		{
																			socialProfiles:
																				newItems,
																		}
																	);
																}}
															/>
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
															<LinkControl
																label={__(
																	'Link',
																	'zolo-blocks'
																)}
																value={
																	profile.link
																}
																onChange={(
																	value
																) => {
																	const newItems =
																		[
																			...socialProfiles,
																		];
																	newItems[
																		index
																	].link =
																		value;
																	setAttributes(
																		{
																			socialProfiles:
																				newItems,
																		}
																	);
																}}
															/>
														</PanelBody>
													</SortableItem>
												</div>
											);
										})}
								</SortableControl>
							</PanelBody>
						)}
					</>
				}
				styleTab={
					<>
						{preset === 'style-2' && (
							<PanelBody
								title={__('Preset Style', 'zolo-blocks')}
								initialOpen={false}
							>
								<ColorControl
									label={__('Blur Color', 'zolo-blocks')}
									color={blurBgColor}
									onChange={(color) =>
										setAttributes({ blurBgColor: color })
									}
								/>
								<RangeControl
									label={__('Blur Strength', 'zolo-blocks')}
									value={blurBgOpacity}
									onChange={(v) =>
										setAttributes({ blurBgOpacity: v })
									}
									min={0}
									max={100}
								/>
							</PanelBody>
						)}
						<PanelBody
							title={__('Container', 'zolo-blocks')}
							initialOpen={false}
						>
							<NormalBGControl
								resRequiredProps={resRequiredProps}
								controlName={CONTAINER_BG}
								noMainBGImg={false}
							/>
						</PanelBody>
						<PanelBody
							title={__('Content', 'zolo-blocks')}
							initialOpen={false}
						>
							{preset !== 'style-3' && (
								<ResAlignmentControl
									label={__(
										'Content Alignmet',
										'zolo-blocks'
									)}
									controlName={CONTENT_ALIGNMENT}
									resRequiredProps={resRequiredProps}
									alignOptions={TEXT_ALIGN_OPTIONS}
								/>
							)}
							<BorderControl
								label={__('Border', 'zolo-blocks')}
								controlName={CONTENT_BORDER}
								resRequiredProps={resRequiredProps}
							/>
							<ResDimensionsControl
								label={__('Border Radius', 'zolo-blocks')}
								controlName={CONTENT_BORDER_RADIUS}
								resRequiredProps={resRequiredProps}
								forBorderRadius={true}
							/>
							<BoxShadowControl
								controlName={CONTENT_BOX_SHADOW}
								resRequiredProps={resRequiredProps}
								enableTransition={false}
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
							<NormalBGControl
								resRequiredProps={resRequiredProps}
								controlName={CONTENT_BG}
								noMainBGImg={false}
							/>
						</PanelBody>
						<PanelBody
							title={__('Photo', 'zolo-blocks')}
							initialOpen={false}
						>
							<NormalBGControl
								resRequiredProps={resRequiredProps}
								controlName={PHOTO_BG}
								noMainBGImg={true}
							/>
							<BorderControl
								label={__('Border', 'zolo-blocks')}
								controlName={TEAM_PHOTO_BORDER}
								resRequiredProps={resRequiredProps}
							/>
							<ResDimensionsControl
								label={__('Border Radius', 'zolo-blocks')}
								controlName={TEAM_PHOTO_BORDER_RADIUS}
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
								forBorderRadius={false}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={TEAM_PHOTO_MARGIN}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
						</PanelBody>
						<PanelBody
							title={__('Name', 'zolo-blocks')}
							initialOpen={false}
						>
							<TypographyDropdown
								label={__('Typography', 'zolo-blocks')}
								typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
								resRequiredProps={resRequiredProps}
							/>
							{!addDetailPageLink && (
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={nameColor}
									onChange={(color) =>
										setAttributes({
											nameColor: color,
										})
									}
								/>
							)}
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={TEAM_NAME_MARGIN}
								resRequiredProps={resRequiredProps}
							/>
							{addDetailPageLink && (
								<TabPanelControl
									normalComponents={
										<>
											<ColorControl
												label={__(
													'Link Color',
													'zolo-blocks'
												)}
												color={nameLinkColor}
												onChange={(color) =>
													setAttributes({
														nameLinkColor: color,
													})
												}
											/>
										</>
									}
									hoverComponents={
										<>
											<ColorControl
												label={__(
													'Link Hover Color',
													'zolo-blocks'
												)}
												color={nameHoverColor}
												onChange={(color) =>
													setAttributes({
														nameHoverColor: color,
													})
												}
											/>
										</>
									}
								/>
							)}
						</PanelBody>
						{showDesignation && (
							<PanelBody
								title={__('Designation', 'zolo-blocks')}
								initialOpen={false}
							>
								<TypographyDropdown
									label={__('Typography', 'zolo-blocks')}
									typoPrefixConstant={
										TEAM_MEMBER_DESIGNATION_TYPOGRAPHY
									}
									resRequiredProps={resRequiredProps}
								/>
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={designationColor}
									onChange={(color) =>
										setAttributes({
											designationColor: color,
										})
									}
								/>
								<ResDimensionsControl
									label={__('Margin', 'zolo-blocks')}
									controlName={TEAM_DESIGNATION_MARGIN}
									resRequiredProps={resRequiredProps}
								/>
							</PanelBody>
						)}
						{showShortBio && (
							<PanelBody
								title={__('Short Bio', 'zolo-blocks')}
								initialOpen={false}
							>
								<TypographyDropdown
									label={__('Typography', 'zolo-blocks')}
									typoPrefixConstant={
										TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY
									}
									resRequiredProps={resRequiredProps}
								/>
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={shortBioColor}
									onChange={(color) =>
										setAttributes({
											shortBioColor: color,
										})
									}
								/>
								<ResDimensionsControl
									label={__('Margin', 'zolo-blocks')}
									controlName={TEAM_SHORT_BIO_MARGIN}
									resRequiredProps={resRequiredProps}
								/>
							</PanelBody>
						)}
						{showSocialProfiles && (
							<PanelBody
								title={__('Social Profiles', 'zolo-blocks')}
								initialOpen={false}
							>
								<ResRangeControl
									label={__('Icon Size', 'zolo-blocks')}
									controlName={ICONS_SIZE}
									resRequiredProps={resRequiredProps}
								/>
								<ResRangeControl
									label={__('Icon Spacing', 'zolo-blocks')}
									controlName={ICONS_SPACING}
									resRequiredProps={resRequiredProps}
								/>
								{preset === 'default' && (
									<ColorControl
										label={__(
											'Separator Color',
											'zolo-blocks'
										)}
										color={separatorColor}
										onChange={(color) =>
											setAttributes({
												separatorColor: color,
											})
										}
									/>
								)}
								<BorderControl
									label={__('Border', 'zolo-blocks')}
									controlName={ICONS_BORDER}
									resRequiredProps={resRequiredProps}
								/>
								<ResDimensionsControl
									label={__('Border Radius', 'zolo-blocks')}
									controlName={ICONS_BORDER_RADIUS}
									resRequiredProps={resRequiredProps}
								/>
								<ResDimensionsControl
									label={__('Padding', 'zolo-blocks')}
									controlName={ICONS_PADDING}
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
												color={iconColor}
												onChange={(color) =>
													setAttributes({
														iconColor: color,
													})
												}
											/>
											<NormalBGControl
												resRequiredProps={
													resRequiredProps
												}
												controlName={ICONS_BG}
												noMainBGImg={true}
											/>
											<BoxShadowControl
												controlName={ICONS_BOX_SHADOW}
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
												color={iconHoverColor}
												onChange={(color) =>
													setAttributes({
														iconHoverColor: color,
													})
												}
											/>

											<NormalBGControl
												resRequiredProps={
													resRequiredProps
												}
												controlName={ICONS_HOVER_BG}
												noMainBGImg={true}
											/>
											<ColorControl
												label={__(
													'Border Color',
													'zolo-blocks'
												)}
												color={iconHoverBorderColor}
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
												enableTransition={false}
											/>
										</>
									}
								/>
							</PanelBody>
						)}
						{showDetailPageIcon && (
							<PanelBody
								title={__('Details Page Link', 'zolo-blocks')}
								initialOpen={false}
							>
								<ResRangeControl
									label={__('Icon Size', 'zolo-blocks')}
									controlName={DPL_ICON_SIZE}
									resRequiredProps={resRequiredProps}
								/>
								<ResRangeControl
									label={__('Height', 'zolo-blocks')}
									controlName={DPL_HEIGHT}
									resRequiredProps={resRequiredProps}
								/>
								<ResRangeControl
									label={__('Width', 'zolo-blocks')}
									controlName={DPL_WIDTH}
									resRequiredProps={resRequiredProps}
								/>
								<BorderControl
									label={__('Border', 'zolo-blocks')}
									controlName={DPL_BORDER}
									resRequiredProps={resRequiredProps}
								/>
								<ResDimensionsControl
									label={__('Border Radius', 'zolo-blocks')}
									controlName={DPL_BORDER_RADIUS}
									resRequiredProps={resRequiredProps}
									forBorderRadius={true}
								/>
								<ResDimensionsControl
									label={__('Padding', 'zolo-blocks')}
									controlName={DPL_PADDING}
									resRequiredProps={resRequiredProps}
								/>
								<ResDimensionsControl
									label={__('Margin', 'zolo-blocks')}
									controlName={DPL_MARGIN}
									resRequiredProps={resRequiredProps}
								/>
								<TabPanelControl
									normalComponents={
										<>
											<ColorControl
												label={__(
													'Icon Color',
													'zolo-blocks'
												)}
												color={detailPageIconColor}
												onChange={(color) =>
													setAttributes({
														detailPageIconColor:
															color,
													})
												}
											/>
											<NormalBGControl
												resRequiredProps={
													resRequiredProps
												}
												controlName={
													DETAIL_PAGE_LINK_BG
												}
												noMainBGImg={true}
											/>
										</>
									}
									hoverComponents={
										<>
											<ColorControl
												label={__(
													'Icon Color',
													'zolo-blocks'
												)}
												color={detailPageIconHoverColor}
												onChange={(color) =>
													setAttributes({
														detailPageIconHoverColor:
															color,
													})
												}
											/>
											<NormalBGControl
												resRequiredProps={
													resRequiredProps
												}
												controlName={
													DETAIL_PAGE_LINK_HOVER_BG
												}
												noMainBGImg={true}
											/>
										</>
									}
								/>
							</PanelBody>
						)}
					</>
				}
				advancedTab={
					<>
						<PanelBody
							title={__('Spacing', 'zolo-blocks')}
							initialOpen={false}
						>
							<ResDimensionsControl
								label={__('Padding', 'zolo-blocks')}
								controlName={TEAM_MEMBER_CONTAINER_PADDING}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={TEAM_MEMBER_CONTAINER_MARGIN}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
						</PanelBody>
					</>
				}
			/>
		</InspectorControls>
	);
}

export default Inspector;
