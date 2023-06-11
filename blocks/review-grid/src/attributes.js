/**
 * Internal dependencies
 */
const {
	generateResRangeAttributies,
	generateDimensionAttributes,
	generateNormalBGAttributes,
} = window.zoloModule;

import {
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	REVIEW_GRID_BG,
	REVIEW_GRID_PADDING,
	REVIEW_GRID_MARGIN,
} from './constants';

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
	preset: {
		type: 'string',
		default: 'default',
	},
	showDesignation: {
		type: 'boolean',
		default: true,
	},
	showTestimonialMessage: {
		type: 'boolean',
		default: true,
	},
	...generateNormalBGAttributes(REVIEW_GRID_BG),
	...generateResRangeAttributies(GRID_COLUMNS, {
		defaultRange: 3,
		noUnits: true,
	}),
	...generateResRangeAttributies(COLUMNS_GAP, {
		defaultRange: 30,
	}),
	...generateResRangeAttributies(ROWS_GAP, {
		defaultRange: 30,
	}),
	...generateDimensionAttributes(REVIEW_GRID_MARGIN),
	...generateDimensionAttributes(REVIEW_GRID_PADDING),
};

export default attributes;
