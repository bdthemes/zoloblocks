import { useEffect, useState } from '@wordpress/element';
import {
	onDesktopBtnClick,
	onMobileBtnClick,
	onTabletBtnClick,
} from '../../helpers/preview-btns-helper';

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
	} = neededProps;

	const [dimensions, setDimensions] = useState({
		top,
		right,
		bottom,
		left,
	});

	const [isLinked, setIsLinked] = useState(dimensionIsLinked);

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
				[name]: value,
			});
		}
	};

	const onButtonClick = () => {
		setIsLinked(!isLinked);
	};

	useEffect(() => {
		onChange(dimensions);
	}, [dimensions]);

	useEffect(() => {
		setAttributes({
			[`${controlName}ZRPIsLinked`]: isLinked,
		});
	}, [isLinked]);

	return (
		<div className="zb-dimension-container">
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

				<button
					className={`zb-linked-btn components-button is-button dashicons dashicons-${
						isLinked
							? 'admin-links is-primary'
							: 'editor-unlink is-default'
					}`}
					onClick={onButtonClick}
				/>
			</div>
		</div>
	);
};

export default DimensionControl;
