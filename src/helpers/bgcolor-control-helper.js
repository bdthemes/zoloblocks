export const generateBgColorAttributes = (controlName, defaults = {}) => {
	const { BgColor } = defaults;
	return {
		[`${controlName}BgType`]: {
			type: 'string',
			default: 'classic',
		},
		[`${controlName}BgColor`]: {
			type: 'string',
			default: BgColor,
		},
	};
};

export const generateBgColorStyle = ({ controlName, property, attributes }) => {
	const {
		[`${controlName}BgType`]: BgType,
		[`${controlName}BgColor`]: BgColor,
	} = attributes;

	const bgColor =
		BgColor || BgColor == ''
			? BgType === 'classic'
				? property + ':' + BgColor + ';'
				: 'background-image:' + BgColor + ';'
			: '';

	return bgColor;
};
