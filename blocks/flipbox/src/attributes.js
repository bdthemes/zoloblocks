/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateNormalBGAttributes,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    FLIPBOX_HEIGHT,
    FRONT_ITEMS_BG,
    FRONT_ITEMS_BORDER,
    FLIPBOX_BORDER_RADIUS,
    FLIPBOX_ITEMS_PADDING,
    FRONT_ITEMS_ALIGNMENT,
    FRONT_ITEMS_VERTICAL_ALIGNMENT,
    BACK_ITEMS_BG,
    BACK_ITEMS_BORDER,
    BACK_ITEMS_PADDING,
    BACK_ITEMS_ALIGNMENT,
    BACK_ITEMS_VERTICAL_ALIGNMENT,

    //Flipbox Front Icon
    FRONT_ICON_SIZE,
    FRONT_ICON_BG,
    FRONT_ICON_BORDER,
    FRONT_ICON_BORDER_RADIUS,
    FRONT_ICON_PADDING,
    FRONT_ICON_MARGIN,
    FRONT_TITLE_MARGIN,
    //Flipbox back Icon
    BACK_ICON_SIZE,
    BACK_ICON_BG,
    BACK_ICON_BORDER,
    BACK_ICON_BORDER_RADIUS,
    BACK_ICON_PADDING,
    BACK_ICON_MARGIN,
    BACK_TITLE_MARGIN,
    //Flipbox Back Link Button
    BACK_LINK_BORDER,
    BACK_LINK_BORDER_RADIUS,
    BACK_LINK_BG,
    BACK_LINK_HBG,
    BACK_LINK_PADDING,
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

    // Generators
    // FLIPBOX FRONT ITEMS
    ...generateResRangeAttributies(FLIPBOX_HEIGHT),
    ...generateNormalBGAttributes(FRONT_ITEMS_BG),
    ...generateBorderAttributies(FRONT_ITEMS_BORDER),
    ...generateDimensionAttributes(FLIPBOX_BORDER_RADIUS),
    ...generateDimensionAttributes(FLIPBOX_ITEMS_PADDING),
    ...generateResAlignmentAttributies(FRONT_ITEMS_ALIGNMENT),
    ...generateResAlignmentAttributies(FRONT_ITEMS_VERTICAL_ALIGNMENT),

    // FLIPBOX FRONT ITEMS
    ...generateNormalBGAttributes(BACK_ITEMS_BG),
    ...generateBorderAttributies(BACK_ITEMS_BORDER),
    ...generateDimensionAttributes(BACK_ITEMS_PADDING),
    ...generateResAlignmentAttributies(BACK_ITEMS_ALIGNMENT),
    ...generateResAlignmentAttributies(BACK_ITEMS_VERTICAL_ALIGNMENT),

    // flipbox front icon
    ...generateDimensionAttributes(FRONT_ICON_SIZE),
    ...generateNormalBGAttributes(FRONT_ICON_BG),
    ...generateBorderAttributies(FRONT_ICON_BORDER),
    ...generateDimensionAttributes(FRONT_ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(FRONT_ICON_PADDING),
    ...generateDimensionAttributes(FRONT_ICON_MARGIN),

    // FLIPBOX FRONT TITLE
    ...generateDimensionAttributes(FRONT_TITLE_MARGIN),

    // FLIPBOX BACK ICON
    ...generateDimensionAttributes(BACK_ICON_SIZE),
    ...generateNormalBGAttributes(BACK_ICON_BG),
    ...generateBorderAttributies(BACK_ICON_BORDER),
    ...generateDimensionAttributes(BACK_ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(BACK_ICON_PADDING),
    ...generateDimensionAttributes(BACK_ICON_MARGIN),

    // FLIPBOX FRONT TITLE
    ...generateDimensionAttributes(BACK_TITLE_MARGIN),

    // FLIPBOX BACK LINK BUTTON
    ...generateBorderAttributies(BACK_LINK_BORDER),
    ...generateDimensionAttributes(BACK_LINK_BORDER_RADIUS),
    ...generateDimensionAttributes(BACK_LINK_PADDING),
    ...generateNormalBGAttributes(BACK_LINK_BG),
    ...generateNormalBGAttributes(BACK_LINK_HBG),

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
    },
    frontIconType: {
        type: 'string',
        default: 'icon',
    },
    frontIconTypeImage: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.placeholder,
            alt: '',
        },
    },
    backIconTypeImage: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.placeholder,
            alt: '',
        },
    },
    backIconType: {
        type: 'string',
        default: 'icon',
    },
    frontIcon: {
        type: 'attribute',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"></path></svg>',
    },
    backIcon: {
        type: 'attribute',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"></path></svg>',
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
        default: 'This is the content on the front side of the flip box.',
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
        default: 'This is the content on the back side of the flip box.',
    },
    showBackLinkBtn: {
        type: 'boolean',
        default: true,
    },
    showBackLinkBtnIcon: {
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
    link: {
        type: 'object',
        default: {
            url: '',
            openInNewTab: false,
        },
    },
    backLinkColor: {
        type: 'string',
    },
    backLinkHoverColor: {
        type: 'string',
    },
    backLinkHoverBorderColor: {
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
    frontIconBackground: {
        type: 'string',
    },
    backIconBackground: {
        type: 'string',
    },
    flipDuration: {
        type: 'number',
        default: 600,
    },
    linkOpenNewTab: {
        type: 'boolean',
        default: false,
    },
    flipEffect: {
        type: 'string',
        default: '1',
    },
    flipEasingType: {
        type: 'string',
        default: 'ease-out',
    },
    flipCustomEasing: {
        'type': 'string',
        'default': '',
    },
    triggerType: {
        type: 'string',
        default: 'hover',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    objectFit: {
        type: 'string',
        default: 'cover',
    },
    backImageObjectFit: {
        type: 'string',
        default: 'cover',
    },
};

export default attributes;
