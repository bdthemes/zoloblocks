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
	CONTAINER_BACKGROUND,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
	CONTAINER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTENT_ALIGNMENT,
	REVIEWER_PHOTO_BG,
	REVIEWER_PHOTO_BORDER,
	REVIEWER_PHOTO_BORDER_RADIUS,
	REVIEWER_PHOTO_BOX_SHADOW,
	REVIEWER_PHOTO_MARGIN,
	REVIEWER_PHOTO_PADDING,
	REVIEWER_NAME_MARGIN,
	REVIEWER_DESIGNATION_MARGIN,
	REVIEWER_TESTIMONIAL_MARGIN,
	ICONS_SIZE,
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

	// Generators
	...generateNormalBGAttributes(CONTAINER_BACKGROUND),
	...generateResAlignmentAttributies(CONTENT_ALIGNMENT, {
		defaultAlign: 'left',
	}),
	...generateBorderAttributies(CONTAINER_BORDER),
	...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
	...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
	...generateDimensionAttributes(CONTAINER_MARGIN),
	...generateDimensionAttributes(CONTAINER_PADDING),

	...generateNormalBGAttributes(REVIEWER_PHOTO_BG),
	...generateBorderAttributies(REVIEWER_PHOTO_BORDER),
	...generateDimensionAttributes(REVIEWER_PHOTO_BORDER_RADIUS),
	...generateBoxShadowAttributies(REVIEWER_PHOTO_BOX_SHADOW),
	...generateDimensionAttributes(REVIEWER_PHOTO_MARGIN),
	...generateDimensionAttributes(REVIEWER_PHOTO_PADDING),

	...generateDimensionAttributes(REVIEWER_NAME_MARGIN),

	...generateDimensionAttributes(REVIEWER_DESIGNATION_MARGIN),

	...generateDimensionAttributes(REVIEWER_TESTIMONIAL_MARGIN),

	...generateResRangeAttributies(ICONS_SIZE, {}),

	...generateTypographyAttributes(Object.values(typographyObjs)),
	//Block Specific Attributes
	memberPhoto: {
		type: 'object',
	},
	memberName: {
		type: 'string',
	},
	addReviewerWebsiteLink: {
		type: 'boolean',
		default: true,
	},
	reviewerWebsiteLink: {
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
	showTestimonialMessage: {
		type: 'boolean',
		default: true,
	},
	testimonialMessage: {
		type: 'string',
	},
	showRating: {
		type: 'boolean',
		default: true,
	},
	rating: {
		type: 'number',
		default: 5,
	},
	// block style
	containerBg: {
		type: 'string',
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
	testimonialMessageColor: {
		type: 'string',
	},
	// rating icon
	activeRatingColor: {
		type: 'string',
	},
	inactiveRatingColor: {
		type: 'string',
	},
};

export default attributes;
