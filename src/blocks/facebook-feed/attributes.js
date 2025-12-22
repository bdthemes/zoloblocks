export const layoutTypes = {
    TIMELINE: 'timeline',
    GRID: 'grid',
    MASONRY: 'masonry',
    CAROUSEL: 'carousel',
};

export const defaultAttributes = {
    uniqueId: '',
    layoutType: layoutTypes.TIMELINE,
    columns: {
        desktop: 3,
        tablet: 2,
        mobile: 1,
    },
    gap: {
        desktop: 20,
        tablet: 15,
        mobile: 10,
    },
    postsPerPage: 6,
    showAvatar: true,
    showAuthor: true,
    showDate: true,
    showContent: true,
    contentLength: 150,
    showReadMore: true,
    readMoreText: 'Read more',
    showReactions: true,
    showComments: false,
    showShares: false,
    carouselAutoplay: true,
    carouselSpeed: 3000,
    carouselLoop: true,
    facebookPageId: '',
    facebookAccessToken: '',
    cacheExpiration: 3600,
};
