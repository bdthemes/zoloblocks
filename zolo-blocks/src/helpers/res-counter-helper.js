import { prefix } from '../global/constants';

export const generateResCounterAttributies = (controlName, defaults = {}) => {
	const { defaultRange } = defaults;
	const desktopRange = defaultRange
		? {
				[`${prefix}${controlName}Range`]: {
					type: 'number',
					default: defaultRange,
				},
		  }
		: {
				[`${prefix}${controlName}Range`]: {
					type: 'number',
				},
		  };

	return {
		...desktopRange,
		[`${prefix}TAB${controlName}Range`]: {
			type: 'number',
		},
		[`${prefix}MOB${controlName}Range`]: {
			type: 'number',
		},
	};
};

export const generateResCounterStyle = ({
	controlName,
	property = '',
	attributes,
	noProperty = false,
}) => {
	const {
		[`${prefix}${controlName}Range`]: desktopRange,
		[`${prefix}TAB${controlName}Range`]: tabRange,
		[`${prefix}MOB${controlName}Range`]: mobRange,
	} = attributes;

	const desktopRangeStyle =
		desktopRange || desktopRange == 0
			? (noProperty ? '' : property + ':') +
			  desktopRange +
			  (noProperty ? '' : ';')
			: '';

	const tabRangeStyle =
		tabRange || tabRange == 0
			? (noProperty ? '' : property + ':') +
			  tabRange +
			  (noProperty ? '' : ';')
			: '';

	const mobRangeStyle =
		mobRange || mobRange == 0
			? (noProperty ? '' : property + ':') +
			  mobRange +
			  (noProperty ? '' : ';')
			: '';

	return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
