import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateColorsGroupAttributes } from '../../../src/helpers/colorsGroupHelper';
import { generateBgColorsGroupAttributes } from '../../../src/helpers/bgColorsGroupHelper';

import {
	BUTTON_ALIGNMENT,
	BUTTON_TEXT_COLOR,
	BUTTON_BG_COLOR,
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
	// border attributes
	...generateBorderAttributies(BUTTON_BORDER),
	...generateColorsGroupAttributes(BUTTON_TEXT_COLOR, {}),
	...generateResRangeAttributies(ICON_SIZE, {
		default: 16,
	}),
	...generateBgColorsGroupAttributes(BUTTON_BG_COLOR, {}),
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
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
};

export default attributes;
