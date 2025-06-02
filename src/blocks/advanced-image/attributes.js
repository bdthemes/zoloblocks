/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateMaskAttributes,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    PHOTO_MASK,
    PHOTO_ALIGN,
    CAPTION_ALIGN,
    CAPTION_MARGIN,
    IMG_BSHADOW,
    IMG_HBSHADOW,
    IMG_BORDER,
    IMG_BRADIUS,
    IMG_MARGIN,
    OVERLAY_BG,
    OVERLAY_BORDER,
    OVERLAY_BRADIUS,
    OVERLAY_EDGE_DISTANCE,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_MAX_WIDTH,
    HEADING_MARGIN,
    DESC_MARGIN,
    SEPARATOR_WIDTH,
    SEPARATOR_HEIGHT,
    SEPARATOR_MARGIN,
    IMG_WIDTH,
    IMGMAX_WIDTH,
    IMG_HEIGHT,
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
    // Generators
    ...generateMaskAttributes(PHOTO_MASK),
    ...generateResAlignmentAttributies(PHOTO_ALIGN),
    ...generateResAlignmentAttributies(CAPTION_ALIGN),
    ...generateResRangeAttributies(IMG_WIDTH),
    ...generateResRangeAttributies(IMGMAX_WIDTH, {
        defaultUnit: '%',
    }),
    ...generateResRangeAttributies(IMG_HEIGHT),
    ...generateBorderAttributies(IMG_BORDER),
    ...generateDimensionAttributes(IMG_BRADIUS),
    ...generateDimensionAttributes(IMG_MARGIN),
    ...generateBoxShadowAttributies(IMG_BSHADOW),
    ...generateBoxShadowAttributies(IMG_HBSHADOW),
    ...generateNormalBGAttributes(OVERLAY_BG),
    ...generateBorderAttributies(OVERLAY_BORDER),
    ...generateDimensionAttributes(OVERLAY_BRADIUS),
    ...generateResRangeAttributies(OVERLAY_EDGE_DISTANCE),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(CAPTION_MARGIN),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateResRangeAttributies(CONTENT_MAX_WIDTH),
    ...generateDimensionAttributes(HEADING_MARGIN),
    ...generateDimensionAttributes(DESC_MARGIN),
    ...generateResRangeAttributies(SEPARATOR_WIDTH),
    ...generateResRangeAttributies(SEPARATOR_HEIGHT),
    ...generateDimensionAttributes(SEPARATOR_MARGIN),
    // block specific
    photo: {
        type: 'object',
    },
    objectFit: {
        type: 'string',
        default: 'none',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    imgAlt: {
        type: 'string',
        default: '',
    },
    link: {
        type: 'object',
        default: {
            url: '',
            openInNewTab: false,
        },
    },
    hoverEffect: {
        type: 'string',
        default: '',
    },
    showCaption: {
        type: 'boolean',
        default: false,
    },
    caption: {
        type: 'string',
        default: '',
    },
    layout: {
        type: 'string',
        default: 'normal',
    },
    ocPosition: {
        type: 'string',
        default: 'center',
    },
    imgHoverBorder: {
        type: 'string',
    },
    onOpacity: {
        type: 'number',
    },
    ohOpacity: {
        type: 'number',
    },
    resizedWidth: {
        type: 'number',
    },
    captionColor: {
        type: 'string',
    },
    // content
    heading: {
        type: 'string',
        default: 'Advanced Image',
    },
    headingTag: {
        type: 'string',
        default: 'h2',
    },
    headingVisibleOn: {
        type: 'string',
        default: 'always_visible',
    },
    headingColor: {
        type: 'string',
    },

    // description
    description: {
        type: 'string',
        default: 'This is an advanced image block.',
    },
    descriptionVisibleOn: {
        type: 'string',
        default: 'hover_visible',
    },
    descriptionColor: {
        type: 'string',
    },

    // separator visible
    separatorVisibleOn: {
        type: 'string',
        default: 'hover_visible',
    },
    separatorColor: {
        type: 'string',
    },
    separatorStyle: {
        type: 'string',
        default: '',
    },
    separatorPosition: {
        type: 'string',
        default: 'after_title',
    },
};

export default attributes;
