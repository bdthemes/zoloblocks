const ResetControl = ({  onReset, children }) => {
	return (
		<div className="zb-range-controller-container">
			{children}
			<button className="zb-range-reset-button" onClick={onReset}>
				<span className="dashicon dashicons dashicons-image-rotate"></span>
			</button>
		</div>
	);
};

export default ResetControl;