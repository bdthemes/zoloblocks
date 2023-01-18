import { Button, ButtonGroup } from '@wordpress/components';
import WithResDeviceBtn from './res-device-btn';

const ResAlignmentControl = ({
	label,
	controlName,
	resRequiredProps,
	alignOptions,
	alignText,
}) => {
	const { attributes, setAttributes, resMode } = resRequiredProps;

	const {
		[`${controlName}ZRPAlign`]: desktopAlignment,
		[`TAB${controlName}ZRPAlign`]: tabletAlignment,
		[`MOB${controlName}ZRPAlign`]: mobileAlignment,
	} = attributes;

	const defaultAlign =
		alignOptions && Array.isArray(alignOptions)
			? alignOptions
			: [
					{ label: 'Left', value: 'left' },
					{ label: 'Center', value: 'center' },
					{ label: 'Right', value: 'right' },
			  ];
	return (
		<div className="zb-res-alignment-control-wrapper">
			{resMode == 'Desktop' && (
				<WithResDeviceBtn
					label={label}
					resRequiredProps={resRequiredProps}
					controlName={controlName}
				>
					<ButtonGroup className="zb-align-control-btn-group">
						{defaultAlign.map((alignItem, index) => {
							return (
								<Button
									onClick={() =>
										setAttributes({
											[`${controlName}ZRPAlign`]:
												alignItem.value,
										})
									}
									className={`rb-button ${
										desktopAlignment == alignItem.value
											? 'active'
											: ''
									}`}
									variant={
										desktopAlignment === alignItem.value
											? 'primary'
											: 'secondary'
									}
								>
									{alignText ? (
										<span>{alignItem.label}</span>
									) : (
										<span
											className={`dashicon dashicons dashicons-editor-${
												alignItem.value == 'justify'
													? alignItem.value
													: 'align' + alignItem.value
											}`}
										></span>
									)}
								</Button>
							);
						})}
					</ButtonGroup>
				</WithResDeviceBtn>
			)}

			{resMode == 'Tablet' && (
				<WithResDeviceBtn
					label={label}
					resRequiredProps={resRequiredProps}
					controlName={controlName}
				>
					<ButtonGroup className="zb-align-control-btn-group">
						{defaultAlign.map((alignItem, index) => {
							return (
								<Button
									onClick={() =>
										setAttributes({
											[`TAB${controlName}ZRPAlign`]:
												alignItem.value,
										})
									}
									className={`rb-button ${
										tabletAlignment == alignItem.value
											? 'active'
											: ''
									}`}
									variant={
										tabletAlignment === alignItem.value
											? 'primary'
											: 'secondary'
									}
								>
									{alignText ? (
										<span>{alignItem.label}</span>
									) : (
										<span
											className={`dashicon dashicons dashicons-editor-${
												alignItem.value == 'justify'
													? alignItem.value
													: 'align' + alignItem.value
											}`}
										></span>
									)}
								</Button>
							);
						})}
					</ButtonGroup>
				</WithResDeviceBtn>
			)}

			{resMode == 'Mobile' && (
				<WithResDeviceBtn
					label={label}
					resRequiredProps={resRequiredProps}
					controlName={controlName}
				>
					<ButtonGroup className="zb-align-control-btn-group">
						{defaultAlign.map((alignItem, index) => {
							return (
								<Button
									onClick={() =>
										setAttributes({
											[`MOB${controlName}ZRPAlign`]:
												alignItem.value,
										})
									}
									className={`rb-button ${
										mobileAlignment == alignItem.value
											? 'active'
											: ''
									}`}
									variant={
										mobileAlignment === alignItem.value
											? 'primary'
											: 'secondary'
									}
								>
									{alignText ? (
										<span className="align-text">
											{alignItem.label}
										</span>
									) : (
										<span
											className={`align-icon dashicon dashicons dashicons-editor-${
												alignItem.value == 'justify'
													? alignItem.value
													: 'align' + alignItem.value
											}`}
										></span>
									)}
								</Button>
							);
						})}
					</ButtonGroup>
				</WithResDeviceBtn>
			)}
		</div>
	);
};
export default ResAlignmentControl;
