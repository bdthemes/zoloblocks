const {
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateTextShadowAttributies,
    generateTextStrokeAttributies,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateResRangeAttributies,
} = window.zoloModule;

import {
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    TITLE_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    CONTENT_PADDING,
    CONTENT_BG,
    LINK_MARGIN,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

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
            responsiveControls: false,
        },
    },
    // content alignment
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateNormalBGAttributes(CONTENT_BG),
    // container
    ...generateResRangeAttributies(CONTAINER_HEIGHT),
    ...generateNormalBGAttributes(CONTAINER_BG),
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
    brandPhoto: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.brand,
            alt: '',
        },
    },
    brandTitle: {
        type: 'string',
        default: 'Zalando',
    },
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    brandLabel: {
        type: 'string',
        default: 'www.zalando.com',
    },
    labelColor: {
        type: 'string',
    },
    labelHoverColor: {
        type: 'string',
    },
    // context
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
        default: true,
    },
    logoLinkType: {
        type: 'string',
        default: 'logo__label',
    },
    logoLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
};

export default attributes;
