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
    generateGapAttributes,
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
    META_SPACE,
    CONTENT_PADDING,
    META_ARROW_SPACE,
    META_BOX_WRAP_PADDING,
    FILTER_BORDER,
    FILTER_BORDER_RADIUS,
    FILTER_MARGIN,
    FILTER_ALIGN,
    FILTER_PADDING,
    FILTER_GAP,
    INNER_CONTENT_PADDING,
    INNER_CONTENT_MARGIN,
    INNER_CONTENT_BG,
    INNER_CONTENT_BORDER,
    INNER_CONTENT_BORDER_RADIUS,
    INNER_CONTENT_SHADOW,
    BOTTOM_CONTENT_SPACING,
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
    postTitleAnimation: {
        type: 'string',
        default: '',
    },
    titleAnimationTypeBgColor: {
        type: 'string',
    },

    showExcerpt: {
        type: 'boolean',
        default: false,
    },
    postTaxonomies: {
        type: 'object',
        default: {},
    },
    metaSeparator: {
        type: 'string',
        default: '//',
    },
    postQuery: {
        type: 'object',
        default: {
            postType: 'post',
            postExclude: [],
            postPerPage: 6,
            postOffset: 0,
            postOrderby: 'date',
            postOrder: 'desc',
            postThumbnail: '',
            showPagination: false,
            currentPostType: 'post',
        },
    },
    showFilterTaxonomy: {
        type: 'boolean',
        default: false,
    },
    postTerms: {
        type: 'array',
        default: [],
    },
    postTaxonomy: {
        type: 'string',
        default: 'category',
    },
    taxonomyName: {
        type: 'string',
        default: 'Category',
    },
    pageTotal: {
        type: 'number',
        default: 1,
    },
    paginationType: {
        type: 'string',
        default: 'normal',
    },
    previousText: {
        type: 'string',
        default: 'Prev',
    },
    nextText: {
        type: 'string',
        default: 'Next',
    },
    loadMoreText: {
        type: 'string',
        default: 'Load More',
    },
    authorPrefix: {
        type: 'string',
    },
    ...generateResCounterAttributies(GRID_COLUMNS, {
        deskRange: 3,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
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
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },

    namePrefixHoverColor: {
        type: 'string',
    },

    showMeta: {
        type: 'boolean',
        default: true,
    },
    metaColor: {
        type: 'string',
    },
    metaHColor: {
        type: 'string',
    },
    metaArrowColor: {
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
        default: true,
    },
    showReadmoreIcon: {
        type: 'boolean',
        default: false,
    },
    readMoreIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
    },
    readMoreColor: {
        type: 'string',
    },
    readMoreIconColor: {
        type: 'string',
    },
    readMoreBgColor: {
        type: 'string',
    },
    readMoreHoverColor: {
        type: 'string',
    },
    readMoreIconHoverColor: {
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
    //filter taxonomy
    filterColor: {
        type: 'string',
    },
    filterBgColor: {
        type: 'string',
    },
    filterBorderColor: {
        type: 'string',
    },
    filterAColor: {
        type: 'string',
    },
    filterABgColor: {
        type: 'string',
    },
    filterABorderColor: {
        type: 'string',
    },

    ...generateDimensionAttributes(COLUMN_PADDING),
    ...generateNormalBGAttributes(COLUMN_BG),
    ...generateBorderAttributies(COLUMN_BORDER),
    ...generateDimensionAttributes(COLUMN_BORDER_RADIUS),
    ...generateBoxShadowAttributies(COLUMN_SHADOW),

    ...generateDimensionAttributes(THUMBNAIL_MARGIN),

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

    //filter taxonomy
    ...generateBorderAttributies(FILTER_BORDER),
    ...generateDimensionAttributes(FILTER_BORDER_RADIUS),
    ...generateDimensionAttributes(FILTER_MARGIN),
    ...generateDimensionAttributes(FILTER_PADDING),
    ...generateResAlignmentAttributies(FILTER_ALIGN),
    ...generateGapAttributes(FILTER_GAP, {
        defaultUnit: 'px',
    }),
    // pagination
    ...generateBorderAttributies(PAG_BORDER),
    ...generateDimensionAttributes(PAG_BORDER_RADIUS),
    ...generateDimensionAttributes(PAG_MARGIN),
    ...generateDimensionAttributes(PAG_PADDING),
    ...generateResAlignmentAttributies(PAG_ALIGN),

    // post meta
    ...generateResRangeAttributies(META_SPACE),

    // content
    ...generateDimensionAttributes(CONTENT_PADDING),

    // inner content
    ...generateDimensionAttributes(INNER_CONTENT_PADDING),
    ...generateDimensionAttributes(INNER_CONTENT_MARGIN),
    ...generateNormalBGAttributes(INNER_CONTENT_BG),
    ...generateBorderAttributies(INNER_CONTENT_BORDER),
    ...generateDimensionAttributes(INNER_CONTENT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(INNER_CONTENT_SHADOW),
    ...generateResRangeAttributies(BOTTOM_CONTENT_SPACING),

    // post meta arrow space
    ...generateResRangeAttributies(META_ARROW_SPACE),

    // meta box wrap
    ...generateDimensionAttributes(META_BOX_WRAP_PADDING),
};

export default attributes;
