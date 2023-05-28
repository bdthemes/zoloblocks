import {
	onDesktopBtnClick,
	onMobileBtnClick,
	onTabletBtnClick,
} from '../../helpers/preview-btns-helper';

import { prefix } from '../../global/constants';

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
						[`${prefix}${controlName}Range`]:
							objAttributes[`${prefix}${controlName}Range`].default,
				  })
				: '';

			resMode == 'Tablet'
				? setAttributes({
						[`${prefix}TAB${controlName}Range`]:
							objAttributes[`${prefix}TAB${controlName}Range`].default,
				  })
				: '';

			resMode == 'Mobile'
				? setAttributes({
						[`${prefix}MOB${controlName}Range`]:
							objAttributes[`${prefix}MOB${controlName}Range`].default,
				  })
				: '';
		} else {
			resMode == 'Desktop'
				? setAttributes({
						[`${prefix}${controlName}Range`]:
							objAttributes[`${prefix}${controlName}Range`].default,
						[`${prefix}${controlName}Unit`]:
							objAttributes[`${prefix}${controlName}Unit`].default ||
							'px',
				  })
				: '';

			resMode == 'Tablet'
				? setAttributes({
						[`${prefix}TAB${controlName}Range`]:
							objAttributes[`${prefix}TAB${controlName}Range`].default,
						[`${prefix}TAB${controlName}Unit`]:
							objAttributes[`${prefix}TAB${controlName}Unit`].default ||
							'px',
				  })
				: '';

			resMode == 'Mobile'
				? setAttributes({
						[`${prefix}MOB${controlName}Range`]:
							objAttributes[`${prefix}MOB${controlName}Range`].default,
						[`${prefix}MOB${controlName}Unit`]:
							objAttributes[`${prefix}MOB${controlName}Unit`].default ||
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
