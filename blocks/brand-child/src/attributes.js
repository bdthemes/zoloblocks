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
    TITLE_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    LINK_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BORDER_RADIUS,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
    CONTAINER_BORDER,
} from './constants';
import * as typographyObjs from './constants/typoPrefixConstant';
const attributes = {
    //Common Attributes
    uniqueId: {
        type: 'string',
    },
    resDevice: {
        type: 'string',
        default: 'Desktop',
    },
    blockStyle: {
        type: 'object',
    },

    isBrandName: {
        type: 'boolean',
        default: true,
    },
    isBrandLink: {
        type: 'boolean',
        default: true,
    },

    // content alignment
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT, {
        defaultAlign: 'center',
    }),
    ...generateDimensionAttributes(CONTENT_PADDING),
    // container
    ...generateResRangeAttributies(CONTAINER_HEIGHT),
    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),

    // hover
    ...generateNormalBGAttributes(CONTAINER_HOVER_BACKGROUND),
    ...generateBoxShadowAttributies(CONTAINER_HOVER_BOX_SHADOW),

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
    ...generateResAlignmentAttributies(TITLE_ALIGNMENT, {
        defaultAlign: '',
    }),

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
    },
    brandName: {
        type: 'string',
        default: 'Zalando',
    },
    brandNameTag: {
        type: 'string',
        default: 'h2',
    },
    brandLabel: {
        type: 'string',
        default: 'www.zalando.com',
    },
    brandDetailPageLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    titleTag: {
        type: 'string',
        default: 'h2',
    },
    textColor: {
        type: 'string',
    },
    linkColor: {
        type: 'string',
    },
    linkHoverColor: {
        type: 'string',
    },
    containerHoverBorderColor: {
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
};

export default attributes;
