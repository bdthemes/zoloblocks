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
    CONTAINER_BG,
    CONTENT_BG,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    TEAM_PHOTO_BORDER,
    TEAM_PHOTO_BORDER_RADIUS,
    TEAM_PHOTO_BOX_SHADOW,
    TEAM_PHOTO_MARGIN,
    TEAM_PHOTO_PADDING,
    TEAM_NAME_MARGIN,
    TEAM_DESIGNATION_MARGIN,
    TEAM_SHORT_BIO_MARGIN,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_BG,
    ICONS_HOVER_BG,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    TEAM_MEMBER_CONTAINER_PADDING,
    TEAM_MEMBER_CONTAINER_MARGIN,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

const attributes = {
    //Common Attributes
    uniqueId: {
        type: 'string',
    },
    resDevice: {
        type: 'string',
        default: 'Desktop',
    },
    blockStyle: {
        type: 'object',
    },
    preset: {
        type: 'string',
        default: 'default',
    },
    // Generators
    ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_PADDING),
    ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_MARGIN),
    ...generateNormalBGAttributes(CONTAINER_BG),
    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT, {
        defaultAlign: 'left',
    }),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateBoxShadowAttributies(CONTENT_BOX_SHADOW),
    ...generateNormalBGAttributes(PHOTO_BG),
    ...generateBorderAttributies(TEAM_PHOTO_BORDER),
    ...generateDimensionAttributes(TEAM_PHOTO_BORDER_RADIUS),
    ...generateDimensionAttributes(TEAM_PHOTO_MARGIN),
    ...generateDimensionAttributes(TEAM_PHOTO_PADDING),
    ...generateBoxShadowAttributies(TEAM_PHOTO_BOX_SHADOW),
    ...generateDimensionAttributes(TEAM_DESIGNATION_MARGIN),
    ...generateDimensionAttributes(TEAM_NAME_MARGIN),

    ...generateNormalBGAttributes(ICONS_BG),
    ...generateNormalBGAttributes(ICONS_HOVER_BG),
    ...generateBorderAttributies(ICONS_BORDER),
    ...generateDimensionAttributes(ICONS_BORDER_RADIUS),
    ...generateDimensionAttributes(ICONS_PADDING),
    ...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
    ...generateResRangeAttributies(ICONS_SIZE, {}),
    ...generateResRangeAttributies(ICONS_SPACING, {}),
    ...generateBoxShadowAttributies(ICONS_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICONS_HOVER_BOX_SHADOW),

    ...generateNormalBGAttributes(DETAIL_PAGE_LINK_BG),
    ...generateNormalBGAttributes(DETAIL_PAGE_LINK_HOVER_BG),
    ...generateResRangeAttributies(DPL_ICON_SIZE, {}),
    ...generateResRangeAttributies(DPL_HEIGHT, {}),
    ...generateResRangeAttributies(DPL_WIDTH, {}),
    ...generateBorderAttributies(DPL_BORDER),
    ...generateDimensionAttributes(DPL_BORDER_RADIUS),
    ...generateDimensionAttributes(DPL_PADDING),
    ...generateDimensionAttributes(DPL_MARGIN),
    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //Block Specific Attributes
    blurBgColor: {
        type: 'string',
    },
    blurBgOpacity: {
        type: 'number',
    },
    memberPhoto: {
        type: 'object',
        default: {
            id: '',
            url: 'https://placehold.co/600x300',
            alt: '',
        },
    },
    memberName: {
        type: 'string',
        default: 'John Doe',
    },
    addDetailPageLink: {
        type: 'boolean',
        default: true,
    },
    showDetailPageIcon: {
        type: 'boolean',
        default: true,
    },
    memberDetailPageLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    showDesignation: {
        type: 'boolean',
        default: true,
    },
    memberDesignation: {
        type: 'string',
        default: 'CEO, ZoloBlocks',
    },
    showShortBio: {
        type: 'boolean',
        default: false,
    },
    memberShortBio: {
        type: 'string',
        default:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                icon: {
                    'fa-facebook-f': {
                        name: 'facebook',
                        source: 'fontawesome',
                        type: 'fab',
                    },
                },
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
            {
                id: 2,
                title: 'Twitter',
                icon: {
                    'fa-twitter': {
                        name: 'twitter',
                        source: 'fontawesome',
                        type: 'fab',
                    },
                },
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
            {
                id: 3,
                title: 'Instagram',
                icon: {
                    'fa-instagram': {
                        name: 'instagram',
                        source: 'fontawesome',
                        type: 'fab',
                    },
                },
                link: {
                    url: '#',
                    openInNewTab: false,
                },
            },
        ],
    },
    socialProfilesLinkTarget: {
        type: 'boolean',
        default: true,
    },
    // block styles
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
    shortBioColor: {
        type: 'string',
    },
    // social icons
    separatorColor: {
        type: 'string',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconHoverBorderColor: {
        type: 'string',
    },
    detailPageIconColor: {
        type: 'string',
    },
    detailPageIconHoverColor: {
        type: 'string',
    },
};

export default attributes;
