import {
	Button,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import WithResDeviceBtn from '../with-res-device-btn';
import ResetBtn from '../reset-btn';
import { prefix } from '../../global/constants';
import { __ } from '@wordpress/i18n';

const ResCounterControl = ({
	label,
	controlName,
	resRequiredProps,
	min,
	max,
	step,
}) => {
	const { attributes, setAttributes, resMode } = resRequiredProps;
	const {
		[`${prefix}${controlName}Range`]: desktopRange = 1,
		[`${prefix}TAB${controlName}Range`]: tabRange = 1,
		[`${prefix}MOB${controlName}Range`]: mobRange = 1,
	} = attributes;

	return (
		<div className="zb-res-range-control-wrapper">
			{resMode == 'Desktop' && (
				<>
					<div className="zb-units-wrapper">
						<ResetBtn
							onReset={() => {
								setAttributes({
									[`${prefix}${controlName}Range`]: '',
								});
							}}
						/>
					</div>

					<WithResDeviceBtn
						label={label}
						resRequiredProps={resRequiredProps}
						controlName={controlName}
						noResetBtn={true}
					>
						<div className="zb-counter-control">
							<div className="zb-counter-flex">
								<Button
									className="zb-counter-control-btn"
									onClick={() =>
										setAttributes({
											[`${prefix}${controlName}Range`]:
												desktopRange - 1,
										})
									}
									disabled={desktopRange <= min}
								>
									<span className="dashicons dashicons-minus"></span>
								</Button>
								<InputControl
									type="number"
									value={desktopRange}
									onChange={(val) => {
										setAttributes({
											[`${prefix}${controlName}Range`]:
												parseInt(val),
										});
									}}
									min={min || 1}
									max={max || 5}
									step={step || 1}
									disabled={
										desktopRange <= min ||
										desktopRange >= max
									}
								/>
								<Button
									className="zb-counter-control-btn"
									onClick={() =>
										setAttributes({
											[`${prefix}${controlName}Range`]:
												desktopRange + 1,
										})
									}
									disabled={desktopRange >= max}
								>
									<span className="dashicons dashicons-plus"></span>
								</Button>
							</div>
							<p className="zb-counter-note">
								{__('Note: maximum ', 'zita-blocks') +
									max +
									' ' +
									__('minimum ') +
									min}
							</p>
						</div>
					</WithResDeviceBtn>
				</>
			)}

			{resMode == 'Tablet' && (
				<WithResDeviceBtn
					label={label}
					resRequiredProps={resRequiredProps}
					controlName={controlName}
				>
					<div className="zb-counter-control">
						<div className="zb-counter-flex">
							<Button
								className="zb-counter-control-btn"
								onClick={() =>
									setAttributes({
										[`${prefix}TAB${controlName}Range`]:
											tabRange - 1,
									})
								}
								disabled={tabRange <= min}
							>
								<span className="dashicons dashicons-minus"></span>
							</Button>
							<InputControl
								type="number"
								value={tabRange}
								onChange={(val) => {
									setAttributes({
										[`${prefix}TAB${controlName}Range`]:
											parseInt(val),
									});
								}}
								min={min || 1}
								max={max || 5}
								step={step || 1}
								disabled={tabRange <= min || tabRange >= max}
							/>
							<Button
								className="zb-counter-control-btn"
								onClick={() =>
									setAttributes({
										[`${prefix}TAB${controlName}Range`]:
											tabRange + 1,
									})
								}
								disabled={tabRange >= max}
							>
								<span className="dashicons dashicons-plus"></span>
							</Button>
						</div>
						<p className="zb-counter-note">
							{__('Note: maximum ', 'zita-blocks') +
								max +
								' ' +
								__('minimum ') +
								min}
						</p>
					</div>
				</WithResDeviceBtn>
			)}

			{resMode == 'Mobile' && (
				<WithResDeviceBtn
					label={label}
					resRequiredProps={resRequiredProps}
					controlName={controlName}
				>
					<div className="zb-counter-control">
						<div className="zb-counter-flex">
							<Button
								className="zb-counter-control-btn"
								onClick={() =>
									setAttributes({
										[`${prefix}MOB${controlName}Range`]:
											mobRange - 1,
									})
								}
								disabled={mobRange <= min}
							>
								<span className="dashicons dashicons-minus"></span>
							</Button>
							<InputControl
								type="number"
								value={mobRange}
								onChange={(val) => {
									setAttributes({
										[`${prefix}MOB${controlName}Range`]:
											parseInt(val),
									});
								}}
								min={min || 1}
								max={max || 5}
								step={step || 1}
								disabled={mobRange <= min || mobRange >= max}
							/>
							<Button
								className="zb-counter-control-btn"
								onClick={() =>
									setAttributes({
										[`${prefix}MOB${controlName}Range`]:
											mobRange + 1,
									})
								}
								disabled={mobRange >= max}
							>
								<span className="dashicons dashicons-plus"></span>
							</Button>
						</div>
						<p className="zb-counter-note">
							{__('Note: maximum ', 'zita-blocks') +
								max +
								' ' +
								__('minimum ') +
								min}
						</p>
					</div>
				</WithResDeviceBtn>
			)}
		</div>
	);
};
export default ResCounterControl;
