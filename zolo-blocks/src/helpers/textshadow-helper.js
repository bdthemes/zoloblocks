export const generateTextShadowAttributies = (controlName) => {
	const shdAttrs = {
		// shadow attributes
		[`${controlName}shadowColor`]: {
			type: 'string',
		},
		[`${controlName}shadowUnit`]: {
			type: 'string',
			default: 'px',
		},
		[`${controlName}hShadow`]: {
			type: 'number',
		},
		[`${controlName}vShadow`]: {
			type: 'number',
		},
		[`${controlName}blur`]: {
			type: 'number',
		},
	};

	return {
		...shdAttrs,
	};
};

export const generateTextShadowStyles = ({ controlName, attributes }) => {
	const {
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}shadowUnit`]: shadowUnit,
		[`${controlName}hShadow`]: hShadow = 0,
		[`${controlName}vShadow`]: vShadow = 0,
		[`${controlName}blur`]: blur = 0,
	} = attributes;

	const textShadowStyle = `${
		shadowColor
			? `text-shadow: ${hShadow}${shadowUnit} ${vShadow}${shadowUnit} ${blur}${shadowUnit} ${shadowColor};`
			: ' '
	}
	`;

	return {
		textShadowStyle,
	};
};
