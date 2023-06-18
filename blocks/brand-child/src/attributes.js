const {
	generateResAlignmentAttributies,
	generateDimensionAttributes,
	generateTypographyAttributes,
	generateTextShadowAttributies,
	generateTextStrokeAttributies,
	generateNormalBGAttributes,
	generateBorderAttributies,
	generateBoxShadowAttributies,
} = window.zoloModule;

import {
	TITLE_ALIGNMENT,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	LINK_TEXT_SHADOW,
	LINK_TEXT_STROKE,
	CONTENT_ALIGNMENT,
	LINK_MARGIN,
	CONTAINER_BACKGROUND,
	CONTAINER_BOX_SHADOW,
	CONTAINER_BORDER_RADIUS,
	BRAND_PHOTO_BORDER_RADIUS,
	BRAND_PHOTO_BOX_SHADOW,
	BRAND_PHOTO_BG,
	BRAND_PHOTO_PADDING,
	BRAND_PHOTO_MARGIN,
	CONTAINER_BORDER,
} from './constants';
import * as typographyObjs from './constants/typoPrefixConstant';
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
	// content alignment
	...generateResAlignmentAttributies( CONTENT_ALIGNMENT, {
		defaultAlign: 'left',
	} ),

	// container
	...generateNormalBGAttributes( CONTAINER_BACKGROUND ),
	...generateBorderAttributies( CONTAINER_BORDER ),
	...generateDimensionAttributes( CONTAINER_BORDER_RADIUS ),
	...generateBoxShadowAttributies( CONTAINER_BOX_SHADOW ),

	// photo
	...generateDimensionAttributes( BRAND_PHOTO_BORDER_RADIUS ),
	...generateBoxShadowAttributies( BRAND_PHOTO_BOX_SHADOW ),
	...generateNormalBGAttributes( BRAND_PHOTO_BG ),
	...generateDimensionAttributes( BRAND_PHOTO_PADDING ),
	...generateDimensionAttributes( BRAND_PHOTO_MARGIN ),

	//title
	...generateDimensionAttributes( TITLE_MARGIN ),
	...generateTextShadowAttributies( TITLE_TEXT_SHADOW ),
	...generateTextStrokeAttributies( TITLE_TEXT_STROKE ),
	...generateResAlignmentAttributies( TITLE_ALIGNMENT, {
		defaultAlign: '',
	} ),

	//link margin
	...generateDimensionAttributes( LINK_MARGIN ),
	...generateTextShadowAttributies( LINK_TEXT_SHADOW ),
	...generateTextStrokeAttributies( LINK_TEXT_STROKE ),
	//typography
	...generateTypographyAttributes( Object.values( typographyObjs ) ),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},
	showBrandName: {
		type: 'boolean',
		default: true,
	},
	showWebsiteLink: {
		type: 'boolean',
		default: true,
	},
	brandPhoto: {
		type: 'object',
	},
	brandName: {
		type: 'string',
	},
	brandAnchorText: {
		type: 'string',
	},
	brandDetailPageLink: {
		type: 'object',
		default: {
			url: '#',
			opensInNewTab: false,
		},
	},
	titleTag: {
		type: 'string',
		default: 'h2',
	},
	link: {
		type: 'object',
		default: {
			url: '#',
			opensInNewTab: false,
			addNoFollow: false,
		},
	},
	openInNewTab: {
		type: 'boolean',
		default: false,
	},
	addNoFollow: {
		type: 'boolean',
		default: false,
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
	textColor: {
		type: 'string',
	},
	linkColor: {
		type: 'string',
	},
	linkHoverColor: {
		type: 'string',
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
