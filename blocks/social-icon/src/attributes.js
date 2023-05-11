import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';

import {
	BUTTON_ALIGNMENT,
	BUTTON_BG_COLOR,
	BUTTON_HOVER_BG_COLOR,
	BUTTON_BORDER,
	ICON_SIZE,
	ICON_TEXT_SPACING,
	COLUMNS_GAP,
	ROW_GAP,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_HEIGHT,
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
	//alignment attributes
	...generateResAlignmentAttributies( BUTTON_ALIGNMENT, {
		defaultAlign: 'left',
	} ),

	// border attributes
	...generateBorderAttributies( BUTTON_BORDER ),
	...generateResRangeAttributies( ICON_SIZE, {
		default: 16,
	} ),
	//columns gaps
	...generateResRangeAttributies( COLUMNS_GAP ),
	//row gaps
	...generateResRangeAttributies( ROW_GAP ),

	//button size
	...generateResRangeAttributies( BUTTON_SIZE ),
	//button icon size
	...generateResRangeAttributies( BUTTON_ICON_SIZE ),
	//button height
	...generateResRangeAttributies( BUTTON_HEIGHT ),

	//icon spacing
	...generateResRangeAttributies( ICON_TEXT_SPACING, {
		default: 5,
	} ),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'preset-1',
	},
	socialText: {
		type: 'string',
	},
	socialProfiles: {
		type: 'array',
		default: [
			{
				icon: {
					facebook: {
						name: 'facebook',
						source: 'dashicon',
						type: '',
					},
				},
				link: '#',
				text: 'Facebook',
			},
		],
	},
	socialProfilesLinkTarget: {
		type: 'boolean',
		default: true,
	},
	socialProfileColumns: {
		type: 'number',
		default: 4,
	},
	socialStyle: {
		type: 'string',
	},
	targetPage: {
		type: 'string',
	},
	customLink: {
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
};

export default attributes;
