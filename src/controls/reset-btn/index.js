const ResetBtn = ({ onReset }) => {
	return (
		<div className="zb-reset-control-container">
			<button className="zb-reset-button" onClick={onReset}>
				<svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<rect
						width="100"
						height="100"
						style={{
							fill: 'none',
						}}
					/>
					<path
						d="M48.76,18.1a35.73,35.73,0,0,0-23.23,8.61V15.48a5,5,0,1,0-10,0V40.82a5,5,0,0,0,5,5h24a5,5,0,0,0,0-10H30.39a25.7,25.7,0,1,1-4.11,30.49,5,5,0,1,0-8.74,4.86A35.72,35.72,0,1,0,48.76,18.1Z"
						style={{
							fill: '#39394d',
						}}
					/>
				</svg>
			</button>
		</div>
	);
};

export default ResetBtn;
