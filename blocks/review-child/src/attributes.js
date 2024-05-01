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
    CONTAINER_PADDING,
    CONTENT_ALIGNMENT,
    REVIEWER_PHOTO_WIDTH,
    REVIEWER_PHOTO_HEIGHT,
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
    RC_BORDER,
    RC_BRADIUS,
    RC_PADDING,
    RC_BSHADOW,
    RC_BG,
    MC_PADDING,
    MC_SPACING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

const attributes = {
    // global Attributes
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: false,
        },
    },
    // block attribtues
    preset: {
        type: 'string',
        default: 'default',
    },
    presetFourLayout: {
        type: 'string',
        default: 'zolo-fl-normal',
    },
    // Generators content
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),

    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateDimensionAttributes(CONTAINER_PADDING),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),

    ...generateResRangeAttributies(REVIEWER_PHOTO_WIDTH, {}),
    ...generateResRangeAttributies(REVIEWER_PHOTO_HEIGHT, {}),
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
    // rc
    ...generateBorderAttributies(RC_BORDER),
    ...generateDimensionAttributes(RC_BRADIUS),
    ...generateDimensionAttributes(RC_PADDING),
    ...generateBoxShadowAttributies(RC_BSHADOW),
    ...generateNormalBGAttributes(RC_BG),
    // mc
    ...generateDimensionAttributes(MC_PADDING),
    ...generateResRangeAttributies(MC_SPACING, {}),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Block Specific Attributes
    showPhoto: {
        type: 'boolean',
        default: true,
    },
    memberPhoto: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.avatarSquare,
            alt: '',
        },
    },
    imageRes: {
        type: 'string',
        default: 'thumbnail',
    },
    objectFit: {
        type: 'string',
        default: 'cover',
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
    websiteLinkIcon: {
        type: 'string',
        default: 'fas fa-arrow-right',
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
    presetFiveArrowColor: {
        type: 'string',
    },
};

export default attributes;
