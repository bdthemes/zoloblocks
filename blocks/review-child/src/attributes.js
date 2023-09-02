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
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTENT_ALIGNMENT,
    CONTENT_BACKGROUND,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    CONTENT_MARGIN,
    CONTENT_PADDING,
    REVIEWER_PHOTO_SIZE,
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
    DPL_BG,
    DPL_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
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
    ...generateNormalBGAttributes(CONTENT_BACKGROUND),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTENT_BOX_SHADOW),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateDimensionAttributes(CONTENT_PADDING),

    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),

    ...generateResRangeAttributies(REVIEWER_PHOTO_SIZE, {}),
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

    ...generateNormalBGAttributes(DPL_BG),
    ...generateNormalBGAttributes(DPL_HOVER_BG),
    ...generateResRangeAttributies(DPL_ICON_SIZE, {}),
    ...generateResRangeAttributies(DPL_HEIGHT, {}),
    ...generateResRangeAttributies(DPL_WIDTH, {}),
    ...generateBorderAttributies(DPL_BORDER),
    ...generateDimensionAttributes(DPL_BORDER_RADIUS),
    ...generateDimensionAttributes(DPL_PADDING),
    ...generateDimensionAttributes(DPL_MARGIN),
    //Block Specific Attributes
    showPhoto: {
        type: 'boolean',
        default: true,
    },
    memberPhoto: {
        type: 'object',
        default: {
            id: '',
            url: 'https://placehold.co/70x70',
            alt: '',
        },
    },
    showName: {
        type: 'boolean',
        default: true,
    },
    memberName: {
        type: 'string',
        default: 'John Doe',
    },
    addReviewerWebsiteLink: {
        type: 'boolean',
        default: true,
    },
    reviewerWebsiteLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    showDesignation: {
        type: 'boolean',
        default: true,
    },
    memberDesignation: {
        type: 'string',
        default: 'CEO at ZoloBlocks',
    },
    showTestimonialMessage: {
        type: 'boolean',
        default: true,
    },
    testimonialMessage: {
        type: 'string',
        default:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
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
    nameLinkColor: {
        type: 'string',
    },
    nameHoverColor: {
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
    // DPL icon color
    dplIconColor: {
        type: 'string',
    },
    dplIconHoverColor: {
        type: 'string',
    },
    // blur
    blurBgOpacity: {
        type: 'number',
    },
};

export default attributes;
