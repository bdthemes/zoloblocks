import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
// import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
// import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
// import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';

import {
	CONTENT_ALIGNMENT,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
} from './constants';

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
	// Generators
	...generateResAlignmentAttributies(CONTENT_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	...generateBorderAttributies(TEAM_PHOTO_BORDER),
	...generateDimensionAttributes(TEAM_PHOTO_BORDER_RADIUS),
	...generateDimensionAttributes(TEAM_PHOTO_MARGIN),
	...generateDimensionAttributes(TEAM_PHOTO_PADDING),
	...generateBoxShadowAttributies(TEAM_PHOTO_BOX_SHADOW),
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
	linkedMemberPhoto: {
		type: 'boolean',
		default: false,
	},
	linkedMemberName: {
		type: 'boolean',
		default: false,
	},
	enableMemberDetailsPage: {
		type: 'boolean',
		default: false,
	},
	memberLink: {
		type: 'object',
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
	socialProfiles: {
		type: 'array',
		default: [],
	},
	socialProfilesLinkTarget: {
		type: 'boolean',
		default: true,
	},
	// block style
	photoBgColor: {
		type: 'string',
	},
};

export default attributes;
