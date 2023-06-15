const { generateResAlignmentAttributies } = window.zoloModule;

import { ICON_BOX_ALIGNMENT } from './constants';
const attributes = {
	//Common Attributes
	uniqueId: {
		type: 'string',
	},

	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},
	presetOneStyles: {
		type: 'object',
		default: {
			iconPosition: 'left',
			buttonPosition: 'left',
			buttonIconPosition: 'row-reverse',
		},
	},
	presetTwoStyles: {
		type: 'object',
		default: {
			iconPosition: 'top',
			buttonPosition: 'left',
			buttonIconPosition: 'row-reverse',
		},
	},
	presetThreeStyles: {
		type: 'object',
		default: {
			iconPosition: 'right',
		},
	},
};

export default attributes;
