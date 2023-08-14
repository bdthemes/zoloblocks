const {
	generateResAlignmentAttributies,
	generateResRangeAttributies,
	generateBorderAttributies,
	generateDimensionAttributes,
	generateTypographyAttributes,
	generateBoxShadowAttributies,
	generateTextShadowAttributies,
	generateTextStrokeAttributies,
	generateNormalBGAttributes,
} = window.zoloModule;

import {
	ICON_BOX_ALIGNMENT,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	DESCRIPTION_MARGIN,
	ICON_BORDER,
	ICON_BOX_SHADOW,
	BUTTON_BOX_SHADOW,
	BUTTON_HOVER_BOX_SHADOW,
	ICON_BORDER_RADIUS,
	ICON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_BORDER,
	ICON_TEXT_SPACING,
	ICON_PADDING,
	ICON_MARGIN,
	BUTTON_BORDER_RADIUS,
	BUTTON_MARGIN,
	BUTTON_PADDING,
	CONTAINER_BACKGROUND,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
	ICON_IMAGE_SIZE,
	ICON_IMAGE_BORDER_RADIUS,
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

	// Item
	...generateNormalBGAttributes( CONTAINER_BACKGROUND ),
	...generateDimensionAttributes( CONTAINER_PADDING ),
	...generateDimensionAttributes( CONTAINER_MARGIN ),

	// Icon
	...generateResAlignmentAttributies( ICON_BOX_ALIGNMENT, {
		defaultAlign: 'left',
	} ),
	...generateBorderAttributies( ICON_BORDER ),
	...generateResRangeAttributies( ICON_SIZE, {
		default: 16,
	} ),
	...generateResRangeAttributies( ICON_TEXT_SPACING, {
		default: 5,
	} ),
	...generateDimensionAttributes( ICON_BORDER_RADIUS ),
	...generateDimensionAttributes( ICON_PADDING ),
	...generateDimensionAttributes( ICON_MARGIN ),
	...generateBoxShadowAttributies( ICON_BOX_SHADOW ),

	// Button
	...generateBorderAttributies( BUTTON_BORDER ),
	...generateResRangeAttributies( BUTTON_ICON_SIZE, {
		default: 16,
	} ),
	...generateDimensionAttributes( BUTTON_BORDER_RADIUS ),
	...generateDimensionAttributes( BUTTON_PADDING ),
	...generateDimensionAttributes( BUTTON_MARGIN ),
	...generateBoxShadowAttributies( BUTTON_BOX_SHADOW ),
	...generateBoxShadowAttributies( BUTTON_HOVER_BOX_SHADOW ),

	// Title
	...generateDimensionAttributes( TITLE_MARGIN ),
	...generateTextShadowAttributies( TITLE_TEXT_SHADOW ),
	...generateTextStrokeAttributies( TITLE_TEXT_STROKE ),

	// Description
	...generateDimensionAttributes( DESCRIPTION_MARGIN ),

	// Typography
	...generateTypographyAttributes( Object.values( typographyObjs ) ),

	// Image
	...generateResRangeAttributies( ICON_IMAGE_SIZE, {
		default: 16,
	} ),
	...generateResRangeAttributies( ICON_IMAGE_BORDER_RADIUS, {
		default: 16,
	} ),

	//Block Specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},
	label: {
		type: 'string',
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
	globalLink: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
	},
	iconPosition: {
		type: 'string',
		default: 'right',
	},
	topIconPosition: {
		type: 'string',
		default: 'left',
	},
	textColor: {
		type: 'string',
	},
	textHoverColor: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},
	descHoverColor: {
		type: 'string',
	},
	iconType: {
		type: 'string',
		default: 'icon',
	},
	iconAlignment: {
		type: 'string',
		default: 'flex-start',
	},
	mainIcon: {
		type: 'object',
		default: {
			'admin-generic': {
				name: 'admin generic',
				source: 'dashicon',
				type: '',
			},
		},
	},
	buttonIcon: {
		type: 'object',
		default: {
			'admin-generic': {
				name: 'admin generic',
				source: 'dashicon',
				type: '',
			},
		},
	},
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconBackgroundColor: {
		type: 'string',
	},
	iconBackgroundHoverColor: {
		type: 'string',
	},
	iconTypeImage: {
		type: 'object',
	},
	iconBoxTitle: {
		type: 'string',
	},
	iconBoxDescription: {
		type: 'string',
	},
	buttonText: {
		type: 'string',
		default: 'Read More',
	},
	buttonLink: {
		type: 'object',
		default: {
			url: '#',
			openInNewTab: false,
		},
	},
	btnColor: {
		type: 'string',
	},
	btnHoverColor: {
		type: 'string',
	},
	btnBgColor: {
		type: 'string',
	},
	btnBgHoverColor: {
		type: 'string',
	},
	buttonIconColor: {
		type: 'string',
	},
	buttonIconHoverColor: {
		type: 'string',
	},
	presetOneStyles: {
		type: 'object',
		default: {
			contentPosition: 'left',
			iconPosition: 'row',
			buttonIconPosition: 'row-reverse',
		},
	},
	presetTwoStyles: {
		type: 'object',
		default: {
			contentPosition: 'left',
			iconPosition: 'row-reverse',
			buttonIconPosition: 'row-reverse',
		},
	},
	presetThreeStyles: {
		type: 'object',
		default: {
			contentPosition: 'right',
			iconPosition: 'row-reverse',
			buttonIconPosition: 'row-reverse',
		},
	},
};

export default attributes;
