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
	COLUMNS_NUMBER,
	COLUMNS_GAP ,
	ROW_GAP,
	BUTTON_SIZE,
	BUTTON_ICON_SIZE,
	BUTTON_HEIGHT
	
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
	//columns Number
	...generateResRangeAttributies(COLUMNS_NUMBER),
	//columns gaps
	...generateResRangeAttributies(COLUMNS_GAP),
	//row gaps
	...generateResRangeAttributies(ROW_GAP),
	
	//button size
	...generateResRangeAttributies(BUTTON_SIZE),
	//button icon size
	...generateResRangeAttributies(BUTTON_ICON_SIZE),
	//button height
	...generateResRangeAttributies(BUTTON_HEIGHT),
	
	//icon spacing
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
	socialRepeat:{
		type:"array",
		default:[]
	},
	socialButton:{
		type:"string"
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
	socialText: {
		type:"string"
	},
    socialStyle:{
		type:"string"
	},
	targetPage:{
		type:"string"
	},
	customLink:{
		type:"string"
	},
	columnsNumber:{
		type:"string"
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
