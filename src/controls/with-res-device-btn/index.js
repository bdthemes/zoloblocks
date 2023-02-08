import {
	onDesktopBtnClick,
	onMobileBtnClick,
	onTabletBtnClick
} from '../../helpers/preview-btns-helper';

const WithResDeviceBtn = ({
	label,
	resRequiredProps,
	children,
	className,
}) => {
	const { resMode, setAttributes } = resRequiredProps;

	return (
		<div className={`zb-res-device-btn-wrapper ${className || ' '}`}>

			<div className="zb-res-device-btns">

				{label && (<span className="res-btn-label">{label}</span>)}

				<span
					className={`res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '
						}`}
					onClick={() => onDesktopBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '
						}`}
					onClick={() => onTabletBtnClick({ setAttributes })}
				></span>

				<span
					className={`res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '
						}`}
					onClick={() => onMobileBtnClick({ setAttributes })}
				></span>
			</div>

			{children}

		</div>
	);
};

export default WithResDeviceBtn;
