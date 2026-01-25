

export const layoutTypes = {
    GRID: 'grid',
    MASONRY: 'masonry',
    CAROUSEL: 'carousel',
};

const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'igFeedMargin',
            },
            padding: {
                prefix: 'igFeedPadding',
            },
            background: {
                prefix: 'igFeedBg',
            },
            border: {
                prefix: 'igFeedBorder',
            },
            borderRadius: {
                prefix: 'igFeedBorderRadius',
            },
            boxShadow: {
                prefix: 'igFeedBoxShadow',
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
        default: layoutTypes.GRID,
    },
    postsPerPage: {
        type: 'number',
        default: 9,
    },
    showHeader: {
        type: 'boolean',
        default: true,
    },
    showUsername: {
        type: 'boolean',
        default: true,
    },
    showFollowers: {
        type: 'boolean',
        default: true,
    },
    showBio: {
        type: 'boolean',
        default: true,
    },
    showFollowButton: {
        type: 'boolean',
        default: true,
    },
    followButtonText: {
        type: 'string',
        default: 'Follow us on Instagram',
    },
    showCaption: {
        type: 'boolean',
        default: true,
    },
    captionLength: {
        type: 'number',
        default: 100,
    },
    showLikes: {
        type: 'boolean',
        default: true,
    },
    showComments: {
        type: 'boolean',
        default: true,
    },
    openInNewTab: {
        type: 'boolean',
        default: true,
    },
    enableLightbox: {
        type: 'boolean',
        default: false,
    },
    entranceAnimation: {
        type: 'string',
        default: 'zolo-zoom-in',
    },
    showLightboxThumb: {
        type: 'boolean',
        default: false,
    },
    lightboxCaptionSize: {
        type: 'number',
        default: 16,
    },
    imageRatio: {
        type: 'string',
        default: 'square',
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
        default: 12,
    },
    igGap: {
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
    // Column settings
    igColumns: {
        type: 'object',
        default: {
            Desktop: 3,
            Tablet: 2,
            Mobile: 1,
        },
    },

};

export default attributes;
