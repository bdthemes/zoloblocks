const {
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateNormalBGAttributes,
    generateDimensionAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateResCounterAttributies,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import {
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
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
    IMAGE_MARGIN,
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
    ...generateDimensionAttributes(IMAGE_MARGIN),

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
        defaultRange: 3,
    }),

    //Columns Gaps
    ...generateResRangeAttributies(COLUMNS_GAP),

    //Row Gaps
    ...generateResRangeAttributies(ROW_GAP),

    //Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Overlay BG
    ...generateNormalBGAttributes(OVERLAY_BG_COLOR),

    //Block specific Attributes
    // preset: {
    //     type: 'string',
    //     default: 'style-1',
    // },
    advancedGallery: {
        type: 'array',
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
        default: 'fas fa-plus',
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
