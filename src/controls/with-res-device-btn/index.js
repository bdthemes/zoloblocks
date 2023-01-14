import { dispatch } from '@wordpress/data';

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
						[`${controlName}Range`]:
							objAttributes[`${controlName}Range`].default,
				  })
				: '';

			resDevice == 'Tablet'
				? setAttributes({
						[`TAB${controlName}Range`]:
							objAttributes[`TAB${controlName}Range`].default,
				  })
				: '';

			resDevice == 'Mobile'
				? setAttributes({
						[`MOB${controlName}Range`]:
							objAttributes[`MOB${controlName}Range`].default,
				  })
				: '';
		} else {
			resDevice == 'Desktop'
				? setAttributes({
						[`${controlName}Range`]:
							objAttributes[`${controlName}Range`].default,
						[`${controlName}Unit`]:
							objAttributes[`${controlName}Unit`].default || 'px',
				  })
				: '';

			resDevice == 'Tablet'
				? setAttributes({
						[`TAB${controlName}Range`]:
							objAttributes[`TAB${controlName}Range`].default,
						[`TAB${controlName}Unit`]:
							objAttributes[`TAB${controlName}Unit`].default ||
							'px',
				  })
				: '';

			resDevice == 'Mobile'
				? setAttributes({
						[`MOB${controlName}Range`]:
							objAttributes[`MOB${controlName}Range`].default,
						[`MOB${controlName}Unit`]:
							objAttributes[`MOB${controlName}Unit`].default ||
							'px',
				  })
				: '';
		}
	};

	const onDesktopBtnClick = ({ setAttributes }) => {
		setAttributes({ resDevice: 'Desktop' });
		dispatch('core/edit-post').__experimentalSetPreviewDeviceType(
			'Desktop'
		);
	};

	const onTabletBtnClick = ({ setAttributes }) => {
		setAttributes({ resDevice: 'Tablet' });
		dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
	};

	const onMobileBtnClick = ({ setAttributes }) => {
		setAttributes({ resDevice: 'Mobile' });
		dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
	};

	return (
		<div className="zb-res-device-btn-wrapper">
			<div className="res-btns">
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
