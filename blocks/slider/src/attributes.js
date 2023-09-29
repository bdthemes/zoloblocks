/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBorderAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    COLUMNS,
    COLUMNS_GAP,
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
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

const attributes = {
    uniqueId: {
        type: 'string',
    },
    zoloStyles: {
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
        default: true,
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
    sliderEffect: {
        type: 'string',
        default: 'slide',
    },
    // Generator
    ...generateResCounterAttributies(COLUMNS),
    ...generateResRangeAttributies(COLUMNS_GAP),
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
