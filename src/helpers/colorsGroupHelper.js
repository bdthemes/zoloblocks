export const generateColorsGroupAttributes = (controlName, defaults = {}) => {
	const { Color, HoverColor } = defaults;
	return {
		[`${controlName}ColorType`]: {
			type: 'string',
			default: 'normal',
		},
		[`${controlName}Color`]: {
			type: 'string',
			default: Color,
		},
		[`${controlName}HoverColor`]: {
			type: 'string',
			default: HoverColor,
		},
	};
};

export const generateColorsGroupStyle = ({
	controlName,
	property,
	attributes,
}) => {
	const {
		[`${controlName}Color`]: Color,
		[`${controlName}HoverColor`]: HoverColor,
	} = attributes;

	const color = Color || Color == '' ? property + ':' + Color + ';' : '';
	const hoverColor =
		HoverColor || HoverColor == '' ? property + ':' + HoverColor + ';' : '';

	return { color, hoverColor };
};
