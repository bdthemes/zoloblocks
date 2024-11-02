import {
    //Image
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    //title
    TITLE_MARGIN,
    //submit btn
    BTN_PADDING,
    BTN_MARGIN,
    BTN_BORDER,
    BTN_BORDER_RADIUS,
} from './constants';

/**
 * Internal dependencies
 */
const {
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateResRangeAttributies,
} = window.zoloModule;

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
    postTitleAnimation: {
        type: 'string',
        default: '',
    },
    titleAnimationTypeBgColor: {
        type: 'string',
    },
    showImage: {
        type: 'boolean',
        default: false,
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showBtn: {
        type: 'boolean',
        default: true,
    },
    showCategoryBased: {
        type: 'boolean',
        default: false,
    },
    selectedTaxonomy: {
        type: 'string',
    },
    previousPost: {
        type: 'string',
        default: 'Previous Post',
    },
    previousPostIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>',
    },
    nextPost: {
        type: 'string',
        default: 'Next Post',
    },
    nextPostIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>',
    },

    thumbnailSize: {
        type: 'string',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //thumbnail
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    ...generateBorderAttributies(THUMBNAIL_BORDER),
    ...generateDimensionAttributes(THUMBNAIL_BRADIUS),
    ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),
    //title
    ...generateDimensionAttributes(TITLE_MARGIN),
    //button
    ...generateDimensionAttributes(BTN_PADDING),
    ...generateDimensionAttributes(BTN_MARGIN),
    ...generateBorderAttributies(BTN_BORDER),
    ...generateDimensionAttributes(BTN_BORDER_RADIUS),
    //title
    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
    },
    //prev/next btn
    btnColor: {
        type: 'string',
    },
    btnBgColor: {
        type: 'string',
    },
    btnHoverColor: {
        type: 'string',
    },
    btnBgHoverColor: {
        type: 'string',
    },
    btnBorderHoverColor: {
        type: 'string',
    },
};
export default attributes;
