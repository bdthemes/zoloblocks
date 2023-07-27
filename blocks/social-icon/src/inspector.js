/**
 * Internal depencencies
 */

const {
	ResRangeControl,
	ColorControl,
	TabPanelControl,
	IconPicker,
	HeaderTabs,
	SortableControl,
	SortableItem,
	LinkControl,
	IconicBtnGroup,
	ResCounterControl,
} = window.zoloModule;

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';

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

import objAttributes from './attributes';

import {
	PRESETS,
	SOCIAL_TEXT,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_HEIGHT,
	SOCIAL_ICON_COLOR,
} from './constants';

import { ICON_STATUS } from '../../../src/global/constants';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		socialText,
		socialProfiles,
		socialProfilesLinkTarget,
		socialStyle,
		socialColor,
		socialTextColor,
		socialTextHoverColor,
		socialBgColor,
		socialBgHoverColor,
		iconColor,
		iconHoverColor,
		socialProfileColumns,
	} = attributes;

	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};

	//social profile icon set
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
								onChange={(value) =>
									setAttributes({
										preset: value,
									})
								}
							/>
							{preset !== 'preset-2' && preset !== 'preset-5' && (
								<IconicBtnGroup
									label={__('Type', 'zolo-blocks')}
									value={socialText}
									onChange={(value) =>
										setAttributes({
											socialText: value,
										})
									}
									options={ICON_STATUS}
								/>
							)}
						</PanelBody>
						<PanelBody
							title={__('Column Settings', 'zolo-blocks')}
							initialOpen={false}
						>
							<ResCounterControl
								label={__('Column Number', 'zolo-blocks')}
								controlName={COLUMN_COUNT}
								resRequiredProps={resRequiredProps}
								min={1}
								max={5}
							/>

							<ResRangeControl
								label={__('Columns Gap', 'zolo-blocks')}
								controlName={COLUMNS_GAP}
								resRequiredProps={resRequiredProps}
								min={0}
								max={100}
								step={1}
							/>

							<ResRangeControl
								label={__('Row Gap', 'zolo-blocks')}
								controlName={ROW_GAP}
								resRequiredProps={resRequiredProps}
								min={0}
								max={100}
								step={1}
							/>
						</PanelBody>
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
													text: 'Facebook',
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
														setAttributes({
															socialProfiles:
																socialProfiles.filter(
																	(
																		profile,
																		i
																	) =>
																		index !==
																		i
																),
														});
													}}
												/>
												<SortableItem
													key={profile.id}
													id={profile.id}
												>
													<PanelBody
														title={
															profile.text ||
															'Title'
														}
														initialOpen={false}
													>
														<TextControl
															label={__(
																'Title',
																'zolo-blocks'
															)}
															value={profile.text}
															onChange={(v) =>
																setAttributes({
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
																})
															}
														/>
														<IconPicker
															value={profile.icon}
															onChange={(value) =>
																setProfileIcon(
																	value,
																	index
																)
															}
															showHeading={false}
														/>

														<LinkControl
															label={__(
																'Link',
																'zolo-blocks'
															)}
															value={profile.link}
															onChange={(
																value
															) => {
																const newItems =
																	[
																		...socialProfiles,
																	];
																newItems[
																	index
																].link = value;
																setAttributes({
																	socialProfiles:
																		newItems,
																});
															}}
														/>
													</PanelBody>
												</SortableItem>
											</div>
										);
									})}
							</SortableControl>
						</PanelBody>
					</>
				}
				styleTab={
					<>
						<PanelBody initialOpen={true}>
							{preset !== 'preset-2' && (
								<ResRangeControl
									label={__('Button Size', 'zolo-blocks')}
									controlName={BUTTON_SIZE}
									resRequiredProps={resRequiredProps}
									min={0}
									max={100}
									step={1}
								/>
							)}
							<ResRangeControl
								label={__('Button Icon Size', 'zolo-blocks')}
								controlName={BUTTON_ICON_SIZE}
								resRequiredProps={resRequiredProps}
								min={0}
								max={100}
								step={1}
							/>
							<ResRangeControl
								label={__('Button Height', 'zolo-blocks')}
								controlName={BUTTON_HEIGHT}
								resRequiredProps={resRequiredProps}
								min={0}
								max={100}
								step={1}
							/>
							<SelectControl
								label={__('Social Color', 'zolo-blocks')}
								value={socialColor}
								options={SOCIAL_ICON_COLOR}
								onChange={(iconType) =>
									setAttributes({
										socialColor: iconType,
									})
								}
							/>

							{socialColor === 'custom' && (
								<>
									<TabPanelControl
										normalComponents={
											<>
												<ColorControl
													label={__(
														'Color',
														'zolo-blocks'
													)}
													color={socialTextColor}
													onChange={(value) =>
														setAttributes({
															socialTextColor:
																value,
														})
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
													color={socialTextHoverColor}
													onChange={(value) =>
														setAttributes({
															socialTextHoverColor:
																value,
														})
													}
												/>
											</>
										}
									/>
									<TabPanelControl
										normalComponents={
											<>
												<ColorControl
													label={__(
														'Background',
														'zolo-blocks'
													)}
													color={socialBgColor}
													onChange={(value) =>
														setAttributes({
															socialBgColor:
																value,
														})
													}
												/>
											</>
										}
										hoverComponents={
											<>
												<ColorControl
													label={__(
														'Background',
														'zolo-blocks'
													)}
													color={socialBgHoverColor}
													onChange={(value) =>
														setAttributes({
															socialBgHoverColor:
																value,
														})
													}
												/>
											</>
										}
									/>
								</>
							)}
						</PanelBody>
					</>
				}
				advancedTab={<>{/* Advanced Tab */}</>}
			/>
		</InspectorControls>
	);
}

export default Inspector;
