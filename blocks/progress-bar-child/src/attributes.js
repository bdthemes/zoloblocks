/**
 * Internal dependencies
 */
const {
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    PROGRESS_BAR_BG_COLOR,
    PROGRESS_BG_COLOR,
    PROGRESS_HIGHT,
    PROGRESS_BAR_RADIUS,
    PROGRESS_TITLE_MARGIN,
    PROGRESS_VALUE_MARGIN,
    ITEM_BRADIUS,
    PROGRESS_PERCENT_GAP,
    PROGRESS_BSHADOW,
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
    // item
    ...generateDimensionAttributes(ITEM_BRADIUS),
    //title
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(PROGRESS_TITLE_MARGIN),
    ...generateResRangeAttributies(PROGRESS_TITLE_MARGIN),
    //progress value
    ...generateDimensionAttributes(PROGRESS_VALUE_MARGIN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //progress
    ...generateNormalBGAttributes(PROGRESS_BG_COLOR),
    ...generateResRangeAttributies(PROGRESS_HIGHT),
    ...generateBoxShadowAttributies(PROGRESS_BSHADOW),
    //progress bar
    ...generateNormalBGAttributes(PROGRESS_BAR_BG_COLOR),
    ...generateDimensionAttributes(PROGRESS_BAR_RADIUS),

    // Pro Presets
    ...generateResRangeAttributies(PROGRESS_PERCENT_GAP),

    preset: {
        type: 'string',
    },
    progressH: {
        type: 'number',
        default: 50,
    },
    barTitleToggle: {
        type: 'boolean',
        default: true,
    },
    titleColor: {
        type: 'string',
    },
    barpercentToggle: {
        type: 'boolean',
        default: true,
    },
    progressText: {
        type: 'string',
        default: 'Programming',
    },
    progressTextTag: {
        type: 'string',
        default: 'h5',
    },
    //progress value
    progressVColor: {
        type: 'string',
    },
};

export default attributes;
