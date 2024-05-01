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
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    PHOTO_SIZE,
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
    ICONS_MARGIN,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    TEAM_MEMBER_CONTAINER_PADDING,
    TEAM_MEMBER_CONTAINER_MARGIN,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
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
    // item
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateDimensionAttributes(ITEM_MARGIN),
    ...generateBoxShadowAttributies(ITEM_BOX_SHADOW),

    ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_PADDING),
    ...generateDimensionAttributes(TEAM_MEMBER_CONTAINER_MARGIN),
    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateBoxShadowAttributies(CONTENT_BOX_SHADOW),
    ...generateNormalBGAttributes(PHOTO_BG),
    ...generateResRangeAttributies(PHOTO_SIZE),
    ...generateBorderAttributies(TEAM_PHOTO_BORDER),
    ...generateDimensionAttributes(TEAM_PHOTO_BORDER_RADIUS),
    ...generateDimensionAttributes(TEAM_PHOTO_MARGIN),
    ...generateDimensionAttributes(TEAM_PHOTO_PADDING),
    ...generateBoxShadowAttributies(TEAM_PHOTO_BOX_SHADOW),
    ...generateDimensionAttributes(TEAM_DESIGNATION_MARGIN),
    ...generateDimensionAttributes(TEAM_NAME_MARGIN),

    ...generateDimensionAttributes(ICONS_CONTAINER_PADDING),
    ...generateDimensionAttributes(ICONS_CONTAINER_MARGIN),
    ...generateNormalBGAttributes(ICONS_BG),
    ...generateNormalBGAttributes(ICONS_HOVER_BG),
    ...generateBorderAttributies(ICONS_BORDER),
    ...generateDimensionAttributes(ICONS_BORDER_RADIUS),
    ...generateDimensionAttributes(ICONS_PADDING),
    ...generateDimensionAttributes(ICONS_MARGIN),
    ...generateDimensionAttributes(TEAM_SHORT_BIO_MARGIN),
    ...generateResRangeAttributies(ICONS_SIZE, {}),
    ...generateResRangeAttributies(ICONS_SPACING, {}),
    ...generateBoxShadowAttributies(ICONS_BOX_SHADOW),
    ...generateBoxShadowAttributies(ICONS_HOVER_BOX_SHADOW),

    ...generateNormalBGAttributes(DETAIL_PAGE_LINK_BG),
    ...generateNormalBGAttributes(DETAIL_PAGE_LINK_HOVER_BG),
    ...generateResRangeAttributies(DPL_ICON_SIZE, {}),
    ...generateBorderAttributies(DPL_BORDER),
    ...generateDimensionAttributes(DPL_BORDER_RADIUS),
    ...generateDimensionAttributes(DPL_PADDING),
    ...generateDimensionAttributes(DPL_MARGIN),
    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //Block Specific Attributes
    memberPhoto: {
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
    memberName: {
        type: 'string',
        default: 'John Doe',
    },
    addDetailPageLink: {
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
        default: 'CEO at ZoloBlocks',
    },
    showShortBio: {
        type: 'boolean',
        default: true,
    },
    memberShortBio: {
        type: 'string',
        default: 'CEO at ZoloBlocks, leading innovative tech solutions for a better world.',
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
    detailIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    // block styles
    nameColor: {
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
