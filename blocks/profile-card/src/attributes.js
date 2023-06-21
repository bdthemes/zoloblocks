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
	HEADER_AREA_BORDER_RADIUS,
	HEADER_AREA_PADDING,
	HEADER_BADGE_BORDER,
	BADGE_BG,
	BADGE_BORDER_RADIUS,
	CONTENT_BORDER_RADIUS,
	CONTENT_BG,
	CONTENT_BORDER,
	CONTENT_PADDING,
	CONTENT_MARGIN,
	PHOTO_SIZE,
	PHOTO_BORDER,
	PHOTO_BORDER_RADIUS,
	NAME_MARGIN,
	USERNAME_MARGIN,
	EMAIL_MARGIN,
	BIO_MARGIN,
	STATUS_MARGIN,
	FBTN_BG,
	FBTN_BOX_SHADOW,
	FBTN_BORDER,
	FBTN_BORDER_RADIUS,
	FBTN_PADDING,
	FBTN_MARGIN,
	FBTN_HOVER_BG,
	FBTN_HOVER_BOX_SHADOW,
	ICONS_SIZE,
	ICONS_SPACING,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_MARGIN,
	ICONS_BG,
	ICONS_HOVER_BG,
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
	//Block Specific Attributes
	headerAreaBG: {
		type: 'string',
	},
	showBadge: {
		type: 'boolean',
		default: true,
	},
	badgeText: {
		type: 'string',
		default: 'Pro',
	},
	showPhoto: {
		type: 'boolean',
		default: true,
	},
	photo: {
		type: 'object',
	},
	showName: {
		type: 'boolean',
		default: true,
	},
	name: {
		type: 'string',
	},
	showUsername: {
		type: 'boolean',
		default: true,
	},
	username: {
		type: 'string',
	},
	showEmail: {
		type: 'boolean',
		default: true,
	},
	email: {
		type: 'string',
	},
	showBio: {
		type: 'boolean',
		default: true,
	},
	bio: {
		type: 'string',
	},
	showStatus: {
		type: 'boolean',
		default: true,
	},
	statusItems: {
		type: 'array',
		default: [
			{
				number: '210',
				label: 'Posts',
			},
			{
				number: '430',
				label: 'Followers',
			},
			{
				number: '210',
				label: 'Following',
			},
		],
	},
	showFollowButton: {
		type: 'boolean',
		default: true,
	},
	followButtonText: {
		type: 'string',
		default: 'Follow',
	},
	followButtonLink: {
		type: 'object',
		default: {
			url: '#',
			opensInNewTab: false,
		},
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
	badgeColor: {
		type: 'string',
	},
	nameColor: {
		type: 'string',
	},
	usernameColor: {
		type: 'string',
	},
	emailColor: {
		type: 'string',
	},
	bioColor: {
		type: 'string',
	},
	numberColor: {
		type: 'string',
	},
	labelColor: {
		type: 'string',
	},
	btnColor: {
		type: 'string',
	},
	btnHoverColor: {
		type: 'string',
	},
	btnHoverBorderColor: {
		type: 'string',
	},
	// social icons
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconHoverBorderColor: {
		type: 'string',
	},
	// Generators
	...generateDimensionAttributes(HEADER_AREA_BORDER_RADIUS),
	...generateResRangeAttributies(HEADER_AREA_PADDING, {}),
	...generateBorderAttributies(HEADER_BADGE_BORDER),
	...generateNormalBGAttributes(BADGE_BG),
	...generateDimensionAttributes(BADGE_BORDER_RADIUS),

	...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
	...generateNormalBGAttributes(CONTENT_BG),
	...generateBorderAttributies(CONTENT_BORDER),
	...generateDimensionAttributes(CONTENT_PADDING),
	...generateDimensionAttributes(CONTENT_MARGIN),

	...generateResRangeAttributies(PHOTO_SIZE, {}),
	...generateBorderAttributies(PHOTO_BORDER),
	...generateDimensionAttributes(PHOTO_BORDER_RADIUS),

	...generateDimensionAttributes(NAME_MARGIN),
	...generateDimensionAttributes(USERNAME_MARGIN),
	...generateDimensionAttributes(EMAIL_MARGIN),
	...generateDimensionAttributes(BIO_MARGIN),

	...generateDimensionAttributes(STATUS_MARGIN),

	...generateNormalBGAttributes(FBTN_BG),
	...generateBoxShadowAttributies(FBTN_BOX_SHADOW),
	...generateBorderAttributies(FBTN_BORDER),
	...generateDimensionAttributes(FBTN_BORDER_RADIUS),
	...generateDimensionAttributes(FBTN_PADDING),
	...generateDimensionAttributes(FBTN_MARGIN),

	...generateNormalBGAttributes(FBTN_HOVER_BG),
	...generateBoxShadowAttributies(FBTN_HOVER_BOX_SHADOW),

	...generateNormalBGAttributes(ICONS_BG),
	...generateNormalBGAttributes(ICONS_HOVER_BG),
	...generateBorderAttributies(ICONS_BORDER),
	...generateDimensionAttributes(ICONS_BORDER_RADIUS),
	...generateDimensionAttributes(ICONS_PADDING),
	...generateDimensionAttributes(ICONS_MARGIN),
	...generateResRangeAttributies(ICONS_SIZE, {}),
	...generateResRangeAttributies(ICONS_SPACING, {}),

	// typography
	...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
