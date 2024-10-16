const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResCounterAttributies,
} = window.zoloModule;
import {
    COLUMNS,
    COLUMNS_GAP,
    //main image
    MAIN_IMG_BORDER,
    MAIN_IMG_BORDER_RADIUS,
    IMG_CONTENT_BG,
    IMG_CONTENT_BORDER,
    IMG_CONTENT_BORDER_RADIUS,
    IMG_CONTENT_PADDING,
    IMG_CONTENT_MARGIN,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_SPACE,
    //category
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    //slider navigation
    NAV_BTN_PADDING,
    NAV_BTN_MARGIN,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_OFFSET_VERTICAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_ICON_SIZE,
    NAV_BG,
    NAV_HOVER_BG,
    //thumbs
    THUMB_HEIGHT,
    THUMB_BORDER,
    THUMB_BORDER_RADIUS,
    LINE_HEIGHT,
    PLAY_BTN_SIZE,
    PLAY_BTN_ICON_SIZE,
    PLAY_BTN_BG,
    PLAY_BTN_BORDER,
    PLAY_BTN_BORDER_RADIUS,
    PLAY_BTN_HOVER_BG,
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
    postQuery: {
        type: 'object',
    },
    contentPosition: {
        type: 'string',
        default: 'zolo-center-center',
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showExcerpt: {
        type: 'boolean',
        default: true,
    },
    showCategory: {
        type: 'boolean',
        default: true,
    },
    showMeta: {
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
    titleTag: {
        type: 'string',
        default: 'h2',
    },
    titleWords: {
        type: 'number',
    },
    excerptWords: {
        type: 'number',
        default: 15,
    },
    excerptindicator: {
        type: 'string',
        default: '...',
    },
    metaSeparator: {
        type: 'string',
        default: '//',
    },

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // slider thumbs settings
    ...generateResCounterAttributies(COLUMNS, {
        deskRange: 4,
        tabRange: 3,
        mobRange: 2,
    }),
    ...generateResRangeAttributies(COLUMNS_GAP),

    //main slider image
    ...generateBorderAttributies(MAIN_IMG_BORDER),
    ...generateDimensionAttributes(MAIN_IMG_BORDER_RADIUS),
    //image content
    ...generateNormalBGAttributes(IMG_CONTENT_BG),
    ...generateBorderAttributies(IMG_CONTENT_BORDER),
    ...generateDimensionAttributes(IMG_CONTENT_BORDER_RADIUS),
    ...generateDimensionAttributes(IMG_CONTENT_PADDING),
    ...generateDimensionAttributes(IMG_CONTENT_MARGIN),

    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(EXCERPT_MARGIN),
    ...generateResRangeAttributies(META_SPACE),

    //category
    ...generateResRangeAttributies(CAT_GAP),
    ...generateBorderAttributies(CAT_BORDER),
    ...generateDimensionAttributes(CAT_BORDER_RADIUS),
    ...generateDimensionAttributes(CAT_MARGIN),
    ...generateDimensionAttributes(CAT_PADDING),

    //slider navigation
    ...generateDimensionAttributes(NAV_BTN_PADDING),
    ...generateDimensionAttributes(NAV_BTN_MARGIN),
    ...generateResRangeAttributies(NAV_WIDTH),
    ...generateResRangeAttributies(NAV_HEIGHT),
    ...generateResRangeAttributies(NAV_OFFSET_HORIZONTAL),
    ...generateResRangeAttributies(NAV_OFFSET_VERTICAL),
    ...generateBorderAttributies(NAV_BORDER),
    ...generateDimensionAttributes(NAV_BORDER_RADIUS),
    ...generateNormalBGAttributes(NAV_BG),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateResRangeAttributies(NAV_ICON_SIZE),

    //thumbs style
    ...generateResRangeAttributies(THUMB_HEIGHT),
    ...generateBorderAttributies(THUMB_BORDER),
    ...generateDimensionAttributes(THUMB_BORDER_RADIUS),
    ...generateResRangeAttributies(LINE_HEIGHT),
    ...generateDimensionAttributes(PLAY_BTN_SIZE),
    ...generateResRangeAttributies(PLAY_BTN_ICON_SIZE),
    ...generateNormalBGAttributes(PLAY_BTN_BG),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateBorderAttributies(PLAY_BTN_BORDER),
    ...generateDimensionAttributes(PLAY_BTN_BORDER_RADIUS),
    ...generateNormalBGAttributes(PLAY_BTN_HOVER_BG),

    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
    },

    //category
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

    categoryHoverBorderColor: {
        type: 'string',
    },

    //meta
    metaColor: {
        type: 'string',
    },
    metaHColor: {
        type: 'string',
    },

    //thumbs
    lineColor: {
        type: 'string',
    },
    playBtnIconColor: {
        type: 'string',
    },
    playBtnIconHoverColor: {
        type: 'string',
    },
    playBtnHoverBorderColor: {
        type: 'string',
    },

    // swiper options
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
        default: true,
    },
    navColor: {
        type: 'string',
    },
    navHoverColor: {
        type: 'string',
    },
    speed: {
        type: 'number',
        default: 8,
    },
    carouselEffect: {
        type: 'string',
        default: 'fade',
    },

    customNavIcon: {
        type: 'boolean',
        default: true,
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
