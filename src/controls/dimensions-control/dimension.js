import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';

import WithResDeviceBtn from '../with-res-device-btn';

const DimensionControl = ({
	top,
	right,
	bottom,
	left,
	onChange,
	neededProps,
}) => {
	const {
		label,
		resMode,
		setAttributes,
		dimensionIsLinked,
		forBorderRadius,
		controlName,
		isLinked,
	} = neededProps;

	const [dimensions, setDimensions] = useState({
		top,
		right,
		bottom,
		left,
	});

	const onInputChange = (e) => {
		const { name, value } = e.target;
		if (isLinked) {
			setDimensions({
				top: value,
				bottom: value,
				left: value,
				right: value,
			});
		} else {
			setDimensions({
				...dimensions,
				[name]: value,
			});
		}
	};

	useEffect(() => {
		onChange(dimensions);
	}, [dimensions]);

	useEffect(() => {
		setAttributes({
			[`${prefix}${controlName}IsLinked`]: isLinked,
		});
	}, [isLinked]);

	return (
		<div className="zb-dimension-container">
			<WithResDeviceBtn
				label={label}
				resRequiredProps={neededProps}
				controlName={controlName}
				noRestBtn={true}
			>
				<div className="input-container">
					<div className="input-wrap">
						<input
							type="number"
							name="top"
							value={dimensions.top}
							onChange={onInputChange}
						/>
						<label className="input-label">
							{forBorderRadius ? ' ' : 'Top'}
						</label>
					</div>

					<div className="input-wrap">
						<input
							type="number"
							name="right"
							value={dimensions.right}
							onChange={onInputChange}
						/>
						<label className="input-label">
							{forBorderRadius ? ' ' : 'Right'}
						</label>
					</div>

					<div className="input-wrap">
						<input
							type="number"
							name="bottom"
							value={dimensions.bottom}
							onChange={onInputChange}
						/>
						<label className="input-label">
							{forBorderRadius ? ' ' : 'Bottom'}
						</label>
					</div>

					<div className="input-wrap">
						<input
							type="number"
							name="left"
							value={dimensions.left}
							onChange={onInputChange}
						/>
						<label className="input-label">
							{forBorderRadius ? ' ' : 'Left'}
						</label>
					</div>
				</div>
			</WithResDeviceBtn>
			{/* <div className="zb-res-device-btns">
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
			</div> */}
		</div>
	);
};

export default DimensionControl;
