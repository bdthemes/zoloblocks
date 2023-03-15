import { MediaUpload } from '@wordpress/block-editor';
import { BaseControl, Button, ButtonGroup, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES, NORMAL_HOVER } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';


const BGControl = ({
	controlName,
	resRequiredProps,
	noMainBGImg
}) => {
	const { setAttributes, attributes, resMode } = resRequiredProps;

	const {
		[`${controlName}bg_hoverType`]: bg_hoverType,

		//attributes for background type normal start
		[`${controlName}backgroundType`]: backgroundType,
		[`${controlName}backgroundColor`]: backgroundColor,
		[`${controlName}gradientColor`]: gradientColor,

		[`${controlName}bgImageURL`]: bgImageURL,
		[`${controlName}bgImageID`]: bgImageID,
		[`${controlName}bgImgAttachment`]: bgImgAttachment,

		[`${controlName}backgroundSize`]: backgroundSize,
		[`${controlName}bgImgCustomSize`]: bgImgCustomSize,
		[`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
		[`${controlName}bgImgPos`]: bgImgPos,
		[`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
		[`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
		[`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
		[`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
		[`${controlName}bgImgRepeat`]: bgImgRepeat,

		[`TAB${controlName}backgroundSize`]: TABbackgroundSize,
		[`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
		[`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
		[`TAB${controlName}bgImgPos`]: TABbgImgPos,
		[`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
		[`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
		[`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
		[`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
		[`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,

		[`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
		[`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
		[`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
		[`MOB${controlName}bgImgPos`]: MOBbgImgPos,
		[`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
		[`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
		[`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
		[`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
		[`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,

		//  attributes for bg_hoverType hover start  ⬇
		[`hov_${controlName}backgroundType`]: hov_backgroundType,
		[`hov_${controlName}backgroundColor`]: hov_backgroundColor,
		[`hov_${controlName}gradientColor`]: hov_gradientColor,
		[`hov_${controlName}bgImageURL`]: hov_bgImageURL,
		[`hov_${controlName}bgImageID`]: hov_bgImageID,
		[`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,

		[`hov_${controlName}backgroundSize`]: hov_backgroundSize,
		[`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize,
		[`hov_${controlName}bgImgCustomSizeUnit`]: hov_bgImgCustomSizeUnit,
		[`hov_${controlName}bgImgPos`]: hov_bgImgPos,
		[`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX,
		[`hov_${controlName}bgImgcustomPosXUnit`]: hov_bgImgcustomPosXUnit,
		[`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY,
		[`hov_${controlName}bgImgcustomPosYUnit`]: hov_bgImgcustomPosYUnit,
		[`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat,

		[`hov_TAB${controlName}backgroundSize`]: hov_TABbackgroundSize,
		[`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize,
		[`hov_TAB${controlName}bgImgCustomSizeUnit`]:
		hov_TABbgImgCustomSizeUnit,
		[`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos,
		[`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX,
		[`hov_TAB${controlName}bgImgcustomPosXUnit`]:
		hov_TABbgImgcustomPosXUnit,
		[`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY,
		[`hov_TAB${controlName}bgImgcustomPosYUnit`]:
		hov_TABbgImgcustomPosYUnit,
		[`hov_TAB${controlName}bgImgRepeat`]: hov_TABbgImgRepeat,

		[`hov_MOB${controlName}backgroundSize`]: hov_MOBbackgroundSize,
		[`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize,
		[`hov_MOB${controlName}bgImgCustomSizeUnit`]:
		hov_MOBbgImgCustomSizeUnit,
		[`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos,
		[`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX,
		[`hov_MOB${controlName}bgImgcustomPosXUnit`]:
		hov_MOBbgImgcustomPosXUnit,
		[`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY,
		[`hov_MOB${controlName}bgImgcustomPosYUnit`]:
		hov_MOBbgImgcustomPosYUnit,
		[`hov_MOB${controlName}bgImgRepeat`]: hov_MOBbgImgRepeat,


	} = attributes;

	return (
		<>
			<BaseControl>
				<ButtonGroup>
					{NORMAL_HOVER.map(({ value, label }) => (
						<Button
							variant={bg_hoverType === value ? 'primary' : 'secondary'}
							onClick={() => setAttributes({ [`${controlName}bg_hoverType`]: value })}>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>


			{bg_hoverType === "normal" && (
				<>
					<BaseControl
						label={__("Background Type", "zolo-blocks")}>
						<ButtonGroup>
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									variant={backgroundType === value ? 'primary' : 'secondary'}
									onClick={() => setAttributes({ [`${controlName}backgroundType`]: value })}>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{backgroundType === 'classic' && (
						<>
							<ColorControl
								label={__("Background Color", "zolo-blocks")}
								color={backgroundColor}
								onChange={(backgroundColor) => setAttributes({ [`${controlName}backgroundColor`]: backgroundColor })
								}
							/>

							{noMainBGImg === false && (
								<>
									<MediaUpload
										onSelect={({ url, id }) =>
											setAttributes({
												[`${controlName}bgImageURL`]: url,
												[`${controlName}bgImageID`]: id,
											})
										}
										type="image"
										value={bgImageID}
										render={({ open }) =>
											!bgImageURL && (
												<>
													<Button
														className="zb-bg-control-img-btn components-button"
														label={__("Upload Image", "zolo-blocks")}
														icon="format-image"
														onClick={open}
													/>
													<span
														style={{
															padding: "10px 0",
															display: "block",
														}}></span>
												</>
											)
										}
									/>

									{bgImageURL && (
										<>
											<ImageAvatar
												imageUrl={bgImageURL}
												onDeleteImage={() => setAttributes({ [`${controlName}bgImageURL`]: null })}
											/>

											{resMode === "Desktop" && (
												<>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={bgImgPos}
															options={[
																{
																	label: __("Default", "zolo-blocks"),
																	value: "",
																},
																{
																	label: __("Center Center", "zolo-blocks"),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																bgImgPos
															) =>
																setAttributes({
																	[`${controlName}bgImgPos`]:
																		bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{bgImgPos === "custom" && (
														<>
															<UnitBtn
																selectedUnit={
																	bgImgcustomPosXUnit
																}
																unitTypes={[
																	{
																		label: "px",
																		value: "px",
																	},
																	{
																		label: "em",
																		value: "em",
																	},
																	{
																		label: "%",
																		value: "%",
																	},
																]}
																onClick={(
																	bgImgcustomPosXUnit
																) =>
																	setAttributes(
																		{
																			[`${controlName}bgImgcustomPosXUnit`]:
																				bgImgcustomPosXUnit,
																		}
																	)
																}
															/>

															<WithResDeviceBtn
																resRequiredProps={
																	resRequiredProps
																}
																label="X Position">
																<RangeControl
																	value={
																		bgImgcustomPosX
																	}
																	min={-2000}
																	max={2000}
																	onChange={(
																		bgImgcustomPosX
																	) =>
																		setAttributes(
																			{
																				[`${controlName}bgImgcustomPosX`]:
																					bgImgcustomPosX,
																			}
																		)
																	}
																/>
															</WithResDeviceBtn>

															<UnitBtn
																selectedUnit={
																	bgImgcustomPosYUnit
																}
																unitTypes={[
																	{
																		label: "px",
																		value: "px",
																	},
																	{
																		label: "em",
																		value: "em",
																	},
																	{
																		label: "%",
																		value: "%",
																	},
																]}
																onClick={(
																	bgImgcustomPosYUnit
																) =>
																	setAttributes(
																		{
																			[`${controlName}bgImgcustomPosYUnit`]:
																				bgImgcustomPosYUnit,
																		}
																	)
																}
															/>

															<WithResDeviceBtn
																resRequiredProps={
																	resRequiredProps
																}
																label="Y Position">
																<RangeControl
																	value={
																		bgImgcustomPosY
																	}
																	min={-2000}
																	max={2000}
																	step={
																		bgImgcustomPosYUnit ===
																			"px"
																			? 1
																			: 0.1
																	}
																	onChange={(
																		bgImgcustomPosY
																	) =>
																		setAttributes(
																			{
																				[`${controlName}bgImgcustomPosY`]:
																					bgImgcustomPosY,
																			}
																		)
																	}
																/>
															</WithResDeviceBtn>
														</>
													)}

													<SelectControl
														label="Attachment"
														value={bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}bgImgAttachment`]:
																	bgImgAttachment,
															})
														}
													/>

													{bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={bgImgRepeat}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																bgImgRepeat
															) =>
																setAttributes({
																	[`${controlName}bgImgRepeat`]:
																		bgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																backgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																backgroundSize
															) =>
																setAttributes({
																	[`${controlName}backgroundSize`]:
																		backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		bgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`${controlName}bgImgCustomSizeUnit`]:
																					bgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			bgImgCustomSize
																		}
																		min={0}
																		max={
																			bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`${controlName}bgImgCustomSize`]:
																						bgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

												</>
											)}

											{resMode === "Tablet" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={TABbgImgPos}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Center Center",
																		"zolo-blocks"
																	),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																TABbgImgPos
															) =>
																setAttributes({
																	[`TAB${controlName}bgImgPos`]:
																		TABbgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{TABbgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		TABbgImgcustomPosXUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		TABbgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}bgImgcustomPosXUnit`]:
																					TABbgImgcustomPosXUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="X Position">
																	<RangeControl
																		value={
																			TABbgImgcustomPosX
																		}
																		min={0}
																		max={
																			TABbgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			TABbgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}bgImgcustomPosX`]:
																						TABbgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		TABbgImgcustomPosYUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		TABbgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}bgImgcustomPosYUnit`]:
																					TABbgImgcustomPosYUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Y Position">
																	<RangeControl
																		value={
																			TABbgImgcustomPosY
																		}
																		min={0}
																		max={
																			TABbgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			TABbgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			TABbgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}bgImgcustomPosY`]:
																						TABbgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}bgImgAttachment`]:
																	bgImgAttachment,
															})
														}
													/>

													{bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={
																TABbgImgRepeat
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																TABbgImgRepeat
															) =>
																setAttributes({
																	[`TAB${controlName}bgImgRepeat`]:
																		TABbgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																TABbackgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																TABbackgroundSize
															) =>
																setAttributes({
																	[`TAB${controlName}backgroundSize`]:
																		TABbackgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{TABbackgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		TABbgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		TABbgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}bgImgCustomSizeUnit`]:
																					TABbgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			TABbgImgCustomSize
																		}
																		min={0}
																		max={
																			TABbgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			TABbgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			TABbgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}bgImgCustomSize`]:
																						TABbgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}
												</>
											)}

											{resMode === "Mobile" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={MOBbgImgPos}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Center Center",
																		"zolo-blocks"
																	),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																MOBbgImgPos
															) =>
																setAttributes({
																	[`MOB${controlName}bgImgPos`]:
																		MOBbgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{MOBbgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		MOBbgImgcustomPosXUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		MOBbgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}bgImgcustomPosXUnit`]:
																					MOBbgImgcustomPosXUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="X Position">
																	<RangeControl
																		value={
																			MOBbgImgcustomPosX
																		}
																		min={0}
																		max={
																			MOBbgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			MOBbgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}bgImgcustomPosX`]:
																						MOBbgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		MOBbgImgcustomPosYUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		MOBbgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}bgImgcustomPosYUnit`]:
																					MOBbgImgcustomPosYUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Y Position">
																	<RangeControl
																		value={
																			MOBbgImgcustomPosY
																		}
																		min={0}
																		max={
																			MOBbgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			MOBbgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			MOBbgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}bgImgcustomPosY`]:
																						MOBbgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}bgImgAttachment`]:
																	bgImgAttachment,
															})
														}
													/>

													{bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={
																MOBbgImgRepeat
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																MOBbgImgRepeat
															) =>
																setAttributes({
																	[`MOB${controlName}bgImgRepeat`]:
																		MOBbgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																MOBbackgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																MOBbackgroundSize
															) =>
																setAttributes({
																	[`MOB${controlName}backgroundSize`]:
																		MOBbackgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{MOBbackgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		MOBbgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		MOBbgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}bgImgCustomSizeUnit`]:
																					MOBbgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			MOBbgImgCustomSize
																		}
																		min={0}
																		max={
																			MOBbgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			MOBbgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			MOBbgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}bgImgCustomSize`]:
																						MOBbgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}
												</>
											)}

										</>
									)}

								</>
							)}
						</>
					)}

					{backgroundType === 'gradient' && (

						<GradientControl
							label={"Gradient Color"}
							value={gradientColor}
							onChange={(newVal) => setAttributes({ [`${controlName}gradientColor`]: newVal })}
						/>
					)}

				</>
			)}

			{bg_hoverType === "hover" && (
				<>
					<BaseControl
						label={__("Background Type", "zolo-blocks")}>
						<ButtonGroup>
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									variant={hov_backgroundType === value ? 'primary' : 'secondary'}
									onClick={() => setAttributes({ [`hov_${controlName}backgroundType`]: value })}>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{hov_backgroundType === 'classic' && (
						<>
							<ColorControl
								label={__("Background Color", "zolo-blocks")}
								color={hov_backgroundColor}
								onChange={(newVal) => setAttributes({ [`hov_${controlName}backgroundColor`]: newVal })
								}
							/>

							{noMainBGImg === false && (
								<>
									<MediaUpload
										onSelect={({ url, id }) =>
											setAttributes({
												[`hov_${controlName}bgImageURL`]: url,
												[`hov_${controlName}bgImageID`]: id,
											})
										}
										type="image"
										value={hov_bgImageID}
										render={({ open }) =>
											!hov_bgImageURL && (
												<>
													<Button
														className="zb-bg-control-img-btn components-button"
														label={__("Upload Image", "zolo-blocks")}
														icon="format-image"
														onClick={open}
													/>
													<span
														style={{
															padding: "10px 0",
															display: "block",
														}}></span>
												</>
											)
										}
									/>

									{hov_bgImageURL && (
										<>
											<ImageAvatar
												imageUrl={hov_bgImageURL}
												onDeleteImage={() => setAttributes({ [`hov_${controlName}bgImageURL`]: null })}
											/>

											{resMode === "Desktop" && (
												<>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={hov_bgImgPos}
															options={[
																{
																	label: __("Default", "zolo-blocks"),
																	value: "",
																},
																{
																	label: __("Center Center", "zolo-blocks"),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_bgImgPos
															) =>
																setAttributes({
																	[`hov_${controlName}bgImgPos`]:
																		hov_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_bgImgPos === "custom" && (
														<>
															<UnitBtn
																selectedUnit={
																	hov_bgImgcustomPosXUnit
																}
																unitTypes={[
																	{
																		label: "px",
																		value: "px",
																	},
																	{
																		label: "em",
																		value: "em",
																	},
																	{
																		label: "%",
																		value: "%",
																	},
																]}
																onClick={(
																	hov_bgImgcustomPosXUnit
																) =>
																	setAttributes(
																		{
																			[`hov_${controlName}bgImgcustomPosXUnit`]:
																				hov_bgImgcustomPosXUnit,
																		}
																	)
																}
															/>

															<WithResDeviceBtn
																resRequiredProps={
																	resRequiredProps
																}
																label="X Position">
																<RangeControl
																	value={
																		hov_bgImgcustomPosX
																	}
																	min={-2000}
																	max={2000}
																	onChange={(
																		hov_bgImgcustomPosX
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}bgImgcustomPosX`]:
																					hov_bgImgcustomPosX,
																			}
																		)
																	}
																/>
															</WithResDeviceBtn>

															<UnitBtn
																selectedUnit={
																	hov_bgImgcustomPosYUnit
																}
																unitTypes={[
																	{
																		label: "px",
																		value: "px",
																	},
																	{
																		label: "em",
																		value: "em",
																	},
																	{
																		label: "%",
																		value: "%",
																	},
																]}
																onClick={(
																	hov_bgImgcustomPosYUnit
																) =>
																	setAttributes(
																		{
																			[`hov_${controlName}bgImgcustomPosYUnit`]:
																				hov_bgImgcustomPosYUnit,
																		}
																	)
																}
															/>

															<WithResDeviceBtn
																resRequiredProps={
																	resRequiredProps
																}
																label="Y Position">
																<RangeControl
																	value={
																		hov_bgImgcustomPosY
																	}
																	min={-2000}
																	max={2000}
																	step={
																		hov_bgImgcustomPosYUnit ===
																			"px"
																			? 1
																			: 0.1
																	}
																	onChange={(
																		hov_bgImgcustomPosY
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}bgImgcustomPosY`]:
																					hov_bgImgcustomPosY,
																			}
																		)
																	}
																/>
															</WithResDeviceBtn>
														</>
													)}

													<SelectControl
														label="Attachment"
														value={hov_bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															hov_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}bgImgAttachment`]:
																	hov_bgImgAttachment,
															})
														}
													/>

													{hov_bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={hov_bgImgRepeat}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																hov_bgImgRepeat
															) =>
																setAttributes({
																	[`hov_${controlName}bgImgRepeat`]:
																		hov_bgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																hov_backgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_backgroundSize
															) =>
																setAttributes({
																	[`hov_${controlName}backgroundSize`]:
																		hov_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_bgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}bgImgCustomSizeUnit`]:
																					hov_bgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			hov_bgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_${controlName}bgImgCustomSize`]:
																						hov_bgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

												</>
											)}

											{resMode === "Tablet" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={hov_TABbgImgPos}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Center Center",
																		"zolo-blocks"
																	),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_TABbgImgPos
															) =>
																setAttributes({
																	[`hov_TAB${controlName}bgImgPos`]:
																		hov_TABbgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_TABbgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_TABbgImgcustomPosXUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_TABbgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}bgImgcustomPosXUnit`]:
																					hov_TABbgImgcustomPosXUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="X Position">
																	<RangeControl
																		value={
																			hov_TABbgImgcustomPosX
																		}
																		min={0}
																		max={
																			hov_TABbgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			hov_TABbgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}bgImgcustomPosX`]:
																						hov_TABbgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		hov_TABbgImgcustomPosYUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_TABbgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}bgImgcustomPosYUnit`]:
																					hov_TABbgImgcustomPosYUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Y Position">
																	<RangeControl
																		value={
																			hov_TABbgImgcustomPosY
																		}
																		min={0}
																		max={
																			hov_TABbgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_TABbgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_TABbgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}bgImgcustomPosY`]:
																						hov_TABbgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={hov_bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															hov_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}bgImgAttachment`]:
																	hov_bgImgAttachment,
															})
														}
													/>

													{hov_bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={
																hov_TABbgImgRepeat
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																hov_TABbgImgRepeat
															) =>
																setAttributes({
																	[`hov_TAB${controlName}bgImgRepeat`]:
																		hov_TABbgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																hov_TABbackgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_TABbackgroundSize
															) =>
																setAttributes({
																	[`hov_TAB${controlName}backgroundSize`]:
																		hov_TABbackgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_TABbackgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_TABbgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_TABbgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}bgImgCustomSizeUnit`]:
																					hov_TABbgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			hov_TABbgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_TABbgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_TABbgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_TABbgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}bgImgCustomSize`]:
																						hov_TABbgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}
												</>
											)}

											{resMode === "Mobile" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={hov_MOBbgImgPos}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Center Center",
																		"zolo-blocks"
																	),
																	value: "center center",
																},
																{
																	label: __(
																		"Center Left",
																		"zolo-blocks"
																	),
																	value: "center left",
																},
																{
																	label: __(
																		"Center Right",
																		"zolo-blocks"
																	),
																	value: "center right",
																},
																{
																	label: __(
																		"Top Center",
																		"zolo-blocks"
																	),
																	value: "top center",
																},
																{
																	label: __(
																		"Top Left",
																		"zolo-blocks"
																	),
																	value: "top left",
																},
																{
																	label: __(
																		"Top Right",
																		"zolo-blocks"
																	),
																	value: "top right",
																},
																{
																	label: __(
																		"Bottom Center",
																		"zolo-blocks"
																	),
																	value: "bottom center",
																},
																{
																	label: __(
																		"Bottom Left",
																		"zolo-blocks"
																	),
																	value: "bottom left",
																},
																{
																	label: __(
																		"Bottom Right",
																		"zolo-blocks"
																	),
																	value: "bottom right",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_MOBbgImgPos
															) =>
																setAttributes({
																	[`hov_MOB${controlName}bgImgPos`]:
																		hov_MOBbgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_MOBbgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_MOBbgImgcustomPosXUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_MOBbgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}bgImgcustomPosXUnit`]:
																					hov_MOBbgImgcustomPosXUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="X Position">
																	<RangeControl
																		value={
																			hov_MOBbgImgcustomPosX
																		}
																		min={0}
																		max={
																			hov_MOBbgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			hov_MOBbgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}bgImgcustomPosX`]:
																						hov_MOBbgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		hov_MOBbgImgcustomPosYUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_MOBbgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}bgImgcustomPosYUnit`]:
																					hov_MOBbgImgcustomPosYUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Y Position">
																	<RangeControl
																		value={
																			hov_MOBbgImgcustomPosY
																		}
																		min={0}
																		max={
																			hov_MOBbgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_MOBbgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_MOBbgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}bgImgcustomPosY`]:
																						hov_MOBbgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={hov_bgImgAttachment}
														options={[
															{
																label: __(
																	"Default",
																	"zolo-blocks"
																),
																value: "",
															},
															{
																label: __(
																	"Scroll",
																	"zolo-blocks"
																),
																value: "scroll",
															},
															{
																label: __(
																	"Fixed",
																	"zolo-blocks"
																),
																value: "fixed",
															},
														]}
														onChange={(
															hov_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}bgImgAttachment`]:
																	hov_bgImgAttachment,
															})
														}
													/>

													{hov_bgImgAttachment ===
														"fixed" && (
															<p
																style={{
																	marginTop:
																		"-10px",
																	paddingBottom:
																		"10px",
																}}>
																<i>
																	Note: Attachment
																	Fixed works only
																	on desktop.
																</i>
															</p>
														)}

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Repeat">
														<SelectControl
															value={
																hov_MOBbgImgRepeat
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"No-repeat",
																		"zolo-blocks"
																	),
																	value: "no-repeat",
																},
																{
																	label: __(
																		"Repeat",
																		"zolo-blocks"
																	),
																	value: "repeat",
																},
																{
																	label: __(
																		"Repeat-x",
																		"zolo-blocks"
																	),
																	value: "repeat-x",
																},
																{
																	label: __(
																		"Repeat-y",
																		"zolo-blocks"
																	),
																	value: "repeat-y",
																},
															]}
															onChange={(
																hov_MOBbgImgRepeat
															) =>
																setAttributes({
																	[`hov_MOB${controlName}bgImgRepeat`]:
																		hov_MOBbgImgRepeat,
																})
															}
														/>
													</WithResDeviceBtn>

													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Size">
														<SelectControl
															value={
																hov_MOBbackgroundSize
															}
															options={[
																{
																	label: __(
																		"Default",
																		"zolo-blocks"
																	),
																	value: "",
																},
																{
																	label: __(
																		"Auto",
																		"zolo-blocks"
																	),
																	value: "auto",
																},
																{
																	label: __(
																		"Cover",
																		"zolo-blocks"
																	),
																	value: "cover",
																},
																{
																	label: __(
																		"Contain",
																		"zolo-blocks"
																	),
																	value: "contain",
																},
																{
																	label: __(
																		"Custom",
																		"zolo-blocks"
																	),
																	value: "custom",
																},
															]}
															onChange={(
																hov_MOBbackgroundSize
															) =>
																setAttributes({
																	[`hov_MOB${controlName}backgroundSize`]:
																		hov_MOBbackgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_MOBbackgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_MOBbgImgCustomSizeUnit
																	}
																	unitTypes={[
																		{
																			label: "px",
																			value: "px",
																		},
																		{
																			label: "em",
																			value: "em",
																		},
																		{
																			label: "%",
																			value: "%",
																		},
																	]}
																	onClick={(
																		hov_MOBbgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}bgImgCustomSizeUnit`]:
																					hov_MOBbgImgCustomSizeUnit,
																			}
																		)
																	}
																/>

																<WithResDeviceBtn
																	resRequiredProps={
																		resRequiredProps
																	}
																	label="Width">
																	<RangeControl
																		value={
																			hov_MOBbgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_MOBbgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_MOBbgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_MOBbgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}bgImgCustomSize`]:
																						hov_MOBbgImgCustomSize,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}
												</>
											)}

										</>
									)}

								</>
							)}
						</>
					)}

					{hov_backgroundType === 'gradient' && (
						<GradientControl
							label={"Gradient Color"}
							value={hov_gradientColor}
							onChange={(newVal) => setAttributes({ [`hov_${controlName}gradientColor`]: newVal })}
						/>
					)}
				</>
			)}

		</>
	)
}

export default BGControl;