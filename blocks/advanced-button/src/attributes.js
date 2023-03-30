import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateBgColorAttributes } from '../../../src/helpers/bgcolor-control-helper';
import { generateBgGroupControlAttributes } from '../../../src/helpers/bggroup-control-helper';

import {
	BUTTON_ALIGNMENT,
	BUTTON_BG_COLOR,
	BUTTON_HOVER_BG_COLOR,
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
	...generateResRangeAttributies(ICON_SIZE, {
		default: 16,
	}),
	// ...generateBgColorAttributes(BUTTON_BG_COLOR, {}),
	...generateBgColorAttributes(BUTTON_HOVER_BG_COLOR, {}),
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
	// bggroup color attributes
	...generateBgGroupControlAttributes(BUTTON_BG_COLOR, {}),
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
