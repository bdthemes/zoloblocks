/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateNormalBGAttributes,
    generateResCounterAttributies,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    REVIEW_GRID_BG,
    REVIEW_GRID_PADDING,
    REVIEW_GRID_MARGIN, // child global styles
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
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
            responsiveControls: true,
        },
    },
    // block attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    addReviewerWebsiteLink: {
        type: 'boolean',
        default: true,
    },
    showPhoto: {
        type: 'boolean',
        default: true,
    },
    showName: {
        type: 'boolean',
        default: true,
    },
    showDesignation: {
        type: 'boolean',
        default: true,
    },
    showTestimonialMessage: {
        type: 'boolean',
        default: true,
    },
    showRating: {
        type: 'boolean',
        default: true,
    },
    ...generateNormalBGAttributes(REVIEW_GRID_BG),
    ...generateResCounterAttributies(GRID_COLUMNS, {
        noUnits: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    }),
    ...generateResRangeAttributies(COLUMNS_GAP, {
        defaultRange: 30,
    }),
    ...generateResRangeAttributies(ROWS_GAP, {
        defaultRange: 50,
    }),
    ...generateDimensionAttributes(REVIEW_GRID_MARGIN),
    ...generateDimensionAttributes(REVIEW_GRID_PADDING),

    // child global styles
    // Generators
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
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
    ...generateDimensionAttributes(CONTAINER_PADDING),

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

    containerBg: {
        type: 'string',
    },
    photoBgColor: {
        type: 'string',
    },
    nameColor: {
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
};

export default attributes;
