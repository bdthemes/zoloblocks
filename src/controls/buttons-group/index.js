/**
 * WordPress dependencies
 */
import { ButtonGroup, Button } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';

const ButtonsGroupControl = ({
	label,
	controlName,
	resRequiredProps,
	options,
	instanceId,
}) => {
	const { attributes, setAttributes } = resRequiredProps;
	// const instanceId = 1;
	console.log(instanceId);

	return (
		<div className="zolo-blocks-buttons-group-control">
			<div className="zolo-blocks-buttons-group-control__label">
				<label htmlFor={`zolo-blocks-buttons-group-${instanceId}`}>
					{label}
				</label>
			</div>
			<div
				className="zolo-blocks-buttons-group-control__buttons"
				id={`zolo-blocks-buttons-group-${instanceId}`}
			>
				<ButtonGroup>
					{options &&
						options.map((option, index) => {
							const { value, label } = option;
							const active = attributes[controlName] === value;
							return (
								<Button
									key={index}
									variant={active ? 'primary' : 'secondary'}
									onClick={() =>
										setAttributes({ [controlName]: value })
									}
								>
									{label}
								</Button>
							);
						})}
				</ButtonGroup>
			</div>
		</div>
	);
};

export default withInstanceId(ButtonsGroupControl);
