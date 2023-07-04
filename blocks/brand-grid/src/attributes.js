const { generateResRangeAttributies } = window.zoloModule;

import { GRID_COLUMNS, COLUMNS_GAP, ROWS_GAP } from './constants';
const attributes = {
	//Common Attributes
	uniqueId: {
		type: 'string',
	},

	//grid system
	...generateResRangeAttributies( GRID_COLUMNS, {
		defaultRange: 3,
		noUnits: true,
	} ),
	...generateResRangeAttributies( COLUMNS_GAP, {
		defaultRange: 30,
	} ),
	...generateResRangeAttributies( ROWS_GAP, {
		defaultRange: 30,
	} ),

	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},
	heading: {
		type: 'string',
		default: 'h1',
	},
	showBrandName: {
		type: 'boolean',
		default: true,
	},
	showBrandLink: {
		type: 'boolean',
		default: true,
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
