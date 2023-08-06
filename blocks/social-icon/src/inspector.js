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
	ResDimensionsControl,
	BorderControl,
	BoxShadowControl,
	TypographyDropdown,
} = window.zoloModule;

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	TextControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
	PRESETS,
	BUTTON_BORDER,
	BTN_BORDER_RADIUS,
	BUTTON_PADDING,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_SIZE,
	ICON_TEXT_SPACING,
	SOCIAL_ICON_COLOR,
	BLOCK_MARGIN,
	BTN_SHADOW,
	BTN_HOVER_SHADOW,
} from './constants';

import { ICON_STATUS } from '../../../src/global/constants';

import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		preset,
		resMode,
		socialText,
		socialProfiles,
		socialColor,
		socialTextColor,
		socialTextHoverColor,
		socialBgColor,
		socialBgHoverColor,
		borderHoverColor,
		presetBgColor,
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

	/**
	 * Preset
	 */
	const changePremade = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'preset-1':
				setAttributes({
					socialText: 'iconText',
				});
				break;
			case 'preset-2':
				setAttributes({
					socialText: 'iconOnly',
				});
				break;
			case 'preset-3':
				setAttributes({
					socialText: 'iconText',
				});
				break;
			default:
				setAttributes({
					socialText: 'iconText',
				});
				break;
		}
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
								onChange={(value) => changePremade(value)}
							/>
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
								max={6}
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
							<ColorControl
								label={__('Preset Style Color', 'zolo-blocks')}
								color={presetBgColor}
								onChange={(value) =>
									setAttributes({
										presetBgColor: value,
									})
								}
							/>
							<TabPanelControl
								normalComponents={
									<>
										{socialText !== 'none' && (
											<ResRangeControl
												label={__(
													'Size',
													'zolo-blocks'
												)}
												controlName={BUTTON_SIZE}
												resRequiredProps={
													resRequiredProps
												}
												min={0}
												max={100}
												step={1}
											/>
										)}

										{socialText !== 'iconOnly' && (
											<TypographyDropdown
												label={__(
													'Text Typography',
													'zolo-blocks'
												)}
												typoPrefixConstant={
													TEXT_TYPOGRAPHY
												}
												resRequiredProps={
													resRequiredProps
												}
											/>
										)}
										{socialText === 'iconText' && (
											<ResRangeControl
												label={__(
													'Icon-Text Gap',
													'zolo-blocks'
												)}
												controlName={ICON_TEXT_SPACING}
												resRequiredProps={
													resRequiredProps
												}
												min={0}
												max={100}
												step={1}
											/>
										)}

										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={BUTTON_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={BTN_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={BTN_SHADOW}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={BUTTON_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
										<IconicBtnGroup
											label={__(
												'Color Type',
												'zolo-blocks'
											)}
											value={socialColor}
											onChange={(value) =>
												setAttributes({
													socialColor: value,
												})
											}
											options={SOCIAL_ICON_COLOR}
										/>
										{socialColor === 'custom' && (
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
										)}
									</>
								}
								hoverComponents={
									<>
										{socialColor === 'custom' && (
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
										)}
										<ColorControl
											label={__(
												'Border Color',
												'zolo-blocks'
											)}
											color={borderHoverColor}
											onChange={(value) =>
												setAttributes({
													borderHoverColor: value,
												})
											}
										/>
										<BoxShadowControl
											controlName={BTN_HOVER_SHADOW}
											resRequiredProps={resRequiredProps}
										/>
									</>
								}
							/>
						</PanelBody>
					</>
				}
				advancedTab={
					<PanelBody
						title={__('Block', 'zolo-blocks')}
						initialOpen={false}
					>
						<ResDimensionsControl
							label={__('Margin', 'zolo-blocks')}
							controlName={BLOCK_MARGIN}
							resRequiredProps={resRequiredProps}
							forBorderRadius={false}
						/>
					</PanelBody>
				}
			/>
		</InspectorControls>
	);
}

export default Inspector;
