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
} = window.zoloModule;

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
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
    //grid system
    ...generateResRangeAttributies(GRID_COLUMNS, {
        noUnits: true,
    }),
    ...generateResRangeAttributies(COLUMNS_GAP, {
        defaultRange: 30,
    }),
    ...generateResRangeAttributies(ROWS_GAP, {
        defaultRange: 30,
    }),

    // global style for child blocks
    // content alignment
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),
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
    containerBackgroundColor: {
        type: 'string',
    },
    containerBackgroundHoverColor: {
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
};

export default attributes;
