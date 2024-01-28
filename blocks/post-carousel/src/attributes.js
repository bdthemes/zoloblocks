/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResCounterAttributies,
} = window.zoloModule;
import {
    COLUMNS,
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    CONTENT_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    THUMBNAIL_BORDER,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BG,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_MARGIN,
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    READMORE_GAP,
    READMORE_BORDER,
    READMORE_BORDER_RADIUS,
    READMORE_MARGIN,
    READMORE_PADDING,
    AVATAR_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_GAP,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    META_SPACE,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_ICON_SIZE,
    NAV_BG,
    NAV_HOVER_BG,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_SPACING,
    PAG_BOTTOM_SPACING,
    PAG_BG,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BG,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Global Attributes
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
        default: 'style-1',
    },
    showExcerpt: {
        type: 'boolean',
        default: false,
    },
    postTaxonomies: {
        type: 'object',
        default: {},
    },
    metaSeparator: {
        type: 'string',
        default: '//',
    },
    postQuery: {
        type: 'object',
    },
    ...generateResRangeAttributies(COLUMNS_GAP),
    showThumbnail: {
        type: 'boolean',
        default: true,
    },
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    showTitle: {
        type: 'boolean',
        default: true,
    },
    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'h2',
    },
    titleWords: {
        type: 'number',
    },
    showExcerpt: {
        type: 'boolean',
        default: false,
    },
    excerptWords: {
        type: 'number',
        default: 15,
    },
    excerptindicator: {
        type: 'string',
        default: '...',
    },
    excerptColor: {
        type: 'string',
    },
    catColor: {
        type: 'string',
    },
    catBgColor: {
        type: 'string',
    },
    catHoverColor: {
        type: 'string',
    },
    catBgHoverColor: {
        type: 'string',
    },
    showReadMore: {
        type: 'boolean',
        default: false,
    },
    readMoreBtnText: {
        type: 'string',
        default: 'Read More',
    },
    showCategory: {
        type: 'boolean',
        default: true,
    },
    showAuthor: {
        type: 'boolean',
        default: true,
    },
    namePrefixColor: {
        type: 'string',
    },
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    showMeta: {
        type: 'boolean',
        default: true,
    },
    metaColor: {
        type: 'string',
    },
    // post meta
    showReadingTime: {
        type: 'boolean',
        default: false,
    },
    // readmore button
    showReadmoreText: {
        type: 'boolean',
        default: true,
    },
    showReadmoreIcon: {
        type: 'boolean',
        default: false,
    },
    readMoreIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    readMoreColor: {
        type: 'string',
    },
    readMoreBgColor: {
        type: 'string',
    },
    readMoreHoverColor: {
        type: 'string',
    },
    readMoreBgHoverColor: {
        type: 'string',
    },
    ...generateDimensionAttributes(COLUMN_PADDING),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateNormalBGAttributes(COLUMN_BG),
    ...generateBorderAttributies(COLUMN_BORDER),
    ...generateDimensionAttributes(COLUMN_BORDER_RADIUS),
    ...generateBoxShadowAttributies(COLUMN_SHADOW),

    ...generateDimensionAttributes(THUMBNAIL_MARGIN),

    ...generateBorderAttributies(THUMBNAIL_BORDER),
    ...generateDimensionAttributes(THUMBNAIL_BORDER_RADIUS),
    ...generateNormalBGAttributes(THUMBNAIL_BG),
    ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),

    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(EXCERPT_MARGIN),
    ...generateDimensionAttributes(META_MARGIN),

    ...generateResRangeAttributies(CAT_GAP),
    ...generateBorderAttributies(CAT_BORDER),
    ...generateDimensionAttributes(CAT_BORDER_RADIUS),
    ...generateDimensionAttributes(CAT_MARGIN),
    ...generateDimensionAttributes(CAT_PADDING),

    ...generateResRangeAttributies(READMORE_GAP),
    ...generateBorderAttributies(READMORE_BORDER),
    ...generateDimensionAttributes(READMORE_BORDER_RADIUS),
    ...generateDimensionAttributes(READMORE_MARGIN),
    ...generateDimensionAttributes(READMORE_PADDING),

    ...generateResRangeAttributies(AVATAR_SIZE),
    ...generateBorderAttributies(AVATAR_BORDER),
    ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),
    ...generateResRangeAttributies(AVATAR_GAP),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // post meta
    ...generateResRangeAttributies(META_SPACE),

    // Generator
    ...generateResCounterAttributies(COLUMNS),
    ...generateResRangeAttributies(COLUMNS_GAP),
    ...generateResRangeAttributies(NAV_WIDTH),
    ...generateResRangeAttributies(NAV_HEIGHT),
    ...generateBorderAttributies(NAV_BORDER),
    ...generateDimensionAttributes(NAV_BORDER_RADIUS),
    ...generateNormalBGAttributes(NAV_BG),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateResRangeAttributies(NAV_ICON_SIZE),

    // pagination
    ...generateResRangeAttributies(PAG_WIDTH),
    ...generateResRangeAttributies(PAG_HEIGHT),
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(PAG_BG),
    ...generateResRangeAttributies(PAG_SPACING),
    ...generateResRangeAttributies(PAG_BOTTOM_SPACING),

    // active pagination
    ...generateResRangeAttributies(APAG_WIDTH),
    ...generateResRangeAttributies(APAG_HEIGHT),
    ...generateBorderAttributies(APAG_BORDER),
    ...generateDimensionAttributes(APAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(APAG_BG),
    // swiper options
    uniqueId: {
        type: 'string',
    },
    blockStyle: {
        type: 'object',
    },
    slideItems: {
        type: 'number',
        default: 3,
    },
    sliderType: {
        type: 'string',
        default: 'slider',
    },
    sliderOptions: {
        type: 'object',
    },
    autoplay: {
        type: 'boolean',
        default: false,
    },
    autoplayDelay: {
        type: 'number',
        default: 30,
    },
    pauseOnMouseEnter: {
        type: 'boolean',
        default: false,
    },
    infiniteLoop: {
        type: 'boolean',
        default: true,
    },
    showNavigation: {
        type: 'boolean',
        default: false,
    },
    navColor: {
        type: 'string',
    },
    navHoverColor: {
        type: 'string',
    },
    showPagination: {
        type: 'boolean',
        default: true,
    },
    paginationType: {
        type: 'string',
        default: 'bullets',
    },
    dynamicBullets: {
        type: 'boolean',
        default: false,
    },
    speed: {
        type: 'number',
        default: 8,
    },
    carouselEffect: {
        type: 'string',
        default: 'slide',
    },
    coverFlowEffect: {
        type: 'object',
        default: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    },
    addNewSlideBlock: {
        type: 'boolean',
        default: false,
    },
    customNavIcon: {
        type: 'boolean',
        default: false,
    },
    prevNavIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>',
    },
    nextNavIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>',
    },
};

export default attributes;
