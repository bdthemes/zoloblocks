const {
	generateResAlignmentAttributies,
	generateResRangeAttributies,
	generateBorderAttributies,
	generateDimensionAttributes,
	generateTypographyAttributes,
	generateBoxShadowAttributies,
	generateTextShadowAttributies,
	generateTextStrokeAttributies,
} = window.zoloModule;

import {
	ICON_BOX_ALIGNMENT,
	TITLE_ALIGNMENT,
	TITLE_MARGIN,
	TITLE_TEXT_SHADOW,
	TITLE_TEXT_STROKE,
	DESCRIPTION_MARGIN,
	DESC_ALIGNMENT,
	ICON_BORDER,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	ICON_BORDER_RADIUS,
	ICON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_BORDER,
	ICON_TEXT_SPACING,
	ICON_SPACING,
	ICON_PADDING,
	ICON_MARGIN,
	BUTTON_BORDER_RADIUS,
	BUTTON_MARGIN,
	BUTTON_PADDING,
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
	//alignment attributes
	...generateResAlignmentAttributies( ICON_BOX_ALIGNMENT, {
		defaultAlign: 'left',
	} ),
	//title alignment attributes
	...generateResAlignmentAttributies( TITLE_ALIGNMENT, {
		defaultAlign: '',
	} ),
	//description alignment attributes
	...generateResAlignmentAttributies( DESC_ALIGNMENT, {
		defaultAlign: '',
	} ),
	// border attributes
	...generateBorderAttributies( ICON_BORDER ),
	// button border
	...generateBorderAttributies( BUTTON_BORDER ),
	//icon size
	...generateResRangeAttributies( ICON_SIZE, {
		default: 16,
	} ),
	//button
	...generateResRangeAttributies( BUTTON_ICON_SIZE, {
		default: 16,
	} ),
	...generateDimensionAttributes( BUTTON_BORDER_RADIUS ),
	...generateDimensionAttributes( BUTTON_PADDING ),
	...generateDimensionAttributes( BUTTON_MARGIN ),
	//icon text spacing
	...generateResRangeAttributies( ICON_TEXT_SPACING, {
		default: 5,
	} ),
	//icon spacing
	...generateResRangeAttributies( ICON_SPACING, {
		default: 5,
	} ),
	//icon border radius
	...generateDimensionAttributes( ICON_BORDER_RADIUS ),
	//icon padding
	...generateDimensionAttributes( ICON_PADDING ),
	//icon margin
	...generateDimensionAttributes( ICON_MARGIN ),
	//icon boxshadow
	...generateBoxShadowAttributies( ICON_BOX_SHADOW ),
	//icon hover boxshadow
	...generateBoxShadowAttributies( ICON_HOVER_BOX_SHADOW ),
	//title margin
	...generateDimensionAttributes( TITLE_MARGIN ),
	...generateTextShadowAttributies( TITLE_TEXT_SHADOW ),
	...generateTextStrokeAttributies( TITLE_TEXT_STROKE ),
	//description margin
	...generateDimensionAttributes( DESCRIPTION_MARGIN ),
	//typography
	...generateTypographyAttributes( Object.values( typographyObjs ) ),
	//Block specific Attributes
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
		default: 'The Theme Settings',
	},
	iconBoxDescription: {
		type: 'string',
		default:
			'The Theme Setting is a website that provides users with a range of tools to customize their web experience.',
	},
	buttonText: {
		type: 'string',
		default: 'Read More',
	},
	buttonLink: {
		type: 'string',
		default: '#',
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
