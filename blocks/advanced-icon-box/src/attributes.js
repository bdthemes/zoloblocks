import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';

import {
	ICON_BOX_ALIGNMENT,
	ICON_BG_COLOR,
	ICON_HOVER_BG_COLOR,
	ICON_BORDER,
	ICON_SIZE,
	ICON_TEXT_SPACING,
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
	...generateResAlignmentAttributies(ICON_BOX_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	// border attributes
	...generateBorderAttributies(ICON_BORDER),
	...generateResRangeAttributies(ICON_SIZE, {
		default: 16,
	}),
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'style-1',
	},
	label: {
		type: 'string',
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
	iconType: {
		type: 'string',
		default: 'icon',
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
};

export default attributes;
