import {
	onDesktopBtnClick,
	onMobileBtnClick,
	onTabletBtnClick,
} from '../../helpers/preview-btns-helper';

const WithResDeviceBtn = ({
	label,
	resRequiredProps,
	children,
	controlName,
}) => {
	const { resMode, objAttributes, setAttributes } = resRequiredProps;

	const onReset = () => {
		resMode == 'Desktop'
			? setAttributes({
					[`${controlName}ZRPAlign`]:
						objAttributes[`${controlName}ZRPAlign`].default,
			  })
			: '';

		resMode == 'Tablet'
			? setAttributes({
					[`TAB${controlName}ZRPAlign`]:
						objAttributes[`TAB${controlName}ZRPAlign`].default,
			  })
			: '';

		resMode == 'Mobile'
			? setAttributes({
					[`MOB${controlName}ZRPAlign`]:
						objAttributes[`MOB${controlName}ZRPAlign`].default,
			  })
			: '';
	};

	return (
		<div className="zb-res-device-btn-wrapper">
			<div className="zb-res-device-btns">
				<span className="res-btn-label">{label}</span>

				<span
					className={`res-btn dashicons dashicons-desktop ${
						resMode === 'Desktop' ? 'active' : ' '
					}`}
					onClick={() => onDesktopBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-tablet ${
						resMode === 'Tablet' ? 'active' : ' '
					}`}
					onClick={() => onTabletBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-smartphone ${
						resMode === 'Mobile' ? 'active' : ' '
					}`}
					onClick={() => onMobileBtnClick({ setAttributes })}
				></span>
			</div>

			<div className="zb-component-wrapper">
				{children}

				<button className="zb-reset-button" onClick={onReset}>
					<span className="dashicon dashicons dashicons-image-rotate"></span>
				</button>
			</div>
		</div>
	);
};

export default WithResDeviceBtn;
