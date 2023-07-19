const { generateTypographyAttributes, generateResRangeAttributies } =
	window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import { GRID_COLUMNS, COLUMNS_GAP, ROWS_GAP } from './constants';

const attributes = {
	//Common Attributes
	uniqueId: {
		type: 'string',
	},
	resDevice: {
		type: 'string',
		default: 'Desktop',
	},
	blockStyle: {
		type: 'object',
	},

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

	//typography
	...generateTypographyAttributes( Object.values( typographyObjs ) ),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},

	advancedGallery: {
		type: 'array',
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
};

export default attributes;
