/**
 * Internal dependencies
 */
import * as typographyObjs from './constants/typoPrefixConstants';
import {
    PROGRESS_BG_COLOR,
    PROGRESS_HIGHT,
    PROGRESS_BAR_BG_COLOR,
    PROGRESS_BAR_RADIUS,
    PROGRESS_TITLE_MARGIN,
    PROGRESS_VALUE_MARGIN,
    ITEM_BRADIUS,
} from './constants';
const { generateTypographyAttributes, generateResRangeAttributies, generateDimensionAttributes, generateNormalBGAttributes } =
    window.zoloModule;

const attributes = {
    //Common Attributes
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
    // item
    ...generateDimensionAttributes(ITEM_BRADIUS),
    //title
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(PROGRESS_TITLE_MARGIN),
    //progress value
    ...generateDimensionAttributes(PROGRESS_VALUE_MARGIN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //progress
    ...generateNormalBGAttributes(PROGRESS_BG_COLOR),
    ...generateResRangeAttributies(PROGRESS_HIGHT),
    //progress bar
    ...generateNormalBGAttributes(PROGRESS_BAR_BG_COLOR),
    ...generateDimensionAttributes(PROGRESS_BAR_RADIUS),

    preset: {
        type: 'string',
    },
    titleToggle: {
        type: 'boolean',
        default: true,
    },
    percentToggle: {
        type: 'boolean',
        default: true,
    },
    titleColor: {
        type: 'string',
    },
    progressVColor: {
        type: 'string',
    },
    progressTextTag: {
        type: 'string',
        default: 'h5',
    },
};

export default attributes;
