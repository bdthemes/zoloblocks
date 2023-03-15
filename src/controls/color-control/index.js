import {
	BaseControl,
	Button,
	ColorPicker,
	Dropdown,
	Tooltip,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

const colorBallStyles = {
	padding: 2,
	borderRadius: 0,
	background: 'white',
	border: '1px solid #ebebeb',
};

const colorStyles = {
	height: 16,
	width: 16,
	borderRadius: '0%',
	boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
};

const ColorControl = ({ label, defaultColor, color, onChange }) => {
	const [bgColor, setBgColor] = useState(null);

	useEffect(() => {
		onChange(bgColor);
	}, [bgColor]);

	useEffect(() => {
		setBgColor(color || defaultColor);
	}, []);

	return (
		<div className="zb-color-control-wrapper">
			<BaseControl label={label || ''} className="color-label">
				<Dropdown
					renderToggle={({ isOpen, onToggle }) => (
						<Tooltip text={bgColor || 'default'}>
							<div
								className="color-ball"
								style={bgColor && colorBallStyles}
							>
								<div
									style={{
										...colorStyles,
										backgroundColor: bgColor,
									}}
									aria-expanded={isOpen}
									onClick={onToggle}
									aria-label={bgColor || 'default'}
								></div>
							</div>
						</Tooltip>
					)}
					renderContent={() => (
						<ColorPicker
							color={bgColor}
							onChangeComplete={({ rgb }) => {
								setBgColor(
									`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`
								);
							}}
						/>
					)}
				/>

				{bgColor && (
					<Button
						isSmall
						className="zb-reset-button"
						icon="image-rotate"
						style={{
							transform: 'scaleX(-1) rotate(90deg)',
						}}
						onClick={() => {
							setBgColor(defaultColor);
						}}
					></Button>
				)}
			</BaseControl>
		</div>
	);
};

export default ColorControl;
