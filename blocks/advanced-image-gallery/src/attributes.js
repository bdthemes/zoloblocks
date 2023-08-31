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
    IMAGE_HOVER_BORDER,
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
} from './constants';

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
    ...generateBorderAttributies(IMAGE_HOVER_BORDER),
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

    // column count
    ...generateResCounterAttributies(COLUMN_COUNT, {
        defaultRange: 3,
    }),
    //columns gaps
    ...generateResRangeAttributies(COLUMNS_GAP),
    //row gaps
    ...generateResRangeAttributies(ROW_GAP),

    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'style-1',
    },
    advancedGallery: {
        type: 'array',
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
};

export default attributes;
