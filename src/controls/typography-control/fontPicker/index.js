import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';

import { googleFonts } from './googleFonts';

const FontFamilyPicker = ({
	label,
	value,
	help,
	instanceId,
	onChange,
	className,
	...props
}) => {
	const fonts = [
		{ value: '', label: __('Default', 'zolo-blocks') },
		{ value: 'Arial', label: 'Arial' },
		{ value: 'Helvetica', label: 'Helvetica' },
		{ value: 'Times-New-Roman', label: 'Times New Roman' },
		{ value: 'Georgia', label: 'Georgia' },
	];

	//Add Google Fonts
	Object.keys(googleFonts).map((font) => {
		fonts.push({ value: font, label: googleFonts[font].family });
	});

	return (
		<BaseControl label={label} id={id} help={help} className={className}>
			<Select2
				name="zb-select-font"
				defaultValue={{
					value: (value || '').replace(/\s+/g, '-'),
					label: value,
				}}
				onChange={onChangeValue}
				options={fonts}
			/>
		</BaseControl>
	);
};

export default FontFamilyPicker;
