/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes, generateResAlignmentAttributies, generateBorderAttributies, generateBoxShadowAttributies, generateTypographyAttributes, generateNormalBGAttributes, generateResCounterAttributies, generateGapAttributes } = window.zoloModule;

import {
    CAROUSEL_COLUMNS,
    CAROUSEL_GAP,
    REVIEW_CAROUSEL_BG,
    REVIEW_CAROUSEL_PADDING,
    REVIEW_CAROUSEL_MARGIN, // child global styles
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_BOX_SHADOW,
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
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_OFFSET_VERTICAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
    PAG_BOTTOM_SPACING,
    RCONTAINER_BG,
    RCONTAINER_BORDER,
    RCONTAINER_BRADIUS,
    RCONTAINER_BSHADOW,
    RCONTAINER_PADDING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';
import { RC_BG } from './../../review-child/src/constants/index';
import { RC_BORDER } from './../../review-child/src/constants/index';
import { RC_BRADIUS } from './../../review-grid/src/constants/index';
import { RC_BSHADOW } from './../../review-child/src/constants/index';
import { RC_PADDING } from './../../review-grid/src/constants/index';

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
    ...generateNormalBGAttributes(REVIEW_CAROUSEL_BG),
    ...generateResCounterAttributies(CAROUSEL_COLUMNS, {
        noUnits: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    }),
    ...generateGapAttributes(CAROUSEL_GAP, {
        defaultUnit: 'px',
    }),
    ...generateDimensionAttributes(REVIEW_CAROUSEL_MARGIN),
    ...generateDimensionAttributes(REVIEW_CAROUSEL_PADDING),

    // child global styles
    // Generators
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),

    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
    ...generateDimensionAttributes(CONTAINER_PADDING),

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

    ...generateTypographyAttributes(Object.values(typographyObjs)),
    // Generator
    ...generateResRangeAttributies(NAV_WIDTH),
    ...generateResRangeAttributies(NAV_HEIGHT),
    ...generateResRangeAttributies(NAV_OFFSET_HORIZONTAL),
    ...generateResRangeAttributies(NAV_OFFSET_VERTICAL),
    ...generateBorderAttributies(NAV_BORDER),
    ...generateDimensionAttributes(NAV_BORDER_RADIUS),
    ...generateNormalBGAttributes(NAV_BG),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateResRangeAttributies(NAV_ICON_SIZE),

    // pagination
    ...generateResRangeAttributies(PAG_WIDTH),
    ...generateResRangeAttributies(PAG_HEIGHT),
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(PAG_BG),
    ...generateResRangeAttributies(PAG_SPACING),
    ...generateResRangeAttributies(PAG_BOTTOM_SPACING),

    // active pagination
    ...generateResRangeAttributies(APAG_WIDTH),
    ...generateResRangeAttributies(APAG_HEIGHT),
    ...generateBorderAttributies(APAG_BORDER),
    ...generateDimensionAttributes(APAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(APAG_BG),

    // rc
    ...generateBorderAttributies(RCONTAINER_BORDER),
    ...generateDimensionAttributes(RCONTAINER_BRADIUS),
    ...generateDimensionAttributes(RCONTAINER_PADDING),
    ...generateBoxShadowAttributies(RCONTAINER_BSHADOW),
    ...generateNormalBGAttributes(RCONTAINER_BG),
    // swiper options
    slideItems: {
        type: 'number',
        default: 3,
    },
    sliderType: {
        type: 'string',
        default: 'slider',
    },
    sliderOptions: {
        type: 'object',
    },
    autoplay: {
        type: 'boolean',
        default: false,
    },
    autoplayDelay: {
        type: 'number',
        default: 30,
    },
    pauseOnMouseEnter: {
        type: 'boolean',
        default: false,
    },
    infiniteLoop: {
        type: 'boolean',
        default: true,
    },
    showNavigation: {
        type: 'boolean',
        default: false,
    },
    navColor: {
        type: 'string',
    },
    navHoverColor: {
        type: 'string',
    },
    showPagination: {
        type: 'boolean',
        default: true,
    },
    paginationType: {
        type: 'string',
        default: 'bullets',
    },
    dynamicBullets: {
        type: 'boolean',
        default: false,
    },
    speed: {
        type: 'number',
        default: 8,
    },
    carouselEffect: {
        type: 'string',
        default: 'slide',
    },
    coverFlowEffect: {
        type: 'object',
        default: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    },
    addNewSlideBlock: {
        type: 'boolean',
        default: false,
    },
    customNavIcon: {
        type: 'boolean',
        default: false,
    },
    prevNavIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>',
    },
    nextNavIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>',
    },
    presetFiveArrowColor: {
        type: 'string',
    },
};

export default attributes;
