import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import {
	BUTTON_ALIGNMENT,
	BUTTON_WIDTH,
	BUTTON_BG,
	BUTTON_BORDER,
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
	//range attributes
	...generateResRangeAttributies(BUTTON_WIDTH, {
		defaultRange: 200,
	}),
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
		}
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
};

export default attributes;
