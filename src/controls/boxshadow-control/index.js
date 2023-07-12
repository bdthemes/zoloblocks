import {
	BaseControl,
	Button,
	ButtonGroup,
	Dropdown,
	RangeControl,
	ToggleControl,
	ColorPicker,
	__experimentalNumberControl as NumberControl,
	Popover,
	ColorIndicator,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';

import { BOX_SHADOW_TYPES } from '../../global/constants';

const BoxShadowControl = ({ label = '', controlName, resRequiredProps }) => {
	const { setAttributes, attributes } = resRequiredProps;
	const {
		[`${controlName}shadowType`]: shadowType,
		[`${controlName}shadowUnit`]: shadowUnit,
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset,
		[`${controlName}vOffset`]: vOffset,
		[`${controlName}blur`]: blur,
		[`${controlName}spread`]: spread,
	} = attributes;

	const defaultUnits = [
		{ label: 'px', value: 'px' },
		{ label: 'em', value: 'em' },
		{ label: '%', value: '%' },
	];

	return (
		<>
			<div className="zolo-box-shadow">
				<div className="zolo-label-area">
					<UnitsBtn
						selectedUnit={shadowUnit}
						unitTypes={defaultUnits}
						onClick={(sizeUnit) =>
							setAttributes({
								[`${controlName}shadowUnit`]: sizeUnit,
							})
						}
					>
						<ResetBtn
							onReset={() => {
								setAttributes({
									[`${controlName}shadowType`]: 'none',
									[`${controlName}shadowUnit`]: 'px',
									[`${controlName}shadowColor`]: '',
									[`${controlName}hOffset`]: '',
									[`${controlName}vOffset`]: '',
									[`${controlName}blur`]: '',
									[`${controlName}spread`]: '',
								});
							}}
						/>
						<Dropdown
							className="shadow-color-picker-btn"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									onClick={onToggle}
									aria-expanded={isOpen}
									className="color-ball-btn"
								>
									<ColorIndicator
										colorValue={shadowColor}
										className="color-ball"
									/>
								</Button>
							)}
							renderContent={() => (
								<div className="shadow-color-picker">
									<ColorPicker
										color={shadowColor}
										disableAlpha
										onChangeComplete={(value) =>
											setAttributes({
												[`${controlName}shadowColor`]:
													value.hex,
											})
										}
									/>
								</div>
							)}
						/>
					</UnitsBtn>
					<WithResDeviceBtn
						label={label || __('Box Shadow', 'zolo-blocks')}
						resRequiredProps={resRequiredProps}
						controlName={controlName}
						noResetBtn={true}
					>
						<ButtonGroup className="shadow-style-btn-group">
							{BOX_SHADOW_TYPES &&
								BOX_SHADOW_TYPES.map((type, index) => {
									return (
										<Button
											key={index}
											className={`shadow-style-btn ${
												shadowType === type.value
													? 'active'
													: ''
											}`}
											onClick={() =>
												setAttributes({
													[`${controlName}shadowType`]:
														type.value,
												})
											}
										>
											{type.label}
										</Button>
									);
								})}
						</ButtonGroup>
						<div className="zolo-box-shadow-options">
							<div className="single-shadow-input">
								<NumberControl
									isShiftStepEnabled={true}
									onChange={(hOffset) =>
										setAttributes({
											[`${controlName}hOffset`]: hOffset,
										})
									}
									value={hOffset}
								/>
								<div className="input-label">
									{__('X', 'zolo-blocks')}
								</div>
							</div>
							<div className="single-shadow-input">
								<NumberControl
									isShiftStepEnabled={true}
									onChange={(vOffset) =>
										setAttributes({
											[`${controlName}vOffset`]: vOffset,
										})
									}
									value={vOffset}
								/>
								<div className="input-label">
									{__('Y', 'zolo-blocks')}
								</div>
							</div>
							<div className="single-shadow-input">
								<NumberControl
									isShiftStepEnabled={true}
									onChange={(blur) =>
										setAttributes({
											[`${controlName}blur`]: blur,
										})
									}
									value={blur}
									min={0}
								/>
								<div className="input-label">
									{__('Blur', 'zolo-blocks')}
								</div>
							</div>
							<div className="single-shadow-input">
								<NumberControl
									isShiftStepEnabled={true}
									onChange={(spread) =>
										setAttributes({
											[`${controlName}spread`]: spread,
										})
									}
									value={spread}
									min={0}
								/>
								<div className="input-label">
									{__('Spread', 'zolo-blocks')}
								</div>
							</div>
						</div>
					</WithResDeviceBtn>
				</div>
			</div>
		</>
	);
};

export default BoxShadowControl;
