import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';

import {
	BUTTON_ALIGNMENT,
	BUTTON_BG,
	BUTTON_HOVER_BG_COLOR,
	BUTTON_BORDER,
	BUTTON_BORDER_RADIUS,
	BUTTON_BOX_SHADOW,
	BUTTON_HOVER_BOX_SHADOW,
	BUTTON_PADDING,
	BUTTON_MARGIN,
	ICON_SIZE,
	ICON_TEXT_SPACING,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	ICON_PADDING,
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
	// Button Generators
	...generateResAlignmentAttributies(BUTTON_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	...generateBorderAttributies(BUTTON_BORDER),
	...generateResRangeAttributies(ICON_SIZE, {
		default: 16,
	}),
	...generateResRangeAttributies(ICON_TEXT_SPACING, {
		default: 5,
	}),
	...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
	...generateBackgroundAttributes(BUTTON_BG),
	...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
	...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
	...generateTypographyAttributes(Object.values(typographyObjs)),
	...generateDimensionAttributes(BUTTON_PADDING),
	...generateDimensionAttributes(BUTTON_MARGIN),
	// button icon generator
	...generateBorderAttributies(ICON_BORDER),
	...generateDimensionAttributes(ICON_BORDER_RADIUS),
	...generateBoxShadowAttributies(ICON_BOX_SHADOW),
	...generateBoxShadowAttributies(ICON_HOVER_BOX_SHADOW),
	...generateDimensionAttributes(ICON_PADDING),
	//Block specific Attributes
	preset: {
		type: 'string',
		default: 'button-1',
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
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconBg: {
		type: 'string',
	},
	iconHoverBg: {
		type: 'string',
	},
	iconBorderHoverColor: {
		type: 'string',
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
