const {
	generateResRangeAttributies,
	generateNormalBGAttributes,
	generateBorderAttributies,
	generateDimensionAttributes,
	generateBoxShadowAttributies,
} = window.zoloModule;

import {
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	CONTAINER_BORDER,
	CONTAINER_BORDER_HOVER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_PADDING,
	CONTAINER_BOX_SHADOW,
	CONTAINER_BOX_SHADOW_HOVER,
} from './constants';
const attributes = {
	//Common Attributes
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	// container
	...generateNormalBGAttributes( CONTAINER_BACKGROUND ),
	...generateNormalBGAttributes( CONTAINER_HOVER_BACKGROUND ),
	...generateBorderAttributies( CONTAINER_BORDER ),
	...generateBorderAttributies( CONTAINER_BORDER_HOVER ),
	...generateDimensionAttributes( CONTAINER_BORDER_RADIUS ),
	...generateDimensionAttributes( CONTAINER_PADDING ),
	...generateBoxShadowAttributies( CONTAINER_BOX_SHADOW ),
	...generateBoxShadowAttributies( CONTAINER_BOX_SHADOW_HOVER ),
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
	containerBackgroundColor: {
		type: 'string',
	},
	containerBackgroundHoverColor: {
		type: 'string',
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
