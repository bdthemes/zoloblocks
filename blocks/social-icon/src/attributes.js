const {
	generateResRangeAttributies,
	generateBorderAttributies,
	generateResCounterAttributies,
	generateDimensionAttributes,
	generateBoxShadowAttributies,
	generateTypographyAttributes,
} = window.zoloModule;

import {
	BUTTON_PADDING,
	BUTTON_BORDER,
	BTN_BORDER_RADIUS,
	BTN_SHADOW,
	BTN_HOVER_SHADOW,
	ICON_TEXT_SPACING,
	COLUMN_COUNT,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_SIZE,
	BLOCK_MARGIN,
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
	// border attributes
	...generateBorderAttributies(BUTTON_BORDER),
	...generateDimensionAttributes(BTN_BORDER_RADIUS),
	...generateBoxShadowAttributies(BTN_SHADOW),
	...generateBoxShadowAttributies(BTN_HOVER_SHADOW),
	// column count
	...generateResCounterAttributies(COLUMN_COUNT, {
		defaultRange: 4,
	}),
	//columns gaps
	...generateResRangeAttributies(COLUMNS_GAP),
	//row gaps
	...generateResRangeAttributies(ROW_GAP),

	//button
	...generateDimensionAttributes(BUTTON_PADDING),
	...generateResRangeAttributies(BUTTON_SIZE),
	//icon spacing
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
	// block margin
	...generateDimensionAttributes(BLOCK_MARGIN),
	...generateTypographyAttributes(Object.values(typographyObjs)),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'preset-1',
	},
	socialText: {
		type: 'string',
		default: 'iconText',
	},
	socialProfiles: {
		type: 'array',
		default: [
			{
				id: 1,
				icon: {
					facebook: {
						name: 'facebook',
						source: 'dashicon',
						type: '',
					},
				},
				link: {
					url: '#',
					openInNewTab: false,
				},
				text: 'Facebook',
			},
		],
	},
	socialProfilesLinkTarget: {
		type: 'boolean',
		default: true,
	},
	socialStyle: {
		type: 'string',
		default: 'default',
	},
	targetPage: {
		type: 'string',
	},
	customLink: {
		type: 'string',
	},
	socialColor: {
		type: 'string',
	},
	socialTextColor: {
		type: 'string',
	},
	socialTextHoverColor: {
		type: 'string',
	},
	socialBgColor: {
		type: 'string',
	},
	socialBgHoverColor: {
		type: 'string',
	},
	showIcon: {
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
	textColor: {
		type: 'string',
	},
	textHoverColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},
};

export default attributes;
