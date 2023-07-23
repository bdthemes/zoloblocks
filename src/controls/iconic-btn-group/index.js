/**
 * WordPress dependencies
 */
import { ButtonGroup, Button } from '@wordpress/components';

const IconicBtnGroup = ({ label = '', value, onChange, options }) => {
	return (
		<div className="zolo-iconic-btn-group">
			{label && (
				<label htmlFor="iconic-btn-group" className="iconic-btn-label">
					{label}
				</label>
			)}
			<ButtonGroup className="zb-iconic-btn-group">
				{options &&
					options.map((option, index) => {
						return (
							<Button
								onClick={() => onChange(option.value)}
								className={`iconic-btn ${
									value == option.value ? 'active' : ''
								}`}
								key={index}
								title={option.label}
							>
								{option.icon && option.icon !== ''
									? option.icon
									: option.label}
							</Button>
						);
					})}
			</ButtonGroup>
		</div>
	);
};

export default IconicBtnGroup;
