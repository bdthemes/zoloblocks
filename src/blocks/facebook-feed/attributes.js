export const layoutTypes = {
    TIMELINE: 'timeline',
    GRID: 'grid',
    MASONRY: 'masonry',
    CAROUSEL: 'carousel',
    GALLERY: 'gallery',
};

const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'fbFeedMargin',
            },
            padding: {
                prefix: 'fbFeedPadding',
            },
            background: {
                prefix: 'fbFeedBg',
            },
            border: {
                prefix: 'fbFeedBorder',
            },
            borderRadius: {
                prefix: 'fbFeedBorderRadius',
            },
            boxShadow: {
                prefix: 'fbFeedBoxShadow',
            },
            responsiveControls: true,
        },
    },
    uniqueId: {
        type: 'string',
        default: '',
    },
    layoutType: {
        type: 'string',
        default: layoutTypes.TIMELINE,
    },
    postsPerPage: {
        type: 'number',
        default: 6,
    },
    showAvatar: {
        type: 'boolean',
        default: true,
    },
    showAuthor: {
        type: 'boolean',
        default: true,
    },
    showDate: {
        type: 'boolean',
        default: true,
    },
    showFacebookIcon: {
        type: 'boolean',
        default: true,
    },
    showContent: {
        type: 'boolean',
        default: true,
    },
    showImage: {
        type: 'boolean',
        default: true,
    },
    contentLength: {
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
    showReactions: {
        type: 'boolean',
        default: true,
    },
    showComments: {
        type: 'boolean',
        default: false,
    },
    showShares: {
        type: 'boolean',
        default: false,
    },
    galleryCardClickable: {
        type: 'boolean',
        default: false,
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
    cacheExpiration: {
        type: 'number',
        default: 43200, // 12 hours in seconds
    },
    fbGap: {
        type: 'object',
        default: {
            Desktop: {
                linked: true,
                first: '20px',
                second: '20px',
            },
        },
    },
    resMode: {
        type: 'string',
        default: 'desktop',
    },
    fbColumns: {
        type: 'object',
        default: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1,
        },
    },
};

export default attributes;
