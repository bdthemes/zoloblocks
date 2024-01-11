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
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
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
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    //Flipbox
    FRONT_ICON_SIZE,
    FRONT_ICON_BG,
    FRONT_ICON_BORDER,
    FRONT_ICON_BORDER_RADIUS,
    FRONT_ICON_PADDING,
    FRONT_ICON_MARGIN,
    FRONT_ICON_BOX_SHADOW,
    FRONT_TITLE_MARGIN

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
    // flipbox front icon
    ...generateDimensionAttributes(FRONT_ICON_SIZE),
    ...generateNormalBGAttributes(FRONT_ICON_BG),
    ...generateBorderAttributies(FRONT_ICON_BORDER),
    ...generateDimensionAttributes(FRONT_ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(FRONT_ICON_PADDING),
    ...generateDimensionAttributes(FRONT_ICON_MARGIN),

    // FLIPBOX FRONT TITLE
    ...generateDimensionAttributes(FRONT_TITLE_MARGIN),

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
    flipboxStyle: {
        type: 'string',
        default: 'default',
    },
    isHover: {
        type: 'boolean',
        default: false,
    },
    flipType: {
        type: 'string',
        source: 'attribute',
        selector: '.zolo-flipbox-container',
        attribute: 'data-flip-type',
        default: 'flip-left',
    },
    selectedSide: {
        type: 'string',
        default: 'front',
    },
    frontIconOrImage: {
        type: 'string',
        default: 'icon',
    },
    frontIcon: {
        type: 'attribute',
        default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"></path></svg>',
    },
    frontImageUrl: {
        type: 'attribute',
        attribute: 'src',
    },
    frontImageId: {
        type: 'string',
        default: null,
    },
    backIconOrImage: {
        type: 'string',
        default: 'icon',
    },
    backIcon: {
        type: 'attribute',
        default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"></path></svg>',
    },
    backImageUrl: {
        type: 'attribute',
        selector: 'back-image-container img',
        attribute: 'src',
    },
    backImageId: {
        type: 'string',
        default: null,
    },
    showFrontIcon: {
        type: 'boolean',
        default: true,
    },
    showFrontTitle: {
        type: 'boolean',
        default: true,
    },
    frontTitle: {
        type: 'string',
        selector: 'zolo-flipbox-front-title',
        default: 'Front Title Here',
    },
    showFrontContent: {
        type: 'boolean',
        default: true,
    },
    frontContent: {
        type: 'string',
        selector: 'zolo-flipbox-front-content',
        default: 'Front Content Here',
    },
    showBackIcon: {
        type: 'boolean',
        default: false,
    },
    showBackTitle: {
        type: 'boolean',
        default: true,
    },
    backTitle: {
        type: 'string',
        selector: 'zolo-flipbox-back-title',
        default: 'Back Title Here',
    },
    showBackContent: {
        type: 'boolean',
        default: true,
    },
    backContent: {
        type: 'string',
        selector: 'zolo-flipbox-back-content',
        default: 'Back Content Here',
    },
    linkType: {
        type: 'string',
        default: 'box',
    },
    showBackLinkBtn: {
        type: 'boolean',
        default: false,
    },
    buttonText: {
        type: 'string',
        default: 'Click Here',
    },
    buttonIcon: {
        type: 'attribute',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    buttonIconPos: {
        type: 'string',
        default: 'before',
    },
    link: {
        type: 'string',
    },
    frontTitleColor: {
        type: 'string',
    },
    backTitleColor: {
        type: 'string',
    },
    frontContentColor: {
        type: 'string',
    },
    backContentColor: {
        type: 'string',
    },
    frontIconColor: {
        type: 'string',
    },
    frontIconHoverColor: {
        type: 'string',
    },
    backIconColor: {
        type: 'string',
    },
    buttonStyle: {
        type: 'string',
        default: 'styleOne',
    },
    buttonClasses: {
        type: 'string',
        default: '',
    },
    buttonBackground: {
        type: 'string',
    },
    buttonColor: {
        type: 'string',
    },
    frontIconBackground: {
        type: 'string',
    },
    backIconBackground: {
        type: 'string',
    },
    transitionSpeed: {
        type: 'number',
    },
    displayButtonIcon: {
        type: 'boolean',
        default: false,
    },
    align: {
        type: 'string',
        default: 'center',
    },
    contentPosition: {
        type: 'string',
        default: 'center',
    },
    linkOpenNewTab: {
        type: 'boolean',
        default: false,
    },
};

export default attributes;
