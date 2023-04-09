// import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
// import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
// import { generateBorderAttributies } from '../../../src/helpers/border-helper';
// import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
// import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
// import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
// import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';

// import {
// 	BUTTON_ALIGNMENT,
// 	BUTTON_BG,
// 	BUTTON_HOVER_BG_COLOR,
// 	BUTTON_BORDER,
// 	BUTTON_BORDER_RADIUS,
// 	BUTTON_BOX_SHADOW,
// 	BUTTON_HOVER_BOX_SHADOW,
// 	BUTTON_PADDING,
// 	BUTTON_MARGIN,
// 	ICON_SIZE,
// 	ICON_TEXT_SPACING,
// 	ICON_BORDER,
// 	ICON_BORDER_RADIUS,
// 	ICON_BOX_SHADOW,
// 	ICON_HOVER_BOX_SHADOW,
// 	ICON_PADDING,
// } from './constants';

// import * as typographyObjs from './constants/typoPrefixConstant';

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
	preset: {
		type: 'string',
		default: 'preset-1',
	},
	//Block Specific Attributes
	showMemberPhoto: {
		type: 'boolean',
		default: true,
	},
	memberPhoto: {
		type: 'object',
	},
	memberName: {
		type: 'string',
	},
	enableMemberLink: {
		type: 'boolean',
		default: false,
	},
	enableMemberDetailsPage: {
		type: 'boolean',
		default: false,
	},
	memberLink: {
		type: 'object',
		default: {
			url: '',
			newTab: false,
		},
	},
	memberDesignation: {
		type: 'string',
	},
	memberShortBio: {
		type: 'string',
	},
	showSocialProfiles: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
