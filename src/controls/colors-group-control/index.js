import { BaseControl, ButtonGroup, Button } from '@wordpress/components';
import { NORMAL_HOVER } from '../../global/constants';
import ColorControl from '../color-control';
import { __ } from '@wordpress/i18n';

const ColorsGroupControl = ({ controlName, resRequiredProps }) => {
	const { setAttributes, attributes } = resRequiredProps;

	const {
		[`${controlName}ColorType`]: ColorType,

		// normal color
		[`${controlName}Color`]: Color,

		// hover color
		[`${controlName}HoverColor`]: HoverColor,
	} = attributes;

	return (
		<>
			<BaseControl>
				<ButtonGroup>
					{NORMAL_HOVER.map(({ value, label }) => (
						<Button
							variant={
								ColorType === value ? 'primary' : 'secondary'
							}
							onClick={() =>
								setAttributes({
									[`${controlName}ColorType`]: value,
								})
							}
						>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>
			{ColorType === 'normal' && (
				<ColorControl
					label={__('Color', 'zolo-blocks')}
					color={Color}
					onChange={(value) =>
						setAttributes({
							[`${controlName}Color`]: value,
						})
					}
				/>
			)}
			{ColorType === 'hover' && (
				<ColorControl
					label={__('Hover Color', 'zolo-blocks')}
					color={HoverColor}
					onChange={(value) =>
						setAttributes({
							[`${controlName}HoverColor`]: value,
						})
					}
				/>
			)}
		</>
	);
};

export default ColorsGroupControl;
