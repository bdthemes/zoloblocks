/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes, generateBorderAttributies, generateNormalBGAttributes } =
    window.zoloModule;

import {
    SLIDER_HEIGHT,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    PAG_VERTICAL_OFFSET,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

const attributes = {
    // global attributes
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
    sliderOptions: {
        type: 'object',
    },
    autoplay: {
        type: 'boolean',
        // default: false,
    },
    autoplayDelay: {
        type: 'number',
        default: 3,
    },
    pauseOnMouseEnter: {
        type: 'boolean',
        default: false,
    },
    infiniteLoop: {
        type: 'boolean',
        // default: false,
    },
    showNavigation: {
        type: 'boolean',
        // default: true,
    },
    navColor: {
        type: 'string',
    },
    navHoverColor: {
        type: 'string',
    },
    navHoverBorderColor: {
        type: 'string',
    },
    showPagination: {
        type: 'boolean',
        // default: false,
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
        // default: 8
    },

    sliderEffect: {
        type: 'string',
        default: 'slide',
    },
    addNewSlideBlock: {
        type: 'boolean',
        default: false,
    },
    // Generator
    ...generateResRangeAttributies(SLIDER_HEIGHT),
    ...generateResRangeAttributies(CONTENT_WIDTH),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateResRangeAttributies(NAV_WIDTH),
    ...generateResRangeAttributies(NAV_HEIGHT),
    ...generateBorderAttributies(NAV_BORDER),
    ...generateDimensionAttributes(NAV_BORDER_RADIUS),
    ...generateNormalBGAttributes(NAV_BG),
    ...generateNormalBGAttributes(NAV_HOVER_BG),
    ...generateResRangeAttributies(NAV_ICON_SIZE),
    ...generateResRangeAttributies(PAG_VERTICAL_OFFSET),
    uniqueId: {
        type: 'string',
    },
    blockStyle: {
        type: 'object',
    },
    carouselEffect: {
        type: 'string',
        default: 'slide',
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

    // pagination
    ...generateResRangeAttributies(PAG_WIDTH),
    ...generateResRangeAttributies(PAG_HEIGHT),
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(PAG_BG),
    ...generateResRangeAttributies(PAG_SPACING),

    // active pagination
    ...generateResRangeAttributies(APAG_WIDTH),
    ...generateResRangeAttributies(APAG_HEIGHT),
    ...generateBorderAttributies(APAG_BORDER),
    ...generateDimensionAttributes(APAG_BORDER_RADIUS),
    ...generateNormalBGAttributes(APAG_BG),
};

export default attributes;
