export const generateResAlignmentAttributies = (controlName, defaults = {}) => {
	const { defaultAlign } = defaults;
	const desktopAlign = defaultAlign
		? {
				[`${controlName}ZRPAlign`]: {
					type: 'string',
					default: defaultAlign,
				},
		  }
		: {
				[`${controlName}ZRPAlign`]: {
					type: 'string',
				},
		  };
	return {
		...desktopAlign,
		[`TAB${controlName}ZRPAlign`]: {
			type: 'string',
		},
		[`MOB${controlName}ZRPAlign`]: {
			type: 'string',
		},
	};
};

export const generateResAlignmentStyle = ({
	controlName,
	property,
	attributes,
}) => {
	const {
		[`${controlName}ZRPAlign`]: desktopAlign,
		[`TAB${controlName}ZRPAlign`]: tabAlign,
		[`MOB${controlName}ZRPAlign`]: mobAlign,
	} = attributes;

	const desktopAlignStyle =
		desktopAlign || desktopAlign == ''
			? property + ':' + desktopAlign + ';'
			: '';

	const tabAlignStyle =
		tabAlign || tabAlign == '' ? property + ':' + tabAlign + ';' : '';
	const mobAlignStyle =
		mobAlign || mobAlign == '' ? property + ':' + mobAlign + ';' : '';
	return { desktopAlignStyle, tabAlignStyle, mobAlignStyle };
};
