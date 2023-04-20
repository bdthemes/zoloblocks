/**
 * Internal dependencies
 */
const {
	generateResAlignmentAttributies,
	generateResRangeAttributies,
	generateBorderAttributies,
	generateDimensionAttributes,
	generateBoxShadowAttributies,
	generateTypographyAttributes,
} = window.zoloModule;

import {
	CONTENT_ALIGNMENT,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_NAME_MARGIN,
	TEAM_DESIGNATION_MARGIN,
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
		default: 'default',
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
	...generateDimensionAttributes(TEAM_DESIGNATION_MARGIN),
	...generateDimensionAttributes(TEAM_NAME_MARGIN),
	...generateBorderAttributies(ICONS_BORDER),
	...generateDimensionAttributes(ICONS_BORDER_RADIUS),
	...generateDimensionAttributes(ICONS_PADDING),
	...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
	...generateResRangeAttributies(ICONS_SIZE, {}),
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
		default: {
			url: '#',
			opensInNewTab: false,
		},
	},
	showDesignation: {
		type: 'boolean',
		default: true,
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
	socialProfiles: {
		type: 'array',
		default: [
			{
				icon: {
					facebook: {
						name: 'facebook',
						source: 'dashicon',
						type: '',
					},
				},
				link: '#',
			},
		],
	},
	socialProfilesLinkTarget: {
		type: 'boolean',
		default: true,
	},
	// block style
	contentBg: {
		type: 'string',
		default: '#ffffff',
	},
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
	separatorColor: {
		type: "string",
		default: "#ddd"
	},
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
	detailPageIconColor: {
		type: 'string'
	},
	detailPageIconHoverColor: {
		type: 'string'
	},
	detailPageLinkBgColor: {
		type: 'string'
	},
	detailPageLinkBgHoverColor: {
		type: 'string'
	}
};

export default attributes;
