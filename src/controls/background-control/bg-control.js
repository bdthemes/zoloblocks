import { MediaUpload } from '@wordpress/block-editor';
import { BaseControl, Button, ButtonGroup, SelectControl } from '@wordpress/components';
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
								</>
							)}

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
					<h1>Hover</h1>
				</>
			)}

		</>
	)
}

export default BGControl;