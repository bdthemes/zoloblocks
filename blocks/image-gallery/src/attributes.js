const {
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateNormalBGAttributes,
    generateDimensionAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateResCounterAttributies,
    generateGapAttributes,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import {
    COLUMN_COUNT,
    COLUMN_GAP,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BORDER,
    CONTAINER_HOVER_BORDER,
    IMAGE_BORDER,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
    IMAGE_HOVER_BOX_SHADOW,
    IMAGE_HOVER_BACKGROUND,
    IMAGE_PADDING,
    HEADING_BORDER,
    HEADING_BACKGROUND,
    HEADING_MARGIN,
    HEADING_PADDING,
    HEADING_BORDER_RADIUS,
    HEADING_BOX_SHADOW,
    ZOOM_ICON_PADDING,
    ZOOM_ICON_BORDER_RADIUS,
    ZOOM_ICON_BORDER,
    ZOOM_ICON_BOX_SHADOW,
    ZOOM_ICON_HOVER_BOX_SHADOW,
    ZOOM_ICON_BG_COLOR,
    ZOOM_ICON_BG_HOVER_COLOR,
    OVERLAY_BG_COLOR,
    ZOOM_ICON_SIZE,
} from './constants';

const attributes = {
    //Common Attributes
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
    headingColor: {
        type: 'string',
    },
    imageSize: {
        type: 'string',
        default: 'full',
    },
    // Container
    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateNormalBGAttributes(CONTAINER_HOVER_BACKGROUND),
    ...generateDimensionAttributes(CONTAINER_MARGIN),
    ...generateDimensionAttributes(CONTAINER_PADDING),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateBorderAttributies(CONTAINER_HOVER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
    ...generateBoxShadowAttributies(CONTAINER_HOVER_BOX_SHADOW),

    // Image
    ...generateNormalBGAttributes(IMAGE_BACKGROUND),
    ...generateNormalBGAttributes(IMAGE_HOVER_BACKGROUND),
    ...generateBorderAttributies(IMAGE_BORDER),
    ...generateDimensionAttributes(IMAGE_BORDER_RADIUS),
    ...generateBoxShadowAttributies(IMAGE_BOX_SHADOW),
    ...generateBoxShadowAttributies(IMAGE_HOVER_BOX_SHADOW),
    ...generateDimensionAttributes(IMAGE_PADDING),

    // Heading
    ...generateBorderAttributies(HEADING_BORDER),
    ...generateNormalBGAttributes(HEADING_BACKGROUND),
    ...generateDimensionAttributes(HEADING_MARGIN),
    ...generateDimensionAttributes(HEADING_PADDING),
    ...generateDimensionAttributes(HEADING_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HEADING_BOX_SHADOW),

    // Zoom Icon
    ...generateDimensionAttributes(ZOOM_ICON_PADDING),
    ...generateDimensionAttributes(ZOOM_ICON_BORDER_RADIUS),
    ...generateBorderAttributies(ZOOM_ICON_BORDER),
    ...generateBoxShadowAttributies(ZOOM_ICON_BOX_SHADOW),
    ...generateBoxShadowAttributies(ZOOM_ICON_HOVER_BOX_SHADOW),
    ...generateNormalBGAttributes(ZOOM_ICON_BG_COLOR),
    ...generateNormalBGAttributes(ZOOM_ICON_BG_HOVER_COLOR),
    ...generateResRangeAttributies(ZOOM_ICON_SIZE),

    // Column Count
    ...generateResCounterAttributies(COLUMN_COUNT, {
        deskRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),

    //Columns Gaps
    ...generateGapAttributes(COLUMN_GAP, {
        defaultUnit: 'px',
    }),

    //Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Overlay BG
    ...generateNormalBGAttributes(OVERLAY_BG_COLOR),

    //Block specific Attributes
    advancedGallery: {
        type: 'array',
        default: [
            {
                id: '',
                url: zoloPlaceholders.placeholder,
                alt: '',
            },
            {
                id: '',
                url: zoloPlaceholders.placeholderTwo,
                alt: '',
            },
            {
                id: '',
                url: zoloPlaceholders.placeholderThree,
                alt: '',
            },
            {
                id: '',
                url: zoloPlaceholders.placeholderFour,
                alt: '',
            },
            {
                id: '',
                url: zoloPlaceholders.placeholderFive,
                alt: '',
            },
            {
                id: '',
                url: zoloPlaceholders.placeholderSix,
                alt: '',
            },
        ],
    },
    showCaption: {
        type: 'boolean',
        default: true,
    },
    showLightbox: {
        type: 'boolean',
        default: true,
    },
    lightboxIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>',
    },
    entranceAnimation: {
        type: 'string',
        default: 'zolo-zoom-up',
    },
    showLightboxThumb: {
        type: 'boolean',
        default: true,
    },
    showThumbCaption: {
        type: 'boolean',
        default: true,
    },
    zoomIconColor: {
        type: 'string',
    },
    zoomIconHoverBorderColor: {
        type: 'string',
    },
    zoomIconHoverColor: {
        type: 'string',
    },
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
    imageHoverBorderColor: {
        type: 'string',
    },
};

export default attributes;
