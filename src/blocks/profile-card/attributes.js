/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    HEADER_AREA_BORDER_RADIUS,
    HEADER_AREA_PADDING,
    HEADER_BADGE_BORDER,
    HEADER_AREA_BG,
    BADGE_PADDING,
    BADGE_MARGIN,
    BADGE_BG,
    BADGE_BORDER_RADIUS,
    CONTENT_BORDER_RADIUS,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_PADDING,
    INNER_CONTENT_PADDING,
    CONTENT_MARGIN,
    PHOTO_VOFFSET,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_BORDER_RADIUS,
    META_WRAP_MARGIN,
    NAME_MARGIN,
    USERNAME_MARGIN,
    EMAIL_MARGIN,
    BIO_MARGIN,
    STATUS_GAP,
    STATUS_MARGIN,
    FBTN_BG,
    FBTN_BOX_SHADOW,
    FBTN_BORDER,
    FBTN_BORDER_RADIUS,
    FBTN_PADDING,
    FBTN_MARGIN,
    FBTN_HOVER_BG,
    FBTN_HOVER_BOX_SHADOW,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_MARGIN,
    ICONS_BG,
    ICONS_HOVER_BG,
    PHOTO_IMG_OVERLAY,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

const attributes = {
    // Global Attributes
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
    //Block Specific Attributes
    showBadge: {
        type: 'boolean',
        default: true,
    },
    badgeText: {
        type: 'string',
        default: 'Pro',
    },
    showPhoto: {
        type: 'boolean',
        default: true,
    },
    photo: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.avatarSquare,
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
    name: {
        type: 'string',
        default: 'John Doe',
    },
    showUsername: {
        type: 'boolean',
        default: true,
    },
    username: {
        type: 'string',
        default: '@john_doe',
    },
    showEmail: {
        type: 'boolean',
        default: true,
    },
    email: {
        type: 'string',
        default: 'itsjohn_doe@email.com',
    },
    showBio: {
        type: 'boolean',
        default: true,
    },
    bio: {
        type: 'string',
        default:
            'Proficient WordPress developer specializing in plugin customization, integration, and delivering responsive, feature-rich websites.',
    },
    showStatus: {
        type: 'boolean',
        default: true,
    },
    statusItems: {
        type: 'array',
        default: [
            {
                id: 1,
                number: '210',
                label: 'Posts',
            },
            {
                id: 2,
                number: '430',
                label: 'Followers',
            },
            {
                id: 3,
                number: '210',
                label: 'Following',
            },
        ],
    },
    showFollowButton: {
        type: 'boolean',
        default: true,
    },
    followButtonText: {
        type: 'string',
        default: 'Follow',
    },
    followButtonLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    showSocialProfiles: {
        type: 'boolean',
        default: true,
    },
    socialProfiles: {
        type: 'array',
        default: [
            {
                id: 1,
                title: 'Facebook',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
            {
                id: 2,
                title: 'Twitter',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
            {
                id: 3,
                title: 'Instagram',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
        ],
    },
    // block styles
    badgeColor: {
        type: 'string',
    },
    nameColor: {
        type: 'string',
    },
    usernameColor: {
        type: 'string',
    },
    emailColor: {
        type: 'string',
    },
    bioColor: {
        type: 'string',
    },
    numberColor: {
        type: 'string',
    },
    labelColor: {
        type: 'string',
    },
    btnColor: {
        type: 'string',
    },
    btnHoverColor: {
        type: 'string',
    },
    btnHoverBorderColor: {
        type: 'string',
    },
    // social icons
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconHoverBorderColor: {
        type: 'string',
    },
    // Generators
    ...generateDimensionAttributes(HEADER_AREA_BORDER_RADIUS),
    ...generateDimensionAttributes(HEADER_AREA_PADDING, {}),
    ...generateNormalBGAttributes(HEADER_AREA_BG),
    ...generateBorderAttributies(HEADER_BADGE_BORDER),
    ...generateNormalBGAttributes(BADGE_BG),
    ...generateDimensionAttributes(BADGE_PADDING),
    ...generateDimensionAttributes(BADGE_MARGIN),
    ...generateDimensionAttributes(BADGE_BORDER_RADIUS),

    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateDimensionAttributes(INNER_CONTENT_PADDING),

    ...generateResRangeAttributies(PHOTO_SIZE, {}),
    ...generateResRangeAttributies(PHOTO_VOFFSET, {}),
    ...generateBorderAttributies(PHOTO_BORDER),
    ...generateDimensionAttributes(PHOTO_BORDER_RADIUS),
    ...generateDimensionAttributes(META_WRAP_MARGIN),

    ...generateDimensionAttributes(NAME_MARGIN),
    ...generateDimensionAttributes(USERNAME_MARGIN),
    ...generateDimensionAttributes(EMAIL_MARGIN),
    ...generateDimensionAttributes(BIO_MARGIN),

    ...generateDimensionAttributes(STATUS_MARGIN),
    ...generateResRangeAttributies(STATUS_GAP),

    ...generateNormalBGAttributes(FBTN_BG),
    ...generateBoxShadowAttributies(FBTN_BOX_SHADOW),
    ...generateBorderAttributies(FBTN_BORDER),
    ...generateDimensionAttributes(FBTN_BORDER_RADIUS),
    ...generateDimensionAttributes(FBTN_PADDING),
    ...generateDimensionAttributes(FBTN_MARGIN),

    ...generateNormalBGAttributes(FBTN_HOVER_BG),
    ...generateBoxShadowAttributies(FBTN_HOVER_BOX_SHADOW),

    ...generateNormalBGAttributes(ICONS_BG),
    ...generateNormalBGAttributes(ICONS_HOVER_BG),
    ...generateBorderAttributies(ICONS_BORDER),
    ...generateDimensionAttributes(ICONS_BORDER_RADIUS),
    ...generateDimensionAttributes(ICONS_PADDING),
    ...generateDimensionAttributes(ICONS_MARGIN),
    ...generateResRangeAttributies(ICONS_SIZE, {}),
    ...generateResRangeAttributies(ICONS_SPACING, {}),

    ...generateNormalBGAttributes(PHOTO_IMG_OVERLAY),

    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
