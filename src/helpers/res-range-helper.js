export const generateResRangeAttributies = (controlName, defaults = {}) => {
	const { defaultRange, noUnits, defaultUnit = 'px' } = defaults;
	const desktopRange = defaultRange
		? {
				[`${controlName}ZRPRange`]: {
					type: 'number',
					default: defaultRange,
				},
		  }
		: {
				[`${controlName}ZRPRange`]: {
					type: 'number',
				},
		  };
	const units =
		noUnits == true
			? {}
			: {
					[`${controlName}ZRPUnit`]: {
						type: 'string',
						default: defaultUnit,
					},

					[`TAB${controlName}ZRPUnit`]: {
						type: 'string',
						default: 'px',
					},
					[`MOB${controlName}ZRPUnit`]: {
						type: 'string',
						default: 'px',
					},
			  };

	return {
		...desktopRange,
		[`TAB${controlName}ZRPRange`]: {
			type: 'string',
		},
		[`MOB${controlName}ZRPRange`]: {
			type: 'string',
		},
		...units,
	};
};

export const generateResRangeStyle = ({
	controlName,
	property,
	attributes,
}) => {
	const {
		[`${controlName}ZRPRange`]: desktopRange,
		[`TAB${controlName}ZRPRange`]: tabRange,
		[`MOB${controlName}ZRPRange`]: mobRange,

		[`${controlName}ZRPUnit`]: desktopUnit,
		[`TAB${controlName}ZRPUnit`]: tabUnit,
		[`MOB${controlName}ZRPUnit`]: mobUnit,
	} = attributes;

	const desktopRangeStyle =
		desktopRange || desktopRange == 0
			? property + ':' + desktopRange + desktopUnit + ';'
			: '';

	const tabRangeStyle =
		tabRange || tabRange == 0
			? property + ':' + tabRange + tabUnit + ';'
			: '';
	const mobRangeStyle =
		mobRange || mobRange == 0
			? property + ':' + mobRange + mobUnit + ';'
			: '';
	return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
