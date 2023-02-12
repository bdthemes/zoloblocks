const ResetControl = ({ onReset, children }) => {
	return (
		<div className="zb-control-container">
			{children}
			<button className="zb-reset-button" onClick={onReset}>
				<span className="dashicon dashicons dashicons-image-rotate"></span>
			</button>
		</div>
	);
};

export default ResetControl;