import { generateResCounterAttributies } from '../../helpers/res-counter-helper';
import { generateGapAttributes } from '../../helpers/gap-helper';
import { FB_REVIEWS_COLUMNS, FB_REVIEWS_GAP } from './constants';

export const layoutTypes = {
    GRID: 'grid',
    MASONRY: 'masonry',
    CAROUSEL: 'carousel',
};

export const defaultAttributes = {
    uniqueId: {
        type: 'string',
        default: '',
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
    ...generateResCounterAttributies(FB_REVIEWS_COLUMNS, {
        deskRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateGapAttributes(FB_REVIEWS_GAP, {
        defaultRange: 20,
        defaultUnit: 'px',
    }),
};

export default defaultAttributes;
