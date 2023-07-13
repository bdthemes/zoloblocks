export const generateBoxShadowAttributies = (controlName) => {
	const shdAttrs = {
		// shadow attributes
		[`${controlName}hOffset`]: {
			type: 'number',
		},
		[`${controlName}vOffset`]: {
			type: 'number',
		},
		[`${controlName}blur`]: {
			type: 'number',
		},
		[`${controlName}spread`]: {
			type: 'number',
		},
		[`${controlName}shadowColor`]: {
			type: 'string',
		},
		[`${controlName}shadowType`]: {
			type: 'string',
			default: 'none',
		},
		[`${controlName}shadowUnit`]: {
			type: 'string',
			default: 'px',
		},
	};

	return {
		...shdAttrs,
	};
};

export const generateBoxShadowStyles = ({ controlName, attributes }) => {
	const {
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset = 0,
		[`${controlName}vOffset`]: vOffset = 0,
		[`${controlName}blur`]: blur = 0,
		[`${controlName}spread`]: spread = 0,
		[`${controlName}shadowType`]: type = 'none',
		[`${controlName}shadowUnit`]: unit = 'px',
	} = attributes;

	const boxShadowStyle = `${
		shadowColor
			? `box-shadow: ${shadowColor} ${hOffset}${unit} ${vOffset}${unit} ${blur}${unit} ${spread}${unit} ${
					type === 'inset' ? 'inset' : ''
			  };`
			: ' '
	}
	`;

	return {
		boxShadowStyle,
	};
};
