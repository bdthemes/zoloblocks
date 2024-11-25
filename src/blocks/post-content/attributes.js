import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
const {
    generateTextShadowAttributies,
    generateTextStrokeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateResRangeAttributies,
} = window.zoloModule;

import {
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_SHADOW,
    CONTENT_HOVER_BG,
    CONTENT_HOVER_BORDER,
    CONTENT_HOVER_BRADIUS,
    CONTENT_HOVER_SHADOW,
    CONTENT_TEXT_SHADOW,
    CONTENT_TEXT_STROKE,
    //image
    THUMBNAIL_WIDTH,
    THUMBNAIL_HEIGHT,
    THUMBNAIL_BG,
    THUMBNAIL_PADDING,
    THUMBNAIL_MARGIN,
    THUMBNAIL_BORDER,
    THUMBNAIL_BRADIUS,
    THUMBNAIL_BOX_SHADOW,
    THUMBNAIL_HOVER_SHADOW,
    //heading
    HEADING_TEXT_SHADOW,
    HEADING_TEXT_STROKE,
    HEADING_MARGIN,
    //link
    LINK_BG,
    LINK_PADDING,
    LINK_MARGIN,
    LINK_BORDER,
    LINK_SHADOW,
    LINK_BORDER_RADIUS,
    LINK_HOVER_BG,
    LINK_HOVER_SHADOW,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';
import { TITLE_TEXT_SHADOW, TITLE_TEXT_STROKE } from '@/blocks/post-content/constants';

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
    styleTags: {
        type: 'array',
        default: [
            // { id: 1, type: 'image' },
            {
                id: 2,
                type: 'heading',
                hTags: [
                    { label: __('H1', 'zoloblocks'), value: 'h1' },
                    { label: __('H2', 'zoloblocks'), value: 'h2' },
                    { label: __('H3', 'zoloblocks'), value: 'h3' },
                    { label: __('H4', 'zoloblocks'), value: 'h4' },
                    { label: __('H5', 'zoloblocks'), value: 'h5' },
                    { label: __('H6', 'zoloblocks'), value: 'h6' },
                ],
            },
        ],
    },
    inheritThemeLayout: {
        type: 'boolean',
        default: false,
    },
    headingTags: {
        type: 'array',
        default: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    contentColor: {
        type: 'string',
    },
    contentHoverColor: {
        type: 'string',
    },
    thumbnailBorderHColor: {
        type: 'string',
    },
    headingHoverColor: {
        type: 'string',
    },
    headingColor: {
        type: 'string',
    },
    linkHoverColor: {
        type: 'string',
    },
    linkColor: {
        type: 'string',
    },

    linkHoverBorderColor: {
        type: 'string',
    },

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    ...generateResAlignmentAttributies(CONTENT_ALIGN),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(CONTENT_MARGIN),
    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTENT_SHADOW),
    ...generateNormalBGAttributes(CONTENT_HOVER_BG),
    ...generateBorderAttributies(CONTENT_HOVER_BORDER),
    ...generateDimensionAttributes(CONTENT_HOVER_BRADIUS),
    ...generateBoxShadowAttributies(CONTENT_HOVER_SHADOW),
    ...generateTextShadowAttributies(CONTENT_TEXT_SHADOW),
    ...generateTextStrokeAttributies(CONTENT_TEXT_STROKE),
    //image
    ...generateResRangeAttributies(THUMBNAIL_WIDTH),
    ...generateResRangeAttributies(THUMBNAIL_HEIGHT),
    ...generateNormalBGAttributes(THUMBNAIL_BG),
    ...generateDimensionAttributes(THUMBNAIL_PADDING),
    ...generateDimensionAttributes(THUMBNAIL_MARGIN),
    ...generateBorderAttributies(THUMBNAIL_BORDER),
    ...generateDimensionAttributes(THUMBNAIL_BRADIUS),
    ...generateBoxShadowAttributies(THUMBNAIL_BOX_SHADOW),
    ...generateBoxShadowAttributies(THUMBNAIL_HOVER_SHADOW),
    //heading
    ...generateTextShadowAttributies(HEADING_TEXT_SHADOW),
    ...generateTextStrokeAttributies(HEADING_TEXT_STROKE),
    ...generateDimensionAttributes(HEADING_MARGIN),
    //link
    ...generateNormalBGAttributes(LINK_BG),
    ...generateDimensionAttributes(LINK_PADDING),
    ...generateDimensionAttributes(LINK_MARGIN),
    ...generateBorderAttributies(LINK_BORDER),
    ...generateBoxShadowAttributies(LINK_SHADOW),
    ...generateDimensionAttributes(LINK_BORDER_RADIUS),
    ...generateNormalBGAttributes(LINK_HOVER_BG),
    ...generateBoxShadowAttributies(LINK_HOVER_SHADOW),
};

export default attributes;
