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
	const { resDevice, objAttributes, setAttributes } = resRequiredProps;

	const onReset = () => {
		if (noUnits) {
			resDevice == 'Desktop'
				? setAttributes({
						[`${controlName}ZRPRange`]:
							objAttributes[`${controlName}ZRPRange`].default,
				  })
				: '';

			resDevice == 'Tablet'
				? setAttributes({
						[`TAB${controlName}ZRPRange`]:
							objAttributes[`TAB${controlName}ZRPRange`].default,
				  })
				: '';

			resDevice == 'Mobile'
				? setAttributes({
						[`MOB${controlName}ZRPRange`]:
							objAttributes[`MOB${controlName}ZRPRange`].default,
				  })
				: '';
		} else {
			resDevice == 'Desktop'
				? setAttributes({
						[`${controlName}ZRPRange`]:
							objAttributes[`${controlName}ZRPRange`].default,
						[`${controlName}ZRPUnit`]:
							objAttributes[`${controlName}ZRPUnit`].default ||
							'px',
				  })
				: '';

			resDevice == 'Tablet'
				? setAttributes({
						[`TAB${controlName}ZRPRange`]:
							objAttributes[`TAB${controlName}ZRPRange`].default,
						[`TAB${controlName}ZRPUnit`]:
							objAttributes[`TAB${controlName}ZRPUnit`].default ||
							'px',
				  })
				: '';

			resDevice == 'Mobile'
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

	// const onDesktopBtnClick = ({ setAttributes }) => {
	//   setAttributes({ resDevice: "Desktop" });
	//   dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Desktop");
	// };

	// const onTabletBtnClick = ({ setAttributes }) => {
	//   setAttributes({ resDevice: "Tablet" });
	//   dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Tablet");
	// };

	// const onMobileBtnClick = ({ setAttributes }) => {
	//   setAttributes({ resDevice: "Mobile" });
	//   dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Mobile");
	// };

	return (
		<div className="zb-res-device-btn-wrapper">
			<div className="zb-res-device-btns">
				<span className="res-btn-label">{label}</span>

				<span
					className={`res-btn dashicons dashicons-desktop ${
						resDevice === 'Desktop' ? 'active' : ' '
					}`}
					onClick={() => onDesktopBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-tablet ${
						resDevice === 'Tablet' ? 'active' : ' '
					}`}
					onClick={() => onTabletBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-smartphone ${
						resDevice === 'Mobile' ? 'active' : ' '
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
