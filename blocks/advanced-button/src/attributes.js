import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateColorsGroup } from '../../../src/helpers/colorsGroupHelper';

import {
	BUTTON_ALIGNMENT,
	BUTTON_TEXT_COLOR,
	BUTTON_BG,
	BUTTON_BORDER,
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
	...generateResAlignmentAttributies(BUTTON_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	// background attributes
	...generateBackgroundAttributes(BUTTON_BG),
	// border attributes
	...generateBorderAttributies(BUTTON_BORDER),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'preset-1',
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
		default: 'after',
	},
	bgColor: {
		type: 'string',
		default: '#3799FF',
	},
	textColor: {
		type: 'string',
		default: '#ffffff',
	},
	...generateColorsGroup(BUTTON_TEXT_COLOR, {}),
	...generateResRangeAttributies(ICON_SIZE, {
		default: 16,
	}),
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
};

export default attributes;
