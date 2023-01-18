import {
	onDesktopBtnClick,
	onMobileBtnClick,
	onTabletBtnClick,
} from '../../helpers/preview-btns-helper';

const WithResDeviceBtn = ({
	label,
	resRequiredProps,
	children,
	noUnits,
	controlName,
}) => {
	const { resMode, objAttributes, setAttributes } = resRequiredProps;

	const onReset = () => {
		if (noUnits) {
			resMode == 'Desktop'
				? setAttributes({
						[`${controlName}ZRPRange`]:
							objAttributes[`${controlName}ZRPRange`].default,
				  })
				: '';

			resMode == 'Tablet'
				? setAttributes({
						[`TAB${controlName}ZRPRange`]:
							objAttributes[`TAB${controlName}ZRPRange`].default,
				  })
				: '';

			resMode == 'Mobile'
				? setAttributes({
						[`MOB${controlName}ZRPRange`]:
							objAttributes[`MOB${controlName}ZRPRange`].default,
				  })
				: '';
		} else {
			resMode == 'Desktop'
				? setAttributes({
						[`${controlName}ZRPRange`]:
							objAttributes[`${controlName}ZRPRange`].default,
						[`${controlName}ZRPUnit`]:
							objAttributes[`${controlName}ZRPUnit`].default ||
							'px',
				  })
				: '';

			resMode == 'Tablet'
				? setAttributes({
						[`TAB${controlName}ZRPRange`]:
							objAttributes[`TAB${controlName}ZRPRange`].default,
						[`TAB${controlName}ZRPUnit`]:
							objAttributes[`TAB${controlName}ZRPUnit`].default ||
							'px',
				  })
				: '';

			resMode == 'Mobile'
				? setAttributes({
						[`MOB${controlName}ZRPRange`]:
							objAttributes[`MOB${controlName}ZRPRange`].default,
						[`MOB${controlName}ZRPUnit`]:
							objAttributes[`MOB${controlName}ZRPUnit`].default ||
							'px',
				  })
				: '';
		}
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
