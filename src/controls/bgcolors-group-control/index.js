import {
	BaseControl,
	ButtonGroup,
	Button,
	GradientPicker,
} from '@wordpress/components';
import { NORMAL_HOVER, BACKGROUND_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import { __ } from '@wordpress/i18n';
import GradientControl from '../gradient-control';
import { withInstanceId } from '@wordpress/compose';

const BgColorsGroupControl = ({
	controlName,
	resRequiredProps,
	instanceId,
}) => {
	const { setAttributes, attributes } = resRequiredProps;

	const {
		[`${controlName}ColorType`]: ColorType,

		// background type
		[`${controlName}BgType`]: BgType,

		// normal bg color
		[`${controlName}BgColor`]: BgColor,

		// hover bg color
		[`${controlName}BgHoverColor`]: BgHoverColor,
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
			<BaseControl>
				<label htmlFor={`zolo-bg-colors-${instanceId}`}>
					{__('Type', 'zolo-blocks')}
				</label>
				<ButtonGroup>
					{BACKGROUND_TYPES.map(({ value, label }) => (
						<Button
							variant={BgType === value ? 'primary' : 'secondary'}
							onClick={() =>
								setAttributes({
									[`${controlName}BgType`]: value,
								})
							}
						>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>
			{ColorType === 'normal' &&
				((BgType === 'classic' && (
					<ColorControl
						label={__('Color', 'zolo-blocks')}
						color={BgColor}
						onChange={(value) =>
							setAttributes({
								[`${controlName}BgColor`]: value,
							})
						}
					/>
				)) ||
					(BgType === 'gradient' && (
						<>
							<GradientPicker
								value={BgColor}
								onChange={(currentGradient) =>
									setAttributes({
										[`${controlName}BgColor`]:
											currentGradient,
									})
								}
								gradients={[
									{
										name: 'Green',
										gradient:
											'linear-gradient(135deg, #80F1A6 0%, #EFD000 100%)',
										slug: 'green',
									},
									{
										name: 'Blue',
										gradient:
											'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
										slug: 'blue',
									},
									{
										name: 'Dark Blue',
										gradient:
											'linear-gradient(50deg, #15D2E3 10%, #11D6E2 40%, #10D7E2 80%)',
										slug: 'darkBlue',
									},
									{
										name: 'Yellow',
										gradient:
											'linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)',
										slug: 'yellow',
									},
									{
										name: 'Merun',
										gradient:
											'linear-gradient(135deg, #E25544 2.88%, #620C90 98.14%)',
										slug: 'merun',
									},
								]}
							/>
						</>
					)))}

			{ColorType === 'hover' &&
				((BgType === 'classic' && (
					<ColorControl
						label={__('Hover Color', 'zolo-blocks')}
						color={BgHoverColor}
						onChange={(value) =>
							setAttributes({
								[`${controlName}BgHoverColor`]: value,
							})
						}
					/>
				)) ||
					(BgType === 'gradient' && (
						<>
							<GradientPicker
								value={BgHoverColor}
								onChange={(currentGradient) =>
									setAttributes({
										[`${controlName}BgHoverColor`]:
											currentGradient,
									})
								}
								gradients={[
									{
										name: 'Green',
										gradient:
											'linear-gradient(135deg, #80F1A6 0%, #EFD000 100%)',
										slug: 'green',
									},
									{
										name: 'Blue',
										gradient:
											'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
										slug: 'blue',
									},
									{
										name: 'Dark Blue',
										gradient:
											'linear-gradient(50deg, #15D2E3 10%, #11D6E2 40%, #10D7E2 80%)',
										slug: 'darkBlue',
									},
									{
										name: 'Yellow',
										gradient:
											'linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)',
										slug: 'yellow',
									},
									{
										name: 'Merun',
										gradient:
											'linear-gradient(135deg, #E25544 2.88%, #620C90 98.14%)',
										slug: 'merun',
									},
								]}
							/>
						</>
					)))}
		</>
	);
};

export default withInstanceId(BgColorsGroupControl);
