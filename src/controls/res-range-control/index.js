import { RangeControl } from '@wordpress/components';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from './res-device-btn';
import {prefix} from "../../global/constants"

const ResRangeControl = ({
	label,
	controlName,
	units,
	resRequiredProps,
	min,
	max,
	step,
	noUnits,
}) => {
	const { attributes, setAttributes, resMode } = resRequiredProps;
	const {
		[`${prefix}${controlName}Range`]: desktopRange,
		[`${prefix}TAB${controlName}Range`]: tabRange,
		[`${prefix}MOB${controlName}Range`]: mobRange,
	} = attributes;
	let sizeUnit;
	let TABsizeUnit;
	let MOBsizeUnit;
	let defaultUnits;

	if (!noUnits) {
		sizeUnit = attributes[`${prefix}${controlName}Unit`];
		TABsizeUnit = attributes[`${prefix}TAB${controlName}Unit`];
		MOBsizeUnit = attributes[`${prefix}MOB${controlName}Unit`];
		defaultUnits = [
			{ label: 'px', value: 'px' },
			{ label: 'em', value: 'em' },
			{ label: '%', value: '%' },
		];
	}

	return (
		<div className="zb-res-range-control-wrapper">
			{noUnits ? (
				<>
					{resMode == 'Desktop' && (
						<WithResDeviceBtn
							label={label}
							resRequiredProps={resRequiredProps}
							controlName={controlName}
						>
							<RangeControl
								value={desktopRange}
								onChange={(val) =>
									setAttributes({
										[`${prefix}${controlName}Range`]: val,
									})
								}
								min={min || 0}
								max={max || 100}
								step={step || 1}
							/>
						</WithResDeviceBtn>
					)}

					{resMode == 'Tablet' && (
						<WithResDeviceBtn
							label={label}
							resRequiredProps={resRequiredProps}
							controlName={controlName}
						>
							<RangeControl
								value={tabRange}
								onChange={(val) =>
									setAttributes({
										[`${prefix}TAB${controlName}Range`]: val,
									})
								}
								min={min || 0}
								max={max || 100}
								step={step || 1}
							/>
						</WithResDeviceBtn>
					)}

					{resMode == 'Mobile' && (
						<WithResDeviceBtn
							label={label}
							resRequiredProps={resRequiredProps}
							controlName={controlName}
						>
							<RangeControl
								value={mobRange}
								onChange={(val) =>
									setAttributes({
										[`${prefix}MOB${controlName}Range`]: val,
									})
								}
								min={min || 0}
								max={max || 100}
								step={step || 1}
							/>
						</WithResDeviceBtn>
					)}
				</>
			) : (
				<>
					{resMode == 'Desktop' && (
						<>
							<UnitBtn
								selectedUnit={sizeUnit}
								unitTypes={units || defaultUnits}
								onClick={(sizeUnit) =>
									setAttributes({
										[`${prefix}${controlName}Unit`]: sizeUnit,
									})
								}
							/>

							<WithResDeviceBtn
								label={label}
								resRequiredProps={resRequiredProps}
								controlName={controlName}
							>
								<RangeControl
									value={desktopRange}
									onChange={(val) =>
										setAttributes({
											[`${prefix}${controlName}Range`]: val,
										})
									}
									min={min || 0}
									max={max || 100}
									step={step || 1}
								/>
							</WithResDeviceBtn>
						</>
					)}

					{resMode == 'Tablet' && (
						<>
							<UnitBtn
								selectedUnit={TABsizeUnit}
								unitTypes={units || defaultUnits}
								onClick={(TABsizeUnit) =>
									setAttributes({
										[`${prefix}TAB${controlName}Unit`]:
											TABsizeUnit,
									})
								}
							/>
							<WithResDeviceBtn
								label={label}
								resRequiredProps={resRequiredProps}
								controlName={controlName}
							>
								<RangeControl
									value={tabRange}
									onChange={(val) =>
										setAttributes({
											[`${prefix}TAB${controlName}Range`]: val,
										})
									}
									min={min || 0}
									max={max || 100}
									step={step || 1}
								/>
							</WithResDeviceBtn>
						</>
					)}

					{resMode == 'Mobile' && (
						<>
							<UnitBtn
								selectedUnit={MOBsizeUnit}
								unitTypes={units || defaultUnits}
								onClick={(MOBsizeUnit) =>
									setAttributes({
										[`${prefix}MOB${controlName}Unit`]:
											MOBsizeUnit,
									})
								}
							/>
							<WithResDeviceBtn
								label={label}
								resRequiredProps={resRequiredProps}
								controlName={controlName}
							>
								<RangeControl
									value={mobRange}
									onChange={(val) =>
										setAttributes({
											[`${prefix}MOB${controlName}Range`]: val,
										})
									}
									min={min || 0}
									max={max || 100}
									step={step || 1}
								/>
							</WithResDeviceBtn>
						</>
					)}
				</>
			)}
		</div>
	);
};
export default ResRangeControl;
