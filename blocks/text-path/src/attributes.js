/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateResAlignmentAttributies,
    generateTextStrokeAttributies,
} = window.zoloModule;

import { TEXTPATH_ALIGN, TEXTPATH_SIZE, TEXT_PATH_STROKE, TEXT_WORD_SPACING } from './constants';

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
    // ...generateResAlignmentAttributies(ITEMS_ALIGN),
    // ...generateDimensionAttributes(LABEL_MARGIN),
    // ...generateNormalBGAttributes(LABEL_BG),
    // ...generateDimensionAttributes(LABEL_PADDING),
    // ...generateDimensionAttributes(LABEL_BRADIUS),
    // ...generateBorderAttributies(LABEL_BORDER),
    // ...generateDimensionAttributes(FIELD_PADDING),
    // ...generateNormalBGAttributes(FIELD_BG),
    // ...generateBorderAttributies(FIELD_BORDER),
    // ...generateDimensionAttributes(FIELD_BRADIUS),
    // ...generateResRangeAttributies(ICON_SIZE),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    ...generateResAlignmentAttributies(TEXTPATH_ALIGN),
    ...generateResRangeAttributies(TEXTPATH_SIZE),
    ...generateTextStrokeAttributies(TEXT_PATH_STROKE),
    ...generateResRangeAttributies(TEXT_WORD_SPACING),

    textpathContent: {
        type: 'string',
        default: 'Add your curve text here',
    },
    textPathType: {
        type: 'string',
        default: 'wave',
    },
    pathlink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    textPathShow: {
        type: 'boolean',
        default: false,
    },
    textpathRotate: {
        type: 'number',
    },
    textpathLength: {
        type: 'number',
    },
    textPathColor: {
        type: 'string',
    },
    textPathHoverColor: {
        type: 'string',
    },
};

export default attributes;
