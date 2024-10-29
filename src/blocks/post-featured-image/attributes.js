import {
    //Image
    THUMBNAIL_ALIGN,
    THUMBNAIL_WIDTH,
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_HOVER_SHADOW,
} from './constants';

/**
 * Internal dependencies
 */
const {
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateResRangeAttributies,
} = window.zoloModule;

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
    isLink: {
        type: 'boolean',
        default: false,
    },
    linkTarget: {
        type: 'boolean',
        default: false,
    },
    linkRel: {
        type: 'string',
    },
    thumbnailSize: {
        type: 'string',
    },
    useFirstImageFromPost: {
        type: 'boolean',
        default: false,
    },
    borderHoverColor: {
        type: 'string',
    },
    //thumbnail
    ...generateResAlignmentAttributies(THUMBNAIL_ALIGN),
    ...generateResRangeAttributies(THUMBNAIL_WIDTH),
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    ...generateBorderAttributies(THUMBNAIL_BORDER),
    ...generateDimensionAttributes(THUMBNAIL_BRADIUS),
    ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),
    ...generateBoxShadowAttributies(THUMBNAIL_HOVER_SHADOW),
};
export default attributes;
