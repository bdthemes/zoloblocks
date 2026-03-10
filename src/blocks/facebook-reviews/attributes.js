import { generateResCounterAttributies } from '../../helpers/res-counter-helper';
import { generateGapAttributes } from '../../helpers/gap-helper';
import { FB_REVIEWS_COLUMNS, FB_REVIEWS_GAP } from './constants';

export const layoutTypes = {
    GRID: 'grid',
    MASONRY: 'masonry',
    CAROUSEL: 'carousel',
    BADGE: 'badge',
};

const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'fbReviewsMargin',
            },
            padding: {
                prefix: 'fbReviewsPadding',
            },
            background: {
                prefix: 'fbReviewsBg',
            },
            border: {
                prefix: 'fbReviewsBorder',
            },
            borderRadius: {
                prefix: 'fbReviewsBorderRadius',
            },
            boxShadow: {
                prefix: 'fbReviewsBoxShadow',
            },
            responsiveControls: true,
        },
    },
    uniqueId: {
        type: 'string',
        default: '',
    },
    parentClasses: {
        type: 'array',
        default: [],
    },
    layoutType: {
        type: 'string',
        default: layoutTypes.GRID,
    },
    reviewsPerPage: {
        type: 'number',
        default: 6,
    },
    showAvatar: {
        type: 'boolean',
        default: true,
    },
    showReviewerName: {
        type: 'boolean',
        default: true,
    },
    showDate: {
        type: 'boolean',
        default: true,
    },
    showRating: {
        type: 'boolean',
        default: true,
    },
    showRecommendation: {
        type: 'boolean',
        default: true,
    },
    showReviewText: {
        type: 'boolean',
        default: true,
    },
    reviewTextLength: {
        type: 'number',
        default: 150,
    },
    showReadMore: {
        type: 'boolean',
        default: true,
    },
    readMoreText: {
        type: 'string',
        default: 'Read more',
    },
    showHeader: {
        type: 'boolean',
        default: true,
    },
    headerTitle: {
        type: 'string',
        default: 'Reviews & Recommendations',
    },
    showWriteReviewBtn: {
        type: 'boolean',
        default: true,
    },
    writeReviewBtnText: {
        type: 'string',
        default: 'Write a Review',
    },
    writeReviewBtnUrl: {
        type: 'string',
        default: '',
    },
    showHeaderRating: {
        type: 'boolean',
        default: true,
    },
    carouselAutoplay: {
        type: 'boolean',
        default: true,
    },
    carouselSpeed: {
        type: 'number',
        default: 3000,
    },
    carouselLoop: {
        type: 'boolean',
        default: true,
    },
    resMode: {
        type: 'string',
        default: 'desktop',
    },
    zoloStyles: {
        type: 'object',
        default: {},
    },
    ...generateResCounterAttributies(FB_REVIEWS_COLUMNS, {
        defaultRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateGapAttributes(FB_REVIEWS_GAP, {
        defaultRange: 20,
    }),
};

export default attributes;
