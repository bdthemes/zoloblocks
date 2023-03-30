import {
	BaseControl,
	ButtonGroup,
	Button,
	GradientPicker,
	Dashicon,
	Tooltip,
} from '@wordpress/components';
import { BACKGROUND_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import { __ } from '@wordpress/i18n';
import { withInstanceId } from '@wordpress/compose';

const BgColorControl = ({ controlName, resRequiredProps, instanceId }) => {
	const { setAttributes, attributes } = resRequiredProps;
	const {
		// background type
		[`${controlName}BgType`]: BgType,
		// normal bg color
		[`${controlName}BgColor`]: BgColor,
	} = attributes;

	return (
		<>
			<div className="zolo-bgcolors-wrapper">
				<BaseControl>
					<div className="zolo-components zolo-flex">
						<label
							htmlFor={`zolo-bg-colors-${instanceId}`}
							className="bgcontrol-label"
						>
							{__('Background Type', 'zolo-blocks')}
						</label>
						<ButtonGroup id={`zolo-bg-colors-${instanceId}`}>
							{BACKGROUND_TYPES.map(({ value, label, icon }) => (
								<Button
									variant={
										BgType === value
											? 'primary'
											: 'secondary'
									}
									onClick={() =>
										setAttributes({
											[`${controlName}BgType`]: value,
										})
									}
								>
									<Tooltip
										text={label}
										position="center bottom"
									>
										<Dashicon icon={icon} />
									</Tooltip>
								</Button>
							))}
						</ButtonGroup>
					</div>
				</BaseControl>
			</div>
			{(BgType === 'classic' && (
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
					<GradientPicker
						value={BgColor}
						onChange={(currentGradient) =>
							setAttributes({
								[`${controlName}BgColor`]: currentGradient,
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
				))}
		</>
	);
};

export default withInstanceId(BgColorControl);
