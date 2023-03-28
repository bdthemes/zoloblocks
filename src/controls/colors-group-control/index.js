import { BaseControl, TabPanel } from '@wordpress/components';
import { NORMAL_HOVER } from '../../global/constants';
import ColorControl from '../color-control';
import { __ } from '@wordpress/i18n';

const ColorsGroupControl = ({ controlName, resRequiredProps }) => {
	const { setAttributes, attributes } = resRequiredProps;
	const {
		// normal color
		[`${controlName}Color`]: Color,
		// hover color
		[`${controlName}HoverColor`]: HoverColor,
	} = attributes;

	return (
		<>
			<BaseControl>
				<TabPanel
					className="zolo-colors-group-tab"
					activeClass="active-tab"
					tabs={NORMAL_HOVER.map(({ value, label }) => ({
						name: value,
						title: label,
					}))}
				>
					{(tab) => {
						if (tab.name === 'normal') {
							return (
								<>
									<ColorControl
										label={__('Color', 'zolo-blocks')}
										color={Color}
										onChange={(value) =>
											setAttributes({
												[`${controlName}Color`]: value,
											})
										}
									/>
								</>
							);
						} else {
							return (
								<>
									<ColorControl
										label={__('Hover Color', 'zolo-blocks')}
										color={HoverColor}
										onChange={(value) =>
											setAttributes({
												[`${controlName}HoverColor`]:
													value,
											})
										}
									/>
								</>
							);
						}
					}}
				</TabPanel>
			</BaseControl>
		</>
	);
};

export default ColorsGroupControl;
