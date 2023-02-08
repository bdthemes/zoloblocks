import {
	BaseControl, Button, ButtonGroup, Dropdown, RangeControl, ToggleControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ColorControl from '../color-control';
import ResetControl from '../reset-control';

function BoxShadowControl({
	controlName,
	resRequiredProps,
	noShdowHover
}) {

	const { setAttributes, attributes, objAttributes } = resRequiredProps;

	const {
		[`${controlName}inset`]: inset,
		[`${controlName}shadowType`]: shadowType,
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset,
		[`${controlName}vOffset`]: vOffset,
		[`${controlName}blur`]: blur,
		[`${controlName}spread`]: spread,
		[`${controlName}hoverShadowColor`]: hoverShadowColor,
		[`${controlName}hoverHOffset`]: hoverHOffset,
		[`${controlName}hoverVOffset`]: hoverVOffset,
		[`${controlName}hoverBlur`]: hoverBlur,
		[`${controlName}hoverSpread`]: hoverSpread,
		[`${controlName}shadowTransition`]: shadowTransition,
	} = attributes;

	return (

		<BaseControl
			label={__("Box Shadow", "radius-blocks")}
			className="zb-boxshadow-control-wrap">
			<Dropdown
				className="zb-boxshadow-control-dropdown"
				contentClassName="zb-popover-content-area"
				position="bottom right"
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						isSmall
						onClick={onToggle}
						aria-expanded={isOpen}>
						<span className="dashicons dashicons-edit"></span>
					</Button>
				)}
				renderContent={() => (
					<>
						<div
							className="zb-boxshadow-content-wrap"
							style={{
								minWidth: "230px",
								padding: "10px",
							}}>

							{!noShdowHover && (
								<BaseControl id="zb-infobox-shadow-hover-ptions">
									<ButtonGroup id="zb-infobox-shadow-hover-ptions">
										{[
											{ label: "Normal", value: "normal" },
											{ label: "Hover", value: "hover" }
										].map(
											({ value, label }) => (
												<Button
													isLarge
													variant={shadowType === value ? 'primary' : 'secondary'}
													onClick={() =>
														setAttributes({ [`${controlName}shadowType`]: value })
													}>
													{label}
												</Button>
											)
										)}
									</ButtonGroup>
								</BaseControl>
							)}

							<ToggleControl
								label={__("Inset", "radius-blocks")}
								checked={inset}
								onChange={() => setAttributes({ [`${controlName}inset`]: !inset })}
							/>

							{(shadowType === "normal" || noShdowHover) && (
								<>
									<ColorControl
										defaultColor={(objAttributes[`${controlName}shadowColor`] || {}).default}
										label={__("Shadow Color", "radius-blocks")}
										color={shadowColor}
										onChange={(shadowColor) =>
											setAttributes({
												[`${controlName}shadowColor`]:
													shadowColor,
											})
										}
									/>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}hOffset`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Horizontal Offset", "radius-blocks")}
											value={hOffset}
											onChange={(hOffset) =>
												setAttributes({
													[`${controlName}hOffset`]:
														hOffset,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}vOffset`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Vertical Offset", "radius-blocks")}
											value={vOffset}
											onChange={(vOffset) =>
												setAttributes({
													[`${controlName}vOffset`]:
														vOffset,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}blur`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Shadow Blur", "radius-blocks")}
											value={blur}
											onChange={(blur) =>
												setAttributes({
													[`${controlName}blur`]:
														blur,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}spread`]:
													undefined,
											})
										}>

										<RangeControl
											label={__("Shadow Spread", "radius-blocks")}
											value={spread}
											onChange={(spread) =>
												setAttributes({
													[`${controlName}spread`]:
														spread,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>
								</>
							)}

							{shadowType === "hover" && !noShdowHover && (
								<>
									<ColorControl
										defaultColor={(objAttributes[`${controlName}hoverShadowColor`] || {}).default}
										label={__("Hover Shadow Color", "radius-blocks")}
										color={hoverShadowColor}
										onChange={(hoverShadowColor) => setAttributes({ [`${controlName}hoverShadowColor`]: hoverShadowColor })
										}
									/>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}hoverHOffset`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Horizontal Offset", "radius-blocks")}
											value={hoverHOffset}
											onChange={(
												hoverHOffset
											) =>
												setAttributes({
													[`${controlName}hoverHOffset`]:
														hoverHOffset,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}hoverVOffset`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Vertical Offset", "radius-blocks")}
											value={hoverVOffset}
											onChange={(hoverVOffset) =>
												setAttributes({
													[`${controlName}hoverVOffset`]:
														hoverVOffset,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}hoverBlur`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Shadow Blur", "radius-blocks")}
											value={hoverBlur}
											onChange={(hoverBlur) =>
												setAttributes({
													[`${controlName}hoverBlur`]:
														hoverBlur,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({
												[`${controlName}hoverSpread`]:
													undefined,
											})
										}>
										<RangeControl
											label={__("Shadow Spread", "radius-blocks")}
											value={hoverSpread}
											onChange={(
												hoverSpread
											) =>
												setAttributes({
													[`${controlName}hoverSpread`]:
														hoverSpread,
												})
											}
											min={0}
											max={200}
										/>
									</ResetControl>

									<RangeControl
										label={__("Shadow Transition", "radius-blocks")}
										value={shadowTransition}
										onChange={(shadowTransition) =>
											setAttributes({
												[`${controlName}shadowTransition`]:
													shadowTransition,
											})
										}
										step={0.01}
										min={0}
										max={5}
									/>
								</>
							)}
						</div>
					</>
				)}
			/>
		</BaseControl>

	)
}

export default BoxShadowControl;