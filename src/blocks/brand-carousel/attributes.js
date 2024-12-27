const {
    generateResRangeAttributies,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateTextShadowAttributies,
    generateTextStrokeAttributies,
    generateResCounterAttributies,
    generateGapAttributes,
} = window.zoloModule;

import {
    TITLE_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    CONTENT_BG,
    LINK_MARGIN,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
    CAROUSEL_COLUMNS,
    CAROUSEL_GAP,
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
    CONTAINER_MARGIN,
    CONTENT_PADDING,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_BOX_SHADOW,
    CONTENT_ALIGNMENT,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_OFFSET_VERTICAL,
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
    PAG_BOTTOM_SPACING,
    // SHADOW_RANGE,
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
    // content alignment
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateNormalBGAttributes(CONTENT_BG),
    // container
    ...generateResRangeAttributies(CONTAINER_HEIGHT),
    ...generateNormalBGAttributes(CONTAINER_BG),
    ...generateNormalBGAttributes(CONTAINER_H_BG),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
    ...generateDimensionAttributes(CONTAINER_MARGIN),
    ...generateDimensionAttributes(CONTAINER_PADDING),

    // photo
    ...generateDimensionAttributes(BRAND_PHOTO_BORDER_RADIUS),
    ...generateBoxShadowAttributies(BRAND_PHOTO_BOX_SHADOW),
    ...generateNormalBGAttributes(BRAND_PHOTO_BG),
    ...generateDimensionAttributes(BRAND_PHOTO_PADDING),
    ...generateDimensionAttributes(BRAND_PHOTO_MARGIN),
    ...generateBorderAttributies(BRAND_PHOTO_BORDER),

    //title
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateTextShadowAttributies(TITLE_TEXT_SHADOW),
    ...generateTextStrokeAttributies(TITLE_TEXT_STROKE),
    ...generateResAlignmentAttributies(TITLE_ALIGNMENT),

    //link margin
    ...generateDimensionAttributes(LINK_MARGIN),
    ...generateTextShadowAttributies(LINK_TEXT_SHADOW),
    ...generateTextStrokeAttributies(LINK_TEXT_STROKE),

    // image
    ...generateResRangeAttributies(IMAGE_WIDTH),
    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Block specific Attributes
    presetOneStyles: {
        type: 'object',
        default: {
            iconPosition: 'left',
            buttonPosition: 'left',
            buttonIconPosition: 'row-reverse',
        },
    },
    presetTwoStyles: {
        type: 'object',
        default: {
            iconPosition: 'top',
            buttonPosition: 'left',
            buttonIconPosition: 'row-reverse',
        },
    },
    presetThreeStyles: {
        type: 'object',
        default: {
            iconPosition: 'right',
        },
    },
    // global for child blocks
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    labelColor: {
        type: 'string',
    },
    labelHoverColor: {
        type: 'string',
    },
    contentHorizontalPosition: {
        type: 'string',
        default: 'center',
    },
    contentVerticalPosition: {
        type: 'string',
        default: 'center',
    },
    // context
    preset: {
        type: 'string',
        default: 'zb-brand-style-1',
    },
    brandNameTag: {
        type: 'string',
        default: 'h1',
    },
    brandNameVisible: {
        type: 'boolean',
        default: true,
    },
    brandLabelVisible: {
        type: 'boolean',
        default: true,
    },
    enableLogoLink: {
        type: 'boolean',
        default: false,
    },
    logoLinkType: {
        type: 'string',
        default: 'logo__label',
    },

    ...generateResCounterAttributies(CAROUSEL_COLUMNS, {
        noUnits: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    }),
    ...generateGapAttributes(CAROUSEL_GAP, {
        defaultUnit: 'px',
    }),
    // Generator
    ...generateResRangeAttributies(NAV_WIDTH),
    ...generateResRangeAttributies(NAV_HEIGHT),
    ...generateResRangeAttributies(NAV_OFFSET_HORIZONTAL),
    ...generateResRangeAttributies(NAV_OFFSET_VERTICAL),
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

    // shadow
    // ...generateResRangeAttributies(SHADOW_RANGE),
    // swiper options
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
        // default: true,
    },
    showNavigation: {
        type: 'boolean',
        // default: false,
    },
    navColor: {
        type: 'string',
    },
    navHoverColor: {
        type: 'string',
    },
    presetFiveArrowColor: {
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
        // default: 8,
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
