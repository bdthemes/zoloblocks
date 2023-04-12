import { MediaUpload } from '@wordpress/block-editor';
import { BaseControl, Button, ButtonGroup, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES, NORMAL_HOVER } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';

const OverlayControl = ({
	controlName,
	resRequiredProps,
	noOverlayBGImg
}) => {
	const { setAttributes, attributes, resMode } = resRequiredProps;

	const {
		[`${controlName}ovl_hoverType`]: ovl_hoverType,
		[`${controlName}ovl_bg_transition`]: ovl_bg_transition,
		[`${controlName}ovl_filtersTransition`]: ovl_filtersTransition,
		[`${controlName}ovl_opacityTransition`]: ovl_opacityTransition,

		//  attributes for ovl_hoverType normal start  ⬇
		[`${controlName}overlayType`]: overlayType,
		[`${controlName}overlayColor`]: overlayColor,
		[`${controlName}overlayGradient`]: overlayGradient,
		[`${controlName}ovl_bgImageURL`]: ovl_bgImageURL,
		[`${controlName}ovl_bgImageID`]: ovl_bgImageID,
		[`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment,

		[`${controlName}ovl_opacity`]: ovl_opacity,
		[`${controlName}ovl_blendMode`]: ovl_blendMode,

		[`${controlName}ovl_allowFilters`]: ovl_allowFilters,
		[`${controlName}ovl_fltrBrightness`]: ovl_fltrBrightness,
		[`${controlName}ovl_fltrContrast`]: ovl_fltrContrast,
		[`${controlName}ovl_fltrSaturation`]: ovl_fltrSaturation,
		[`${controlName}ovl_fltrBlur`]: ovl_fltrBlur,
		[`${controlName}ovl_fltrHue`]: ovl_fltrHue,

		[`${controlName}ovl_backgroundSize`]: ovl_backgroundSize,
		[`${controlName}ovl_bgImgCustomSize`]: ovl_bgImgCustomSize,
		[`${controlName}ovl_bgImgCustomSizeUnit`]: ovl_bgImgCustomSizeUnit,
		[`${controlName}ovl_bgImgPos`]: ovl_bgImgPos,
		[`${controlName}ovl_bgImgcustomPosX`]: ovl_bgImgcustomPosX,
		[`${controlName}ovl_bgImgcustomPosXUnit`]: ovl_bgImgcustomPosXUnit,
		[`${controlName}ovl_bgImgcustomPosY`]: ovl_bgImgcustomPosY,
		[`${controlName}ovl_bgImgcustomPosYUnit`]: ovl_bgImgcustomPosYUnit,
		[`${controlName}ovl_bgImgRepeat`]: ovl_bgImgRepeat,

		[`TAB${controlName}ovl_backgroundSize`]: TABovl_backgroundSize,
		[`TAB${controlName}ovl_bgImgCustomSize`]: TABovl_bgImgCustomSize,
		[`TAB${controlName}ovl_bgImgCustomSizeUnit`]:
		TABovl_bgImgCustomSizeUnit,
		[`TAB${controlName}ovl_bgImgPos`]: TABovl_bgImgPos,
		[`TAB${controlName}ovl_bgImgcustomPosX`]: TABovl_bgImgcustomPosX,
		[`TAB${controlName}ovl_bgImgcustomPosXUnit`]:
		TABovl_bgImgcustomPosXUnit,
		[`TAB${controlName}ovl_bgImgcustomPosY`]: TABovl_bgImgcustomPosY,
		[`TAB${controlName}ovl_bgImgcustomPosYUnit`]:
		TABovl_bgImgcustomPosYUnit,
		[`TAB${controlName}ovl_bgImgRepeat`]: TABovl_bgImgRepeat,

		[`MOB${controlName}ovl_backgroundSize`]: MOBovl_backgroundSize,
		[`MOB${controlName}ovl_bgImgCustomSize`]: MOBovl_bgImgCustomSize,
		[`MOB${controlName}ovl_bgImgCustomSizeUnit`]:
		MOBovl_bgImgCustomSizeUnit,
		[`MOB${controlName}ovl_bgImgPos`]: MOBovl_bgImgPos,
		[`MOB${controlName}ovl_bgImgcustomPosX`]: MOBovl_bgImgcustomPosX,
		[`MOB${controlName}ovl_bgImgcustomPosXUnit`]:
		MOBovl_bgImgcustomPosXUnit,
		[`MOB${controlName}ovl_bgImgcustomPosY`]: MOBovl_bgImgcustomPosY,
		[`MOB${controlName}ovl_bgImgcustomPosYUnit`]:
		MOBovl_bgImgcustomPosYUnit,
		[`MOB${controlName}ovl_bgImgRepeat`]: MOBovl_bgImgRepeat,
		//  attributes for ovl_hoverType normal end

		//  attributes for ovl_hoverType hover start ⬇
		[`hov_${controlName}overlayType`]: hov_overlayType,
		[`hov_${controlName}overlayColor`]: hov_overlayColor,
		[`hov_${controlName}overlayGradient`]: hov_overlayGradient,
		[`hov_${controlName}ovl_bgImageURL`]: hov_ovl_bgImageURL,
		[`hov_${controlName}ovl_bgImageID`]: hov_ovl_bgImageID,
		[`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment,

		[`hov_${controlName}ovl_opacity`]: hov_ovl_opacity,
		[`hov_${controlName}ovl_blendMode`]: hov_ovl_blendMode,

		[`hov_${controlName}ovl_allowFilters`]: hov_ovl_allowFilters,
		[`hov_${controlName}ovl_fltrBrightness`]: hov_ovl_fltrBrightness,
		[`hov_${controlName}ovl_fltrContrast`]: hov_ovl_fltrContrast,
		[`hov_${controlName}ovl_fltrSaturation`]: hov_ovl_fltrSaturation,
		[`hov_${controlName}ovl_fltrBlur`]: hov_ovl_fltrBlur,
		[`hov_${controlName}ovl_fltrHue`]: hov_ovl_fltrHue,

		[`hov_${controlName}ovl_backgroundSize`]: hov_ovl_backgroundSize,
		[`hov_${controlName}ovl_bgImgCustomSize`]: hov_ovl_bgImgCustomSize,
		[`hov_${controlName}ovl_bgImgCustomSizeUnit`]:
		hov_ovl_bgImgCustomSizeUnit,
		[`hov_${controlName}ovl_bgImgPos`]: hov_ovl_bgImgPos,
		[`hov_${controlName}ovl_bgImgcustomPosX`]: hov_ovl_bgImgcustomPosX,
		[`hov_${controlName}ovl_bgImgcustomPosXUnit`]:
		hov_ovl_bgImgcustomPosXUnit,
		[`hov_${controlName}ovl_bgImgcustomPosY`]: hov_ovl_bgImgcustomPosY,
		[`hov_${controlName}ovl_bgImgcustomPosYUnit`]:
		hov_ovl_bgImgcustomPosYUnit,
		[`hov_${controlName}ovl_bgImgRepeat`]: hov_ovl_bgImgRepeat,

		[`hov_TAB${controlName}ovl_backgroundSize`]: hov_TABovl_backgroundSize,
		[`hov_TAB${controlName}ovl_bgImgCustomSize`]:
		hov_TABovl_bgImgCustomSize,
		[`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]:
		hov_TABovl_bgImgCustomSizeUnit,
		[`hov_TAB${controlName}ovl_bgImgPos`]: hov_TABovl_bgImgPos,
		[`hov_TAB${controlName}ovl_bgImgcustomPosX`]:
		hov_TABovl_bgImgcustomPosX,
		[`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]:
		hov_TABovl_bgImgcustomPosXUnit,
		[`hov_TAB${controlName}ovl_bgImgcustomPosY`]:
		hov_TABovl_bgImgcustomPosY,
		[`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]:
		hov_TABovl_bgImgcustomPosYUnit,
		[`hov_TAB${controlName}ovl_bgImgRepeat`]: hov_TABovl_bgImgRepeat,

		[`hov_MOB${controlName}ovl_backgroundSize`]: hov_MOBovl_backgroundSize,
		[`hov_MOB${controlName}ovl_bgImgCustomSize`]:
		hov_MOBovl_bgImgCustomSize,
		[`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]:
		hov_MOBovl_bgImgCustomSizeUnit,
		[`hov_MOB${controlName}ovl_bgImgPos`]: hov_MOBovl_bgImgPos,
		[`hov_MOB${controlName}ovl_bgImgcustomPosX`]:
		hov_MOBovl_bgImgcustomPosX,
		[`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]:
		hov_MOBovl_bgImgcustomPosXUnit,
		[`hov_MOB${controlName}ovl_bgImgcustomPosY`]:
		hov_MOBovl_bgImgcustomPosY,
		[`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]:
		hov_MOBovl_bgImgcustomPosYUnit,
		[`hov_MOB${controlName}ovl_bgImgRepeat`]: hov_MOBovl_bgImgRepeat,
	} = attributes;

	return (
		<>
			<BaseControl>
				<ButtonGroup>
					{NORMAL_HOVER.map(({ value, label }) => (
						<Button
							variant={ovl_hoverType === value ? 'primary' : 'secondary'}
							onClick={() => setAttributes({ [`${controlName}ovl_hoverType`]: value })}>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>


			{ovl_hoverType === "normal" && (
				<>
					<BaseControl
						label={__("Background Type", "zolo-blocks")}>
						<ButtonGroup>
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									variant={overlayType === value ? 'primary' : 'secondary'}
									onClick={() => setAttributes({ [`${controlName}overlayType`]: value })}>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{overlayType === 'classic' && (
						<>
							<ColorControl
								label={__("Overlay Color", "zolo-blocks")}
								color={overlayColor}
								onChange={(overlayColor) =>
									setAttributes({
										[`${controlName}overlayColor`]:
											overlayColor,
									})
								}
							/>

							{noOverlayBGImg === false && (
								<>
									<BaseControl
										label={__(
											"Overlay Image",
											"zolo-blocks"
										)}></BaseControl>

									<MediaUpload
										onSelect={({ url, id }) =>
											setAttributes({
												[`${controlName}ovl_bgImageURL`]:
													url,
												[`${controlName}ovl_bgImageID`]:
													id,
											})
										}
										type="image"
										value={ovl_bgImageID}
										render={({ open }) =>
											!ovl_bgImageURL && (
												<>
													<Button
														className="zb-bg-control-img-btn components-button"
														label={__(
															"Upload Image",
															"zolo-blocks"
														)}
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

									{ovl_bgImageURL && (
										<>
											<ImageAvatar
												imageUrl={ovl_bgImageURL}
												onDeleteImage={() =>
													setAttributes({
														[`${controlName}ovl_bgImageURL`]:
															null,
													})
												}
											/>

											{resMode === "Desktop" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={ovl_bgImgPos}
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
																ovl_bgImgPos
															) =>
																setAttributes({
																	[`${controlName}ovl_bgImgPos`]:
																		ovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{ovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		ovl_bgImgcustomPosXUnit
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
																		ovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`${controlName}ovl_bgImgcustomPosXUnit`]:
																					ovl_bgImgcustomPosXUnit,
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
																			ovl_bgImgcustomPosX
																		}
																		min={0}
																		max={
																			ovl_bgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			ovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`${controlName}ovl_bgImgcustomPosX`]:
																						ovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		ovl_bgImgcustomPosYUnit
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
																		ovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`${controlName}ovl_bgImgcustomPosYUnit`]:
																					ovl_bgImgcustomPosYUnit,
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
																			ovl_bgImgcustomPosY
																		}
																		min={0}
																		max={
																			ovl_bgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			ovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			ovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`${controlName}ovl_bgImgcustomPosY`]:
																						ovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															ovl_bgImgAttachment
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
															ovl_bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}ovl_bgImgAttachment`]:
																	ovl_bgImgAttachment,
															})
														}
													/>

													{ovl_bgImgAttachment ===
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
																ovl_bgImgRepeat
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
																ovl_bgImgRepeat
															) =>
																setAttributes({
																	[`${controlName}ovl_bgImgRepeat`]:
																		ovl_bgImgRepeat,
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
																ovl_backgroundSize
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
																ovl_backgroundSize
															) =>
																setAttributes({
																	[`${controlName}ovl_backgroundSize`]:
																		ovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{ovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		ovl_bgImgCustomSizeUnit
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
																		ovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`${controlName}ovl_bgImgCustomSizeUnit`]:
																					ovl_bgImgCustomSizeUnit,
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
																			ovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			ovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			ovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			ovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`${controlName}ovl_bgImgCustomSize`]:
																						ovl_bgImgCustomSize,
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
															value={
																TABovl_bgImgPos
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
																TABovl_bgImgPos
															) =>
																setAttributes({
																	[`TAB${controlName}ovl_bgImgPos`]:
																		TABovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{TABovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		TABovl_bgImgcustomPosXUnit
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
																		TABovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}ovl_bgImgcustomPosXUnit`]:
																					TABovl_bgImgcustomPosXUnit,
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
																			TABovl_bgImgcustomPosX
																		}
																		min={-2000}
																		max={
																			// TABovl_bgImgcustomPosXUnit === "px"
																			//   ?
																			2000
																			// : 100
																		}
																		onChange={(
																			TABovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}ovl_bgImgcustomPosX`]:
																						TABovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		TABovl_bgImgcustomPosYUnit
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
																		TABovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}ovl_bgImgcustomPosYUnit`]:
																					TABovl_bgImgcustomPosYUnit,
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
																			TABovl_bgImgcustomPosY
																		}
																		min={-2000}
																		max={
																			// TABovl_bgImgcustomPosYUnit === "px"
																			//   ?
																			2000
																			// : 100
																		}
																		step={
																			TABovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			TABovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}ovl_bgImgcustomPosY`]:
																						TABovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															ovl_bgImgAttachment
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
															ovl_bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}ovl_bgImgAttachment`]:
																	ovl_bgImgAttachment,
															})
														}
													/>

													{ovl_bgImgAttachment ===
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
																TABovl_bgImgRepeat
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
																TABovl_bgImgRepeat
															) =>
																setAttributes({
																	[`TAB${controlName}ovl_bgImgRepeat`]:
																		TABovl_bgImgRepeat,
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
																TABovl_backgroundSize
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
																TABovl_backgroundSize
															) =>
																setAttributes({
																	[`TAB${controlName}ovl_backgroundSize`]:
																		TABovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{TABovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		TABovl_bgImgCustomSizeUnit
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
																		TABovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`TAB${controlName}ovl_bgImgCustomSizeUnit`]:
																					TABovl_bgImgCustomSizeUnit,
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
																			TABovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			TABovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			TABovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			TABovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`TAB${controlName}ovl_bgImgCustomSize`]:
																						TABovl_bgImgCustomSize,
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
															value={
																MOBovl_bgImgPos
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
																MOBovl_bgImgPos
															) =>
																setAttributes({
																	[`MOB${controlName}ovl_bgImgPos`]:
																		MOBovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{MOBovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		MOBovl_bgImgcustomPosXUnit
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
																		MOBovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}ovl_bgImgcustomPosXUnit`]:
																					MOBovl_bgImgcustomPosXUnit,
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
																			MOBovl_bgImgcustomPosX
																		}
																		min={0}
																		max={
																			MOBovl_bgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			MOBovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}ovl_bgImgcustomPosX`]:
																						MOBovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		MOBovl_bgImgcustomPosYUnit
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
																		MOBovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}ovl_bgImgcustomPosYUnit`]:
																					MOBovl_bgImgcustomPosYUnit,
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
																			MOBovl_bgImgcustomPosY
																		}
																		min={0}
																		max={
																			MOBovl_bgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			MOBovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			MOBovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}ovl_bgImgcustomPosY`]:
																						MOBovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															ovl_bgImgAttachment
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
															ovl_bgImgAttachment
														) =>
															setAttributes({
																[`${controlName}ovl_bgImgAttachment`]:
																	ovl_bgImgAttachment,
															})
														}
													/>

													{ovl_bgImgAttachment ===
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
																MOBovl_bgImgRepeat
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
																MOBovl_bgImgRepeat
															) =>
																setAttributes({
																	[`MOB${controlName}ovl_bgImgRepeat`]:
																		MOBovl_bgImgRepeat,
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
																MOBovl_backgroundSize
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
																MOBovl_backgroundSize
															) =>
																setAttributes({
																	[`MOB${controlName}ovl_backgroundSize`]:
																		MOBovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{MOBovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		MOBovl_bgImgCustomSizeUnit
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
																		MOBovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`MOB${controlName}ovl_bgImgCustomSizeUnit`]:
																					MOBovl_bgImgCustomSizeUnit,
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
																			MOBovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			MOBovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			MOBovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			MOBovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`MOB${controlName}ovl_bgImgCustomSize`]:
																						MOBovl_bgImgCustomSize,
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

					{overlayType === 'gradient' && (
						<GradientControl
							label={"Gradient Color"}
							value={overlayGradient}
							onChange={(newVal) => setAttributes({ [`${controlName}overlayGradient`]: newVal })}
						/>
					)}
				</>
			)}
			{ovl_hoverType === "hover" && (
				<>
					<BaseControl
						label={__("Background Type", "zolo-blocks")}>
						<ButtonGroup>
							{BACKGROUND_TYPES.map(({ value, label }) => (
								<Button
									variant={hov_overlayType === value ? 'primary' : 'secondary'}
									onClick={() => setAttributes({ [`hov_${controlName}overlayType`]: value })}>
									{label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{hov_overlayType === 'classic' && (
						<>
							<ColorControl
								label={__("Overlay Color", "zolo-blocks")}
								color={hov_overlayColor}
								onChange={(hov_overlayColor) =>
									setAttributes({
										[`hov_${controlName}overlayColor`]:
											hov_overlayColor,
									})
								}
							/>

							{noOverlayBGImg === false && (
								<>
									<BaseControl
										label={__(
											"Overlay Image",
											"zolo-blocks"
										)}></BaseControl>

									<MediaUpload
										onSelect={({ url, id }) =>
											setAttributes({
												[`hov_${controlName}ovl_bgImageURL`]:
													url,
												[`hov_${controlName}ovl_bgImageID`]:
													id,
											})
										}
										type="image"
										value={hov_ovl_bgImageID}
										render={({ open }) =>
											!hov_ovl_bgImageURL && (
												<>
													<Button
														className="zb-bg-control-img-btn components-button"
														label={__(
															"Upload Image",
															"zolo-blocks"
														)}
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

									{hov_ovl_bgImageURL && (
										<>
											<ImageAvatar
												imageUrl={hov_ovl_bgImageURL}
												onDeleteImage={() =>
													setAttributes({
														[`hov_${controlName}ovl_bgImageURL`]:
															null,
													})
												}
											/>

											{resMode === "Desktop" && (
												<>
													<WithResDeviceBtn
														resRequiredProps={
															resRequiredProps
														}
														label="Position">
														<SelectControl
															value={
																hov_ovl_bgImgPos
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
																hov_ovl_bgImgPos
															) =>
																setAttributes({
																	[`hov_${controlName}ovl_bgImgPos`]:
																		hov_ovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_ovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_ovl_bgImgcustomPosXUnit
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
																		hov_ovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}ovl_bgImgcustomPosXUnit`]:
																					hov_ovl_bgImgcustomPosXUnit,
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
																			hov_ovl_bgImgcustomPosX
																		}
																		min={0}
																		max={
																			hov_ovl_bgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			hov_ovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`hov_${controlName}ovl_bgImgcustomPosX`]:
																						hov_ovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		hov_ovl_bgImgcustomPosYUnit
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
																		hov_ovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}ovl_bgImgcustomPosYUnit`]:
																					hov_ovl_bgImgcustomPosYUnit,
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
																			hov_ovl_bgImgcustomPosY
																		}
																		min={0}
																		max={
																			hov_ovl_bgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_ovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_ovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`hov_${controlName}ovl_bgImgcustomPosY`]:
																						hov_ovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															hov_ovl_bgImgAttachment
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
															hov_ovl_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}ovl_bgImgAttachment`]:
																	hov_ovl_bgImgAttachment,
															})
														}
													/>

													{hov_ovl_bgImgAttachment ===
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
																hov_ovl_bgImgRepeat
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
																hov_ovl_bgImgRepeat
															) =>
																setAttributes({
																	[`hov_${controlName}ovl_bgImgRepeat`]:
																		hov_ovl_bgImgRepeat,
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
																hov_ovl_backgroundSize
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
																hov_ovl_backgroundSize
															) =>
																setAttributes({
																	[`hov_${controlName}ovl_backgroundSize`]:
																		hov_ovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_ovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_ovl_bgImgCustomSizeUnit
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
																		hov_ovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_${controlName}ovl_bgImgCustomSizeUnit`]:
																					hov_ovl_bgImgCustomSizeUnit,
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
																			hov_ovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_ovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_ovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_ovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_${controlName}ovl_bgImgCustomSize`]:
																						hov_ovl_bgImgCustomSize,
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
															value={
																hov_TABovl_bgImgPos
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
																hov_TABovl_bgImgPos
															) =>
																setAttributes({
																	[`hov_TAB${controlName}ovl_bgImgPos`]:
																		hov_TABovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_TABovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_TABovl_bgImgcustomPosXUnit
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
																		hov_TABovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]:
																					hov_TABovl_bgImgcustomPosXUnit,
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
																			hov_TABovl_bgImgcustomPosX
																		}
																		min={0}
																		max={
																			hov_TABovl_bgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			hov_TABovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}ovl_bgImgcustomPosX`]:
																						hov_TABovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		hov_TABovl_bgImgcustomPosYUnit
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
																		hov_TABovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]:
																					hov_TABovl_bgImgcustomPosYUnit,
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
																			hov_TABovl_bgImgcustomPosY
																		}
																		min={0}
																		max={
																			hov_TABovl_bgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_TABovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_TABovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}ovl_bgImgcustomPosY`]:
																						hov_TABovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															hov_ovl_bgImgAttachment
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
															hov_ovl_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}ovl_bgImgAttachment`]:
																	hov_ovl_bgImgAttachment,
															})
														}
													/>

													{hov_ovl_bgImgAttachment ===
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
																hov_TABovl_bgImgRepeat
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
																hov_TABovl_bgImgRepeat
															) =>
																setAttributes({
																	[`hov_TAB${controlName}ovl_bgImgRepeat`]:
																		hov_TABovl_bgImgRepeat,
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
																hov_TABovl_backgroundSize
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
																hov_TABovl_backgroundSize
															) =>
																setAttributes({
																	[`hov_TAB${controlName}ovl_backgroundSize`]:
																		hov_TABovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_TABovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_TABovl_bgImgCustomSizeUnit
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
																		hov_TABovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]:
																					hov_TABovl_bgImgCustomSizeUnit,
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
																			hov_TABovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_TABovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_TABovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_TABovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_TAB${controlName}ovl_bgImgCustomSize`]:
																						hov_TABovl_bgImgCustomSize,
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
															value={
																hov_MOBovl_bgImgPos
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
																hov_MOBovl_bgImgPos
															) =>
																setAttributes({
																	[`hov_MOB${controlName}ovl_bgImgPos`]:
																		hov_MOBovl_bgImgPos,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_MOBovl_bgImgPos ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_MOBovl_bgImgcustomPosXUnit
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
																		hov_MOBovl_bgImgcustomPosXUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]:
																					hov_MOBovl_bgImgcustomPosXUnit,
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
																			hov_MOBovl_bgImgcustomPosX
																		}
																		min={0}
																		max={
																			hov_MOBovl_bgImgcustomPosXUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		onChange={(
																			hov_MOBovl_bgImgcustomPosX
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}ovl_bgImgcustomPosX`]:
																						hov_MOBovl_bgImgcustomPosX,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>

																<UnitBtn
																	selectedUnit={
																		hov_MOBovl_bgImgcustomPosYUnit
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
																		hov_MOBovl_bgImgcustomPosYUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]:
																					hov_MOBovl_bgImgcustomPosYUnit,
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
																			hov_MOBovl_bgImgcustomPosY
																		}
																		min={0}
																		max={
																			hov_MOBovl_bgImgcustomPosYUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_MOBovl_bgImgcustomPosYUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_MOBovl_bgImgcustomPosY
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}ovl_bgImgcustomPosY`]:
																						hov_MOBovl_bgImgcustomPosY,
																				}
																			)
																		}
																	/>
																</WithResDeviceBtn>
															</>
														)}

													<SelectControl
														label="Attachment"
														value={
															hov_ovl_bgImgAttachment
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
															hov_ovl_bgImgAttachment
														) =>
															setAttributes({
																[`hov_${controlName}ovl_bgImgAttachment`]:
																	hov_ovl_bgImgAttachment,
															})
														}
													/>

													{hov_ovl_bgImgAttachment ===
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
																hov_MOBovl_bgImgRepeat
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
																hov_MOBovl_bgImgRepeat
															) =>
																setAttributes({
																	[`hov_MOB${controlName}ovl_bgImgRepeat`]:
																		hov_MOBovl_bgImgRepeat,
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
																hov_MOBovl_backgroundSize
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
																hov_MOBovl_backgroundSize
															) =>
																setAttributes({
																	[`hov_MOB${controlName}ovl_backgroundSize`]:
																		hov_MOBovl_backgroundSize,
																})
															}
														/>
													</WithResDeviceBtn>

													{hov_MOBovl_backgroundSize ===
														"custom" && (
															<>
																<UnitBtn
																	selectedUnit={
																		hov_MOBovl_bgImgCustomSizeUnit
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
																		hov_MOBovl_bgImgCustomSizeUnit
																	) =>
																		setAttributes(
																			{
																				[`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]:
																					hov_MOBovl_bgImgCustomSizeUnit,
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
																			hov_MOBovl_bgImgCustomSize
																		}
																		min={0}
																		max={
																			hov_MOBovl_bgImgCustomSizeUnit ===
																				"px"
																				? 2000
																				: 100
																		}
																		step={
																			hov_MOBovl_bgImgCustomSizeUnit ===
																				"px"
																				? 1
																				: 0.1
																		}
																		onChange={(
																			hov_MOBovl_bgImgCustomSize
																		) =>
																			setAttributes(
																				{
																					[`hov_MOB${controlName}ovl_bgImgCustomSize`]:
																						hov_MOBovl_bgImgCustomSize,
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

					{hov_overlayType === 'gradient' && (
						<GradientControl
							label={"Gradient Color"}
							value={hov_overlayGradient}
							onChange={(newVal) => setAttributes({ [`hov_${controlName}overlayGradient`]: newVal })}
						/>
					)}
				</>
			)}
		</>
	)
}

export default OverlayControl;