import {
	BaseControl,
	Button,
	Dropdown,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ColorBtn from '../color-btn';

function TextShadowControl({ label = '', controlName, resRequiredProps }) {
	const { attributes, setAttributes, resMode, objAttributes } =
		resRequiredProps;

	const strokeWidthAttr = `${
		resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()
	}${controlName}strokeWidth`;
	const strokeUnitAttr = `${
		resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()
	}${controlName}strokeUnit`;
	const strokeWidthVal = attributes[strokeWidthAttr];
	const strokeUnitVal = attributes[strokeUnitAttr];

	const { [`${controlName}strokeColor`]: strokeColor } = attributes;

	const defaultUnits = [
		{ label: 'px', value: 'px' },
		{ label: 'em', value: 'em' },
	];

	return (
		<>
			<div className="zolo-box-shadow">
				<div className="zolo-label-area">
					<UnitsBtn
						selectedUnit={strokeUnitVal}
						unitTypes={defaultUnits}
						onClick={(sizeUnit) =>
							setAttributes({
								[strokeUnitAttr]: sizeUnit,
							})
						}
					>
						<ResetBtn
							onReset={() => {
								setAttributes({
									[strokeUnitAttr]: 'px',
									[`${controlName}strokeColor`]: '',
									[strokeWidthAttr]: '',
								});
							}}
						/>
						<ColorBtn
							color={strokeColor}
							onChange={(value) =>
								setAttributes({
									[`${controlName}strokeColor`]: value,
								})
							}
						/>
					</UnitsBtn>
					<WithResDeviceBtn
						label={label || __('Text Stroke', 'zolo-blocks')}
						resRequiredProps={resRequiredProps}
						controlName={controlName}
						noResetBtn={true}
						noResponsive={false}
					>
						<div className="zolo-box-shadow-options">
							<div className="single-shadow-input">
								<RangeControl
									value={strokeWidthVal}
									onChange={(val) =>
										setAttributes({
											[strokeWidthAttr]: val,
										})
									}
									min={0}
									max={
										strokeUnitVal === 'em' ||
										strokeUnitVal === 'rem'
											? 1
											: 10
									}
									step={
										strokeUnitVal === 'em' ||
										strokeUnitVal === 'rem'
											? 0.1
											: 1
									}
								/>
							</div>
						</div>
					</WithResDeviceBtn>
				</div>
			</div>
			{/* <BaseControl
				label={__('Text Stroke', 'zolo-blocks')}
				className="zb-textstroke-control-wrap"
			>
				<Dropdown
					className="zb-textstroke-control-dropdown"
					contentClassName="zb-popover-content-area"
					position="bottom right"
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							isSmall
							onClick={onToggle}
							aria-expanded={isOpen}
						>
							<span className="dashicons dashicons-edit"></span>
						</Button>
					)}
					renderContent={() => (
						<>
							<div
								className="zb-textstroke-content-wrap"
								style={{
									minWidth: '230px',
									padding: '10px',
								}}
							>
								<WithResDeviceBtn
									className="zb-text-stroke"
									resRequiredProps={resRequiredProps}
								>
									<UnitBtn
										selectedUnit={strokeUnitVal}
										unitTypes={[
											{ label: 'px', value: 'px' },
											{ label: 'em', value: 'em' },
											{ label: 'rem', value: 'rem' },
										]}
										onClick={(val) =>
											setAttributes({
												[strokeUnitAttr]: val,
											})
										}
									/>

									<ResetControl
										onReset={() =>
											setAttributes({
												[strokeWidthAttr]: (
													objAttributes[
														strokeWidthAttr
													] || {}
												).default,
											})
										}
									>
										<RangeControl
											label={__(
												'Text Stroke',
												'zolo-blocks'
											)}
											value={strokeWidthVal}
											onChange={(val) =>
												setAttributes({
													[strokeWidthAttr]: val,
												})
											}
											min={0}
											max={
												strokeUnitVal === 'em' ||
												strokeUnitVal === 'rem'
													? 1
													: 10
											}
											step={
												strokeUnitVal === 'em' ||
												strokeUnitVal === 'rem'
													? 0.1
													: 1
											}
										/>
									</ResetControl>
								</WithResDeviceBtn>

								<ColorControl
									defaultColor={
										(
											objAttributes[
												`${controlName}strokeColor`
											] || {}
										).default
									}
									label={__('Color', 'zolo-blocks')}
									color={strokeColor}
									onChange={(strokeColor) =>
										setAttributes({
											[`${controlName}strokeColor`]:
												strokeColor,
										})
									}
								/>
							</div>
						</>
					)}
				/>
			</BaseControl> */}
		</>
	);
}

export default TextShadowControl;
