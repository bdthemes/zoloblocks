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
	generateNormalBGAttributes,
} = window.zoloModule;

import {
	CONTAINER_BG,
	CONTENT_ALIGNMENT,
	PHOTO_BG,
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
	ICONS_BG,
	ICONS_HOVER_BG,
	DETAIL_PAGE_LINK_BG,
	DETAIL_PAGE_LINK_HOVER_BG,
	TEAM_MEMBER_CONTAINER_PADDING,
	TEAM_MEMBER_CONTAINER_MARGIN,
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
	...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_PADDING),
	...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_MARGIN),
	...generateNormalBGAttributes(CONTAINER_BG),
	...generateResAlignmentAttributies(CONTENT_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	...generateNormalBGAttributes(PHOTO_BG),
	...generateBorderAttributies(TEAM_PHOTO_BORDER),
	...generateDimensionAttributes(TEAM_PHOTO_BORDER_RADIUS),
	...generateDimensionAttributes(TEAM_PHOTO_MARGIN),
	...generateDimensionAttributes(TEAM_PHOTO_PADDING),
	...generateBoxShadowAttributies(TEAM_PHOTO_BOX_SHADOW),
	...generateDimensionAttributes(TEAM_DESIGNATION_MARGIN),
	...generateDimensionAttributes(TEAM_NAME_MARGIN),

	...generateNormalBGAttributes(ICONS_BG),
	...generateNormalBGAttributes(ICONS_HOVER_BG),
	...generateBorderAttributies(ICONS_BORDER),
	...generateDimensionAttributes(ICONS_BORDER_RADIUS),
	...generateDimensionAttributes(ICONS_PADDING),
	...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
	...generateResRangeAttributies(ICONS_SIZE, {}),
	...generateResRangeAttributies(ICONS_SPACING, {}),
	...generateBoxShadowAttributies(ICONS_BOX_SHADOW),
	...generateBoxShadowAttributies(ICONS_HOVER_BOX_SHADOW),

	...generateNormalBGAttributes(DETAIL_PAGE_LINK_BG),
	...generateNormalBGAttributes(DETAIL_PAGE_LINK_HOVER_BG),
	// typography
	...generateTypographyAttributes(Object.values(typographyObjs)),
	//Block Specific Attributes
	memberPhoto: {
		type: 'object',
	},
	memberName: {
		type: 'string',
	},
	addDetailPageLink: {
		type: 'boolean',
		default: true,
	},
	showDetailPageIcon: {
		type: 'boolean',
		default: true,
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
		default: false,
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
					twitter: {
						name: 'twitter',
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
	// block styles
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
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconHoverBorderColor: {
		type: 'string',
	},
	detailPageIconColor: {
		type: 'string',
	},
	detailPageIconHoverColor: {
		type: 'string',
	},
};

export default attributes;
