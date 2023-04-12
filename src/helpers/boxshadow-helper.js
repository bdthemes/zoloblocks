export const generateBoxShadowAttributies = (controlName, defaults = {}) => {
	const { enableTransition = false } = defaults;

	const shdAttrs = {
		// shadow attributes  ⬇
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
		[`${controlName}inset`]: {
			type: 'boolean',
			default: false,
		},
	};

	if (enableTransition) {
		return {
			...shdAttrs,
		};
	} else {
		return {
			...shdAttrs,
			[`${controlName}shadowTransition`]: {
				type: 'number',
				default: 0.5,
			},
		};
	}
};

export const generateBoxShadowStyles = ({ controlName, attributes }) => {
	const {
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset = 0,
		[`${controlName}vOffset`]: vOffset = 0,
		[`${controlName}blur`]: blur = 0,
		[`${controlName}spread`]: spread = 0,
		[`${controlName}inset`]: inset,
		[`${controlName}shadowTransition`]: shadowTransition,
	} = attributes;

	const boxShadowStyle = `${
		shadowColor
			? `box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${
					inset ? 'inset' : ''
			  };`
			: ' '
	}
	`;

	const transitionStyle = `box-shadow ${shadowTransition || 0}s `;

	return {
		boxShadowStyle,
		transitionStyle,
	};
};
