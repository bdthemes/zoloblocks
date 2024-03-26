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
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    CONTENT_GAP,
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
        default: 'default',
    },
    // Generators
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
    ...generateNormalBGAttributes(CONTENT_BACKGROUND),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTENT_BOX_SHADOW),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateDimensionAttributes(CONTENT_PADDING),

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
    ...generateResRangeAttributies(DPL_ICON_SIZE, {}),

    ...generateBorderAttributies(DPL_BORDER),
    ...generateDimensionAttributes(DPL_BORDER_RADIUS),
    ...generateDimensionAttributes(DPL_PADDING),
    ...generateDimensionAttributes(DPL_MARGIN),

    // Gap
    ...generateResRangeAttributies(CONTENT_GAP),

    //Block Specific Attributes
    showPhoto: {
        type: 'boolean',
        default: true,
    },
    memberPhoto: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.avatarRound,
            alt: '',
        },
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    showName: {
        type: 'boolean',
        default: true,
    },
    memberName: {
        type: 'string',
        default: 'John Doe',
    },
    showQuoteIcon: {
        type: 'boolean',
        default: true,
    },
    quoteIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"></path></svg>',
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
        default: 'ZoloBlocks is a versatile tool for WordPress that streamlines website building with customizable blocks.',
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
    // DPL icon color
    dplIconColor: {
        type: 'string',
    },
    objectFit: {
        type: 'string',
    },
    photoOverflow: {
        type: 'string',
        default: 'hidden',
    },
};

export default attributes;
