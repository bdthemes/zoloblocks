const {
	generateTypographyAttributes,
	generateResRangeAttributies,
	generateNormalBGAttributes,
	generateDimensionAttributes,
	generateBoxShadowAttributies,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import {
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_HOVER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	IMAGE_BORDER_RADIUS,
	IMAGE_BOX_SHADOW,
	IMAGE_BACKGROUND,
	IMAGE_HOVER_BORDER_RADIUS,
	IMAGE_HOVER_BOX_SHADOW,
	IMAGE_HOVER_BACKGROUND,
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

	// Container
	...generateNormalBGAttributes( CONTAINER_BACKGROUND ),
	...generateNormalBGAttributes( CONTAINER_HOVER_BACKGROUND ),
	...generateDimensionAttributes( CONTAINER_BORDER_RADIUS ),
	...generateDimensionAttributes( CONTAINER_HOVER_BORDER_RADIUS ),
	...generateBoxShadowAttributies( CONTAINER_BOX_SHADOW ),
	...generateBoxShadowAttributies( CONTAINER_HOVER_BOX_SHADOW ),

	// Image
	...generateNormalBGAttributes( IMAGE_BACKGROUND ),
	...generateNormalBGAttributes( IMAGE_HOVER_BACKGROUND ),
	...generateDimensionAttributes( IMAGE_BORDER_RADIUS ),
	...generateDimensionAttributes( IMAGE_HOVER_BORDER_RADIUS ),
	...generateBoxShadowAttributies( IMAGE_BOX_SHADOW ),
	...generateBoxShadowAttributies( IMAGE_HOVER_BOX_SHADOW ),

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
