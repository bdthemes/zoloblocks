export const generateBgColorsGroupAttributes = (controlName, defaults = {}) => {
	const { BgColor, BgHoverColor } = defaults;
	return {
		[`${controlName}ColorType`]: {
			type: 'string',
			default: 'normal',
		},
		[`${controlName}BgType`]: {
			type: 'string',
			default: 'classic',
		},
		[`${controlName}BgColor`]: {
			type: 'string',
			default: BgColor,
		},

		[`${controlName}BgHoverColor`]: {
			type: 'string',
			default: BgHoverColor,
		},
	};
};

export const generateBgColorsGroupStyle = ({
	controlName,
	property,
	attributes,
}) => {
	const {
		[`${controlName}BgType`]: BgType,
		[`${controlName}BgColor`]: BgColor,
		[`${controlName}BgHoverColor`]: BgHoverColor,
	} = attributes;

	const bgColor =
		BgColor || BgColor == ''
			? BgType === 'classic'
				? property + ':' + BgColor + ';'
				: 'background-image:' + BgColor
			: '';

	const bgHoverColor =
		BgHoverColor || BgHoverColor == ''
			? BgType === 'classic'
				? property + ':' + BgHoverColor + ';'
				: 'background-image:' + BgHoverColor
			: '';

	return { bgColor, bgHoverColor };
};
