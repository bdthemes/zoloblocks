/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    THUMBNAIL_PADDING,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BG,
    THUMBNAIL_BORDER,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW,
    TITLE_MARGIN,
    EXCERPT_MARGIN,
    META_MARGIN,
    CAT_GAP,
    CAT_BORDER,
    CAT_BORDER_RADIUS,
    CAT_MARGIN,
    CAT_PADDING,
    COUNT_SIZE,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_MARGIN,
    PAG_ALIGN,
    PAG_PADDING,
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
    showExcerpt: {
        type: 'boolean',
        default: false,
    },
    postTaxonomies: {
        type: 'object',
        default: {},
    },

    postQuery: {
        type: 'object',
    },
    //layout
    preset: {
        type: 'string',
        default: 'style-1',
    },
    ...generateResRangeAttributies(COLUMNS_GAP, {
        defaultRange: 30,
    }),
    showThumbnail: {
        type: 'boolean',
        default: true,
    },
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    showTitle: {
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
    showExcerpt: {
        type: 'boolean',
        default: false,
    },
    excerptWords: {
        type: 'number',
        default: 15,
    },
    excerptindicator: {
        type: 'string',
        default: '...',
    },
    showCategory: {
        type: 'boolean',
        default: true,
    },
    showCount: {
        type: 'boolean',
        default: false,
    },
    readMoreBtnText: {
        type: 'string',
        default: 'Read More',
    },
    showMeta: {
        type: 'boolean',
        default: true,
    },
    showPagination: {
        type: 'boolean',
        default: false,
    },
    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
    },
    excerptColor: {
        type: 'string',
    },
    catBgColor: {
        type: 'string',
    },
    catColor: {
        type: 'string',
    },
    catBgHoverColor: {
        type: 'string',
    },
    catHoverColor: {
        type: 'string',
    },
    countColor: {
        type: 'string',
    },
    countBGColor: {
        type: 'string',
    },
    countHoverColor: {
        type: 'string',
    },
    countHoverBGColor: {
        type: 'string',
    },
    metaColor: {
        type: 'string',
    },
    // pagination
    pagColor: {
        type: 'string',
    },
    pagBgColor: {
        type: 'string',
    },
    apagColor: {
        type: 'string',
    },
    apagBgColor: {
        type: 'string',
    },
    pagSeparatorColor: {
        type: 'string',
    },
    ...generateDimensionAttributes(COLUMN_PADDING),
    ...generateNormalBGAttributes(COLUMN_BG),
    ...generateBorderAttributies(COLUMN_BORDER),
    ...generateDimensionAttributes(COLUMN_BORDER_RADIUS),
    ...generateBoxShadowAttributies(COLUMN_SHADOW),

    ...generateDimensionAttributes(THUMBNAIL_MARGIN),
    ...generateDimensionAttributes(THUMBNAIL_PADDING),
    ...generateBorderAttributies(THUMBNAIL_BORDER),
    ...generateDimensionAttributes(THUMBNAIL_BORDER_RADIUS),
    ...generateNormalBGAttributes(THUMBNAIL_BG),
    ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),

    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(EXCERPT_MARGIN),
    ...generateDimensionAttributes(META_MARGIN),

    ...generateResRangeAttributies(CAT_GAP),
    ...generateBorderAttributies(CAT_BORDER),
    ...generateDimensionAttributes(CAT_BORDER_RADIUS),
    ...generateDimensionAttributes(CAT_MARGIN),
    ...generateDimensionAttributes(CAT_PADDING),

    ...generateResRangeAttributies(COUNT_SIZE),
    ...generateBorderAttributies(COUNT_BORDER),
    ...generateDimensionAttributes(COUNT_BORDER_RADIUS),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // pagination
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateDimensionAttributes(PAG_MARGIN),
    ...generateDimensionAttributes(PAG_PADDING),
    ...generateResAlignmentAttributies(PAG_ALIGN),
};

export default attributes;
