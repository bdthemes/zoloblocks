/**
 * Internal dependencies
 */
const { generateNormalBGAttributes, generateBorderAttributies, generateDimensionAttributes, generateBoxShadowAttributies } =
    window.zoloModule;

import { ITEM_BG, ITEM_PADDING, ITEM_MARGIN, ITEM_BORDER, ITEM_BORDER_RADIUS, ITEM_BOX_SHADOW } from './constants';

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
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateDimensionAttributes(ITEM_MARGIN),
    ...generateBoxShadowAttributies(ITEM_BOX_SHADOW),

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
        default: 'div',
    },
};

export default attributes;
