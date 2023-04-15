import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
// import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';

import {
	CONTENT_ALIGNMENT,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_NAME_MARGIN,
	TEAM_SHORT_BIO_MARGIN,
	ICONS_SIZE,
	ICONS_SPACING,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_BOX_SHADOW,
	ICONS_HOVER_BOX_SHADOW,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

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

	...generateDimensionAttributes(TEAM_NAME_MARGIN),
	...generateDimensionAttributes(ICONS_BORDER),
	...generateDimensionAttributes(ICONS_BORDER_RADIUS),
	...generateDimensionAttributes(ICONS_PADDING),
	...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
	...generateResRangeAttributies(ICONS_SIZE, {
		default: 20,
	}),
	...generateResRangeAttributies(ICONS_SPACING, {}),
	...generateBoxShadowAttributies(ICONS_BOX_SHADOW),
	...generateBoxShadowAttributies(ICONS_HOVER_BOX_SHADOW),
	// typography
	...generateTypographyAttributes(Object.values(typographyObjs)),
	//Block Specific Attributes
	memberPhoto: {
		type: 'object',
	},
	memberName: {
		type: 'string',
	},
	enableMemberDetailsPage: {
		type: 'boolean',
		default: false,
	},
	memberDetailPageLink: {
		type: 'object',
	},
	memberDesignation: {
		type: 'string',
	},
	showShortBio: {
		type: 'boolean',
		default: true,
	},
	memberShortBio: {
		type: 'string',
	},
	showSocialProfiles: {
		type: 'boolean',
		default: true,
	},
	// socialProfiles: {
	// 	type: 'array',
	// 	items: {
	// 		type: 'object',
	// 		properties: {
	// 			icon: {
	// 				type: 'object',
	// 			},
	// 			link: {
	// 				type: 'string',
	// 			},
	// 		},
	// 	},
	// },
	socialProfiles: {
		type: 'array',
	},
	socialProfilesLinkTarget: {
		type: 'boolean',
		default: true,
	},
	// block style
	photoBgColor: {
		type: 'string',
	},
	nameColor: {
		type: 'string',
	},
	designationColor: {
		type: 'string',
	},
	shortBioColor: {
		type: 'string',
	},
	// social icons
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconBgColor: {
		type: 'string',
	},
	iconHoverBgColor: {
		type: 'string',
	},
	iconHoverBorderColor: {
		type: 'string',
	},
	teamSocialIcon: {
		type: 'object',
	},
};

export default attributes;
