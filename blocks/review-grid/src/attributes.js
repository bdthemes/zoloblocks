/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes } =
	window.zoloModule;

import {
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
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
	containerBg: {
		type: 'string',
	},
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
	...generateDimensionAttributes(CONTAINER_MARGIN),
	...generateDimensionAttributes(CONTAINER_PADDING),
	preset: {
		type: 'string',
		default: 'style-1',
	},
	showDesignation: {
		type: 'boolean',
		default: true,
	},
	showTestimonialMessage: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
