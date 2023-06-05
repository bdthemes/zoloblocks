/**
 * Internal dependencies
 */
const {
	generateResRangeAttributies,
	generateDimensionAttributes,
	generateNormalBGAttributes,
} = window.zoloModule;

import {
	TEAM_GRID_BG,
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
	...generateNormalBGAttributes(TEAM_GRID_BG),
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
};

export default attributes;
