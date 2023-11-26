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
    generateResCounterAttributies,
    generateResAlignmentAttributies,
} = window.zoloModule;

import {
    GRID_COLUMNS,
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
    READMORE_GAP,
    READMORE_BORDER,
    READMORE_BORDER_RADIUS,
    READMORE_MARGIN,
    READMORE_PADDING,
    AVATAR_GAP,
    AVATAR_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
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
    ...generateResCounterAttributies(GRID_COLUMNS, {
        deskRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateResRangeAttributies(COLUMNS_GAP),
    showThumbnail: {
        type: 'boolean',
        default: true,
    },
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    showTitle: {
        type: 'boolean',
        default: true,
    },
    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
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
    excerptColor: {
        type: 'string',
    },
    catColor: {
        type: 'string',
    },
    catBgColor: {
        type: 'string',
    },
    catHoverColor: {
        type: 'string',
    },
    catBgHoverColor: {
        type: 'string',
    },
    showReadMore: {
        type: 'boolean',
        default: false,
    },
    readMoreBtnText: {
        type: 'string',
        default: 'Read More',
    },
    showCategory: {
        type: 'boolean',
        default: true,
    },
    showAuthor: {
        type: 'boolean',
        default: true,
    },
    namePrefixColor: {
        type: 'string',
    },
    namePrefixHoverColor: {
        type: 'string',
    },
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    showMeta: {
        type: 'boolean',
        default: true,
    },
    metaColor: {
        type: 'string',
    },
    showPagination: {
        type: 'boolean',
        default: false,
    },
    // post meta
    showReadingTime: {
        type: 'boolean',
        default: false,
    },
    // readmore button
    showReadmoreText: {
        type: 'boolean',
        default: false,
    },
    showReadmoreIcon: {
        type: 'boolean',
        default: true,
    },
    readMoreIcon: {
        type: 'string',
        default: 'fas fa-arrow-right',
    },
    readMoreColor: {
        type: 'string',
    },
    readMoreBgColor: {
        type: 'string',
    },
    readMoreHoverColor: {
        type: 'string',
    },
    readMoreBgHoverColor: {
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

    ...generateResRangeAttributies(READMORE_GAP),
    ...generateBorderAttributies(READMORE_BORDER),
    ...generateDimensionAttributes(READMORE_BORDER_RADIUS),
    ...generateDimensionAttributes(READMORE_MARGIN),
    ...generateDimensionAttributes(READMORE_PADDING),

    ...generateResRangeAttributies(AVATAR_SIZE),
    ...generateBorderAttributies(AVATAR_BORDER),
    ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),
    ...generateResRangeAttributies(AVATAR_GAP),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // pagination
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateDimensionAttributes(PAG_MARGIN),
    ...generateDimensionAttributes(PAG_PADDING),
    ...generateResAlignmentAttributies(PAG_ALIGN),
};

export default attributes;
